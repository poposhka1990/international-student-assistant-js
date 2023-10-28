// не получается выынести в модуль ошибка: Cannot use import statement outside a module
const QUESTIONS = [
    {
        question: 'Сколько дней предоставляется иностранному гражданину для постановки на миграционный учёт (оформления регистрации)?',
        options: [ '1 день', '3 дня', '5 дней', '7 дней' ],
        answer: 'fourth',
        correctCommentary: 'Верно! На оформление регистрации предоставляется 7 рабочих дней с момента заселения в общежитие/квартиру. Именно поэтому этот документ полностью называется "отрывной талон уведомления о прибытии иностранного гражданина в место пребывания".',
        wrongCommentary: 'Не отгадали. Правильный ответ - 7 дней. Но мы ценим, что вы даёте нам больше времени.'
    },
    {
        question: 'Я не выезжала(а) из России, но получил новый документ. Сколько у меня дней для переоформления регистрации?',
        options: [ '1 день', '3 дня', '5 дней', '7 дней' ],
        answer: 'second',
        correctCommentary: 'Да, так и есть! 3 дня при переоформлении и 7 дней при въезде в Россию из-за границы.',
        wrongCommentary: 'А вот и неправильно! У вас есть всего 3 дня на это.'
    },
    {
        question: 'Сколько дней оформляется приглашение для визы?',
        options: [ '1 день', '2 недели', '1 месяц', '2 месяца' ],
        answer: 'third',
        correctCommentary: 'Правильно! Один месяц, учитывая составление документов, согласование и оформление.',
        wrongCommentary: 'Неверно, оно оформляется 1 месяц'
    }
]

const question = document.querySelector('h3')
const input = document.querySelectorAll('input')
const firstOptionLabel = document.querySelector('#first')
const secondOptionLabel = document.querySelector('#second')
const thirdOptionLabel = document.querySelector('#third')
const fourthOptionLabel = document.querySelector('#fourth')
const button = document.querySelector('button')
const commentary = document.querySelector('.commentary')
const label = document.querySelectorAll('label')
const result = document.querySelector('.test')

let questionNumberLabel = document.querySelector('.question-number')
let chosenOption = ''
let questionNumber = 0
let chosenInput = ''
let progress = 0

// Почему если переписываю на стандартную функцию, то не работает в блоке setTimeout?
const getNextQuestion = () => {
    if (questionNumber <= QUESTIONS.length - 1) {
        questionNumberLabel.textContent = `${questionNumber + 1} из ${QUESTIONS.length} вопросов`
        question.textContent = QUESTIONS[questionNumber].question
        // Если блоки похожие, то нужно ли обходить циклом?
        firstOptionLabel.textContent = QUESTIONS[questionNumber].options[0]
        secondOptionLabel.textContent = QUESTIONS[questionNumber].options[1]
        thirdOptionLabel.textContent = QUESTIONS[questionNumber].options[2]
        fourthOptionLabel.textContent = QUESTIONS[questionNumber].options[3]
        commentary.textContent = ''
    } else {
        result.innerHTML = `<p>
                             У вас ${progress} правильных ответа из ${QUESTIONS.length} вопросов
                             Узнать все необходимые даты и сроки подробнее можно <a href="../../pages/documents/documents.html">здесь</a>
                          </p>`
    }
}

const uncheckInput = () => {
    input[chosenInput].checked = false
}

const removeStyles = () => {
    label[chosenInput].classList.remove('wrong-answer')
    label[chosenInput].classList.remove('right-answer')
}

getNextQuestion(questionNumber)

input.forEach((element, i, arr) => {
    element.addEventListener('click', () => {
      chosenOption = arr[i].value
      chosenInput = i
    })
})

// Тоже похожие блоки, нужно выносить в функцию для минимизации кода?
button.addEventListener('click', () => {
    if (chosenOption === QUESTIONS[questionNumber].answer) {
        commentary.textContent = QUESTIONS[questionNumber].correctCommentary
        label[chosenInput].classList.add('right-answer')
        progress++
        questionNumber++
        setTimeout(removeStyles, 1000)
        setTimeout(uncheckInput, 1500)
        setTimeout(getNextQuestion, 2500)      
    } else {
        commentary.textContent = QUESTIONS[questionNumber].wrongCommentary
        label[chosenInput].classList.add('wrong-answer')
        questionNumber++
        setTimeout(removeStyles, 1000)
        setTimeout(uncheckInput, 1500)
        setTimeout(getNextQuestion, 2500)    
    }
})