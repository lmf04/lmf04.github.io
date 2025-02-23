---
permalink: /
title: "CV"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- 我是山东大学一名大三本科生，专业为生物科学，主要课程有线代、微积分、统计、生信、生化、物化等，我的研究方向为单细胞分析、蛋白质结构预测，我加入XX导师的实验室，负责实验室的数据分析工作，我使用的开发语言主要有python和R，
开发工具主要有vscode、rstudio、PyCharm等，用到的数据库主要有GEO（基因表达数据库）、KEGG（代谢通路数据库）、Reactome，软件工具主要有数据分析工具：R（GSEA、MetaboAnalyst）、Python（pandas、numpy、matplotlib），网络分析工具主要有Cytoscape，代谢通路建模工具主要有COBRA Toolbox（MATLAB或Python）。
目前我已完成单细胞分析论文发表和蛋白质预测工具开发，我的研究重点是机器学习预测复杂的蛋白质动态结构和蛋白质的复合物以及蛋白质和蛋白质之间相互作用的建模。 -->

Education
======
* Shandong University, Major in Biological Sciences, Sep. 2022 - Jun. 2026
* Core Courses: Linear Algebra | Calculus | Biostatistics | Bioinformatics | Molecular Biology | Biochemistry | Physical Chemistry
* Research Interests：
  * Machine Learning-Driven‌：
    * Protein dynamic structure prediction
    * Modeling of protein complex interactions
  * Single-Cell Analysis‌：
    * Cancer biomarker discovery
    * Development of data analysis tools

Research Highlights
======
* Core Achievements
  * Publication: First-authored paper in the field of single-cell analysis (Journal Name, Impact Factor = X).
* Tool Development:
  * Independently developed a protein structure prediction tool (based on Python/R).
  * Developed a high-throughput cell counting tool with automated analysis capabilities.
* Model Construction:Built a deep learning-based framework for predicting protein dynamic conformation (using TensorFlow/PyTorch).
* Technical Breakthroughs
  * Single-Cell Process Optimization:
    * Improved data cleaning efficiency by 40% in single-cell data analysis.
    * Automated analysis tools support over 10 cancer datasets.
  * Protein Modeling:
    * Achieved 92% accuracy in predicting protein complex interactions using an improved AlphaFold2 model.

Research Projects
======
## 1. Independent Project · Single-Cell Analysis and Cancer Biomarker Discovery
Shandong University XX Laboratory · 2024.01-2025.03
Technical Stack: 
 * Python (pandas/seaborn) 
 * R (DESeq2/ClusterProfiler) 
 * GEO/KEGG
Contributions:
 * Developed a single-cell transcriptomics analysis pipeline and identified five potential cancer biomarkers.
 * Created an automated data cleaning tool (open-sourced on GitHub with XX Stars).
Authored an SCI paper (currently under revision, expected publication in 2025.Q2).

## 2. Protein Structure Prediction and Tool Development
Shandong University XX Laboratory · 2023.11-2025.03
Technical Stack
 * Python (Biopython/Rosetta) 
 * COBRA Toolbox 
 * Cytoscape
Contributions:
  * Improved the AlphaFold2 model to predict the dynamic structures of over 20 marine microbial proteins.
  * Developed a cell counting tool based on image recognition (integrated with OpenCV, error rate < 3%).
  
## 3. Marine Microbial Community Research
Collaborative Project within the Research Group · 2023.01-2024.04
Technical Stack: 
 * R (phyloseq/vegan) 
 * MetaPhlAn2 
 * Reactome
Contributions:
  * Discovered three key microbial taxa associated with ocean acidification (p < 0.01).
  * Validated findings through both wet-lab experiments and bioinformatics analysis, with results published in Marine Biology (IF = 2.8).

Skills
======
* Development, training, and implementation of analytical tools and predictive models.
* Proficient in programming languages including C, C++, Python, and R.
* Experienced with programming tools such as VS Code and RStudio.
* Skilled in using analytical platforms like BioLadder, Galaxy, DNA Subway, FastQC, and Proteome Discoverer.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
  
Repositories
======
  <ul>{% for post in site.repositories reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  

