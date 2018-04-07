import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.FileInputStream;
import java.io.InputStream;
public class Calc {
	public static void main(String[] args) throws Exception {
		String inputFile = null;
		if ( args.length>0 ) inputFile = args[0];
		InputStream is = System.in;
		if ( inputFile!=null ) is = new FileInputStream(inputFile);
		CharStream input = CharStreams.fromFileName(inputFile);
		ExprLexer lexer = new ExprLexer(input);
		CommonTokenStream tokens = new CommonTokenStream(lexer);
		LabeledExprParser parser = new LabeledExprParser(tokens);
		ParseTree tree = parser.prog(); // parse; start at prog
		EvalVisitor eval = new EvalVisitor();
   		eval.visit(tree);
	}
}
