var resultWrapper = document.querySelector(".spin-result-wrapper");
var rulet = document.querySelector(".rulet-img");

function spin() {
    if (rulet.classList.contains("rotated")) {
        resultWrapper.style.display = "block";
    } else {
        rulet.classList.add("super-rotation");
        setTimeout(function () {
            resultWrapper.style.display = "block";

            start_timer();
        }, 7000);

        rulet.classList.add("rotated");
    }
}

var closePopup = document.querySelector(".close-popup");
$(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault();

    $(".spin-result-wrapper").fadeOut(function () {
        setTimeout(function () {
            $(".spin-wrapper").slideUp();
            $(".order_block").slideDown();
        }, 300);
    });

    var top = $(".ordr_box").offset().top;
    $("body,html").animate({
        scrollTop: top
    }, 800);
});

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}





//свайпер....
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeModalBtns = document.querySelectorAll('.closeBtn');

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});
for (let closeModelBtn of closeModalBtns) {
    closeModelBtn.addEventListener("click", () => {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    })
}

//================
const humbBtn = document.querySelector('.humb')
const closeHumbBtn = document.querySelector('.close-humb')
const mOV = document.querySelector('.modal-overlay--visible')
const menu1 = document.querySelector('.humb-menu__wrapper--1');
const menu2 = document.querySelector('.humb-menu__wrapper--2');
const btnOnMenus = document.querySelectorAll('.btnMenus');
const closeBtnHumbs = document.querySelectorAll('.closeBtnHumb')

humbBtn.addEventListener('click', () => {
    openHumb();
})
closeHumbBtn.addEventListener('click', () => {
    closeHumb();
})
for (const closeBtnHumb of closeBtnHumbs) {

    closeBtnHumb.addEventListener('click', () => {
        closeHumb()
    })
}

function openHumb() {
    humbBtn.classList.add('dn');
    closeHumbBtn.classList.remove('dn');
}

function closeHumb() {
    humbBtn.classList.remove('dn');
    closeHumbBtn.classList.add('dn');
    menu1.classList.remove('dn')
    menu2.classList.add('dn')
}
for (const btnOnMenu of btnOnMenus) {
    btnOnMenu.addEventListener('click', () => {
        menu2.classList.remove('dn')
        menu1.classList.add('dn')
    })

}
//============================
const bop = document.querySelector('.bups');
const bops = document.querySelector('.bups__items');
const bigBops = document.querySelector('.big-bups');
const bopsItem1 = document.querySelector('.bups__item--1');
const bopsItem2 = document.querySelector('.bups__item--2');
const bopsItem3 = document.querySelector('.bups__item--3');
const bopsItem4 = document.querySelector('.bups__item--4');

const bigBopsItem1 = document.querySelector('.big-bups-item--1');
const bigBopsItem2 = document.querySelector('.big-bups-item--2');
const bigBopsItem3 = document.querySelector('.big-bups-item--3');
const bigBopsItem4 = document.querySelector('.big-bups-item--4');
const bupsBuppons = document.querySelectorAll('.big-bups-item__button')

const collapsAnimation = document.querySelector('.collaps-animation');
const openAnimation = document.querySelector('.open-animation');

bopsItem1.addEventListener('click', () => {
    bigBopsItem1.classList.add('open-animation');
    bops.classList.add('dn');
    document.querySelector('.overflov').scrollIntoView();
    setTimeout(() => {
        bigBopsItem1.classList.remove('dn');
    }, 800);
})

bopsItem2.addEventListener('click', () => {
    bigBopsItem2.classList.add('open-animation');
    bops.classList.add('dn');
    document.querySelector('.overflov').scrollIntoView();
    setTimeout(() => {
        bigBopsItem2.classList.remove('dn');

    }, 800);
})
bopsItem3.addEventListener('click', () => {
    bigBopsItem3.classList.add('open-animation');
    bops.classList.add('dn');
    document.querySelector('.overflov').scrollIntoView();
    setTimeout(() => {
        bigBopsItem3.classList.remove('dn');
    }, 800);
})
bopsItem4.addEventListener('click', () => {
    bigBopsItem4.classList.add('open-animation');
    bops.classList.add('dn');
    document.querySelector('.overflov').scrollIntoView();
    setTimeout(() => {
        bigBopsItem4.classList.remove('dn');
    }, 800);
})

for (const bupsBuppon of bupsBuppons) {
    const orderBlock = document.querySelector('.order_block')
    bupsBuppon.addEventListener('click', () => {
        bigBops.classList.add('dn');
        orderBlock.classList.add('open-animation');
        document.querySelector('.overflov').scrollIntoView();
        start_timer();
        setTimeout(() => {
            orderBlock.classList.remove('dn');
        }, 800);
    })
}