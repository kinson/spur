// Generated from ParsePragmas.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ParsePragmasListener = require('./ParsePragmasListener').ParsePragmasListener;
var grammarFileName = "ParsePragmas.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000f1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002",
    "\u000e\u0002\r\u0003\u0003\u0003\u0003\u0007\u0003\u0012\n\u0003\f\u0003",
    "\u000e\u0003\u0015\u000b\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004!\n\u0004\f\u0004\u000e\u0004$\u000b\u0004\u0003",
    "\u0004\u0005\u0004\'\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005/\n\u0005\u0003\u0005\u0002",
    "\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002\u00026\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006&\u0003",
    "\u0002\u0002\u0002\b.\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003",
    "\u0002\u000b\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r",
    "\u000b\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002\u000e",
    "\u0003\u0003\u0002\u0002\u0002\u000f\u0018\u0005\u0006\u0004\u0002\u0010",
    "\u0012\u0007\u000b\u0002\u0002\u0011\u0010\u0003\u0002\u0002\u0002\u0012",
    "\u0015\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0003\u0002\u0002\u0002\u0014\u0016\u0003\u0002\u0002\u0002\u0015",
    "\u0013\u0003\u0002\u0002\u0002\u0016\u0018\u0007\f\u0002\u0002\u0017",
    "\u000f\u0003\u0002\u0002\u0002\u0017\u0013\u0003\u0002\u0002\u0002\u0018",
    "\u0005\u0003\u0002\u0002\u0002\u0019\u001a\u0007\n\u0002\u0002\u001a",
    "\u001b\u0005\b\u0005\u0002\u001b\u001c\u0007\u000b\u0002\u0002\u001c",
    "\u001d\u0007\f\u0002\u0002\u001d\'\u0003\u0002\u0002\u0002\u001e\"\u0007",
    "\t\u0002\u0002\u001f!\u0007\u000b\u0002\u0002 \u001f\u0003\u0002\u0002",
    "\u0002!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003",
    "\u0002\u0002\u0002#%\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002",
    "%\'\u0007\f\u0002\u0002&\u0019\u0003\u0002\u0002\u0002&\u001e\u0003",
    "\u0002\u0002\u0002\'\u0007\u0003\u0002\u0002\u0002(/\u0007\u0003\u0002",
    "\u0002)/\u0007\u0004\u0002\u0002*/\u0007\u0005\u0002\u0002+/\u0007\u0006",
    "\u0002\u0002,/\u0007\u0007\u0002\u0002-/\u0007\b\u0002\u0002.(\u0003",
    "\u0002\u0002\u0002.)\u0003\u0002\u0002\u0002.*\u0003\u0002\u0002\u0002",
    ".+\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002.-\u0003\u0002\u0002",
    "\u0002/\t\u0003\u0002\u0002\u0002\b\r\u0013\u0017\"&."].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'NAME'", "'MEM'", "'PARTITION'", "'RUNS'", "'TIME'", 
                     "'EMAIL'", "'#pragma'", "'// cprag'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "OPENMPBEGIN", 
                      "PBEGIN", "CONDITION", "NEWLINE", "WS", "END", "ErrorCharacter" ];

var ruleNames =  [ "prog", "statement", "pragma", "def" ];

function ParsePragmasParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ParsePragmasParser.prototype = Object.create(antlr4.Parser.prototype);
ParsePragmasParser.prototype.constructor = ParsePragmasParser;

Object.defineProperty(ParsePragmasParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ParsePragmasParser.EOF = antlr4.Token.EOF;
ParsePragmasParser.T__0 = 1;
ParsePragmasParser.T__1 = 2;
ParsePragmasParser.T__2 = 3;
ParsePragmasParser.T__3 = 4;
ParsePragmasParser.T__4 = 5;
ParsePragmasParser.T__5 = 6;
ParsePragmasParser.OPENMPBEGIN = 7;
ParsePragmasParser.PBEGIN = 8;
ParsePragmasParser.CONDITION = 9;
ParsePragmasParser.NEWLINE = 10;
ParsePragmasParser.WS = 11;
ParsePragmasParser.END = 12;
ParsePragmasParser.ErrorCharacter = 13;

ParsePragmasParser.RULE_prog = 0;
ParsePragmasParser.RULE_statement = 1;
ParsePragmasParser.RULE_pragma = 2;
ParsePragmasParser.RULE_def = 3;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParsePragmasParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitProg(this);
	}
};




