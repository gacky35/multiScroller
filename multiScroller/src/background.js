chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({'active': true}, tabs => {
            console.log(tabs);
        })
    }
})