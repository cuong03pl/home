const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const plusBtn = $('.plus-btn')
const minusBtn = $('.minus-btn')
const companyHistory1 = $('.company-history-1')
const companyHistory2 = $('.company-history-2')

const app = {
    handleZoom(){
     let fontSizeCurrent = 16;
        plusBtn.onclick = () => {
            fontSizeCurrent += 1;
            companyHistory1.style.fontSize = fontSizeCurrent + 'px'
            companyHistory2.style.fontSize = fontSizeCurrent + 'px'
        }
        minusBtn.onclick = () => {
            fontSizeCurrent -= 1;
            companyHistory1.style.fontSize = fontSizeCurrent + 'px'
            companyHistory2.style.fontSize = fontSizeCurrent + 'px'
        }
    },
    
}
app.handleZoom()

