"use strict"
function HashStorageFunc() {
    var storage={};
    this.addValue = function(key,value) {
storage[key]=value
    }
    this.getValue= function(key){
       return storage[key]
    }
    this.deleteValue= function(key) {
      if(String(key) in storage)
        return delete storage[key];
        return false;
    }
    this.getKeys= function(){
        console.log(Object.keys(storage))
    }
  }
  var drink=new HashStorageFunc();
