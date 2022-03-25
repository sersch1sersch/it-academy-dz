"use strict"
 
let info = document.querySelector('.text');

let button1 = document.querySelector('.btn1');


function sbros(){
    info.innerHTML = ''
}

      function HashStorage() {
      let storage = {};
        this.addValue = function(napitok,rezept,alcogol) {
            var napitok=prompt('Ввeдите название напитка');
        var rezept =prompt('Ввeдите рецепт напитка');
        var alcogol =confirm('Напиток алкогольный или нет');
        if(alcogol===true)
        alcogol = 'да'
        else 
         alcogol = 'нет';
        storage[napitok]={'рецепт':rezept,'алкогольный':alcogol}
        }
        this.getValue= function(napitok){
          var napitok=prompt('Ввeдите название напитка');
    
          if(napitok in storage){
            
            info.textContent = 'напиток '+[napitok] + '\n' + JSON.stringify(storage[napitok])
        }
           else
          return 'такого напитка нет в хранилище'
           
        }
        this.deleteValue= function(napitok) {
          var napitok=prompt('Ввeдите название напитка');
    
          if(String(napitok) in storage)
            return delete storage[napitok];
            return false;
        }
        this.getKeys= function(){
            info.innerHTML=(Object.keys(storage))
        }
      }
      var drinkStorage=new HashStorage();
    
    
 
