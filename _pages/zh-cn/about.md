---
permalink: /
title: "CV"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- 我是山东大学一名大三本科生，专业为生物科学，主要课程有线性代数、微积分、生物统计、生物信息学、生物化学、遗传学、分子生物学、结构生物学等，我的研究方向为单细胞分析、蛋白质结构预测，我加入XX导师的实验室，负责实验室的数据分析工作，我使用的开发语言主要有Python和R，
开发工具主要有VsCode、RStudio、PyCharm等，用到的数据库主要有GEO（基因表达数据库）、KEGG（代谢通路数据库）、Reactome，软件工具主要有数据分析工具：R（GSEA、MetaboAnalyst）、Python（pandas、numpy、matplotlib），网络分析工具主要有Cytoscape，代谢通路建模工具主要有COBRA Toolbox（MATLAB或Python）。
目前我已完成单细胞分析论文发表和蛋白质预测工具开发，我的研究重点是机器学习预测复杂的蛋白质动态结构和蛋白质的复合物以及蛋白质和蛋白质之间相互作用的建模。 -->
<div>
  <a href="/">English</a>
</div>

<div>
<a href="/zh-cn/about">中文</a>
</div>

 <h1>教育</h1> 
  <ul>
    <li>山东大学, 生物本科, 2022.09 - 2026.06</li>
    <li>主要课程: 线型代数 | 微积分 | 生物统计学 | 生物信息学 | 生物化学 | 物理化学 | 分子生物学 | 遗传学 | 结构生物学 | 细胞生物学| 微生物学 | 免疫生物学 | 计算思维(C语言及算法) | 人工智能基础 | matlab数学建模 | 实验数据分析和软件</li>
    <li>研究方向：
      <ul>
       <li>单细胞分析：
          <ul>
            <li>癌症生物标志物发现</li>
            <li>数据分析工具的开发</li>
          </ul>
        </li>
        <li>机器学习：
          <ul>
            <li>蛋白质动态结构预测</li>
            <li>蛋白质复合物相互作用的建模</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

# 研究亮点

* 核心成就
  * 出版物：单细胞分析领域的第一作者论文（期刊名称，影响因子 = X）
* 工具开发:
  * 自主研发蛋白质结构预测工具（基于 Python/R）.
  * 开发了具有自动分析能力的高通量细胞计数工具.
* 模型构建:构建基于深度学习的框架，用于预测蛋白质动态构象（使用 TensorFlow/PyTorch）.
* 技术突破
  * 单细胞工艺优化:
    * 单细胞数据分析的数据清理效率提高了 40%.
    * 自动分析工具支持 10 多个癌症数据集.
  * 蛋白质建模:
    * 使用改进的 AlphaFold2 模型预测蛋白质复合物相互作用的准确率达到 92%.

# 科研项目
### 1. 微生物对海洋环境影响的研究
<div>课题组 2023.06-2024.04</div>
<div>方法：</div>

1、多点采集海水样本
2、提取微生物并过滤泥沙
3、检测海水PH值、盐度
4、通过过虑法提取水的微生物
5、分析滤纸的微生物

<div>贡献:</div>

  * 发现微生物和水中的盐度和碳含量强相关，微生物较多的水里碳含量更加稳定。
  * 全程参与湿实验
  * 主要用R语言进行了随机森林分析数据并绘制数据视图
  * 获取得了国家三等奖
  
### 2. 单细胞分析和癌症生物标志物发现
<div>
 独立课题项目 2024.01-2025.03
</div>
<div>
技术栈: 
</div>
 * 开发工具：RStudio
 * 语言:R
 * 主要分析包:SeuratV5/ggplot2/SingleR/celldex/monocle3/tidyverse/dplyr/SeuratWrappers
<div>贡献:</div>

 * 开发了单细胞转录组学分析管道
 * 撰写了一篇论文《XXXX》（目前正在修订中，预计于 2025 年第二季度出版）

### 3. 蛋白质结构预测和工具开发
<div>独立课题项目 2024.09-2025.03</div>
<ul>
  <li>技术栈:
    <ul>
      <li>Python (Biopython/Rosetta) </li>
      <li>COBRA Toolbox </li>
      <li>Cytoscape</li>
    </ul>
  </li>
  <li>技术栈:
    <ul>
      <li>改进了 AlphaFold2 模型，以预测 20 多种海洋微生物蛋白的动态结构.</li>
      <li>改进了 AlphaFold2 模型，以预测 20 多种海洋微生物蛋白的动态结构.</li>
    </ul>
  </li>
</ul>



# 技能
* 湿实验会蛋白质提取、DNA提取、DNA测序、构建基因表达载体、微生物培养（赤酶酵母G115、大肠杆菌）、SDS-PAGE、蛋白质纯化、常用实验仪器使用。
* 分析工具和预测模型的开发、训练、测试和部署（Docker）等。
* 精通编程语言有C、C++、Python和R。
* 使用的开工具有VS Code、RStudio、PyCharm等。
* 熟练使用 Pandas、NumPy、Matplotlib、Seaborn、scikit-learn、Pytorch、SeuratV5、ggplot2、jalviewg、AutoDockTools、Cytoscape、Open Babel GUI、TBtools-II、PyMOL、gromacs、mafft、iqtree、monocle3、scanpy、Biopython。

# 出版物
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
  
# 仓库
  <ul>{% for post in site.repositories reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  

