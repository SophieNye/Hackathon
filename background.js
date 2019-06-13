// console.log("background script up and running")
//create object
const urls = ['tripadvisor.com', 'linkedin.com', 'facebook.com', 'spotify.com', 'amazon.com']


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log('change info ', changeInfo)
        alert('updated from background');
        chrome.tabs.query({
            active: true, // Select active tabs
            lastFocusedWindow: true // In the current window
        }, function (array_of_Tabs) {
            // Since there can only be one active tab in one active window, 
            //  the array has only one element
            const tab = array_of_Tabs[0];
            // Example:
            const url = tab.url;
            for (let i = 0; i < urls.length; i++) {
                if (url.includes(urls[i])) {
                    console.log(`${url} inclues ${urls[i]}: `, url.includes(urls[i]) ? true : false)
                    injectContentScript();
                    return;
                }
            }
            // ... do something with url variable
        })
    };
});

function injectContentScript() {
  chrome.tabs.executeScript({file: "contents_script.js"}, function() {
    console.log("content loaded");
});
}

