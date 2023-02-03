// получаем координаты элемента в контексте документа
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}
const elShow = document.querySelector('.modal-scrol')

const cc = document.querySelector('.popup-call-active');
const ссCoordinate = getCoords(cc).top;
const popupCall = document.querySelector('.popup-call');
const closeModalPopup = document.querySelector('.modal-scrol__close');
const buttoneModalPopup = document.querySelector('.modal-scrol__button');

// --появление попапа
window.addEventListener('scroll', function () {
    if (window.scrollY >= (ссCoordinate - 80) && (window.scrollY < (ссCoordinate + 8))) {
        showPopupWindow()
    }
});

function showPopupWindow() {
    if (!popupCall.classList.contains("disablet")) {
        elShow.classList.add("modal-scrol--active")
    }
}

function closePopupWindow() {
    elShow.classList.remove("modal-scrol--active")
}
closeModalPopup.addEventListener("click", () => {
    closePopupWindow();
})
buttoneModalPopup.addEventListener("click", () => {
    const anhor = document.querySelector('.ccc')
    closePopupWindow();
    popupCall.classList.add('disablet');
    setTimeout(() => {
        popupCall.classList.remove('disablet');
    }, 10000);
    anhor.scrollIntoView(top);
})