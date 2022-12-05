var y = 0;
var pace = 1;
var state = "stop";

chrome.runtime.onMessage.addListener(function(request) {
    switch (request.method) {
        case 'startScroll':
            if (state == 'scroll') {
                state = 'stop';
            } else {
                y = y >= document.documentElement.scrollHeight ? 0 : y;
                pace = 1;
                state = 'scroll';
            }
            scrollPage(5);
            break;
        case 'speedUp':
            pace += 0.1;
            break;
        case 'speedDown':
            pace = pace == 1 ? pace : pace - 0.1;
            break;
        default:
            console.log('no method');
    }
})

function scrollPage(speed) {
    y += pace;
    console.log(y, state, document.documentElement.scrollHeight);
    window.scrollTo(0, y);
    if (y < document.documentElement.scrollHeight && state == 'scroll') {
        setTimeout(() => {
            scrollPage(speed);
        }, speed);
    } else {
        state = 'stop';
    }
}