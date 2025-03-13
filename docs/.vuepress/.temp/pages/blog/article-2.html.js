import comp from "D:/test/template/test/vuepress2.0/vuepress-starter/docs/.vuepress/.temp/pages/blog/article-2.html.vue"
const data = JSON.parse("{\"path\":\"/blog/article-2.html\",\"title\":\"哈佛大学Nature的这套生信分析代码，值得学\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"BlogPost\",\"date\":\"2025-02-12T00:00:00.000Z\",\"archive\":true,\"title\":\"哈佛大学Nature的这套生信分析代码，值得学\",\"description\":\"用AI识别细胞并计数\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"blog/article-2.md\",\"excerpt\":\"<p>近日，哈佛大学的研究团队在《自然》杂志上发表了一项重要研究成果，该研究深入剖析了哺乳动物下丘脑视前区（POA）神经元的发育轨迹，揭示了感觉输入、性别和功能等因素对其发育的显著影响，为我们理解本能行为的神经基础提供了全新的视角。\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\nImage\\n学习下下面这个图还有 fig3\\nImage\\nImage</p>\\n<h1>此代码块用于设置环境，加载后续分析所需的R包</h1>\\n<div class=\\\"language-text line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"text\\\"><pre><code><span class=\\\"line\\\"># 此代码用于生成区域化相关矩阵和指标，对应扩展图3d - k</span>\\n<span class=\\\"line\\\"># 以兴奋性神经元为例进行分析</span>\\n<span class=\\\"line\\\"># 加载必要的库</span>\\n<span class=\\\"line\\\">library(Seurat)  # 用于单细胞RNA测序数据分析的强大工具包</span>\\n<span class=\\\"line\\\">library(ggplot2) # 用于创建高质量的图形</span>\\n<span class=\\\"line\\\">library(patchwork) # 用于组合多个ggplot图形</span>\\n<span class=\\\"line\\\">library(magrittr) # 提供管道操作符 %&gt;%</span>\\n<span class=\\\"line\\\">library(tidyverse) # 包含多个数据处理和可视化的常用包</span>\\n<span class=\\\"line\\\">library(pheatmap) # 用于绘制热图</span>\\n<span class=\\\"line\\\">library(palr) # 提供颜色调色板</span>\\n<span class=\\\"line\\\">此代码块用于生成给定年龄下细胞类型之间的相关矩阵</span>\\n<span class=\\\"line\\\"># 此部分生成如扩展图3d、e、g、h所示的矩阵，以图e（P65年龄的兴奋性神经元）为例</span>\\n<span class=\\\"line\\\"># 加载合并后的数据</span>\\n<span class=\\\"line\\\"># 合并后的数据仅包含兴奋性神经元（如果分析抑制性神经元，操作相同，只是需分别运行），</span>\\n<span class=\\\"line\\\"># 这些数据是跨所有年龄合并的，然后使用SCTransform在整个数据集中进行归一化处理</span>\\n<span class=\\\"line\\\">excit.merge &lt;- readRDS(\\\"\\\")</span>\\n<span class=\\\"line\\\"># 从合并数据中提取P65年龄的数据</span>\\n<span class=\\\"line\\\">p65 &lt;- subset(excit.merge, subset = age == \\\"p65\\\")</span>\\n<span class=\\\"line\\\"># 对细胞类型名称进行排序</span>\\n<span class=\\\"line\\\">celltypes &lt;- names(table(p65$my.cell.type))</span>\\n<span class=\\\"line\\\">celltypes &lt;- c(celltypes[1:19],celltypes[21:28],celltypes[20],celltypes[29:37],celltypes[39:46],celltypes[38],celltypes[47],celltypes[50:57],celltypes[48:49],celltypes[58:64])</span>\\n<span class=\\\"line\\\"># 重新排序细胞类型</span>\\n<span class=\\\"line\\\">new.order &lt;- c(grep(\\\"B\\\",celltypes),grep(\\\"H\\\",celltypes),grep(\\\"L\\\",celltypes),grep(\\\"C\\\",celltypes),grep(\\\"F\\\",celltypes),grep(\\\"M\\\",celltypes),grep(\\\"N\\\",celltypes),grep(\\\"A\\\",celltypes),grep(\\\"P\\\",celltypes),grep(\\\"T\\\",celltypes),grep(\\\"X\\\",celltypes))</span>\\n<span class=\\\"line\\\">celltypes &lt;- celltypes[new.order]</span>\\n<span class=\\\"line\\\"># 设置参数：特征基因数量</span>\\n<span class=\\\"line\\\">nfeatures = 20000</span>\\n<span class=\\\"line\\\"># 设置默认分析的数据集为RNA</span>\\n<span class=\\\"line\\\">DefaultAssay(p65)&lt;-\\\"RNA\\\"</span>\\n<span class=\\\"line\\\"># 找出可变特征基因</span>\\n<span class=\\\"line\\\">p65 &lt;- FindVariableFeatures(p65,nfeatures=nfeatures)</span>\\n<span class=\\\"line\\\"># 对数据进行缩放</span>\\n<span class=\\\"line\\\">p65 &lt;- ScaleData(p65)</span>\\n<span class=\\\"line\\\"># 生成质心矩阵，该矩阵将作为corr()函数的输入</span>\\n<span class=\\\"line\\\">centroid.mat&lt;-matrix(,nrow = length(celltypes),ncol = nfeatures)</span>\\n<span class=\\\"line\\\">for (i in 1:length(celltypes)){</span>\\n<span class=\\\"line\\\">  # 每处理10个细胞类型打印一次进度信息</span>\\n<span class=\\\"line\\\">  if (i %% 10 == 0){</span>\\n<span class=\\\"line\\\">    print(paste0(\\\"on cell type number \\\",i))</span>\\n<span class=\\\"line\\\">  }</span>\\n<span class=\\\"line\\\">  # 如果某个细胞类型的细胞数量少于2个，则跳过该细胞类型</span>\\n<span class=\\\"line\\\">  if (table(p65$my.cell.type)[i] &lt; 2){</span>\\n<span class=\\\"line\\\">    print(\\\"NOTE: this cell type has less than 2 cells. skipping...\\\")</span>\\n<span class=\\\"line\\\">    next</span>\\n<span class=\\\"line\\\">  }</span>\\n<span class=\\\"line\\\">  # 提取当前细胞类型的数据</span>\\n<span class=\\\"line\\\">  ct.sub &lt;- subset(p65,subset = my.cell.type == celltypes[i])</span>\\n<span class=\\\"line\\\">  # 获取缩放后的数据矩阵</span>\\n<span class=\\\"line\\\">  scaledata.mat &lt;- ct.sub@assays$RNA@scale.data</span>\\n<span class=\\\"line\\\">  # 计算当前细胞类型的质心（即每行的均值）</span>\\n<span class=\\\"line\\\">  centroid.mat[i,] &lt;- rowMeans(scaledata.mat)</span>\\n<span class=\\\"line\\\">}</span>\\n<span class=\\\"line\\\"># 计算质心矩阵的相关性矩阵</span>\\n<span class=\\\"line\\\">p65.corrmat &lt;- cor(t(centroid.mat))</span>\\n<span class=\\\"line\\\"># 设置相关性矩阵的行名和列名</span>\\n<span class=\\\"line\\\">rownames(p65.corrmat) &lt;- celltypes</span>\\n<span class=\\\"line\\\">colnames(p65.corrmat) &lt;- celltypes</span>\\n<span class=\\\"line\\\"># 绘制热图，不进行行和列的聚类</span>\\n<span class=\\\"line\\\">pheatmap(p65.corrmat,cluster_rows = F,cluster_cols = F,border_color = NA)</span>\\n<span class=\\\"line\\\"># 对相关性矩阵进行缩放</span>\\n<span class=\\\"line\\\">scale.max &lt;- 0.5</span>\\n<span class=\\\"line\\\">scale.min &lt;- -0.2</span>\\n<span class=\\\"line\\\">scale.corrmat &lt;- p65.corrmat</span>\\n<span class=\\\"line\\\"># 将大于scale.max的值设置为scale.max</span>\\n<span class=\\\"line\\\">scale.corrmat[scale.corrmat &gt; scale.max] &lt;- scale.max</span>\\n<span class=\\\"line\\\"># 将小于scale.min的值设置为scale.min</span>\\n<span class=\\\"line\\\">scale.corrmat[scale.corrmat &lt; scale.min] &lt;- scale.min</span>\\n<span class=\\\"line\\\"># 绘制缩放后的热图</span>\\n<span class=\\\"line\\\">pheatmap(scale.corrmat,cluster_rows = F,cluster_cols = F,border_color = NA)</span>\\n<span class=\\\"line\\\">此代码块用于生成每个年龄下区域标记基因的表达情况</span>\\n<span class=\\\"line\\\"># 此部分代码用于生成扩展图3j - k</span>\\n<span class=\\\"line\\\"># 首先创建一个用于绘制热图的函数</span>\\n<span class=\\\"line\\\">avg.gene.heatmap &lt;- function(obj,</span>\\n<span class=\\\"line\\\">                             br.or.ct,  # \\\"br\\\" 表示按照脑区域进行操作，\\\"ct\\\" 表示按照细胞类型进行操作</span>\\n<span class=\\\"line\\\">                             identity.rows,  # 按顺序排列的细胞类型或脑区域名称</span>\\n<span class=\\\"line\\\">                             gene.columns,  # 按顺序排列的基因名称</span>\\n<span class=\\\"line\\\">                             scale.max = 2,  # 热图数据缩放的最大值</span>\\n<span class=\\\"line\\\">                             scale.min = 0,  # 热图数据缩放的最小值</span>\\n<span class=\\\"line\\\">                             return.matrix = 0) {  # 是否返回热图矩阵，0 表示不返回，1 表示返回</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 设置默认分析的数据集为 RNA</span>\\n<span class=\\\"line\\\">  DefaultAssay(obj) &lt;- \\\"RNA\\\"</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 将所有基因设置为可变特征基因，以便后续进行缩放</span>\\n<span class=\\\"line\\\">  VariableFeatures(obj) &lt;- rownames(obj)</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 对数据进行缩放处理</span>\\n<span class=\\\"line\\\">  obj &lt;- ScaleData(obj)</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 初始化一个空矩阵，用于存储热图的数据</span>\\n<span class=\\\"line\\\">  heatmap.to.plot &lt;- matrix(, nrow = length(identity.rows), ncol = length(gene.columns))</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 遍历每一行（细胞类型或脑区域）</span>\\n<span class=\\\"line\\\">  for (ident.row in 1:length(identity.rows)) {</span>\\n<span class=\\\"line\\\">    if (br.or.ct == \\\"br\\\") {</span>\\n<span class=\\\"line\\\">      # 如果是按照脑区域操作，提取对应脑区域的数据</span>\\n<span class=\\\"line\\\">      ident.sub &lt;- subset(obj, subset = brain.region == identity.rows[ident.row])</span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\">    if (br.or.ct == \\\"ct\\\") {</span>\\n<span class=\\\"line\\\">      # 如果是按照细胞类型操作，提取对应细胞类型的数据</span>\\n<span class=\\\"line\\\">      ident.sub &lt;- subset(obj, subset = my.cell.type == identity.rows[ident.row])</span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\">    </span>\\n<span class=\\\"line\\\">    # 遍历每一列（基因）</span>\\n<span class=\\\"line\\\">    for (gene in 1:length(gene.columns)) {</span>\\n<span class=\\\"line\\\">      # 查找当前基因在数据中的索引</span>\\n<span class=\\\"line\\\">      gene.ind &lt;- grep(paste0(\\\"^\\\", gene.columns[gene], \\\"$\\\"), rownames(ident.sub))</span>\\n<span class=\\\"line\\\">      </span>\\n<span class=\\\"line\\\">      # 计算当前基因在当前细胞类型或脑区域中的平均表达值，并存储到热图矩阵中</span>\\n<span class=\\\"line\\\">      heatmap.to.plot[ident.row, gene] &lt;- mean(ident.sub@assays$RNA@scale.data[gene.ind, ])</span>\\n<span class=\\\"line\\\">    }</span>\\n<span class=\\\"line\\\">  }</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 设置热图矩阵的行名和列名</span>\\n<span class=\\\"line\\\">  rownames(heatmap.to.plot) &lt;- identity.rows</span>\\n<span class=\\\"line\\\">  colnames(heatmap.to.plot) &lt;- gene.columns</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 对热图矩阵进行缩放处理</span>\\n<span class=\\\"line\\\">  heatmap.to.plot.scaled &lt;- heatmap.to.plot</span>\\n<span class=\\\"line\\\">  heatmap.to.plot.scaled[heatmap.to.plot.scaled &gt; scale.max] &lt;- scale.max</span>\\n<span class=\\\"line\\\">  heatmap.to.plot.scaled[heatmap.to.plot.scaled &lt; scale.min] &lt;- scale.min</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 绘制热图，不进行行和列的聚类，使用反转的颜色调色板</span>\\n<span class=\\\"line\\\">  pheatmap(t(heatmap.to.plot.scaled), cluster_rows = F, cluster_cols = F, color = rev(bathy_deep_pal(50)), border_color = NA)</span>\\n<span class=\\\"line\\\">  </span>\\n<span class=\\\"line\\\">  # 如果 return.matrix 为 1，则返回热图矩阵</span>\\n<span class=\\\"line\\\">  if (return.matrix == 1) {</span>\\n<span class=\\\"line\\\">    return(heatmap.to.plot)</span>\\n<span class=\\\"line\\\">  }</span>\\n<span class=\\\"line\\\">}</span>\\n<span class=\\\"line\\\"># 现在获取标记基因并绘制热图</span>\\n<span class=\\\"line\\\"># 将合并数据中的脑区域转换为因子类型，并指定水平顺序</span>\\n<span class=\\\"line\\\">excit.merge$brain.region &lt;- factor(excit.merge$brain.region, levels = c(\\\"BNST\\\", \\\"HDB.VLPO\\\", \\\"LPO.PS\\\", \\\"BAC-like\\\", \\\"PeFA\\\", \\\"MPN.anterior\\\", \\\"MPN.posterior\\\", \\\"AvPE.MnPO\\\", \\\"PVN\\\", \\\"PVT\\\", \\\"Mixed/Unknown\\\"))</span>\\n<span class=\\\"line\\\"># 设置标识为脑区域，以便后续分析</span>\\n<span class=\\\"line\\\">Idents(excit.merge) &lt;- \\\"brain.region\\\"</span>\\n<span class=\\\"line\\\"># 数据准备</span>\\n<span class=\\\"line\\\"># 提取 P65 年龄的数据</span>\\n<span class=\\\"line\\\">excit.p65 &lt;- subset(excit.merge, subset = age == \\\"p65\\\")</span>\\n<span class=\\\"line\\\"># 提取 E16 年龄的数据</span>\\n<span class=\\\"line\\\">excit.e16 &lt;- subset(excit.merge, subset = age == \\\"e16\\\")</span>\\n<span class=\\\"line\\\"># 获取所有脑区域的名称</span>\\n<span class=\\\"line\\\">all.br &lt;- names(table(excit.p65$brain.region))</span>\\n<span class=\\\"line\\\"># 获取 P65 年龄的区域标记基因</span>\\n<span class=\\\"line\\\">region.markers.p65 &lt;- FindAllMarkers(excit.p65, assay = \\\"RNA\\\", only.pos = T)</span>\\n<span class=\\\"line\\\"># 筛选出调整后 P 值小于 0.05 的标记基因</span>\\n<span class=\\\"line\\\">region.markers.p65 &lt;- region.markers.p65[region.markers.p65$p_val_adj &lt; 0.05, ]</span>\\n<span class=\\\"line\\\"># 筛选出平均对数 2 倍变化大于 0.5 的标记基因</span>\\n<span class=\\\"line\\\">region.markers.p65 &lt;- region.markers.p65[region.markers.p65$avg_log2FC &gt; 0.5, ]</span>\\n<span class=\\\"line\\\"># 去除重复的标记基因</span>\\n<span class=\\\"line\\\">region.markers.p65 &lt;- region.markers.p65$gene[-which(duplicated(region.markers.p65$gene))]</span>\\n<span class=\\\"line\\\"># 以热图形式展示 P65 年龄的标记基因在 P65 时的表达情况</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.p65, \\\"br\\\", all.br, region.markers.p65)</span>\\n<span class=\\\"line\\\"># 现在测试 P65 年龄的基因在 E16 时的表达情况</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.e16, \\\"br\\\", all.br, region.markers.p65)</span>\\n<span class=\\\"line\\\"># 反之，获取 E16 年龄的区域标记基因</span>\\n<span class=\\\"line\\\">region.markers.e16 &lt;- FindAllMarkers(excit.e16, assay = \\\"RNA\\\", only.pos = T)</span>\\n<span class=\\\"line\\\"># 筛选出调整后 P 值小于 0.05 的标记基因</span>\\n<span class=\\\"line\\\">region.markers.e16 &lt;- region.markers.e16[region.markers.e16$p_val_adj &lt; 0.05, ]</span>\\n<span class=\\\"line\\\"># 筛选出平均对数 2 倍变化大于 0.5 的标记基因</span>\\n<span class=\\\"line\\\">region.markers.e16 &lt;- region.markers.e16[region.markers.e16$avg_log2FC &gt; 0.5, ]</span>\\n<span class=\\\"line\\\"># 去除重复的标记基因</span>\\n<span class=\\\"line\\\">region.markers.e16 &lt;- region.markers.e16$gene[-which(duplicated(region.markers.e16$gene))]</span>\\n<span class=\\\"line\\\"># 以热图形式展示 E16 年龄的标记基因在 E16 时的表达情况</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.e16, \\\"br\\\", all.br, region.markers.e16)</span>\\n<span class=\\\"line\\\"># 现在测试 E16 年龄的基因在 P65 时的表达情况</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.p65, \\\"br\\\", all.br, region.markers.e16)</span>\\n<span class=\\\"line\\\"># 现在去除同时出现在两个列表中的标记基因，并重新绘制热图</span>\\n<span class=\\\"line\\\"># 获取仅在 P65 中出现的标记基因</span>\\n<span class=\\\"line\\\">unique.p65.markers &lt;- setdiff(region.markers.p65, region.markers.e16)</span>\\n<span class=\\\"line\\\"># 获取仅在 E16 中出现的标记基因</span>\\n<span class=\\\"line\\\">unique.e16.markers &lt;- setdiff(region.markers.e16, region.markers.p65)</span>\\n<span class=\\\"line\\\"># 绘制相关热图</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.p65, \\\"br\\\", all.br, unique.p65.markers)</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.e16, \\\"br\\\", all.br, unique.p65.markers)</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.e16, \\\"br\\\", all.br, unique.e16.markers)</span>\\n<span class=\\\"line\\\">avg.gene.heatmap(excit.p65, \\\"br\\\", all.br, unique.e16.markers)</span>\\n<span class=\\\"line\\\"># 现在，探讨：标记基因表达模式在什么年龄开始接近成年？</span>\\n<span class=\\\"line\\\"># 简单地通过矩阵相减来分析</span>\\n<span class=\\\"line\\\"># 提取不同年龄的数据</span>\\n<span class=\\\"line\\\">excit.p28 &lt;- subset(excit.merge.noNA, subset = age == \\\"p28\\\")</span>\\n<span class=\\\"line\\\">excit.p18 &lt;- subset(excit.merge.noNA, subset = age == \\\"p18\\\")</span>\\n<span class=\\\"line\\\">excit.p10 &lt;- subset(excit.merge.noNA, subset = age == \\\"p10\\\")</span>\\n<span class=\\\"line\\\">excit.p4 &lt;- subset(excit.merge.noNA, subset = age == \\\"p4\\\")</span>\\n<span class=\\\"line\\\">excit.p0 &lt;- subset(excit.merge.noNA, subset = age == \\\"p0\\\")</span>\\n<span class=\\\"line\\\">excit.e18 &lt;- subset(excit.merge.noNA, subset = age == \\\"e18\\\")</span>\\n<span class=\\\"line\\\"># 对于 P65 年龄的标记基因（不包括 E16 的标记基因）</span>\\n<span class=\\\"line\\\"># 获取不同年龄下这些标记基因的表达矩阵</span>\\n<span class=\\\"line\\\">p65.mat &lt;- avg.gene.heatmap(excit.p65, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">p28.mat &lt;- avg.gene.heatmap(excit.p28, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">p18.mat &lt;- avg.gene.heatmap(excit.p18, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">p10.mat &lt;- avg.gene.heatmap(excit.p10, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">p4.mat &lt;- avg.gene.heatmap(excit.p4, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">p0.mat &lt;- avg.gene.heatmap(excit.p0, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">e18.mat &lt;- avg.gene.heatmap(excit.e18, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\">e16.mat &lt;- avg.gene.heatmap(excit.e16, \\\"br\\\", all.br, unique.p65.markers, return = 1)</span>\\n<span class=\\\"line\\\"># 计算不同年龄下的表达矩阵与 P65 年龄的表达矩阵的相关性</span>\\n<span class=\\\"line\\\">cor.to.p65 &lt;- data.frame(age = 1:8, cor = c(cor(c(e16.mat), c(p65.mat)),</span>\\n<span class=\\\"line\\\">                                             cor(c(e18.mat), c(p65.mat)),</span>\\n<span class=\\\"line\\\">                                             cor(c(p0.mat), c(p65.mat)),</span>\\n<span class=\\\"line\\\">                                             cor(c(p4.mat), c(p65.mat)),</span>\\n<span class=\\\"line\\\">                                             cor(c(p10.mat), c(p65.mat)),</span>\\n<span class=\\\"line\\\">                                             cor(c(p18.mat), c(p65.mat)),</span>\\n<span class=\\\"line\\\">                                             cor(c(p28.mat), c(p65.mat)), 1</span>\\n<span class=\\\"line\\\">))</span>\\n<span class=\\\"line\\\"># 绘制相关性随年龄变化的折线图</span>\\n<span class=\\\"line\\\">ggplot(cor.to.p65, aes(x = age, y = cor)) + </span>\\n<span class=\\\"line\\\">  geom_line(aes(linewidth = 4)) + </span>\\n<span class=\\\"line\\\">  theme_classic() + </span>\\n<span class=\\\"line\\\">  ylim(0.3, 1) + </span>\\n<span class=\\\"line\\\">  theme(text = element_text(family = \\\"Myriad Pro\\\")) + </span>\\n<span class=\\\"line\\\">  theme(text = element_text(size = 20))   </span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
