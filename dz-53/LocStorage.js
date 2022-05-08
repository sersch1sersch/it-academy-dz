"use strict"
function addNapitok(){
  var napitok=prompt('Ввeдите название напитка');
  var rezept =prompt('Ввeдите рецепт напитка');
  var alcogol =confirm('Напиток алкогольный или нет');
  if(alcogol===true)
     alcogol='да';
    else
      alcogol='нет';
  drinkStorage.addValue(napitok,{'recipe': rezept,'alcogolic': alcogol});
  
  
}
  function infoNapitok(){
    var napitok=prompt('Ввeдите название напитка');
    var  q = drinkStorage.getValue(napitok);
    if(q===undefined)
    alert('такой напиток отсутствует в хранилище');
      else {
      var rez=q.recipe;
      var alc=q.alcogolic;
    alert('напиток : ' + napitok + '\n' + 'рецепт приготовления : '+ rez + '\n' + 'алкогольный : ' + alc);
  }
  
}
  function delNapitok(){
    var napitok=prompt('Ввeдите название напитка');
    if(drinkStorage.deleteValue(napitok)===true)
    alert('напиток успешно удален из хранилища');
    else
    alert('такой напиток отсутствует в хранилище');
  }
  function perNapitok(){
    if(Object.keys(drinkStorage.storage).length == 0){
      return alert('хранилище пусто')
    }
    else{
      alert(drinkStorage.getKeys())
    }
    
  }
  
  function addDish(){
    var dish=prompt('Ввeдите название напитка');
    var rezept =prompt('Ввeдите рецепт напитка');
    var dessert =confirm('блюдо десерт или нет');
    if(dessert===true)
    dessert='да';
      else
      dessert='нет';
        dishesStorage.addValue(dish,{'recipe': rezept,'desserts': dessert});
        
  }
    function infoDish(){
      var dish=prompt('Ввeдите название блюда');
      var  b = dishesStorage.getValue(dish);
      if(b===undefined)
      alert('такое блюдо отсутствует в хранилище');
        else {
        var reze=b.recipe;
        var des=b.desserts;
      alert('блюдо : ' + dish + '\n' + 'рецепт приготовления : '+ reze + '\n' + 'десерт : ' + des);
    }
  }
    function delDish(){
      var dish=prompt('Ввeдите название блюда');
      if(dishesStorage.deleteValue(dish)===true)
      alert('блюдо успешно удален из хранилища ');
      else
      alert('такое блюдо отсутствует в хранилище ');
    }
    function perDish(){
      if(Object.keys(dishesStorage.storage).length == 0){
        return alert('хранилище пусто')
      }
      else{
        alert(dishesStorage.getKeys())
      }
    }
    
    
    
  class LocStorageClass{
    constructor(_lsKeyName){
     this.storage ={};
   this.lsKeyName=_lsKeyName;
    if(localStorage[_lsKeyName])
    this.storage=JSON.parse(localStorage[_lsKeyName])
      
     
    }
    
     addValue (key,value) {
       this.storage[key]=value;
       localStorage[this.lsKeyName]=JSON.stringify(this.storage);
       }
     getValue(key){
       JSON.parse(localStorage.getItem(key));
      if(key in this.storage)
      return this.storage[key];
     }
     deleteValue(key) {
      localStorage[this.lsKeyName]=JSON.stringify(this.storage);
           if(String(key) in this.storage)
             return delete this.storage[key];
             return false;  
         }
         getKeys(){
          
           return Object.keys(this.storage);
         }
         }
        
      

           let dishesStorage = new LocStorageClass('lsDishes');
           let drinkStorage = new LocStorageClass('lsDrink');