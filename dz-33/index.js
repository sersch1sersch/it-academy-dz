"use strict";
let button=document.querySelector('.button');
button.addEventListener("click",pos)
  function pos( ) {
  let divForm=document.querySelector('.divs') ;
  divForm.style.display="none"
  var form=document.forms.FPos;
  var q=form.elements.Radius.value;//коэффициент размера часов
var red=document.createElement('RED');//создаем красный круг
red.style.width=q+"px";
red.style.height=q+"px";
red.style.backgroundColor="red";
red.style.position="absolute";
red.style.borderRadius="50%";
let body=document.querySelector('.body');
body.appendChild(red);
// рисуем зеленые круги
let angles=30;//угол, корректировка для позиционирования первого зеленого круга
let number=1; //цифры в зеленых кругах, начало с первого круга при angles=30
for(let i=0;i<12;i++){
var radius=parseFloat(q/2.5);
let green=document.createElement("div");//создаем зеленый круг
green.style.backgroundColor="green";
green.style.position="absolute";
green.style.borderRadius="50%";
green.style.width=(q/10)+"px";
green.style.height=(q/10)+"px";
green.style.zIndex="10";
let e=document.createElement('div');//создаем div с цифрами в зеленых кругах
e.textContent=number;
e.style.position="absolute";
green.appendChild(e);
body.appendChild(green);
var angle=parseFloat(angles)/180*Math.PI;
var redCenterX=red.offsetLeft+red.offsetWidth/2;//центры красного
var redCenterY=red.offsetTop+red.offsetHeight/2;//центры красного
var greenCenterX=redCenterX+radius*Math.sin(angle);
green.style.left=Math.round(greenCenterX-green.offsetWidth/2)+'px';
var greenCenterY=redCenterY-radius*Math.cos(angle);
e.style.top=(green.offsetWidth/2-9)+"px";//центрирование цифр в зеленых кругах
e.style.left=(green.offsetHeight/2-4)+"px";//центрирование цифр в зеленых кругах
green.style.top=Math.round(greenCenterY-green.offsetHeight/2)+'px';
if(number>=10){//позиционированиу цифр от 10 до 12
e.style.left=(green.offsetHeight/2-8)+"px";}//центрирование цифр в зеленых кругах
angles+=30;
number+=1;

}
//секундная стрелка
let sec=document.createElement("div");
sec.className="sec";
sec.style.width=q/2.2+"px";
sec.style.height="1px";
sec.style.position="absolute";
sec.style.backgroundColor="black";
sec.style.top=redCenterX+"px";
sec.style.left=redCenterY+"px";
sec.style.transformOrigin=" 0 0 ";
sec.style.zIndex="15";
body.appendChild(sec)
//минутная стрелка
let min=document.createElement("div");
min.style.width=q/3+"px";
min.style.height="3px";
min.style.position="absolute";
min.style.backgroundColor="black";
min.style.top=redCenterX+"px";
min.style.left=redCenterY+"px";
min.style.transformOrigin=" 0 0 ";
min.style.zIndex="15";
min.style.borderRadius="30%"
body.appendChild(min)
//часовая стрелка
let hours1=document.createElement("div");
hours1.className="hours1";
hours1.style.width=q/5+"px";
hours1.style.height="6px";
hours1.style.position="absolute";
hours1.style.backgroundColor="black";
hours1.style.top=redCenterX+"px";
hours1.style.left=redCenterY+"px";
hours1.style.borderRadius="30%"
hours1.style.transformOrigin=" 1px 2px ";
hours1.style.zIndex="15";
body.appendChild(hours1)

setInterval(updateTime,1000);

let divTime=document.createElement("div");
divTime.className="time"
red.appendChild(divTime);
function updateTime() {
var currTime=new Date();
var currTimeStr=formatDateTime(currTime);
let secTime=formatDateSec(currTime);//привязка времени к секундной стрелке
let minTime = formatDateMin(currTime);//привязка времени к минутной стрелке
let hours1Time = formatDateHours1(currTime);//привязка времени к часовой стрелке
hours1.style.transform="rotate("+ hours1Time + "deg)";
sec.style.transform="rotate("+ secTime + "deg)";
min.style.transform="rotate("+ minTime + "deg)";
divTime.innerHTML=currTimeStr;
divTime.style.position="absolute";
divTime.style.top=q/6+"px";
divTime.style.left=(q/2 - 27)+"px";
divTime.style.zIndex='10';
}
updateTime();
function formatDateHours1(dt) {
var hours=dt.getHours();
var minutes=dt.getMinutes();
return   -90+(str0l(hours,2))*30 //положение часовой стрелки без учета положения минутной стрелки(целый час)
+ (360/12 /60 *minutes );// корректировка часовой стрелки с учетом минутной стрелки

}
function formatDateMin(dt) {
var minutes=dt.getMinutes();
return  -90+(str0l(minutes,2))*6;
}
function formatDateSec(dt) {
var seconds=dt.getSeconds();
return  -90+(str0l(seconds,2))*6;
}
function formatDateTime(dt) {
var hours=dt.getHours();
var minutes=dt.getMinutes();
var seconds=dt.getSeconds();
console.log(str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2));
return   str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
} 
function str0l(val,len) {
var strVal=val.toString();
while ( strVal.length < len )
    strVal='0'+strVal;
return strVal;
}
}