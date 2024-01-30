let body=document.getElementById("main")
let btn=document.getElementById("btn")
let text=document.getElementById("code")

const arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function changeBG(){
  const code =`#${arr[getRandomInt(0,15)]}${arr[getRandomInt(0,15)]}${arr[getRandomInt(0,15)]}${arr[getRandomInt(0,15)]}${arr[getRandomInt(0,15)]}${arr[getRandomInt(0,15)]}`
  
  console.log(code);

    main.style.backgroundColor= code;
    text.innerHTML=code
}

btn.addEventListener("click", changeBG)
document.addEventListener("click", changeBG)







