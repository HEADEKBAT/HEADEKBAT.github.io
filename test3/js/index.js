var resultWrapper = document.querySelector(".spin-result-wrapper"),
    wheel = document.querySelector(".wheel-img");

function spin() {
    wheel.classList.contains("rotated") ?
        (resultWrapper.style.display = "block") :
        (wheel.classList.add("super-rotation"),
            setTimeout(function () {
                resultWrapper.style.display = "block";
            }, 7e3),
            setTimeout(function () {
                $(".spin-wrapper").slideUp(), $(".order_block").slideDown();
            }, 7300),
            wheel.classList.add("rotated"));
}
var closePopup = document.querySelector(".close-popup");
if (
    ($(".close-popup, .pop-up-button").click(function (e) {
            e.preventDefault(), $(".spin-result-wrapper").fadeOut();
            var t = $(".order_block").offset().top - 15;
            $("body,html").animate({
                scrollTop: t
            }, 800);
        }),
        document.body.classList.contains("ev-date"))
) {
    function Datee() {
        var e,
            t = 864e5,
            r = new Date();
        e = [
            "Gennaio",
            "Febbraio",
            "Marzo",
            "Aprile",
            "Maggio",
            "Giugno",
            "Luglio",
            "Agosto",
            "Settembre",
            "Ottobre",
            "Novembre",
            "Dicembre",
        ];
        for (var n = 0; n < 90; n++) {
            var a = "date-" + n,
                o = document.getElementsByClassName(a),
                s = new Date(r.getTime() - n * t),
                u = 0;
            l = y((l = d(o)));
            for (var i = 0; i < o.length; i++) {
                (c = o[i].dataset).format
                    ?
                    (o[i].innerHTML = p(s, c.format)) :
                    (o[i].innerHTML = p(s)),
                    /\btime\b/.test(o[i].className) &&
                    ((o[i].innerHTML += " " + l[u]), u++);
            }
        }
        for (n = 0; n < 90; n++) {
            var l;
            (a = "date" + n),
            (o = document.getElementsByClassName(a)),
            (s = new Date(r.getTime() + n * t)),
            (u = 0);
            l = y((l = d(o)));
            for (i = 0; i < o.length; i++) {
                var c;
                (c = o[i].dataset).format
                    ?
                    (o[i].innerHTML = p(s, c.format)) :
                    (o[i].innerHTML = p(s));
            }
        }

        function d(e, t) {
            for (var r = [], n = 0; n < e.length; n++)
                e[n].className.match(/\btime\b/) &&
                r.push(Math.round(0 + 1440 * Math.random()));
            return (
                t ?
                r.sort(function (e, t) {
                    return t - e;
                }) :
                r.sort(function (e, t) {
                    return e - t;
                }),
                r
            );
        }

        function y(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = Math.floor(e[r] / 60),
                    a = e[r] % 60,
                    o = n < 10 ? "0" + n : n,
                    s = a < 10 ? "0" + a : a;
                t.push(o + ":" + s);
            }
            return t;
        }

        function p(t, r) {
            var n = "",
                a = t.getDate(),
                o = t.getFullYear(),
                s = t.getMonth() + 1;
            switch (r || !0) {
                case "yyyy":
                    return (n += "" + o);
                case "yyyy-1":
                    return (n += "" + o - 1);
                case "yyyy-2":
                    return (n += "" + o - 2);
                case "mm.dd.yyyy":
                    return (
                        (n += s < 10 ? "0" + s : s),
                        (n += "."),
                        (n += a < 10 ? "0" + a : a),
                        (n += "." + o)
                    );
                case "month":
                    return (n += e[s - 1].toLowerCase());
                case "nextmonth":
                    return (n += e[s].toLowerCase());
                case "dd":
                    return (n += a < 10 ? "0" + a : a);
                case "dd month":
                    return (
                        (n += a < 10 ? "0" + a : a),
                        (n += " "),
                        (n += e[s - 1].toLowerCase())
                    );
                case "dd month yyyy":
                    return (
                        (n += a < 10 ? "0" + a : a),
                        (n += " "),
                        (n += e[s - 1].toLowerCase()),
                        (n += " " + o)
                    );
                case "day dd, month yyyy":
                    return (
                        (n += [
                            "Воскресенье",
                            "Понедельник",
                            "Вторник",
                            "Среда",
                            "Четверг",
                            "Пятница",
                            "Суббота",
                        ][new Date(o, s - 1, a).getDay()]),
                        (n += " "),
                        (n += a < 10 ? "0" + a : a),
                        (n += " "),
                        (n += e[s - 1]),
                        (n += " " + o)
                    );
                case "dd/mm/yyyy":
                    return (
                        (n += a < 10 ? "0" + a : a),
                        (n += "/"),
                        (n += s < 10 ? "0" + s : s),
                        (n += "/" + o)
                    );
                case "dd-mm-yyyy":
                    return (
                        (n += a < 10 ? "0" + a : a),
                        (n += "-"),
                        (n += s < 10 ? "0" + s : s),
                        (n += "-" + o)
                    );
                default:
                    return (
                        (n += a < 10 ? "0" + a : a),
                        (n += "."),
                        (n += s < 10 ? "0" + s : s),
                        (n += "." + o)
                    );
            }
        }
    }
    document.addEventListener("DOMContentLoaded", Datee);
}