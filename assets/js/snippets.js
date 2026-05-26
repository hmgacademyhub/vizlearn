/* ============================================================
   VizLearn — Snippet Library
   All code examples for the playground
   Author: Adewale Samson Adeagbo
   ============================================================ */

const SNIPPETS = {

// ══════════════════════════════════════════════════════════════
// MATPLOTLIB SNIPPETS
// ══════════════════════════════════════════════════════════════

mpl_line: `import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 10, 300)
y1 = np.sin(x)
y2 = np.sin(x) * np.exp(-x * 0.15)

fig, ax = plt.subplots(figsize=(9, 5))

# Plot two lines
ax.plot(x, y1, color='#00e5a0', linewidth=2.5, label='sin(x)', linestyle='-')
ax.plot(x, y2, color='#f4a261', linewidth=2.5, label='sin(x)·e^(-0.15x)', linestyle='--')

# Labels & title
ax.set_title('Matplotlib Line Chart', fontsize=15, fontweight='bold', pad=12)
ax.set_xlabel('x', fontsize=11)
ax.set_ylabel('y', fontsize=11)

# Grid and legend
ax.grid(True, linestyle='--', alpha=0.3, color='gray')
ax.legend(fontsize=10)
ax.set_facecolor('#0d1117')
fig.patch.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5')
ax.spines['bottom'].set_color('#2a3a52')
ax.spines['left'].set_color('#2a3a52')
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

fig.tight_layout()
plt.show()
`,

mpl_bar: `import matplotlib.pyplot as plt
import numpy as np

categories = ['Q1', 'Q2', 'Q3', 'Q4']
sales_2023 = [45000, 62000, 58000, 75000]
sales_2024 = [52000, 70000, 68000, 88000]

x = np.arange(len(categories))
width = 0.35

fig, ax = plt.subplots(figsize=(9, 5))

bars1 = ax.bar(x - width/2, sales_2023, width, label='2023', color='#00b4d8', alpha=0.85, edgecolor='white', linewidth=0.5)
bars2 = ax.bar(x + width/2, sales_2024, width, label='2024', color='#00e5a0', alpha=0.85, edgecolor='white', linewidth=0.5)

# Value labels on top of bars
for bar in bars1:
    ax.annotate(f'₦{bar.get_height()/1000:.0f}k',
                xy=(bar.get_x() + bar.get_width()/2, bar.get_height()),
                xytext=(0, 4), textcoords='offset points',
                ha='center', va='bottom', fontsize=8, color='#8b9ab5')

ax.set_title('Quarterly Sales Comparison', fontsize=14, fontweight='bold', pad=12, color='#e8f0fe')
ax.set_xlabel('Quarter', fontsize=11, color='#8b9ab5')
ax.set_ylabel('Revenue (NGN)', fontsize=11, color='#8b9ab5')
ax.set_xticks(x)
ax.set_xticklabels(categories, color='#8b9ab5')
ax.tick_params(colors='#8b9ab5')
ax.legend(fontsize=10)
ax.set_facecolor('#0d1117')
fig.patch.set_facecolor('#0d1117')
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(axis='y', linestyle='--', alpha=0.2)

fig.tight_layout()
plt.show()
`,

mpl_scatter: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)
n = 200

# Create clusters of data
x1 = np.random.randn(n) * 0.8 + 2
y1 = np.random.randn(n) * 0.8 + 2

x2 = np.random.randn(n) * 0.8 - 2
y2 = np.random.randn(n) * 0.8 + 1

x3 = np.random.randn(n) * 0.6
y3 = np.random.randn(n) * 0.6 - 2

fig, ax = plt.subplots(figsize=(8, 6))

sc1 = ax.scatter(x1, y1, c='#00e5a0', s=40, alpha=0.6, label='Group A', edgecolors='none')
sc2 = ax.scatter(x2, y2, c='#00b4d8', s=40, alpha=0.6, label='Group B', edgecolors='none')
sc3 = ax.scatter(x3, y3, c='#f4a261', s=40, alpha=0.6, label='Group C', edgecolors='none')

