#include <iostream>

#include "antlr4-runtime.h"
#include "ParsePragmasLexer.h"
#include "ParsePragmasParser.h"
#include "ParsePragmasBaseListener.h"

// using namespace org::antlr::v4::runtime;
using namespace std;

class TreeShapeListener : public ParsePragmasBaseListener {
public:
  void enterPragma(ParsePragmasParser::PragmaContext *ctx) override {
	// Do something when entering the key rule.
    cout << "entered Pragma" << endl;
    cout << ctx->def()->getText() << endl;
  }
  void enterNamePrag(ParsePragmasParser::NamePragContext *ctx) override {
	// Do something when entering the key rule.
    cout << "entered name prag" << endl;
    cout << ctx->getText() << endl;
  }
  void enterMemPrag(ParsePragmasParser::MemPragContext *ctx) override {
	// Do something when entering the key rule.
    cout << "entered end prag" << endl;
    cout << ctx->getText() << endl;
  }
};


int main(int argc, const char* argv[]) {
  std::ifstream stream;
  stream.open(argv[1]);
  antlr4::ANTLRInputStream input(stream);
  ParsePragmasLexer lexer(&input);
  antlr4::CommonTokenStream tokens(&lexer);
  ParsePragmasParser parser(&tokens);

  antlr4::tree::ParseTree *tree = parser.prog();
  TreeShapeListener listener;
  antlr4::tree::ParseTreeWalker::DEFAULT.walk(&listener, tree);

  cout << tree->toStringTree(&parser) << endl;

  return 0;
}