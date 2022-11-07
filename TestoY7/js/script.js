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

var time = 600 * 100;
var intr;

function start_timer() {
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
    $("#min").html("0" + mins);
    $("#sec").html(secs);
    $("#msec").html(msecs);
}