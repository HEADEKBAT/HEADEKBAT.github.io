<html>

<head>
    <title>Сайт с кнопками</title>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="icon" href="./fav.png">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <meta http-equiv='cache-control' content='no-cache'>
    <meta http-equiv='expires' content='0'>
    <meta http-equiv='pragma' content='no-cache'>
</head>

<body>
    <div class="forms">


        <form id="textForm" class="textForm" action="./save-text.php" method="POST">
            <div>
                <label for="button1">Значение 1:</label>
                <input type="text" name="text1" id="text1">
                <button type="submit" name="submit1" data-textfield="text1">Сохранить</button>
            </div>
        </form>
        <form id="textForm" class="textForm" action="./save-text.php" method="POST">
            <div>
                <label for="button1">Значение 2:</label>
                <input type="text" name="text1" id="text2">
                <button type="submit" name="submit2" data-textfield="text2">Сохранить</button>
            </div>
        </form>
        <form id="textForm" class="textForm" action="./save-text.php" method="POST">
            <div>
                <label for="button1">Значение 1:</label>
                <input type="text" name="text3" id="text3">
                <button type="submit" name="submit3" data-textfield="text3">Сохранить</button>
            </div>
        </form>
        <form id="textForm" class="textForm" action="./save-text.php" method="POST">
            <div>
                <label for="button9">Значение 4:</label>
                <input type="text" name="text4" id="text4" value="Connecting" readonly="">
                <button type="submit" name="submit4" data-textfield="text4">Сохранить</button>
            </div>
        </form>
    </div>
    <style>
    body {
        background: #1B233E;
        width: 100vw;
        margin: 0;
    }

    .forms {
        padding: 20px;
        margin: 0 auto;
    }

    form div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    .textForm {
        margin: 5px auto;
    }

    .textForm label {
        color: #fff;
        font-size: 18px;
        line-height: 1.2;
    }

    .textForm input {
        padding: 5px 5px;
        border-radius: 5px;
        border: 1px solid #000;
    }

    .textForm button {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #000;
    }

    @media (max-width: 500px) {
        .textForm {
            margin-top: 20px;
        }

        form div {
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        .textForm label {
            flex: 1 1 100%;
        }

        .textForm input {
            flex: 0 0 auto;
            width: auto;
        }
    }
    </style>
    <script>
    text9 = "Connecting"
    $(document).ready(function() {
        $(".textForm").submit(function(e) {
            e.preventDefault(); // Предотвращает отправку формы по умолчанию

            var formData = $(this).serialize(); // Собирает данные формы
            var textFieldId = $(document.activeElement).attr("data-textfield"); // Получаем id текстового поля

            // Добавляем значение текстового поля к данным формы
            formData += "&text=" + $("#" + textFieldId).val();

            $.ajax({
                type: "POST",
                url: "save-text.php", // Путь к PHP-скрипту
                data: formData,
                success: function(response) {
                    // В этой функции можно обработать успешный ответ, если это необходимо
                    console.log("Данные успешно отправлены на сервер");
                    // console.log(formData);
                },
                error: function() {
                    // В этой функции можно обработать ошибку, если это необходимо
                    console.log("Произошла ошибка при отправке данных");
                }
            });
        });
    });
    </script>
</body>

</html>