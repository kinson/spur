#include <iostream>
#include <fstream>
#include <map>

#include "antlr4-runtime.h"
#include "ParsePragmasLexer.h"
#include "ParsePragmasParser.h"
#include "ParsePragmasBaseListener.h"


// using namespace org::antlr::v4::runtime;
using namespace std;



class TreeShapeListener : public ParsePragmasBaseListener {
public:
  void enterCustomPrag(ParsePragmasParser::CustomPragContext *ctx) override {
	// Do something when entering the key rule.
    string title = ctx->CONDITION()->getText();
    cout << title << endl;
    customPragmaDefinition = title;
  }
  void enterOpenMPPrag(ParsePragmasParser::OpenMPPragContext *ctx) override {
    cout << "found open mp prag" << endl;
    hasOpenMPPragma = true;
  }
  void enterNamePrag(ParsePragmasParser::NamePragContext *ctx) override {
	// Do something when entering the key rule.
    pragmaStore["JOB_NAME"] = "-J " + customPragmaDefinition;
    pragmaStore["JOB_OUTPUT"] = "-o " + customPragmaDefinition + "_%j.out";

  }
  void enterMemPrag(ParsePragmasParser::MemPragContext *ctx) override {
	// Do something when entering the key rule.
    pragmaStore["JOB_MEM"] = "--mem=" + customPragmaDefinition;
  }
  void enterTimePrag(ParsePragmasParser::TimePragContext *ctx) override {
	// Do something when entering the key rule.
    pragmaStore["TIME"] = "-t " + customPragmaDefinition;
  }

  map<string,string> getMap() {
    return pragmaStore;
  }

  string customPragmaDefinition;
  map<string,string> pragmaStore;
  bool hasOpenMPPragma;

};

void createSbatchFile(map<string,string> params, const char* fileName) {
  ofstream sbatchFile;
  sbatchFile.open ("test.sbatch");
  sbatchFile << "#!/bin/bash" << '\n';
  for (map<string,string>::iterator it=params.begin(); it!=params.end(); ++it)
    sbatchFile << "#SBATCH "<< it->second << '\n';
  
  sbatchFile << '\n';
  sbatchFile << "module purge\nmodule load gcc-6.3\n\n";

  sbatchFile << "gcc " << fileName << " -fopenmp\n";
  sbatchFile << "chmod +x " << fileName << '\n';
  sbatchFile << "./a.out\n"; 
  sbatchFile.close();
}


int main(int argc, const char* argv[]) {
  std::ifstream stream;
  stream.open(argv[1]);
  antlr4::ANTLRInputStream input(stream);
  ParsePragmasLexer lexer(&input);
  antlr4::CommonTokenStream tokens(&lexer);
  ParsePragmasParser parser(&tokens);

  antlr4::tree::ParseTree *tree = parser.prog();
  TreeShapeListener listener;
  listener.hasOpenMPPragma = false;
  antlr4::tree::ParseTreeWalker::DEFAULT.walk(&listener, tree);
  // cout << tree->toStringTree(&parser) << endl;

  map<string,string> ref = listener.getMap();

  for (map<string,string>::iterator it=ref.begin(); it!=ref.end(); ++it)
    cout << it->first << " => " << it->second << '\n';

  if (!listener.hasOpenMPPragma) {
    cout << "No OpenMP pragma included" << endl;
    return 1;
  }

  
  createSbatchFile(ref, argv[1]);

  return 0;
}