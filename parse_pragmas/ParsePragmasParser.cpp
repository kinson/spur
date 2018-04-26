
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

std::vector<ParsePragmasParser::PragmaContext *> ParsePragmasParser::ProgContext::pragma() {
  return getRuleContexts<ParsePragmasParser::PragmaContext>();
}

ParsePragmasParser::PragmaContext* ParsePragmasParser::ProgContext::pragma(size_t i) {
  return getRuleContext<ParsePragmasParser::PragmaContext>(i);
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
    setState(7); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(6);
      pragma();
      setState(9); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while (_la == ParsePragmasParser::PBEGIN);
   
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

tree::TerminalNode* ParsePragmasParser::PragmaContext::PBEGIN() {
  return getToken(ParsePragmasParser::PBEGIN, 0);
}

ParsePragmasParser::DefContext* ParsePragmasParser::PragmaContext::def() {
  return getRuleContext<ParsePragmasParser::DefContext>(0);
}

tree::TerminalNode* ParsePragmasParser::PragmaContext::CONDITION() {
  return getToken(ParsePragmasParser::CONDITION, 0);
}

tree::TerminalNode* ParsePragmasParser::PragmaContext::NEWLINE() {
  return getToken(ParsePragmasParser::NEWLINE, 0);
}


size_t ParsePragmasParser::PragmaContext::getRuleIndex() const {
  return ParsePragmasParser::RulePragma;
}

void ParsePragmasParser::PragmaContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterPragma(this);
}

void ParsePragmasParser::PragmaContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<ParsePragmasListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitPragma(this);
}

ParsePragmasParser::PragmaContext* ParsePragmasParser::pragma() {
  PragmaContext *_localctx = _tracker.createInstance<PragmaContext>(_ctx, getState());
  enterRule(_localctx, 2, ParsePragmasParser::RulePragma);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(11);
    match(ParsePragmasParser::PBEGIN);
    setState(12);
    def();
    setState(13);
    match(ParsePragmasParser::CONDITION);
    setState(14);
    match(ParsePragmasParser::NEWLINE);
   
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
  enterRule(_localctx, 4, ParsePragmasParser::RuleDef);

  auto onExit = finally([=] {
    exitRule();
  });
  try {
    setState(20);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case ParsePragmasParser::T__0: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::NamePragContext>(_localctx));
        enterOuterAlt(_localctx, 1);
        setState(16);
        match(ParsePragmasParser::T__0);
        break;
      }

      case ParsePragmasParser::T__1: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::MemPragContext>(_localctx));
        enterOuterAlt(_localctx, 2);
        setState(17);
        match(ParsePragmasParser::T__1);
        break;
      }

      case ParsePragmasParser::T__2: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::PartitionPragContext>(_localctx));
        enterOuterAlt(_localctx, 3);
        setState(18);
        match(ParsePragmasParser::T__2);
        break;
      }

      case ParsePragmasParser::T__3: {
        _localctx = dynamic_cast<DefContext *>(_tracker.createInstance<ParsePragmasParser::RunsPragContext>(_localctx));
        enterOuterAlt(_localctx, 4);
        setState(19);
        match(ParsePragmasParser::T__3);
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
  "prog", "pragma", "def"
};

std::vector<std::string> ParsePragmasParser::_literalNames = {
  "", "'NAME'", "'MEM'", "'PARTITION'", "'RUNS'", "'##'", "'%%'"
};

std::vector<std::string> ParsePragmasParser::_symbolicNames = {
  "", "", "", "", "", "PBEGIN", "PEND", "CONDITION", "NEWLINE", "WS"
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
    0x3, 0xb, 0x19, 0x4, 0x2, 0x9, 0x2, 0x4, 0x3, 0x9, 0x3, 0x4, 0x4, 0x9, 
    0x4, 0x3, 0x2, 0x6, 0x2, 0xa, 0xa, 0x2, 0xd, 0x2, 0xe, 0x2, 0xb, 0x3, 
    0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x3, 0x4, 0x3, 0x4, 0x3, 
    0x4, 0x3, 0x4, 0x5, 0x4, 0x17, 0xa, 0x4, 0x3, 0x4, 0x2, 0x2, 0x5, 0x2, 
    0x4, 0x6, 0x2, 0x2, 0x2, 0x19, 0x2, 0x9, 0x3, 0x2, 0x2, 0x2, 0x4, 0xd, 
    0x3, 0x2, 0x2, 0x2, 0x6, 0x16, 0x3, 0x2, 0x2, 0x2, 0x8, 0xa, 0x5, 0x4, 
    0x3, 0x2, 0x9, 0x8, 0x3, 0x2, 0x2, 0x2, 0xa, 0xb, 0x3, 0x2, 0x2, 0x2, 
    0xb, 0x9, 0x3, 0x2, 0x2, 0x2, 0xb, 0xc, 0x3, 0x2, 0x2, 0x2, 0xc, 0x3, 
    0x3, 0x2, 0x2, 0x2, 0xd, 0xe, 0x7, 0x7, 0x2, 0x2, 0xe, 0xf, 0x5, 0x6, 
    0x4, 0x2, 0xf, 0x10, 0x7, 0x9, 0x2, 0x2, 0x10, 0x11, 0x7, 0xa, 0x2, 
    0x2, 0x11, 0x5, 0x3, 0x2, 0x2, 0x2, 0x12, 0x17, 0x7, 0x3, 0x2, 0x2, 
    0x13, 0x17, 0x7, 0x4, 0x2, 0x2, 0x14, 0x17, 0x7, 0x5, 0x2, 0x2, 0x15, 
    0x17, 0x7, 0x6, 0x2, 0x2, 0x16, 0x12, 0x3, 0x2, 0x2, 0x2, 0x16, 0x13, 
    0x3, 0x2, 0x2, 0x2, 0x16, 0x14, 0x3, 0x2, 0x2, 0x2, 0x16, 0x15, 0x3, 
    0x2, 0x2, 0x2, 0x17, 0x7, 0x3, 0x2, 0x2, 0x2, 0x4, 0xb, 0x16, 
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
