

   // var input1 = form.elements.developers;// находим input1
   // var input1Value=input1.value;// строковое значение input1
   // var input2=form.elements.sitename;// находим input2
   // var input2Value=input2.value;// строковое значение input2
   // var input3=form.elements.siteurl;// находим input3
  //  var input3Value=input3.value;// строковое значение input3
  //  var input4=form.elements.Website_launch_date;// находим input4
   // var input4Value=input4.value;// строковое значение input4
   // var input5=form.elements.visitors;// находим input5
  //  var input5Value=parseInt(input5.value.trim());// числовое значение input5
  //  var input6=form.elements.email;// находим input6
   // var input6Value=input6.value;// строковое значение input6
   // var input7=form.elements.division;// находим input7
  //  var input7Value=input7.value;// строковое значение input7
  //  var input8=form.elements.payment;// находим input8
  //  var input8Value=input8.value;// строковое значение input8
  //  var input9=form.elements.votes;// находим input9
  //  var input9Value=input9.checked;// логическое значение input9
  //  var input10=form.elements.description;// находим input10
  //  var input10Value=input10.value;// строковое значение input10
  //  var span1 = document.querySelector('.span1');
  //  var span2 = document.querySelector('.span2');
  //  var span3 = document.querySelector('.span3');
  //  var span4 = document.querySelector('.span4');
  //  var span5 = document.querySelector('.span5');
  //  var span6 = document.querySelector('.span6');
  //  var span7 = document.querySelector('.span7');
  //  var span8 = document.querySelector('.span8');
  //  var span9 = document.querySelector('.span9');
  //  var span10 = document.querySelector('.span10');

    

    var form=document.forms.form;
  let input1 = form.elements.developers;
  input1.addEventListener('blur',()=>developers(false));
    function developers(focusOnError){
        let errCount=0;
      var span1 = document.querySelector('.span1');
      var input1Value=input1.value;
  if(input1Value===""){
      span1.innerHTML ='заполните пустое поле';
      errCount++;
       if(focusOnError)
      input1.focus();
  }
  else{
      span1.innerHTML ='';
  }
  return errCount;
    };

    var input2=form.elements.sitename;
      var input2Value=input2.value;
    input2.addEventListener('blur',()=>sitename(false));
    function sitename(focusOnError){
        let errCount=0;
      var span2 = document.querySelector('.span2');
      var input2Value=input2.value;
  if(input2Value===""){
      span2.innerHTML ='заполните пустое поле';
      errCount++;
      if(focusOnError)
      input2.focus();
  }
  else{
      span2.innerHTML ='';
  }
  return errCount;
    };
    
      var input3=form.elements.siteurl;
      var input3Value=input3.value;
    input3.addEventListener('blur',()=>siteurl(false));
    function siteurl(focusOnError){
        let errCount=0;
      var span3 = document.querySelector('.span3');
      var input3Value=input3.value;
  if(input3Value===""){
      span3.innerHTML ='заполните пустое поле';
      errCount++;
      if(focusOnError)
      input3.focus();
  }
  else{
      span3.innerHTML ='';
  }
  return errCount;
    };
    
    var input4=form.elements.Website_launch_date;
    var input4Value=input4.value;
  input4.addEventListener('blur',()=>WebsiteLaunchDate(false));
  function WebsiteLaunchDate(focusOnError){
    let errCount=0;
    var span4 = document.querySelector('.span4');
    var input4Value=input4.value;
if(input4Value===""){
    span4.innerHTML ='заполните пустое поле';
    errCount++;
    if(focusOnError)
    input4.focus();
}
else{
    span4.innerHTML ='';
}
return errCount;
  };
  var input5=form.elements.visitors;
    var input5Value=parseInt(input5.value.trim());
  input5.addEventListener('blur',()=>visitors(false));
  function visitors(focusOnError){
    let errCount=0;
    var span5 = document.querySelector('.span5');
    var input5Value=input5.value;
if(input5Value===""){
    span5.innerHTML ='заполните пустое поле';
    errCount++;
  if(focusOnError)
  input5.focus();
}
else{
    span5.innerHTML ='';
}
return errCount;
  };

  var input6=form.elements.email;
  var input6Value=parseInt(input6.value.trim());
input6.addEventListener('blur',()=>email(false));
function email(focusOnError){
    let errCount=0;
  var span6 = document.querySelector('.span6');
  var input6Value=input6.value;
if(input6Value===""){
  span6.innerHTML ='заполните пустое поле';
  errCount++;
  if(focusOnError)
  input6.focus();
}
else{
  span6.innerHTML ='';
}
return errCount;
};

  var input7=form.elements.division;
    var input7Value=input7.value;
  input7.addEventListener('change', ()=>division(false)) 
    function division(focusOnError){
        let errCount=0;
      var input7Value=input7.value;
      var span7 = document.querySelector('.span7');
    if (input7Value==1) {
      span7.innerHTML ='медицина отсутствует в рубрике';
      errCount++;
  if(focusOnError)
  input7.scrollIntoView();
  } 
    else {
      span7.innerHTML ='';
    }
    return errCount;
};

var input8=form.elements.payment;
for(let i of input8){
i.addEventListener('change', ()=>payment(false));
function payment(focusOnError) {
    let errCount=0;
  var span8 = document.querySelector('.span8');
  var input8Value=input8.value;
  if (input8Value==='')  {
    span8.innerHTML = ' выберите размещение';
    i.scrollIntoView();
    errCount++;
   if(focusOnError)
   i.scrollIntoView();
  }
  else
  {
    span8.innerHTML=''
  }

return errCount;
}
}

var input9=form.elements.votes;
    
    input9.addEventListener('change',()=>checked(false));
function checked(focusOnError){
  let errCount=0;
  var span9 = document.querySelector('.span9');
  var input9Value=input9.checked;
if(!input9Value){
  span9.innerHTML ='нам важен ваш отзыв';
  errCount++;
  if(focusOnError)
  input9.scrollIntoView();
}
  else
  {
  span9.innerHTML ='';
  }
  return errCount;
};

var input10=form.elements.description;
    input10.addEventListener('blur',()=>description(false));
function description(focusOnError){
  let errCount=0;
  var span10 = document.querySelector('.span10');
  var input10Value=input10.value;
if(input10Value===""){
  span10.innerHTML ='заполните пустое поле';
  errCount++;
  if(focusOnError)
  input10.focus();
}
else{
  span10.innerHTML ='';
}
return errCount;
};
var form=document.forms.form;
form.addEventListener('submit',validateInfoForm);

function validateInfoForm(EO){
    
    let errCount=0;
    errCount+=developers(!errCount);
    errCount+=sitename(!errCount);
    errCount+=siteurl(!errCount);
    errCount+=WebsiteLaunchDate(!errCount);
    errCount+=visitors(!errCount);
    errCount+=email(!errCount);
    errCount+=division(!errCount);
    errCount+=checked(!errCount);
    errCount+=payment(!errCount);
    errCount+=description(!errCount);
    if(errCount)
    EO.preventDefault();
}