//=====бургер=====//

const humbButton = document.querySelector('.humb');
const humbMenu = document.querySelector('.header__top')
const headerMobFooter = document.querySelector('.header__mob-footer')
const headerButtonOnlyMob = document.querySelector('.btn-only-mob')

humbButton.addEventListener('click', () => {
    toggleHumb()
})

function openHumbMenu() {
    humbButton.classList.add('humb-active');
    humbMenu.classList.add('header__top-active')
    headerMobFooter.classList.add("header__mob-footer--active")
    headerButtonOnlyMob.classList.add('dn')
}

function closeHumbMenu() {
    humbButton.classList.remove('humb-active');
    humbMenu.classList.remove('header__top-active')
    headerMobFooter.classList.remove("header__mob-footer--active")
    headerButtonOnlyMob.classList.remove('dn')
}

function toggleHumb() {
    if (humbButton.classList.contains('humb-active')) {
        closeHumbMenu()
    } else {
        openHumbMenu()
    }
}

// закрываем хедер при ресайзе, например при переходе в альбоное отображение на планшетах
window.onresize = () => {
    if (humbButton.classList.contains('humb-active')) {
        closeHumbMenu()
    }
}
//=====бургер=====//

// скрытие хедера
const onScrollHeader = () => {
    const header = document.querySelector('.header');
    const mainScrinHeight = document.querySelector(".main-scrin").offsetHeight; // высота первого экрана
    let currentScroll;



    window.addEventListener('scroll', () => {
        currentScroll = window.pageYOffset // величина прокрутки
        if (currentScroll > mainScrinHeight && !header.classList.contains("header__hidden")) {
            header.classList.add('header__hidden');
        }
        if (currentScroll < mainScrinHeight && header.classList.contains("header__hidden")) {
            header.classList.remove('header__hidden');
        }

    })

}
onScrollHeader();
// скрытие хедера



// тут поигрался с инпутом и ренджем, приаязав занчение одного к доугму,
//  если посидеть то можно лучше)
const bestInputRange = document.querySelector('#bestInputRange');
const bestInput = document.querySelector('#bestInput');


bestInputRange.addEventListener('change', () => {
    console.log(bestInputRange.value)
    bestInput.setAttribute('value', bestInputRange.value + " ₽")

})