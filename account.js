var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function register() {
regForm.style.transform = "translateX(0px)";
loginForm.style.transform = "translateX(0px)";
indicator.style.transform = "translateX(100px)";
}

function login() {
regForm.style.transform = "translateX(300px)";
loginForm.style.transform = "translateX(300px)";
indicator.style.transform = "translateX(0px)";
}

// ------------------for login form---------------------//
var form = document.getElementById("loginForm");
form.addEventListener("submit", async(event) => {
    event.preventDefault();

    let name = document.getElementById("username");
    let passcode = document.getElementById("password");

    if (name.value && passcode.value) {
        const url ="http://localhost:3000/product";
        
        let data = {
            name: name.value,
            passcode: passcode.value,
        };

        var request = new Request(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json; charset=UTF-8" },
        });

        let response = await fetch(request);
        
        if (response.ok) {
            window.location.href ="https://google.com";
        } else {
            console.log("error");
        }
    } else {
        window.alert("Please complete the form")
    }
});