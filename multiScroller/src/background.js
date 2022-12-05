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