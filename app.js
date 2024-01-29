let body=document.getElementById("main")
let btn=document.getElementById("btn")
let text=document.getElementById("code")



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function changeBG(){
    console.log("hiii");
    const code = `#${getRandomInt(1,9)}${getRandomInt(1,9)}${getRandomInt(1,9)}${getRandomInt(1,9)}${getRandomInt(1,9)}${getRandomInt(1,9)}`
    main.style.backgroundColor= code;
    text.innerHTML=code
}

btn.addEventListener("click", changeBG)






