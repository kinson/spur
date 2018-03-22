
public class ParallelizeLoops extends PrototypeOneBaseListener {

    @Override
    public void enterExpr(PrototypeOneParser.ExprContext ctx) {
        // System.out.println(ctx);
    }

    @Override
    public void enterProg(PrototypeOneParser.ProgContext ctx) {
        System.out.println("in prog");
    }

    @Override
    public void enterForLoop(PrototypeOneParser.ForLoopContext ctx) {
        System.out.println("in for loop");
    }

    @Override
    public void enterAssignment(PrototypeOneParser.AssignmentContext ctx) {
        System.out.println(ctx.ID().getText());
    }
}