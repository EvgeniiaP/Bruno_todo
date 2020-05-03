var arrToDo=[];
var oldList=[];
let Black = false;

getList();
document.querySelector(".input__btn").addEventListener('click', addTextToDo); 
document.querySelector(".btn-rem").addEventListener('click', removeToDo);
document.querySelector(".header__btn-changeColor").addEventListener('click', ChangeTheme);

function addTextToDo(){
  var newTextItem=document.querySelector('.input__text').value;
  addItemBlock(newTextItem);
  }
function addItemBlock(newTextItem){ 
       let newDiv = document.createElement('div');
       newDiv.className='item';
       newTextItem = newTextItem[0].toUpperCase() + newTextItem.slice(1);
       newDiv.innerHTML=`<p>${newTextItem}</p>  <button onclick="removeToDo(this)" class='btn-rem'>Сделано!</button>`;
       document.querySelector('.list-items').appendChild(newDiv); 
       document.querySelector('.input__text').value='';
       arrToDo.push(newTextItem);
      saveStorageItems(arrToDo);
       
}
function removeToDo(x){
  let oldBlock = x.closest('.item');//нашли родителя кнопки
  let Done=x.previousElementSibling;//нашли предыдущий эл-т, это p
  let TextDone=Done.innerText;
  arrToDo=arrToDo.filter(item => item!=TextDone);
  oldBlock.remove();
  saveStorageItems(arrToDo);
}

function saveStorageItems(arrToDo){
  localStorage.setItem('listToDo', JSON.stringify(arrToDo));
}

function getList(){
   let liststring = localStorage.getItem('listToDo');
     if (liststring===null){ 
         return
        } 
    oldList=JSON.parse(liststring);
    oldList.forEach(addItemBlock);
    }
    
function ChangeTheme(){
  let styleElement = document.querySelector('#theme-style');
  if (Black) {
    styleElement.setAttribute("href", "style.css");
  } else{
    styleElement.setAttribute("href", "style2.css");
  }
  Black=!Black;
};