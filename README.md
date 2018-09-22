# Welcome to SPUR

SPUR is a web-based solution for getting up and running on SMU's ManeFrame II supercomputer without needing to first know Bash, SLURM or Linux. This project was created in part to satisfy the requirements of the Master's Thesis at SMU.

## Questions, Issues or Concerns

If you have any problems, questions and suggestions for the SPUR website or the directions listed below please feel free to create an [issue](https://help.github.com/articles/about-issues/) on this Github repository. To do this, click on the issues tab and click create new issue. If you are having problems with the website or the instructions in this readme file please give as much description as possible so we can help solve your problem!

If you have suggestions feel free to create an issue or open a [pull request](https://help.github.com/articles/about-pull-requests/) with the suggested change included.

## Reproducing SPUR From The Command Line
The website provides an easy way to get started using the supercomputer at SMU, but constrains the flexibility and capabilities of the supercomputer to a small subset of its features. To take advtange of the supercomputer's full potential, it is essential to understand the command line tools that allow you to submit a job without using SPUR.

### Getting Access to ManeFrame II

If you would like to use ManeFrame II you must first get permission to use the supercomputer and have an account set up with your SMU credentials. To do this follow the instructions on the CSC [website](http://faculty.smu.edu/csc/documentation/accounts.html).

Once you have been approved to use ManeFrame II you can log in through the command line with ssh. If you are not familiar with SSH or do not have ssh installed there are more specific instructions on the CSC [website](http://faculty.smu.edu/csc/documentation/access.html).

To log on, use:
```bash
ssh <SMU username>@m2.smu.edu
```

This will direct you to a login node, from which you can access SLURMs command line tools, your saved files as well as scratch space.

### Generating A Batch File

Batch files are the files used by the supercomputer's job scheduling software to determine two things: what resources you want, and how to run your job. The first part of a batch file is composed of special comments that begin with `# SBATCH` and are followed by a setting that SLURM will use to allocate resources for your job. Examples of these are the maximum duration of the job, the amount of memory your job requires and whether you want exclusive usage of the node. The center for scientific computation at SMU has more information about this on their [website](http://faculty.smu.edu/csc/documentation/slurm.html#batch-job-submission-file).

The second part of a batch file contains the steps to run your job. A batch file itself is a bash file. Bash itself is a command language, usually used to execute a number of commands for the unix shell together. A batch file is a special type of bash file that SLURM uses. Like a normal bash file, you can execute unix shell commands within it. These commands can be anything that you may write from the command line. At the minimum, the second part of the batch file will include commands to compile and run the code that you want to execute on the supercomputer.

```bash

#!/bin/bash
#SBATCH -J myfirstjob 
#SBATCH -o myfirstob_%j.out
#SBATCH --exclusive
#SBATCH -p standard-mem-s
#SBATCH -t 2

module purge
module load gcc-6.3

gcc first.c -fopenmp
chmod +x first.c
./a.out
```
> Example batch file `sample.sbatch`


### Finding a Partition

ManeFrame II is composed of over 300 computational nodes. Each of these nodes belongs to a partition. Each partition defines the characteristics of the nodes that are apart of it. The characteristics typically include the amount of memory that the node has access to, the number of cores and type of processors that the node has along with the maximum time that a single job can reserve them for. Certain partitions also have GPUs, or allow the job to run with a GUI attached. The characteristics and names of each parition can be found on the CSC [website](http://faculty.smu.edu/csc/documentation/usage.html#maneframe-ii-s-queues-partitions).

To run a job you must specify which parition you would like to run it on. Once you submit your job, SLURM will check to see if any nodes in the given partition are available immediately. If they are, then your job will begin to execute immediately. If all of the nodes in your selected partition are busy, then your job will be added to the queue for that partition and run when the rest of the jobs in front of it have finished and there is an availble node.

Depending on the type of job, you may not need a very specific partition to execute your code. In this instance, there is likely a partition that has available nodes that you can run your job on immediately. The challenge is finding that node. SLURM offers a command line tool to check for the queues for every parition, which can be used to find available nodes. This is how SPUR is able to find nodes to use immediately. To replicate this you must first login to ManeFrame II with ssh and then run `sinfo --states=idle -o "%P %D" | grep -v " 0"`.


### Submitting Your Job to SLURM

All that is required to submit a job to run on the supercomputer is a batch file and the code file that should be executed.

The first step to submitting your job to the supercomputer is moving your code and batch file to the ManeFrame II login node. To do this you can either use a file transfer tool such as [Filezilla](https://filezilla-project.org/) or [secure transport protocol](https://en.wikipedia.org/wiki/Secure_copy#Secure_Copy_(remote_file_copy_program)). Secure transport procol (scp) is used from the command line. To copy your files with scp you can use

```bash
cd <directory_with_code>
scp sample.sbatch <SMU username>@m2.smu.edu:/users/<SMU username>`
scp code.cpp <SMU username>@m2.smu.edu:/users/<SMU username>`
```

SCP will prompt you to enter your credentials which are the same ones you used to login to ManeFrame II with ssh.

Once your files have been moved to the supercomputer, ssh into ManeFrame II and find the files that have been copied by switching to the directory they are in. Finally, run `sbatch <sbatch filename>.sbatch`.

After your job is submitted to SLURM, its id will be outputted. To view the status of your job you can run `squeue -j <job id>`.

### Viewing Your Jobs Output

Once your job begins running anything that is outputted is sent to a file specificed in the batch file. This file will appear in the directory from which your job was submitted. Once the job completes, this file will contain any outputs or any errors during code execution.

To view the file from the command line you can use the cat command line tool by executing `cat <log file name>.out`. This will print the file's contents to the command line.





