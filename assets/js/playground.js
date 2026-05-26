/* ============================================================
   VizLearn — Playground Engine (Pyodide)
   Author: Adewale Samson Adeagbo
   ============================================================ */

const PYODIDE_CDN = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';

let pyodide = null;
let pyodideReady = false;
let lastImageData = null;

const statusDot   = document.getElementById('pyodide-dot');
const statusText  = document.getElementById('pyodide-status');
const editor      = document.getElementById('editor');
const runBtn      = document.getElementById('run-btn');
const outputScroll= document.getElementById('output-scroll');
const outputEmpty = document.getElementById('output-empty');
const consoleLog  = document.getElementById('console-log');

// ── DEFAULT STARTER CODE ──────────────────────────────────────
const DEFAULT_CODE = `import matplotlib.pyplot as plt
import numpy as np

# ── Simple line chart ──────────────────────────────────────
x = np.linspace(0, 2 * np.pi, 200)
y = np.sin(x)
y2 = np.cos(x)

fig, ax = plt.subplots(figsize=(8, 4))
ax.plot(x, y,  color='#00e5a0', linewidth=2.5, label='sin(x)')
ax.plot(x, y2, color='#00b4d8', linewidth=2.5, linestyle='--', label='cos(x)')

ax.set_title('Sine & Cosine Waves', fontsize=15, fontweight='bold', pad=14)
ax.set_xlabel('x (radians)')
ax.set_ylabel('Amplitude')
ax.legend()
ax.grid(True, linestyle='--', alpha=0.3)
fig.tight_layout()
plt.show()
`;

// Load from localStorage if arriving from gallery
const savedCode = localStorage.getItem('vizlearn_playground_code');
if (savedCode) {
  editor.value = savedCode;
  localStorage.removeItem('vizlearn_playground_code');
} else {
  editor.value = DEFAULT_CODE;
}