ParsePragmasParser.ProgContext = ProgContext;

ParsePragmasParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ParsePragmasParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.statement();
            this.state = 11; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ParsePragmasParser.OPENMPBEGIN) | (1 << ParsePragmasParser.PBEGIN) | (1 << ParsePragmasParser.CONDITION) | (1 << ParsePragmasParser.NEWLINE))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParsePragmasParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.pragma = function() {
    return this.getTypedRuleContext(PragmaContext,0);
};

StatementContext.prototype.NEWLINE = function() {
    return this.getToken(ParsePragmasParser.NEWLINE, 0);
};

StatementContext.prototype.CONDITION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParsePragmasParser.CONDITION);
    } else {
        return this.getToken(ParsePragmasParser.CONDITION, i);
    }
};


StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitStatement(this);
	}
};




ParsePragmasParser.StatementContext = StatementContext;

ParsePragmasParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ParsePragmasParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParsePragmasParser.OPENMPBEGIN:
        case ParsePragmasParser.PBEGIN:
            this.state = 13;
            this.pragma();
            break;
        case ParsePragmasParser.CONDITION:
        case ParsePragmasParser.NEWLINE:
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ParsePragmasParser.CONDITION) {
                this.state = 14;
                this.match(ParsePragmasParser.CONDITION);
                this.state = 19;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 20;
            this.match(ParsePragmasParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PragmaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParsePragmasParser.RULE_pragma;
    return this;
}

PragmaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PragmaContext.prototype.constructor = PragmaContext;


 
PragmaContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function OpenMPPragContext(parser, ctx) {
	PragmaContext.call(this, parser);
    PragmaContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OpenMPPragContext.prototype = Object.create(PragmaContext.prototype);
OpenMPPragContext.prototype.constructor = OpenMPPragContext;

ParsePragmasParser.OpenMPPragContext = OpenMPPragContext;

OpenMPPragContext.prototype.OPENMPBEGIN = function() {
    return this.getToken(ParsePragmasParser.OPENMPBEGIN, 0);
};

OpenMPPragContext.prototype.NEWLINE = function() {
    return this.getToken(ParsePragmasParser.NEWLINE, 0);
};

OpenMPPragContext.prototype.CONDITION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ParsePragmasParser.CONDITION);
    } else {
        return this.getToken(ParsePragmasParser.CONDITION, i);
    }
};

OpenMPPragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterOpenMPPrag(this);
	}
};

OpenMPPragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitOpenMPPrag(this);
	}
};


function CustomPragContext(parser, ctx) {
	PragmaContext.call(this, parser);
    PragmaContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CustomPragContext.prototype = Object.create(PragmaContext.prototype);
CustomPragContext.prototype.constructor = CustomPragContext;

ParsePragmasParser.CustomPragContext = CustomPragContext;

CustomPragContext.prototype.PBEGIN = function() {
    return this.getToken(ParsePragmasParser.PBEGIN, 0);
};

CustomPragContext.prototype.def = function() {
    return this.getTypedRuleContext(DefContext,0);
};

CustomPragContext.prototype.CONDITION = function() {
    return this.getToken(ParsePragmasParser.CONDITION, 0);
};

CustomPragContext.prototype.NEWLINE = function() {
    return this.getToken(ParsePragmasParser.NEWLINE, 0);
};
CustomPragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterCustomPrag(this);
	}
};

CustomPragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitCustomPrag(this);
	}
};



ParsePragmasParser.PragmaContext = PragmaContext;

