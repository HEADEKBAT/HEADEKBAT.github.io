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
start_timer();