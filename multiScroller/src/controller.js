document.getElementById("start").onclick = function() {
    chrome.runtime.sendMessage({method: "startScroll"});
}

document.getElementById("slow").onclick = function() {
    chrome.runtime.sendMessage({method: "paceDown"});
}

document.getElementById("high").onclick = function() {
    chrome.runtime.sendMessage({method: "paceUp"});
}

chrome.runtime.sendMessage({method: "getTabsInfo"}, function(tabs) {
    let content = "";
    let div = document.getElementById('windowList');
    for (tab of tabs) {
        
    }
    div.innerHTML = content;
})