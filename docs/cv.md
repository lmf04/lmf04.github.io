---
home: false
title: 简历
layout: Empty
---

<div style="position:absolute;right:10px">
<Print></Print>
</div>

<h1 style="text-align: center;">CV</h1>

### **Personal Information**
* **NAME**：Mengfei Li
* **Personal Website**: [https://lmf04.github.io](https://lmf04.github.io/)
* **GitHub**: [https://github.com/lmf04](https://github.com/lmf04)

### **EDUCATION**
##### **Shandong University** | Bachelor of Biological Sciences | 2022.09-2026.06 <br>
 * **GPA**：88/100 <br>
 * **Honors:**First-class Scholarship (top 10%), Third-class Scholarship


### **RESEARCH EXPERIENCE**
#### 1.Spatiotemporal Transcriptomic Analysis of Tumor-Associated Macrophage Heterogeneity and Bifunctional Molecular Nodes in Pancreatic Ductal Adenocarcinoma 
* **Research Assistant (remote), Supervised by Prof. Guangwei Zhang from USC**
* **06/2024-04/2025** 
• Preprocessed and clustered scRNA-seq data (16 PDAC tumors, 3 normal tissues; 16 PDAC PBMCs, 4 healthy PBMCs) using Harmony for batch correction and SingleR/Seurat v5 for annotation, to identify spatial collapse of T cells and TAM expansion associated with COL1A1-driven ECM remodeling. 
• Conducted pseudotime trajectory inference on myeloid-to-macrophage lineages via Monocle3, uncovering epigenetic silencing of cytotoxic pathways (GZMA/NKG7 downregulation) and upregulation of ribosomal biogenesis in PDAC-derived TAMs. 
• Processed and analyzed 10x Xenium FFPE spatial transcriptomic data using Squidpy + Scanpy, followed by DESeq2 and FindAllMarkers for DEG analysis, and GO/KEGG enrichment to identify key immune modulators. 
• Identified bifunctional regulatory molecules including NOP53 (activates p53, suppresses PI3K-AKT) and SPP1 (involved in both metastasis and anti-tumor immunity), and validated their spatial co-localization with TAMs and tumor cells. 


#### 2.Bioinformatics Research on HMTp210-Based Serotyping and Epitope Profiling of Avibacterium Paragallinarum 
* **Research Assistant, Supervised by Prof. Min Chen from Shandong University**
* **12/2024-03/2025**
• Led a full-stack genomic and structural bioinformatics analysis of HMTp210, a hemagglutinin protein from Avibacterium paragallinarum (Apg), and pioneered the first sequence-based serotyping model for Apg using 91 strains from NCBI. 
• Constructed a robust serotyping framework integrating phylogenetic tree building (PhyloPhlAn), pan-genome analysis (BPGA + MAFFT), and motif detection (MEME), classifying HMTp210 into 3 major serogroups (A/B/C) and 8 subtypes (A1–C3) based on Region2-specific divergence. 
• Applied AlphaFold2 for full-length 3D structure prediction of A/B/C representatives, revealing HMTp210 as a trimeric TAA (trimeric autotransporter adhesin) with well-defined head (β-sheet), stalk (“α-helix–loop–β”) and anchor (β-barrel) domains. 
• Performed B-cell epitope prediction using IEDB and Rankpep, identifying 6 conserved immunodominant epitopes enriched in Region2/3, including a novel “clover-shaped loop” structure with >95% cross-serotype conservation. 
• Identified A-type specific epitope (1634N–1640T) and C2-subtype–unique insertions, enabling development of a motif-based subtyping model and offering theoretical groundwork for subtype-specific recombinant vaccine design. 

#### 3.YOLOv8-Based Biomedical Image Analysis Platform Development 
* **Independent Project**
* **01/2025-02/2025**
• Developed a multi-task YOLOv8 detection model with EfficientNetV2 backbone and CBAM attention modules. The model detects and counts cells in microscopy images with 95.2% accuracy and locates and classifies lung tumors on CT scans, improving accuracy by 23% compared to traditional methods (p < 0.01). 
• Built an image preprocessing pipeline supporting DICOM and NIfTI formats to handle biomedical imaging data across different modalities. 
• Designed and implemented an interactive visualization platform using FastAPI for backend and Vue3 for frontend. The platform integrates preprocessing, model inference, annotation, and automated report generation to streamline clinical and research workflows. 
• Package the platform with Docker for deployment on servers and local workstations, ensuring compatibility across devices. The project is publicly available on GitHub. 

### **COMPETITION/PROJECT EXPERIENCE**                                                                          
#### 1.Glycoengineering to Enhance Thermal Stability of Type III Collagen 
* **China Undergraduate Life Science Competition**   
* **01/2025-present** 
• Constructed recombinant plasmid pRSFDuet-COL3A1 by preserving the Gly-X-Y repeats of type III collagen and adding a 4DANYTK glycosylation tag and 6His purification tag, based on multiple sequence alignment of 220 homologs. 
• Engineered a dual-plasmid expression system (pRSFDuet-COL3A1-AaFQ and pET45b-α1,6-GlcT) in E. coli BL21(DE3) to co-express AaFQ glycosyltransferase and produce glycosylated collagen (Glc-Col and Glcn-Col). 
• Assessed protein modification using SDS-PAGE and Western blot, which showed increased molecular weight and solubility in glycosylated forms compared to unmodified collagen. 
• Used AlphaFold3 and PyMOL to model surface accessibility and hydrophilicity of glycosylation sites, showing that the modified residues were located on exposed surface regions. 
• Confirmed structural integrity of glycosylated collagen with circular dichroism (CD) spectroscopy; the α-helical profile remained intact, supporting improved thermal stability. 

#### 2.Locating Bacterial Flagellar Motors 
* **Top 5 Gold Prize, BYU CryoET Challenge 2025, Kaggle Competition**
* **06/2025**
• Designed an automated pipeline for identifying sparse bacterial flagellar motors in low-SNR 3D Cryo-ET images. 
• Developed a “2.5D slicing” strategy by stacking adjacent tomographic slices into multi-channel 2D inputs, allowing effective reuse of pre-trained 2D models while retaining 3D spatial context. 
• Led model training and optimization based on YOLOv11, incorporating MixUp, cosine learning rate decay, and 4 fold cross-validation to improve generalization on noisy, imbalanced data. 
• Implemented a custom 3D Non-Maximum Suppression algorithm to resolve spatially redundant predictions and significantly enhance detection precision and F₂-Score. 
• Constructed the full inference pipeline with model ensembling and dual-threshold filtering, ensuring high recall under the β=2 evaluation metric. 

#### 3.Mechanistic Study of Coupled Drivers of Carbon–Nitrogen Turnover in the Yellow River Estuary 
* **Third Prize at the National Level, China Undergraduate Life Science Competition**
* **09/2023-06/2024** 
• Designed a multivariate factorial experiment across three ecotones—freshwater (R), estuarine mix (C), and nearshore seawater (M)—to simulate real-world environmental gradients. Incorporated temperature shifts (18°C, 4°C), nutrient addition (NaNO₃), microbial inhibition (HgCl₂), and light exposure, with rigorous parallel replicates. 
• Conducted high-frequency sampling across six timepoints over a 60-day incubation period (Day 0–59), tracking TOC, CDOM, FDOM, pH, and salinity. Modeled TOC decay using first-order kinetics to quantify metabolic intensity and temporal response. 
• Identified key patterns: rapid TOC loss in early stages due to microbial activity; temperature-modulated pH shifts via CO₂ solubility and metabolic regulation; initial salinity rise linked to microbial metabolism; and marked TOC spatial heterogeneity across zones (estuary > river by 78.51%). 
• Integrated experimental data to clarify how temperature, microbial activity, and nutrient input jointly regulate carbon and nitrogen turnover pathways, rates, and feedback mechanisms in river–estuary–coastal continua. 

### **SKILLS**                                                                                                         
• Wet Lab Techniques: Protein purification, DNA sequencing, microbial culture (E. coli, G115 yeast), SDS-PAGE 
• Programming Languages: Proficient in Python; skilled in R, MATLAB, JavaScript and HTML; basic knowledge of C/C++; 
• Tools & Frameworks: Seurat, PyTorch, AutoDock, GROMACS, Cytoscape, TBtools-II, 
• Data Analysis: Pandas, NumPy, scikit-learn, GSEA, Scanpy 
• Visualization: ggplot2, Seaborn, Plotly, PyMOL, UMAP

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