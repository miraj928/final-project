//JS for toggle menu//
window.onload = function() {
    console.log("Document Loaded")
};
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    } else {    
        MenuItems.style.maxHeight = "0px"
    }
}; 

// for porduct galary in product details //
var productImg = document.getElementById("productImg");
var smallImage = document.getElementsByClassName("small-img");

smallImage[0].onclick = function() {
    productImg.src = smallImage[0].src;
};
smallImage[1].onclick = function() {
    productImg.src = smallImage[1].src;
};

// for toggle form (register & login) //
var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function register() {
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
};

function login() {
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
}; 
