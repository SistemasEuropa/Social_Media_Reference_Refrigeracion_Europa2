function show_popup_location(){
    popup.classList.remove("hide");
    body.classList.add("hide");
    header.classList.add("hide");
    footer.classList.add("hide");
};

function hide_popup_location(){
    popup.classList.add("hide");
    body.classList.remove("hide");
    header.classList.remove("hide");
    footer.classList.remove("hide");
}

let btn = document.getElementById("location");
let popup = document.getElementById("popup");
let body = document.getElementById("body");
let footer = document.getElementById("footer")
let header  = document.getElementById("header");
let logo_popup = document.getElementById("logo-popup")

btn.addEventListener("click", show_popup_location);
logo_popup.addEventListener("click", hide_popup_location);


