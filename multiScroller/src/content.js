chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.method) {
        case 'checkPage':
            console.log('もろた');
            window.alert('connect pages');
            break;
        default:
            console.log('no method');
    }
})