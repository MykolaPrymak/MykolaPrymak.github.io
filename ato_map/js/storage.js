"use strict";

define(['class'], function(Class) {
  var Storage = Class.extend({
    init: function(key, defaultData) {
      this.key = key || 'data';
      if (defaultData instanceof Object) {
        this.defaultData = defaultData;
      } else {
        this.defaultData = {};
      }
      if (this.isHaveLocalStorage() && localStorage.getItem(key)) {
        this.data = JSON.parse(localStorage.getItem(key));
      } else {
        this.reset();
      }
    },
    reset: function() {
      this.data = this.defaultData;
    },
    save: function() {
      if (this.isHaveLocalStorage()) {
        localStorage.setItem(this.key, JSON.stringify(this.data))
      }
    },
    clear: function() {
      this.reset();
      this.save();
    },
    isHaveLocalStorage: function() {
      return window.localStorage;
    },
    isHaveProperty: function(name) {
      return !!this.data.hasOwnProperty(name)
    },
    get: function(name) {
      if (this.isHaveProperty(name)) {
        return this.data[name];
      }
      return null;
    },
    set: function(name, value) {
      if (this.isHaveProperty(name)) {
        var old = this.data[name];
        this.data[name] = value;
        this.save();
        return old;
      }
      return null;
    }
  });

  return Storage;
});