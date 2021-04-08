/* Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/

function convert() {
    const Tc = +document.getElementById("degreesCelsius").value;
    const Tf = (9 / 5) * Tc + 32
    document.getElementById("result").innerHTML = `${Tc}°C = ${Tf}°F`;
}

/* Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
*/

function copyName() {
    let admin, name;
    name = 'Василий';
    admin = name;
    alert(`admin = ${admin}`);
}

/*
*Чему будет равно JS-выражение 1000 + "108"
1000 + "108" = 1000108, typeof = string
*/
function addition() {
    alert(`typeof = ${typeof (1000 + "108")}\n1000 + "108" = ${1000 + "108"}`);
}
