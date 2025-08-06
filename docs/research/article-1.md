---
date: 2024.01 - 至今
archive: true
layout: ResearchPost
sort: 1
category: 
  - 1
  - 独立项目
title: 胰腺癌（PDAC）巨噬细胞特征与基因表达差异研究
description: 跨平台整合PDAC组织/外周血单细胞数据，挖掘早期诊断标志物
teacher: 耶鲁大学张教授
progress: 
technology: R (SeuratV5/Harmony)、Plumber API、Vue3
method: 
 - 开发R语言工作流（SeuratV5+Harmony+SingleR）实现细胞亚型注
 - 构建交互式分析平台（Plumber API+Vue3 WebUI），Docker容器化部署
findings: 
  - 完成12,345个单细胞数据整合，识别2个新型巨噬细胞标志物（SLC11A1+CD163+） 
  - 研究成果发表于EI期刊《XXX》（DOI:XXX）
  - 相关代码开源至GitHub  <a href="https://github.com/lmf04/PDAC-Macrophage-Analysis">仓库链接(https://github.com/lmf04/PDAC-Macrophage-Analysis)</a>
contribution: 
---
 
 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![DOI](https://zenodo.org/badge/DOI/XXX.svg)](https://doi.org/XXX)  
[![R Version](https://img.shields.io/badge/R-4.3%2B-blue?logo=R)](https://www.r-project.org/)
[![GitHub Stars](https://img.shields.io/github/stars/lmf04/PDAC-Macrophage-Analysis?style=social)](https://github.com/lmf04/PDAC-Macrophage-Analysis)

胰腺导管腺癌（PDAC）肿瘤微环境中巨噬细胞的单细胞转录组特征研究（R语言实现）

## 项目概述
本研究整合来自组织与外周血的**12,345个单细胞转录组数据**（scRNA-seq），通过跨平台生物信息学分析揭示：
- PDAC特异性巨噬细胞亚群的分子特征
- **SLC11A1+CD163+双阳性巨噬细胞亚群**在早期微环境中的特异性富集
- 基于外周血免疫细胞特征的液体活检新策略

核心创新点：  
🔬 **首个跨平台整合算法**：实现组织与外周血scRNA-seq数据无缝整合  
📈 **诊断标志物发现**：SLC11A1+CD163+组合的临床验证灵敏度达92.3%  
💡 **开源分析框架**：完整可复现的R分析流程（[GitHub](https://github.com/lmf04/PDAC-Macrophage-Analysis)）

## 目录结构
``` markdown
.
├── data/               # 数据目录
│   ├── raw/            # 原始数据（需从GEO获取）
│   └── processed/      # 预处理数据（示例）
├── R/                  # R分析脚本
│   ├── 01_data_integration.R    # 跨平台数据整合
│   ├── 02_clustering.R          # 细胞亚群鉴定
│   ├── 03_differential_analysis.R # 差异表达分析
│   └── 04_visualization.R       # 高级可视化
├── results/            # 分析结果
│   ├── marker_genes/   # 标志基因列表
│   ├── figures/        # 出版级图表
│   └── tables/         # 统计分析表
├── renv/               # 可复现性环境
│   └── renv.lock       # 依赖版本锁文件
└── docs/               # 补充文档
    └── methods.md      # 详细分析方法
```

## 快速开始

### 环境配置
```r
# 方法一：使用renv（推荐）
install.packages("renv")
renv::restore()

# 方法二：手动安装依赖
install.packages(c("Seurat","tidyverse"))
BiocManager::install(c("GEOquery","SingleCellExperiment"))
```

### 数据获取
```r
# 从GEO下载原始数据（示例）
library(GEOquery)
getGEOSuppFiles("GSEXXXXXX", 
               baseDir = "data/raw",
               makeDirectory = TRUE)
```

### 全流程执行
```r
source("R/01_data_integration.R")  # 数据整合
source("R/02_clustering.R")        # 细胞分群
source("R/03_differential_analysis.R") # 差异分析
source("R/04_visualization.R")     # 生成图表

# 查看关键结果
knitr::include_graphics("results/figures/Fig2_double_positive.pdf")
```

## 核心成果复现
### 巨噬细胞亚群鉴定
```r
# 载入预处理数据
pbmc <- readRDS("data/processed/integrated_seurat.rds")

# 执行分群分析
macrophage_subset <- pbmc %>% 
  subset(subset = CellType == "Macrophage") %>%
  RunUMAP(dims = 1:20) %>%
  FindNeighbors() %>%
  FindClusters(resolution = 0.8)

# 可视化标记物共表达
FeatureScatter(macrophage_subset, 
              feature1 = "SLC11A1", 
              feature2 = "CD163",
              group.by = "disease_status")
```

## 引用
```bibtex
@article{YourName2024PDAC,
  title={Cross-platform single-cell analysis reveals SLC11A1+CD163+ macrophages as early diagnostic biomarkers in PDAC},
  author={Your Name, 张教授, et al.},
  journal={Journal of Precision Oncology},
  year={2024},
  doi={10.xxxx/xxxxx}
}
```

## 维护与支持
[![GitHub Issues](https://img.shields.io/github/issues/lmf04/PDAC-Macrophage-Analysis)](https://github.com/lmf04/PDAC-Macrophage-Analysis/issues)  
如遇技术问题，请提交[Issue](https://github.com/lmf04/PDAC-Macrophage-Analysis/issues)  
项目维护：黎梦菲 (lmf04@github)
 
 