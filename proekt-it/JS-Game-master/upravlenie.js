document.body.addEventListener("keydown", (a) => {//управление главной машинкой
    if (a.key === 'ArrowDown')
    speedY=5
      if (a.key === 'ArrowUp')
      speedY=-5
      if (a.key === 'ArrowLeft'){
      speedX=-5
      car.style.transform="rotate("+ -10 + "deg)";
      }
        if (a.key === 'ArrowRight'){
        speedX=5
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