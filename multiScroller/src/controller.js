document.getElementById("start").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    let selectWindow = [];
    for (option of selectOption) {
        selectWindow.push(Number(option.value));
    }
    let startButton = document.getElementById("start");
    startButton.style.display = "none";
    let poseButton = document.getElementById("pose");
    poseButton.style.display = "inline-block";
    chrome.runtime.sendMessage({method: "startScroll", data: selectWindow});
}

document.getElementById("pose").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    let selectWindow = [];
    for (option of selectOption) {
        selectWindow.push(Number(option.value));
    }
    let startButton = document.getElementById("start");
    startButton.style.display = "inline-block";
    let poseButton = document.getElementById("pose");
    poseButton.style.display = "none";
    chrome.runtime.sendMessage({method: "startScroll", data: selectWindow});
}

document.getElementById("slow").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    let selectWindow = [];
    for (option of selectOption) {
        selectWindow.push(Number(option.value));
    }
    chrome.runtime.sendMessage({method: "paceDown", data: selectWindow});
}

document.getElementById("high").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    let selectWindow = [];
    for (option of selectOption) {
        selectWindow.push(Number(option.value));
    }
    chrome.runtime.sendMessage({method: "paceUp", data: selectWindow});
}

chrome.runtime.sendMessage({method: "getTabsInfo"}, function(tabs) {
    let content = "";
    let div = document.getElementById('windowList');
    for (tab of tabs.tabs) {
        content += `<div><input type='checkbox' id='${tab.windowId}' name='activeWindow' value='${tab.id}' /><label for='${tab.windowId}'>${tab.title}</label></div>`
    }
    div.innerHTML = content;
})