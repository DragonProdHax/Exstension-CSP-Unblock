// background.js

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
      chrome.storage.sync.get(['cspEnabled'], function (result) {
        if (result.cspEnabled) {
          const headers = details.responseHeaders.filter(header => {
            return !(header.name.toLowerCase() === 'content-security-policy' || header.name.toLowerCase() === 'content-security-policy-report-only');
          });
          return { responseHeaders: headers };
        }
      });
    },
    {
      urls: ['<all_urls>'],
      types: ['main_frame', 'sub_frame']
    },
    ['blocking', 'responseHeaders']
  );
  