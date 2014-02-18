define(['underscore'], function(_) {
  var LOG_LEVEL_SILENT = 0;
  var LOG_LEVEL_INFO   = 1;
  var LOG_LEVEL_WARING = 2;
  var LOG_LEVEL_ERROR  = 3;
  var LOG_LEVEL_DEBUG  = 4;

  var Log = function(level) {
      this.level = level;
  }
  _.each(['info', 'debug', 'error', 'warn'], function(name, level) {
    Log.prototype[name] = function() {
      if (window.console && (level < this.level)) {
        console[name].apply(console, arguments);
      }
    }
  });

  log = new Log(LOG_LEVEL_DEBUG);
  return log;
});