let selectorsObj = {
  'tripadvisor.com': {
  'search': `.brand-trip-search-geopill-TripSearchGeoPill__pillWrap--2_fwr`,
  'profile': `.brand-global-nav-action-profile-Profile__loggedOutIcon--YhUxY`,
  'home':`.brand-header-Logo__logo--x3aMw`,
  },
  'linkedin.com': {
    'search': '[role=“combobox”]',
    'profile': '.nav-item__profile-member-photo',
    'home':'.nav-item__icon--inbug',
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
      removeCSS(selector);
      addCSS(selector);

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

  let film = document.createElement("div");
  film.style.cssText = 'width:100vw; height:100vh; position:fixed; top:0; left: 0; background-color: rgba(0, 0, 0, 0.25); z-index:99';
  film.id = 'breadcrumbs-film';
  console.log(film)
  body.appendChild(film);
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.25)!important';
  button.style.opacity = '1';
  button.style.zIndex = '100';
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

  body.addEventListener("click", () => {
    console.log('clicked on body, removing css')
    removeCSS(selector);
  })
}


function removeCSS(selector) {
  console.log('remove css: ', selector)
  let button = document.querySelector(selector);
  let body = document.querySelector("body");
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
  document.body.removeChild(document.querySelector('#breadcrumbs-film'));
}

