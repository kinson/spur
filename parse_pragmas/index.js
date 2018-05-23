'use strict';

var antlr = require('antlr4/index');
var fs = require('fs');

var ParsePragmasLexer = require('./ParsePragmasLexer');
var ParsePragmasParser = require('./ParsePragmasParser');
var ParsePragmasListener = require('./ParsePragmasListener').ParsePragmasListener;

var input = fs.readFileSync(process.argv[2], { encoding: 'utf-8' });

var KeyPrinter = function() {
  ParsePragmasListener.call(this); // inherit default listener
  return this;
};

KeyPrinter.prototype = Object.create(ParsePragmasListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.enterProg = function(ctx) {
    this.pragmas = {};
  };

KeyPrinter.prototype.enterCustomPrag = function(ctx) {
  this.customPragValue = ctx.CONDITION().getText();
};

KeyPrinter.prototype.enterNamePrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['JOB_NAME'] = '-J ' + this.customPragValue;
    this.pragmas['JOB_OUTPUT'] = '-o ' + this.customPragValue + '_%j.out';
  }
};

KeyPrinter.prototype.enterMemPrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['JOB_MEM'] = '--mem= ' + this.customPragValue;
  }
};

KeyPrinter.prototype.enterTimePrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['TIME'] = '-t ' + this.customPragValue;
  }
};

KeyPrinter.prototype.exitProg = function(ctx) {
    console.log(this.pragmas);
};

var chars = new antlr.InputStream(input);

var lexer = new ParsePragmasLexer.ParsePragmasLexer(chars);
var tokens = new antlr.CommonTokenStream(lexer);
var parser = new ParsePragmasParser.ParsePragmasParser(tokens);
parser.buildParseTrees = true;
var tree = parser.prog();

var printer = new KeyPrinter();
antlr.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);