---
layout: BlogPost
date: 2025.02.12
archive: true
title: This Set of Bioinformatics Analysis Code from Harvard University's Nature Paper is Worth Learning
description: Recently, a research team from Harvard University published an important study in the journal Nature. This research delved into the developmental trajectory of neurons in the mammalian hypothalamic preoptic area (POA), revealing the significant influence of factors such as sensory input, sex, and function on their development. It provides a new perspective for understanding the neural basis of instinctive behaviors.
---
 

This code block is used to set up the environment and load the R packages required for subsequent analysis.
# This code is used to generate regional correlation matrices and metrics, corresponding to Extended Data Fig. 3d - k
# Using excitatory neurons as an example for analysis
# Load necessary libraries
library(Seurat)  # A powerful toolkit for single-cell RNA sequencing data analysis
library(ggplot2) # For creating high-quality graphics
library(patchwork) # For combining multiple ggplot graphics
library(magrittr) # Provides the pipe operator %>%
library(tidyverse) # Contains several commonly used packages for data processing and visualization
library(pheatmap) # For drawing heatmaps
library(palr) # Provides color palettes
# This code block is used to generate the correlation matrix between cell types at a given age.
# This part generates matrices as shown in Extended Data Fig. 3d, e, g, h, using Fig. e (excitatory neurons at age P65) as an example.
# Load the merged data.
# The merged data contains only excitatory neurons (the operation is the same if analyzing inhibitory neurons, just run separately for each).
# These data are merged across all ages and then normalized using SCTransform across the entire dataset.
excit.merge <- readRDS("")
# Extract data for age P65 from the merged data
p65 <- subset(excit.merge, subset = age == "p65")
# Sort the cell type names
celltypes <- names(table(p65$my.cell.type))
celltypes <- c(celltypes[1:19], celltypes[21:28], celltypes[20], celltypes[29:37], celltypes[39:46], celltypes[38], celltypes[47], celltypes[50:57], celltypes[48:49], celltypes[58:64])
# Reorder the cell types
new.order <- c(grep("B", celltypes), grep("H", celltypes), grep("L", celltypes), grep("C", celltypes), grep("F", celltypes), grep("M", celltypes), grep("N", celltypes), grep("A", celltypes), grep("P", celltypes), grep("T", celltypes), grep("X", celltypes))
celltypes <- celltypes[new.order]
# Set parameters: number of feature genes
nfeatures = 20000
# Set the default assay to RNA
DefaultAssay(p65) <- "RNA"
# Find variable feature genes
p65 <- FindVariableFeatures(p65, nfeatures = nfeatures)
# Scale the data
p65 <- ScaleData(p65)
# Generate the centroid matrix, which will serve as input for the corr() function
centroid.mat <- matrix(, nrow = length(celltypes), ncol = nfeatures)
for (i in 1:length(celltypes)) {
  # Print progress information every 10 cell types
  if (i %% 10 == 0) {
    print(paste0("on cell type number ", i))
  }
  # Skip cell types with fewer than 2 cells
  if (table(p65$my.cell.type)[i] < 2) {
    print("NOTE: this cell type has less than 2 cells. skipping...")
    next
  }
  # Extract data for the current cell type
  ct.sub <- subset(p65, subset = my.cell.type == celltypes[i])
  # Get the scaled data matrix
  scaledata.mat <- ct.sub@assays$RNA@scale.data
  # Calculate the centroid for the current cell type (i.e., the mean per row)
  centroid.mat[i, ] <- rowMeans(scaledata.mat)
}
# Calculate the correlation matrix of the centroid matrix
p65.corrmat <- cor(t(centroid.mat))
# Set the row and column names of the correlation matrix
rownames(p65.corrmat) <- celltypes
colnames(p65.corrmat) <- celltypes
# Draw the heatmap without row and column clustering
pheatmap(p65.corrmat, cluster_rows = F, cluster_cols = F, border_color = NA)
# Scale the correlation matrix
scale.max <- 0.5
scale.min <- -0.2
scale.corrmat <- p65.corrmat
# Set values greater than scale.max to scale.max
scale.corrmat[scale.corrmat > scale.max] <- scale.max
# Set values less than scale.min to scale.min
scale.corrmat[scale.corrmat < scale.min] <- scale.min
# Draw the scaled heatmap
pheatmap(scale.corrmat, cluster_rows = F, cluster_cols = F, border_color = NA)
# This code block is used to generate the expression of regional marker genes at each age.
# This part of the code generates Extended Data Fig. 3j - k.
# First, create a function for plotting heatmaps.
avg.gene.heatmap <- function(obj,
                             br.or.ct,  # "br" for operation by brain region, "ct" for operation by cell type
                             identity.rows,  # Cell type or brain region names in order
                             gene.columns,  # Gene names in order
                             scale.max = 2,  # Maximum value for scaling heatmap data
                             scale.min = 0,  # Minimum value for scaling heatmap data
                             return.matrix = 0) {  # Whether to return the heatmap matrix, 0 for no, 1 for yes

  # Set the default assay to RNA
  DefaultAssay(obj) <- "RNA"

  # Set all genes as variable features for subsequent scaling
  VariableFeatures(obj) <- rownames(obj)

  # Scale the data
  obj <- ScaleData(obj)

  # Initialize an empty matrix to store the heatmap data
  heatmap.to.plot <- matrix(, nrow = length(identity.rows), ncol = length(gene.columns))

  # Iterate over each row (cell type or brain region)
  for (ident.row in 1:length(identity.rows)) {
    if (br.or.ct == "br") {
      # If operating by brain region, extract data for the corresponding brain region
      ident.sub <- subset(obj, subset = brain.region == identity.rows[ident.row])
    }
    if (br.or.ct == "ct") {
      # If operating by cell type, extract data for the corresponding cell type
      ident.sub <- subset(obj, subset = my.cell.type == identity.rows[ident.row])
    }

    # Iterate over each column (gene)
    for (gene in 1:length(gene.columns)) {
      # Find the index of the current gene in the data
      gene.ind <- grep(paste0("^", gene.columns[gene], "$"), rownames(ident.sub))

      # Calculate the average expression value of the current gene in the current cell type or brain region and store it in the heatmap matrix
      heatmap.to.plot[ident.row, gene] <- mean(ident.sub@assays$RNA@scale.data[gene.ind, ])
    }
  }

  # Set the row and column names of the heatmap matrix
  rownames(heatmap.to.plot) <- identity.rows
  colnames(heatmap.to.plot) <- gene.columns

  # Scale the heatmap matrix
  heatmap.to.plot.scaled <- heatmap.to.plot
  heatmap.to.plot.scaled[heatmap.to.plot.scaled > scale.max] <- scale.max
  heatmap.to.plot.scaled[heatmap.to.plot.scaled < scale.min] <- scale.min

  # Draw the heatmap without row and column clustering, using a reversed color palette
  pheatmap(t(heatmap.to.plot.scaled), cluster_rows = F, cluster_cols = F, color = rev(bathy_deep_pal(50)), border_color = NA)

  # If return.matrix is 1, return the heatmap matrix
  if (return.matrix == 1) {
    return(heatmap.to.plot)
  }
}
# Now get the marker genes and plot the heatmap.
# Convert the brain regions in the merged data to factor type and specify the level order.
excit.merge$brain.region <- factor(excit.merge$brain.region, levels = c("BNST", "HDB.VLPO", "LPO.PS", "BAC-like", "PeFA", "MPN.anterior", "MPN.posterior", "AvPE.MnPO", "PVN", "PVT", "Mixed/Unknown"))
# Set the identity to brain region for subsequent analysis.
Idents(excit.merge) <- "brain.region"
# Data preparation
# Extract data for age P65
excit.p65 <- subset(excit.merge, subset = age == "p65")
# Extract data for age E16
excit.e16 <- subset(excit.merge, subset = age == "e16")
# Get the names of all brain regions
all.br <- names(table(excit.p65$brain.region))
# Get regional marker genes for age P65
region.markers.p65 <- FindAllMarkers(excit.p65, assay = "RNA", only.pos = T)
# Filter marker genes with adjusted p-value less than 0.05
region.markers.p65 <- region.markers.p65[region.markers.p65$p_val_adj < 0.05, ]
# Filter marker genes with average log2 fold change greater than 0.5
region.markers.p65 <- region.markers.p65[region.markers.p65$avg_log2FC > 0.5, ]
# Remove duplicate marker genes
region.markers.p65 <- region.markers.p65$gene[-which(duplicated(region.markers.p65$gene))]
# Display the expression of P65 marker genes at P65 age in a heatmap.
avg.gene.heatmap(excit.p65, "br", all.br, region.markers.p65)
# Now test the expression of P65 genes at E16 age.
avg.gene.heatmap(excit.e16, "br", all.br, region.markers.p65)
# Conversely, get regional marker genes for age E16.
region.markers.e16 <- FindAllMarkers(excit.e16, assay = "RNA", only.pos = T)
# Filter marker genes with adjusted p-value less than 0.05
region.markers.e16 <- region.markers.e16[region.markers.e16$p_val_adj < 0.05, ]
# Filter marker genes with average log2 fold change greater than 0.5
region.markers.e16 <- region.markers.e16[region.markers.e16$avg_log2FC > 0.5, ]
# Remove duplicate marker genes
region.markers.e16 <- region.markers.e16$gene[-which(duplicated(region.markers.e16$gene))]
# Display the expression of E16 marker genes at E16 age in a heatmap.
avg.gene.heatmap(excit.e16, "br", all.br, region.markers.e16)
# Now test the expression of E16 genes at P65 age.
avg.gene.heatmap(excit.p65, "br", all.br, region.markers.e16)
# Now remove marker genes that appear in both lists and replot the heatmaps.
# Get marker genes unique to P65
unique.p65.markers <- setdiff(region.markers.p65, region.markers.e16)
# Get marker genes unique to E16
unique.e16.markers <- setdiff(region.markers.e16, region.markers.p65)
# Plot the relevant heatmaps.
avg.gene.heatmap(excit.p65, "br", all.br, unique.p65.markers)
avg.gene.heatmap(excit.e16, "br", all.br, unique.p65.markers)
avg.gene.heatmap(excit.e16, "br", all.br, unique.e16.markers)
avg.gene.heatmap(excit.p65, "br", all.br, unique.e16.markers)
# Now, explore: At what age does the marker gene expression pattern begin to resemble adulthood?
# Simply analyze by matrix subtraction.
# Extract data for different ages
excit.p28 <- subset(excit.merge.noNA, subset = age == "p28")
excit.p18 <- subset(excit.merge.noNA, subset = age == "p18")
excit.p10 <- subset(excit.merge.noNA, subset = age == "p10")
excit.p4 <- subset(excit.merge.noNA, subset = age == "p4")
excit.p0 <- subset(excit.merge.noNA, subset = age == "p0")
excit.e18 <- subset(excit.merge.noNA, subset = age == "e18")
# For P65 marker genes (excluding E16 marker genes)
# Get the expression matrix of these marker genes at different ages
p65.mat <- avg.gene.heatmap(excit.p65, "br", all.br, unique.p65.markers, return.matrix = 1)
p28.mat <- avg.gene.heatmap(excit.p28, "br", all.br, unique.p65.markers, return.matrix = 1)
p18.mat <- avg.gene.heatmap(excit.p18, "br", all.br, unique.p65.markers, return.matrix = 1)
p10.mat <- avg.gene.heatmap(excit.p10, "br", all.br, unique.p65.markers, return.matrix = 1)
p4.mat <- avg.gene.heatmap(excit.p4, "br", all.br, unique.p65.markers, return.matrix = 1)
p0.mat <- avg.gene.heatmap(excit.p0, "br", all.br, unique.p65.markers, return.matrix = 1)
e18.mat <- avg.gene.heatmap(excit.e18, "br", all.br, unique.p65.markers, return.matrix = 1)
e16.mat <- avg.gene.heatmap(excit.e16, "br", all.br, unique.p65.markers, return.matrix = 1)
# Calculate the correlation between the expression matrix at different ages and the expression matrix at P65 age.
cor.to.p65 <- data.frame(age = 1:8, cor = c(cor(c(e16.mat), c(p65.mat)),
                                             cor(c(e18.mat), c(p65.mat)),
                                             cor(c(p0.mat), c(p65.mat)),
                                             cor(c(p4.mat), c(p65.mat)),
                                             cor(c(p10.mat), c(p65.mat)),
                                             cor(c(p18.mat), c(p65.mat)),
                                             cor(c(p28.mat), c(p65.mat)), 1
))
# Draw a line plot of correlation changing with age.
ggplot(cor.to.p65, aes(x = age, y = cor)) +
  geom_line(aes(linewidth = 4)) +
  theme_classic() +
  ylim(0.3, 1) +
  theme(text = element_text(family = "Myriad Pro")) +
  theme(text = element_text(size = 20))