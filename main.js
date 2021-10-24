let btn = document.getElementById("get-timezone");
if (btn!==null){
    btn.addEventListener("click",timeZone);
}

function timeZone(){
    let time = document.getElementById("show-timezone");
    time.innerHTML = Date();
}