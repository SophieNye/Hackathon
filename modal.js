var port = chrome.runtime.connect({
    name: "button"
});

let buttons = ['login', 'profile', 'search', 'home'];

const iD = []

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log('change info ', changeInfo)
        chrome.tabs.query({
            active: true, // Select active tabs
            lastFocusedWindow: true // In the current window
        }, function (array_of_Tabs) {
            // Since there can only be one active tab in one active window, 
            //  the array has only one element
            const tab = array_of_Tabs[0];
            // Example:
            iD.push(tab.index);
            // for (let i = 0; i < urls.length; i++) {
            //     if (url.includes(urls[i])) {
            //         console.log(`${url} inclues ${urls[i]}: `, url.includes(urls[i]) ? true : false)
            //         injectContentScript();
            //         return;
            //     }
            // }
            // ... do something with url variable
        })
    };
});

for (let i = 0; i < buttons.length; i++) {
    document.querySelector(`#${buttons[i]}`).addEventListener('click', () => {
        console.log(`${buttons[i]} clicked`)
        port.postMessage({
            type: "button",
            button: buttons[i]
            index: iD[0]
        });
        // chrome.runtime.sendMessage({
        //     type: "button",
        //     button: buttons[i]
        // }, function (response) {
        //     console.log(response);
        // });
    })
}