// ── LOAD PYODIDE ──────────────────────────────────────────────
async function loadPyodideEngine() {
  try {
    statusDot.className = 'status-dot';
    statusText.textContent = 'Loading Python (Pyodide)... this takes ~20s on first visit.';

    const script = document.createElement('script');
    script.src = PYODIDE_CDN;
    document.head.appendChild(script);

    await new Promise((res, rej) => {
      script.onload = res;
      script.onerror = () => rej(new Error('Failed to load Pyodide script'));
    });

    pyodide = await loadPyodide();
    statusText.textContent = 'Installing packages (matplotlib, numpy, seaborn, pandas)...';

    await pyodide.loadPackage(['matplotlib', 'numpy', 'micropip']);
    const micropip = pyodide.pyimport('micropip');
    await micropip.install(['seaborn', 'pandas', 'plotly']);

    // Set matplotlib backend to Agg (non-interactive, for image capture)
    await pyodide.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns
print("✓ All libraries loaded: matplotlib, numpy, pandas, seaborn")
`);

    pyodideReady = true;
    statusDot.className = 'status-dot ready';
    statusText.textContent = 'Python ready ✓ — matplotlib · numpy · seaborn · pandas · plotly';
    runBtn.disabled = false;

  } catch (err) {
    statusDot.className = 'status-dot error';
    statusText.textContent = 'Failed to load Python: ' + err.message;
    console.error(err);
  }
}

loadPyodideEngine();

// ── RUN CODE ──────────────────────────────────────────────────
async function runCode() {
  if (!pyodideReady) {
    alert('Python is still loading. Please wait a moment.');
    return;
  }

  const code = editor.value.trim();
  if (!code) return;

  runBtn.innerHTML = '<span class="run-spinner"></span> Running...';
  runBtn.disabled = true;

  outputScroll.innerHTML = '';
  if (outputEmpty) outputEmpty.style.display = 'none';
  document.getElementById('run-time').textContent = '';

  const startTime = Date.now();
  let stdout = '';
  let images = [];

  try {
    // Capture stdout
    pyodide.setStdout({ batched: (text) => { stdout += text + '\n'; } });
    pyodide.setStderr({ batched: (text) => { stdout += '⚠ ' + text + '\n'; } });

    // Inject image capture wrapper
    const wrappedCode = `
import matplotlib
import matplotlib.pyplot as plt
import base64, io, json

_captured_figs = []

_orig_show = plt.show
def _patched_show(*args, **kwargs):
    figs = [plt.figure(i) for i in plt.get_fignums()]
    for fig in figs:
        buf = io.BytesIO()
        fig.savefig(buf, format='png', bbox_inches='tight', dpi=120, facecolor='#0d1117')
        buf.seek(0)
        _captured_figs.append(base64.b64encode(buf.read()).decode('utf-8'))
        plt.close(fig)

plt.show = _patched_show

${code}

# Auto-capture if plt.show() was not called but figures exist
if plt.get_fignums():
    _patched_show()

_captured_figs
`;

    const result = await pyodide.runPythonAsync(wrappedCode);
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    document.getElementById('run-time').textContent = `⏱ ${elapsed}s`;

    // Extract base64 images
    if (result && result.toJs) {
      images = result.toJs() || [];
    } else if (Array.isArray(result)) {
      images = result;
    }

    // Render stdout
    if (stdout.trim()) {
      const pre = document.createElement('pre');
      pre.className = 'output-stdout';
      pre.textContent = stdout.trim();
      outputScroll.appendChild(pre);
      consoleLog.textContent += stdout;
    }

    // Render images
    if (images.length > 0) {
      images.forEach((b64, idx) => {
        const img = document.createElement('img');
        img.src = 'data:image/png;base64,' + b64;
        img.className = 'output-image';
        img.alt = 'Chart ' + (idx + 1);
        outputScroll.appendChild(img);
        lastImageData = b64;
      });
    } else if (!stdout.trim()) {
      const msg = document.createElement('p');
      msg.style.cssText = 'color:var(--text-muted);font-size:0.85rem;text-align:center;margin-top:40px;';
      msg.textContent = 'Code ran successfully (no output). Make sure you call plt.show() at the end.';
      outputScroll.appendChild(msg);
    }

    // Reset plt.show
    await pyodide.runPythonAsync(`plt.show = _orig_show`);

  } catch (err) {
    const errDiv = document.createElement('div');
    errDiv.className = 'output-err';
    errDiv.textContent = err.message || String(err);
    outputScroll.appendChild(errDiv);
    consoleLog.textContent += '\n[ERROR]\n' + (err.message || String(err));
  }

  runBtn.innerHTML = '▶ Run Code';
  runBtn.disabled = false;
  // Log to progress dashboard
  if (window.VizLearnLogPlaygroundRun) window.VizLearnLogPlaygroundRun();
}

// ── EVENT LISTENERS ───────────────────────────────────────────
document.getElementById('run-btn').addEventListener('click', runCode);

// Ctrl+Enter / Cmd+Enter to run
editor.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    runCode();
  }
  // Tab inserts spaces
  if (e.key === 'Tab') {
    e.preventDefault();
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.value = editor.value.substring(0, start) + '    ' + editor.value.substring(end);
    editor.selectionStart = editor.selectionEnd = start + 4;
  }
});

// Line/col counter
editor.addEventListener('keyup', updateCursor);
editor.addEventListener('click', updateCursor);
function updateCursor() {
  const text = editor.value.substring(0, editor.selectionStart);
  const lines = text.split('\n');
  const lineNum = lines.length;
  const col = lines[lines.length - 1].length + 1;
  const el = document.getElementById('line-count');
  if (el) el.textContent = `Lines: ${lineNum} | Col: ${col}`;
}

// Clear / Reset buttons
document.getElementById('clear-btn').addEventListener('click', () => {
  outputScroll.innerHTML = '';
  const emp = document.getElementById('output-empty');
  if (emp) {
    emp.style.display = 'flex';
    outputScroll.appendChild(emp);
  }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm('Reset editor to default code?')) {
    editor.value = DEFAULT_CODE;
  }
});

// Download last image
document.getElementById('download-btn').addEventListener('click', () => {
  if (!lastImageData) { alert('Run some code first to generate a chart.'); return; }
  const a = document.createElement('a');
  a.href = 'data:image/png;base64,' + lastImageData;
  a.download = 'vizlearn_chart.png';
  a.click();
});

// Snippet select dropdown
document.getElementById('snippet-select').addEventListener('change', function() {
  const key = this.value;
  if (!key) return;
  const code = SNIPPETS[key];
  if (code) {
    editor.value = code;
    this.value = '';
  }
});

// ── TABS ──────────────────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const targetId = this.getAttribute('data-tab');
    const parent = this.closest('.pg-left, .pg-right');
    if (!parent) return;
    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('active');
  });
});

// ── SNIPPET LIBRARY CARDS ─────────────────────────────────────
function buildSnippetLibrary() {
  const lib = document.getElementById('snippet-lib');
  if (!lib || !window.SNIPPETS) return;

  const meta = {
    mpl_line:    { title: 'Line Plot',           desc: 'Basic matplotlib line chart with labels', lib: 'MPL' },
    mpl_bar:     { title: 'Bar Chart',           desc: 'Vertical bar chart with custom colors',   lib: 'MPL' },
    mpl_scatter: { title: 'Scatter Plot',        desc: 'Scatter plot with color mapping',         lib: 'MPL' },
    mpl_hist:    { title: 'Histogram',           desc: 'Distribution histogram with KDE line',    lib: 'MPL' },
    mpl_pie:     { title: 'Pie Chart',           desc: 'Pie with explode and percentages',        lib: 'MPL' },
    mpl_subplot: { title: 'Subplots (2×2)',      desc: 'Multiple plots in a single figure',       lib: 'MPL' },
    mpl_heatmap: { title: 'Heatmap (imshow)',    desc: 'Matrix heatmap with colorbar',            lib: 'MPL' },
    mpl_style:   { title: 'Custom Styling',      desc: 'Fonts, spines, grid, tick customization', lib: 'MPL' },
    sns_scatter: { title: 'Scatter Plot',        desc: 'Statistical scatter with hue & size',     lib: 'SNS' },
    sns_dist:    { title: 'Distribution',        desc: 'histplot with KDE overlay',               lib: 'SNS' },
    sns_box:     { title: 'Box Plot',            desc: 'Boxplot for comparing distributions',     lib: 'SNS' },
    sns_violin:  { title: 'Violin Plot',         desc: 'Combined KDE and boxplot',                lib: 'SNS' },
    sns_heatmap: { title: 'Correlation Heatmap', desc: 'Annotated correlation matrix heatmap',    lib: 'SNS' },
    sns_pairplot:{ title: 'Pair Plot',           desc: 'Pairwise relationships in dataset',       lib: 'SNS' },
    sns_bar:     { title: 'Bar Plot',            desc: 'Categorical bar plot with CI bars',       lib: 'SNS' },
    sns_line:    { title: 'Line Plot',           desc: 'Time-series line with confidence band',   lib: 'SNS' },
    plotly_scatter:{ title: 'Interactive Scatter', desc: 'Plotly Express scatter with hover',    lib: 'PLY' },
    plotly_bar:  { title: 'Interactive Bar',     desc: 'Plotly grouped bar chart',                lib: 'PLY' },
    plotly_line: { title: 'Interactive Line',    desc: 'Multi-line chart with range slider',      lib: 'PLY' },
    plotly_pie:  { title: 'Interactive Pie',     desc: 'Donut/pie chart with pull effect',        lib: 'PLY' },
    pd_line:     { title: 'df.plot() Line',      desc: 'Pandas built-in line chart',              lib: 'PD'  },
    pd_bar:      { title: 'df.plot.bar()',       desc: 'Pandas stacked bar chart',                lib: 'PD'  },
    pd_hist:     { title: 'df.plot.hist()',      desc: 'Pandas histogram from DataFrame',         lib: 'PD'  },
    pd_box:      { title: 'df.plot.box()',       desc: 'Pandas box plot from DataFrame',          lib: 'PD'  },
  };

  const colors = { MPL: '#2e86c1', SNS: '#1e8449', PLY: '#9b59b6', PD: '#d35400' };

  Object.keys(meta).forEach(key => {
    const m = meta[key];
    const card = document.createElement('div');
    card.className = 'snip-card';
    card.innerHTML = `
      <h4><span style="font-family:var(--font-mono);font-size:0.68rem;background:rgba(${key.startsWith('mpl')?'46,134,193':key.startsWith('sns')?'30,132,73':key.startsWith('plotly')?'155,89,182':'211,84,0'},0.15);color:${colors[m.lib]};padding:2px 6px;border-radius:4px;margin-right:6px;">${m.lib}</span>${m.title}</h4>
      <p>${m.desc}</p>
    `;
    card.addEventListener('click', () => {
      const code = SNIPPETS[key];
      if (code) {
        editor.value = code;
        // Switch to editor tab
        const editorTab = document.querySelector('[data-tab="editor-tab"]');
        if (editorTab) editorTab.click();
      }
    });
    lib.appendChild(card);
  });
}

// Build snippet library after snippets.js has loaded
window.addEventListener('load', buildSnippetLibrary);

// ── CODE ANNOTATOR ────────────────────────────────────────────
document.getElementById('annotate-btn').addEventListener('click', function() {
  const code = document.getElementById('ann-input').value.trim();
  const result = document.getElementById('ann-result');
  if (!code) { result.innerHTML = '<p style="color:var(--text-dim);">Please paste some code first.</p>'; return; }

  const lines = code.split('\n').filter(l => l.trim());
  let html = '<h3 style="font-family:var(--font-head);font-size:0.9rem;font-weight:700;margin-bottom:14px;color:var(--accent);">Line-by-Line Annotation</h3>';
  html += '<div style="border:1px solid var(--border);border-radius:10px;overflow:hidden;">';
  html += `<div style="display:grid;grid-template-columns:1fr 1fr;background:var(--bg3);padding:8px 14px;font-size:0.7rem;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--text-dim);">
    <span>Code</span><span>Explanation</span></div>`;

  lines.forEach(line => {
    const explanation = annotateOneLine(line.trim());
    if (!explanation) return;
    html += `<div class="ann-line">
      <span class="ann-code">${escHtml(line)}</span>
      <span class="ann-explain">${explanation}</span>
    </div>`;
  });
  html += '</div>';
  result.innerHTML = html;
});

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function annotateOneLine(line) {
  if (!line || line.startsWith('#')) return line.startsWith('#') ? '<em style="color:var(--text-dim);">Comment — ignored during execution</em>' : null;

  const rules = [
    [/^import matplotlib\.pyplot as plt/, 'Imports the main matplotlib plotting module and aliases it as <code>plt</code>. This is the standard alias used everywhere.'],
    [/^import matplotlib/, 'Imports the matplotlib library. matplotlib is the foundational visualization library in Python.'],
    [/^import seaborn as sns/, 'Imports the seaborn library as <code>sns</code>. Seaborn builds on matplotlib and provides beautiful statistical chart defaults.'],
    [/^import numpy as np/, 'Imports NumPy as <code>np</code>. NumPy provides fast arrays and math functions used for generating data.'],
    [/^import pandas as pd/, 'Imports pandas as <code>pd</code>. pandas DataFrames are the standard data container for seaborn and plotly.'],
    [/^import plotly/, 'Imports plotly — an interactive charting library that renders HTML-based charts with hover and zoom.'],
    [/plt\.figure\(/, '<code>plt.figure()</code> creates a new figure object. <code>figsize=(w,h)</code> sets width and height in inches. <code>dpi</code> controls resolution.'],
    [/fig,\s*ax\s*=\s*plt\.subplots/, '<code>plt.subplots()</code> creates a Figure (<code>fig</code>) and one or more Axes (<code>ax</code>) at once. Most professional code uses this OOP style.'],
    [/fig,\s*axes\s*=\s*plt\.subplots/, 'Creates multiple Axes. <code>axes</code> is a 2D array when nrows and ncols are both > 1; use <code>axes[row, col]</code> to access each subplot.'],
    [/ax\.plot\(/, '<code>ax.plot(x, y)</code> draws a line chart. Key params: <code>color</code> (line color), <code>linewidth</code> (thickness), <code>linestyle</code> (-, --, :), <code>label</code> (legend text), <code>marker</code> (point shape).'],
    [/plt\.plot\(/, '<code>plt.plot(x, y)</code> draws a line using the state-machine interface. Simpler but less flexible than the OOP ax.plot() style for complex charts.'],
    [/ax\.scatter\(/, '<code>ax.scatter(x, y)</code> draws individual points. Use <code>c</code> for color array, <code>s</code> for size array, <code>alpha</code> for transparency, <code>cmap</code> for colormap.'],
    [/ax\.bar\(/, '<code>ax.bar(x, height)</code> draws vertical bars. Use <code>width</code> to control bar width, <code>color</code> for fill, <code>edgecolor</code> for borders, <code>bottom</code> for stacking.'],
    [/ax\.barh\(/, '<code>ax.barh()</code> draws horizontal bars — useful when category names are long. All ax.bar() params apply.'],
    [/ax\.hist\(/, '<code>ax.hist(data)</code> draws a histogram. Key params: <code>bins</code> (number of buckets), <code>density</code> (normalize to probability), <code>alpha</code> (transparency), <code>edgecolor</code>.'],
    [/ax\.pie\(/, '<code>ax.pie(x)</code> draws a pie chart. <code>labels</code> names each slice, <code>autopct</code> adds % labels, <code>explode</code> offsets a slice, <code>startangle</code> rotates start position.'],
    [/ax\.set_title\(/, '<code>ax.set_title()</code> sets the chart title. <code>fontsize</code> and <code>fontweight</code> style the text. <code>pad</code> controls spacing above the chart.'],
    [/ax\.set_xlabel\(/, '<code>ax.set_xlabel()</code> labels the x-axis. Always label your axes in data science — it tells the reader what the data represents.'],
    [/ax\.set_ylabel\(/, '<code>ax.set_ylabel()</code> labels the y-axis. Include the unit of measurement (e.g. "Revenue (USD)") when applicable.'],
    [/ax\.legend\(/, '<code>ax.legend()</code> shows the chart legend. Position with <code>loc</code> (e.g. "upper left"), or use <code>bbox_to_anchor</code> for precise placement.'],
    [/ax\.grid\(/, '<code>ax.grid(True)</code> enables gridlines. Use <code>linestyle="--"</code> for dashed, <code>alpha</code> for transparency, and <code>axis="y"</code> for only horizontal lines.'],
    [/ax\.set_xlim\(/, '<code>ax.set_xlim(min, max)</code> sets the visible range of the x-axis. Useful for zooming into a specific data region.'],
    [/ax\.set_ylim\(/, '<code>ax.set_ylim(min, max)</code> sets the visible range of the y-axis.'],
    [/ax\.set_xticks\(/, '<code>ax.set_xticks()</code> sets exact tick positions on the x-axis. Pair with <code>ax.set_xticklabels()</code> to customize tick labels.'],
    [/ax\.tick_params\(/, '<code>ax.tick_params()</code> controls tick appearance: <code>labelsize</code> (font size), <code>rotation</code> (angle), <code>colors</code> (tick color), <code>direction</code> (in/out/inout).'],
    [/fig\.tight_layout\(/, '<code>fig.tight_layout()</code> automatically adjusts spacing between subplots to prevent overlapping titles, labels, and axes.'],
    [/plt\.tight_layout\(/, '<code>plt.tight_layout()</code> same as above — adjusts layout automatically. Always call this before plt.show() or fig.savefig().'],
    [/plt\.show\(/, '<code>plt.show()</code> renders and displays the figure. In Jupyter/Colab this is sometimes optional, but always required in scripts. In VizLearn, this triggers chart capture.'],
    [/plt\.savefig\(/, '<code>plt.savefig(filename)</code> saves the figure to disk. Use <code>dpi=150</code> or higher for print quality. Supports .png, .pdf, .svg formats.'],
    [/sns\.scatterplot\(/, '<code>sns.scatterplot(data=df, x=..., y=...)</code> creates a statistical scatter plot. <code>hue</code> colors by category, <code>size</code> scales points, <code>palette</code> selects the color scheme.'],
    [/sns\.histplot\(/, '<code>sns.histplot()</code> draws a histogram with optional KDE overlay. <code>kde=True</code> adds a smooth density curve. <code>hue</code> overlays multiple distributions.'],
    [/sns\.boxplot\(/, '<code>sns.boxplot()</code> shows distribution quartiles, median, and outliers. <code>x</code> sets the category axis. Great for comparing groups.'],
    [/sns\.violinplot\(/, '<code>sns.violinplot()</code> combines a box plot with a KDE — shows the full shape of the distribution. Use <code>split=True</code> to compare two groups side-by-side.'],
    [/sns\.heatmap\(/, '<code>sns.heatmap(data)</code> draws a color-coded matrix. <code>annot=True</code> shows values, <code>fmt=".2f"</code> formats them, <code>cmap</code> sets the colormap, <code>linewidths</code> adds cell borders.'],
    [/sns\.pairplot\(/, '<code>sns.pairplot(df)</code> creates a grid of scatter plots for all numeric column pairs, with distribution plots on the diagonal. Essential for EDA.'],
    [/sns\.barplot\(/, '<code>sns.barplot()</code> draws bars with confidence intervals (95% CI by default). Uses bootstrapping to estimate uncertainty — more informative than plain matplotlib bars.'],
    [/sns\.lineplot\(/, '<code>sns.lineplot()</code> draws a line with a confidence band. <code>hue</code> draws multiple lines. Ideal for time-series with uncertainty.'],
    [/sns\.set_theme\(|sns\.set_style\(/, '<code>sns.set_theme(style=...)</code> applies a global seaborn style. Options: "darkgrid", "whitegrid", "dark", "white", "ticks". Call this once at the top of your script.'],
    [/sns\.set_palette\(/, '<code>sns.set_palette()</code> sets the global default color palette. Options: "Set2", "muted", "bright", "deep", "colorblind", "husl", "coolwarm", etc.'],
    [/px\.scatter\(/, '<code>px.scatter(df, x=..., y=...)</code> creates an interactive Plotly scatter plot. <code>color</code>, <code>size</code>, <code>hover_data</code>, and <code>animation_frame</code> all supported.'],
    [/px\.bar\(/, '<code>px.bar()</code> creates an interactive bar chart. <code>barmode="group"</code> places bars side-by-side; <code>barmode="stack"</code> stacks them.'],
    [/px\.line\(/, '<code>px.line()</code> creates an interactive line chart. Uses WebGL rendering for large datasets.'],
    [/px\.pie\(/, '<code>px.pie(df, names=..., values=...)</code> creates an interactive pie/donut chart. <code>hole=0.4</code> makes it a donut.'],
    [/fig\.show\(/, '<code>fig.show()</code> (Plotly) renders the interactive chart. In Jupyter, use <code>fig.show()</code>. Charts are fully interactive with hover, zoom, and pan built in.'],
    [/\.update_layout\(/, '<code>fig.update_layout()</code> (Plotly) controls overall figure styling: title, axis labels, legend position, background color, margins, fonts.'],
    [/df\.plot\(/, '<code>df.plot()</code> Pandas built-in plot wrapper. <code>kind</code> sets chart type: "line", "bar", "barh", "hist", "box", "kde", "area", "scatter", "pie".'],
    [/df\.plot\.bar\(/, '<code>df.plot.bar()</code> Pandas bar chart. Automatically uses DataFrame column names as labels. <code>stacked=True</code> creates stacked bars.'],
    [/df\.plot\.hist\(/, '<code>df.plot.hist()</code> Pandas histogram. Plots all numeric columns. <code>bins</code> controls resolution. <code>alpha</code> prevents overlap when plotting multiple columns.'],
    [/df\.plot\.box\(/, '<code>df.plot.box()</code> Pandas box plot for each numeric column. Quick EDA tool — shows median, IQR, and outliers at a glance.'],
    [/\.corr\(/, '<code>df.corr()</code> computes the pairwise Pearson correlation matrix. Values range from -1 (perfect negative) to +1 (perfect positive). Used as input to sns.heatmap() for correlation heatmaps.'],
    [/np\.linspace\(/, '<code>np.linspace(start, stop, num)</code> generates <code>num</code> evenly-spaced values from start to stop. Use to create smooth x-axis arrays for mathematical functions.'],
    [/np\.arange\(/, '<code>np.arange(start, stop, step)</code> generates values with fixed step size. Like Python range() but returns a NumPy array.'],
    [/np\.random/, 'NumPy random module for generating synthetic data. <code>np.random.randn(n)</code> = normal distribution, <code>np.random.rand(n)</code> = uniform [0,1], <code>np.random.randint()</code> = integers.'],
    [/cmap=/, '<code>cmap</code> sets the colormap. Common choices: "viridis" (sequential, colorblind-safe), "coolwarm" (diverging), "Blues", "Reds", "YlOrRd", "RdYlGn". Avoid "jet" (misleading gradients).'],
    [/alpha=/, '<code>alpha</code> controls transparency (0 = fully transparent, 1 = fully opaque). Use to reveal overlapping points or layers in complex charts.'],
    [/palette=/, '<code>palette</code> (seaborn) sets the color scheme for categorical data. Options: "Set1/2/3", "tab10", "husl", "colorblind", "muted", or any matplotlib colormap name.'],
    [/figsize=/, '<code>figsize=(width, height)</code> sets figure dimensions in inches. Standard: (8,5) for single plots, (12,5) for wide layouts, (10,8) for tall figures.'],
    [/fontsize=/, '<code>fontsize</code> sets text size. Typical ranges: 10-12 for body text, 13-16 for titles, 8-10 for tick labels.'],
    [/color=/, '<code>color</code> sets the color of chart elements. Accepts: named colors ("blue"), hex codes ("#2e86c1"), RGB tuples ((0.2, 0.5, 0.8)).'],
    [/linewidth=|lw=/, '<code>linewidth</code> (or <code>lw</code>) sets the thickness of lines in points. 1-2 for thin lines, 2.5-4 for bold lines.'],
    [/marker=/, '<code>marker</code> sets the shape of data points on line or scatter plots. Options: "o" (circle), "s" (square), "^" (triangle), "D" (diamond), "*" (star), "+" (plus).'],
    [/label=/, '<code>label</code> is the text that appears in the legend for this data series. Must also call <code>ax.legend()</code> to display it.'],
    [/edgecolor=/, '<code>edgecolor</code> sets the border color around shapes (bars, patches, scatter points). <code>"black"</code> or <code>"white"</code> adds visual separation.'],
  ];

  for (const [pattern, explanation] of rules) {
    if (pattern.test(line)) return explanation;
  }

  // Generic fallbacks
  if (/^plt\.|^ax\.|^fig\./.test(line)) return 'matplotlib API call — controls figure/axes properties or rendering.';
  if (/^sns\./.test(line)) return 'seaborn function call — creates a statistical visualization.';
  if (/^px\.|^go\./.test(line)) return 'plotly function call — creates an interactive chart.';
  if (/^df\./.test(line)) return 'pandas DataFrame operation — transforms or accesses data.';
  if (/^np\./.test(line)) return 'NumPy operation — numerical computation or array generation.';
  if (/=.*pd\.(read_csv|DataFrame|Series)/.test(line)) return 'Creates or loads a pandas DataFrame/Series — the standard data structure for visualization in Python.';

  return 'Python statement — part of the code logic (variable assignment, loop, function call, etc.).';
}
