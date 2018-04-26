
// Generated from ParsePragmas.g4 by ANTLR 4.7.1

#pragma once


#include "antlr4-runtime.h"
#include "ParsePragmasParser.h"


/**
 * This interface defines an abstract listener for a parse tree produced by ParsePragmasParser.
 */
class  ParsePragmasListener : public antlr4::tree::ParseTreeListener {
public:

  virtual void enterProg(ParsePragmasParser::ProgContext *ctx) = 0;
  virtual void exitProg(ParsePragmasParser::ProgContext *ctx) = 0;

  virtual void enterPragma(ParsePragmasParser::PragmaContext *ctx) = 0;
  virtual void exitPragma(ParsePragmasParser::PragmaContext *ctx) = 0;


};

