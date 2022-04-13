let divs=document.querySelector('.div');
let input = document.querySelector('.input');
let button = document.querySelector('.button');

let q=input.value;


button.addEventListener('click', deleteButton);
function deleteButton(){
    let input = document.querySelector('.input');
    let q=input.value;
    let divs=document.querySelector('.divs');
    divs.style.display="none";
    let divChasi=document.createElement("div");
    divChasi.style.position="absolute";
    divChasi.style.height=q+'px';
    divChasi.style.width=q+'px';
    divChasi.style.backgroundColor="yellow";
    divChasi.style.borderRadius="50%";
    var x=divChasi.offsetLeft+divChasi.offsetWidth/2;
    console.log(x)//непонимаю почему он не ищет координаты центра желтого круга?
    setInterval(updateTime,1000);
    
        
        let zifri=document.createElement("div");
        
        zifri.style.position="absolute";
        zifri.style.height=q/9+'px';
        zifri.style.width=q/9+'px';
        zifri.style.backgroundColor="green";
        zifri.style.borderRadius="50%";
        zifri.style.zIndex='10'
        let angleValue=0;
        let radiusValue=100;
        var radius=parseFloat(radiusValue);
        var angle=parseFloat(angleValue)/180*Math.PI;
        
        var x=divChasi.offsetLeft+divChasi.offsetWidth/2;
    
        
        
        var yellowCenterY=divChasi.offsetTop+divChasi.offsetHeight/2;
      
        var greenCenterX=x+radius*Math.sin(angle);
        var greenCenterY=yellowCenterY-radius*Math.cos(angle);

        zifri.style.left=Math.round(greenCenterX-zifri.offsetWidth/2)+'px';
        zifri.style.top=Math.round(greenCenterY-zifri.offsetHeight/2)+'px';
        divChasi.appendChild(zifri)
    
    
   
    
    
   
    
    let body=document.querySelector(".body");
    divChasi.appendChild(zifri)
    body.appendChild(divChasi);
    

}
let body=document.querySelector(".body");



let divTime=document.createElement("div");
        body.appendChild(divTime);
    function updateTime() {
        var currTime=new Date();
        var currTimeStr=formatDateTime(currTime);
        
        let input = document.querySelector('.input');
        let q=input.value;

        divTime.innerHTML=currTimeStr;
        divTime.style.position="absolute"
        divTime.style.top=q/6+"px";
        divTime.style.left=(q/2 - 22)+"px";
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


    