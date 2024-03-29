let doors = document.querySelectorAll('.door');
let doorSales = document.querySelectorAll('.door__sales');
let doorWrapper = document.querySelector('.door__wrapper');
let spinResultWrapper = document.querySelector('.spin-result-wrapper');
let orderBlock = document.querySelector('.order_block');
let door1 = document.getElementById('door__1');
let door2 = document.getElementById('door__2');
let door3 = document.getElementById('door__3');
let doorSale1 = document.getElementById('door__sales1');
let doorSale2 = document.getElementById('door__sales2');
let doorSale3 = document.getElementById('door__sales3');
let hiddenText = document.querySelector('.hiddenText');

doors.forEach(function (door) {
    door.addEventListener('click', openDoor);
});

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (a) {
    $('.spin-result-wrapper').fadeOut();
    orderBlock.style.display = 'block';
    start_timer()
});

function openDoor(e) {
    e.currentTarget.classList.add('open');
    //должна выпадать всплывашка после открытие 1й двери

    setTimeout(function () {
        spinResultWrapper.style.display = 'block';
        setTimeout(function () {
            orderBlock.style.display = 'block';
            doorWrapper.style.display = 'none';
            hiddenText.style.display = 'none';
        }, 2500);
    }, 2500);

    doorSales.forEach(function (sale) {
        if (door1.classList.contains('open')) {
            doorSale1.innerHTML = '50%';
            doorSale1.style.left = '12px';

            doorSale2.innerHTML = '10%';
            doorSale2.style.left = '30px';

            doorSale3.innerHTML = '25%';
            doorSale3.style.left = '32px';
        } else if (door2.classList.contains('open')) {
            doorSale2.innerHTML = '50%';
            doorSale2.style.left = '12px';

            doorSale1.innerHTML = '25%';
            doorSale1.style.left = '32px';

            doorSale3.innerHTML = '10%';
            doorSale3.style.left = '30px';
        } else if (door3.classList.contains('open')) {
            doorSale1.innerHTML = '10%';
            doorSale1.style.left = '30px';

            doorSale3.innerHTML = '50%';
            doorSale3.style.left = '12px';

            doorSale2.innerHTML = '25%';
            doorSale2.style.left = '32px';
        }
    });

    for (let i = 0; i < doors.length; i++) {
        if (!doors[i].classList.contains('open')) {
            setTimeout(function () {
                doors[i].classList.add('open');
            }, 2500);
        }
    }

    for (let j = 0; j < doors.length; j++) {
        doors[j].removeEventListener('click', openDoor);
    }
}

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
    secs = secs >= 10 ? secs : '0' + secs;
    mins = mins >= 10 ? mins : '0' + mins;
    $('#min1').html(mins);
    $('#sec1').html(secs);
}
const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthMin = ['', '', '', '', '', '', '', '', '', '', '', ''],
    days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    daysMin = ['', '', '', '', '', '', ''],
    seasons = ['invierno', 'primavera', 'verano', 'otoño'];

