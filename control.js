let form = document.querySelector('form');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
let para = document.querySelector('p');

form.onsubmit = function(e) {
 if (fname.value === '' || lname.value === '') {
 e.preventDefault();
 para.textContent = 'Completá tu usuario y contraseña';
 }
 if(!fname.value.includes('@'))
 e.preventDefault();
 mail.textContent = 'El usuario debe contener @';
}