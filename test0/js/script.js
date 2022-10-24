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

;


// document.addEventListener('DOMContentLoaded', function () {
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// month = month >= 10 ? month : '0' + month;
// day = day >= 10 ? day : '0' + day;

// function nowDate() {
//     document.querySelectorAll('#yearNow').forEach(function (yearNow) {
//         yearNow.innerHTML = year;
//     });
//     document.querySelectorAll('#monthNow').forEach(function (monthNow) {
//         monthNow.innerHTML = month;
//     });
//     document.querySelectorAll('#dayNow').forEach(function (dayNow) {
//         dayNow.innerHTML = day;
//     });
// }
// nowDate();
//     const deadline = new Date(
//         new Date().getFullYear(),
//         new Date().getMonth() + 1, 1);
//     let timerId = null;

//     function declensionNum(num, words) {
//         return words[
//             num % 100 > 4 && num % 100 < 20 ?
//             2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
//         ];
//     }

//     function countdownTimer() {
//         const diff = deadline - new Date();
//         if (diff <= 0) {
//             clearInterval(timerId);
//         }
//         const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//         const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//         const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//         $hours.textContent = hours < 10 ? '0' + hours : hours;
//         $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//         $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//         $minutes.dataset.title = declensionNum(minutes, [
//             'минута',
//             'минуты',
//             'минут',
//         ]);
//         $seconds.dataset.title = declensionNum(seconds, [
//             'секунда',
//             'секунды',
//             'секунд',
//         ]);

//     }
//     const $hours = document.querySelector('.timer__hours');
//     const $minutes = document.querySelector('.timer__minutes');
//     const $seconds = document.querySelector('.timer__seconds');

//     countdownTimer();
//     timerId = setInterval(countdownTimer, 1000);
// });





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