function postDate(daysName, daysMinName, monthsName, monthsMinName, seasonsName) {
    const _counterLength = 60;
    for (let counter = 0; counter < _counterLength; counter++) {
        innerDate(counter, 'date-');
        innerDate(counter, 'date')
    }

    function innerDate(counter, dateType) {
        let newCounter;
        dateType === 'date-' ? newCounter = -counter : newCounter = counter;
        const _msInDay = 86400000,
            _localDate = new Date(Date.now() + (newCounter * _msInDay)),
            _day = _localDate.getDate(),
            _month = _localDate.getMonth() + 1,
            _year = _localDate.getFullYear();
        const dayDefault = addZero(_day),
            monthDefault = addZero(_month),
            defaultDate = dayDefault + '.' + monthDefault + '.' + _year;
        const dateClass = dateType + counter,
            nodeList = document.querySelectorAll('.' + dateClass);
        for (let i = 0; i < nodeList.length; i++) {
            const dateFormat = nodeList[i].dataset.format;
            dateFormat !== undefined && dateFormat !== '' ? nodeList[i].innerHTML = String(changeFormat(dayDefault, _month, _year, dateFormat, newCounter)) : nodeList[i].innerHTML = defaultDate
        }
    }

    function changeFormat(_day, _month, _year, format, counter) {
        let innerFormat = format;
        const testFormat = ["dd", "mm", "yyyy", "monthFull", "year"],
            dateFormat = {
                dd: _day,
                mm: addZero(_month),
                yyyy: _year,
                monthFull: getMonthName(_month, monthsName, true),
                year: getYearWithCounter(_year, counter),
            };
        for (let i = 0; i < testFormat.length; i++) {
            let string = testFormat[i];
            let regExp = new RegExp(string);
            innerFormat = innerFormat.replace(regExp, dateFormat[string]);
        }
        return innerFormat.split(' ').join(' ')
    }

    function getMonthName(_month, monthsName, bigFirstLetter, counter) {
        const monthCounter = !!counter ? counter : 0;
        let month;
        _month + monthCounter > 12 ? month = monthCounter - (12 - _month) : month = _month + monthCounter;
        _month + monthCounter <= 0 ? month = 12 + monthCounter + 1 : month = _month + monthCounter;
        return changeFirstLetter(bigFirstLetter, monthsName[month - 1])
    }

    function getYearWithCounter(year, counter) {
        return year + counter
    }

    function addZero(numb) {
        return numb < 10 ? '0' + numb : numb
    }

    function changeFirstLetter(isBig, str) {
        return isBig && str && str.length > 0 ? str[0].toUpperCase() + str.slice(1) : str
    }
}
if (document.body.classList.contains('ev-date')) {
    document.addEventListener("DOMContentLoaded", function () {
        postDate(days, daysMin, months, monthMin, seasons)
    });
}

document.addEventListener("DOMContentLoaded", function () {
    // ширина фікс. блоку прописується в стилях
    // блок, який потрібно зафіксувати
    const stickyBlock = document.querySelector('.aside-box');
    const stickyParent = stickyBlock.parentElement;
    const stickyWrap = document.createElement("div");
    // перед яким блоком зупиняти фіксований блок
    const bottomEdge = document.querySelector(".footer");

    stickyWrap.classList.add("sticky-wrap");
    stickyParent.appendChild(stickyWrap);
    stickyWrap.appendChild(stickyBlock);

    function setPositionSticky() {
        const stickyParent = stickyBlock.parentElement;
        // координата верху батьківського елемента (старт фіксації)
        const stickParentTop = stickyParent.getBoundingClientRect().top - 20;

        if (stickParentTop < 0) {
            stickyBlock.style.position = "fixed";
            // відступ фікс. блоку від верху екрану
            stickyBlock.style.top = "20px";

            if (stickyBlock.getBoundingClientRect().bottom > bottomEdge.getBoundingClientRect().top - 20) {
                stickyBlock.style.top = bottomEdge.getBoundingClientRect().top - stickyBlock.getBoundingClientRect().bottom + "px";
            }

        } else {
            stickyBlock.style.position = "static";
        }
    }
    setPositionSticky();
    window.addEventListener("scroll", setPositionSticky);
});

// Comments Form
let commentsForm = document.querySelector('#push-comments'),
    userName = document.querySelector('.userName'),
    userSurname = document.querySelector('.userSurname'),
    userMessage = document.querySelector('.userMessage'),
    sendBtn = document.querySelector('.sendBtn');

sendBtn.addEventListener('click', function (event) {
    if (checkEmpty(userName, userSurname, userMessage)) {
        event.preventDefault();
        commentsForm.style.cssText = 'display: none;';
        alert('Спасибо! Ваш комментарий отправлен на модерацию.');
    }
});

// Check Empty
function checkEmpty(elem1, elem2, elem3) {
    if (elem1.value != '' && elem2.value != '' && elem3.value != '') {
        return true;
    } else {
        return false;
    }
}

// Custom File
let customFile = document.querySelector('.custom__field'),
    customText = document.querySelector('.custom__text');

customFile.addEventListener('change', function () {
    customText.innerHTML = 'Фото добавлено';
    customText.style.cssText = 'color: green;';
});

const addComm = document.querySelector(".add-comm");

addComm.addEventListener("click", function () {
    document.querySelector("#push_mlyjekpdfdd1").style.display = "block";
    this.style.display = "none";
})