ax.set_title('Scatter Plot — Three Clusters', fontsize=14, fontweight='bold', pad=12, color='#e8f0fe')
ax.set_xlabel('Feature 1', fontsize=11, color='#8b9ab5')
ax.set_ylabel('Feature 2', fontsize=11, color='#8b9ab5')
ax.legend(fontsize=10)
ax.set_facecolor('#0d1117')
fig.patch.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5')
ax.spines['bottom'].set_color('#2a3a52')
ax.spines['left'].set_color('#2a3a52')
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(linestyle='--', alpha=0.15)

fig.tight_layout()
plt.show()
`,

mpl_hist: `import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import norm

np.random.seed(0)
data1 = np.random.normal(loc=60, scale=12, size=500)
data2 = np.random.normal(loc=75, scale=9, size=500)

fig, ax = plt.subplots(figsize=(9, 5))

ax.hist(data1, bins=30, color='#00e5a0', alpha=0.6, density=True, label='Class A', edgecolor='none')
ax.hist(data2, bins=30, color='#00b4d8', alpha=0.6, density=True, label='Class B', edgecolor='none')

# KDE lines
x_range = np.linspace(20, 115, 300)
ax.plot(x_range, norm.pdf(x_range, 60, 12), color='#00e5a0', linewidth=2.5, linestyle='--')
ax.plot(x_range, norm.pdf(x_range, 75, 9),  color='#00b4d8', linewidth=2.5, linestyle='--')

ax.set_title('Score Distribution — Two Classes', fontsize=14, fontweight='bold', pad=12, color='#e8f0fe')
ax.set_xlabel('Score', fontsize=11, color='#8b9ab5')
ax.set_ylabel('Density', fontsize=11, color='#8b9ab5')
ax.legend(fontsize=10)
ax.set_facecolor('#0d1117')
fig.patch.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5')
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(linestyle='--', alpha=0.15)

fig.tight_layout()
plt.show()
`,

mpl_pie: `import matplotlib.pyplot as plt

labels  = ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'CS']
sizes   = [28, 22, 18, 14, 10, 8]
explode = (0.05, 0, 0, 0, 0, 0)
colors  = ['#00e5a0', '#00b4d8', '#f4a261', '#9b59b6', '#e74c3c', '#f1c40f']

fig, ax = plt.subplots(figsize=(8, 6))

wedges, texts, autotexts = ax.pie(
    sizes,
    explode=explode,
    labels=labels,
    colors=colors,
    autopct='%1.1f%%',
    startangle=140,
    pctdistance=0.82,
    shadow=False,
    wedgeprops={'linewidth': 2, 'edgecolor': '#0d1117'}
)

for text in texts:      text.set_color('#8b9ab5'); text.set_fontsize(10)
for atext in autotexts: atext.set_color('#0d1117'); atext.set_fontweight('bold'); atext.set_fontsize(9)

ax.set_title('Subject Enrolment Distribution\nHMG Academy', fontsize=13, fontweight='bold', pad=16, color='#e8f0fe')
fig.patch.set_facecolor('#0d1117')

fig.tight_layout()
plt.show()
`,

mpl_subplot: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(7)
x = np.linspace(0, 10, 100)

fig, axes = plt.subplots(2, 2, figsize=(11, 7))
fig.patch.set_facecolor('#0d1117')
fig.suptitle('Chart Gallery — Matplotlib Subplots', fontsize=14, fontweight='bold', color='#e8f0fe', y=1.01)

palette = ['#00e5a0', '#00b4d8', '#f4a261', '#9b59b6']

def style_ax(ax, title):
    ax.set_facecolor('#0d1117')
    ax.set_title(title, fontsize=11, color='#e8f0fe', pad=8)
    ax.tick_params(colors='#8b9ab5')
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_color('#2a3a52')
    ax.spines['left'].set_color('#2a3a52')
    ax.grid(linestyle='--', alpha=0.15)

# Top-left: Line
axes[0,0].plot(x, np.sin(x)*x**0.3, color=palette[0], linewidth=2)
style_ax(axes[0,0], 'Line Chart')

# Top-right: Bar
cats = ['A','B','C','D','E']
vals = np.random.randint(20, 80, 5)
axes[0,1].bar(cats, vals, color=palette[1], edgecolor='none', alpha=0.85)
style_ax(axes[0,1], 'Bar Chart')

# Bottom-left: Scatter
axes[1,0].scatter(np.random.randn(80), np.random.randn(80), c=palette[2], s=30, alpha=0.7, edgecolors='none')
style_ax(axes[1,0], 'Scatter Plot')

# Bottom-right: Histogram
data = np.random.normal(50, 15, 300)
axes[1,1].hist(data, bins=20, color=palette[3], alpha=0.8, edgecolor='none')
style_ax(axes[1,1], 'Histogram')

fig.tight_layout()
plt.show()
`,

