
// Generated from ParsePragmas.g4 by ANTLR 4.7.1


#include "ParsePragmasListener.h"

#include "ParsePragmasParser.h"


using namespace antlrcpp;
using namespace antlr4;

ParsePragmasParser::ParsePragmasParser(TokenStream *input) : Parser(input) {
  _interpreter = new atn::ParserATNSimulator(this, _atn, _decisionToDFA, _sharedContextCache);
}

ParsePragmasParser::~ParsePragmasParser() {
  delete _interpreter;
}

std::string ParsePragmasParser::getGrammarFileName() const {
  return "ParsePragmas.g4";
}

const std::vector<std::string>& ParsePragmasParser::getRuleNames() const {
  return _ruleNames;
}

dfa::Vocabulary& ParsePragmasParser::getVocabulary() const {
  return _vocabulary;
}


//----------------- ProgContext ------------------------------------------------------------------

ParsePragmasParser::ProgContext::ProgContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<ParsePragmasParser::StatementContext *> ParsePragmasParser::ProgContext::statement() {
  return getRuleContexts<ParsePragmasParser::StatementContext>();
}

ParsePragmasParser::StatementContext* ParsePragmasParser::ProgContext::statement(size_t i) {
  return getRuleContext<ParsePragmasParser::StatementContext>(i);
}


size_t ParsePragmasParser::ProgContext::getRuleIndex() const {
  return ParsePragmasParser::RuleProg;
}

void ParsePragmasParser::ProgContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterProg(this);
}

void ParsePragmasParser::ProgContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitProg(this);
}

ParsePragmasParser::ProgContext* ParsePragmasParser::prog() {
  ProgContext *_localctx = _tracker.createInstance<ProgContext>(_ctx, getState());
  enterRule(_localctx, 0, ParsePragmasParser::RuleProg);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(9); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(8);
      statement();
      setState(11); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while ((((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & ((1ULL << ParsePragmasParser::OPENMPBEGIN)
      | (1ULL << ParsePragmasParser::PBEGIN)
      | (1ULL << ParsePragmasParser::CONDITION)
      | (1ULL << ParsePragmasParser::NEWLINE))) != 0));
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- StatementContext ------------------------------------------------------------------

ParsePragmasParser::StatementContext::StatementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

ParsePragmasParser::PragmaContext* ParsePragmasParser::StatementContext::pragma() {
  return getRuleContext<ParsePragmasParser::PragmaContext>(0);
}

tree::TerminalNode* ParsePragmasParser::StatementContext::NEWLINE() {
  return getToken(ParsePragmasParser::NEWLINE, 0);
}

std::vector<tree::TerminalNode *> ParsePragmasParser::StatementContext::CONDITION() {
  return getTokens(ParsePragmasParser::CONDITION);
}

tree::TerminalNode* ParsePragmasParser::StatementContext::CONDITION(size_t i) {
  return getToken(ParsePragmasParser::CONDITION, i);
}


size_t ParsePragmasParser::StatementContext::getRuleIndex() const {
  return ParsePragmasParser::RuleStatement;
}

void ParsePragmasParser::StatementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterStatement(this);
}

void ParsePragmasParser::StatementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitStatement(this);
}

ParsePragmasParser::StatementContext* ParsePragmasParser::statement() {
  StatementContext *_localctx = _tracker.createInstance<StatementContext>(_ctx, getState());
  enterRule(_localctx, 2, ParsePragmasParser::RuleStatement);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(21);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case ParsePragmasParser::OPENMPBEGIN:
      case ParsePragmasParser::PBEGIN: {
        setState(13);
        pragma();
        break;
      }

      case ParsePragmasParser::CONDITION:
      case ParsePragmasParser::NEWLINE: {
        setState(17);
        _errHandler->sync(this);
        _la = _input->LA(1);
        while (_la == ParsePragmasParser::CONDITION) {
          setState(14);
          match(ParsePragmasParser::CONDITION);
          setState(19);
          _errHandler->sync(this);
          _la = _input->LA(1);
        }
        setState(20);
        match(ParsePragmasParser::NEWLINE);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- PragmaContext ------------------------------------------------------------------

ParsePragmasParser::PragmaContext::PragmaContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}


size_t ParsePragmasParser::PragmaContext::getRuleIndex() const {
  return ParsePragmasParser::RulePragma;
}

void ParsePragmasParser::PragmaContext::copyFrom(PragmaContext *ctx) {
  ParserRuleContext::copyFrom(ctx);
}

//----------------- OpenMPPragContext ------------------------------------------------------------------

tree::TerminalNode* ParsePragmasParser::OpenMPPragContext::OPENMPBEGIN() {
  return getToken(ParsePragmasParser::OPENMPBEGIN, 0);
}

tree::TerminalNode* ParsePragmasParser::OpenMPPragContext::NEWLINE() {
  return getToken(ParsePragmasParser::NEWLINE, 0);
}

std::vector<tree::TerminalNode *> ParsePragmasParser::OpenMPPragContext::CONDITION() {
  return getTokens(ParsePragmasParser::CONDITION);
}

tree::TerminalNode* ParsePragmasParser::OpenMPPragContext::CONDITION(size_t i) {
  return getToken(ParsePragmasParser::CONDITION, i);
}

ParsePragmasParser::OpenMPPragContext::OpenMPPragContext(PragmaContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::OpenMPPragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterOpenMPPrag(this);
}
void ParsePragmasParser::OpenMPPragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitOpenMPPrag(this);
}
//----------------- CustomPragContext ------------------------------------------------------------------

