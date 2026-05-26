/* ============================================================
   VizLearn — Main JavaScript
   Author: Adewale Samson Adeagbo
   ============================================================ */

// ── NAVBAR SCROLL EFFECT ──────────────────────────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── HAMBURGER MENU ────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
      navLinks.classList.toggle('open');
    }
  });
}

// ── SET ACTIVE NAV LINK ───────────────────────────────────────
(function() {
  const links = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.endsWith(currentPath) || (currentPath === '' && href.endsWith('index.html')))) {
      link.classList.add('active');
    }
  });
})();

// ── COPY CODE BUTTON ──────────────────────────────────────────
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('copy-btn')) {
    const codeBlock = e.target.closest('.code-block');
    if (codeBlock) {
      const pre = codeBlock.querySelector('pre');
      if (pre) {
        const text = pre.innerText;
        navigator.clipboard.writeText(text).then(() => {
          e.target.textContent = 'Copied!';
          setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
        }).catch(() => {
          // Fallback for older Android browsers
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          e.target.textContent = 'Copied!';
          setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
        });
      }
    }
  }
});

// ── PROGRESS TRACKING (localStorage) ─────────────────────────
const Progress = {
  STORAGE_KEY: 'vizlearn_progress',

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || {};
    } catch { return {}; }
  },

  set(lessonId, status) {
    const progress = this.get();
    progress[lessonId] = { status, timestamp: Date.now() };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progress));
    this.updateUI();
  },

  isComplete(lessonId) {
    const progress = this.get();
    return progress[lessonId]?.status === 'complete';
  },

  totalComplete() {
    return Object.values(this.get()).filter(v => v.status === 'complete').length;
  },

  updateUI() {
    const fills = document.querySelectorAll('.progress-bar-fill');
    const total = 42; // total lessons
    const pct = Math.round((this.totalComplete() / total) * 100);
    fills.forEach(f => { f.style.width = pct + '%'; });
    const labels = document.querySelectorAll('.progress-label');
    labels.forEach(l => { l.textContent = `${this.totalComplete()} / ${total} lessons complete`; });
  }
};

// Mark sidebar lesson items as completed
(function() {
  const items = document.querySelectorAll('.lesson-item[data-id]');
  items.forEach(item => {
    const id = item.getAttribute('data-id');
    if (Progress.isComplete(id)) {
      item.innerHTML = '✓ ' + item.innerHTML;
      item.style.color = 'var(--success)';
    }
  });
  Progress.updateUI();
})();

// ── QUIZ ENGINE ───────────────────────────────────────────────
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('quiz-opt') && !e.target.classList.contains('disabled')) {
    const card = e.target.closest('.quiz-card');
    if (!card) return;

    const opts = card.querySelectorAll('.quiz-opt');
    const feedback = card.querySelector('.quiz-feedback');
    const isCorrect = e.target.getAttribute('data-correct') === 'true';

    opts.forEach(opt => {
      opt.classList.add('disabled');
      if (opt.getAttribute('data-correct') === 'true') {
        opt.classList.add('correct');
      }
    });

    if (!isCorrect) {
      e.target.classList.add('wrong');
    }

    if (feedback) {
      feedback.classList.add('show');
      feedback.classList.add(isCorrect ? 'correct' : 'wrong');
      const quizId = card.getAttribute('data-quiz-id');
      if (isCorrect && quizId) {
        Progress.set('quiz_' + quizId, 'complete');
      }
    }
  }
});

// ── GALLERY CARD — OPEN IN PLAYGROUND ─────────────────────────
document.addEventListener('click', function(e) {
  const card = e.target.closest('.gallery-card[data-snippet]');
  if (card) {
    const snippet = card.getAttribute('data-snippet');
    if (snippet) {
      localStorage.setItem('vizlearn_playground_code', decodeURIComponent(snippet));
      window.location.href = '../pages/playground.html';
    }
  }
});

