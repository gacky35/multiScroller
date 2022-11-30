var y = 0;
var pace = 1;
var state = "stop";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.method) {
        case 'checkPage':
            window.alert('connect pages');
            break;
        case 'startScroll':
            y = 0;
            state = (state == "scroll" ? "stop" : "scroll");
            scrollPage(5);
            break;
        case 'speedUp':
            pace += 1;
            break;
        case 'speedDown':
            pace = pace == 1 ? pace : pace - 1;
            break;
        default:
            console.log('no method');
    }
})

function scrollPage(speed) {
    y += pace;
    window.scrollTo(0, y);
    if (y < document.documentElement.scrollHeight && state == 'scroll') {
        setTimeout(() => {
            scrollPage(speed);
        }, speed);
    }
}