tree::TerminalNode* ParsePragmasParser::CustomPragContext::PBEGIN() {
  return getToken(ParsePragmasParser::PBEGIN, 0);
}

ParsePragmasParser::DefContext* ParsePragmasParser::CustomPragContext::def() {
  return getRuleContext<ParsePragmasParser::DefContext>(0);
}

tree::TerminalNode* ParsePragmasParser::CustomPragContext::CONDITION() {
  return getToken(ParsePragmasParser::CONDITION, 0);
}

tree::TerminalNode* ParsePragmasParser::CustomPragContext::NEWLINE() {
  return getToken(ParsePragmasParser::NEWLINE, 0);
}

ParsePragmasParser::CustomPragContext::CustomPragContext(PragmaContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::CustomPragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterCustomPrag(this);
}
void ParsePragmasParser::CustomPragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitCustomPrag(this);
}
ParsePragmasParser::PragmaContext* ParsePragmasParser::pragma() {
  PragmaContext *_localctx = _tracker.createInstance<PragmaContext>(_ctx, getState());
  enterRule(_localctx, 4, ParsePragmasParser::RulePragma);
  size_t _la = 0;

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(36);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case ParsePragmasParser::PBEGIN: {
        _localctx = dynamic_cast<PragmaContext *>(_tracker.createInstance<ParsePragmasParser::CustomPragContext>(_localctx));
        enterOuterAlt(_localctx, 1);
        setState(23);
        match(ParsePragmasParser::PBEGIN);
        setState(24);
        def();
        setState(25);
        match(ParsePragmasParser::CONDITION);
        setState(26);
        match(ParsePragmasParser::NEWLINE);
        break;
      }

      case ParsePragmasParser::OPENMPBEGIN: {
        _localctx = dynamic_cast<PragmaContext *>(_tracker.createInstance<ParsePragmasParser::OpenMPPragContext>(_localctx));
        enterOuterAlt(_localctx, 2);
        setState(28);
        match(ParsePragmasParser::OPENMPBEGIN);
        setState(32);
        _errHandler->sync(this);
        _la = _input->LA(1);
        while (_la == ParsePragmasParser::CONDITION) {
          setState(29);
          match(ParsePragmasParser::CONDITION);
          setState(34);
          _errHandler->sync(this);
          _la = _input->LA(1);
        }
        setState(35);
        match(ParsePragmasParser::NEWLINE);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- DefContext ------------------------------------------------------------------

ParsePragmasParser::DefContext::DefContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}


size_t ParsePragmasParser::DefContext::getRuleIndex() const {
  return ParsePragmasParser::RuleDef;
}

void ParsePragmasParser::DefContext::copyFrom(DefContext *ctx) {
  ParserRuleContext::copyFrom(ctx);
}

//----------------- NamePragContext ------------------------------------------------------------------

ParsePragmasParser::NamePragContext::NamePragContext(DefContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::NamePragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterNamePrag(this);
}
void ParsePragmasParser::NamePragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitNamePrag(this);
}
//----------------- PartitionPragContext ------------------------------------------------------------------

ParsePragmasParser::PartitionPragContext::PartitionPragContext(DefContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::PartitionPragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterPartitionPrag(this);
}
void ParsePragmasParser::PartitionPragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitPartitionPrag(this);
}
//----------------- TimePragContext ------------------------------------------------------------------

ParsePragmasParser::TimePragContext::TimePragContext(DefContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::TimePragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTimePrag(this);
}
void ParsePragmasParser::TimePragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTimePrag(this);
}
//----------------- MemPragContext ------------------------------------------------------------------

ParsePragmasParser::MemPragContext::MemPragContext(DefContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::MemPragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterMemPrag(this);
}
void ParsePragmasParser::MemPragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitMemPrag(this);
}
//----------------- RunsPragContext ------------------------------------------------------------------