// ── SMOOTH SECTION REVEAL ─────────────────────────────────────
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.feature-card, .path-card, .step, .cheat-card, .gallery-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── TOOLTIP INIT ──────────────────────────────────────────────
function initTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', function() {
      const tip = document.createElement('div');
      tip.className = 'tooltip';
      tip.textContent = this.getAttribute('data-tooltip');
      tip.style.cssText = `
        position: absolute;
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 6px 10px;
        font-size: 0.75rem;
        color: var(--text-muted);
        pointer-events: none;
        z-index: 200;
        max-width: 200px;
        box-shadow: var(--shadow);
        white-space: nowrap;
      `;
      document.body.appendChild(tip);
      const rect = this.getBoundingClientRect();
      tip.style.top = (window.scrollY + rect.bottom + 6) + 'px';
      tip.style.left = (rect.left + rect.width / 2 - tip.offsetWidth / 2) + 'px';
      this._tooltip = tip;
    });

    el.addEventListener('mouseleave', function() {
      if (this._tooltip) {
        this._tooltip.remove();
        this._tooltip = null;
      }
    });
  });
}
initTooltips();

// ── EXPOSE GLOBALS ────────────────────────────────────────────
window.VizLearnProgress = Progress;

/* ============================================================
   VizLearn v2 — Enhanced JS
   New features: back-to-top, toast, reading progress,
   lesson sidebar search, keyboard shortcuts, theme persistence
   ============================================================ */

// ── BACK TO TOP ───────────────────────────────────────────────
(function() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.title = 'Back to top';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ── TOAST NOTIFICATION ────────────────────────────────────────
window.VizLearnToast = function(message, duration = 2800) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = message;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.4s'; }, duration - 400);
  setTimeout(() => t.remove(), duration);
};

// ── READING PROGRESS BAR ──────────────────────────────────────
(function() {
  const lessonMain = document.querySelector('.lesson-main, .lesson-reader');
  if (!lessonMain) return;
  const bar = document.createElement('div');
  bar.className = 'reading-progress';
  const fill = document.createElement('div');
  fill.className = 'reading-progress-fill';
  bar.appendChild(fill);
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0;
    fill.style.width = pct + '%';
  });
})();

// ── LESSON SIDEBAR SEARCH ─────────────────────────────────────
(function() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // Inject search input after .sidebar-header
  const header = sidebar.querySelector('.sidebar-header');
  if (!header) return;
  const searchWrap = document.createElement('div');
  searchWrap.className = 'sidebar-search';
  searchWrap.innerHTML = '<input type="text" placeholder="Search lessons…" id="lesson-search-input" autocomplete="off"/>';
  header.after(searchWrap);

  const input = document.getElementById('lesson-search-input');
  input.addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.lesson-item').forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
    // Hide empty groups
    document.querySelectorAll('.lesson-group').forEach(group => {
      const visible = Array.from(group.querySelectorAll('.lesson-item'))
        .some(i => i.style.display !== 'none');
      group.style.display = visible ? '' : 'none';
    });
  });
})();

// ── KEYBOARD SHORTCUTS ────────────────────────────────────────
document.addEventListener('keydown', function(e) {
  // G = open playground
  if (e.key === 'g' && !e.ctrlKey && !e.metaKey && !e.altKey) {
    const active = document.activeElement;
    const isInput = active && (active.tagName === 'INPUT' ||
      active.tagName === 'TEXTAREA' || active.isContentEditable);
    if (!isInput) {
      const isInPages = window.location.pathname.includes('/pages/');
      window.location.href = isInPages ? 'playground.html' : 'pages/playground.html';
    }
  }
  // Escape = close mobile menu
  if (e.key === 'Escape') {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('open');
  }
});

// ── MARK LESSON COMPLETE (enhanced) ──────────────────────────
// Exposed so lesson pages can call window.VizLearnMarkComplete(id)
window.VizLearnMarkComplete = function(id) {
  if (window.VizLearnProgress) {
    window.VizLearnProgress.set(id, 'complete');
    window.VizLearnToast('✅ Lesson marked complete!');
  }
};

// ── COPY CODE GLOBAL (enhanced with toast) ────────────────────
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('copy-btn') && !e.target.dataset.code) {
    const codeBlock = e.target.closest('.code-block');
    if (!codeBlock) return;
    const pre = codeBlock.querySelector('pre');
    if (!pre) return;
    const text = pre.innerText;
    navigator.clipboard.writeText(text)
      .then(() => {
        e.target.textContent = 'Copied!';
        window.VizLearnToast && window.VizLearnToast('Code copied to clipboard');
        setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
      })
      .catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy');
        document.body.removeChild(ta);
        e.target.textContent = 'Copied!';
        setTimeout(() => { e.target.textContent = 'Copy'; }, 2000);
      });
    e.stopImmediatePropagation();
  }
});

