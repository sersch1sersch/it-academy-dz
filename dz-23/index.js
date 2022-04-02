var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];
var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];
function buildForm(fd){

for(let i=0;i<fd.length;i++){
    let formItem=fd[i];
switch(formItem.kind){
    case'longtext':
    let div = document.createElement('div')
    let lab = document.createElement('label')
lab.innerHTML=formItem.label
let fe = document.createElement('input')
fe.type=formItem.kind
fe.name=formItem.name
lab.appendChild(fe)
div.appendChild(lab)
form.appendChild(div)
break;

case'number':
let div2 = document.createElement('div')
let lab2 = document.createElement('label')
lab2.innerHTML=formItem.label
let fe2 = document.createElement('input')
fe2.type=formItem.kind
fe2.name=formItem.name
lab2.appendChild(fe2)
div2.appendChild(lab2)
form.appendChild(div2)
break;

case'shorttext':
let div3 = document.createElement('div')
let lab3 = document.createElement('label')
lab3.innerHTML=formItem.label
let fe3 = document.createElement('input')
fe3.type=formItem.kind
fe3.name=formItem.name
lab3.appendChild(fe3)
div3.appendChild(lab3)
form.appendChild(div3)
break;

case'combo':
let labs = document.createElement('label')
let div1 = document.createElement('div')
let sel=document.createElement('select')
labs.innerHTML=formItem.label
for(let o=0; o<formItem.variants.length;o++){
let v=formItem.variants[o];
let opt=document.createElement('option')
opt.innerHTML=v.text;
opt.value=v.value;
sel.name=formItem.name
sel.appendChild(opt);
labs.appendChild(sel)
div1.appendChild(labs)
form.appendChild(div1)
}
break;

case'radio':
let div4 = document.createElement('div')
let lab4 = document.createElement('label')
lab4.innerHTML=formItem.label
for(let r=0; r<formItem.variants.length;r++){
let w=formItem.variants[r];
let fe4=document.createElement('input')
let lab5=document.createElement('label')
fe4.type=formItem.kind
fe4.name=formItem.name
fe4.value=w.value
fe4.style.marginRight='10px'
fe4.checked = false;
lab4.appendChild(fe4)
lab4.appendChild(lab5)
lab5.innerHTML=w.text
div4.appendChild(lab4)
form.appendChild(div4)
}
break;

case'check':
let div5 = document.createElement('div')
let lab6 = document.createElement('label')
lab6.innerHTML=formItem.label
let fe5 = document.createElement('input')
fe5.type='checkbox';
fe5.name='votes';
fe5.checked=true
lab6.appendChild(fe5)
div5.appendChild(lab6)
form.appendChild(div5)
break;

case'memo':
let div6 = document.createElement('div')
let div7 = document.createElement('div')
let lab7 = document.createElement('label')
lab7.innerHTML=formItem.label
let tex = document.createElement('textarea')
tex.name='description';
div6.appendChild(lab7)
form.appendChild(div6)
div7.appendChild(tex)
form.appendChild(div7)
break;

case'submit':
let div8 = document.createElement('div')
let fe6 = document.createElement('input')
fe6.value=formItem.caption
fe6.type='submit'
fe6.name='description';
div8.appendChild(fe6)
form.appendChild(div8)
break;
}
}
}

buildForm(formDef1)
buildForm(formDef2)











