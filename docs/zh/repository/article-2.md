---
layout: RepositoryPost
archive: true

date: 2024.01
address: https://github.com/lmf04/Single-cell-analysis
star: 0
fork: 0
sort: 0
title: 单细胞分析与癌症标志物挖掘
#研究方向
researchFocus:
 - 单细胞测序数据分析
 - 肿瘤微环境异质性研究

#项目描述
projectDescription:
- 基于 Seurat V5 构建 PDAC 患者单细胞分析 pipeline，揭示巨噬细胞动态变化
- 整合 Squidpy 进行空间转录组学分析，定位关键基因表达区域

#技术亮点
technicalHighlights:
- Harmony 整合批次效应消除
- 差异基因分析与 GSEA 通路富集
- UMAP 可视化与细胞亚群分类

description: 

---


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![DOI](https://zenodo.org/badge/DOI/XXX.svg)](https://doi.org/XXX)  
[![R Version](https://img.shields.io/badge/R-4.3%2B-blue?logo=R)](https://www.r-project.org/)
[![GitHub Stars](https://img.shields.io/github/stars/lmf04/PDAC-Macrophage-Analysis?style=social)](https://github.com/lmf04/PDAC-Macrophage-Analysis)

胰腺导管腺癌（PDAC）肿瘤微环境中巨噬细胞的单细胞转录组特征研究（R语言实现）

## 项目概述
本研究整合来自组织与外周血的**12,345个单细胞转录组数据**（scRNA-seq），通过跨平台生物信息学分析揭示：
- PDAC特异性巨噬细胞亚群的分子特征
- 基于外周血免疫细胞特征的液体活检新策略

核心创新点：
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

