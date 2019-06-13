let buttons = ['login', 'profile', 'search', 'home'];

for (let i = 0; i < buttons.length; i++) {
  document.querySelector(`#${buttons[i]}`).addEventListener('click', () => {
    console.log(`${buttons[i]} clicked`)
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "button",
        button: buttons[i]
      }, function (response) {
        console.log(response.farewell);
      });
    });
    setTimeout(() => {

      window.close();
    }, 300)
  })
}