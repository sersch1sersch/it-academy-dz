"use strict"
 
let info = document.querySelector('.text');

let button1 = document.querySelector('.btn1');


function sbros(){
    info.innerHTML = ''
}

 

//13.1

//function HashStorageFunc() {
//    var storage={};
//    this.addValue = function(key,value) {
//storage[key]=value
//    }
//    this.getValue= function(key){
//       return storage[key]
//    }
//    this.deleteValue= function(key) {
//      if(String(key) in storage)
//        return delete storage[key];
//        return false;
//    }
//    this.getKeys= function(){
//        console.log(Object.keys(storage))
//    }
//  }
//  var drinkStorage=new HashStorageFunc();


//13.2
class HashStorageClass{
    

    addValue (key,value) {
    this[key]=value
      }
    getValue(key){
           return this[key]
    }
    deleteValue(key) {
          if(String(key) in drinkStorage)
            return delete this[key];
            return false;
        }
        getKeys(){
            console.log(Object.keys(drinkStorage))
        }
      }
      let drinkStorage = new HashStorageClass;
    
    
    //13.3
    
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
      var drink=new HashStorage();
    
    
 
