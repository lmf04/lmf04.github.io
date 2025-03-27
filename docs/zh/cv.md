---
home: false
title: 简历
layout: Empty
---

<div style="position:absolute;right:10px">
<Print></Print>
</div>

<h1 style="text-align: center;">个人简历</h1>

# **黎梦菲 | Mengfei Li**  
**邮箱**：2935580139@qq.com | **电话**：+86 XXX XXX XXXX  
**个人学术网站**：[https://lmf04.github.io](https://lmf04.github.io) | **GitHub**：[https://github.com/lmf04](https://github.com/lmf04)  


## **教育背景**  
**山东大学** | **生物科学学士** | 2022.09-2026.06  
- **GPA**：88/100（专业前8%）  
- **核心课程**：  
  ▶ **数学与统计**  
    • 线性代数 • 微积分 • 生物统计学 • Matlab数学建模  
  ▶ **计算生物学**  
    • 计算思维（C语言及算法） • 生物信息学 • 人工智能基础 • 实验数据分析（Python/R）  
  ▶ **生物科学**  
    • 分子生物学 • 结构生物学 • 遗传学 • 细胞生物学 • 微生物学 • 免疫生物学 • 发育生物学  
  ▶ **化学与物理**  
    • 生物化学 • 有机化学 • 物理化学 • 无机及分析化学 • 大学物理  
  ▶ **实验技能课**  
    • 分子生物学实验 • 生物化学实验 • 遗传学实验 • 微生物学实验 • 细胞生物学实验
    • 有机化学实验  • 物理化学实验  


## **科研经历**  

### **独立研究项目**  
#### 1. **胰腺癌（PDAC）巨噬细胞特征与基因表达差异研究**  
**2024.01 - 至今 | 导师：耶鲁大学陈教授**  
- **研究内容**：跨平台整合PDAC组织/外周血单细胞数据，挖掘早期诊断标志物  
- **技术方法**：  
  ▶ 开发R语言工作流（SeuratV5+Harmony+SingleR）实现细胞亚型注释  
  ▶ 构建交互式分析平台（Plumber API+Vue3 WebUI），Docker容器化部署  
- **技术栈**：R (SeuratV5/Harmony)、Plumber API、Vue3  
- **核心成果**：  
  ▶ 完成12,345个单细胞数据整合，识别2个新型巨噬细胞标志物（SLC11A1+CD163+）  
  ▶ 研究成果发表于EI期刊《XXX》（DOI: XXX），被审稿人推荐作为封面文章候选  
  ▶ 相关代码开源至GitHub  [仓库链接(https://github.com/lmf04/PDAC-Macrophage-Analysis)](https://github.com/lmf04/PDAC-Macrophage-Analysis)  

#### 2. **基于图神经网络的蛋白质互作预测研究**  
**2025.02 - 至今 | 导师：山东大学张教授**  
- **研究内容**：多模态图网络建模蛋白质互作，开发药物靶点预测工具  
- **技术方法**：  
  ▶ 设计PyTorch模型架构（GCN+GAT），整合STRING/PDB数据特征  
  ▶ 构建肺癌相关蛋白互作网络分析 pipeline  
- **技术栈**：PyTorch Geometric、D3.js、Docker  
- **核心成果**：  
  ▶ 模型AUC-ROC达0.89，发现3个潜在药物重定位靶点  
  ▶ 相关代码开源至GitHub  [仓库链接(https://github.com/lmf04/PPI-GNN-Prediction)](https://github.com/lmf04/PPI-GNN-Prediction)  
  ▶ 研究成果提交至arXiv预印本（DOI: XXX）  

#### 3. **YOLOv8生物医学影像分析平台开发**  
**2024.02 - 2025.06 | 导师：山东大学张教授**  
- **研究内容**：开发多任务目标检测模型，实现细胞计数与肿瘤判别  
- **技术方法**：  
  ▶ 级联YOLOv8架构（EfficientNetV2+CBAM注意力机制）  
  ▶ 构建DICOM/NIfTI格式预处理流水线  
  ▶ 构建交互式识别平台（FastAPI+Vue3 WebUI），Docker容器化部署  
- **技术栈**：YOLOv8、OpenCV、FastAPI  
- **核心成果**：  
  ▶ 细胞计数准确率95.2%，CT肿瘤判别AUC 0.92  
  ▶ 完成300例临床样本验证，检测效率提升400%  
  ▶ 相关代码开源至GitHub  [仓库链接(https://github.com/lmf04/YOLOv8-BioMed)](https://github.com/lmf04/YOLOv8-BioMed)  


### **团队合作项目**  
#### 1. **糖基化修饰对三型胶原蛋白的影响研究**  
**2024.12 - 至今 | 导师：山东大学张教授**  
- **个人角色**：主要贡献者（团队3人）  
- **具体贡献**：  
  ▶ 完成500ns Gromacs动力学模拟，揭示糖基化位点对氢键网络的影响  
  ▶ 开发糖基化位点预测工具（结合AlphaFold2与DeepGlycan），预测准确率89.7%  
  ▶ 设计3种突变体质粒，验证羟化酶催化效率差异  
  ▶ 相关成果发表于《Journal of Biological Chemistry》（DOI: XXX）  

#### 2. **副鸡禽杆菌血清型预测研究**  
**2024.05 - 2025.12 | 导师：山东大学张教授**  
- **个人角色**：主要执行者 （团队2人）  
- **具体贡献**：  
  ▶ 采集NCBI数据库2,347条HMTp210序列，构建28维特征矩阵  
  ▶ 开发XGBoost-GRU混合模型，准确率91%  
  ▶ 完成SHAP值可视化分析，揭示关键决定因子  
  ▶ 相关代码开源至GitHub [仓库链接(https://github.com/lmf04/HMTp210-Serotyping)](https://github.com/lmf04/HMTp210-Serotyping)  

#### 3. **海洋微生物与环境互作机制研究**  
**2023.06 - 2024.04 | 导师：山东大学董教授**  
- **个人角色**：主要执行者  
- **具体贡献**：  
  ▶ 完成200+份海水样本碳含量测定  
  ▶ 主导R语言随机森林分析，发现微生物丰度与碳含量强相关  
  ▶ 研究成果获国家级三等奖  


## **论文发表**  
1. **Single-cell transcriptomic profiling identifies novel biomarkers in colorectal cancer**  
   - **期刊**：EI收录（已发表） | **作者**：独立作者，陈教授（通讯） | **DOI**：XXX  
2. **基于图神经网络的蛋白质相互作用预测及药物靶点**  
   - **期刊**：arXiv预印本 | **作者**：独立作者，张教授（通讯） | **DOI**：XXX  
3. **基于YOLOv8的计算机视觉在生物医学领域的应用**  
   - **期刊**：arXiv预印本 | **作者**：独立作者，张教授（通讯） | **DOI**：XXX  


## **技能矩阵**  
| **技能维度**       | **具体能力**                                                                 |  
|--------------------|-----------------------------------------------------------------------------|  
| **湿实验技能**     | 蛋白质纯化、细胞培养（G115/大肠杆菌）、Western blot、SDS-PAGE               |  
| **编程语言**     | Python（精通） · R（熟练） · MATLAB（熟练） · C/C++（基础）                |
| **生物信息学**     |  Seurat/Scanpy、 AlphaFold2、AutoDock |  
| **算法开发**       | Pandas、NumPy、GCN/GAT、YOLO、scikit-learn、Pytorch                |  
| **工程化能力**     | Docker容器化、FastAPI微服务、交互式Web平台开发（Vue3）                     |  
| **可视化**       | ggplot2 · Seaborn · Plotly · PyMOL · UMAP                                 |

## **奖项与荣誉**  
- **山东大学一等奖学金**（2024 | 前5%）  
- **全国大学生生物竞赛三等奖**（2023 | 全国性竞赛）  


## **标准化考试**  
**TOEFL**：102（R:28, L:26, S:24, W:24）  


## **推荐人**  
1. **董教授** - 山东大学，海洋微生物生态，邮箱：dong@sdu.edu.edu  
2. **陈教授** - 耶鲁大学，肿瘤单细胞生物学，邮箱：chen@yale.edu  
3. **张教授** - 山东大学，微生物生物学，邮箱：zhang@sdu.edu.edu  

<!-- 其他信息（根据情况补充）
====== -->

<style lang="scss" scoped>
  /* #content{
     h1{margin: 16px 0 12px 0px;}
     h2{margin: 14px 0 10px 0px;}
     h3{margin: 12px 0 8px 0px;}
     h4{margin: 10px 0 6px 0px;}
     h5{margin: 8px 0 4px 0px;}
     h6{margin: 6px 0 2px 0px;}
ul{
  margin: 3px 0;
}
p,ol{ margin: 3px 0; }
  } */

</style>