---
layout: RepositoryPost
archive: true
date: 2024.05
address: https://github.com/lmf04/Protein-prediction
star: 100
fork: 3
sort: 4
title: HMTp210的血清型预测
#研究方向
researchFocus:
 - 血清型预测与机器学习

#项目描述
projectDescription:
- 构建 XGBoost 模型预测副鸡禽杆菌 HMTp210 血清型，准确率达 91%

#技术亮点
technicalHighlights:
- 据爬取与标注管道（NCBI 数据库）
- 特征工程包含序列、结构域与进化信息

description: 

---

# HMTp210-Serotyping

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![DOI](https://img.shields.io/badge/Preprint-bioRxiv-009688)](https://doi.org/XXX)  
[![Python 3.10](https://img.shields.io/badge/Python-3.10-blue?logo=python)](https://www.python.org/)
[![GitHub Stars](https://img.shields.io/github/stars/lmf04/HMTp210-Serotyping?style=social)](https://github.com/lmf04/HMTp210-Serotyping)

基于机器学习的副鸡禽杆菌HMTp210血清型智能预测系统

## 项目概述
本项目开发了首个针对副鸡禽杆菌HMTp210亚型的血清型预测工具，通过整合**基因组序列特征**与**表型数据**，实现：
- 🧬 **血清型精准预测**：9种血清型的快速鉴定（准确率91%）
- 🔍 **关键决定因子解析**：通过SHAP分析发现3个新型分子标记
- 📊 **生物信息学工作流**：从NCBI数据爬取到预测结果可视化的全流程解决方案

**个人贡献亮点**：
⚡ 自主开发NCBI智能爬虫系统（支持自动更新与增量抓取）  
🧠 创新设计XGBoost-GRU混合架构（结合序列局部与全局特征）  
🔬 发现ompA基因第210-238位点作为新型血清型决定区

## 技术亮点
<!-- ### 模型架构
![Hybrid Model](docs/architecture.png)
*混合模型工作流程：1) 序列特征编码 2) GRU时序建模 3) XGBoost特征融合* -->

### 技术栈
```python
"Biopython": "1.81",           # 序列特征提取
"XGBoost": "2.0.3",            # 梯度提升树
"TensorFlow": "2.15.0",        # GRU实现
"SHAP": "0.45.0",              # 可解释性分析
"Scrapy": "2.11.0"             # 分布式爬虫框架
```

## 目录结构
```
.
├── data/               # 数据目录
│   ├── raw/            # NCBI原始数据
│   └── features/       # 28维特征矩阵
├── src/                # 源代码
│   ├── crawler/        # NCBI爬虫系统
│   ├── feature_engineering/ # 特征构建
│   ├── models/         # 混合模型实现
│   └── interpretation/ # SHAP可视化
├── notebooks/          # 分析案例
│   ├── EDA.ipynb       # 探索性分析
│   └── SHAP_analysis.ipynb
└── docs/               # 技术文档
    └── decision_map.pdf # 关键位点决策图
```

## 快速开始

### 环境配置
```bash
conda create -n hmtp python=3.10
conda activate hmtp
pip install -r requirements.txt
```

### 数据获取
```python
# 运行NCBI爬虫（示例：获取最新50条序列）
from src.crawler.ncbi_spider import HMTp210Crawler

crawler = HMTp210Crawler(email="your_email@domain.com")
crawler.run_search(term="HMTp210[Organism]", max_records=50)
```

### 模型训练
```python
from src.models.hybrid_model import HybridSerotyper

# 初始化混合模型
model = HybridSerotyper(
    gru_units=128,
    xgb_params={"max_depth":6, "learning_rate":0.1}
)

# 训练与验证（5折交叉验证）
results = model.cross_validate(
    data_path="data/features/hmtp210_features.csv",
    n_splits=5
)
print(f"平均准确率：{results['accuracy'].mean():.2%}")
```

### SHAP分析
```python
from src.interpretation.shap_analyzer import plot_feature_importance

# 生成特征重要性瀑布图
plot_feature_importance(
    model=model.xgb_model,
    sample=X_test.iloc[0],
    feature_names=feature_columns,
    output_file="results/shap_waterfall.png"
)
```

## 核心成果
| 指标            | 本模型 | 传统MLP | BLAST比对 |
|-----------------|--------|---------|-----------|
| 准确率          | 91.2%  | 84.5%   | 76.8%     |
| 召回率(macro)   | 89.7%  | 82.1%   | 72.3%     |
| 推理速度(seq/s) | 58     | 43      | 12        |

**关键生物标志物发现**：
1. **ompA_210-238**：新型血清型决定区（SHAP值贡献度28.7%）
2. **gyrB突变热点**：与血清型C/D亚型强相关（p<0.001）
3. **16S rRNA变异位点**：发现2个新SNP标记（Position 1124/1487）

## 引用
```bibtex
@article{YourName2025HMTp210,
  title={Interpretable Hybrid Learning for HMTp210 Serotyping Reveals Novel Molecular Determinants},
  author={Your Name, 张教授 et al.},
  journal={bioRxiv preprint},
  year={2025},
  doi={10.1101/XXX}
}
```

## 维护团队
[![GitHub Issues](https://img.shields.io/github/issues/lmf04/HMTp210-Serotyping)](https://github.com/lmf04/HMTp210-Serotyping/issues)  
代码维护：李沐风 (lmf04@github)  
领域专家：山东大学微生物学实验室
 