ParsePragmasParser::RunsPragContext::RunsPragContext(DefContext *ctx) { copyFrom(ctx); }

void ParsePragmasParser::RunsPragContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterRunsPrag(this);
}
void ParsePragmasParser::RunsPragContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitRunsPrag(this);
}
ParsePragmasParser::DefContext* ParsePragmasParser::def() {
  DefContext *_localctx = _tracker.createInstance<DefContext>(_ctx, getState());
  enterRule(_localctx, 6, ParsePragmasParser::RuleDef);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(43);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case ParsePragmasParser::T__0: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::NamePragContext>(_localctx));
        enterOuterAlt(_localctx, 1);
        setState(38);
        match(ParsePragmasParser::T__0);
        break;
      }

      case ParsePragmasParser::T__1: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::MemPragContext>(_localctx));
        enterOuterAlt(_localctx, 2);
        setState(39);
        match(ParsePragmasParser::T__1);
        break;
      }

      case ParsePragmasParser::T__2: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::PartitionPragContext>(_localctx));
        enterOuterAlt(_localctx, 3);
        setState(40);
        match(ParsePragmasParser::T__2);
        break;
      }

      case ParsePragmasParser::T__3: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::RunsPragContext>(_localctx));
        enterOuterAlt(_localctx, 4);
        setState(41);
        match(ParsePragmasParser::T__3);
        break;
      }

      case ParsePragmasParser::T__4: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::TimePragContext>(_localctx));
        enterOuterAlt(_localctx, 5);
        setState(42);
        match(ParsePragmasParser::T__4);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

// Static vars and initialization.
std::vector<dfa::DFA> ParsePragmasParser::_decisionToDFA;
atn::PredictionContextCache ParsePragmasParser::_sharedContextCache;

// We own the ATN which in turn owns the ATN states.
atn::ATN ParsePragmasParser::_atn;
std::vector<uint16_t> ParsePragmasParser::_serializedATN;

std::vector<std::string> ParsePragmasParser::_ruleNames = {
  "prog", "statement", "pragma", "def"
};

std::vector<std::string> ParsePragmasParser::_literalNames = {
  "", "'NAME'", "'MEM'", "'PARTITION'", "'RUNS'", "'TIME'", "'#pragma'", 
  "'// cprag'"
};

std::vector<std::string> ParsePragmasParser::_symbolicNames = {
  "", "", "", "", "", "", "OPENMPBEGIN", "PBEGIN", "CONDITION", "NEWLINE", 
  "WS", "END", "ErrorCharacter"
};

dfa::Vocabulary ParsePragmasParser::_vocabulary(_literalNames, _symbolicNames);

std::vector<std::string> ParsePragmasParser::_tokenNames;