mpl_heatmap: `import matplotlib.pyplot as plt
import numpy as np

# Build a correlation-like matrix
np.random.seed(1)
n = 8
labels = ['Age', 'Income', 'Score', 'Tenure', 'Loans', 'Usage', 'Churn', 'CLV']
data = np.random.rand(n, n)
matrix = (data + data.T) / 2
np.fill_diagonal(matrix, 1.0)

fig, ax = plt.subplots(figsize=(8, 7))
fig.patch.set_facecolor('#0d1117')
ax.set_facecolor('#0d1117')

im = ax.imshow(matrix, cmap='RdYlGn', vmin=0, vmax=1, aspect='auto')

# Colorbar
cbar = plt.colorbar(im, ax=ax, shrink=0.85)
cbar.ax.tick_params(colors='#8b9ab5')
cbar.set_label('Correlation', color='#8b9ab5', fontsize=10)

# Tick labels
ax.set_xticks(range(n)); ax.set_xticklabels(labels, rotation=45, ha='right', color='#8b9ab5', fontsize=9)
ax.set_yticks(range(n)); ax.set_yticklabels(labels, color='#8b9ab5', fontsize=9)

# Cell annotations
for i in range(n):
    for j in range(n):
        val = matrix[i, j]
        color = 'black' if 0.3 < val < 0.7 else 'white'
        ax.text(j, i, f'{val:.2f}', ha='center', va='center', fontsize=8, color=color)

ax.set_title('Feature Correlation Heatmap', fontsize=14, fontweight='bold', pad=14, color='#e8f0fe')

fig.tight_layout()
plt.show()
`,

mpl_style: `import matplotlib.pyplot as plt
import numpy as np

# Demonstrate custom styling and figure anatomy
np.random.seed(3)
months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
revenue = np.array([42, 38, 55, 61, 67, 72, 85, 80, 73, 90, 95, 110]) * 1000
target  = np.full(12, 75000)

fig, ax = plt.subplots(figsize=(12, 5))
fig.patch.set_facecolor('#0d1117')
ax.set_facecolor('#0b1220')

# Fill between actual and target
ax.fill_between(months, revenue, target, where=(revenue > target),
                alpha=0.15, color='#00e5a0', interpolate=True, label='Above target')
ax.fill_between(months, revenue, target, where=(revenue < target),
                alpha=0.15, color='#ef4444', interpolate=True, label='Below target')

ax.plot(months, revenue, color='#00e5a0', linewidth=2.5, marker='o', markersize=5, label='Revenue')
ax.plot(months, target,  color='#8b9ab5', linewidth=1.5, linestyle='--', label='Target')

# Annotations
peak_idx = revenue.argmax()
ax.annotate(f'Peak: ₦{revenue[peak_idx]/1000:.0f}k',
            xy=(months[peak_idx], revenue[peak_idx]),
            xytext=(-30, 15), textcoords='offset points',
            fontsize=9, color='#00e5a0',
            arrowprops=dict(arrowstyle='->', color='#00e5a0', lw=1.2))

ax.set_title('Annual Revenue vs. Target', fontsize=14, fontweight='bold', color='#e8f0fe', pad=14)
ax.set_xlabel('Month', fontsize=11, color='#8b9ab5')
ax.set_ylabel('Revenue (NGN)', fontsize=11, color='#8b9ab5')
ax.tick_params(colors='#8b9ab5', length=4)
ax.legend(fontsize=9, loc='upper left')
ax.spines[:].set_color('#1a2236')
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda v, _: f'₦{v/1000:.0f}k'))
ax.grid(axis='y', linestyle='--', alpha=0.15)

fig.tight_layout()
plt.show()
`,

