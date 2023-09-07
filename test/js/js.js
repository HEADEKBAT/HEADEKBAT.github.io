window.addEventListener('load', function () {
    function loading() {
        const leter1 = document.querySelector('.progress__letter--1')
        const leter2 = document.querySelector('.progress__letter--2')
        const leter3 = document.querySelector('.progress__letter--3')
        const leter4 = document.querySelector('.progress__letter--4')

        function changeLetter(el1, el2) {
            el1.classList.add("dn");
            el2.classList.remove('dn')
        }

        setTimeout(() => changeLetter(leter1, leter2), 2000);
        setTimeout(() => changeLetter(leter2, leter3), 4000);
        setTimeout(() => changeLetter(leter3, leter4), 6000);
    }
    loading();
})