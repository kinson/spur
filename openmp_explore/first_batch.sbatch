#!/bin/bash
#SBATCH -J first_open_mp
#SBATCH -o first_open_%j.out
#SBATCH -p medium-mem-1-s
#SBATCH -t 2
#SBATCH --exclusive
#SBATCH --mem=64G

module purge
module load gcc-6.3

echo starting no open mp run
time ./no_open_mp_first 40000 50000


echo starting open mp run
time ./open_mp_first 40000 50000