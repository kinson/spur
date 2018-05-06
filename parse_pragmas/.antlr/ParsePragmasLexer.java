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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, OPENMPBEGIN=6, PBEGIN=7, CONDITION=8, 
		NEWLINE=9, WS=10, END=11, ErrorCharacter=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "OPENMPBEGIN", "PBEGIN", "CONDITION", 
		"NEWLINE", "WS", "END", "ErrorCharacter"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\16]\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\6"+
		"\tK\n\t\r\t\16\tL\3\n\3\n\3\13\6\13R\n\13\r\13\16\13S\3\13\3\13\3\f\3"+
		"\f\3\f\3\f\3\r\3\r\2\2\16\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\r\31\16\3\2\5\t\2$%\'(*@C_aac}\177\177\4\2\f\f\17\17\4\2\13\13\""+
		"\"\2^\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r"+
		"\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2"+
		"\2\2\2\31\3\2\2\2\3\33\3\2\2\2\5 \3\2\2\2\7$\3\2\2\2\t.\3\2\2\2\13\63"+
		"\3\2\2\2\r8\3\2\2\2\17@\3\2\2\2\21J\3\2\2\2\23N\3\2\2\2\25Q\3\2\2\2\27"+
		"W\3\2\2\2\31[\3\2\2\2\33\34\7P\2\2\34\35\7C\2\2\35\36\7O\2\2\36\37\7G"+
		"\2\2\37\4\3\2\2\2 !\7O\2\2!\"\7G\2\2\"#\7O\2\2#\6\3\2\2\2$%\7R\2\2%&\7"+
		"C\2\2&\'\7T\2\2\'(\7V\2\2()\7K\2\2)*\7V\2\2*+\7K\2\2+,\7Q\2\2,-\7P\2\2"+
		"-\b\3\2\2\2./\7T\2\2/\60\7W\2\2\60\61\7P\2\2\61\62\7U\2\2\62\n\3\2\2\2"+
		"\63\64\7V\2\2\64\65\7K\2\2\65\66\7O\2\2\66\67\7G\2\2\67\f\3\2\2\289\7"+
		"%\2\29:\7r\2\2:;\7t\2\2;<\7c\2\2<=\7i\2\2=>\7o\2\2>?\7c\2\2?\16\3\2\2"+
		"\2@A\7\61\2\2AB\7\61\2\2BC\7\"\2\2CD\7e\2\2DE\7r\2\2EF\7t\2\2FG\7c\2\2"+
		"GH\7i\2\2H\20\3\2\2\2IK\t\2\2\2JI\3\2\2\2KL\3\2\2\2LJ\3\2\2\2LM\3\2\2"+
		"\2M\22\3\2\2\2NO\t\3\2\2O\24\3\2\2\2PR\t\4\2\2QP\3\2\2\2RS\3\2\2\2SQ\3"+
		"\2\2\2ST\3\2\2\2TU\3\2\2\2UV\b\13\2\2V\26\3\2\2\2WX\7\2\2\3XY\3\2\2\2"+
		"YZ\b\f\2\2Z\30\3\2\2\2[\\\13\2\2\2\\\32\3\2\2\2\5\2LS\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}