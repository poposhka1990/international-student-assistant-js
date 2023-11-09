const DOCUMENTS = [
    {
        name: 'Паспорт',
        image: '../../assets/img/passport.png',
        description: 'Действующий заграничный паспорт',
        validityDate: 'Как правило, 5 лет или 10 лет',
        requirements: `Срок действия паспорта должен истекать не ранее 
            чем через 18 месяцев с начала действия следующей визы`,
        processingTime: 'В среднем один месяц',
        applyDate: `Если вы планируете менять паспорт в России,
            то требуется в среднем 3-4 месяца с учетом последующего восстановления и продления визы`,
        additionalInfo: 'Полное описание требований и законов, наших рекомендаций'
    },
    {
        name: 'Виза',
        image: '../../assets/img/visaForDocuments.png',
        description: 'Учебная виза',
        validityDate: 'До одного года (365 дней)',
        requirements: `Для продления учебной визы необходимо, чтобы паспорт соответствовал требованиям,
        полный комплект документов и своевременная подача документов на продление визы`,
        processingTime: 'В среднем один месяц',
        applyDate: 'не позднее чем за один месяц до окончания текущей визы',
        additionalInfo: 'Полное описание требований и законов, наших рекомендаций'
    }
]

const documentEls = document.querySelector('.about')
const firstDocumentDiv = document.querySelector('.content__block_left')
const descriptionEls = document.querySelectorAll('.description')
const imageEls = document.querySelectorAll('.content__block_image')
const nameEls = document.querySelectorAll('.content__name')
const contentBtn = document.querySelector('.content__button')
imageEls.forEach((el, index) => {
    el.source = DOCUMENTS[index].image
})
nameEls.forEach((el, index) => {
    el.textContent = DOCUMENTS[index].name
})
descriptionEls.forEach((el, index) => {
    el.textContent = DOCUMENTS[index].description
})

contentBtn.addEventListener('click', () => {
    let documentDescriptionList = document.createElement('div')
    documentDescriptionList.innerHTML = `<button class="close" type="button">X</button>
        <ul class="content__description_full">
        <li>${DOCUMENTS[0].name}</li>
        <li>${DOCUMENTS[0].applyDate}</li>
        <li>${DOCUMENTS[0].validityDate}</li>
        <li>${DOCUMENTS[0].processingTime}</li>
        <li>${DOCUMENTS[0].requirements}</li>
        <li>${DOCUMENTS[0].description}</li>
    </ul>`
    firstDocumentDiv.append(documentDescriptionList)

    const closeBtn = document.querySelector('.close')
    closeBtn.addEventListener('click', () =>{
        documentDescriptionList.remove()
    })
})

