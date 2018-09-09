#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#ifdef _OPENMP
   #include <omp.h>
#else
   #define omp_get_thread_num() 0
#endif

#define BILLION 1E9
// cprag NAME samsfirstjob
// cprag TIME 120
// cprag EMAIL shunter@smu.edu
// cprag MEM 64G

void mxv(int m, int n, double * a, double * b, double * c);

int main(int argc, char *argv[])
{
    double *a, *b, *c;
    int i, j, m, n;

    m = 20000;
    n = 50000;

    if ( (a=(double *)malloc(m*sizeof(double))) == NULL )
      perror("memory alocation for a");
    if ( (b=(double *)malloc(m*n*sizeof(double))) == NULL )
      perror("memory alocation for b");
    if ( (c=(double *)malloc(n*sizeof(double))) == NULL )
      perror("memory alocation for c");

    printf("Initializing matrix B and vector c\n");
    for (j = 0; j < n; j++)
      c[j] = 2.0;
    for (i = 0; i < m; i++)
      for (j = 0; j < n; j++)
        b[i*n+j] = i;

    printf("Executing mxv function for m = %d n = %d\n", m, n);

    struct timespec requestStart, requestEnd;
    clock_gettime(CLOCK_REALTIME, &requestStart);
    (void) mxv(m, n, a, b, c);
    clock_gettime(CLOCK_REALTIME, &requestEnd);
    free(a);free(b);free(c);

    double time_spent = ( requestEnd.tv_sec - requestStart.tv_sec ) + ( requestEnd.tv_nsec - requestStart.tv_nsec ) / BILLION;

    printf("time spent doing multiply: %lf\n", time_spent);

    return(0);
}

void mxv(int m, int n, double * a, double * b, double * c) {
    int i, j;

    #pragma omp parallel for default(none) shared(m, n, a, b, c) private(i, j)
    for (i = 0; i < m; i++)
    {
        a[i] = 0.0;
        for (j = 0; j < n; j++)
        {
            a[i] += b[i*n+j] * c[j];
        }
    } // end open mp
}
