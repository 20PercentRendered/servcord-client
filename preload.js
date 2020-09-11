// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
  // X button
    var {BrowserWindow} = require('electron').remote; 
  
  function init() { 
      document.getElementById("close-btn").addEventListener("click", function (e) {
          var window = BrowserWindow.getFocusedWindow();
          window.close();
      }); 
  }; 
  
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        init(); 
    }
  };
  require('./renderer.js');
})