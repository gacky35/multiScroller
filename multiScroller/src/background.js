var connectWindow = [];

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.query({'active': true}, tabs => {
            let activeUrlList = {};
            connectWindow = [];
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
                        connectWindow.push(tab.id)
                    }
                }
            }
        })
    }
})

chrome.contextMenus.create({
    title: 'multiScroller',
    onclick: function(e) {
        chrome.windows.create({
            "url": "/data/controller.html",
            "type": "popup",
            "height": 110, "width": 199,
        })
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.method) {
        case "startScroll":
            for (tab of connectWindow) {
                chrome.tabs.sendMessage(tab, {method: "startScroll"})
            }
            break;
        case "paceDown":
            for (tab of connectWindow) {
                chrome.tabs.sendMessage(tab, {method: "speedDown"})
            }
            break;
        case "paceUp":
            for (tab of connectWindow) {
                chrome.tabs.sendMessage(tab, {method: "speedUp"})
            }
            break;
        default:
            break;
    }
});