const button = document.getElementById('changeButton'); 
const message = document.getElementById('message'); 

button.addEventListener('click', function () { 
    message.textContent = 'you just click the button, great job!'; 
});
