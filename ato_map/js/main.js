"use strict";

requirejs.config({
  shim: {
    'class' : {
      deps: [],
      exports: 'Class'
    },
    'underscore': {
      exports: '_'
    }
  },
  paths: {
    jquery : [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
      'vendor/jquery/dist/jquery.min'
    ],
    'class': 'class',
  }
});

define(['app', 'jquery'], function(App, $) {
  $(document).ready(function() {
    App.init();
  });
});