# First Stab at Getting ANTLR working for C++

To generate lexers and parsers from grammar file:

`a4 -Dlanguage=Cpp ParsePragmas.g4`

To compile the test `main.cpp` file:

`g++ *.cpp -std=c++11 -I/usr/local/Cellar/antlr4-cpp-runtime/4.7.1/include/antlr4-runtime -L/usr/local/Cellar/antlr4-cpp-runtime/4.7.1/lib -lantlr4-runtime`

Helpful links:
* [c++ antlr page](https://github.com/antlr/antlr4/blob/master/doc/cpp-target.md)
* [c++ antlr runtime homebrew](http://formulae.brew.sh/formula/antlr4-cpp-runtime)