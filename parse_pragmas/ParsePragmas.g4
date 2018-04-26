grammar ParsePragmas;

prog: pragma+ ;


pragma: PBEGIN def CONDITION NEWLINE;

def:  'NAME'        #namePrag
    | 'MEM'         #memPrag
    | 'PARTITION'   #partitionPrag
    | 'RUNS'        #runsPrag
    ;


PBEGIN: '##' ;
PEND: '%%' ;
CONDITION: [a-zA-Z]+;
NEWLINE: [\n] ;
WS : [ \t\r\n]+ -> skip ;