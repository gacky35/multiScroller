document.getElementById("start").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    if (selectOption.length > 0) {
        let startButton = document.getElementById("start");
        startButton.style.display = "none";
        let poseButton = document.getElementById("pose");
        poseButton.style.display = "inline-block";
    }
    for (option of selectOption) {
        chrome.tabs.sendMessage(Number(option.value), {method: "startScroll"})
    }
}

document.getElementById("pose").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    if (selectOption.length > 0) {
        let startButton = document.getElementById("start");
        startButton.style.display = "inline-block";
        let poseButton = document.getElementById("pose");
        poseButton.style.display = "none";
    }
    for (option of selectOption) {
        chrome.tabs.sendMessage(Number(option.value), {method: "startScroll"})
    }
}

document.getElementById("slow").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    for (option of selectOption) {
        chrome.tabs.sendMessage(Number(option.value), {method: "speedDown"})
    }
}

document.getElementById("high").onclick = function() {
    let selectOption = document.querySelectorAll("input[name=activeWindow]:checked");
    for (option of selectOption) {
        chrome.tabs.sendMessage(Number(option.value), {method: "speedUp"})
    }
}

function showWindowList() {
    let content = "";
    let div = document.getElementById('windowList');
    chrome.tabs.query({'active': true}, tabs => {
        for (tab of tabs) {
            content += `<div><input type='checkbox' id='${tab.windowId}' name='activeWindow' value='${tab.id}' /><label for='${tab.windowId}'>${tab.title}</label></div>`
        }
        div.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', showWindowList());