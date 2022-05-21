let start= document.querySelector(".button")
let treck= document.querySelector(".treck")
let polyline1= document.querySelector(".polyline1")
let polyline2= document.querySelector(".polyline2")
let line1= document.querySelector(".line1")

let car= document.querySelector(".car")
let randomCar=[];
let car1=document.querySelector(".automotive")
let car2=document.querySelector(".convertible")
let car3=document.querySelector(".delahaye")
let car4=document.querySelector(".mini-cooper")
let car5=document.querySelector(".police")
let car6=document.querySelector(".sports")
let car7=document.querySelector(".bus")
let cars=[car1,car2,car3,car4,car5,car6,car7];

for(let i=0;i<cars.length;i++){
  let t=cars[i];
}



let automotive={
  
  width:50,
   height:100,
  
}
automotive=car1;
let convertible={
  
  width:55,
   height:100,
 
}
let delahaye={
  width:48,
   height:100,
}
let mini_cooper={
  width:52,
   height:106,
}
let police={
  width:52,
   height:100,
}
let sports={
  width:53,
   height:101,

}
let bus={
  width:53,
   height:101,

}
setInterval(tick,60);
let igra=0;// игра не начата
randomCarY=0;
speedY=0;
yy=0;
y1=-1000000;
speedX=0;
top1=410;
left1=147;
speedPolosa=0;
topPolosa1=-110
polosa1={
  topPolosa:-110,
  leftPolosa:15,
  speedPolosa:0
}
polosa2={
  topPolosa:-110,
  leftPolosa:105,
  speedPolosa:4
}
polosa3={
  topPolosa:-110,
  leftPolosa:192,
  speedPolosa:4
}
polosa4={
  topPolosa:-110,
  leftPolosa:279,
  speedPolosa:4
}
start.addEventListener("click",startgame);//старт игры
function startgame(){
if(igra===0){
igra=1;// игра началась
yy=4//скорость полос
speedPolosa=4

}


}

document.body.addEventListener("keydown", (a) => {//управление главной машинкой
    if (a.key === 'ArrowDown')
    speedY=3
      if (a.key === 'ArrowUp')
      speedY=-3
      if (a.key === 'ArrowLeft'){
      speedX=-3
      car.style.transform="rotate("+ -10 + "deg)";
      }
        if (a.key === 'ArrowRight'){
        speedX=3
        car.style.transform="rotate("+ 10 + "deg)";
        }
})
document.body.addEventListener("keyup", (a) => {//управление главной машинкой
    if (a.key === 'ArrowDown')
    speedY=0
    
     if (a.key === 'ArrowUp')
     speedY=0
     if (a.key === 'ArrowLeft'){
     speedX=0
     car.style.transform="rotate("+ 0 + "deg)";
     }
       if (a.key === 'ArrowRight'){
       car.style.transform="rotate("+ 0 + "deg)";
       }
       speedX=0
  })

polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')
polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')
randoms =Math.floor(Math.random() * 7);
randomCar.push(cars[randoms]);
randomPolosa=Math.floor(Math.random() * 4);
polosaN.push(polosa[randomPolosa])

let k=0

function tick(){
    y1+=yy;
    topPolosa1+=speedPolosa;
    
    k++
    top1+=speedY;
    left1+=speedX;
    polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')//движение линий
    polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')
    car.style.top=top1+"px";
    car.style.left=left1+"px";
    
    randomCar[0].style.top=topPolosa1+"px"
    randomCar[0].style.left=polosaN+"px"
    
    
    if(topPolosa1>570){
      randomCar[0].style.display="none";
      randomCar[0].style.top=0;
   randomCar.shift();
    polosaN.shift();
    randoms =Math.floor(Math.random() * 7);
  randomCar.push(cars[randoms]);
  randomPolosa=Math.floor(Math.random() * 4);
  polosaN.push(polosa[randomPolosa])
  topPolosa1=-110
  randomCar[0].style.display="block";
  randomCar[0].style.left=polosaN+"px"
  randomCar[0].style.top=topPolosa1+"px"
    }
}
    

