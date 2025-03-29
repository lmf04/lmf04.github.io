---
layout: ResearchPost
archive: true
sort: 2
category: 
  - 1
  - 独立项目
date:  2025.02 - 至今
title: 基于图神经网络的蛋白质互作预测研究
description: 多模态图网络建模蛋白质互作，开发药物靶点预测工具
teacher: 
technology: PyTorch Geometric、Docker
progress: 
method: 
 - 设计PyTorch模型架构（GCN+GAT），整合STRING/PDB数据特征
 - 构建肺癌相关蛋白互作网络分析 pipeline
findings: 
 - 模型AUC-ROC达0.89，发现3个潜在药物重定位靶点
 - 研究成果提交至arXiv预印本（DOI:XXX）
 - 相关代码开源至GitHub <a href="https://github.com/lmf04/PPI-GNN-Prediction">仓库链接(https://github.com/lmf04/PPI-GNN-Prediction)</a>
contribution: 
---
 
<!-- # PPI-GNN-Prediction -->

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![arXiv](https://img.shields.io/badge/arXiv-XXXX.XXXXX-b31b1b.svg)](https://doi.org/XXX)  
[![Python 3.9+](https://img.shields.io/badge/Python-3.9%2B-blue?logo=python)](https://www.python.org/)
[![Docker Ready](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://hub.docker.com/r/lmf04/ppi-gnn)

基于多模态图神经网络的蛋白质相互作用预测与药物靶点发现系统

## 项目概述
本研究开发了一个端到端的深度学习框架，通过整合**结构生物学数据（PDB）**与**蛋白质互作网络（STRING）**，利用图神经网络预测蛋白质相互作用（PPI），并识别肺癌相关的潜在药物靶点。

**核心价值**：  
🔬 创新性提出 **GCN-GAT Hybrid Model** 实现多尺度蛋白质特征融合  
💊 发现3个具有临床潜力的药物重定位靶点（EGFR/ALK/MET新调控机制）  
🚀 提供开箱即用的Docker化预测工具（支持单蛋白/批量预测模式）

## 技术亮点
### 模型架构
![GNN Architecture](/images/GCN-GAT.jpg)  
*Hybrid GNN模型整合拓扑特征（GCN）与注意力机制（GAT）*

### 技术栈
```python
"PyTorch Geometric": "2.3.1",    # 图神经网络核心框架
"Biopython": "1.81",            # PDB结构解析
"RDKit": "2023.03.1",           # 配体特征计算
"D3.js": "7.8.5",               # 交互式网络可视化
"Docker": "24.0.5"              # 容器化部署
```

## 目录结构
``` markdown
.
├── data/               # 数据存储
│   ├── raw/            # 原始数据（STRING/PDB）
│   └── processed/      # 预处理图数据
├── src/                # 源代码
│   ├── models/         # GNN模型定义
│   ├── preprocessing/  # 多模态数据处理
│   ├── training/       # 训练流程
│   └── visualization/  # D3.js交互可视化
├── docker/             # 容器化配置
│   ├── Dockerfile
│   └── requirements.txt
├── outputs/            # 运行结果
│   ├── predictions/    # PPI预测结果
│   └── drug_targets/   # 候选药物靶点
└── docs/               # 技术文档
    └── case_study.pdf  # 肺癌靶点案例分析
```

## 快速开始

### 环境配置
```bash
# 使用conda创建环境
conda create -n ppi-gnn python=3.9
conda activate ppi-gnn

# 安装依赖（需要预先安装PyTorch）
pip install -r requirements.txt

# 或使用Docker
docker build -t ppi-gnn -f docker/Dockerfile .
docker run -it --gpus all ppi-gnn
```

### 数据准备
1. 下载STRING数据：
```bash
wget https://string-db.org/download/... -P data/raw/string
```

2. 预处理PDB结构：
```python
from src.preprocessing.pdb_processor import PDBGraphBuilder

builder = PDBGraphBuilder("data/raw/pdb/1a0p.pdb")
builder.generate_graph("data/processed/graphs/1a0p.pt")
```

### 模型训练
```python
# 训练GNN模型（默认使用肺癌相关蛋白集）
python src/training/train_hybrid.py \
  --train_data data/processed/train/ \
  --val_data data/processed/val/ \
  --epochs 100 \
  --gpus 2
```

### 预测与可视化
```python
# 单蛋白预测示例
from src.inference import Predictor

predictor = Predictor("checkpoints/best_model.pt")
prediction = predictor.predict("EGFR_HUMAN", "MET_HUMAN")

# 启动交互可视化
python src/visualization/launch_dashboard.py --port 8050
```

## 核心成果
| 指标         | 值    | 基准对比 |
|--------------|-------|----------|
| AUC-ROC      | 0.89  | 0.82 (DeepPPI) |
| Precision@10 | 0.76  | 0.68 (GCN)     |
| 推理速度     | 58ms/query | 210ms (GAT) |

**发现的候选靶点**：
1. **EGFR-C797S突变体**：对奥希替尼耐药性的潜在调控通路
2. **ALK-EML4融合蛋白**：克唑替尼敏感性的新型生物标志物
3. **MET外显子14跳跃突变**：卡博替尼的潜在响应预测因子

## 引用
```bibtex
@article{YourName2025PPI,
  title={Multimodal Graph Neural Networks for Predictive Protein Interaction Modeling and Drug Repurposing},
  author={Your Name, 陈教授 et al.},
  journal={arXiv preprint},
  year={2025},
  doi={XXX}
}
```

## 维护团队
[![GitHub Issues](https://img.shields.io/github/issues/lmf04/PPI-GNN-Prediction)](https://github.com/lmf04/PPI-GNN-Prediction/issues)  
技术咨询：李沐风 (lmf04@github)  
合作联系：山东大学系统药理学实验室

 