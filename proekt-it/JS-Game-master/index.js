


let start= document.querySelector(".button")
let treck= document.querySelector(".treck")
let polyline1= document.querySelector(".polyline1")
let polyline2= document.querySelector(".polyline2")
let line1= document.querySelector(".line1")

let pravila= document.getElementById("pravila")
let game= document.getElementById("game")
let rekord= document.getElementById("rekord")
let home= document.querySelector("home")




let point=document.querySelector(".point")
point.value=0;
let car= document.querySelector(".car")// главная машинка

let randomCar=[];
let car1=document.querySelector(".automotive")
let car2=document.querySelector(".convertible")
let car3=document.querySelector(".delahaye")
let car4=document.querySelector(".mini-cooper")
let car5=document.querySelector(".police")
let car6=document.querySelector(".sports")
let car7=document.querySelector(".bus")
let car8 =document.querySelector(".pngwing")
let cars=[car1,car2,car3,car4,car8,car5,car6,car7];


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
let pngwing={
  width:45,
     height:60

}

let randoms;
let igra=0;// игра не начата
randomCarY=0;
speedY=0;
yy=0;
y1=-1000000;
speedX=0;
top1=410;
left1=147;
speedPolosa=0;
let topPolosa1=-110
let topPolosa2=-260
let topPolosa3=-420
let topPolosa4=-580
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
let polosaN=[];
let polosa=[polosa1.leftPolosa,polosa2.leftPolosa,polosa3.leftPolosa,polosa4.leftPolosa,]
start.addEventListener("click",startgame);//старт игры
function startgame(){
if(igra===0){
igra=1;// игра началась
yy=7//скорость полос
speedPolosa=7
topPolosa1=-110
topPolosa2=-260
topPolosa3=-420
topPolosa4=-580
}


}


  
polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')
polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')






let randomCar4=[]
let randomCar44=[car4,car8];
let randomPolosa4;
let polosaN4=[]
randomCarz=Math.floor(Math.random() * 2);
randomCar4=randomCar44[randomCarz]
randomPolosa4=Math.floor(Math.random() * 4);
polosaN4.push(polosa[randomPolosa4])


let randomCar2;
let randomPolosa2;
let polosaN2=[]
let randomCar3;
let randomPolosa3;
let polosaN3=[]
randomCar2=cars[1];
randomPolosa2=Math.floor(Math.random() * 4);
polosaN2.push(polosa[randomPolosa2])
randomCar3=cars[2];
randomPolosa3=Math.floor(Math.random() * 4);
polosaN3.push(polosa[randomPolosa3])
randomCar=cars[0];
randomPolosa=Math.floor(Math.random() * 4);
polosaN.push(polosa[randomPolosa])

let k=0


