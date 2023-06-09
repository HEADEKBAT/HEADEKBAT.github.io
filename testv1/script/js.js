const humb = document.querySelector('.hamburger');
const nav = document.querySelector('.header__nav');
const hamRotate = document.querySelector('.hamRotate');

function openHumb() {
    nav.classList.add('active-nav');
    hamRotate.classList.add('active');
}

function closeHumb() {
    function closeNav() {
        nav.classList.remove('active-nav');
        nav.classList.remove("close-nav");
        humb.classList.remove('no-pointer');
    }
    humb.classList.add('no-pointer');
    nav.classList.add("close-nav");
    hamRotate.classList.remove('active');
    setTimeout(closeNav, 1000);
}




hamRotate.addEventListener('click', () => {
    if (hamRotate.classList.contains('active')) {
        closeHumb();

    } else {
        openHumb();
    }
})
window.addEventListener('resize', () => {
    if (hamRotate.classList.contains('active')) {
        closeHumb();

    }
});