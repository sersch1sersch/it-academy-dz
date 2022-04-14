
  "use strict";
  let button=document.querySelector('.button');
  button.addEventListener("click",pos)
    function pos( ) {
    let t=document.querySelector('.divs') ;
    t.style.display="none"
    var form=document.forms.FPos;
    var q=form.elements.Radius.value;//развер часов
  var red=document.createElement('RED');
  red.style.width=q+"px";
  red.style.height=q+"px";
  red.style.backgroundColor="yellow";
  red.style.position="absolute";
  red.style.borderRadius="50%";
  let body=document.querySelector('.body');
  //1 круг
  let green=document.createElement("div");
  green.style.backgroundColor="green";
  green.style.position="absolute";
  green.style.borderRadius="50%";
  green.style.width=(q/10)+"px";
  green.style.height=(q/10)+"px";
  green.style.zIndex="10";
  let e=document.createElement('div');
  e.textContent=12;
  e.style.position="absolute";
  green.appendChild(e);
  let r=0;//угол
  body.appendChild(green);
  body.appendChild(red);
  var radius=parseFloat(q/2.5);
  var angle=parseFloat(r)/180*Math.PI;
  var redCenterX=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX=redCenterX+radius*Math.sin(angle);
  var greenCenterY=redCenterY-radius*Math.cos(angle);
  green.style.left=Math.round(greenCenterX-green.offsetWidth/2)+'px';
  e.style.top=(green.offsetWidth/2-9)+"px";
  e.style.left=(green.offsetWidth/2-8)+"px";
  green.style.top=Math.round(greenCenterY-green.offsetHeight/2)+'px';
  
       //2 круг 
  let green2=document.createElement("div");
  green2.style.backgroundColor="green";
  green2.style.position="absolute";
  green2.style.borderRadius="50%";
  green2.style.width=(q/10)+"px";
  green2.style.height=(q/10)+"px";
  green2.style.zIndex="10";
  let e2=document.createElement('div');
  e2.textContent=1;
  e2.style.top=(green.offsetWidth/2-9)+"px";
  e2.style.position="absolute";
  e2.style.left=(green.offsetHeight/2-4)+"px";
  green2.appendChild(e2);
  let r2=30;//угол
  var angle2=parseFloat(r2)/180*Math.PI;
  var redCenterX2=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY2=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX2=redCenterX+radius*Math.sin(angle2);
  var greenCenterY2=redCenterY-radius*Math.cos(angle2);
  green2.style.left=Math.round(greenCenterX2-green.offsetWidth/2)+'px';
  green2.style.top=Math.round(greenCenterY2-green.offsetHeight/2)+'px';
  body.appendChild(green2);
  //3 круг 
  let green3=document.createElement("div");
  green3.style.backgroundColor="green";
  green3.style.position="absolute";
  green3.style.borderRadius="50%";
  green3.style.width=(q/10)+"px";
  green3.style.height=(q/10)+"px";
  green3.style.zIndex="10";
  let e3=document.createElement('div');
  e3.textContent=2;
  e3.style.top=(green.offsetWidth/2-9)+"px";
  e3.style.position="absolute";
  e3.style.left=(green.offsetHeight/2-4)+"px";
  green3.appendChild(e3);
  let r3=60;//угол
  var angle3=parseFloat(r3)/180*Math.PI;
  var redCenterX3=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY3=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX3=redCenterX+radius*Math.sin(angle3);
  var greenCenterY3=redCenterY-radius*Math.cos(angle3);
  green3.style.left=Math.round(greenCenterX3-green.offsetWidth/2)+'px';
  green3.style.top=Math.round(greenCenterY3-green.offsetHeight/2)+'px';
  body.appendChild(green3);
  //4 круг 
  let green4=document.createElement("div");
  green4.style.backgroundColor="green";
  green4.style.position="absolute";
  green4.style.borderRadius="50%";
  green4.style.width=(q/10)+"px";
  green4.style.height=(q/10)+"px";
  green4.style.zIndex="10";
  let e4=document.createElement('div');
  e4.textContent=3;
  e4.style.top=(green.offsetWidth/2-9)+"px";
  e4.style.position="absolute";
  e4.style.left=(green.offsetHeight/2-4)+"px";
  green4.appendChild(e4);
  let r4=90;//угол
  var angle4=parseFloat(r4)/180*Math.PI;
  var redCenterX4=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY4=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX4=redCenterX+radius*Math.sin(angle4);
  var greenCenterY4=redCenterY-radius*Math.cos(angle4);
  green4.style.left=Math.round(greenCenterX4-green.offsetWidth/2)+'px';
  green4.style.top=Math.round(greenCenterY4-green.offsetHeight/2)+'px';
  body.appendChild(green4);
  //5 круг 
  let green5=document.createElement("div");
  green5.style.backgroundColor="green";
  green5.style.position="absolute";
  green5.style.borderRadius="50%";
  green5.style.width=(q/10)+"px";
  green5.style.height=(q/10)+"px";
  green5.style.zIndex="10";
  let e5=document.createElement('div');
  e5.textContent=4;
  e5.style.top=(green.offsetWidth/2-9)+"px";
  e5.style.position="absolute";
  e5.style.left=(green.offsetHeight/2-4)+"px";
  green5.appendChild(e5);
  let r5=120;//угол
  var angle5=parseFloat(r5)/180*Math.PI;
  var redCenterX5=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY5=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX5=redCenterX+radius*Math.sin(angle5);
  var greenCenterY5=redCenterY-radius*Math.cos(angle5);
  green5.style.left=Math.round(greenCenterX5-green.offsetWidth/2)+'px';
  green5.style.top=Math.round(greenCenterY5-green.offsetHeight/2)+'px';
  body.appendChild(green5);
  //6 круг 
  let green6=document.createElement("div");
  green6.style.backgroundColor="green";
  green6.style.position="absolute";
  green6.style.borderRadius="50%";
  green6.style.width=(q/10)+"px";
  green6.style.height=(q/10)+"px";
  green6.style.zIndex="10";
  let e6=document.createElement('div');
  e6.textContent=5;
  e6.style.top=(green.offsetWidth/2-9)+"px";
  e6.style.position="absolute";
  e6.style.left=(green.offsetHeight/2-4)+"px";
  green6.appendChild(e6);
  let r6=150;//угол
  var angle6=parseFloat(r6)/180*Math.PI;
  var redCenterX6=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY6=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX6=redCenterX+radius*Math.sin(angle6);
  var greenCenterY6=redCenterY-radius*Math.cos(angle6);
  green6.style.left=Math.round(greenCenterX6-green.offsetWidth/2)+'px';
  green6.style.top=Math.round(greenCenterY6-green.offsetHeight/2)+'px';
  body.appendChild(green6);
  //7 круг 
  let green7=document.createElement("div");
  green7.style.backgroundColor="green";
  green7.style.position="absolute";
  green7.style.borderRadius="50%";
  green7.style.width=(q/10)+"px";
  green7.style.height=(q/10)+"px";
  green7.style.zIndex="10";
  let e7=document.createElement('div');
  e7.textContent=6;
  e7.style.top=(green.offsetWidth/2-9)+"px";
  e7.style.position="absolute";
  e7.style.left=(green.offsetHeight/2-4)+"px";
  green7.appendChild(e7);
  let r7=180;//угол
  var angle7=parseFloat(r7)/180*Math.PI;
  var redCenterX7=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY7=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX7=redCenterX+radius*Math.sin(angle7);
  var greenCenterY7=redCenterY-radius*Math.cos(angle7);
  green7.style.left=Math.round(greenCenterX7-green.offsetWidth/2)+'px';
  green7.style.top=Math.round(greenCenterY7-green.offsetHeight/2)+'px';
  body.appendChild(green7);
  //8 круг 
  let green8=document.createElement("div");
  green8.style.backgroundColor="green";
  green8.style.position="absolute";
  green8.style.borderRadius="50%";
  green8.style.width=(q/10)+"px";
  green8.style.height=(q/10)+"px";
  green8.style.zIndex="10";
  let e8=document.createElement('div');
  e8.textContent=7;
  e8.style.top=(green.offsetWidth/2-9)+"px";
  e8.style.position="absolute";
  e8.style.left=(green.offsetHeight/2-4)+"px";
  green8.appendChild(e8);
  let r8=210;//угол
  var angle8=parseFloat(r8)/180*Math.PI;
  var redCenterX8=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY8=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX8=redCenterX+radius*Math.sin(angle8);
  var greenCenterY8=redCenterY-radius*Math.cos(angle8);
  green8.style.left=Math.round(greenCenterX8-green.offsetWidth/2)+'px';
  green8.style.top=Math.round(greenCenterY8-green.offsetHeight/2)+'px';
  body.appendChild(green8);
  //9 круг 
  let green9=document.createElement("div");
  green9.style.backgroundColor="green";
  green9.style.position="absolute";
  green9.style.borderRadius="50%";
  green9.style.width=(q/10)+"px";
  green9.style.height=(q/10)+"px";
  green9.style.zIndex="10";
  let e9=document.createElement('div');
  e9.textContent=8;
  e9.style.top=(green.offsetWidth/2-9)+"px";
  e9.style.position="absolute";
  e9.style.left=(green.offsetHeight/2-4)+"px";
  green9.appendChild(e9);
  let r9=240;//угол
  var angle9=parseFloat(r9)/180*Math.PI;
  var redCenterX9=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY9=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX9=redCenterX+radius*Math.sin(angle9);
  var greenCenterY9=redCenterY-radius*Math.cos(angle9);
  green9.style.left=Math.round(greenCenterX9-green.offsetWidth/2)+'px';
  green9.style.top=Math.round(greenCenterY9-green.offsetHeight/2)+'px';
  body.appendChild(green9);
  //10 круг 
  let green10=document.createElement("div");
  green10.style.backgroundColor="green";
  green10.style.position="absolute";
  green10.style.borderRadius="50%";
  green10.style.width=(q/10)+"px";
  green10.style.height=(q/10)+"px";
  green10.style.zIndex="10";
  let e10=document.createElement('div');
  e10.textContent=9;
  e10.style.top=(green.offsetWidth/2-9)+"px";
  e10.style.position="absolute";
  e10.style.left=(green.offsetHeight/2-4)+"px";
  green10.appendChild(e10);
  let r10=270;//угол
  var angle10=parseFloat(r10)/180*Math.PI;
  var redCenterX10=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY10=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX10=redCenterX+radius*Math.sin(angle10);
  var greenCenterY10=redCenterY-radius*Math.cos(angle10);
  green10.style.left=Math.round(greenCenterX10-green.offsetWidth/2)+'px';
  green10.style.top=Math.round(greenCenterY10-green.offsetHeight/2)+'px';
  body.appendChild(green10);
  //11 круг 
  let green11=document.createElement("div");
  green11.style.backgroundColor="green";
  green11.style.position="absolute";
  green11.style.borderRadius="50%";
  green11.style.width=(q/10)+"px";
  green11.style.height=(q/10)+"px";
  green11.style.zIndex="10";
  let e11=document.createElement('div');
  e11.textContent=10;
  e11.style.top=(green.offsetWidth/2-9)+"px";
  e11.style.position="absolute";
  e11.style.left=(green.offsetWidth/2-8)+"px";
  green11.appendChild(e11);
  let r11=300;//угол
  var angle11=parseFloat(r11)/180*Math.PI;
  var redCenterX11=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY11=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX11=redCenterX11+radius*Math.sin(angle11);
  var greenCenterY11=redCenterY11-radius*Math.cos(angle11);
  green11.style.left=Math.round(greenCenterX11-green.offsetWidth/2)+'px';
  green11.style.top=Math.round(greenCenterY11-green.offsetHeight/2)+'px';
  body.appendChild(green11);
  //12 круг 
  let green12=document.createElement("div");
  green12.style.backgroundColor="green";
  green12.style.position="absolute";
  green12.style.borderRadius="50%";
  green12.style.width=(q/10)+"px";
  green12.style.height=(q/10)+"px";
  green12.style.zIndex="10";
  let e12=document.createElement('div');
  e12.textContent=11;
  e12.style.top=(green.offsetWidth/2-9)+"px";
  e12.style.position="absolute";
  e12.style.left=(green.offsetWidth/2-8)+"px";
  green12.appendChild(e12);
  let r12=330;//угол
  var angle12=parseFloat(r12)/180*Math.PI;
  var redCenterX12=red.offsetLeft+red.offsetWidth/2;//центры красного
  var redCenterY12=red.offsetTop+red.offsetHeight/2;//центры красного
  var greenCenterX12=redCenterX12+radius*Math.sin(angle12);
  var greenCenterY12=redCenterY12-radius*Math.cos(angle12);
  green12.style.left=Math.round(greenCenterX12-green.offsetHeight/2)+'px';
  e12.style.top=(green.offsetWidth/2-9)+"px";
  e12.style.position="absolute";
  e12.style.left=(green.offsetWidth/2-8)+"px";
  green12.style.top=Math.round(greenCenterY12-green.offsetWidth/2)+'px';
  body.appendChild(green12);
  
  //секундная стрелка
  let sec=document.createElement("div");
  sec.style.width=q/2.2+"px";
  sec.style.height="1px";
  sec.style.position="absolute";
  sec.style.backgroundColor="black";
  sec.style.top=redCenterX+"px";
  sec.style.left=redCenterY+"px";
  sec.style.transform=" rotate(-90deg) ";
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
  min.style.transform=" rotate(-60deg) ";
  min.style.transformOrigin=" 0 0 ";
  min.style.zIndex="15";
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
  hours1.style.transform=" rotate(-30deg) ";
  hours1.style.transformOrigin=" 0 0 ";
  hours1.style.zIndex="15";
  body.appendChild(hours1)
  
  
  
  setInterval(updateTime,1000);
  
  let divTime=document.createElement("div");
  divTime.className="time"
  red.appendChild(divTime);
    
  function updateTime() {
  var currTime=new Date();
  var currTimeStr=formatDateTime(currTime);  
  divTime.innerHTML=currTimeStr;
  divTime.style.position="absolute"
  divTime.style.top=q/6+"px";
  divTime.style.left=(q/2 - 27)+"px";
  divTime.style.zIndex='10'
  }
      
  function formatDateTime(dt) {
  var hours=dt.getHours();
  var minutes=dt.getMinutes();
  var seconds=dt.getSeconds();
  return   str0l(hours,2) + ':' + str0l(minutes,2) + ':' + str0l(seconds,2);
  }
      
  function str0l(val,len) {
  var strVal=val.toString();
  while ( strVal.length < len )
      strVal='0'+strVal;
  return strVal;
  }
  }
    
  