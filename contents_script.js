console.log("contents script up and running")

// const loginButton = document.querySelector("#login");
// const body = document.querySelector("body");
// let wrapper = document.querySelector("#modal-wrapper")

// body.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
// wrapper.style.opacity = '1';
// wrapper.style.backgroundColor = 'lightgray';

// loginButton.animate([{
//         boxShadow: "0 0 8px 8px #fff"
//     },
//     {
//         boxShadow: "0 0 0 0 #fff"
//     }
// ], {
//     duration: 2000,
//     iterations: Infinity,
//     direction: 'alternate-reverse'
// });



function addCSS(selector) {
    console.log('add css: ', selector)
    let button = document.querySelector(selector);
    let body = document.querySelector("body");
    body.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
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

const body = document.querySelector("body")
body.addEventListener("click", () => {
    removeCSS(selector)
})