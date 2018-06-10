// Generated from /Users/sam/Documents/buckaroo/parse_pragmas/ParsePragmas.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ParsePragmasLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, OPENMPBEGIN=7, PBEGIN=8, 
		CONDITION=9, NEWLINE=10, WS=11, END=12, ErrorCharacter=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "OPENMPBEGIN", "PBEGIN", 
		"CONDITION", "NEWLINE", "WS", "END", "ErrorCharacter"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'NAME'", "'MEM'", "'PARTITION'", "'RUNS'", "'TIME'", "'EMAIL'", 
		"'#pragma'", "'// cprag'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, "OPENMPBEGIN", "PBEGIN", "CONDITION", 
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


	public ParsePragmasLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ParsePragmas.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\17e\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3"+
		"\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\6\nS\n\n\r\n\16\nT\3\13\3\13\3\f\6\f"+
		"Z\n\f\r\f\16\f[\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\2\2\17\3\3\5\4\7\5\t"+
		"\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\3\2\5\t\2$%\'(*@B_a"+
		"ac}\177\177\4\2\f\f\17\17\4\2\13\13\"\"\2f\2\3\3\2\2\2\2\5\3\2\2\2\2\7"+
		"\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2"+
		"\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\3"+
		"\35\3\2\2\2\5\"\3\2\2\2\7&\3\2\2\2\t\60\3\2\2\2\13\65\3\2\2\2\r:\3\2\2"+
		"\2\17@\3\2\2\2\21H\3\2\2\2\23R\3\2\2\2\25V\3\2\2\2\27Y\3\2\2\2\31_\3\2"+
		"\2\2\33c\3\2\2\2\35\36\7P\2\2\36\37\7C\2\2\37 \7O\2\2 !\7G\2\2!\4\3\2"+
		"\2\2\"#\7O\2\2#$\7G\2\2$%\7O\2\2%\6\3\2\2\2&\'\7R\2\2\'(\7C\2\2()\7T\2"+
		"\2)*\7V\2\2*+\7K\2\2+,\7V\2\2,-\7K\2\2-.\7Q\2\2./\7P\2\2/\b\3\2\2\2\60"+
		"\61\7T\2\2\61\62\7W\2\2\62\63\7P\2\2\63\64\7U\2\2\64\n\3\2\2\2\65\66\7"+
		"V\2\2\66\67\7K\2\2\678\7O\2\289\7G\2\29\f\3\2\2\2:;\7G\2\2;<\7O\2\2<="+
		"\7C\2\2=>\7K\2\2>?\7N\2\2?\16\3\2\2\2@A\7%\2\2AB\7r\2\2BC\7t\2\2CD\7c"+
		"\2\2DE\7i\2\2EF\7o\2\2FG\7c\2\2G\20\3\2\2\2HI\7\61\2\2IJ\7\61\2\2JK\7"+
		"\"\2\2KL\7e\2\2LM\7r\2\2MN\7t\2\2NO\7c\2\2OP\7i\2\2P\22\3\2\2\2QS\t\2"+
		"\2\2RQ\3\2\2\2ST\3\2\2\2TR\3\2\2\2TU\3\2\2\2U\24\3\2\2\2VW\t\3\2\2W\26"+
		"\3\2\2\2XZ\t\4\2\2YX\3\2\2\2Z[\3\2\2\2[Y\3\2\2\2[\\\3\2\2\2\\]\3\2\2\2"+
		"]^\b\f\2\2^\30\3\2\2\2_`\7\2\2\3`a\3\2\2\2ab\b\r\2\2b\32\3\2\2\2cd\13"+
		"\2\2\2d\34\3\2\2\2\5\2T[\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}