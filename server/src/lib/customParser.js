'use strict';

var antlr = require('antlr4/index');

var ParsePragmasLexer = require('./antlr/ParsePragmasLexer');
var ParsePragmasParser = require('./antlr/ParsePragmasParser');
var ParsePragmasListener = require('./antlr/ParsePragmasListener').ParsePragmasListener;

var KeyPrinter = function() {
  ParsePragmasListener.call(this); // inherit default listener
  return this;
};

KeyPrinter.prototype = Object.create(ParsePragmasListener.prototype);
KeyPrinter.prototype.constructor = KeyPrinter;

KeyPrinter.prototype.enterProg = function(ctx) {
    this.pragmas = {};
    this.hasOpenMPPragma = false;
  };

KeyPrinter.prototype.enterCustomPrag = function(ctx) {
  this.customPragValue = ctx.CONDITION().getText();
};

KeyPrinter.prototype.enterOpenMPPrag = function(ctx) {
  this.hasOpenMPPragma = true;
};

KeyPrinter.prototype.enterNamePrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['JOB_NAME'] = '-J ' + this.customPragValue;
    this.pragmas['JOB_OUTPUT'] = '-o ' + this.customPragValue + '_%j.out';
  }
};

KeyPrinter.prototype.enterMemPrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['JOB_MEM'] = '--mem=' + this.customPragValue;
    this.pragmas['X'] = '--exclusive';
  }
};

KeyPrinter.prototype.enterTimePrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['TIME'] = '-t ' + this.customPragValue;
  }
};

KeyPrinter.prototype.enterEmailPrag = function(ctx) {
  if (this.customPragValue) {
    this.pragmas['EMAIL'] = '--mail-user ' + this.customPragValue;
    this.pragmas['EMAIL_TYPE'] = '--mail-type=all';
  }
};

function getPragmas(input) {
  var chars = new antlr.InputStream(input);

  var lexer = new ParsePragmasLexer.ParsePragmasLexer(chars);
  var tokens = new antlr.CommonTokenStream(lexer);
  var parser = new ParsePragmasParser.ParsePragmasParser(tokens);
  parser.buildParseTrees = true;
  var tree = parser.prog();

  var printer = new KeyPrinter();
  antlr.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

  if (!printer.hasOpenMPPragma) {
    throw new Error('Uploaded code does not contain openMP directive');
  }

  if (!printer.pragmas || Object.keys(printer.pragmas).length === 0) {
    return require('./defaultPragmas');
  }

  return printer.pragmas;
}

module.exports = getPragmas;