// ══════════════════════════════════════════════════════════════
// SEABORN SNIPPETS
// ══════════════════════════════════════════════════════════════

sns_scatter: `import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style='darkgrid')
df = sns.load_dataset('iris')

fig, ax = plt.subplots(figsize=(9, 6))

sns.scatterplot(
    data=df,
    x='sepal_length',
    y='petal_length',
    hue='species',
    size='petal_width',
    sizes=(30, 200),
    palette='Set2',
    alpha=0.8,
    ax=ax
)

ax.set_title('Iris Dataset — Sepal vs Petal Length', fontsize=14, fontweight='bold', pad=12)
ax.set_xlabel('Sepal Length (cm)', fontsize=11)
ax.set_ylabel('Petal Length (cm)', fontsize=11)
ax.legend(title='Species', bbox_to_anchor=(1.02, 1), loc='upper left', fontsize=9)

plt.tight_layout()
plt.show()
`,

sns_dist: `import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

sns.set_theme(style='darkgrid')
np.random.seed(10)

# Simulate exam scores
data = {
    'Maths':   np.random.normal(68, 12, 300),
    'English': np.random.normal(74, 10, 300),
    'Physics': np.random.normal(62, 15, 300),
}

fig, axes = plt.subplots(1, 3, figsize=(13, 5))
colors = ['#00e5a0', '#00b4d8', '#f4a261']

for ax, (subject, scores), color in zip(axes, data.items(), colors):
    sns.histplot(scores, bins=25, kde=True, color=color, ax=ax, alpha=0.7)
    ax.set_title(f'{subject} Scores', fontsize=12, fontweight='bold')
    ax.set_xlabel('Score', fontsize=10)
    ax.axvline(scores.mean(), color='white', linestyle='--', linewidth=1.5, label=f'Mean: {scores.mean():.1f}')
    ax.legend(fontsize=9)

fig.suptitle('Score Distribution by Subject — HMG Academy', fontsize=14, fontweight='bold', y=1.02)
plt.tight_layout()
plt.show()
`,

sns_box: `import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style='darkgrid')
df = sns.load_dataset('tips')

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Box plot
sns.boxplot(data=df, x='day', y='total_bill', hue='sex',
            palette='Set2', width=0.5, ax=axes[0])
axes[0].set_title('Total Bill by Day & Gender', fontsize=12, fontweight='bold')
axes[0].set_xlabel('Day of Week')
axes[0].set_ylabel('Total Bill (USD)')

# With individual points (stripplot overlay)
sns.boxplot(data=df, x='time', y='tip', palette='muted', ax=axes[1])
sns.stripplot(data=df, x='time', y='tip', color='white', alpha=0.4, size=3, ax=axes[1])
axes[1].set_title('Tips by Meal Time (with data points)', fontsize=12, fontweight='bold')
axes[1].set_xlabel('Meal Time')
axes[1].set_ylabel('Tip (USD)')

plt.tight_layout()
plt.show()
`,

sns_violin: `import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style='darkgrid')
df = sns.load_dataset('tips')

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Standard violin
sns.violinplot(data=df, x='day', y='total_bill', palette='Set2',
               inner='quartile', ax=axes[0])
axes[0].set_title('Bill Distribution by Day', fontsize=12, fontweight='bold')
axes[0].set_xlabel('Day of Week')
axes[0].set_ylabel('Total Bill (USD)')

# Split violin (compare two groups)
sns.violinplot(data=df, x='day', y='total_bill', hue='sex',
               split=True, palette='Set1', inner='quart', ax=axes[1])
axes[1].set_title('Split by Gender', fontsize=12, fontweight='bold')
axes[1].set_xlabel('Day of Week')
axes[1].set_ylabel('Total Bill (USD)')
axes[1].legend(title='Gender', loc='upper left')

plt.tight_layout()
plt.show()
`,

