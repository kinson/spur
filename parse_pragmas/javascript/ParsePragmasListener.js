// Generated from ParsePragmas.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ParsePragmasParser.
function ParsePragmasListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ParsePragmasListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ParsePragmasListener.prototype.constructor = ParsePragmasListener;

// Enter a parse tree produced by ParsePragmasParser#prog.
ParsePragmasListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#prog.
ParsePragmasListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#statement.
ParsePragmasListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#statement.
ParsePragmasListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#customPrag.
ParsePragmasListener.prototype.enterCustomPrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#customPrag.
ParsePragmasListener.prototype.exitCustomPrag = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#openMPPrag.
ParsePragmasListener.prototype.enterOpenMPPrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#openMPPrag.
ParsePragmasListener.prototype.exitOpenMPPrag = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#namePrag.
ParsePragmasListener.prototype.enterNamePrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#namePrag.
ParsePragmasListener.prototype.exitNamePrag = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#memPrag.
ParsePragmasListener.prototype.enterMemPrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#memPrag.
ParsePragmasListener.prototype.exitMemPrag = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#partitionPrag.
ParsePragmasListener.prototype.enterPartitionPrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#partitionPrag.
ParsePragmasListener.prototype.exitPartitionPrag = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#runsPrag.
ParsePragmasListener.prototype.enterRunsPrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#runsPrag.
ParsePragmasListener.prototype.exitRunsPrag = function(ctx) {
};


// Enter a parse tree produced by ParsePragmasParser#timePrag.
ParsePragmasListener.prototype.enterTimePrag = function(ctx) {
};

// Exit a parse tree produced by ParsePragmasParser#timePrag.
ParsePragmasListener.prototype.exitTimePrag = function(ctx) {
};



exports.ParsePragmasListener = ParsePragmasListener;