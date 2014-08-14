/*
var exp = Math.exp;
var floor = Math.floor;
var min = Math.min;
var random = Math.random;
*/
requirejs.config({
  paths: {
    jquery : [
      '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
      'vendor/jquery/dist/jquery.min'
    ]
  }
});

define(['app', 'jquery'], function(App, $) {
  $(document).ready(function() {
    App.init();
  });
});