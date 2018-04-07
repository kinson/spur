CC=gcc

default: both;

both: first.c
        $(CC) first.c -o no_open_mp_first
        $(CC) first.c -fopenmp -o open_mp_first

clean:
        rm no_open_mp_first
        rm open_mp_first
        rm first_open_*.out