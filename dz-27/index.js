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
      span1.innerHTML ='Введите пожалуйста разработчика не более 20 символов!';
      EO.preventDefault(); 
    }
  if(input1Value===''){
    span1.innerHTML ='заполните пустую форму';
    EO.preventDefault();
  }
  else {
    span2.innerHTML ='';
  }
      if ( input2Value.length>20) {
        span2.innerHTML ='Введите пожалуйста разработчика не более 20 символов!';
        EO.preventDefault();
       }
       if(input2Value===''){
          span2.innerHTML ='заполните пустую форму';
          EO.preventDefault(); 
        }
        else {
          span2.innerHTML ='';
        }

        if ( input3Value.length>20) {
          span3.innerHTML ='Введите пожалуйста разработчика не более 20 символов!';
          EO.preventDefault(); 
        }
      if(input3Value===''){
        span3.innerHTML ='заполните пустую форму';
        EO.preventDefault();
      }
      else {
        span3.innerHTML ='';
      }
      if(input4Value===''){
        span4.innerHTML ='заполните пустую форму';
        EO.preventDefault();
      }
      else {
        span4.innerHTML ='';
      }
      if(input4Value===''){
        span4.innerHTML ='заполните пустую форму';
        EO.preventDefault();
      }
      else {
        span4.innerHTML ='';
      }
      if(isNaN(input5Value)){
        span5.innerHTML ='заполните пустую форму';
        EO.preventDefault();
      }
      else if(input5Value<0){
        span5.innerHTML ='Введите пожалуйста в поле корректную цифру!';
        EO.preventDefault();
      }
      else {
        span5.innerHTML ='';
      }
      if(input6Value===''){
        span6.innerHTML ='заполните пустую форму';
        EO.preventDefault();
      }
      else {
        span6.innerHTML ='';
      }
      var input7=form.elements.division;
    var input7Value=input7.value;
      if(input7Value==1){
        span7.innerHTML ='выберите рубрику';
        EO.preventDefault();
      }
      else {
        span7.innerHTML ='';
      }
      if(input8Value===''){
        span8.innerHTML ='выберите размещение';
        EO.preventDefault();
      }
      else {
        span8.innerHTML ='';
      }
      if ( !input9Value ) {
        span9.innerHTML='Вы не согласились с правилами сайта!';
        EO.preventDefault();
    }
else{
  span9.innerHTML='';
}
if(input10Value===''){
  span10.innerHTML ='заполните пустую форму';
  EO.preventDefault();
}
else {
  span10.innerHTML ='';
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

    var input2=form.elements.sitename;
      var input2Value=input2.value;
    input2.addEventListener('blur',sitename);
    function sitename(EO){
      EO=EO||window.event;
      var span2 = document.querySelector('.span2');
      var input2Value=input2.value;
  if(input2Value==="")
      span2.innerHTML ='заполните пустое поле';
  else
      span2.innerHTML ='';
    };
    
      var input3=form.elements.siteurl;
      var input3Value=input3.value;
    input3.addEventListener('blur',siteurl);
    function siteurl(EO){
      EO=EO||window.event;
      var span3 = document.querySelector('.span3');
      var input3Value=input3.value;
  if(input3Value==="")
      span3.innerHTML ='заполните пустое поле';
  else
      span3.innerHTML ='';
    };
    
    var input4=form.elements.Website_launch_date;
    var input4Value=input4.value;
  input4.addEventListener('blur',WebsiteLaunchDate);
  function WebsiteLaunchDate(EO){
    EO=EO||window.event;
    var span4 = document.querySelector('.span4');
    var input4Value=input4.value;
if(input4Value==="")
    span4.innerHTML ='заполните пустое поле';
else
    span4.innerHTML ='';
  };
  var input5=form.elements.visitors;
    var input5Value=parseInt(input5.value.trim());
  input5.addEventListener('blur',visitors);
  function visitors(EO){
    EO=EO||window.event;
    var span5 = document.querySelector('.span5');
    var input5Value=input5.value;
if(input5Value==="")
    span5.innerHTML ='заполните пустое поле';
else
    span5.innerHTML ='';
  };

  var input6=form.elements.email;
  var input6Value=parseInt(input6.value.trim());
input6.addEventListener('blur',email);
function email(EO){
  EO=EO||window.event;
  var span6 = document.querySelector('.span6');
  var input6Value=input6.value;
if(input6Value==="")
  span6.innerHTML ='заполните пустое поле';
else
  span6.innerHTML ='';
};

  var input7=form.elements.division;
    var input7Value=input7.value;
  input7.addEventListener('change', division) 
    function division(EO){
      EO=EO||window.event;
      var input7Value=input7.value;
      var span7 = document.querySelector('.span7');
    if (input7Value==3) {
      input7.className = ('invalid');
      span7.innerHTML ='бытовая техника отсутствует в рубрике'}
    else {
      input7.className = ('valid');
      span7.innerHTML ='';
    }
  };

var input8=form.elements.payment;
for(let i of input8){
i.addEventListener('change', payment);
function payment(EO) {
  EO=EO||window.event;
  var span8 = document.querySelector('.span8');
  var input8Value=input8.value;
  if (i.checked ===true)  {
    if(i.value==1){
    span8.innerHTML = 'в данный момент у нас только платное или VIP размещение';
    document.getElementById('input8').scrollIntoView()
    EO.preventDefault();
  } 
  else
  {
    span8.innerHTML=''
  }
}
}
}

var input9=form.elements.votes;
    var input9Value=input9.checked;
    input9.addEventListener('change',checked);
function checked(EO){
  EO=EO||window.event;
  var span9 = document.querySelector('.span9');
  var input9Value=input9.checked;
if(!input9Value)
  span9.innerHTML ='нам важен ваш отзыв';
else
  span9.innerHTML ='';
};

var input10=form.elements.description;
    input10.addEventListener('blur',description);
function description(EO){
  EO=EO||window.event;
  var span10 = document.querySelector('.span10');
  var input10Value=input10.value;
if(input10Value==="")
  span10.innerHTML ='заполните пустое поле';
else
  span10.innerHTML ='';
};







