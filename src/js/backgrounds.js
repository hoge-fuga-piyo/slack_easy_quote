chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  if (info.status === 'complete' && tab.url.indexOf('https://app.slack.com/') !== -1) {
    console.log('complete load');
    chrome.tabs.executeScript(null, { file: 'src/contents.js' }, () => {
      chrome.runtime.lastError;
    });
  } else {
    console.log('not complete load');
  }
});