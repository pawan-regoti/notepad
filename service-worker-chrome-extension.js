chrome.action.onClicked.addListener((activeTab) => {
    var newURL = chrome.runtime.getURL('./index.html');
    chrome.tabs.create({ url: newURL });
});