ParsePragmasParser::Initializer::Initializer() {
	for (size_t i = 0; i < _symbolicNames.size(); ++i) {
		std::string name = _vocabulary.getLiteralName(i);
		if (name.empty()) {
			name = _vocabulary.getSymbolicName(i);
		}

		if (name.empty()) {
			_tokenNames.push_back("<INVALID>");
		} else {
      _tokenNames.push_back(name);
    }
	}

  _serializedATN = {
    0x3, 0x608b, 0xa72a, 0x8133, 0xb9ed, 0x417c, 0x3be7, 0x7786, 0x5964, 
    0x3, 0xe, 0x30, 0x4, 0x2, 0x9, 0x2, 0x4, 0x3, 0x9, 0x3, 0x4, 0x4, 0x9, 
    0x4, 0x4, 0x5, 0x9, 0x5, 0x3, 0x2, 0x6, 0x2, 0xc, 0xa, 0x2, 0xd, 0x2, 
    0xe, 0x2, 0xd, 0x3, 0x3, 0x3, 0x3, 0x7, 0x3, 0x12, 0xa, 0x3, 0xc, 0x3, 
    0xe, 0x3, 0x15, 0xb, 0x3, 0x3, 0x3, 0x5, 0x3, 0x18, 0xa, 0x3, 0x3, 0x4, 
    0x3, 0x4, 0x3, 0x4, 0x3, 0x4, 0x3, 0x4, 0x3, 0x4, 0x3, 0x4, 0x7, 0x4, 
    0x21, 0xa, 0x4, 0xc, 0x4, 0xe, 0x4, 0x24, 0xb, 0x4, 0x3, 0x4, 0x5, 0x4, 
    0x27, 0xa, 0x4, 0x3, 0x5, 0x3, 0x5, 0x3, 0x5, 0x3, 0x5, 0x3, 0x5, 0x5, 
    0x5, 0x2e, 0xa, 0x5, 0x3, 0x5, 0x2, 0x2, 0x6, 0x2, 0x4, 0x6, 0x8, 0x2, 
    0x2, 0x2, 0x34, 0x2, 0xb, 0x3, 0x2, 0x2, 0x2, 0x4, 0x17, 0x3, 0x2, 0x2, 
    0x2, 0x6, 0x26, 0x3, 0x2, 0x2, 0x2, 0x8, 0x2d, 0x3, 0x2, 0x2, 0x2, 0xa, 
    0xc, 0x5, 0x4, 0x3, 0x2, 0xb, 0xa, 0x3, 0x2, 0x2, 0x2, 0xc, 0xd, 0x3, 
    0x2, 0x2, 0x2, 0xd, 0xb, 0x3, 0x2, 0x2, 0x2, 0xd, 0xe, 0x3, 0x2, 0x2, 
    0x2, 0xe, 0x3, 0x3, 0x2, 0x2, 0x2, 0xf, 0x18, 0x5, 0x6, 0x4, 0x2, 0x10, 
    0x12, 0x7, 0xa, 0x2, 0x2, 0x11, 0x10, 0x3, 0x2, 0x2, 0x2, 0x12, 0x15, 
    0x3, 0x2, 0x2, 0x2, 0x13, 0x11, 0x3, 0x2, 0x2, 0x2, 0x13, 0x14, 0x3, 
    0x2, 0x2, 0x2, 0x14, 0x16, 0x3, 0x2, 0x2, 0x2, 0x15, 0x13, 0x3, 0x2, 
    0x2, 0x2, 0x16, 0x18, 0x7, 0xb, 0x2, 0x2, 0x17, 0xf, 0x3, 0x2, 0x2, 
    0x2, 0x17, 0x13, 0x3, 0x2, 0x2, 0x2, 0x18, 0x5, 0x3, 0x2, 0x2, 0x2, 
    0x19, 0x1a, 0x7, 0x9, 0x2, 0x2, 0x1a, 0x1b, 0x5, 0x8, 0x5, 0x2, 0x1b, 
    0x1c, 0x7, 0xa, 0x2, 0x2, 0x1c, 0x1d, 0x7, 0xb, 0x2, 0x2, 0x1d, 0x27, 
    0x3, 0x2, 0x2, 0x2, 0x1e, 0x22, 0x7, 0x8, 0x2, 0x2, 0x1f, 0x21, 0x7, 
    0xa, 0x2, 0x2, 0x20, 0x1f, 0x3, 0x2, 0x2, 0x2, 0x21, 0x24, 0x3, 0x2, 
    0x2, 0x2, 0x22, 0x20, 0x3, 0x2, 0x2, 0x2, 0x22, 0x23, 0x3, 0x2, 0x2, 
    0x2, 0x23, 0x25, 0x3, 0x2, 0x2, 0x2, 0x24, 0x22, 0x3, 0x2, 0x2, 0x2, 
    0x25, 0x27, 0x7, 0xb, 0x2, 0x2, 0x26, 0x19, 0x3, 0x2, 0x2, 0x2, 0x26, 
    0x1e, 0x3, 0x2, 0x2, 0x2, 0x27, 0x7, 0x3, 0x2, 0x2, 0x2, 0x28, 0x2e, 
    0x7, 0x3, 0x2, 0x2, 0x29, 0x2e, 0x7, 0x4, 0x2, 0x2, 0x2a, 0x2e, 0x7, 
    0x5, 0x2, 0x2, 0x2b, 0x2e, 0x7, 0x6, 0x2, 0x2, 0x2c, 0x2e, 0x7, 0x7, 
    0x2, 0x2, 0x2d, 0x28, 0x3, 0x2, 0x2, 0x2, 0x2d, 0x29, 0x3, 0x2, 0x2, 
    0x2, 0x2d, 0x2a, 0x3, 0x2, 0x2, 0x2, 0x2d, 0x2b, 0x3, 0x2, 0x2, 0x2, 
    0x2d, 0x2c, 0x3, 0x2, 0x2, 0x2, 0x2e, 0x9, 0x3, 0x2, 0x2, 0x2, 0x8, 
    0xd, 0x13, 0x17, 0x22, 0x26, 0x2d, 
  };

  atn::ATNDeserializer deserializer;
  _atn = deserializer.deserialize(_serializedATN);

  size_t count = _atn.getNumberOfDecisions();
  _decisionToDFA.reserve(count);
  for (size_t i = 0; i < count; i++) { 
    _decisionToDFA.emplace_back(_atn.getDecisionState(i), i);
  }
}

ParsePragmasParser::Initializer ParsePragmasParser::_init;