sns_heatmap: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

np.random.seed(5)

# Simulate a confusion matrix / feature correlation
features = ['Age', 'Salary', 'Experience', 'Loans', 'Credit Score', 'Balance']
n = len(features)
corr_data = np.random.rand(n, n)
corr_matrix = (corr_data + corr_data.T) / 2
np.fill_diagonal(corr_matrix, 1.0)

df_corr = pd.DataFrame(corr_matrix * 2 - 1, columns=features, index=features)

fig, ax = plt.subplots(figsize=(8, 6))
sns.heatmap(
    df_corr,
    annot=True,
    fmt='.2f',
    cmap='coolwarm',
    center=0,
    vmin=-1,
    vmax=1,
    linewidths=0.5,
    linecolor='#0d1117',
    square=True,
    cbar_kws={'shrink': 0.8},
    ax=ax
)
ax.set_title('Feature Correlation Matrix', fontsize=14, fontweight='bold', pad=14)
ax.tick_params(labelsize=9, labelcolor='#e8f0fe')

plt.tight_layout()
plt.show()
`,

sns_pairplot: `import seaborn as sns
import matplotlib.pyplot as plt

df = sns.load_dataset('iris')

g = sns.pairplot(
    df,
    hue='species',
    palette='Set2',
    diag_kind='kde',
    plot_kws={'alpha': 0.6, 's': 40, 'edgecolor': 'none'},
    diag_kws={'fill': True, 'alpha': 0.6}
)
g.fig.suptitle('Iris Pair Plot — All Variable Relationships', fontsize=13, fontweight='bold', y=1.02)
plt.show()
`,

sns_bar: `import seaborn as sns
import matplotlib.pyplot as plt

sns.set_theme(style='darkgrid')
df = sns.load_dataset('tips')

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

# Bar plot with CI
sns.barplot(data=df, x='day', y='total_bill', hue='sex',
            palette='Set2', errorbar='sd', capsize=0.1, ax=axes[0])
axes[0].set_title('Average Bill by Day & Gender', fontsize=12, fontweight='bold')
axes[0].set_xlabel('Day')
axes[0].set_ylabel('Average Bill (USD)')
axes[0].legend(title='Gender')

# Count plot
sns.countplot(data=df, x='day', hue='time', palette='muted', ax=axes[1])
axes[1].set_title('Number of Visits by Day & Time', fontsize=12, fontweight='bold')
axes[1].set_xlabel('Day')
axes[1].set_ylabel('Count')
axes[1].legend(title='Meal')

plt.tight_layout()
plt.show()
`,

sns_line: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

sns.set_theme(style='darkgrid')
np.random.seed(2024)

dates = pd.date_range('2024-01-01', periods=52, freq='W')
df = pd.DataFrame({
    'week': dates.tolist() * 3,
    'students': (
        np.cumsum(np.random.randn(52) * 3 + 5).tolist() +
        np.cumsum(np.random.randn(52) * 2 + 3).tolist() +
        np.cumsum(np.random.randn(52) * 4 + 7).tolist()
    ),
    'subject': ['Maths']*52 + ['English']*52 + ['Science']*52
})

fig, ax = plt.subplots(figsize=(12, 5))
sns.lineplot(data=df, x='week', y='students', hue='subject',
             palette='Set2', linewidth=2.5, ax=ax)

ax.set_title('Weekly Student Enrollment — HMG Academy 2024', fontsize=13, fontweight='bold', pad=12)
ax.set_xlabel('Week')
ax.set_ylabel('Cumulative Students')
ax.legend(title='Subject')
plt.xticks(rotation=30)

plt.tight_layout()
plt.show()
`,

// ══════════════════════════════════════════════════════════════
// PLOTLY SNIPPETS
// ══════════════════════════════════════════════════════════════