// ── EXTERNAL LINKS OPEN IN NEW TAB ────────────────────────────
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (!a.target) a.target = '_blank';
  if (!a.rel) a.rel = 'noopener noreferrer';
});

/* ============================================================
   VizLearn v3 — Progress Integration
   Wires activity logging into progress dashboard
   ============================================================ */

// ── ENHANCED PROGRESS SET (logs activity) ────────────────────
const _origProgressSet = window.VizLearnProgress
  ? window.VizLearnProgress.set.bind(window.VizLearnProgress)
  : null;

if (window.VizLearnProgress && _origProgressSet) {
  window.VizLearnProgress.set = function(lessonId, status) {
    _origProgressSet(lessonId, status);
    // Log to activity feed
    if (window.VizLearnLogActivity && status === 'complete') {
      const lessonNames = {
        'mpl-01':'What is Matplotlib?','mpl-02':'Figure & Axes Anatomy',
        'mpl-03':'Line Charts','mpl-04':'Bar Charts',
        'mpl-05':'Scatter Plots','mpl-06':'Histograms',
        'mpl-07':'Pie Charts','mpl-08':'Subplots & Layouts',
        'mpl-09':'Colormaps','mpl-10':'Styling & Themes',
        'mpl-11':'Annotations & Text','mpl-12':'Saving & Exporting',
        'sns-01':'Seaborn vs Matplotlib','sns-02':'Themes & Palettes',
        'sns-03':'Scatter & Relational','sns-04':'Distribution Plots',
        'sns-05':'Box & Violin Plots','sns-06':'Bar & Count Plots',
        'sns-07':'Heatmaps','sns-08':'Pair Plots',
        'sns-09':'FacetGrid','sns-10':'Line Plots',
        'sns-11':'Regression Plots','sns-12':'Combining with Matplotlib',
        'ply-01':'Why Plotly?','ply-02':'Plotly Express Basics',
        'ply-03':'Interactive Scatter','ply-04':'Interactive Bar',
        'ply-05':'Line Charts','ply-06':'Pie & Donut',
        'ply-07':'Heatmaps & Maps','ply-08':'3D Charts',
        'ply-09':'Animations','ply-10':'Layout & Styling',
        'pd-01':'df.plot() Overview','pd-02':'Line & Area Charts',
        'pd-03':'Bar & Horizontal Bar','pd-04':'Histograms',
        'pd-05':'Box Plots','pd-06':'Scatter & Hex',
        'pd-07':'Combining with Seaborn','pd-08':'EDA Workflow',
      };
      const name = lessonNames[lessonId] || lessonId;
      window.VizLearnLogActivity('lesson',
        `Completed lesson: <strong>${name}</strong>`);
    }
  };
}

// ── QUIZ ANSWER LOGGING ───────────────────────────────────────
// Called from quiz.html after each answer
window.VizLearnLogQuizAnswer = function(questionId, type, isCorrect) {
  // Save to quiz history
  try {
    const history = JSON.parse(
      localStorage.getItem('vizlearn_quiz_history') || '[]');
    history.push({ id: questionId, type, correct: isCorrect, ts: Date.now() });
    localStorage.setItem('vizlearn_quiz_history', JSON.stringify(history));
  } catch(e) {}

  // Log to activity
  if (window.VizLearnLogActivity) {
    const result = isCorrect ? '✅ Correct' : '❌ Incorrect';
    window.VizLearnLogActivity('quiz',
      `Quiz question (${type}): <strong>${result}</strong>`);
  }
};

// ── PLAYGROUND RUN LOGGING ────────────────────────────────────
window.VizLearnLogPlaygroundRun = function() {
  if (window.VizLearnLogActivity) {
    window.VizLearnLogActivity('playground',
      'Ran code in <strong>Playground</strong>');
  }
};

// ── PROGRESS LINK IN NAVBAR ───────────────────────────────────
// Add live lesson count badge to Progress nav link
(function() {
  const progressLinks = document.querySelectorAll('a[href*="progress.html"]');
  if (!progressLinks.length) return;
  try {
    const prog = JSON.parse(localStorage.getItem('vizlearn_progress') || '{}');
    const done = Object.values(prog).filter(v => v.status === 'complete').length;
    if (done > 0) {
      progressLinks.forEach(link => {
        if (!link.querySelector('.nav-badge')) {
          const badge = document.createElement('span');
          badge.className = 'nav-badge';
          badge.textContent = done;
          badge.style.cssText = `
            display:inline-flex;align-items:center;justify-content:center;
            width:17px;height:17px;border-radius:50%;
            background:var(--accent);color:var(--bg);
            font-size:0.6rem;font-weight:800;margin-left:4px;
            font-family:var(--font-mono);
          `;
          link.appendChild(badge);
        }
      });
    }
  } catch(e) {}
})();

