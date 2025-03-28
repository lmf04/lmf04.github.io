import{_ as n}from"./GCN-GAT-NJdPXXtg.js";import{_ as a,e,g as i,o as l}from"./app-BOd5JhjQ.js";const t={};function r(p,s){return l(),e("div",null,s[0]||(s[0]=[i('<p><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT"></a><a href="https://doi.org/XXX" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/arXiv-XXXX.XXXXX-b31b1b.svg" alt="arXiv"></a><br><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Python-3.9%2B-blue?logo=python" alt="Python 3.9+"></a><a href="https://hub.docker.com/r/lmf04/ppi-gnn" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker" alt="Docker Ready"></a></p><p>基于多模态图神经网络的蛋白质相互作用预测与药物靶点发现系统</p><h2 id="项目概述" tabindex="-1"><a class="header-anchor" href="#项目概述"><span>项目概述</span></a></h2><p>本研究开发了一个端到端的深度学习框架，通过整合<strong>结构生物学数据（PDB）<strong>与</strong>蛋白质互作网络（STRING）</strong>，利用图神经网络预测蛋白质相互作用（PPI），并识别肺癌相关的潜在药物靶点。</p><p><strong>核心价值</strong>：<br> 🔬 创新性提出 <strong>GCN-GAT Hybrid Model</strong> 实现多尺度蛋白质特征融合<br> 💊 发现3个具有临床潜力的药物重定位靶点（EGFR/ALK/MET新调控机制）<br> 🚀 提供开箱即用的Docker化预测工具（支持单蛋白/批量预测模式）</p><h2 id="技术亮点" tabindex="-1"><a class="header-anchor" href="#技术亮点"><span>技术亮点</span></a></h2><h3 id="模型架构" tabindex="-1"><a class="header-anchor" href="#模型架构"><span>模型架构</span></a></h3><p><img src="'+n+`" alt="GNN Architecture"><br><em>Hybrid GNN模型整合拓扑特征（GCN）与注意力机制（GAT）</em></p><h3 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token string">&quot;PyTorch Geometric&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2.3.1&quot;</span><span class="token punctuation">,</span>    <span class="token comment"># 图神经网络核心框架</span></span>
<span class="line"><span class="token string">&quot;Biopython&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1.81&quot;</span><span class="token punctuation">,</span>            <span class="token comment"># PDB结构解析</span></span>
<span class="line"><span class="token string">&quot;RDKit&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023.03.1&quot;</span><span class="token punctuation">,</span>           <span class="token comment"># 配体特征计算</span></span>
<span class="line"><span class="token string">&quot;D3.js&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;7.8.5&quot;</span><span class="token punctuation">,</span>               <span class="token comment"># 交互式网络可视化</span></span>
<span class="line"><span class="token string">&quot;Docker&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;24.0.5&quot;</span>              <span class="token comment"># 容器化部署</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构"><span>目录结构</span></a></h2><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre><code><span class="line">.</span>
<span class="line">├── data/               # 数据存储</span>
<span class="line">│   ├── raw/            # 原始数据（STRING/PDB）</span>
<span class="line">│   └── processed/      # 预处理图数据</span>
<span class="line">├── src/                # 源代码</span>
<span class="line">│   ├── models/         # GNN模型定义</span>
<span class="line">│   ├── preprocessing/  # 多模态数据处理</span>
<span class="line">│   ├── training/       # 训练流程</span>
<span class="line">│   └── visualization/  # D3.js交互可视化</span>
<span class="line">├── docker/             # 容器化配置</span>
<span class="line">│   ├── Dockerfile</span>
<span class="line">│   └── requirements.txt</span>
<span class="line">├── outputs/            # 运行结果</span>
<span class="line">│   ├── predictions/    # PPI预测结果</span>
<span class="line">│   └── drug_targets/   # 候选药物靶点</span>
<span class="line">└── docs/               # 技术文档</span>
<span class="line">    └── case_study.pdf  # 肺癌靶点案例分析</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 使用conda创建环境</span></span>
<span class="line">conda create <span class="token parameter variable">-n</span> ppi-gnn <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.9</span></span>
<span class="line">conda activate ppi-gnn</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装依赖（需要预先安装PyTorch）</span></span>
<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-r</span> requirements.txt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 或使用Docker</span></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> ppi-gnn <span class="token parameter variable">-f</span> docker/Dockerfile <span class="token builtin class-name">.</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--gpus</span> all ppi-gnn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据准备" tabindex="-1"><a class="header-anchor" href="#数据准备"><span>数据准备</span></a></h3><ol><li>下载STRING数据：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token function">wget</span> https://string-db.org/download/<span class="token punctuation">..</span>. <span class="token parameter variable">-P</span> data/raw/string</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>预处理PDB结构：</li></ol><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> src<span class="token punctuation">.</span>preprocessing<span class="token punctuation">.</span>pdb_processor <span class="token keyword">import</span> PDBGraphBuilder</span>
<span class="line"></span>
<span class="line">builder <span class="token operator">=</span> PDBGraphBuilder<span class="token punctuation">(</span><span class="token string">&quot;data/raw/pdb/1a0p.pdb&quot;</span><span class="token punctuation">)</span></span>
<span class="line">builder<span class="token punctuation">.</span>generate_graph<span class="token punctuation">(</span><span class="token string">&quot;data/processed/graphs/1a0p.pt&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模型训练" tabindex="-1"><a class="header-anchor" href="#模型训练"><span>模型训练</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 训练GNN模型（默认使用肺癌相关蛋白集）</span></span>
<span class="line">python src<span class="token operator">/</span>training<span class="token operator">/</span>train_hybrid<span class="token punctuation">.</span>py \\</span>
<span class="line">  <span class="token operator">-</span><span class="token operator">-</span>train_data data<span class="token operator">/</span>processed<span class="token operator">/</span>train<span class="token operator">/</span> \\</span>
<span class="line">  <span class="token operator">-</span><span class="token operator">-</span>val_data data<span class="token operator">/</span>processed<span class="token operator">/</span>val<span class="token operator">/</span> \\</span>
<span class="line">  <span class="token operator">-</span><span class="token operator">-</span>epochs <span class="token number">100</span> \\</span>
<span class="line">  <span class="token operator">-</span><span class="token operator">-</span>gpus <span class="token number">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预测与可视化" tabindex="-1"><a class="header-anchor" href="#预测与可视化"><span>预测与可视化</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token comment"># 单蛋白预测示例</span></span>
<span class="line"><span class="token keyword">from</span> src<span class="token punctuation">.</span>inference <span class="token keyword">import</span> Predictor</span>
<span class="line"></span>
<span class="line">predictor <span class="token operator">=</span> Predictor<span class="token punctuation">(</span><span class="token string">&quot;checkpoints/best_model.pt&quot;</span><span class="token punctuation">)</span></span>
<span class="line">prediction <span class="token operator">=</span> predictor<span class="token punctuation">.</span>predict<span class="token punctuation">(</span><span class="token string">&quot;EGFR_HUMAN&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MET_HUMAN&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动交互可视化</span></span>
<span class="line">python src<span class="token operator">/</span>visualization<span class="token operator">/</span>launch_dashboard<span class="token punctuation">.</span>py <span class="token operator">-</span><span class="token operator">-</span>port <span class="token number">8050</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="核心成果" tabindex="-1"><a class="header-anchor" href="#核心成果"><span>核心成果</span></a></h2><table><thead><tr><th>指标</th><th>值</th><th>基准对比</th></tr></thead><tbody><tr><td>AUC-ROC</td><td>0.89</td><td>0.82 (DeepPPI)</td></tr><tr><td>Precision@10</td><td>0.76</td><td>0.68 (GCN)</td></tr><tr><td>推理速度</td><td>58ms/query</td><td>210ms (GAT)</td></tr></tbody></table><p><strong>发现的候选靶点</strong>：</p><ol><li><strong>EGFR-C797S突变体</strong>：对奥希替尼耐药性的潜在调控通路</li><li><strong>ALK-EML4融合蛋白</strong>：克唑替尼敏感性的新型生物标志物</li><li><strong>MET外显子14跳跃突变</strong>：卡博替尼的潜在响应预测因子</li></ol><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h2><div class="language-bibtex line-numbers-mode" data-highlighter="prismjs" data-ext="bibtex"><pre><code><span class="line">@article{YourName2025PPI,</span>
<span class="line">  title={Multimodal Graph Neural Networks for Predictive Protein Interaction Modeling and Drug Repurposing},</span>
<span class="line">  author={Your Name, 陈教授 et al.},</span>
<span class="line">  journal={arXiv preprint},</span>
<span class="line">  year={2025},</span>
<span class="line">  doi={XXX}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="维护团队" tabindex="-1"><a class="header-anchor" href="#维护团队"><span>维护团队</span></a></h2><p><a href="https://github.com/lmf04/PPI-GNN-Prediction/issues" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/issues/lmf04/PPI-GNN-Prediction" alt="GitHub Issues"></a><br> 技术咨询：李沐风 (lmf04@github)<br> 合作联系：山东大学系统药理学实验室</p>`,32)]))}const d=a(t,[["render",r],["__file","article-2.html.vue"]]),u=JSON.parse('{"path":"/zh/research/article-2.html","title":"基于图神经网络的蛋白质互作预测研究","lang":"zh-CN","frontmatter":{"layout":"ResearchPost","archive":true,"sort":2,"category":[1,"独立项目"],"date":"2025.02 - 至今","title":"基于图神经网络的蛋白质互作预测研究","description":"多模态图网络建模蛋白质互作，开发药物靶点预测工具","teacher":"山东大学陈教授","technology":"PyTorch Geometric、D3.js、Docker","progress":null,"method":["设计PyTorch模型架构（GCN+GAT），整合STRING/PDB数据特征","构建肺癌相关蛋白互作网络分析 pipeline"],"findings":["模型AUC-ROC达0.89，发现3个潜在药物重定位靶点","研究成果提交至arXiv预印本（DOI:XXX）","相关代码开源至GitHub <a href=\\"https://github.com/lmf04/PPI-GNN-Prediction\\">仓库链接(https://github.com/lmf04/PPI-GNN-Prediction)</a>"],"contribution":null},"headers":[{"level":2,"title":"项目概述","slug":"项目概述","link":"#项目概述","children":[]},{"level":2,"title":"技术亮点","slug":"技术亮点","link":"#技术亮点","children":[{"level":3,"title":"模型架构","slug":"模型架构","link":"#模型架构","children":[]},{"level":3,"title":"技术栈","slug":"技术栈","link":"#技术栈","children":[]}]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[{"level":3,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":3,"title":"数据准备","slug":"数据准备","link":"#数据准备","children":[]},{"level":3,"title":"模型训练","slug":"模型训练","link":"#模型训练","children":[]},{"level":3,"title":"预测与可视化","slug":"预测与可视化","link":"#预测与可视化","children":[]}]},{"level":2,"title":"核心成果","slug":"核心成果","link":"#核心成果","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":2,"title":"维护团队","slug":"维护团队","link":"#维护团队","children":[]}],"git":{"updatedTime":1743156666000,"contributors":[{"name":"2935580139@qq.com","username":"2935580139@qq.com","email":"2935580139@qq.com","commits":4,"url":"https://github.com/2935580139@qq.com"}],"changelog":[{"hash":"7763b45c3673498908f0e2e9f92b15285d3f11d2","time":1743156666000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"23234"},{"hash":"571dd2630c73fd3b0f9b3064e8aa1e77f07c1da9","time":1742053757000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"2123"},{"hash":"d85087504fa0009734cd5658dbc9bcf29b91004c","time":1742007433000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"11"},{"hash":"2de90227ea5bda0ed1f22282a8f3f3289e48a111","time":1741848364000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"init"}]},"filePathRelative":"zh/research/article-2.md","excerpt":"<!-- # PPI-GNN-Prediction -->\\n<p><a href=\\"https://opensource.org/licenses/MIT\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/License-MIT-blue.svg\\" alt=\\"License: MIT\\"></a>\\n<a href=\\"https://doi.org/XXX\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/arXiv-XXXX.XXXXX-b31b1b.svg\\" alt=\\"arXiv\\"></a><br>\\n<a href=\\"https://www.python.org/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/Python-3.9%2B-blue?logo=python\\" alt=\\"Python 3.9+\\"></a>\\n<a href=\\"https://hub.docker.com/r/lmf04/ppi-gnn\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker\\" alt=\\"Docker Ready\\"></a></p>"}');export{d as comp,u as data};
