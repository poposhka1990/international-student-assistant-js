const scriptEl = document.querySelector('.telegram-post')
const newsEl = document.querySelector('.news')
const buttonEl = document.querySelector('.form__button')

let lastPostNumber = 145
let lastShownPostNumber = 140
const firstPostNumber = 6

for (lastPostNumber; lastPostNumber >= lastShownPostNumber; lastPostNumber--) {
    scriptEl.dataset.telegramPost = `petrsu_international/${lastPostNumber}`
    let newPost = document.createElement('div');
    newPost.innerHTML =`<iframe id="telegram-post-petrsu_international-${lastPostNumber}" 
        src="https://t.me/petrsu_international/${lastPostNumber}?embed=1" 
        width="100%" height="" frameborder="0" scrolling="no" 
        style="overflow: hidden; border: none; min-width: 320px; height: 550px;">
        </iframe>
        <script async src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-post="petrsu_international/${lastPostNumber}"
        data-width="100%" class="telegram-post">
        </script>`
    newsEl.appendChild(newPost);
}

buttonEl.addEventListener('click', () => {
    lastShownPostNumber -= 6
    if (lastShownPostNumber > firstPostNumber) {
        for (lastPostNumber; lastPostNumber >= lastShownPostNumber; lastPostNumber--) {
            scriptEl.dataset.telegramPost = `petrsu_international/${lastPostNumber}`
            let newPost = document.createElement('div');
            newPost.innerHTML =`<iframe id="telegram-post-petrsu_international-${lastPostNumber}" 
            src="https://t.me/petrsu_international/${lastPostNumber}?embed=1" 
            width="100%" height="" frameborder="0" scrolling="no" 
            style="overflow: hidden; border: none; min-width: 320px; height: 650px;">
            </iframe>
            <script async src="https://telegram.org/js/telegram-widget.js?22"
            data-telegram-post="petrsu_international/${lastPostNumber}"
            data-width="100%" class="telegram-post">
            </script>`
            newsEl.appendChild(newPost);
        }
    }
})