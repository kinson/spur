grammar PrototypeOne;
// import Java;

prog: statement+ ;




variableInstantiation: 'int' ID '=' INT ;

exitCondition: ID '<' INT ;

increaseCondition: ID '++' ;

primary: ID | INT;

expr: primary
     | expr '!'
     | expr '+' expr ;
    //  | expr ('!'<assoc=right>) ;

assignment: ID '=' expr ;

statement: variableInstantiation ';'
        |  ID ';'
        | forLoop
        | assignment ';'
        ;

block: '{' (statement)* '}' ;

forLoop: 'for' '(' variableInstantiation ';' exitCondition ';' increaseCondition  ')'
          block
        ;


HENRY: 'HENRY';
ID: [a-zA-Z]+ ;
INT: [0-9]+ ;
WS : [ \t\r\n]+ -> skip ;


/*

 int i = 0;
 for (int b = 0; b < 1000; b++) {
     i = i + b!;
 }    

System.out.println(i);

 */