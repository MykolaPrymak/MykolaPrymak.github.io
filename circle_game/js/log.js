define(["vendor/class"],function(){return Log=Class.extend({init:function(a){this.level=a||4;if(!window.console)a=function(){},a.log=a.debug=a.error=a.warn=a.info=a,window.console=a},debug:function(){4<=this.level&&console.debug.apply(console,arguments)},error:function(){3<=this.level&&console.error.apply(console,arguments)},warn:function(){2<=this.level&&console.warn.apply(console,arguments)},info:function(){1<=this.level&&console.info.apply(console,arguments)}})});