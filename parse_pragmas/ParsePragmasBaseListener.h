
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

  virtual void enterStatement(ParsePragmasParser::StatementContext * /*ctx*/) override { }
  virtual void exitStatement(ParsePragmasParser::StatementContext * /*ctx*/) override { }

  virtual void enterCustomPrag(ParsePragmasParser::CustomPragContext * /*ctx*/) override { }
  virtual void exitCustomPrag(ParsePragmasParser::CustomPragContext * /*ctx*/) override { }

  virtual void enterOpenMPPrag(ParsePragmasParser::OpenMPPragContext * /*ctx*/) override { }
  virtual void exitOpenMPPrag(ParsePragmasParser::OpenMPPragContext * /*ctx*/) override { }

  virtual void enterNamePrag(ParsePragmasParser::NamePragContext * /*ctx*/) override { }
  virtual void exitNamePrag(ParsePragmasParser::NamePragContext * /*ctx*/) override { }

  virtual void enterMemPrag(ParsePragmasParser::MemPragContext * /*ctx*/) override { }
  virtual void exitMemPrag(ParsePragmasParser::MemPragContext * /*ctx*/) override { }

  virtual void enterPartitionPrag(ParsePragmasParser::PartitionPragContext * /*ctx*/) override { }
  virtual void exitPartitionPrag(ParsePragmasParser::PartitionPragContext * /*ctx*/) override { }

  virtual void enterRunsPrag(ParsePragmasParser::RunsPragContext * /*ctx*/) override { }
  virtual void exitRunsPrag(ParsePragmasParser::RunsPragContext * /*ctx*/) override { }

  virtual void enterTimePrag(ParsePragmasParser::TimePragContext * /*ctx*/) override { }
  virtual void exitTimePrag(ParsePragmasParser::TimePragContext * /*ctx*/) override { }


  virtual void enterEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void exitEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void visitTerminal(antlr4::tree::TerminalNode * /*node*/) override { }
  virtual void visitErrorNode(antlr4::tree::ErrorNode * /*node*/) override { }

};

