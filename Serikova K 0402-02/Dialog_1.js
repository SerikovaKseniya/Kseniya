doctype html>
<html lang="Ru-Ru">

<head>
    <meta charset="utf-8">
    <title>Шаблон страницы</title>
    <meta name="description" content="The HTML5 sample">
    <meta name="author" content="from internet">
    <link rel="stylesheet" href="css\styles.css">
</head>

<body>
    <header>
        <hr>
        <h1>Заголовок страницы</h1>
        <hr>
    </header>
    <nav>
        <h2>Навигация</h2>
        <hr>
    </nav>
    <main>
        <header>
            <h2>Заголовк контента</h2>
            <hr>
        </header>

        <article>
            <header>
                <h3>Статья 1</h3>
            </header>
            <section>
                <h4>Введение</h4>
            </section>
            <section>
                <h4>Основная часть</h4>
            </section>
            <section>
                <h4>Заключение</h4>
            </section>
            <footer>
                <hr>
                <h4>Источник информации</h4>
                <address>
                    Ссылка на источник в сети интернет
                </address>
            </footer>
        </article>

    </main>
    <footer>
        <hr>
        <h4>Информация о разработчиках, контакты</h4>
        <hr>
    </footer>
    <script src="Dialog_1.js"></script>

</body>
<script>
let infoPazient=["Иванов","Иван", "Иванович", 15, "мая", 1974,"м"];
console.log(infoPazient);
console.log(infoPazient[0]);
console.log(infoPazient[5]);
/*
let lastname;
lastname=prompt("Введите имя пациента", lastname);
console.log(lastname);
infoPazient[0]= lastname;
console.log(infoPazient);
*/
var person = {
    "SNILS 1" : ["Иванов","Иван","Иванович", 15, "мая", 1974, "м","исполнено"],
    "SNILS 2" : ["Сидоров","Сидор","Сидорович", 20, "мая", 1980, "м","медотвод"],
    "SNILS 3" : ["Петрова","Мария","Ивановна", 1, "июня", 1975, "ж","назначено"],
};
/*
console.log(person);
SNILS4="SNILS 4"
let lastname;
lastname=prompt("Введите имя пациента", lastname);
//console.log(lastname);
infoPazient[0]= lastname;
console.log(infoPazient);
let firstname;
firstname=prompt("Введите имя пациента", firstname);
//console.log(lastname);
infoPazient[1]= firstname;
console.log(infoPazient);
let middlename;
middlename=prompt("Введите имя пациента", middlename);
//console.log(lastname);
infoPazient[2]= middlename;
console.log(infoPazient);
let date;
date=prompt("Введите имя пациента", date);
infoPazient[3]= date;
console.log(infoPazient);
person.SNILS4= infoPazient;
console.log(person); */
let SNILS;
SNILS=prompt("Введите SNILS пациента", SNILS);
infoname=person[SNILS];
console.log(infoname);
alert("Информация о пациенте"+infoname);
let phase;
phase=prompt("Введите действие или медотвод или назначено или исполено", phase);
infoname.push(phase);
console.log(infoname);
person[SNILS]=infoname;
console.log(person);
// Извлекаем информацию о текущем статусе прививки
statusPriv = person[SNILS][7];
console.log(statusPriv);
// Проверяем возможность изменения статуса
if (statusPriv === "исполнено") {
    alert("Отказано в прививке пациенту"+ infoname);
  }  else if (statusPriv === "медотвод") {
      alert("Отказано в привике пациенту"+ infoname);
  } else {
      alert("Исполнить прививку пациенту"+ infoname)
  }
  // Предлагаем закончить или продолжить работу в этом окне
  var prolongation = confirm ("Продолжить проверку прививочного статуса?");
  if ( prolongation) {
      console.log("Введите СНИЛС");
  } else {
      console.log("Сеанс проверки прививочного статуса закончен");
  }
   //Предлагаем закончить или продолжить работу в этом окне
   while (confirm("Продолжить проверку прививочного статуса?")) {
                ForSecond = FirstFunction(person, SNILS);
                SecondFunction(statusPriv, infoname);
            }
            console.log("Сеанс проверки прививочного статуса закончен");





</script>
</html>