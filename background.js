// console.log("background script up and running")
//create object
const urls = ['tripadvisor.com', 'linkedin.com', 'facebook.com', 'spotify.com', 'amazon.com'];

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        console.log('change info ', changeInfo)
            const url = tab.url;
            console.log(url)
            for (let i = 0; i < urls.length; i++) {
                if (url.includes(urls[i])) {
                    console.log(`${url} inclues ${urls[i]}: `, url.includes(urls[i]) ? true : false)
                    sendURLMessage(urls[i],tab);
                    return;
                }
            }
            // ... do something with url variable
    };
});

function sendURLMessage(url,tab) {
    console.log('tab:',tab)
    chrome.tabs.sendMessage(tab.id, {type: "url",url:url}, function(response) {
      console.log(response.farewell);
    });
}


function injectContentScript() {
  chrome.tabs.executeScript({file: "contents_script.js"}, function() {
    console.log("content loaded");
});
}

