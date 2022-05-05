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
    alert('напиток успешно удален из хранилища storage');
    else
    alert('такой напиток отсутствует в хранилище storage');
  }
  function perNapitok(){
    alert(drinkStorage.getKeys())
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
      alert('такое блюдо отсутствует в хранилище storage');
        else {
        var reze=b.recipe;
        var des=b.desserts;
      alert('блюдо : ' + dish + '\n' + 'рецепт приготовления : '+ reze + '\n' + 'десерт : ' + des);
    }
  }
    function delDish(){
      var dish=prompt('Ввeдите название блюда');
      if(dishesStorage.deleteValue(dish)===true)
      alert('блюдо успешно удален из хранилища storage');
      else
      alert('такое блюдо отсутствует в хранилище storage');
    }
    function perDish(){
      alert(dishesStorage.getKeys().join('\n'))
    }
    
    
    
  class LocStorageClass{
    storage ={};
     addValue (key,value) {
       this.storage[key]=value;
      return localStorage.setItem(key,JSON.stringify(value));
       }
     getValue(key){
       console.log(JSON.parse(localStorage.getItem(key)));
      if(key in this.storage)
      return this.storage[key];
     }
     deleteValue(key) {
           if(String(key) in this.storage)
             return delete this.storage[key];
             if(localStorage.getItem(key)!==null){
              localStorage.removeItem(key);
            alert('напиток или блюдо успешно удаленo из  локального хранилища');
            }
            else{
            alert('такой напиток или блюдо отсутствует в локального хранилище');
            }
             return false;  
         }
         getKeys(){
           console.log(Object.keys(this.storage));
           alert( 'в локальном хранилище находятся '+ localStorage.length +' напитков или блюд');
           for ( var i=0; i<localStorage.length; i++ ) {
            var k=localStorage.key(i);
            alert(k)
         // console.log( "в локальном хранилище у напитка или блюда: "+k+","+" рецепт: "+(localStorage[k]) )
       }
           return Object.keys(this.storage);
         }}
        // setItem(key,value){
        // return localStorage.setItem(key,value)
        // }
        // getItem(key){
        //   return localStorage.getItem(key)
        // }
        // removeItem(key){
          //return localStorage.removeItem(key); 
         //}
         //length(){
           //return localStorage.length
         //}
      

           let dishesStorage = new LocStorageClass();
           let drinkStorage = new LocStorageClass();