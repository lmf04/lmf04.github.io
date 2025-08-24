---
layout: RepositoryPost
archive: true

date: 2024.06
address: https://github.com/lmf04/Single-Cell-Analysis
star: 0
fork: 0
sort: 0
title: Spatiotemporal Transcriptomic Analysis of Tumor-Associated Macrophage Heterogeneity and Bifunctional Molecular Nodes in Pancreatic Ductal Adenocarcinoma

#项目描述
projectDescription:
- Preprocessed and clustered scRNA-seq data (16 PDAC tumors, 3 normal tissues; 16 PDAC PBMCs, 4 healthy PBMCs) using Harmony for batch correction and SingleR/Seurat v5 for annotation, to identify spatial collapse of T cells and TAM expansion associated with COL1A1-driven ECM remodeling. 
- Conducted pseudotime trajectory inference on myeloid-to-macrophage lineages via Monocle3, uncovering epigenetic silencing of cytotoxic pathways (GZMA/NKG7 downregulation) and upregulation of ribosomal biogenesis in PDAC-derived TAMs. 
- Processed and analyzed 10x Xenium FFPE spatial transcriptomic data using Squidpy + Scanpy, followed by DESeq2 and FindAllMarkers for DEG analysis, and GO/KEGG enrichment to identify key immune modulators. 
- Identified bifunctional regulatory molecules including NOP53 (activates p53, suppresses PI3K-AKT) and SPP1 (involved in both metastasis and anti-tumor immunity), and validated their spatial co-localization with TAMs and tumor cells. 
 