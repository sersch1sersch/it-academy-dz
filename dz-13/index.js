
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
    alert(drinkStorage.getKeys().join('\n'))
  }
        function HashStorageFunk() {
          let storage = {};
            this.addValue = function(key,value) {
             storage[key]=value
            }
            this.getValue= function(key){
              if(key in storage)
              return storage[key]
            }
            this.deleteValue= function(key) {
              if(String(key) in storage){
               return delete storage[key]}
               else 
               return false
            }
            this.getKeys= function(){
            return Object.keys(storage)
            }
        }
        var drinkStorage = new HashStorageFunk();




//let info = document.querySelector('.text');
//let button1 = document.querySelector('.btn1');
    
 //     if(alcogol===true)
  //    alcogol='да'
  //    else
  //    alcogol='нет';
   //   drinkStorage.addValue(napitok,rezept);
  
 //     function HashStorageFunk() {
 //       let storage = {};
 //       
 //         this.addValue = function(key,value) {
 //          storage[key]=value
 //         }
 //         this.getValue= function(key){
 //           if(key in storage){
 //           console.log(storage[key])
 //         }
 //            else
 //           return info.textContent ='такого напитка нет в хранилище'
 //         }
 //         this.deleteValue= function(key) {
 //           if(String(key) in storage){
 //             return info.textContent ='напиток удален из хранилища',
 //             delete storage[key];}
 //             return info.textContent ='такого напитка вообще небыло в хранилище';
 //         }
 //         this.getKeys= function(){
 //             info.innerHTML=(Object.keys(storage))
 //         }
 //       this.sbros =function(){
 //         info.innerHTML = ''
 //     }
 //     }
//        var drinkStorage=new HashStorageFunk();


//13.1
//function addNapitok(){
//  var napitok=prompt('Ввeдите название напитка');
//  var rezept =prompt('Ввeдите рецепт напитка');
//  var alcogol =confirm('Напиток алкогольный или нет');
// if(alcogol===true)
 //    alcogol='да';
 //   else
 //     alcogol='нет';
 // drinkStorage.addValue(napitok,{'рецепт:': rezept,'алкогольный:': alcogol});
//}
//  function infoNapitok(){
//    var napitok=prompt('Ввeдите название напитка');
//    var  q = drinkStorage.getValue(napitok);
 //     var rez=Object.values(q)[0];
 //     var alc=Object.values(q)[1];
 //   alert('напиток : ' + napitok + '\n' + 'рецепт приготовления : '+ rez + '\n' + 'алкогольный : ' + alc)
 // }
 // function delNapitok(){
 //   var napitok=prompt('Ввeдите название напитка');
 //   if(drinkStorage.deleteValue(napitok)===true)
  //  alert('напиток успешно удален из хранилища');
  //  else
  //  alert('такой напиток отсутствует в хранилище');
  //}
 // function perNapitok(){
  //  alert(drinkStorage.getKeys().join('\n'))
  //}
  //      function HashStorageFunk() {
  //        let storage = {};
   //         this.addValue = function(key,value) {
  //           storage[key]=value
   //         }
   //         this.getValue= function(key){
    //          if(key in storage)
    //          return storage[key]
    //        }
    //        this.deleteValue= function(key) {
    //          if(String(key) in storage){
     //          return delete storage[key]}
     //          else 
     //          return false
     //       }
     //       this.getKeys= function(){
     //       return Object.keys(storage)
     //       }
     //   }
     //   var drinkStorage = new HashStorageFunk();