ParsePragmasParser.prototype.pragma = function() {

    var localctx = new PragmaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ParsePragmasParser.RULE_pragma);
    var _la = 0; // Token type
    try {
        this.state = 36;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParsePragmasParser.PBEGIN:
            localctx = new CustomPragContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 23;
            this.match(ParsePragmasParser.PBEGIN);
            this.state = 24;
            this.def();
            this.state = 25;
            this.match(ParsePragmasParser.CONDITION);
            this.state = 26;
            this.match(ParsePragmasParser.NEWLINE);
            break;
        case ParsePragmasParser.OPENMPBEGIN:
            localctx = new OpenMPPragContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
            this.match(ParsePragmasParser.OPENMPBEGIN);
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ParsePragmasParser.CONDITION) {
                this.state = 29;
                this.match(ParsePragmasParser.CONDITION);
                this.state = 34;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 35;
            this.match(ParsePragmasParser.NEWLINE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ParsePragmasParser.RULE_def;
    return this;
}

DefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefContext.prototype.constructor = DefContext;


 
DefContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NamePragContext(parser, ctx) {
	DefContext.call(this, parser);
    DefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NamePragContext.prototype = Object.create(DefContext.prototype);
NamePragContext.prototype.constructor = NamePragContext;

ParsePragmasParser.NamePragContext = NamePragContext;

NamePragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterNamePrag(this);
	}
};

NamePragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitNamePrag(this);
	}
};


function PartitionPragContext(parser, ctx) {
	DefContext.call(this, parser);
    DefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PartitionPragContext.prototype = Object.create(DefContext.prototype);
PartitionPragContext.prototype.constructor = PartitionPragContext;

ParsePragmasParser.PartitionPragContext = PartitionPragContext;

PartitionPragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterPartitionPrag(this);
	}
};

PartitionPragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitPartitionPrag(this);
	}
};


function EmailPragContext(parser, ctx) {
	DefContext.call(this, parser);
    DefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmailPragContext.prototype = Object.create(DefContext.prototype);
EmailPragContext.prototype.constructor = EmailPragContext;

ParsePragmasParser.EmailPragContext = EmailPragContext;

EmailPragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterEmailPrag(this);
	}
};

EmailPragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitEmailPrag(this);
	}
};


function TimePragContext(parser, ctx) {
	DefContext.call(this, parser);
    DefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TimePragContext.prototype = Object.create(DefContext.prototype);
TimePragContext.prototype.constructor = TimePragContext;

ParsePragmasParser.TimePragContext = TimePragContext;

TimePragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterTimePrag(this);
	}
};

TimePragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitTimePrag(this);
	}
};


function MemPragContext(parser, ctx) {
	DefContext.call(this, parser);
    DefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemPragContext.prototype = Object.create(DefContext.prototype);
MemPragContext.prototype.constructor = MemPragContext;

ParsePragmasParser.MemPragContext = MemPragContext;

MemPragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterMemPrag(this);
	}
};

MemPragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitMemPrag(this);
	}
};


function RunsPragContext(parser, ctx) {
	DefContext.call(this, parser);
    DefContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RunsPragContext.prototype = Object.create(DefContext.prototype);
RunsPragContext.prototype.constructor = RunsPragContext;

ParsePragmasParser.RunsPragContext = RunsPragContext;

RunsPragContext.prototype.enterRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.enterRunsPrag(this);
	}
};

RunsPragContext.prototype.exitRule = function(listener) {
    if(listener instanceof ParsePragmasListener ) {
        listener.exitRunsPrag(this);
	}
};



ParsePragmasParser.DefContext = DefContext;

ParsePragmasParser.prototype.def = function() {

    var localctx = new DefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ParsePragmasParser.RULE_def);
    try {
        this.state = 44;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ParsePragmasParser.T__0:
            localctx = new NamePragContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.match(ParsePragmasParser.T__0);
            break;
        case ParsePragmasParser.T__1:
            localctx = new MemPragContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 39;
            this.match(ParsePragmasParser.T__1);
            break;
        case ParsePragmasParser.T__2:
            localctx = new PartitionPragContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            this.match(ParsePragmasParser.T__2);
            break;
        case ParsePragmasParser.T__3:
            localctx = new RunsPragContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 41;
            this.match(ParsePragmasParser.T__3);
            break;
        case ParsePragmasParser.T__4:
            localctx = new TimePragContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 42;
            this.match(ParsePragmasParser.T__4);
            break;
        case ParsePragmasParser.T__5:
            localctx = new EmailPragContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 43;
            this.match(ParsePragmasParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ParsePragmasParser = ParsePragmasParser;
