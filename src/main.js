import style from './main.less'
import Vue from 'vue'

window.onload = function() {
  'use strict';
  var app2 = new Vue({
    el: '#main',
    data: {
      alphabet: createAlphabet(),
      current: ''
    },
    methods: {
      randomize: function randomize() {
        // randomly select and remove one item from the alphabet

        app2.current = '';

        setTimeout(function() {
          app2.current =
            app2.alphabet.splice(Math.ceil(Math.random() * app2.alphabet.length) - 1, 1)[0];
        }, 500);
      },
      reset: function reset() {
        app2.alphabet = createAlphabet();
        app2.current = '';
      }
    }
  });

  function createAlphabet() {
    var i, alphabet = [];

    for (var i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

    return alphabet;
  }
}
