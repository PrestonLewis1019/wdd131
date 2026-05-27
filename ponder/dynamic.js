const student = [
    {
        last: 'Lewis',
        first: 'Preston',
    },
    {
        last: 'Clark',
        first: 'John',
    },
    {
        last: 'Smith',
        first: 'Jane',
    }
];

let container = document.querySelector('#student_container');

student.forEach(function(item) {
let name = document.createElement('div');
name.className = 'format';

    let html = `
     <p class= 'details'>${item.first}</p>
     <p class= 'details'>${item.last}</p>
    <hr> 
     `;

     name.innerHTML = html;
     
     container.appendChild(name);

    });