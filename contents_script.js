let selectorsObj = {
  'tripadvisor.com': {
  'search': '#component_10 > div > div > div > div > div > div > div.brand-header-GlobalNavActions__searchWrap--2XBZ1 > div',
  'profile': '#component_10 > div > div > div > div > div > div > div:nth-child(6) > div > div:nth-child(1) > div > span > span',
  'home':'',
  'login':'.ui_icon.friend.brand-global-nav-action-profile-Profile__loggedOutIcon--YhUxY'
  },
  'linkedin.com': {
    'search': '#ember33 > input[type=text]',
    'profile': '#nav-settings__dropdown-trigger',
    'home':'#feed-nav-item',
    'login':'#component_12 > div > div > div > div > div > div > div:nth-child(6) > div > a.ui_button.primary.small.brand-global-nav-action-profile-Profile__loginButton--2fZJK'
    }
}

let selectors;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('request received not sure what type yet')
    if (request.type == "url") {
      console.log('request from background url received',request)
      resetSelectors(request.url,selectorsObj)
      sendResponse('request for',request.url,'received');
    }
    else if (request.type == "button") {
      console.log('request from button received',request)
      const selector = selectors[request.button];

      addCSS(selector);

      // const body = document.querySelector("body")
      //   body.addEventListener("click", () => {
      //     removeCSS(selector);
      //   })

    }
});

function resetSelectors(url, selectorsObj) {
  selectors = selectorsObj[url];
  console.log(selectors);
}

function addCSS(selector) {
  console.log('add css: ', selector)
  let button = document.querySelector(selector);
  console.log('did I find button?',button)
  let body = document.querySelector("body");
  console.log(body)
  body.style.backgroundColor = "rgba(0, 0, 0, 0.25)!important";
  button.style.opacity = "1";
  button.animate([{
          boxShadow: "0 0 8px 8px #fff"
      },
      {
          boxShadow: "0 0 0 0 #fff"
      }
  ], {
      duration: 2000,
      iterations: Infinity,
      direction: 'alternate-reverse'
  });
}



function removeCSS(selector) {
  console.log('remove css: ', selector)
  let button = document.querySelector(selector);
  let body = document.querySelector("body");
  body.style.backgroundColor = "rgba(0, 0, 0, 0)";
  button.style.opacity = "1";
  button.animate([{
          boxShadow: "0 0 0 0 #fff"
      },
      {
          boxShadow: "0 0 0 0 #fff"
      }
  ], {
      duration: 2000,
      iterations: Infinity,
      direction: 'alternate-reverse'
  });
}

