// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const toggleCSP = document.getElementById('toggleCSP');
  
    chrome.storage.sync.get(['cspEnabled'], function (result) {
      toggleCSP.checked = result.cspEnabled;
    });
  
    toggleCSP.addEventListener('change', function () {
      chrome.storage.sync.set({ cspEnabled: toggleCSP.checked }, function () {
        console.log('CSP Disabler is ' + (toggleCSP.checked ? 'enabled' : 'disabled'));
      });
    });
  });
  