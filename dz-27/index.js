var form=document.forms.form;

form.addEventListener('submit',validateInfoForm,false);

function validateInfoForm(EO){
    EO=EO||window.event;
    var form=document.forms.form;
    var input1 = form.elements.developers;// находим input1
    var input1Value=input1.value;// строковое значение input1
    var input2=form.elements.sitename;// находим input2
    var input2Value=input2.value;// строковое значение input2
    var input3=form.elements.siteurl;// находим input3
    var input3Value=input3.value;// строковое значение input3
    var input4=form.elements.Website_launch_date;// находим input4
    var input4Value=input4.value;// строковое значение input4
    var input5=form.elements.visitors;// находим input5
    var input5Value=parseInt(input5.value.trim());// числовое значение input5
    var input6=form.elements.email;// находим input6
    var input6Value=input6.value;// строковое значение input6
    var input7=form.elements.division;// находим input7
    var input7Value=input7.value;// строковое значение input7
    var input8=form.elements.payment;// находим input8
    var input8Value=input8.value;// строковое значение input8
    var input9=form.elements.votes;// находим input9
    var input9Value=input9.checked;// логическое значение input9
    var input10=form.elements.description;// находим input10
    var input10Value=input10.value;// строковое значение input10
    var span1 = document.querySelector('.span1');
    var span2 = document.querySelector('.span2');
    var span3 = document.querySelector('.span3');
    var span4 = document.querySelector('.span4');
    var span5 = document.querySelector('.span5');
    var span6 = document.querySelector('.span6');
    var span7 = document.querySelector('.span7');
    var span8 = document.querySelector('.span8');
    var span9 = document.querySelector('.span9');
    var span10 = document.querySelector('.span10');

    

    if ( input1Value.length>20) {
      span1.innerHTML ='Введите пожалуйста ФИО не более 20 символов!';
      EO.preventDefault(); 
    }
  if(input1Value===''){
    span1.innerHTML ='заполните пустую форму';
    EO.preventDefault();
  }
      if ( input2Value.length>20) {
        span2.innerHTML ='Введите пожалуйста ФИО не более 20 символов!';
        EO.preventDefault();
       }
        if(input2Value===''){
          span2.innerHTML ='заполните пустую форму';
          EO.preventDefault(); 
        }
        if ( input3Value.length>20) {
          span3.innerHTML ='Введите пожалуйста ФИО не более 20 символов!';
          EO.preventDefault(); 
        }
      if(input3Value===''){
        span3.innerHTML ='заполните пустую форму';
        EO.preventDefault();
      }




  }
  
  let input1 = form.elements.developers;
  input1.addEventListener('blur',developers);
    function developers(EO){
      EO=EO||window.event;
      var span1 = document.querySelector('.span1');
      var input1Value=input1.value;
  if(input1Value==="")
      span1.innerHTML ='заполните пустое поле';
  else
      span1.innerHTML ='';
    };
    let input2 = form.elements.developers;
    input2.addEventListener('blur',sitename);
      function sitename(EO){
        EO=EO||window.event;
        var span2 = document.querySelector('.span2');
        var input2Value=input2.value;
    if(input2Value==="")
        span2.innerHTML ='заполните пустое поле';
    else
        span2.innerHTML ='';
      }
  
  

    
    

    

    




// input1.addEventListener('blur',()=>developers(false));
//function developers(focusOnError){
  
//  let span1 = document.querySelector('.span1');
//  if(input1Value===""){
//    span1.innerHTML ='заполните корректно форму';
//    errCount++;
//if(focusOnError)
//input1.focus();
    //EO.preventDefault(); // форма не будет отправлена на сервер
    //input1.style.border = 'solid red 1px';
 // }
 // else{
 //   span1.innerHTML ="";
 // }
//  return errCount;

 // }
//   function nameValid(){};
//   function urlValid(){};
//   function formSubmit(EO){
//let errCount=0;
//errCount+=developers(!errCount);
//errCount+=nameValid(!errCount);
//errCount+=urlValid(!errCount);
//if(errCount)
//EO.preventDefault();
////
//
//   };
  



    


       
    
   
 







