    console.log("hello");
    var loginForm = document.getElementById("loginForm");
        var regForm = document.getElementById("regForm");
        var indicator = document.getElementById("indicator");

        function register() {
            regForm.style.transform = "translateX(0px)";
            loginForm.style.transform = "translateX(0px)";
            indicator.style.transform = "translateX(100px)";
        };

        function login() {
            regForm.style.transform = "translateX(300px)";
            loginForm.style.transform = "translateX(300px)";
            indicator.style.transform = "translateX(0px)";
        };
// ------------------for login form---------------------//
    var logform = document.getElementById("loginForm");
    logform.addEventListener("submit", async(event) => {
        event.preventDefault();

        let loginName = document.getElementById("username");
        let passcode = document.getElementById("password");

        console.log(loginName.value);
        console.log(passcode.value);


        if (loginName.value && passcode.value) {
            const url ="http://localhost:3000/ ";
            
        
            let data = {
                loginName: loginName.value,
                passcode: passcode.value,
            };

            var request = new Request(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });

        let response = await fetch(request);
            
            if (response.ok) {
                let id = await response.json();
                console.log(id);
                var result = document.getElementById("log-response");
                result.innerHTML= "Welcome! You're logged in." + id;
            } else {
                var result = document.getElementById("log-response");
                result.innerHTML= "Username or password is wrong!!"
            }
        } else {
            window.alert("Please complete the form")
        }
    });

    console.log("It comes this far!!") // for testing
/* ------------------for reg form-----------------
    var regform = document.getElementById("regForm")
    regform.addEventListener("submit", async(event) => {
        event.preventDefault();
        let userName = document.getElementById("createname");
        let email = document.getElementById("email");
        let userPass = document.getElementById("pass");

        if (userName.value && email.value && userPass.value) {
            const url ="http://localhost:3000/ ";
        
            let data = {
                expectedname: userName.value,
                email = email.value,
                password: userPass.value,
            };

            var request = new Request(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json; charset=UTF-8" },
            });

            let response = await fetch(request);
        
            if (response.ok) {
                let id = await response.json();
                var result = document.getElementById("reg-response");
                result.innerHTML= "Congratulations! You've successfully created id with user name:" + userName.value; 
            } else {
                var result = document.getElementById("reg-response");
                result.innerHTML= "Check your inputs again."
            }
        } else {
            window.alert("Please complete the form")
        };
    }); ----*/