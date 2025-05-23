---
layout: BlogPost
date: 2025.03.12 
archive: true
title: 单细胞测序揭示EGFR突变如何改变肺腺癌的免疫微环境-1
description: 表皮生长因子受体EGFR突变是非小细胞肺癌（NSCLC）中最常见的驱动因素，尤其在亚洲患者中，占肺腺癌（LUAD）的40%-55%。针对EGFR突变的酪氨酸激酶抑制剂（TKIs）是标准治疗方案，但最终会产生耐药性。
---

[原文链接](https://mp.weixin.qq.com/s?__biz=MzI1Njk4ODE0MQ==&mid=2247528360&idx=1&sn=b48abad2bb106d98103efd7dfb226e6c&scene=21#wechat_redirect)

 
 
文章标题：《Single-cell transcriptome analysis revealed a suppressive tumor immune microenvironment in EGFR mutant lung adenocarcinoma》

发表日期和杂志：2022年发表在The Journal for ImmunoTherapy of Cancer上

在线阅读链接：https://doi.org/10.1136/jitc-2021-003534

背景知识：

表皮生长因子受体EGFR突变是非小细胞肺癌（NSCLC）中最常见的驱动因素，尤其在亚洲患者中，占肺腺癌（LUAD）的40%-55%。
针对EGFR突变的酪氨酸激酶抑制剂（TKIs）是标准治疗方案，但最终会产生耐药性。
免疫检查点抑制剂（ICIs）显著提高了晚期肺癌患者的5年生存率，但在表皮生长因子受体（EGFR）突变的非小细胞肺癌（NSCLC）患者中，免疫治疗的效果较差。
单细胞数据详情
样本收集：研究选择了9个未经治疗的LUAD样本（5个EGFR突变型和4个EGFR野生型），使用BD Rhapsody系统捕获单细胞转录组信息。对40,799个单细胞进行单细胞转录组测序（scRNA-seq）分析，涵盖8种主要细胞类型。

并且结合多重免疫组化/免疫荧光（mIHC/IF）用于分析EGFR突变和野生型LUAD中的蛋白表达和细胞分布。

样本分类：

EGFR突变型LUAD：5个样本。
EGFR野生型LUAD：4个样本。
特殊样本：其中2个EGFR阳性样本来自一名多发结节患者，一个结节携带EGFR L858R突变，另一个携带EGFR 19del突变。
Image
数据链接是：https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE171145

样品详情：

GSM5219674 LJQ
GSM5219675 GBG
GSM5219676 LYB.1
GSM5219677 LYB.2
GSM5219678 CYD
GSM5219679 CYZ
GSM5219680 XMS
GSM5219681 ZYQ
GSM5219682 TGS
单细胞数据详情：

Image
提供的是txt.gz格式的文本压缩文件，下载需要的文件之后，使用fread()函数读取批量读取即可，读取后创建seurat对象进行后续的降维聚类分群

library(data.table)
dir='GSE171145_RAW/'
samples=list.files( dir ,pattern = '.counts.tsv.gz')
samples 

library(data.table)
sceList = lapply(samples,function(pro){ 
# pro=samples[1] 
print(pro)
  ct=fread(file.path( dir ,pro),data.table = F)
  ct[1:4,1:4]
  rownames(ct)=ct[,1]
  ct=ct[,-1]
  sce=CreateSeuratObject(counts =  ct , 
                         min.cells = 5,
                         min.features = 300 )

return(sce)
})

do.call(rbind,lapply(sceList, dim))
sce.all=merge(x=sceList[[1]],
              y=sceList[ -1 ],
              add.cell.ids = samples  ) 
names(sce.all@assays$RNA@layers)
sce.all[["RNA"]]$counts
# Alternate accessor function with the same result
LayerData(sce.all, assay = "RNA", layer = "counts")
sce.all <- JoinLayers(sce.all)
dim(sce.all[["RNA"]]$counts )
主要分析结果
单细胞数据分析结果
通过单细胞测序，共分析了40,799个单细胞。

EGFR野生型样本：18,704个细胞，来自4个样本。
EGFR突变型样本：22,095个细胞，来自5个样本。
识别了8种主要细胞类型：

Image
上皮细胞（Epithelial cells）
成纤维细胞（Fibroblasts）
内皮细胞（Endothelial cells）
单核细胞（Monocytic cells）
T细胞/自然杀伤细胞（T/NK cells）
中性粒细胞（Neutrophils）
B细胞/浆细胞（B/plasma cells）
肥大细胞（Mast cells）
Image
基于EGFR状态的细胞类型比例差异：

Image
EGFR状态对细胞比例的影响：

Image
T/NK细胞在两种EGFR状态的TME中均占主导地位，且比例相似。
EGFR突变型TME：单核细胞（Monocytic cells）、肥大细胞（Mast cells）和内皮细胞（Endothelial cells）的比例更高。
EGFR野生型TME：中性粒细胞（Neutrophils）和成纤维细胞（Fibroblasts）的比例更高
EGFR突变型和野生型LUAD的肿瘤微环境在细胞组成上存在显著差异，这些差异可能反映了两种状态下免疫微环境的功能差异，进而影响免疫治疗的反应。

EGFR突变型TME中较高的单核细胞和肥大细胞比例可能与免疫抑制微环境相关。
EGFR野生型TME中较高的中性粒细胞和成纤维细胞比例可能与更强的免疫激活或炎症反应相关。
不同EGFR状态的上皮细胞对TME多样性的驱动作用
将上皮细胞提取出来进行重新聚类分群，共获得9067个上皮细胞，这些上皮细胞进一步被分类为13个聚类（clusters）

Image
利用拷贝数变异（Copy-number variation, CNV）分析，将上皮细胞分为肿瘤细胞和正常细胞

Image
13个聚类中，10个被注释为肿瘤细胞聚类，3个为正常细胞聚类

肿瘤细胞比例：在EGFR突变型和野生型组中，肿瘤细胞的总比例相似。大多数聚类中包含来自两种EGFR状态的细胞

Image
EGFR突变型特异性聚类：聚类1和聚类5仅出现在EGFR突变型样本中。
EGFR野生型特异性聚类：聚类0、聚类6、聚类8和聚类11仅出现在EGFR野生型样本中。
不同EGFR状态的肿瘤细胞在TME中表现出不同的聚类特征，反映了肿瘤细胞的异质性。特异性聚类的存在表明EGFR突变可能通过影响肿瘤细胞的基因表达和功能，进而改变TME的组成和功能。

不同EGFR状态上皮细胞的功能差异
EGFR野生型特异性聚类（Cluster 6）：表现出干扰素（IFN）α/γ反应和PI3K-AKT-mTOR信号通路的上调，这些通路的激活通常与更强的免疫激活和细胞增殖能力相关。

Image
EGFR突变型特异性聚类（Cluster 1和Cluster 5）

Image
免疫治疗反应的细胞特征：

非反应性结节（W1和W3）：免疫治疗后的上皮细胞与未经治疗的EGFR突变型肿瘤细胞重叠
Image
反应性结节（W2）：免疫治疗后的上皮细胞与未经治疗的正常细胞和EGFR野生型肿瘤细胞重叠。
EGFR突变型特异性聚类1和5与免疫治疗非反应者相同，支持了EGFR突变型LUAD对免疫治疗反应不佳的假设。
Image
分化轨迹分析：EGFR突变驱动-正常上皮细胞的分化轨迹分为两个方向

Image
命运1（Fate 1）：EGFR野生型组
命运2（Fate 2）：EGFR突变型组
基因表达差异：

Image
EGFR突变型肿瘤细胞更多地表达与代谢途径相关的基因（如糖酵解/糖异生、氨基酸代谢和花生四烯酸代谢）

EGFR突变型和野生型LUAD中上皮细胞的功能差异及其对免疫治疗反应的影响：

EGFR野生型肿瘤细胞：表达更高水平的CXCL5、IL-7、IL-18和IL-32，这些因子有助于CD8+ T细胞的增殖和激活。

EGFR突变型肿瘤细胞：表达更高水平的CCL18、CXCL1和CXCL3，这些因子促进免疫抑制细胞（如Treg和MDSC）的招募，具有更多与代谢途径相关的基因表达，可能抑制T细胞功能。

EGFR突变型肿瘤细胞的特征与免疫治疗非反应者相似，而野生型肿瘤细胞的特征与反应者相似。

文章内容较多，一篇推文无法解析完，所以这篇就简单整理了一下文献概述和数据情况，基于基本降维聚类分群及上皮细胞亚群细分内容进行了整理。剩余部分咱们下篇推文继续！


