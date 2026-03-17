const p=document.querySelector('p')
const characters="ABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwx"
const text=p.innerText

let iteration=0

function randomtext(){
    const str=text.split("").map((char,index)=>{
      if(index<iteration){
        return char
      }
      return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")
    p.innerText=str

   iteration += 0.25
}

setInterval(randomtext,30)