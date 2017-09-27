import style from './main.less'
import Vue from 'vue'
import woo from './sounds/woo.wav'

window.onload = function() {
  'use strict';

  const context = new window.AudioContext();

  var app2 = new Vue({
    el: '#main',
    data: {
      alphabet: createAlphabet(),
      current: '',
      initialized: false,
      animationActive: false
    },
    methods: {
      randomize: function randomize() {
        if (app2.animationActive === true) {
          return;
        }

        app2.initialized = true;
        app2.animationActive = true;
        app2.current = '';

        setTimeout(function() {
          // randomly select and remove one item from the alphabet
          app2.current =
            app2.alphabet.splice(Math.ceil(Math.random() * app2.alphabet.length) - 1, 1)[0];
          app2.animationActive = false;

          // Fetch the file
          fetch('sounds/woo.wav')
          // Read it into memory as an arrayBuffer
          .then(response => response.arrayBuffer())
          // Turn it from mp3/aac/whatever into raw audio data
          .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
          .then(audioBuffer => {
            // Now we're ready to play!
            const soundSource = context.createBufferSource();
            soundSource.buffer = audioBuffer;
            soundSource.connect(context.destination);
            soundSource.start();
          });
        }, 1000);
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
