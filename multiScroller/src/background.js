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

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({}, tabs => {
        for (tab of tabs) {
            chrome.tabs.reload(tab.id);
        }
    });
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.method) {
        case "getTabsInfo":
            chrome.tabs.query({'active': true}, tabs => {
                sendResponse({tabs: tabs});
            })
            return true;
            break;
        default:
            break;
    }
});