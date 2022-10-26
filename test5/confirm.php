<!-- Add -->
<?php

if (!empty($_GET['name'])){
    $name = $_GET['name'];
} else {
    $name = '';
}

if (!empty($_GET['x'])){
    $pixel = $_GET['x'];
} else {
    $pixel = false;
}

if (!empty($_GET['geo'])){
    $geo = $_GET['geo'];
} else {
    $geo = false;
}

if (!empty($_GET['back'])) {
    header('Location: '.$_GET['back'].'?x=' . $pixel . '&geo=' . $geo);
    die;
}

?>

<!DOCTYPE html><html><head>
    <?php if ($pixel) { ?>
    <img height="1" width="1" src="https://www.facebook.com/tr?id=<?php echo $pixel; ?>&ev=Lead&noscript=1"/>
    <?php } ?>
    <meta name="referrer" content="no-referrer">
<!--/Add-->
    <meta charset="UTF-8">
    <meta name="description" content="¡Muchas gracias!">
    <title>Много ви благодаря!</title>
    <meta name="viewport" content="width=480">
    <style>

        @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,900|Ubuntu:300,400,500&display=swap&subset=cyrillic");

        body {
            margin: 0;
            box-sizing: border-box;
        }

        *>* {
            box-sizing: inherit;
        }

        .header-container,
        .main-container {
            width: 480px;
            margin: 0 auto;
            font-family: "Ubuntu", Arial, sans-serif;
            font-weight: 400;
        }

        h1,
        h2,
        h3 {
            font-weight: normal;
            margin: 0;
        }

        ul {
            list-style-type: none;
            text-align: left;
        }

        .main-wrapper {
            background-image: url("");
            background-size: 100%;
            background-position: center top;
            background-repeat: no-repeat;
            padding-top: 50px;
        }

        .header-container {
            background: #f5f2e9;;
            text-align: center;
            padding: 40px 0px 0px;
            border-radius: 30px;
        }

        .header-container h1 {
            font-family: "Roboto", Arial, sans-serif;
            font-weight: 500;
            font-size: 55px;
            line-height: 55px;
            color: #000000;
        }

        .header-container h2 {
            font-family: "Roboto", Arial, sans-serif;
            font-size: 35px;
            line-height: 35px;
            color: #616161;
            margin: 30px 30px 50px;
        }

        .header-container h3 {
            font-family: "Roboto", Arial, sans-serif;
            font-weight: 900;
            font-size: 40px;
            line-height: 50px;
            width: 100%;
            padding: 10px;
            position: relative;
        }

        .header-container h3::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: #FFFA7A;
            border-radius: 30px;
            top: 0;
            left: 0;
            position: absolute;
            border-radius: 30px;
            z-index: 0;
        }

        .header-container h3 span {
            position: relative;
            z-index: 1;
            color: #000;
            text-transform: uppercase;
            opacity: 0.5;
            background-blend-mode: overlay;
        }

        .orderDetails {
            padding: 30px 38px;
            padding-bottom: 0;
            margin-bottom: 30px;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .orderDetails-item {
          flex-basis: 176px;
              padding: 20px 10px;
              padding-top: 70px;
              margin-bottom: 70px;
              background: linear-gradient(180deg, #b118e5 0%, #b118e5 100%);
              /* border-radius: 30px; */
              box-shadow: 0px 4px 30px rgb(0 0 0 / 40%);
              text-align: center;
              position: relative;
        }

        .orderDetails-item span {
            font-family: "Roboto", Arial, sans-serif;
            font-weight: 400;
            align-self: center;
            font-size: 17px;
            line-height: 23px;
            color: #fff;
        }

        .orderDetails-item::before {
            position: absolute;
            content: "";
            display: block;
            border-radius: 50%;
            background-color: #fff;
            box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            z-index: 1;
        }

        .orderDetails-item::after {
            position: absolute;
            content: "";
            display: block;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100px;
            height: 100px;
            z-index: 2;
            background-position: center center;
            background-repeat: no-repeat;
        }

        .orderDetails-item:nth-of-type(1)::after {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYsPVgAAABedFJOUwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxkaGxwdHh8gIiMkJSYnKSorLC4vMDEyNDU2Nzk6Ozw9Pj9AQUJDREVGR0hKS0xNTk9SU1RVVldYWVpbXF1eX2BhYmNkZWZ2ejDDAAACR0lEQVRIx8XWa1PaQBgF4BMBkXCx4WIhrfUCVlBUBI3iBY0KiCJQ5abk/P+/0Q8bCC2RxBlnPJ/ed9hnkl12kwBfHs+v80EjH/nQeJIk3Skx3qhuy0mt60KZ42tZGQAgpRzUf+NhqpP3lfeZNOq54MwPknrSI5mbJSEObMaP1Q3LdqQ1Z5abn0oWZJElAB6z9s8nUfEfsg5ANeurTyQL1cJHiUf2AVhui1QAfDdrzZYECk2DbKy6X7G1ATn8MyQPYi5JcmRoCiCl38jqEvyKooQBeBWRoA1pcse0xQ4rUJynv8K2NK6Dr0YQHUeS47HV3HINuiM55J7VlLmFw2bzHMBKU6Q0Sw64azVnzLhYsSyLVlOl6oKovLGaPgOIxePfAPjiIpFZEubLpI6yDY/hOP381FWWhkYQLUdSnp7xLX/izpHs8dLan13GodXrGoBEXaQwS0Kv1io3eO9qW67yyawUdmR3m/+Bv0VxyQKCqqqqCQB+VSRqe1442gSAYw5lVNwd5F12AEQ4TCJhuCMBdgFE+YDFFj9Kwte6rut6EUBMF8nbknUalUy2zkHY5dlf1gwaJDlib8fvTLyZGjnaDxXZ3whck28XKWkuWSz0yYEWAaTHfQCqbpCtLel9or6QtYxXbMgt8cDIt8n7EJBcn8rRmKyNeLcyec6M3y/SRofPoRj/zSkAQB5yf3LpUzI1rn23vPeWKtO5iAMAitStu+2RpUnj6/KH7co98Tg9Tpbk46RL13hkS0ackxtbsn32fsrJr/rk+gv4KuKwGvoh7gAAAABJRU5ErkJggg==");
        }

        .orderDetails-item:nth-of-type(2)::after {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAElhL0AAABddFJOUwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZHB0eHyAhIyQlJicoKSotLi8yNDU4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZoA4bRIAAAHdSURBVDjL7ZXxW5pAGMfvyIUlbcuUNNxkazVrMZY0ZzlniVGWrjD1QN7//+8Y3IVxIPy2H/Y8+/zAPXz58Dx3770HCP2HUkxhS0i6kMLiWy7h6ikM4V3CFXhwmFehkXC7PNUwr8BRwp3y1LPcNCrwVd6lFJeL/BChxrkh3lhZUTOLc21d0y7gl9ZyicqyjxEUzj32rzU49LfrwWFLzi9Zi833KHRRzRnng+w+5G4v1UUn0AwGM+RKTnfXOvA5s2YRF23Y0x2ENIaa7aL3Xj+HCONitauELu54VbT7vDmrXRlOtzYp+3CKioWs+Qq37phhQxfNzrNcJBnmgGJ5PQS9THfJ5vyvu7jUHFhnihB3d/y4vYejLj4g3u97j+gxV53Dw2jh6jjiyrOJsiFWrIXKueXpU00UyzfwibreIHjSntPOKdhDIeLiNlRo304ecxLpohunbRgGuWaHXSfBXcBPuDa+P43Yi02vZfnfgPKYHp/napzEvj4mizX/1J35RxQXJEkaPeZYn05L0gtvbskr6vZncn656gZ8CQbV+cEV9djTBdqQPfwSisPFZeOwQ2y+k8QrMBsHHXeyHU3XzwmA2y/Fdm+95QI45ms+xcW6uo0TW43f1tUy/jd/LX8Adb+JXBcuWbwAAAAASUVORK5CYII=");
        }

        .orderDetails-item:nth-of-type(3) {
            /* box-shadow: 0px 4px 30px rgba(255, 245, 0, 0.59); */
            margin-bottom: 20px;
        }

        .orderDetails-item:nth-of-type(3)::after {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA1CAMAAAAjxtjyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEyUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzy9n4AAABmdFJOUwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVlhZWltcXV5fYGFiY2RlZi6807QAAAM/SURBVBgZ7cFrW9pmAAbgJ28SDqIo4KEoFLTqVFTUIszTFG2FogwrKEEgCeF9/v9fGHGAumkd/bir943/B386N4vRqcv3UtYmMLJYk6SdwMi86QfSjGFE0RAwdS2NMEYTbNsZD7B2qmIkngrJ63koGkag+YLHsltxaKU9+K+02dTJVd0hf/fEbskzDe/zL2W+1Lr8W1kF5rrkTRLvmWzS1apcZE3Wg4B+xlaH8nISP6Sc0y4f/Bb2e8UmO0kAHy0uxa47bKx78AOBtkypcEXa8lQA2hfeCXjWH9i9nlPwpm3WA3D5C7wLAFg0nTX0BC8lrYyON3ir3FPg2pNyAYBWYVnApSRr5N2Sgld97MhJuGbuZV4BkOo2F9Hn37fonIfF1MJy+uRbHM8o5yzDJc6lMQnAY/BUQJlU4RLxktOt79TakmQOz4Ra3SW44m17WwBKjkYUiN1lfHjk2zEoJa1qg0U8k5aGF64bNo+OtmZnTH5WIGqsTqAvUiCZxSbvFQypTe7BtcgBO+kVO7SSeLJY4QUSTsuPoQRbEfSM3ZJdo1wzSWk3yxazGp7JsYJZ04xgQL1gUQBQtkjmffBPr5wZtiQrY3hug4YWaHXiGAh1ZAI9U/dkew6PtMjKH8YMXkh0WiFhcA0D+6x60ZOjyUYYb5p5sBMo8QB9gQp30TNrOFt1Hmp4S6AmN3HAK/SF6owCUPLyu56y5Le4htepZR5inQ30+cs8VICkba1A3Zd0SjGBV+V5iXlJHX17dE4WM20WNWDTpmT3ah6vybCGsMkw+rwFPiqGEG3Jw1DeIUtxgX9ZpY1AnUkMeHevbkvFDhu7NRbGoX3IWzQLH1X8w4LkuFrlFoYU/4THs1GVks0oevSFr002L6MeDAj/9HKuLBnDJQ9VPPm0pGHiyOxuCDxS4wWT5kVy3KvrvkAsfXbTpiuFLAsahkRJngahLGQ1DIhYiWT7z0Lx1qLLvjn+zmORZs2HoWCDbG/reCletPnIrl3szAkgw45DdsYx9MEhKc8UvKSNf9o7OkjFAroK1xopTeN2AkOrJOVNCO+Yzq5GwwEdTz6TLIYwuiNa2zpGF7G/juFnJEtT+ClCxy+/jOQvL9/E4q2QeNQAAAAASUVORK5CYII=");
        }

        .orderDetails-item:nth-of-type(4) {
            margin-bottom: 20px;
        }

        .orderDetails-item:nth-of-type(4)::after {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEyUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzy9n4AAABmdFJOUwABAgMEBQYHCAkKCwwNDg8QERITFBUWFxgZGhscHR4fICEiIyQlJicoKSorLC0uLzAxMjM0NTY3ODk6Ozw9PkBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZjDfjtsAAALmSURBVDjLhZRpX+IwEMbTg0NOUSiILoe3IrICci3qilQQATmsHKXQ0sz3/wqbFkHufV406fye/pOZTIpS42KryiJNZlE61Cf7Qs3TkX1oQUwMIDOZZoeh7+ApPvH3O0tOlBq/W3WOmJ2GaCWPHJ0Rt8KsMGS8APcsJhYQ8ve/vCvMEmGmgZkR1Tx5OnrrmWlgpwEfXGhDDgT3olFnXkLw+91cbdu08UntDz3zxj23xnT1Kwb9lcriG33SaweH7f15Z8yjMeO4ybGIDVVwljKS/VogifzQZ+aMlqrGrP5RpXqpqeK0OdWqBBAr87aSfLuwyyvRrTH9+bpQT+6jO7X0KZvQg/qphhfzZgstp547u6Ot9FewXAKHjmGJR2QdVqjvemoLqKUvxcS8LfP0ouPA7IyQkVd7EePDKk9b/K1jRz9MCjHldTyiA3j8OXcCXc/T9IhTKY4wy9xF7mx3E4/I3gX49BGmDBhLG3lEQShEJI1Z9ymbeVoCFUXBMYqJ4eE2HpFL5PUGTI3CaLu8k4wZbqPDYKWZ/Mf7vWsWobk0X6/xcY6e9wVaX5UXLEjQTVBoWkaQvoQRDEtHE6vloSfkuq1sTZGPkaustkKada8p3+tHZM+0QYw6ySwD7w2AJ9pwrkgR8hzJWRPtbUKEmrbLdRs6d2YkfCC0S5b1Uk4e2pz1oAnSAHpn8zsLvY5fES+Ty2uIyWKSMmbxoDtQAepJG7XYMb/cyNEcx8mdspRx3V9V+UzikjOur8xuC784SJrXioSfqW1VpqOSckmgjiJuH7qcRLvu0G++YV61HjXUVwvZaXysSiLRQAGQq4Z10NRgFCU/FMtVPEEUvz3xTKrMssuN4xNw0bn8vTPRqJ3RS0EmKo1vTAu9lFfVco3UdjlDfw1X7D8/j1sJSgHKnFT6pyuNe9cbp3cm53Yv44Jfn9qeg6tJuRtQO6GQLdLB9XN6W02psADyAPDb/1qclP26+JoLMyvxf4LMl3tRo1hhAAAAAElFTkSuQmCC");
        }

        .main-container {
            text-align: center;
            padding-top: 20px;
        }

        .main-container h2 {
            font-family: "Ubuntu", Arial, sans-serif;
            font-weight: 500;
            font-size: 40px;
            line-height: 50px;
            background: rgba(112, 70, 155, 0.5);
            color: #fff;
            border-radius: 30px;
            text-transform: uppercase;
            margin-bottom: 15px;
            text-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
            padding: 20px 0;
        }

        .offerCard {
            background: #fff;
            box-shadow: 6px 7px 10px rgba(0, 0, 0, 0.16);
            padding: 20px 15px;
            text-align: center;
            margin-bottom: 20px;
            border-radius: 30px;
        }

        .offerCard h3 {
            font-family: "Roboto", Arial, sans-serif;
            font-weight: 400;
            font-size: 30px;
            line-height: 30px;
            color: #000;
            max-width: 350px;
            margin: 0 auto;
            margin-bottom: 25px;
        }

        .offerCard img {
            max-width: 285px;
            width: 65%;
        }

        .offerCard p {
            font-family: "Ubuntu", Arial, sans-serif;
            font-weight: 300;
            font-size: 23px;
            line-height: 30px;
            color: #000;
            text-align: left;
            margin-bottom: 0px;
        }

        .offerCard p span {
            font-family: "Ubuntu", Arial, sans-serif;
            font-weight: 500;
        }

        .offerCard-price {
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
        }

        .offerCard-newPrice {
            font-family: "Ubuntu", Arial, sans-serif;
            font-weight: 500;
            font-size: 60px;
            line-height: 60px;
            color: #2A6F5D;
        }

        .offerCard-oldPrice {
            font-family: "Ubuntu", Arial, sans-serif;
            font-weight: 400;
            font-size: 45px;
            line-height: 60px;
            color: #C4C4C4;
            position: relative;
        }

        .offerCard-oldPrice::after {
            content: "";
            display: block;
            width: 120%;
            height: 3px;
            background-color: #C4C4C4;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
html, body, .main-wrapper {
            height: 100%;
            background: #f5f2e9;
        }
        .main-wrapper {
            -webkit-background-size: cover;
            background-size: cover;
        }
        @media (max-width: 480px) {

            header,
            body {
                max-width: 480px;
                width: 480px;
            }

            .main-wrapper {
                background-size: 415%;
            }
        }

    </style>
</head>

<body>

    <div class="main-wrapper">

        <section class="header-container">
            <h1>Много ви благодаря!</h1>
            <h2>Вашата поръчка е приета!</h2>
            <ul class="orderDetails">
              <li class="orderDetails-item"><span>Наш специалист ще се свърже с вас, за да потвърди поръчката.</span></li>
              <li class="orderDetails-item"><span>Доставката се извършва с куриер до дома ви.</span></li>
              <li class="orderDetails-item"><span>Операторът разяснява всички подробности.</span></li>
              <li class="orderDetails-item"><span>Плаща се при получаване.</span></li>
            </ul>

        </section>



    </div>

    <script>
    	history.pushState(null, null, location.href);
    	history.back();
    	history.forward();
    	window.onpopstate = function () { history.go(1); };
    </script>




</body></html>
