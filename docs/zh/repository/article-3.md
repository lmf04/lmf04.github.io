---
layout: RepositoryPost
archive: true
date: 2024.05
address: https://github.com/lmf04/Protein-prediction
star: 0
fork: 0
sort: 0
title: HMTp210的血清型预测
#研究方向
researchFocus:
 - 血清型预测与机器学习

#项目描述
projectDescription:
- 训练模型预测副鸡禽杆菌 HMTp210 血清型

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
- 📊 **生物信息学工作流**：从NCBI数据爬取到预测结果可视化的全流程解决方案

**个人贡献亮点**：
⚡ 自主开发NCBI智能爬虫系统（支持自动更新与增量抓取）  

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





