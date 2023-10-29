const visaInput = document.querySelector('#visa-date')
const passportInput = document.querySelector('#passport-date')
const button = document.querySelector('.form__button')


visaInput.addEventListener('input', (event) => {
    const visaExpiryDate = visaInput.value
    console.log(visaExpiryDate)
})

passportInput.addEventListener('input', (event) => {
    const passportExpiryDate = passportInput.value
    console.log(passportExpiryDate)
})

button.addEventListener('click', (event) => {
    
})