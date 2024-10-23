const form   = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event){
    event.preventDefault();
    successMessage.style.display = 'block';
})