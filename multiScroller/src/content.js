var y = 0;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.method) {
        case 'checkPage':
            window.alert('connect pages');
            break;
        case 'startScroll':
            y = 0;
            scrollPage(5);
        default:
            console.log('no method');
    }
})

function scrollPage(speed) {
    window.scrollTo(0, y++);
    if (y < document.documentElement.scrollHeight) {
        setTimeout('scrollPage()', speed, speed);
    }
}