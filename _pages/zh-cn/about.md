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
    <li>主要课程: 线型代数 | 微积分 | 生物统计学 | 生物信息学 | 有机化学及实验 | 无机及分析化学及实验 | 物理及实验 | 物理化学及实验 | 分子生物学及实验 | 生物化学及实验 | 遗传学及实验 | 结构生物学 | 细胞生物学及实验 | 微生物学及实验 | 免疫生物学 | 计算思维(C语言及算法) | 人工智能基础 | matlab数学建模 | 实验数据分析和软件</li>
  </ul>


# 科研项目
### 1. 微生物对海洋环境影响的研究
<div>课题组项目 2023.06-2024.04</div>
<div>介绍：</div>
通过研究海水中的微生物发现微生物和水中的盐度和碳含量强相关，微生物较多的水里碳含量更加稳定，获取得了国家三等奖。
<div>方法：</div>
1、分别采集黄河入海口及附近海水和淡水;

2、分为有微生物无光照、无微生物无光照、无微生物有光照和有微生物有光照（对照组）培养水样品，每组各1升样品15瓶，共60瓶。在培养第0，1，3，15，30，60天各取样一次测定样品中碳含量、pH值及盐度

<div>贡献:</div>

  * 全程参与湿实验碳含量测定等
  * 主要用R语言进行了随机森林分析数据并绘制数据视图
  
### 2. PDAC组织和外周血中巨噬细胞的变化
<div>
 独立课题项目 2024.01至今
</div>
<div>介绍：</div>
PDAC是致死率极高的疾病，其发现晚且治疗后效果不佳，通过生物信息学技术分析健康组织和外周血和PDAC组织和PDAC患者的外周血中的巨噬细胞和基因表达的差异，了解PDAC患病初期时组织和外周血中的基因表达情况和巨噬细胞的状况，可以助于提早发现PDAC的产生。
<div>方法：</div>
用seurat处理PDAC患者和作为对照组的健康人的单细胞测序数据，进行了绘制umap图，harmony整合，基因表达差异分析，基因富集通路分析，用squidpy处理PDAC组织的空间转录组结果
<div>贡献:</div>

 * R语言分析代码开发，使用了SeuratV5、ggplot2、jalviewg等分析包， [见代码库](https://github.com/lmf04/Single-cell-analysis)
  
 * 撰写了一篇论文《XXXX》（目前正在修订中，预计于 2025 年第二季度出版）


### 3. 副鸡禽杆菌血清型差异及抗原表位分析

<div>课题组项目 2024.05-2025.12</div>
<div>介绍：</div>
对副鸡禽杆菌进行准确的分型鉴定以及疫苗开发对于禽健康养殖具有极其重要的意义。对细菌的血清差异分析以及对致病菌的免疫原性的研究，从关键的毒力因子入手入HMtp210。本研究通过生物信息学研究方法，对副鸡禽杆菌血清型差异进行分析,
副鸡禽杆菌基因组有了较强的基因保守性及泛基因组封闭性，与血清型间不具显著的进化聚类关系。基于副鸡禽杆菌毒力因子血凝素蛋白 HMTp210，可对进行血清分型，副鸡禽杆菌的两种表面多糖毒力因子脂多糖和荚膜多糖，均存在血清型间差异。
<div>方法：</div>

 * 在NCBI中爬取了所有有血清型注释的副鸡禽杆菌血凝素HMTp210并且用mafft进行序列比对，之后用iqtree做进化树
 * 用机器学习的支持向量机方法以血凝素HMTp210序列的疏水性作为特征输入，训练了用于预测血清型的模型。
<div>贡献:</div>

 * 编写了爬虫采集了ncbi中所有有血清型标注的HMTp210数据
 * 编写了机器学习的代码，开发并训练了预测模型  [见代码库](https://github.com/lmf04/)

### 4. 糖基化对三型胶原蛋白热稳定性和疏水性的影响

<div>课题组项目 2024.12至今</div>
<div>介绍：</div>
三型胶原蛋白在美容方面具有很大潜力，但是其热稳定性差，疏水性强，难以保持液态，探究糖基化是否能让三型胶原蛋白保持液态，提升其在美容美白方面的应用价值。
<div>方法：</div>

 * 在uniprot上下载所有COL3A1表达的三型胶原蛋白的α1链的氨基酸序列，做序列比对和进化树绘制，用expasy预测其糖基化位点，用autodock分子对接预测其与羟基化酶的亲和性。
<div>贡献:</div>

 * 用autodock研究了羟化酶对不同三型胶原蛋白的催化效率

### 5. XXXX

<div>课题组项目 2024.12至今</div>
<div>介绍：</div>
XX
<div>方法：</div>

 * XXX
<div>贡献:</div>

 * XXX


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
  