plotly_scatter: `import plotly.express as px

df = px.data.iris()

fig = px.scatter(
    df,
    x='sepal_width',
    y='sepal_length',
    color='species',
    size='petal_length',
    hover_data=['petal_width'],
    title='Iris — Interactive Scatter (Plotly Express)',
    template='plotly_dark',
    color_discrete_sequence=px.colors.qualitative.Set2
)

fig.update_layout(
    title_font_size=15,
    legend_title_text='Species',
    height=500
)

fig.show()
`,

plotly_bar: `import plotly.express as px
import pandas as pd

df = pd.DataFrame({
    'Quarter': ['Q1','Q2','Q3','Q4','Q1','Q2','Q3','Q4'],
    'Year':    ['2023','2023','2023','2023','2024','2024','2024','2024'],
    'Revenue': [45, 62, 58, 75, 52, 70, 68, 88],
    'Units':   [120, 180, 155, 200, 145, 195, 188, 230]
})

fig = px.bar(
    df, x='Quarter', y='Revenue',
    color='Year',
    barmode='group',
    text='Revenue',
    title='Quarterly Revenue — Interactive Bar Chart',
    template='plotly_dark',
    color_discrete_sequence=['#00b4d8', '#00e5a0'],
    labels={'Revenue': 'Revenue (₦M)'}
)

fig.update_traces(texttemplate='₦%{text}M', textposition='outside')
fig.update_layout(title_font_size=15, height=500)
fig.show()
`,

plotly_line: `import plotly.express as px
import pandas as pd
import numpy as np

np.random.seed(42)
months = pd.date_range('2023-01-01', periods=24, freq='ME')

df = pd.DataFrame({
    'Month':   months.tolist() * 3,
    'Score':   (
        (50 + np.cumsum(np.random.randn(24))).tolist() +
        (45 + np.cumsum(np.random.randn(24))).tolist() +
        (55 + np.cumsum(np.random.randn(24))).tolist()
    ),
    'Class': ['Class A']*24 + ['Class B']*24 + ['Class C']*24
})

fig = px.line(
    df, x='Month', y='Score', color='Class',
    title='Monthly Average Score Trend — HMG Academy',
    template='plotly_dark',
    color_discrete_sequence=['#00e5a0', '#00b4d8', '#f4a261'],
    markers=True
)
fig.update_layout(
    title_font_size=15,
    xaxis_rangeslider_visible=True,
    height=500
)
fig.show()
`,

plotly_pie: `import plotly.express as px
import pandas as pd

df = pd.DataFrame({
    'Subject':   ['Mathematics', 'English', 'Physics', 'Chemistry', 'Biology', 'CS'],
    'Students':  [280, 220, 180, 140, 100, 80],
    'Pass_Rate': [78, 85, 72, 69, 83, 91]
})

fig = px.pie(
    df,
    names='Subject',
    values='Students',
    title='Student Distribution by Subject — HMG Academy',
    template='plotly_dark',
    hole=0.4,
    color_discrete_sequence=px.colors.qualitative.Bold,
    hover_data=['Pass_Rate']
)

fig.update_traces(
    textinfo='label+percent',
    pull=[0.05, 0, 0, 0, 0, 0]
)
fig.update_layout(title_font_size=15, height=500)
fig.show()
`,

// ══════════════════════════════════════════════════════════════
// PANDAS PLOTTING SNIPPETS
// ══════════════════════════════════════════════════════════════

pd_line: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(0)
idx = pd.date_range('2024-01-01', periods=12, freq='ME')
df = pd.DataFrame({
    'Enrolments': 120 + np.cumsum(np.random.randn(12) * 5 + 3).astype(int),
    'Completions': 90 + np.cumsum(np.random.randn(12) * 4 + 2).astype(int),
    'Dropouts':    20 + np.cumsum(np.random.randn(12) * 2).astype(int)
}, index=idx)

fig, ax = plt.subplots(figsize=(11, 5))
fig.patch.set_facecolor('#0d1117')

df.plot(
    kind='line',
    ax=ax,
    linewidth=2.2,
    marker='o',
    markersize=5,
    color=['#00e5a0', '#00b4d8', '#f4a261']
)

