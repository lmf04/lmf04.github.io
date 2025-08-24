---
layout: BlogPost
date: 2025.02.12
archive: true
title: 哈佛大学Nature的这套生信分析代码，值得学
description: 近日，哈佛大学的研究团队在《自然》杂志上发表了一项重要研究成果，该研究深入剖析了哺乳动物下丘脑视前区（POA）神经元的发育轨迹，揭示了感觉输入、性别和功能等因素对其发育的显著影响，为我们理解本能行为的神经基础提供了全新的视角。
---
 

# 此代码块用于设置环境，加载后续分析所需的R包
```{r setup}
# 此代码用于生成区域化相关矩阵和指标，对应扩展图3d - k
# 以兴奋性神经元为例进行分析
# 加载必要的库
library(Seurat)  # 用于单细胞RNA测序数据分析的强大工具包
library(ggplot2) # 用于创建高质量的图形
library(patchwork) # 用于组合多个ggplot图形
library(magrittr) # 提供管道操作符 %>%
library(tidyverse) # 包含多个数据处理和可视化的常用包
library(pheatmap) # 用于绘制热图
library(palr) # 提供颜色调色板
此代码块用于生成给定年龄下细胞类型之间的相关矩阵
# 此部分生成如扩展图3d、e、g、h所示的矩阵，以图e（P65年龄的兴奋性神经元）为例
# 加载合并后的数据
# 合并后的数据仅包含兴奋性神经元（如果分析抑制性神经元，操作相同，只是需分别运行），
# 这些数据是跨所有年龄合并的，然后使用SCTransform在整个数据集中进行归一化处理
excit.merge <- readRDS("")
# 从合并数据中提取P65年龄的数据
p65 <- subset(excit.merge, subset = age == "p65")
# 对细胞类型名称进行排序
celltypes <- names(table(p65$my.cell.type))
celltypes <- c(celltypes[1:19],celltypes[21:28],celltypes[20],celltypes[29:37],celltypes[39:46],celltypes[38],celltypes[47],celltypes[50:57],celltypes[48:49],celltypes[58:64])
# 重新排序细胞类型
new.order <- c(grep("B",celltypes),grep("H",celltypes),grep("L",celltypes),grep("C",celltypes),grep("F",celltypes),grep("M",celltypes),grep("N",celltypes),grep("A",celltypes),grep("P",celltypes),grep("T",celltypes),grep("X",celltypes))
celltypes <- celltypes[new.order]
# 设置参数：特征基因数量
nfeatures = 20000
# 设置默认分析的数据集为RNA
DefaultAssay(p65)<-"RNA"
# 找出可变特征基因
p65 <- FindVariableFeatures(p65,nfeatures=nfeatures)
# 对数据进行缩放
p65 <- ScaleData(p65)
# 生成质心矩阵，该矩阵将作为corr()函数的输入
centroid.mat<-matrix(,nrow = length(celltypes),ncol = nfeatures)
for (i in 1:length(celltypes)){
  # 每处理10个细胞类型打印一次进度信息
  if (i %% 10 == 0){
    print(paste0("on cell type number ",i))
  }
  # 如果某个细胞类型的细胞数量少于2个，则跳过该细胞类型
  if (table(p65$my.cell.type)[i] < 2){
    print("NOTE: this cell type has less than 2 cells. skipping...")
    next
  }
  # 提取当前细胞类型的数据
  ct.sub <- subset(p65,subset = my.cell.type == celltypes[i])
  # 获取缩放后的数据矩阵
  scaledata.mat <- ct.sub@assays$RNA@scale.data
  # 计算当前细胞类型的质心（即每行的均值）
  centroid.mat[i,] <- rowMeans(scaledata.mat)
}
# 计算质心矩阵的相关性矩阵
p65.corrmat <- cor(t(centroid.mat))
# 设置相关性矩阵的行名和列名
rownames(p65.corrmat) <- celltypes
colnames(p65.corrmat) <- celltypes
# 绘制热图，不进行行和列的聚类
pheatmap(p65.corrmat,cluster_rows = F,cluster_cols = F,border_color = NA)
# 对相关性矩阵进行缩放
scale.max <- 0.5
scale.min <- -0.2
scale.corrmat <- p65.corrmat
# 将大于scale.max的值设置为scale.max
scale.corrmat[scale.corrmat > scale.max] <- scale.max
# 将小于scale.min的值设置为scale.min
scale.corrmat[scale.corrmat < scale.min] <- scale.min
# 绘制缩放后的热图
pheatmap(scale.corrmat,cluster_rows = F,cluster_cols = F,border_color = NA)
此代码块用于生成每个年龄下区域标记基因的表达情况
# 此部分代码用于生成扩展图3j - k
# 首先创建一个用于绘制热图的函数
avg.gene.heatmap <- function(obj,
                             br.or.ct,  # "br" 表示按照脑区域进行操作，"ct" 表示按照细胞类型进行操作
                             identity.rows,  # 按顺序排列的细胞类型或脑区域名称
                             gene.columns,  # 按顺序排列的基因名称
                             scale.max = 2,  # 热图数据缩放的最大值
                             scale.min = 0,  # 热图数据缩放的最小值
                             return.matrix = 0) {  # 是否返回热图矩阵，0 表示不返回，1 表示返回
  
  # 设置默认分析的数据集为 RNA
  DefaultAssay(obj) <- "RNA"
  
  # 将所有基因设置为可变特征基因，以便后续进行缩放
  VariableFeatures(obj) <- rownames(obj)
  
  # 对数据进行缩放处理
  obj <- ScaleData(obj)
  
  # 初始化一个空矩阵，用于存储热图的数据
  heatmap.to.plot <- matrix(, nrow = length(identity.rows), ncol = length(gene.columns))
  
  # 遍历每一行（细胞类型或脑区域）
  for (ident.row in 1:length(identity.rows)) {
    if (br.or.ct == "br") {
      # 如果是按照脑区域操作，提取对应脑区域的数据
      ident.sub <- subset(obj, subset = brain.region == identity.rows[ident.row])
    }
    if (br.or.ct == "ct") {
      # 如果是按照细胞类型操作，提取对应细胞类型的数据
      ident.sub <- subset(obj, subset = my.cell.type == identity.rows[ident.row])
    }
    
    # 遍历每一列（基因）
    for (gene in 1:length(gene.columns)) {
      # 查找当前基因在数据中的索引
      gene.ind <- grep(paste0("^", gene.columns[gene], "$"), rownames(ident.sub))
      
      # 计算当前基因在当前细胞类型或脑区域中的平均表达值，并存储到热图矩阵中
      heatmap.to.plot[ident.row, gene] <- mean(ident.sub@assays$RNA@scale.data[gene.ind, ])
    }
  }
  
  # 设置热图矩阵的行名和列名
  rownames(heatmap.to.plot) <- identity.rows
  colnames(heatmap.to.plot) <- gene.columns
  
  # 对热图矩阵进行缩放处理
  heatmap.to.plot.scaled <- heatmap.to.plot
  heatmap.to.plot.scaled[heatmap.to.plot.scaled > scale.max] <- scale.max
  heatmap.to.plot.scaled[heatmap.to.plot.scaled < scale.min] <- scale.min
  
  # 绘制热图，不进行行和列的聚类，使用反转的颜色调色板
  pheatmap(t(heatmap.to.plot.scaled), cluster_rows = F, cluster_cols = F, color = rev(bathy_deep_pal(50)), border_color = NA)
  
  # 如果 return.matrix 为 1，则返回热图矩阵
  if (return.matrix == 1) {
    return(heatmap.to.plot)
  }
}
# 现在获取标记基因并绘制热图
# 将合并数据中的脑区域转换为因子类型，并指定水平顺序
excit.merge$brain.region <- factor(excit.merge$brain.region, levels = c("BNST", "HDB.VLPO", "LPO.PS", "BAC-like", "PeFA", "MPN.anterior", "MPN.posterior", "AvPE.MnPO", "PVN", "PVT", "Mixed/Unknown"))
# 设置标识为脑区域，以便后续分析
Idents(excit.merge) <- "brain.region"
# 数据准备
# 提取 P65 年龄的数据
excit.p65 <- subset(excit.merge, subset = age == "p65")
# 提取 E16 年龄的数据
excit.e16 <- subset(excit.merge, subset = age == "e16")
# 获取所有脑区域的名称
all.br <- names(table(excit.p65$brain.region))
# 获取 P65 年龄的区域标记基因
region.markers.p65 <- FindAllMarkers(excit.p65, assay = "RNA", only.pos = T)
# 筛选出调整后 P 值小于 0.05 的标记基因
region.markers.p65 <- region.markers.p65[region.markers.p65$p_val_adj < 0.05, ]
# 筛选出平均对数 2 倍变化大于 0.5 的标记基因
region.markers.p65 <- region.markers.p65[region.markers.p65$avg_log2FC > 0.5, ]
# 去除重复的标记基因
region.markers.p65 <- region.markers.p65$gene[-which(duplicated(region.markers.p65$gene))]
# 以热图形式展示 P65 年龄的标记基因在 P65 时的表达情况
avg.gene.heatmap(excit.p65, "br", all.br, region.markers.p65)
# 现在测试 P65 年龄的基因在 E16 时的表达情况
avg.gene.heatmap(excit.e16, "br", all.br, region.markers.p65)
# 反之，获取 E16 年龄的区域标记基因
region.markers.e16 <- FindAllMarkers(excit.e16, assay = "RNA", only.pos = T)
# 筛选出调整后 P 值小于 0.05 的标记基因
region.markers.e16 <- region.markers.e16[region.markers.e16$p_val_adj < 0.05, ]
# 筛选出平均对数 2 倍变化大于 0.5 的标记基因
region.markers.e16 <- region.markers.e16[region.markers.e16$avg_log2FC > 0.5, ]
# 去除重复的标记基因
region.markers.e16 <- region.markers.e16$gene[-which(duplicated(region.markers.e16$gene))]
# 以热图形式展示 E16 年龄的标记基因在 E16 时的表达情况
avg.gene.heatmap(excit.e16, "br", all.br, region.markers.e16)
# 现在测试 E16 年龄的基因在 P65 时的表达情况
avg.gene.heatmap(excit.p65, "br", all.br, region.markers.e16)
# 现在去除同时出现在两个列表中的标记基因，并重新绘制热图
# 获取仅在 P65 中出现的标记基因
unique.p65.markers <- setdiff(region.markers.p65, region.markers.e16)
# 获取仅在 E16 中出现的标记基因
unique.e16.markers <- setdiff(region.markers.e16, region.markers.p65)
# 绘制相关热图
avg.gene.heatmap(excit.p65, "br", all.br, unique.p65.markers)
avg.gene.heatmap(excit.e16, "br", all.br, unique.p65.markers)
avg.gene.heatmap(excit.e16, "br", all.br, unique.e16.markers)
avg.gene.heatmap(excit.p65, "br", all.br, unique.e16.markers)
# 现在，探讨：标记基因表达模式在什么年龄开始接近成年？
# 简单地通过矩阵相减来分析
# 提取不同年龄的数据
excit.p28 <- subset(excit.merge.noNA, subset = age == "p28")
excit.p18 <- subset(excit.merge.noNA, subset = age == "p18")
excit.p10 <- subset(excit.merge.noNA, subset = age == "p10")
excit.p4 <- subset(excit.merge.noNA, subset = age == "p4")
excit.p0 <- subset(excit.merge.noNA, subset = age == "p0")
excit.e18 <- subset(excit.merge.noNA, subset = age == "e18")
# 对于 P65 年龄的标记基因（不包括 E16 的标记基因）
# 获取不同年龄下这些标记基因的表达矩阵
p65.mat <- avg.gene.heatmap(excit.p65, "br", all.br, unique.p65.markers, return = 1)
p28.mat <- avg.gene.heatmap(excit.p28, "br", all.br, unique.p65.markers, return = 1)
p18.mat <- avg.gene.heatmap(excit.p18, "br", all.br, unique.p65.markers, return = 1)
p10.mat <- avg.gene.heatmap(excit.p10, "br", all.br, unique.p65.markers, return = 1)
p4.mat <- avg.gene.heatmap(excit.p4, "br", all.br, unique.p65.markers, return = 1)
p0.mat <- avg.gene.heatmap(excit.p0, "br", all.br, unique.p65.markers, return = 1)
e18.mat <- avg.gene.heatmap(excit.e18, "br", all.br, unique.p65.markers, return = 1)
e16.mat <- avg.gene.heatmap(excit.e16, "br", all.br, unique.p65.markers, return = 1)
# 计算不同年龄下的表达矩阵与 P65 年龄的表达矩阵的相关性
cor.to.p65 <- data.frame(age = 1:8, cor = c(cor(c(e16.mat), c(p65.mat)),
                                             cor(c(e18.mat), c(p65.mat)),
                                             cor(c(p0.mat), c(p65.mat)),
                                             cor(c(p4.mat), c(p65.mat)),
                                             cor(c(p10.mat), c(p65.mat)),
                                             cor(c(p18.mat), c(p65.mat)),
                                             cor(c(p28.mat), c(p65.mat)), 1
))
# 绘制相关性随年龄变化的折线图
ggplot(cor.to.p65, aes(x = age, y = cor)) + 
  geom_line(aes(linewidth = 4)) + 
  theme_classic() + 
  ylim(0.3, 1) + 
  theme(text = element_text(family = "Myriad Pro")) + 
  theme(text = element_text(size = 20))