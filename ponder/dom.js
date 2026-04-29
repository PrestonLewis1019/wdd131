let title = document.querySelector('h1');

console.log(title);

title.textContent= "Web Page Compotnents";




// document.querySelector('#topics').style.color = 'red';

const topics = document.querySelector('#topics');

topics.style.color = 'Purple';

const content = document.getElementById("content");
content.style.color.backgroundColor = 'Lightblue';

let list = document.querySelector(".list");

list.style.border = "3px solid black"

let para = document.querySelector('p');



para.style.fontSize = '2em';

para.classList.add('background');
const image = document.querySelector('img');

image.setAttribute('src', 'images/new_photos.jpg');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})

const dropdown = document.querySelector("#webdevlist");
 const html = document.querySelector('#html');
 const css = document.querySelector('#css');
 const js = document.querySelector('#js');



dropdown.addEventListener('change' , function (){
    let dropdownValue = selectElem.value;
    html.style.color= "purple";
    css.style.color= "purple";
    js.style.color= "purple";
 console.log(dropdownValue)
    let codeValue= dropdown.value;
document.getElementById(dropdownValue) .style.color = 'red' 
});