#!/bin/bash
#SBATCH -J samsfirstjob
#SBATCH -o samsfirstjob_%j.out
#SBATCH -t 2

module purge
module load gcc-6.3

gcc first.c -fopenmp
chmod +x first.c
./a.out
