var aud=new Audio('./audio/28.mp3')
var aud1=new Audio('./audio/29.mp3')
var aud2=new Audio('./audio/30.mp3')
var aud3=new Audio('./audio/31.mp3')

var h2=document.querySelector('h2')
var no1=document.querySelector('#no1')
var no2=document.querySelector('#no2')
var no3=document.querySelector('#no3')
var no4=document.querySelector('#no4')

document.body.addEventListener('keydown',function(dets){
    if(dets.code=='KeyD'){
        aud.play()
        no1.style.backgroundColor='green'
        no2.style.backgroundColor='white'
        no3.style.backgroundColor='white'
        no4.style.backgroundColor='white'
    }
      if(dets.code=='KeyF'){
        aud1.play()
        no2.style.backgroundColor='green'
        no1.style.backgroundColor='white'
        no3.style.backgroundColor='white'
        no4.style.backgroundColor='white'


    }
    if(dets.code=='KeyG'){
        aud2.play()
        no3.style.backgroundColor='green'
        no1.style.backgroundColor='white'
        no2.style.backgroundColor='white'
        no4.style.backgroundColor='white'
    }
    if(dets.code=='KeyH'){
        aud3.play()
        no4.style.backgroundColor='green'
        no1.style.backgroundColor='white'
        no2.style.backgroundColor='white'
        no3.style.backgroundColor='white'
    }
    
})
