import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.io.InputStream;

public class TestPrototypeOne {
    public static void main (String[] args) throws Exception {

        ANTLRInputStream input = new ANTLRInputStream(System.in);
        PrototypeOneLexer lexer = new PrototypeOneLexer(input);
        CommonTokenStream tokens = new CommonTokenStream(lexer);
        PrototypeOneParser parser = new PrototypeOneParser(tokens);
        ParseTree tree = parser.prog();
        System.out.println(tree.toStringTree(parser));

        ParseTreeWalker walker = new ParseTreeWalker();

        walker.walk(new ParallelizeLoops(), tree);
        System.out.println();
    }
}