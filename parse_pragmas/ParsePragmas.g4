grammar ParsePragmas;

prog: statement+;

statement: (pragma | CONDITION* NEWLINE) ;

pragma: PBEGIN def CONDITION NEWLINE   # customPrag
      | OPENMPBEGIN CONDITION* NEWLINE  # openMPPrag
      ;

def:  'NAME'        #namePrag
    | 'MEM'         #memPrag
    | 'PARTITION'   #partitionPrag
    | 'RUNS'        #runsPrag
    | 'TIME'        #timePrag
    ;


OPENMPBEGIN: '#pragma' ;

PBEGIN: '// cprag' ;
CONDITION: [*,;:&%<>()#a-zA-Z0-9{}/=_"+\\.\-\][]+;
NEWLINE: [\r\n] ;
WS : [ \t]+ -> skip ;
END : (EOF) -> skip;

ErrorCharacter : . ;