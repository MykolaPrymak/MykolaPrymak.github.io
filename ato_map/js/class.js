var initializing=!1,fnTest=/xyz/.test(function(){})?/\b_super\b/:/.*/;Class=function(){};
Class.extend=function(b){var d=this.prototype;initializing=!0;var c=new this;initializing=!1;for(var a in b)c[a]="function"==typeof b[a]&&"function"==typeof d[a]&&fnTest.test(b[a])?function(a,b){return function(){var c=this._super;this._super=d[a];var e=b.apply(this,arguments);this._super=c;return e}}(a,b[a]):b[a];Class=function(){!initializing&&this.init&&this.init.apply(this,arguments)};Class.prototype=c;Class.constructor=Class;Class.extend=arguments.callee;return Class};
if("undefined"!==typeof exports)exports.Class=Class;