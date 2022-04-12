let divs=document.querySelector('.div');
let input = document.querySelector('.input');
let button = document.querySelector('.button');

let q=input.value;

console.log(q)
button.addEventListener('click', deleteButton);
function deleteButton(){
    let input = document.querySelector('.input');
    let q=input.value;
    let divs=document.querySelector('.divs');
    divs.style.display="none";
    let canvas = document.createElement("canvas");
    let context=canvas.getContext('2d');
    context.strokeStyle='red';
    context.beginPath();
    let x=q/2 ;
   
    let y= q/2 ;
    let r= q/2;
    canvas.style.width=q+'px';
    canvas.style.height=q+'px';
    context.arc(x,y, r, 0,Math.PI*2, false);
    context.stroke();
    canvas.style.position="relative";
    let body=document.querySelector(".body");
    
    body.appendChild(canvas);
    

}
