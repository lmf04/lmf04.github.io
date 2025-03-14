import{_ as a,e as t,g as r,o as l}from"./app-BeRLrGJD.js";const p={};function o(s,e){return l(),t("div",null,e[0]||(e[0]=[r('<p><a href="https://mp.weixin.qq.com/s/RF2plVSsM1uszB7JCZsncA" target="_blank" rel="noopener noreferrer">原文链接</a></p><p>基于胃癌单细胞图谱：探索肿瘤微环境与亚型特异性表达模式-1已经复现了Figure1B和C，那就也复现一下图D叭！</p><p>Fiugre1B——UMAP图新解：首次分群后按大类分组加圈 Figure1C——多维度细胞比例图揭示细胞构成差异 Figure1D：为了支持有监督的细胞类型特异性标记分析，一个无监督的全局聚类相似性矩阵也将细胞状态划分为五个元聚类</p><p>Image 整体复现思路 从Seurat对象提取感兴趣的基因的表达数据，然后按细胞类型计算平均表达，接着计算各个细胞类型之间的相关性，最后用热图可视化相关性矩阵。</p><ol><li>加载数据并提取标记基因 sce.all.int = readRDS(&#39;2-harmony/sce.all_int.rds&#39;) markers &lt;- read_table(&quot;check-by-celltype/for_act.txt&quot;, col_names = F) 加载了降维聚类分群sce.all.int的Seurat对象 Image check-by-celltype中包含细胞类型和标记基因的文件for_act.txt Image</li><li>提取所有标记基因 all_genes &lt;- c()</li></ol><p>for (i in 1:nrow(markers)) { gene_str &lt;- sub(&quot;.*:&quot;, &quot;&quot;, markers[i, 1]) genes &lt;- unlist(strsplit(gene_str, &quot;,&quot;)) all_genes &lt;- c(all_genes, genes) }</p><p>all_genes &lt;- unique(all_genes) 从标记基因文件中提取每一行的基因名，并把它们存储到all_genes向量中。 使用正则表达式提取基因字符串，并通过strsplit()函数将基因名拆分（假设基因用逗号分隔）。 最后去掉了重复的基因名称（unique()）。 Image 3. 加载元数据并提取表达矩阵 load(&quot;phe.Rdata&quot;) sce.all.int@meta.data$celltype &lt;- phe$celltype</p><h1 id="提取表达矩阵" tabindex="-1"><a class="header-anchor" href="#提取表达矩阵"><span>提取表达矩阵</span></a></h1><p>expr_matrix &lt;- FetchData(sce.all.int, vars = all_genes)</p><h1 id="提取元数据-如细胞类型" tabindex="-1"><a class="header-anchor" href="#提取元数据-如细胞类型"><span>提取元数据（如细胞类型）</span></a></h1><p>meta_data &lt;- sce.all.int@meta.data</p><h1 id="为方便-按细胞类型或群体分组-如果需要" tabindex="-1"><a class="header-anchor" href="#为方便-按细胞类型或群体分组-如果需要"><span>为方便，按细胞类型或群体分组（如果需要）</span></a></h1><p>expr_matrix$cell_type &lt;- meta_data$celltype 加载了包含注释结果的phe.Rdata的元数据文件，将phe中的celltype列添加到sce.all.int的元数据中。</p><p>使用FetchData()函数从Seurat对象中提取之前提到的基因的表达数据，并将其存储在expr_matrix中。</p><p>Image 将元数据中的celltype列添加到expr_matrix中，以便后续按细胞类型分组。 4. 按细胞类型计算平均表达</p><h1 id="按细胞类型计算平均表达量" tabindex="-1"><a class="header-anchor" href="#按细胞类型计算平均表达量"><span>按细胞类型计算平均表达量</span></a></h1><p>average_expr &lt;- aggregate(. ~ cell_type, data = expr_matrix, mean)</p><h1 id="去掉cell-type列-只保留数值矩阵" tabindex="-1"><a class="header-anchor" href="#去掉cell-type列-只保留数值矩阵"><span>去掉cell_type列，只保留数值矩阵</span></a></h1><p>row.names(average_expr) &lt;- average_expr$cell_type average_expr &lt;- average_expr[ , -1] 使用aggregate()函数按cell_type列对表达数据进行聚合，计算每种细胞类型的平均基因表达水平。 row.names(average_expr) &lt;- average_expr$cell_type：将细胞类型列设置为行名。 average_expr &lt;- average_expr[ , -1]：去掉cell_type列，只保留表达矩阵。 Image 5. 计算相关性矩阵 mat &lt;- t(average_expr) # 转置矩阵，因为pheatmap要求行是基因，列是样本 cor_matrix &lt;- cor(mat, use = &quot;complete.obs&quot;) # 计算相关性矩阵 t(average_expr)：转置数据矩阵，确保行是基因，列是细胞类型。 cor(mat, use = &quot;complete.obs&quot;)：计算相关性矩阵。use = &quot;complete.obs&quot;会忽略缺失值（NA）。 Image 6. 可视化相关性矩阵 p &lt;- pheatmap(cor_matrix, color = colorRampPalette(c(&quot;white&quot;, &quot;#FEE5D9&quot;, &quot;red&quot;))(100), cluster_rows = F, cluster_cols = F, show_rownames = T, show_colnames = FALSE, main = &quot;Correlation Matrix Heatmap&quot;, fontsize_number = 10, fontsize_row = 8, fontsize_col = 8) 使用pheatmap()函数可视化相关性矩阵。 指定了一个颜色渐变，从白色到红色，反映从低到高的相关性。 cluster_rows = F 和 cluster_cols = F 表示不对行和列进行聚类。 show_rownames = T 和 show_colnames = FALSE 表示显示行名（基因名），不显示列名（细胞类型）。 fontsize_number, fontsize_row, fontsize_col 用来调整热图中的数字、行名、列名的字体大小。 Image 可改进点 Image 文献中细胞亚群的图例在左侧，排序方式好像也正好相反，可以进行调整 颜色可以按照自己的喜欢调整，选择合适的配色即可 文献中还分层进行标签的展示，可以手动添加 结尾小结 复现文献好看的图就越来越能体会到小洁老师课上说的：画图代码+你的数据+解决问题的能力=你的图！</p><p>Image 一张图首先你要理解它是什么图，用到什么数据，代码还是其次，最主要的是要整理好数据，和具有解决问题的能力！所以新的一年一起学习起来吧，生信入门&amp;数据挖掘线上直播课每月滚动开课！等你来学！</p>',20)]))}const c=a(p,[["render",o],["__file","article-5.html.vue"]]),i=JSON.parse('{"path":"/blog/article-5.html","title":"从热图看细胞亚群聚类全景","lang":"en-US","frontmatter":{"layout":"BlogPost","date":"2025.03.13","archive":true,"title":"从热图看细胞亚群聚类全景","description":"基于胃癌单细胞图谱：探索肿瘤微环境与亚型特异性表达模式-1已经复现了Figure1B和C，那就也复现一下图D叭！","link":null},"headers":[],"git":{},"filePathRelative":"blog/article-5.md","excerpt":"<p><a href=\\"https://mp.weixin.qq.com/s/RF2plVSsM1uszB7JCZsncA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原文链接</a></p>\\n<p>基于胃癌单细胞图谱：探索肿瘤微环境与亚型特异性表达模式-1已经复现了Figure1B和C，那就也复现一下图D叭！</p>\\n<p>Fiugre1B——UMAP图新解：首次分群后按大类分组加圈\\nFigure1C——多维度细胞比例图揭示细胞构成差异\\nFigure1D：为了支持有监督的细胞类型特异性标记分析，一个无监督的全局聚类相似性矩阵也将细胞状态划分为五个元聚类</p>"}');export{c as comp,i as data};
