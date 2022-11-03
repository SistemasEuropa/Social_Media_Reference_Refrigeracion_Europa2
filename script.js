let sleep = ms => {
    return new Promise (resolve=>setTimeout(resolve, ms));
}

function show_popup_location(){
    all_body.classList.remove("reverse-blur")
    all_body.classList.add("blur");
    sleep(400).then(()=>{
        body.classList.add("hide");
        header.classList.add("hide");
        footer.classList.add("hide");
        popup.classList.remove("hide");
    });
   
};

function hide_popup_location(){
    all_body.classList.remove("blur");
    all_body.classList.add("reverse-blur");
    sleep(400).then(()=>{
        popup.classList.add("hide");
        body.classList.remove("hide");
        header.classList.remove("hide");
        footer.classList.remove("hide");
    });
};

let all_body = document.getElementById("all");
let btn = document.getElementById("location");
let popup = document.getElementById("popup");
let body = document.getElementById("body");
let footer = document.getElementById("footer")
let header = document.getElementById("header");
let logo_popup = document.getElementById("logo-popup");

btn.addEventListener("click", show_popup_location);
logo_popup.addEventListener("click", hide_popup_location);