const btn = document.getElementById('submit'),
    form = document.querySelector('.form'),
    name = document.getElementById('name'),
    mail = document.getElementById('email'),
    password = document.getElementById('password'),
    error_name = document.querySelector('.error_name'),
    error_email = document.querySelector('.error_email'),
    error_password = document.querySelector('.error_password'),
    hidden = document.querySelector('.hidden');
  

btn.addEventListener('click', submit);

function submit(event) {
    
    event.preventDefault();
    
    (name.value == /\w/) ? true: error_name.style = 'visibility: visible';
    (mail.value == /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/) ? true: error_email.style = 'visibility: visible';
    (password.value == /^[a-z0-9]{6,}$/) ? true: error_password.style = 'visibility: visible';

    if(name.value && mail.value && password.value) {
        form.style = 'display: none';
        hidden.innerText = `Привет ${name.value}!!!`
        hidden.style = 'display: block';
    }
}