const visaInput = document.getElementById('visa-date');
const passportInput = document.getElementById('passport-date');
const button = document.getElementsByClassName('form__button');


visaInput.addEventListener('input', (event) => {
    const visaExpiryDate = visaInput.value
    console.log(visaExpiryDate)
});

passportInput.addEventListener('input', (event) => {
    const passportExpiryDate = passportInput.value
    console.log(passportExpiryDate)
});

button.addEventListener('onclick', (event) => {
    
})