---
date: 06/2025
layout: ResearchPost
sort: 0
category: 
  - 3
  - Top 5 Gold Prize, BYU CryoET Challenge 2025, Kaggle Competition
title: Locating Bacterial Flagellar Motors 
teacher: None
---
## projectDescription:
• Designed an automated pipeline for identifying sparse bacterial flagellar motors in low-SNR 3D Cryo-ET images. 

• Developed a “2.5D slicing” strategy by stacking adjacent tomographic slices into multi-channel 2D inputs, allowing effective reuse of pre-trained 2D models while retaining 3D spatial context. 

• Led model training and optimization based on YOLOv11, incorporating MixUp, cosine learning rate decay, and 4 fold cross-validation to improve generalization on noisy, imbalanced data. 

• Implemented a custom 3D Non-Maximum Suppression algorithm to resolve spatially redundant predictions and significantly enhance detection precision and F₂-Score. 

• Constructed the full inference pipeline with model ensembling and dual-threshold filtering, ensuring high recall under the β=2 evaluation metric. 