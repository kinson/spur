
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

  virtual void enterStatement(ParsePragmasParser::StatementContext *ctx) = 0;
  virtual void exitStatement(ParsePragmasParser::StatementContext *ctx) = 0;

  virtual void enterCustomPrag(ParsePragmasParser::CustomPragContext *ctx) = 0;
  virtual void exitCustomPrag(ParsePragmasParser::CustomPragContext *ctx) = 0;

  virtual void enterOpenMPPrag(ParsePragmasParser::OpenMPPragContext *ctx) = 0;
  virtual void exitOpenMPPrag(ParsePragmasParser::OpenMPPragContext *ctx) = 0;

  virtual void enterNamePrag(ParsePragmasParser::NamePragContext *ctx) = 0;
  virtual void exitNamePrag(ParsePragmasParser::NamePragContext *ctx) = 0;

  virtual void enterMemPrag(ParsePragmasParser::MemPragContext *ctx) = 0;
  virtual void exitMemPrag(ParsePragmasParser::MemPragContext *ctx) = 0;

  virtual void enterPartitionPrag(ParsePragmasParser::PartitionPragContext *ctx) = 0;
  virtual void exitPartitionPrag(ParsePragmasParser::PartitionPragContext *ctx) = 0;

  virtual void enterRunsPrag(ParsePragmasParser::RunsPragContext *ctx) = 0;
  virtual void exitRunsPrag(ParsePragmasParser::RunsPragContext *ctx) = 0;

  virtual void enterTimePrag(ParsePragmasParser::TimePragContext *ctx) = 0;
  virtual void exitTimePrag(ParsePragmasParser::TimePragContext *ctx) = 0;


};

