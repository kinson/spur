#!/bin/bash
-J samsfirstjob
-o samsfirstjob_%j.out
-t 2

module purge
module load gcc-6.3

gcc ../first.c -fopenmp
chmod +x ../first.c 
./a.out
