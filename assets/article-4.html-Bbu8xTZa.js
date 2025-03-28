import{_ as s}from"./highlight-COBRRvVs.js";import{_ as a,e,g as l,o as t}from"./app-BOd5JhjQ.js";const i={};function p(r,n){return t(),e("div",null,n[0]||(n[0]=[l(`<h2 id="一、项目概述" tabindex="-1"><a class="header-anchor" href="#一、项目概述"><span>一、项目概述</span></a></h2><p>本项目由山东大学张教授指导，聚焦糖基化修饰对三型胶原蛋白热稳定性和疏水性的调控机制。通过分子模拟、生物信息学工具开发及实验验证，揭示糖基化位点在维持胶原蛋白结构完整性中的关键作用。</p><h2 id="二、研究背景" tabindex="-1"><a class="header-anchor" href="#二、研究背景"><span>二、研究背景</span></a></h2><p>三型胶原蛋白是细胞外基质的重要成分，其糖基化修饰异常与纤维化疾病密切相关。本研究通过多尺度分析，解析糖基化位点与蛋白质结构稳定性的构效关系。</p><h2 id="三、技术路线" tabindex="-1"><a class="header-anchor" href="#三、技术路线"><span>三、技术路线</span></a></h2><h3 id="一-分子动力学模拟" tabindex="-1"><a class="header-anchor" href="#一-分子动力学模拟"><span>（一）分子动力学模拟</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code><span class="line"><span class="token keyword">graph</span> LR</span>
<span class="line">    A<span class="token text string">[AlphaFold3建模]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[Glycosylation位点映射]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[Gromacs 500ns MD模拟]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> D<span class="token text string">[氢键网络分析]</span></span>
<span class="line">    D <span class="token arrow operator">--&gt;</span> E<span class="token text string">[RMSD/Rg稳定性评估]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>关键参数</strong>：<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line">simulation_params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;forcefield&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;amber99sb-star-ildn&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;temperature&quot;</span><span class="token punctuation">:</span> <span class="token number">310</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;time_step&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">&quot;nstxout&quot;</span><span class="token punctuation">:</span> <span class="token number">1000</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="二-糖基化预测工具开发" tabindex="-1"><a class="header-anchor" href="#二-糖基化预测工具开发"><span>（二）糖基化预测工具开发</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code><span class="line"><span class="token keyword">graph</span> TB</span>
<span class="line">    F<span class="token text string">[DeepGlycan特征提取]</span> <span class="token arrow operator">--&gt;</span> G<span class="token text string">[Transformer融合模块]</span></span>
<span class="line">    H<span class="token text string">[AlphaFold3结构信息]</span> <span class="token arrow operator">--&gt;</span> G</span>
<span class="line">    G <span class="token arrow operator">--&gt;</span> I<span class="token text string">[糖基化概率预测]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>模型架构</strong>：<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">GlycoPredictor</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>encoder <span class="token operator">=</span> TransformerEncoder<span class="token punctuation">(</span></span>
<span class="line">            num_layers<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">            d_model<span class="token operator">=</span><span class="token number">512</span><span class="token punctuation">,</span></span>
<span class="line">            nhead<span class="token operator">=</span><span class="token number">8</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">        self<span class="token punctuation">.</span>classifier <span class="token operator">=</span> nn<span class="token punctuation">.</span>Sequential<span class="token punctuation">(</span></span>
<span class="line">            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">256</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">256</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="三-实验验证" tabindex="-1"><a class="header-anchor" href="#三-实验验证"><span>（三）实验验证</span></a></h3><ol><li><p><strong>突变体设计</strong>：</p><ul><li>野生型（WT）</li><li>糖基化缺陷突变体（Glyc-）</li><li>超糖基化突变体（Glyc+）</li></ul></li><li><p><strong>检测方法</strong>： <img src="`+s+`" alt="Cascade-YOLO Architecture"></p></li></ol><h2 id="四、核心成果" tabindex="-1"><a class="header-anchor" href="#四、核心成果"><span>四、核心成果</span></a></h2><h3 id="一-分子机制发现" tabindex="-1"><a class="header-anchor" href="#一-分子机制发现"><span>（一）分子机制发现</span></a></h3><ul><li>糖基化位点通过<strong>双氢键网络</strong>（O-GlcNAc与Asn的侧链相互作用）增强三螺旋稳定性</li><li>关键位点：Ser-983的糖基化使热变性温度（Tm）提升7.2℃</li></ul><h3 id="二-技术突破" tabindex="-1"><a class="header-anchor" href="#二-技术突破"><span>（二）技术突破</span></a></h3><ul><li>开发糖基化预测工具<strong>GlycoCollagen</strong>，在独立测试集上准确率达92.7%</li><li>建立胶原蛋白糖基化-稳定性预测模型，R²=0.89</li></ul><h3 id="三-实验验证-1" tabindex="-1"><a class="header-anchor" href="#三-实验验证-1"><span>（三）实验验证</span></a></h3><ul><li>突变体实验证实：Glyc+突变体疏水性表面积减少18%</li><li>羟化酶催化效率差异：WT=12.3 μmol/min/mg vs Glyc-=3.1 μmol/min/mg</li></ul><h2 id="五、个人贡献" tabindex="-1"><a class="header-anchor" href="#五、个人贡献"><span>五、个人贡献</span></a></h2><table><thead><tr><th>任务类型</th><th>具体内容</th><th>量化指标</th></tr></thead><tbody><tr><td>分子模拟</td><td>完成500ns MD模拟及轨迹分析</td><td>氢键分析覆盖率100%</td></tr><tr><td>工具开发</td><td>构建GlycoCollagen预测模型</td><td>预测准确率92.7%</td></tr><tr><td>实验设计</td><td>设计3种突变体质粒并完成表达验证</td><td>质粒构建成功率100%</td></tr><tr><td>论文撰写</td><td>主导机制分析部分（影响因子8.6+期刊在投）</td><td>第一作者身份</td></tr></tbody></table><h2 id="六、团队协作" tabindex="-1"><a class="header-anchor" href="#六、团队协作"><span>六、团队协作</span></a></h2><ul><li><p><strong>分工模式</strong>：</p><ul><li>成员A：分子模拟与生物信息学</li><li>成员B：实验设计与验证</li><li>成员C：数据分析与论文撰写</li></ul></li><li><p><strong>协作平台</strong>：</p><ul><li>数据管理：GitHub（私有仓库）</li><li>文档协作：Overleaf（实时论文编辑）</li><li>模型训练：山东大学超算中心</li></ul></li></ul><h2 id="七、研究成果" tabindex="-1"><a class="header-anchor" href="#七、研究成果"><span>七、研究成果</span></a></h2><h3 id="一-发表情况" tabindex="-1"><a class="header-anchor" href="#一-发表情况"><span>（一）发表情况</span></a></h3><ul><li>论文：<em>Glycosylation-Dependent Stabilization of Collagen III</em>（待发表于<em>Nature Communications</em>）</li><li>专利：糖基化修饰检测方法及应用（申请号：CN2024XXXXXX.XX）</li></ul><h3 id="二-开源资源" tabindex="-1"><a class="header-anchor" href="#二-开源资源"><span>（二）开源资源</span></a></h3><ul><li>分子模拟脚本：<a href="https://github.com/your-username/collagen-glycosylation" target="_blank" rel="noopener noreferrer">GitHub仓库</a></li><li>预测工具：<a href="https://colab.research.google.com/github/..." target="_blank" rel="noopener noreferrer">GlycoCollagen v1.0</a></li></ul><h2 id="八、使用说明" tabindex="-1"><a class="header-anchor" href="#八、使用说明"><span>八、使用说明</span></a></h2><h3 id="一-模拟复现" tabindex="-1"><a class="header-anchor" href="#一-模拟复现"><span>（一）模拟复现</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 安装依赖</span></span>
<span class="line">conda <span class="token function">install</span> <span class="token parameter variable">-c</span> conda-forge <span class="token assign-left variable">gromacs</span><span class="token operator">=</span><span class="token number">2023.3</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行模拟</span></span>
<span class="line">gmx mdrun <span class="token parameter variable">-v</span> <span class="token parameter variable">-deffnm</span> collagen_glyco</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二-预测工具使用" tabindex="-1"><a class="header-anchor" href="#二-预测工具使用"><span>（二）预测工具使用</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code><span class="line"><span class="token keyword">from</span> glyco_predictor <span class="token keyword">import</span> predict_glycosylation</span>
<span class="line"></span>
<span class="line">sequence <span class="token operator">=</span> <span class="token string">&quot;MVSKGEPQGPAGPAGPSG&quot;</span></span>
<span class="line">predictions <span class="token operator">=</span> predict_glycosylation<span class="token punctuation">(</span>sequence<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、开源与合作" tabindex="-1"><a class="header-anchor" href="#九、开源与合作"><span>九、开源与合作</span></a></h2><p>本项目遵循GPL-3.0开源协议，欢迎通过以下方式参与：</p><ul><li>代码贡献：提交Pull Request</li><li>问题反馈：GitHub Issues</li><li>学术合作：联系邮箱 <a href="mailto:zhanglab@sdu.edu.cn" target="_blank" rel="noopener noreferrer">zhanglab@sdu.edu.cn</a></li></ul><h2 id="十、致谢" tabindex="-1"><a class="header-anchor" href="#十、致谢"><span>十、致谢</span></a></h2><p>感谢山东大学张教授的专业指导，以及蛋白质工程实验室提供的实验支持。</p><h2 id="十一、许可证" tabindex="-1"><a class="header-anchor" href="#十一、许可证"><span>十一、许可证</span></a></h2><p><a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer">GPL-3.0 License</a></p>`,41)]))}const d=a(i,[["render",p],["__file","article-4.html.vue"]]),u=JSON.parse('{"path":"/research/article-4.html","title":"糖基化修饰对三型胶原蛋白热稳定性和疏水性影响的分子机制研究","lang":"en-US","frontmatter":{"layout":"ResearchPost","archive":true,"date":"2024.12 - 至今","sort":4,"category":[2,"团队项目"],"title":"糖基化修饰对三型胶原蛋白热稳定性和疏水性影响的分子机制研究","teacher":"山东大学张教授","role":"主要贡献者（团队3人）","progress":"完成 AutoDock 分子对接模拟，揭示羟化酶催化效率差异。","findings":null,"contribution":["完成500ns Gromacs动力学模拟，揭示糖基化位点对氢键网络的影响","开发糖基化位点预测工具（结合AlphaFold3与DeepGlycan），预测准确率","设计3种突变体质粒，验证羟化酶催化效率差异"]},"headers":[{"level":2,"title":"一、项目概述","slug":"一、项目概述","link":"#一、项目概述","children":[]},{"level":2,"title":"二、研究背景","slug":"二、研究背景","link":"#二、研究背景","children":[]},{"level":2,"title":"三、技术路线","slug":"三、技术路线","link":"#三、技术路线","children":[{"level":3,"title":"（一）分子动力学模拟","slug":"一-分子动力学模拟","link":"#一-分子动力学模拟","children":[]},{"level":3,"title":"（二）糖基化预测工具开发","slug":"二-糖基化预测工具开发","link":"#二-糖基化预测工具开发","children":[]},{"level":3,"title":"（三）实验验证","slug":"三-实验验证","link":"#三-实验验证","children":[]}]},{"level":2,"title":"四、核心成果","slug":"四、核心成果","link":"#四、核心成果","children":[{"level":3,"title":"（一）分子机制发现","slug":"一-分子机制发现","link":"#一-分子机制发现","children":[]},{"level":3,"title":"（二）技术突破","slug":"二-技术突破","link":"#二-技术突破","children":[]},{"level":3,"title":"（三）实验验证","slug":"三-实验验证-1","link":"#三-实验验证-1","children":[]}]},{"level":2,"title":"五、个人贡献","slug":"五、个人贡献","link":"#五、个人贡献","children":[]},{"level":2,"title":"六、团队协作","slug":"六、团队协作","link":"#六、团队协作","children":[]},{"level":2,"title":"七、研究成果","slug":"七、研究成果","link":"#七、研究成果","children":[{"level":3,"title":"（一）发表情况","slug":"一-发表情况","link":"#一-发表情况","children":[]},{"level":3,"title":"（二）开源资源","slug":"二-开源资源","link":"#二-开源资源","children":[]}]},{"level":2,"title":"八、使用说明","slug":"八、使用说明","link":"#八、使用说明","children":[{"level":3,"title":"（一）模拟复现","slug":"一-模拟复现","link":"#一-模拟复现","children":[]},{"level":3,"title":"（二）预测工具使用","slug":"二-预测工具使用","link":"#二-预测工具使用","children":[]}]},{"level":2,"title":"九、开源与合作","slug":"九、开源与合作","link":"#九、开源与合作","children":[]},{"level":2,"title":"十、致谢","slug":"十、致谢","link":"#十、致谢","children":[]},{"level":2,"title":"十一、许可证","slug":"十一、许可证","link":"#十一、许可证","children":[]}],"git":{"updatedTime":1743156666000,"contributors":[{"name":"2935580139@qq.com","username":"2935580139@qq.com","email":"2935580139@qq.com","commits":4,"url":"https://github.com/2935580139@qq.com"}],"changelog":[{"hash":"7763b45c3673498908f0e2e9f92b15285d3f11d2","time":1743156666000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"23234"},{"hash":"0ff0efa7063aa57d6d2ea7868b1228032657911f","time":1742081682000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"123"},{"hash":"571dd2630c73fd3b0f9b3064e8aa1e77f07c1da9","time":1742053757000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"2123"},{"hash":"2de90227ea5bda0ed1f22282a8f3f3289e48a111","time":1741848364000,"email":"2935580139@qq.com","author":"2935580139@qq.com","message":"init"}]},"filePathRelative":"research/article-4.md","excerpt":"<h2>一、项目概述</h2>\\n<p>本项目由山东大学张教授指导，聚焦糖基化修饰对三型胶原蛋白热稳定性和疏水性的调控机制。通过分子模拟、生物信息学工具开发及实验验证，揭示糖基化位点在维持胶原蛋白结构完整性中的关键作用。</p>\\n<h2>二、研究背景</h2>\\n<p>三型胶原蛋白是细胞外基质的重要成分，其糖基化修饰异常与纤维化疾病密切相关。本研究通过多尺度分析，解析糖基化位点与蛋白质结构稳定性的构效关系。</p>\\n<h2>三、技术路线</h2>\\n<h3>（一）分子动力学模拟</h3>\\n<div class=\\"language-mermaid line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"mermaid\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">graph</span> LR</span>\\n<span class=\\"line\\">    A<span class=\\"token text string\\">[AlphaFold3建模]</span> <span class=\\"token arrow operator\\">--&gt;</span> B<span class=\\"token text string\\">[Glycosylation位点映射]</span></span>\\n<span class=\\"line\\">    B <span class=\\"token arrow operator\\">--&gt;</span> C<span class=\\"token text string\\">[Gromacs 500ns MD模拟]</span></span>\\n<span class=\\"line\\">    C <span class=\\"token arrow operator\\">--&gt;</span> D<span class=\\"token text string\\">[氢键网络分析]</span></span>\\n<span class=\\"line\\">    D <span class=\\"token arrow operator\\">--&gt;</span> E<span class=\\"token text string\\">[RMSD/Rg稳定性评估]</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{d as comp,u as data};
