function initTimer() {
    let minutes = 14;
    let seconds = 59;

    const intervalID = setInterval(() => {
        seconds--;
        if (seconds === -1) {
            minutes--;
            if (minutes === -1) {
                clearInterval(intervalID);
            } else {
                seconds = 59;
                setTime(`${editTime(minutes)}${editTime(seconds)}`.split(''));
            }
        } else {
            setTime(`${editTime(minutes)}${editTime(seconds)}`.split(''));
        }

    }, 1000)
}

function setTime(timeArray) {
    let timeDigits = $('.form-timer__symbol');
    timeDigits.each(function (idx) {
        $(this).html(timeArray[idx]);
    })
}

function editTime(time) {
    return time > 9 ? time : '0' + time;
}

$(document).ready(function () {
    initTimer();



})



function revealModal(modalClass) {
    $(modalClass).css('display', 'block');
    $('body').css('overflow', 'hidden');
}

function closeModal(modal) {
    $(modal).css('display', 'none');
    $('body').css('overflow', 'visible');
}
$(document).ready(function () {
    let spin_block = $('.spin-block').width();
    let spin_block_pattern = '<div class="spin__el">\n' +
        '                                <p class="spin__el-text">25%</p>\n' +
        '                            </div>\n' +
        '                            <div class="spin__el">\n' +
        '                                <p class="spin__el-text">15%</p>\n' +
        '                            </div>\n' +
        '                            <div class="spin__el">\n' +
        '                                <p class="spin__el-text">10%</p>\n' +
        '                            </div>\n' +
        '                            <div class="spin__el">\n' +
        '                                <p class="spin__el-text spin__sale">50%</p>\n' +
        '                            </div>\n' +
        '                            <div class="spin__el">\n' +
        '                                <p class="spin__el-text">20%</p>\n' +
        '                            </div>\n' +
        '                            <div class="spin__el">\n' +
        '                                <p class="spin__el-text">35%</p>\n' +
        '                            </div>\n' +
        '                            <div class="spin__el">\n' +
        '                                <p class="spin__el-text">0</p>\n' +
        '                            </div>'


    $('.spin__window').click(function () {

        let spinTrack = $('.spin__track')
        spinTrack.addClass('spin__track_anim');

        let initialMargin = Math.abs(parseInt(spinTrack.css('margin-left')));

        setTimeout(function () {
            clearInterval(intervalId);

            revealModal('.form-modal__wrap')
            $('.spin').slideUp();
            $('#form').slideDown();
        }, 8000)

        let intervalId = setInterval(
            function () {
                let currentMargin = Math.abs(parseInt(spinTrack.css('margin-left')));
                let currentElWidth = parseInt($('.spin__el').css('width')) * 5;
                if (currentMargin - initialMargin > currentElWidth) {
                    $(spin_block_pattern).appendTo(".spin__track");
                    initialMargin = Math.abs(parseInt(spinTrack.css('margin-left')));
                }
            }, 50)
    });

    $('.modal__black-bg').click(function (event) {
        closeModal($(event.target).parent())
    })

    $('.modal__btn').click(function (event) {
        closeModal($(event.target).parent().parent())
    })

    $('.modal__cross').click(function (event) {
        closeModal($(event.target).parent().parent())
    })

    $('.add__logo-wrap').click(function () {
        $('.add__logo-input').click();
    })

    $('.input__clip').click(function () {
        $('.add__file-input').click();
    })

});