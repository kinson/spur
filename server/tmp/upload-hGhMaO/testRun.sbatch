#!/bin/bash

# set SLURM directives
#SBATCH -J samsfirstjob
#SBATCH -o samsfirstjob_%j.out
#SBATCH -t 120
#SBATCH --mem=64G
#SBATCH --exclusive
#SBATCH -p standard-mem-s
#SBATCH --mail-user me@parse.samwhunter.com
#SBATCH --mail-type=all

# remove all modules loaded in current workspace to start with clean slate
module purge
# load c compiler compatible with OpenMP into the workspace
module load gcc-6.3

# compile source file with OpenMP flag
gcc first.c -o first_OpenMP -fopenmp

# compile source file without OpenMP
gcc first.c -o first_NoOpenMP

# make OpenMP-compiled file executable
chmod +x first_OpenMP 
chmod +x first_NoOpenMP 

# time run time for each executable
echo time with openMP
time ./first_OpenMP
echo time without openMP
time ./first_NoOpenMP
