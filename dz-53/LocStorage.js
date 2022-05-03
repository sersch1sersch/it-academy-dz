
  
  class LocStorageClass{
    storage ={};
     addValue (key,value) {
       
    this.storage[key]=value;
       }
     getValue(key){
      if(key in this.storage)
      return this.storage[key];
     }
     deleteValue(key) {
           if(String(key) in this.storage)
             return delete this.storage[key];
             return false;
         }
         getKeys(){
             console.log(Object.keys(this.storage))
         }
       
        setItem(key,value)
         getItem(key)
         removeItem(key)
      }
           let localStorage = new LocStorageClass();
           let drinkStorage = new LocStorageClass();
