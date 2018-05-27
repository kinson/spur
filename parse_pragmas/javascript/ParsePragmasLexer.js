// Generated from ParsePragmas.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u000e]\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0006\tK\n\t\r\t\u000e\t",
    "L\u0003\n\u0003\n\u0003\u000b\u0006\u000bR\n\u000b\r\u000b\u000e\u000b",
    "S\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0002\u0002\u000e\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u0003",
    "\u0002\u0005\t\u0002$%\'(*@C_aac}\u007f\u007f\u0004\u0002\f\f\u000f",
    "\u000f\u0004\u0002\u000b\u000b\"\"\u0002^\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002",
    "\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002",
    "\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002",
    "\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002",
    "\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002",
    "\u0002\u0005 \u0003\u0002\u0002\u0002\u0007$\u0003\u0002\u0002\u0002",
    "\t.\u0003\u0002\u0002\u0002\u000b3\u0003\u0002\u0002\u0002\r8\u0003",
    "\u0002\u0002\u0002\u000f@\u0003\u0002\u0002\u0002\u0011J\u0003\u0002",
    "\u0002\u0002\u0013N\u0003\u0002\u0002\u0002\u0015Q\u0003\u0002\u0002",
    "\u0002\u0017W\u0003\u0002\u0002\u0002\u0019[\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0007P\u0002\u0002\u001c\u001d\u0007C\u0002\u0002\u001d",
    "\u001e\u0007O\u0002\u0002\u001e\u001f\u0007G\u0002\u0002\u001f\u0004",
    "\u0003\u0002\u0002\u0002 !\u0007O\u0002\u0002!\"\u0007G\u0002\u0002",
    "\"#\u0007O\u0002\u0002#\u0006\u0003\u0002\u0002\u0002$%\u0007R\u0002",
    "\u0002%&\u0007C\u0002\u0002&\'\u0007T\u0002\u0002\'(\u0007V\u0002\u0002",
    "()\u0007K\u0002\u0002)*\u0007V\u0002\u0002*+\u0007K\u0002\u0002+,\u0007",
    "Q\u0002\u0002,-\u0007P\u0002\u0002-\b\u0003\u0002\u0002\u0002./\u0007",
    "T\u0002\u0002/0\u0007W\u0002\u000201\u0007P\u0002\u000212\u0007U\u0002",
    "\u00022\n\u0003\u0002\u0002\u000234\u0007V\u0002\u000245\u0007K\u0002",
    "\u000256\u0007O\u0002\u000267\u0007G\u0002\u00027\f\u0003\u0002\u0002",
    "\u000289\u0007%\u0002\u00029:\u0007r\u0002\u0002:;\u0007t\u0002\u0002",
    ";<\u0007c\u0002\u0002<=\u0007i\u0002\u0002=>\u0007o\u0002\u0002>?\u0007",
    "c\u0002\u0002?\u000e\u0003\u0002\u0002\u0002@A\u00071\u0002\u0002AB",
    "\u00071\u0002\u0002BC\u0007\"\u0002\u0002CD\u0007e\u0002\u0002DE\u0007",
    "r\u0002\u0002EF\u0007t\u0002\u0002FG\u0007c\u0002\u0002GH\u0007i\u0002",
    "\u0002H\u0010\u0003\u0002\u0002\u0002IK\t\u0002\u0002\u0002JI\u0003",
    "\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002",
    "LM\u0003\u0002\u0002\u0002M\u0012\u0003\u0002\u0002\u0002NO\t\u0003",
    "\u0002\u0002O\u0014\u0003\u0002\u0002\u0002PR\t\u0004\u0002\u0002QP",
    "\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002",
    "\u0002ST\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002UV\b\u000b",
    "\u0002\u0002V\u0016\u0003\u0002\u0002\u0002WX\u0007\u0002\u0002\u0003",
    "XY\u0003\u0002\u0002\u0002YZ\b\f\u0002\u0002Z\u0018\u0003\u0002\u0002",
    "\u0002[\\\u000b\u0002\u0002\u0002\\\u001a\u0003\u0002\u0002\u0002\u0005",
    "\u0002LS\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ParsePragmasLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ParsePragmasLexer.prototype = Object.create(antlr4.Lexer.prototype);
ParsePragmasLexer.prototype.constructor = ParsePragmasLexer;

Object.defineProperty(ParsePragmasLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ParsePragmasLexer.EOF = antlr4.Token.EOF;
ParsePragmasLexer.T__0 = 1;
ParsePragmasLexer.T__1 = 2;
ParsePragmasLexer.T__2 = 3;
ParsePragmasLexer.T__3 = 4;
ParsePragmasLexer.T__4 = 5;
ParsePragmasLexer.OPENMPBEGIN = 6;
ParsePragmasLexer.PBEGIN = 7;
ParsePragmasLexer.CONDITION = 8;
ParsePragmasLexer.NEWLINE = 9;
ParsePragmasLexer.WS = 10;
ParsePragmasLexer.END = 11;
ParsePragmasLexer.ErrorCharacter = 12;

ParsePragmasLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ParsePragmasLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ParsePragmasLexer.prototype.literalNames = [ null, "'NAME'", "'MEM'", "'PARTITION'", 
                                             "'RUNS'", "'TIME'", "'#pragma'", 
                                             "'// cprag'" ];

ParsePragmasLexer.prototype.symbolicNames = [ null, null, null, null, null, 
                                              null, "OPENMPBEGIN", "PBEGIN", 
                                              "CONDITION", "NEWLINE", "WS", 
                                              "END", "ErrorCharacter" ];

ParsePragmasLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", 
                                          "T__4", "OPENMPBEGIN", "PBEGIN", 
                                          "CONDITION", "NEWLINE", "WS", 
                                          "END", "ErrorCharacter" ];

ParsePragmasLexer.prototype.grammarFileName = "ParsePragmas.g4";



exports.ParsePragmasLexer = ParsePragmasLexer;

