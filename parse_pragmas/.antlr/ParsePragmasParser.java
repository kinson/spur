// Generated from /Users/sam/Documents/buckaroo/parse_pragmas/ParsePragmas.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ParsePragmasParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, OPENMPBEGIN=6, PBEGIN=7, CONDITION=8, 
		NEWLINE=9, WS=10, END=11, ErrorCharacter=12;
	public static final int
		RULE_prog = 0, RULE_statement = 1, RULE_pragma = 2, RULE_def = 3;
	public static final String[] ruleNames = {
		"prog", "statement", "pragma", "def"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'NAME'", "'MEM'", "'PARTITION'", "'RUNS'", "'TIME'", "'#pragma'", 
		"'// cprag'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, "OPENMPBEGIN", "PBEGIN", "CONDITION", 
		"NEWLINE", "WS", "END", "ErrorCharacter"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ParsePragmas.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ParsePragmasParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(9); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(8);
				statement();
				}
				}
				setState(11); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << OPENMPBEGIN) | (1L << PBEGIN) | (1L << CONDITION) | (1L << NEWLINE))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public PragmaContext pragma() {
			return getRuleContext(PragmaContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(ParsePragmasParser.NEWLINE, 0); }
		public List<TerminalNode> CONDITION() { return getTokens(ParsePragmasParser.CONDITION); }
		public TerminalNode CONDITION(int i) {
			return getToken(ParsePragmasParser.CONDITION, i);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPENMPBEGIN:
			case PBEGIN:
				{
				setState(13);
				pragma();
				}
				break;
			case CONDITION:
			case NEWLINE:
				{
				setState(17);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==CONDITION) {
					{
					{
					setState(14);
					match(CONDITION);
					}
					}
					setState(19);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(20);
				match(NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PragmaContext extends ParserRuleContext {
		public PragmaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pragma; }
	 
		public PragmaContext() { }
		public void copyFrom(PragmaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class OpenMPPragContext extends PragmaContext {
		public TerminalNode OPENMPBEGIN() { return getToken(ParsePragmasParser.OPENMPBEGIN, 0); }
		public TerminalNode NEWLINE() { return getToken(ParsePragmasParser.NEWLINE, 0); }
		public List<TerminalNode> CONDITION() { return getTokens(ParsePragmasParser.CONDITION); }
		public TerminalNode CONDITION(int i) {
			return getToken(ParsePragmasParser.CONDITION, i);
		}
		public OpenMPPragContext(PragmaContext ctx) { copyFrom(ctx); }
	}
	public static class CustomPragContext extends PragmaContext {
		public TerminalNode PBEGIN() { return getToken(ParsePragmasParser.PBEGIN, 0); }
		public DefContext def() {
			return getRuleContext(DefContext.class,0);
		}
		public TerminalNode CONDITION() { return getToken(ParsePragmasParser.CONDITION, 0); }
		public TerminalNode NEWLINE() { return getToken(ParsePragmasParser.NEWLINE, 0); }
		public CustomPragContext(PragmaContext ctx) { copyFrom(ctx); }
	}

	public final PragmaContext pragma() throws RecognitionException {
		PragmaContext _localctx = new PragmaContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_pragma);
		int _la;
		try {
			setState(36);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PBEGIN:
				_localctx = new CustomPragContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(23);
				match(PBEGIN);
				setState(24);
				def();
				setState(25);
				match(CONDITION);
				setState(26);
				match(NEWLINE);
				}
				break;
			case OPENMPBEGIN:
				_localctx = new OpenMPPragContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(28);
				match(OPENMPBEGIN);
				setState(32);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==CONDITION) {
					{
					{
					setState(29);
					match(CONDITION);
					}
					}
					setState(34);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(35);
				match(NEWLINE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefContext extends ParserRuleContext {
		public DefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_def; }
	 
		public DefContext() { }
		public void copyFrom(DefContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NamePragContext extends DefContext {
		public NamePragContext(DefContext ctx) { copyFrom(ctx); }
	}
	public static class PartitionPragContext extends DefContext {
		public PartitionPragContext(DefContext ctx) { copyFrom(ctx); }
	}
	public static class TimePragContext extends DefContext {
		public TimePragContext(DefContext ctx) { copyFrom(ctx); }
	}
	public static class MemPragContext extends DefContext {
		public MemPragContext(DefContext ctx) { copyFrom(ctx); }
	}
	public static class RunsPragContext extends DefContext {
		public RunsPragContext(DefContext ctx) { copyFrom(ctx); }
	}

	public final DefContext def() throws RecognitionException {
		DefContext _localctx = new DefContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_def);
		try {
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				_localctx = new NamePragContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				match(T__0);
				}
				break;
			case T__1:
				_localctx = new MemPragContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(39);
				match(T__1);
				}
				break;
			case T__2:
				_localctx = new PartitionPragContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(40);
				match(T__2);
				}
				break;
			case T__3:
				_localctx = new RunsPragContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(41);
				match(T__3);
				}
				break;
			case T__4:
				_localctx = new TimePragContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(42);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\16\60\4\2\t\2\4\3"+
		"\t\3\4\4\t\4\4\5\t\5\3\2\6\2\f\n\2\r\2\16\2\r\3\3\3\3\7\3\22\n\3\f\3\16"+
		"\3\25\13\3\3\3\5\3\30\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\7\4!\n\4\f\4\16"+
		"\4$\13\4\3\4\5\4\'\n\4\3\5\3\5\3\5\3\5\3\5\5\5.\n\5\3\5\2\2\6\2\4\6\b"+
		"\2\2\2\64\2\13\3\2\2\2\4\27\3\2\2\2\6&\3\2\2\2\b-\3\2\2\2\n\f\5\4\3\2"+
		"\13\n\3\2\2\2\f\r\3\2\2\2\r\13\3\2\2\2\r\16\3\2\2\2\16\3\3\2\2\2\17\30"+
		"\5\6\4\2\20\22\7\n\2\2\21\20\3\2\2\2\22\25\3\2\2\2\23\21\3\2\2\2\23\24"+
		"\3\2\2\2\24\26\3\2\2\2\25\23\3\2\2\2\26\30\7\13\2\2\27\17\3\2\2\2\27\23"+
		"\3\2\2\2\30\5\3\2\2\2\31\32\7\t\2\2\32\33\5\b\5\2\33\34\7\n\2\2\34\35"+
		"\7\13\2\2\35\'\3\2\2\2\36\"\7\b\2\2\37!\7\n\2\2 \37\3\2\2\2!$\3\2\2\2"+
		"\" \3\2\2\2\"#\3\2\2\2#%\3\2\2\2$\"\3\2\2\2%\'\7\13\2\2&\31\3\2\2\2&\36"+
		"\3\2\2\2\'\7\3\2\2\2(.\7\3\2\2).\7\4\2\2*.\7\5\2\2+.\7\6\2\2,.\7\7\2\2"+
		"-(\3\2\2\2-)\3\2\2\2-*\3\2\2\2-+\3\2\2\2-,\3\2\2\2.\t\3\2\2\2\b\r\23\27"+
		"\"&-";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}