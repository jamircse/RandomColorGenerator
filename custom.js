

const containerUrl=document.querySelector(".container");


for (let index = 0; index <60; index++) {
    let box=document.createElement("div");
    box.classList.add("color_box");
    
    containerUrl.appendChild(box);
}

var randomColor=()=>{
    var colorCode="";
    chars="0123456789abcdef";
    for (let index = 0; index <6; index++) {
        var randomNumber = Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNumber,randomNumber+1);
    }
    return colorCode;
}

var colorboxUrl=document.querySelectorAll(".color_box");
const bgBackground=()=>{
    colorboxUrl.forEach((e)=>{
        var colorurl=randomColor();
        var bgColor=`#${colorurl}`
        e.style.backgroundColor=bgColor;
        e.innerText=bgColor;
    })
}

bgBackground();