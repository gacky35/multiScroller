chrome.tabs.onUpdated.addLister(function(tabId, changeInfo, tab) {
    if (changeInfo.state === 'complete') {
        chrome.tabs.query({'active': true}, tabs => {
            console.log(tabs);
        })
    }
})