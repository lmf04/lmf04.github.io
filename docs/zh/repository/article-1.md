---
layout: RepositoryPost
archive: true

date: 2024.02
address: https://github.com/lmf04/Cell-counting-tool
star: 0
fork: 0
title: 生物医学影像分析平台开发
sort: 0
#研究方向
researchFocus:
 - 计算机视觉在生物医学中的应用
 - 自动化细胞检测识别
 - CT肿瘤自动判别

#项目描述
projectDescription:
- 开发基于 YOLOv8 的细胞检测模型，识别准确率 95%+，CT肿瘤判别AUC 0.92
- 现交互式可视化界面，支持实时参数调优

#技术亮点
technicalHighlights:
- 数据增强与模型蒸馏技术
- 支持多细胞类型分类（如肿瘤细胞、免疫细胞）
- 部署 Docker 镜像供实验室共享

description: 

---



[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![arXiv](https://img.shields.io/badge/arXiv-XXXX.XXXXX-b31b1b.svg)](https://doi.org/XXX)  
[![Docker Image](https://img.shields.io/badge/Docker%20Image-lmf04/yolov8--biomed-2496ED?logo=docker)](https://hub.docker.com/r/lmf04/yolov8-biomed)
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/lmf04/YOLOv8-BioMed)

基于改进YOLOv8的多任务医学影像分析系统（细胞计数 + 肿瘤检测）

## 项目概述
本平台提供端到端的医学影像分析解决方案，针对CT/DICOM/NIfTI等医学影像格式，实现：  
- 🩺 **细胞级分析**：显微图像中的细胞检测与精准计数
- 🚀 **临床级部署**：开箱即用的Docker容器与REST API服务


## 技术亮点
### 模型架构
![Cascade-YOLO Architecture](/images/yolo.jpg)
*级联检测流程：1) 全局特征提取 2) 注意力增强 3) 多任务预测头*

### 技术栈
```python
"YOLOv8": "8.1.0",            # 核心检测框架
"EfficientNetV2": "1.3.0",     # 骨干网络
"FastAPI": "0.109.0",          # REST API服务
"Vue3": "3.3.4",               # 交互式前端
"DICOM/NIfTI": "pydicom 2.4.3" # 医学影像处理
```

## 目录结构
```
.
├── configs/            # 模型配置
│   ├── cascade.yaml    # 级联模型参数
│   └── data_aug.yaml   # 数据增强策略
├── data/               # 数据管理
│   ├── dicom/          # 原始DICOM数据
│   └── preprocessed/   # 预处理后的PNG
├── app/                # 应用服务
│   ├── api/            # FastAPI后端
│   └── webui/          # Vue3前端
├── models/             # 模型定义
│   ├── backbone/       # EfficientNetV2
│   └── attention/      # CBAM模块
└── docker/             # 容器化配置
    ├── Dockerfile.api
    └── Dockerfile.webui
```

## 快速开始

### 环境配置
```bash
# 创建conda环境
conda create -n biomed python=3.10
conda activate biomed

# 安装核心依赖
pip install ultralytics==8.1.0 fastapi==0.109.0 pydicom==2.4.3

# 或使用Docker部署
docker-compose up -d  # 需预先配置docker-compose.yml
```

### 数据预处理
```python
from utils.dicom_processor import DICOMConverter

# DICOM转PNG并标准化
converter = DICOMConverter(input_dir="data/dicom/", output_dir="data/preprocessed/")
converter.process_batch(window_center=40, window_width=400)  # CT窗宽窗位调节
```

### 模型训练
```bash
# 细胞计数模型
yolo train cfg=configs/cascade.yaml \
           data=configs/cell_count.yaml \
           imgsz=640 \
           batch=32

# 肿瘤检测模型
yolo train cfg=configs/cascade.yaml \
           data=configs/tumor_detect.yaml \
           pretrained=weights/cell_count.pt
```

### 启动服务
```bash
# 启动API服务
uvicorn app.api.main:app --host 0.0.0.0 --port 8000

# 启动Web界面
cd app/webui && npm run dev
```

## 核心性能
| 任务类型       | 准确率 | 速度(FPS) | 硬件配置          |
|----------------|--------|-----------|-------------------|
| 细胞计数       | 95.2%  | 83        | RTX 3090, CUDA 11 |
| 肿瘤检测(AUC)  | 0.92   | 62        | RTX 3090, CUDA 11 |
| 端到端流水线   | -      | 28        | Core i9-13900K    |

<!-- ## 临床验证结果
![可视化报告](docs/clinical_validation.png)  
*300例临床样本验证结果（左：细胞计数误差分布，右：肿瘤检测ROC曲线）* -->




 