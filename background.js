(function(chrome) {
  'use strict';

  var id;

  chrome.browserAction.onClicked.addListener(function() {
    var screenWidth = screen.availWidth,
        screenHeight = screen.availHeight,
        width = 600,
        height = 600;

    if (id === undefined) {
      id = chrome.windows.create({
        url: './build/index.html',
        type: 'popup',
        width: width,
        height: height,
        focused: true,
        left: Math.round((screenWidth-width)/2),
        top: Math.round((screenHeight-height)/2)
      }, function(window) {
        id = window.id;
      });
    } else {
      chrome.windows.update(id, {focused: true });
    }
  });

  chrome.windows.onRemoved.addListener(function(windowId) {
    if (windowId === id) {
      id = undefined;
    }
  });

})(chrome);

