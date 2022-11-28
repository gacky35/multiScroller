document.getElementById("start").onclick = function() {
    chrome.runtime.sendMessage({method: "startScroll"});
}