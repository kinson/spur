
// Generated from ParsePragmas.g4 by ANTLR 4.7.1

#pragma once


#include "antlr4-runtime.h"
#include "ParsePragmasListener.h"


/**
 * This class provides an empty implementation of ParsePragmasListener,
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
class  ParsePragmasBaseListener : public ParsePragmasListener {
public:

  virtual void enterProg(ParsePragmasParser::ProgContext * /*ctx*/) override { }
  virtual void exitProg(ParsePragmasParser::ProgContext * /*ctx*/) override { }

  virtual void enterPragma(ParsePragmasParser::PragmaContext * /*ctx*/) override { }
  virtual void exitPragma(ParsePragmasParser::PragmaContext * /*ctx*/) override { }


  virtual void enterEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void exitEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void visitTerminal(antlr4::tree::TerminalNode * /*node*/) override { }
  virtual void visitErrorNode(antlr4::tree::ErrorNode * /*node*/) override { }

};

