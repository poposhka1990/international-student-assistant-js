const questionGroup = [
    'Документы', 'Правила пребывания в России', 'Поступление', 'Обучение', 'Проживание',
] 

const text = [ 'Здорова, бандит!']

const questionLabel = document.querySelector('.question__container')
const optionLabel = document.querySelector('.option__container')

questionLabel.textContent = 'Выберите тему вопроса'

questionGroup.forEach((element) => {
    const option = document.createElement('button')
    option.classList.add('question')
    option.textContent = element
    optionLabel.appendChild(option)
})