let x=setInterval(tick,40);
function tick(){
  
    y1+=yy;
    topPolosa1+=speedPolosa;
    topPolosa2+=speedPolosa;
    topPolosa3+=speedPolosa;
    topPolosa4+=speedPolosa;
    k++
    top1+=speedY;
    left1+=speedX;
    polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')//движение линий
    polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')
    car.style.top=top1+"px";//движение главной машинки 
    car.style.left=left1+"px";//движение главной машинки 
    
    randomCar.style.top=topPolosa1+"px"//движение 1-ой машинки 
    randomCar.style.left=polosaN+"px"
    if(topPolosa1>570){
      randomCar.style.display="none";
      randomCar.style.top=0;
   randomCar="";
    polosaN.shift();
    randoms =Math.floor(Math.random() * 7);
  randomCar=cars[0];
  randomPolosa=Math.floor(Math.random() * 4);
  polosaN.push(polosa[randomPolosa])
  topPolosa1=-110
  randomCar.style.display="block";
  randomCar.style.left=polosaN+"px"
  randomCar.style.top=topPolosa1+"px"
    }//движение 1-ой машинки 


    if(k>40){//движение 2-ой машинки 
      randomCar2.style.top=topPolosa2+"px"
    randomCar2.style.left=polosaN2+"px"
    }
    if(topPolosa2>570){
      randomCar2.style.display="none";
      randomCar2.style.top=0;
   randomCar2="";
    polosaN2.shift();
    
  randomCar2=cars[1];
  randomPolosa2=Math.floor(Math.random() * 4);
  polosaN2.push(polosa[randomPolosa2])
  topPolosa2=-110
  randomCar2.style.display="block";
  randomCar2.style.left=polosaN2+"px"
  randomCar2.style.top=topPolosa2+"px"
    }//движение 2-ой машинки 

    if(k>50){//движение 3-ой машинки 
      randomCar3.style.top=topPolosa3+"px"
    randomCar3.style.left=polosaN3+"px"
    }
    if(topPolosa3>570){
      randomCar3.style.display="none";
      randomCar3.style.top=0;
   randomCar3="";
    polosaN3.shift();
  randomCar3=cars[2];
  randomPolosa3=Math.floor(Math.random() * 4);
  polosaN3.push(polosa[randomPolosa3])
  topPolosa3=-110
  randomCar3.style.display="block";
  randomCar3.style.left=polosaN3+"px"
  randomCar3.style.top=topPolosa3+"px"
    }//движение 3-ой машинки 


    


    if(k>60){//движение 4-ой машинки или бонуса
      
      randomCar4.style.top=topPolosa4+"px"
    randomCar4.style.left=polosaN4+"px"
    }
    if(topPolosa4>570){
      randomCar4.style.display="none";
      randomCar4.style.top=0;
   randomCar4="";
    polosaN4.shift();
    
    randomCarz=Math.floor(Math.random() * 2);
    randomCar4=randomCar44[randomCarz]
    randomPolosa4=Math.floor(Math.random() * 4);
  polosaN4.push(polosa[randomPolosa4])
  topPolosa4=-110
  randomCar4.style.display="block";
  randomCar4.style.left=polosaN4+"px"
  randomCar4.style.top=topPolosa4+"px"
    }//движение 4-ой машинки или бонуса
    
    if(left1<0){//движение машинки до пределов поля
      left1=0
    }
    if(left1>350-54){
      left1=350-54
    }
    if(top1>445){
      top1=445
    }
    if(top1<0){
      top1=0
    }//движение машинки до пределов поля
    //столкновения
    if(top1<=topPolosa1+100 && left1+54>=polosaN[0] && left1<=polosaN[0]+52){
     igra=2
     clearInterval(x);
     car.src="/kresh.png"
     car.style.transform="rotate("+ -25+ "deg)";
     randomCar.style.display="none";
     randomCar2.style.display="none";
     randomCar3.style.display="none";
     randomCar4.style.display="none";
          }
    if(top1<=topPolosa2+100 && left1+54>=polosaN2[0] && left1<=polosaN2[0]+52){
      igra=2
      car.src="/kresh.png"
     car.style.transform="rotate("+ -25+ "deg)";
          }
    if(top1<=topPolosa3+100 && left1+54>=polosaN3[0] && left1<=polosaN3[0]+52){
      igra=2
      car.src="/kresh.png"
     car.style.transform="rotate("+ -25+ "deg)";
          }
    if(top1>=topPolosa4+55&&top1<=topPolosa4+60 && left1+54>=polosaN4[0] && left1<=polosaN4[0]+45 && randomCar4===randomCar44[1] ){
      randomCar4.style.display="none";
      point.value++//подсчет очков
      
          }
    if(top1<=topPolosa4+100 && left1+54>=polosaN4[0] && left1<=polosaN4[0]+52){
      igra=2
      car.src="/kresh.png"
     car.style.transform="rotate("+ -25+ "deg)";
          }
          if(igra===2){
           // igra=1
           // car.style.top=410+"px"
           // car.style.left=147+"px"
            
           // car.src="/Pngtree.png"
           // car.style.transform="rotate("+ 0+ "deg)";
          
          }
        }
  

