grammar ParsePragmas;

prog: pragma+ ;


pragma: PBEGIN CONDITION;


PBEGIN: '##' ;
CONDITION: [a-zA-Z]+;
WS : [ \t\r\n]+ -> skip ;