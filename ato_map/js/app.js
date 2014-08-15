"use strict";

define(['jquery', 'map_data', 'storage'], function($, map_data, Storage) {
  var KEY_ARROW_LEFT = 37;
  var KEY_ARROW_RIGHT = 39;
  var $map;
  var $mapDate;

  var App = {
    init: function() {
      var $container = $('#content');
      var _this = this;

      var storage = new Storage('ato', {hideHelp: false});

      $map = $('#map');
      $mapDate = $('#map-date');

      $(document).on('keydown', function(evt) {
        var keyCode = evt.keyCode;
        if (keyCode === KEY_ARROW_LEFT) {
          _this.showPrev();
        } else if (keyCode === KEY_ARROW_RIGHT) {
          _this.showNext();
        }
      });

      $('#prev').click(function() {
        _this.showPrev();
      });
      $('#next').click(function() {
        _this.showNext();
      });

      if (storage.get('hideHelp')) {
        $('#helpAlert').css('display', 'none');
      }
      $('#helpAlert .close').click(function() {
        storage.set('hideHelp', true);
        $('#helpAlert').css('display', 'none');
      });

      this.mapCurrentIdx= map_data.length - 1;
      this.mapMaxIdx= map_data.length - 1;
      this.showMap(map_data[this.mapCurrentIdx]);
    },

    resetBtnClass: function() {
      $('#prev').removeClass('disabled');
      $('#next').removeClass('disabled');
    },

    showNext: function() {
      this.mapCurrentIdx++;
      this.resetBtnClass();
      if (this.mapCurrentIdx >= this.mapMaxIdx) {
        this.mapCurrentIdx = this.mapMaxIdx;
        $('#next').addClass('disabled');
      }
      this.showMap(map_data[this.mapCurrentIdx]);
    },

    showPrev: function() {
      this.mapCurrentIdx--;
      this.resetBtnClass();
      if (this.mapCurrentIdx <= 0) {
        this.mapCurrentIdx = 0;
        $('#prev').addClass('disabled');
      }
      this.showMap(map_data[this.mapCurrentIdx]);
    },

    showMap: function(mapItem) {
      $map.css('background-image', "url('" + mapItem.map + "')");
      $mapDate.text(mapItem.date);
    }
  }

  return App;
});