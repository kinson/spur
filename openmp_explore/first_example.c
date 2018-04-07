#include <stdio.h>
#include <stdlib.h>

void mxv(int m, int n, double * restrict a, double * restrict b, double * restrict c);

int main(int argc, char *argv[]) 
{
    double *a, *b, *c;
    int i, j, m, n;

    printf("Please give m and n: ");
    m = atoi(argv[1]);
    n = atoi(argv[2]);


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
    (void) mxv(m, n, a, b, c);

    free(a);free(b);free(c);

    return(0);
}

void mxv(int m, int n, double * restrict a, double * restrict b, double * restrict c) {
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