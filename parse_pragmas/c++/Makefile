CC=g++
A4=java -jar /usr/local/lib/antlr-4.7.1-complete.jar
RUNTIME=/usr/local/Cellar/antlr4-cpp-runtime/4.7.1/include/antlr4-runtime
LIB=/usr/local/Cellar/antlr4-cpp-runtime/4.7.1/lib

default: runner

runner: main.cpp grammar
	$(CC) *.cpp -std=c++11 -I$(RUNTIME) -L$(LIB) -lantlr4-runtime

grammar: ParsePragmas.g4
	$(A4) ParsePragmas.g4 -Dlanguage=Cpp
