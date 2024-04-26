var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".stage__swiper-next",
        prevEl: ".stage__swiper-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});

var swiper = new Swiper(".usersSwiper", {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination1",
        type: "fraction",
    },
    navigation: {
        nextEl: ".users__swiper-next",
        prevEl: ".users__swiper-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        730: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});
// дублируем бегущую строку
document.querySelector(".main").appendChild(document.querySelector(".run-string").cloneNode(true));

//прокрутка между блоками, можно было бы сделать более элегантное решение, но так как тут всего 2 ссылки это не оправдано
const links1 = document.querySelectorAll('.link1');
const anhor1 = document.querySelector('.about');
const links2 = document.querySelectorAll('.link2');
const anhor2 = document.querySelector('.stage');

function scrol(links, anhor) {
    for (const link of links) {
        link.addEventListener('click', () => {
            anhor.scrollIntoView({
                behavior: "smooth"
            })
        })
    }
}
scrol(links1,anhor1);
scrol(links2,anhor2);