
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
    setState(5); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(4);
      pragma();
      setState(7); 
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

tree::TerminalNode* ParsePragmasParser::PragmaContext::CONDITION() {
  return getToken(ParsePragmasParser::CONDITION, 0);
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
    setState(9);
    match(ParsePragmasParser::PBEGIN);
    setState(10);
    match(ParsePragmasParser::CONDITION);
   
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
  "prog", "pragma"
};

std::vector<std::string> ParsePragmasParser::_literalNames = {
  "", "'##'"
};

std::vector<std::string> ParsePragmasParser::_symbolicNames = {
  "", "PBEGIN", "CONDITION", "WS"
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
    0x3, 0x5, 0xf, 0x4, 0x2, 0x9, 0x2, 0x4, 0x3, 0x9, 0x3, 0x3, 0x2, 0x6, 
    0x2, 0x8, 0xa, 0x2, 0xd, 0x2, 0xe, 0x2, 0x9, 0x3, 0x3, 0x3, 0x3, 0x3, 
    0x3, 0x3, 0x3, 0x2, 0x2, 0x4, 0x2, 0x4, 0x2, 0x2, 0x2, 0xd, 0x2, 0x7, 
    0x3, 0x2, 0x2, 0x2, 0x4, 0xb, 0x3, 0x2, 0x2, 0x2, 0x6, 0x8, 0x5, 0x4, 
    0x3, 0x2, 0x7, 0x6, 0x3, 0x2, 0x2, 0x2, 0x8, 0x9, 0x3, 0x2, 0x2, 0x2, 
    0x9, 0x7, 0x3, 0x2, 0x2, 0x2, 0x9, 0xa, 0x3, 0x2, 0x2, 0x2, 0xa, 0x3, 
    0x3, 0x2, 0x2, 0x2, 0xb, 0xc, 0x7, 0x3, 0x2, 0x2, 0xc, 0xd, 0x7, 0x4, 
    0x2, 0x2, 0xd, 0x5, 0x3, 0x2, 0x2, 0x2, 0x3, 0x9, 
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
