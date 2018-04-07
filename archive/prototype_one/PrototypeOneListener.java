// Generated from PrototypeOne.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link PrototypeOneParser}.
 */
public interface PrototypeOneListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(PrototypeOneParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(PrototypeOneParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#variableInstantiation}.
	 * @param ctx the parse tree
	 */
	void enterVariableInstantiation(PrototypeOneParser.VariableInstantiationContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#variableInstantiation}.
	 * @param ctx the parse tree
	 */
	void exitVariableInstantiation(PrototypeOneParser.VariableInstantiationContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#exitCondition}.
	 * @param ctx the parse tree
	 */
	void enterExitCondition(PrototypeOneParser.ExitConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#exitCondition}.
	 * @param ctx the parse tree
	 */
	void exitExitCondition(PrototypeOneParser.ExitConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#increaseCondition}.
	 * @param ctx the parse tree
	 */
	void enterIncreaseCondition(PrototypeOneParser.IncreaseConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#increaseCondition}.
	 * @param ctx the parse tree
	 */
	void exitIncreaseCondition(PrototypeOneParser.IncreaseConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#primary}.
	 * @param ctx the parse tree
	 */
	void enterPrimary(PrototypeOneParser.PrimaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#primary}.
	 * @param ctx the parse tree
	 */
	void exitPrimary(PrototypeOneParser.PrimaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(PrototypeOneParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#expr}.
	 * @param ctx the parse tree 
	 *
	 */
	void exitExpr(PrototypeOneParser.ExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#assignment}.
	 * @param ctx the parse tree
	 */
	void enterAssignment(PrototypeOneParser.AssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#assignment}.
	 * @param ctx the parse tree
	 */
	void exitAssignment(PrototypeOneParser.AssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(PrototypeOneParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(PrototypeOneParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(PrototypeOneParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(PrototypeOneParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link PrototypeOneParser#forLoop}.
	 * @param ctx the parse tree
	 */
	void enterForLoop(PrototypeOneParser.ForLoopContext ctx);
	/**
	 * Exit a parse tree produced by {@link PrototypeOneParser#forLoop}.
	 * @param ctx the parse tree
	 */
	void exitForLoop(PrototypeOneParser.ForLoopContext ctx);
}