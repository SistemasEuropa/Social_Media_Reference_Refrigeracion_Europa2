let sleep = ms => {
    return new Promise (resolve=>setTimeout(resolve, ms));
}

function hide_index(){
    sleep(400).then(()=>{
        body.classList.add("hide");
        header.classList.add("hide");
        footer.classList.add("hide");
    });
}

function show_index(){
    sleep(400).then(()=>{
        body.classList.remove("hide");
        header.classList.remove("hide");
        footer.classList.remove("hide");
    });
}

function show_popup_location(){
    all_body.classList.remove("reverse-blur")
    all_body.classList.add("blur");
    hide_index();
    popup_location.classList.remove("hide");
};

function hide_popup_location(){
    all_body.classList.remove("blur");
    all_body.classList.add("reverse-blur");
    show_index();
    popup_location.classList.add("hide");
};

function show_popup_whatsapp(){
    all_body.classList.remove("reverse-blur")
    all_body.classList.add("blur");
    hide_index();
    popup_whatsapp.classList.remove("hide");
};

function hide_popup_whatsapp(){
    all_body.classList.remove("blur");
    all_body.classList.add("reverse-blur");
    show_index();
    popup_whatsapp.classList.add("hide");
};

let all_body = document.getElementById("all");
let btn_location = document.getElementById("location");
let btn_whatsapp = document.getElementById("whatsapp");
let popup_location = document.getElementById("popup");
let popup_whatsapp = document.getElementById("popup-ws")
let body = document.getElementById("body");
let footer = document.getElementById("footer")
let header = document.getElementById("header");
let logo_popup = document.getElementById("logo-popup");

btn_location.addEventListener("click", show_popup_location);
logo_popup.addEventListener("click", hide_popup_location);
btn_whatsapp.addEventListener("click", show_popup_whatsapp);
logo_popup.addEventListener("click",hide_popup_whatsapp);