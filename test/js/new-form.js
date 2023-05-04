var time = 600 * 100;
var intr;

function start_timer1() {
    intr = setInterval(tick, 10);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 6000);
    var timeSecs = Math.floor(time - mins * 6000)
    var secs = Math.floor(timeSecs / 100);
    var msecs = Math.floor(timeSecs % 100);

    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    msecs = msecs >= 10 ? msecs : "0" + msecs;
    if (time > 0) {
        const minsClases = document.querySelectorAll('.min')
        const secsClases = document.querySelectorAll('.sec')
        const msecsClases = document.querySelectorAll('.msec')
        for (const minClass of minsClases) {
            minClass.innerHTML = ("0" + mins);
        }
        for (const secClass of secsClases) {
            secClass.innerHTML = secs;
        }
        for (const msecClass of msecsClases) {
            msecClass.innerHTML = msecs;
        }



    }
    if (time <= 0) {
        return
    }

}

const ButtonShowForm = document.querySelector('.new-form__button-open')
const loadingText1 = document.querySelector('.new-form__info-loading-text1')
const loadingText2 = document.querySelector('.new-form__info-loading-text2')
const infoLoadingBlock = document.querySelector('.show-about-form')
const fornBlock = document.querySelector('.show-form')
const formBlockTo = document.querySelector('.new-form-to')



function closeLoadingText1() {
    loadingText1.classList.add("close-loading-text");
    loadingText1.classList.add("display-none");
}

function showeLoadingText2() {
    loadingText2.classList.remove("display-none");
    loadingText2.classList.add("show-close-loading-text");
}

function toggleText() {
    //последовательное появление текста
    // loadingText1.classList.add("close-loading-text")
    setTimeout(() => (closeLoadingText1()), 1400);
    setTimeout(() => (showeLoadingText2()), 1500);
    //последовательное появление текста
}

function showLoadingBlock() {
    //появление блока с загрузкой формы
    infoLoadingBlock.classList.add('open-loading-info')
    setTimeout(() => (toggleText()), 1100);
    formBlockTo.scrollIntoView(top);
    //появление блока с загрузкой формы
}

function closeLoadingBlock() {
    infoLoadingBlock.classList.add('close-loading-info')
    infoLoadingBlock.classList.remove('open-loading-info')
    setTimeout(() => (infoLoadingBlock.classList.remove('close-loading-info')), 1100);
}

function showFormBlock() {
    fornBlock.classList.add('show-form-show')
    formBlockTo.scrollIntoView(top);
    // setTimeout(() => (start_timer()), 1100);

}


ButtonShowForm.addEventListener("click", () => {
    ButtonShowForm.classList.add('display-none-button')
    showLoadingBlock()
    setTimeout(() => (closeLoadingBlock()), 5500);
    setTimeout(() => (showFormBlock()), 5600);
    setTimeout(() => (start_timer1()), 5650)
})

// const links = document.querySelectorAll('.link');
// const anhor = document.querySelector('.ccc')

// for (const link of links) {
//     link.addEventListener('click', () => {
//         anhor.scrollIntoView({
//             behavior: "smooth"
//         })
//     })
// }