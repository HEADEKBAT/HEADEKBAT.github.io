//-------------получаем координаты элемента в контексте документа
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}
const dd = document.querySelector('.dd');
const ddCoordinate = getCoords(dd).top;
const amountItem = document.querySelector('.amount-item')
let amountNum = 35;
let oneTime = false;


function changeAmountNum() {
    function startTimerAmountNum() {
        amountItem.innerHTML = amountNum;
        amountNum = (amountNum - 1);

    }
    let timerAmountNum = setInterval(startTimerAmountNum, 6000)

    setTimeout(() => {
        clearInterval(timerAmountNum);;
    }, 50000);


}


//--условие появление при скроле
window.addEventListener('scroll', function () {
    if (!oneTime && window.scrollY > ddCoordinate) {
        changeAmountNum()
        oneTime = true;
    }




});