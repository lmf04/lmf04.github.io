---
home: true
title: Home
layout: Empty
---


### <span style="color: #2e99a7ff;">**个人信息**</span>
* **名字**：<span style="color: #6c7bc0ff;">**黎梦菲**</span>
* **个人网站**: [https://lmf04.github.io](https://lmf04.github.io/)
* **GitHub**: [https://github.com/lmf04](https://github.com/lmf04)


### <span style="color: #2e99a7ff;">**教育背景**</span>
##### **山东大学** | 生物科学本科生 | 2022.09-2026.06 <br>
**GPA**：88/100 <br>
* 奖项:优秀学生一等奖学金(top 10%), kaggle竞赛金奖，全国大学生生命科学竞赛国家三等奖


### <span style="color: #2e99a7ff;">**科研经历**</span>
#### <span style="color: #2ea760ff;">**1. 胰腺导管腺癌肿瘤相关巨噬细胞异质性与双功能分子节点的时空转录组分析**</span>
* <span style="color: #2ea760ff;">**研究助理（远程），由南加州大学Guangwei Zhang教授指导**</span>
* <span style="color: #2ea760ff;">**2024年6月-2025年4月**</span>

（1） 使用 Harmony 进行批次校正，并使用 SingleR/Seurat v5 进行细胞注释，对 scRNA-seq 数据（16个PDAC肿瘤，3个正常组织；16个PDAC PBMCs，4个健康PBMCs）进行预处理和聚类，以识别与 COL1A1 驱动的 ECM 重塑相关的 T 细胞空间塌陷和 TAM 扩增。

（2） 通过 Monocle3 对髓系-巨噬细胞谱系进行拟时序轨迹推断，揭示了 PDAC 来源的 TAM 中细胞毒性通路（GZMA/NKG7 下调）的表观遗传沉默和核糖体生物合成的上调。

（3） 使用 Squidpy + Scanpy 处理和分析 10x Xenium FFPE 空间转录组数据，随后使用 DESeq2 和 FindAllMarkers 进行差异表达基因（DEG）分析，并进行 GO/KEGG 富集分析以鉴定关键免疫调节因子。

（4） 鉴定出包括 NOP53（激活 p53，抑制 PI3K-AKT）和 SPP1（参与转移和抗肿瘤免疫）在内的双功能调节分子，并验证了它们与 TAM 和肿瘤细胞的空间共定位。

![pic1](../../docs/.vuepress/public/images/zh01.png)

#### <span style="color: #2ea760ff;">**2. 基于HMTp210的副鸡禽杆菌血清分型与表位图谱的生物信息学研究**</span>
* <span style="color: #2ea760ff;">**研究助理，由山东大学陈敏教授指导**</span>
* <span style="color: #2ea760ff;">**2024年12月-2025年3月**</span>
  
• 主导了对副鸡禽杆菌（Apg）血凝素蛋白 HMTp210 的全栈基因组和结构生物信息学分析，并利用来自 NCBI 的 91 个菌株，开创了首个基于序列的 Apg 血清分型模型。

• 构建了一个强大的血清分型框架，整合了系统发育树构建（PhyloPhlAn）、泛基因组分析（BPGA + MAFFT）和基序检测（MEME），根据 Region2 的特异性差异将 HMTp210 分为 3 个主要血清群（A/B/C）和 8 个亚型（A1–C3）。

• 应用 AlphaFold2 对 A/B/C 代表株进行全长 3D 结构预测，揭示 HMTp210 是一个三聚体 TAA（三聚体自转运粘附素），具有明确的头（β-折叠）、茎（“α-螺旋-环-β”）和锚（β-桶）结构域。

• 使用 IEDB 和 Rankpep 进行 B 细胞表位预测，鉴定出 6 个富集在 Region2/3 的保守免疫优势表位，包括一个具有 >95% 交叉血清型保守性的新型“三叶草形环”结构。

• 鉴定了 A 型特异性表位（1634N–1640T）和 C2 亚型特异性插入，从而能够开发基于基序的亚分型模型，并为亚型特异性重组疫苗设计提供理论基础。
![pic1](../../docs/.vuepress/public/images/zh02.png)

#### <span style="color: #2ea760ff;">**3. 基于YOLOv8的生物医学图像分析平台开发**</span>
* <span style="color: #2ea760ff;">**独立项目**</span>
* <span style="color: #2ea760ff;">**2025年1月-2025年2月**</span>
  
• 开发了一个基于 EfficientNetV2 主干网络和 CBAM 注意力模块的多任务 YOLOv8 检测模型。该模型在显微镜图像中检测和计数细胞的准确率达到 95.2%，并能在 CT 扫描中定位和分类肺部肿瘤，与传统方法相比，准确率提高了 23%（p < 0.01）。

• 构建了一个支持 DICOM 和 NIfTI 格式的图像预处理流水线，用以处理不同模态的生物医学成像数据。

• 使用 FastAPI 作为后端、Vue3 作为前端，设计并实现了一个交互式可视化平台。该平台集成了预处理、模型推理、标注和自动报告生成功能，以优化临床和研究工作流程。

• 使用 Docker 对平台进行打包，以便在服务器和本地工作站上部署，确保跨设备的兼容性。该项目已在 GitHub 上公开。

### <span style="color: #2e99a7ff;">**竞赛/项目经历**</span>
#### <span style="color: #2ea760ff;">**1. 糖基化工程增强III型胶原蛋白的热稳定性**</span>
* <span style="color: #2ea760ff;">**全国大学生生命科学竞赛**</span>
* <span style="color: #2ea760ff;">**2025年1月-至今**</span>
  
• 基于 220 个同源物的多序列比对，通过保留 III 型胶原的 Gly-X-Y 重复序列并添加 4DANYTK 糖基化标签和 6His 纯化标签，构建了重组质粒 pRSFDuet-COL3A1。

• 在大肠杆菌 BL21(DE3) 中设计了一个双质粒表达系统（pRSFDuet-COL3A1-AaFQ 和 pET45b-α1,6-GlcT），以共表达 AaFQ 糖基转移酶并生产糖基化胶原（Glc-Col 和 Glcn-Col）。

• 使用 SDS-PAGE 和 Western blot 评估蛋白质修饰，结果显示与未修饰的胶原蛋白相比，糖基化形式的分子量和溶解度增加。

• 使用 AlphaFold3 和 PyMOL 模拟糖基化位点的表面可及性和亲水性，显示修饰的残基位于暴露的表面区域。

• 使用圆二色谱（CD）证实了糖基化胶原的结构完整性；α-螺旋谱图保持完整，支持其改善的热稳定性。

#### <span style="color: #2ea760ff;">**2. 细菌鞭毛马达定位**</span>
* <span style="color: #2ea760ff;">**金奖前五名，杨百翰大学冷冻电镜断层扫描挑战赛 2025，Kaggle 竞赛**</span>
* <span style="color: #2ea760ff;">**2025年4月-2025年7月**</span>
  
• 设计了一个自动化流程，用于在低信噪比（SNR）的 3D 冷冻电子断层扫描（Cryo-ET）图像中识别稀疏的细菌鞭毛马达。

• 开发了一种“2.5D 切片”策略，通过将相邻的断层扫描切片堆叠成多通道 2D 输入，有效重用预训练的 2D 模型，同时保留 3D 空间上下文。

• 主导了基于 YOLOv11 的模型训练和优化，结合了 MixUp、余弦学习率衰减和 4 折交叉验证，以提高在噪声、不平衡数据上的泛化能力。

• 实现了一个自定义的 3D 非极大值抑制（NMS）算法，以解决空间冗余预测问题，并显著提高了检测精度和 F₂-Score。

• 通过模型集成和双阈值过滤构建了完整的推理流程，确保在 β=2 评估指标下的高召回率。

#### <span style="color: #2ea760ff;">**3. 黄河口碳氮周转耦合驱动机制研究**</span>
* <span style="color: #2ea760ff;">**全国大学生生命科学竞赛国家级三等奖**</span>
* <span style="color: #2ea760ff;">**2023年9月-2024年6月**</span>
  
• 设计了跨三个生态带（淡水 R、河口混合 C 和近岸海水 M）的多变量因子实验，以模拟真实环境梯度。包含了温度变化（18°C, 4°C）、养分添加（NaNO₃）、微生物抑制（HgCl₂）和光照暴露，并进行了严格的平行重复。

• 在 60 天的培养期内（第 0-59 天） 进行了共六次高频采样，追踪了 TOC、CDOM、FDOM、pH 和盐度。使用一级动力学模型对 TOC 衰减进行建模，以量化代谢强度和时间响应。

• 识别出关键模式：早期因微生物活动导致的 TOC 快速损失；温度通过 CO₂ 溶解度和代谢调节调控 pH 变化；初始盐度上升与微生物代谢相关；以及各区域间显著的 TOC 空间异质性（河口 > 河流，高出 78.51%）。

• 整合实验数据，阐明了温度、微生物活动和养分输入如何共同调节河流-河口-海岸连续体中碳和氮的周转途径、速率和反馈机制。

### <span style="color: #2e99a7ff;">**技能矩阵**</span>
|方向|技能|
|---|---|
|**湿实验技术**|蛋白质纯化，DNA测序，微生物培养（大肠杆菌，G115酵母），SDS-PAGE|
|**编程语言**|精通 Python；熟练使用 R, MATLAB, JavaScript 和 HTML；具备 C/C++ 基础知识|
|**工具与框架**|Seurat, PyTorch, AutoDock, GROMACS, Cytoscape, TBtools-II|
|**数据分析**|Pandas, NumPy, scikit-learn, GSEA, Scanpy|
| **可视化**|ggplot2, Seaborn, Plotly, PyMOL, UMAP|


<div class="flex-around nav-bot">
<a href="/zh/cv">My CV</a>
<a href="/zh/researchList/">My Research</a>
<a href="/zh/repositoryList/">My Repository</a>
</div>
