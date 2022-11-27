chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({'active': true}, tabs => {
            let activeUrlList = {};
            if (tabs.length >= 2) {
                for (tab of tabs) {
                    if (tab.url in activeUrlList) {
                        activeUrlList[tab.url] += 1;
                    } else {
                        activeUrlList[tab.url] = 1
                    }
                }
                for (tab of tabs) {
                    console.log(tab);
                    if (activeUrlList[tab.url] >= 2) {
                        chrome.tabs.sendMessage(tab.id, {method: 'checkPage'});
                        console.log('send');
                    }
                }
            }
        })
    }
})