/* ============================================================
   VizLearn v4 — Free Enhancements Infrastructure
   PWA registration + portable progress export/import helpers
   ============================================================ */
(function registerVizLearnServiceWorker(){
  if (!('serviceWorker' in navigator)) return;
  const isLocalFile = location.protocol === 'file:';
  if (isLocalFile) return;
  const root = location.pathname.includes('/pages/') ? '../sw.js' : './sw.js';
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(root).catch(() => {
      // Silent: platform must still work if SW registration fails on a host.
    });
  });
})();

window.VizLearnExportAllData = function() {
  const keys = [
    'vizlearn_progress','vizlearn_activity','vizlearn_quiz_history','vizlearn_streak',
    'vizlearn_roadmap','vizlearn_projects_done','vizlearn_story_brief','vizlearn_playground_code'
  ];
  const payload = { exportedAt: new Date().toISOString(), app: 'VizLearn', version: 'v4-free-enhanced', data: {} };
  keys.forEach(k => { payload.data[k] = localStorage.getItem(k); });
  return JSON.stringify(payload, null, 2);
};

window.VizLearnImportAllData = function(jsonText) {
  const payload = JSON.parse(jsonText);
  if (!payload || payload.app !== 'VizLearn' || !payload.data) throw new Error('Invalid VizLearn backup file');
  Object.entries(payload.data).forEach(([k,v]) => {
    if (v === null || typeof v === 'undefined') localStorage.removeItem(k);
    else localStorage.setItem(k, v);
  });
  return true;
};

/* ============================================================
   VizLearn v5 — Accessibility Preferences (free, local-first)
   ============================================================ */
(function initVizLearnAccessibility(){
  const KEY = 'vizlearn_accessibility';
  function get(){ try { return JSON.parse(localStorage.getItem(KEY)||'{}'); } catch { return {}; } }
  function set(p){ localStorage.setItem(KEY, JSON.stringify(p)); apply(p); }
  function apply(p){
    document.documentElement.classList.toggle('a11y-large', p.font === 'large');
    document.documentElement.classList.toggle('a11y-xlarge', p.font === 'xlarge');
    document.documentElement.classList.toggle('a11y-contrast', !!p.contrast);
    document.documentElement.classList.toggle('a11y-reduce-motion', !!p.motion);
  }
  apply(get());
  window.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.className = 'vl-a11y-toggle';
    btn.type = 'button';
    btn.title = 'Accessibility settings';
    btn.setAttribute('aria-label','Accessibility settings');
    btn.textContent = 'Aa';
    const panel = document.createElement('div');
    panel.className = 'vl-a11y-panel';
    const p = get();
    panel.innerHTML = `
      <h3>Accessibility</h3>
      <label>Font size
        <select id="a11y-font" class="vl-input" style="width:130px;padding:6px 8px">
          <option value="normal">Normal</option><option value="large">Large</option><option value="xlarge">Extra large</option>
        </select>
      </label>
      <label>High contrast <input id="a11y-contrast" type="checkbox"></label>
      <label>Reduce motion <input id="a11y-motion" type="checkbox"></label>
      <button class="btn btn-secondary btn-sm" id="a11y-reset" type="button">Reset</button>`;
    document.body.appendChild(btn); document.body.appendChild(panel);
    const font = panel.querySelector('#a11y-font'), contrast = panel.querySelector('#a11y-contrast'), motion = panel.querySelector('#a11y-motion');
    font.value = p.font || 'normal'; contrast.checked = !!p.contrast; motion.checked = !!p.motion;
    btn.addEventListener('click', () => panel.classList.toggle('open'));
    function update(){ set({font:font.value, contrast:contrast.checked, motion:motion.checked}); }
    font.addEventListener('change', update); contrast.addEventListener('change', update); motion.addEventListener('change', update);
    panel.querySelector('#a11y-reset').addEventListener('click', () => { localStorage.removeItem(KEY); font.value='normal'; contrast.checked=false; motion.checked=false; apply({}); });
  });
})();