ax.set_title('Monthly Academy Metrics — df.plot()', fontsize=13, fontweight='bold', color='#e8f0fe', pad=12)
ax.set_xlabel('Month', fontsize=10, color='#8b9ab5')
ax.set_ylabel('Count', fontsize=10, color='#8b9ab5')
ax.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5', rotation=30)
ax.legend(fontsize=9)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(linestyle='--', alpha=0.15)

plt.tight_layout()
plt.show()
`,

pd_bar: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

data = {
    'Mathematics': [78, 82, 75, 88],
    'English':     [85, 79, 83, 87],
    'Physics':     [72, 68, 77, 80],
    'Chemistry':   [69, 73, 71, 76]
}
df = pd.DataFrame(data, index=['Term 1', 'Term 2', 'Term 3', 'Term 4'])

fig, ax = plt.subplots(figsize=(11, 5))
fig.patch.set_facecolor('#0d1117')

df.plot.bar(
    ax=ax,
    stacked=False,
    width=0.75,
    color=['#00e5a0', '#00b4d8', '#f4a261', '#9b59b6'],
    edgecolor='none',
    alpha=0.85
)

ax.set_title('Average Pass Rates per Subject per Term', fontsize=13, fontweight='bold', color='#e8f0fe', pad=12)
ax.set_xlabel('Term', fontsize=10, color='#8b9ab5')
ax.set_ylabel('Pass Rate (%)', fontsize=10, color='#8b9ab5')
ax.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5', rotation=0)
ax.legend(title='Subject', fontsize=9)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(axis='y', linestyle='--', alpha=0.2)
ax.set_ylim(50, 100)

plt.tight_layout()
plt.show()
`,

pd_hist: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    'Maths':    np.random.normal(70, 12, 300),
    'English':  np.random.normal(75, 10, 300),
    'Physics':  np.random.normal(65, 14, 300),
    'Chemistry':np.random.normal(68, 11, 300)
})

fig, ax = plt.subplots(figsize=(10, 5))
fig.patch.set_facecolor('#0d1117')

df.plot.hist(
    ax=ax,
    bins=25,
    alpha=0.6,
    color=['#00e5a0', '#00b4d8', '#f4a261', '#9b59b6'],
    edgecolor='none'
)

ax.set_title('Score Distribution by Subject — df.plot.hist()', fontsize=13, fontweight='bold', color='#e8f0fe', pad=12)
ax.set_xlabel('Score', fontsize=10, color='#8b9ab5')
ax.set_ylabel('Frequency', fontsize=10, color='#8b9ab5')
ax.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5')
ax.legend(fontsize=9)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(linestyle='--', alpha=0.15)

plt.tight_layout()
plt.show()
`,

pd_box: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(7)
df = pd.DataFrame({
    'Maths':    np.random.normal(70, 12, 200),
    'English':  np.random.normal(75, 10, 200),
    'Physics':  np.random.normal(65, 14, 200),
    'Chemistry':np.random.normal(68, 11, 200),
    'Biology':  np.random.normal(73, 9, 200)
})

fig, ax = plt.subplots(figsize=(10, 5))
fig.patch.set_facecolor('#0d1117')

df.plot.box(
    ax=ax,
    patch_artist=True,
    boxprops=dict(facecolor='#1e2a3a', color='#00e5a0'),
    medianprops=dict(color='#00e5a0', linewidth=2),
    whiskerprops=dict(color='#8b9ab5'),
    capprops=dict(color='#8b9ab5'),
    flierprops=dict(marker='o', color='#f4a261', markersize=3, alpha=0.5)
)

ax.set_title('Score Box Plot by Subject — df.plot.box()', fontsize=13, fontweight='bold', color='#e8f0fe', pad=12)
ax.set_ylabel('Score', fontsize=10, color='#8b9ab5')
ax.set_facecolor('#0d1117')
ax.tick_params(colors='#8b9ab5')
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.grid(axis='y', linestyle='--', alpha=0.15)

plt.tight_layout()
plt.show()
`,

};

// Make globally accessible
window.SNIPPETS = SNIPPETS;
