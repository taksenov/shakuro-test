// IDEA: 1) переименование функции, во что-то осмысленное
// IDEA: 2) оформление js-doc
// IDEA: 3) инкрементацию декрементацию правильно описать (i++ i--)
// IDEA: 4) проверка на пустую строку и на проверку наличия аргументов,
//       проверки сделаны не все(которые тут должны быть, но и код "абстрактный"),
//       можно выбрасывать ошибки throw new Error при проверке
// IDEA: 5) match тяжелый, лучше пустую строку на длину проверять
// IDEA: 6) точное сравнение в условиях === вместо ==
// IDEA: 7) let вместо var более предпочтителен
// IDEA: 8) один let и дальнейшее перечисление объявляемых переменных
//       через запятую
// IDEA: 9) дать понятные имена аргументам
// IDEA: 10) там где только один ретерн, выводить в строчку,
//       без фигурных скобок
// IDEA: 10) старый код :    if (firstIndex != -1) {
//                               if (secondIndex == -1) {
//                           ...
//       можно переписать переписать проще, см. строки 52-53

/**
 * Функция возвращает максимальный индекс вхождения пары
 * символов firstChar или secondChar в строку inputString
 *
 * Функция возвращает -1, если:
 * а) типы входных параметров не string;
 * б) функция вызвана без аргументов;
 * в) inputString пустая
 *
 * @param {string} inputString
 * @param {string} firstChar
 * @param {string} secondChar
 */
function findStringMaxIndex(inputString, firstChar, secondChar) {
    if (arguments.length === 0) return -1;
    if (typeof inputString !== 'string') return -1;
    if (inputString.length === 0) return -1;

    let i = inputString.length - 1,
        firstIndex = -1,
        secondIndex = -1;

    while (firstIndex === -1 && secondIndex === -1 && i > 0) {
        if (inputString.substring(i, i + 1) === firstChar) {
            firstIndex = i;
        }
        if (inputString.substring(i, i + 1) === secondChar) {
            secondIndex = i;
        }
        i--;
    }

    if (firstIndex !== -1) return firstIndex;
    return secondIndex;
} //findStringMaxIndex

// Пример работы:
console.log(findStringMaxIndex('        ', ' ', 'Q')); // 7
console.log(findStringMaxIndex('qq EEEE    ttttyy    QQQ', ' ', 'Q')); // 23
console.log(findStringMaxIndex('qq EEEE    ttttyy    QQQ', ' ', 'y')); //  20
console.log(findStringMaxIndex(12345, ' ', 'Q')); // -1

console.log(findStringMaxIndex('12345', 3, 'Q')); // -1  <-- тут типы параметров firstChar, secondChar можно насильно
// к строке приводить, хотя читая js-doc уже будет понятно,
// что параметры должны быть строками,
// в противном случае функция возвращет -1

console.log(findStringMaxIndex('12345', '', 'Q')); // -1
console.log(findStringMaxIndex('12345', '', '4')); // 3
console.log(findStringMaxIndex('12345', '', '')); // -1
console.log(findStringMaxIndex('        ', ' ')); // 7
console.log(findStringMaxIndex('12345')); // -1
