const task1 = `- Створити змінні. Присвоїти кожному з них значення: 
  'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. 
  Вивести кожну змінну за допомогою: console.log , alert, document.write`;

const task2 = `- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. 
  З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)`;

const task3 = `- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
  let a = 100; let b = '100'; let c = true;`;

const task4 = `- За допомогою 3х різних prompt() отримати 3 слова які являються вашими 
  Ім'ям, По-Батькові та роками. та вивести в консоль`;

const styleBoolean = 'color: mediumpurple;';
const styleHeader = 'border-left: 3px solid red; padding-left: 10px; display: block;';
const styleNone = 'color: none;';
const styleNumber = 'color: forestgreen;';
const styleString = 'color: cornflowerblue;';

const headerBegin = `<p style="${styleHeader}">`, headerEnd = '</p>';
const htmlBoolean = `<span style="${styleBoolean}">`;
const htmlNumber = `<span style="${styleNumber}">`;
const htmlString = `<span style="${styleString}">`;
const htmlEOL = '</span><br>';

/* Task 1 ***************************************/

let sVar1 = 'hello', sVar2 = 'owu', sVar3 = 'com', sVar4 = 'ua';
let nVar1 = 1, nVar2 = 10, nVar3 = -999, nVar4 = 123, nVar5 = 3.14, nVar6 = 2.7, nVar7 = 16;
let bVar1 = true, bVar2 = false;

console.log('%c%s', styleHeader, task1);
console.log('sVar1 = %c"%s"', styleString, sVar1);
console.log('sVar2 = %c"%s"', styleString, sVar2);
console.log('sVar3 = %c"%s"', styleString, sVar3);
console.log('sVar4 = %c"%s"', styleString, sVar4);
console.log('nVar1 = %c%s', styleNumber, nVar1);
console.log('nVar2 = %c%s', styleNumber, nVar2);
console.log('nVar3 = %c%s', styleNumber, nVar3);
console.log('nVar4 = %c%s', styleNumber, nVar4);
console.log('nVar5 = %c%s', styleNumber, nVar5);
console.log('nVar6 = %c%s', styleNumber, nVar6);
console.log('nVar7 = %c%s', styleNumber, nVar7);
console.log('bVar1 = %c%s', styleBoolean, bVar1);
console.log('bVar2 = %c%s', styleBoolean, bVar2);

document.write(headerBegin, task1, headerEnd);
document.write('sVar1 = ', htmlString + '"' + sVar1 + '"', htmlEOL);
document.write('sVar2 = ', htmlString + '"' + sVar2 + '"', htmlEOL);
document.write('sVar3 = ', htmlString + '"' + sVar3 + '"', htmlEOL);
document.write('sVar4 = ', htmlString + '"' + sVar4 + '"', htmlEOL);
document.write('nVar1 = ', htmlNumber + nVar1, htmlEOL);
document.write('nVar2 = ', htmlNumber + nVar2, htmlEOL);
document.write('nVar3 = ', htmlNumber + nVar3, htmlEOL);
document.write('nVar4 = ', htmlNumber + nVar4, htmlEOL);
document.write('nVar5 = ', htmlNumber + nVar5, htmlEOL);
document.write('nVar6 = ', htmlNumber + nVar6, htmlEOL);
document.write('nVar7 = ', htmlNumber + nVar7, htmlEOL);
document.write('bVar1 = ', htmlBoolean + bVar1, htmlEOL);
document.write('bVar2 = ', htmlBoolean + bVar2, htmlEOL);

alert('sVar1 = "' + sVar1 + '"');
alert('sVar2 = "' + sVar1 + '"');
alert('sVar3 = "' + sVar1 + '"');
alert('sVar4 = "' + sVar1 + '"');
alert('nVar1 = ' + nVar1);
alert('nVar2 = ' + nVar2);
alert('nVar3 = ' + nVar3);
alert('nVar4 = ' + nVar4);
alert('nVar5 = ' + nVar5);
alert('nVar6 = ' + nVar6);
alert('nVar7 = ' + nVar7);
alert('bVar1 = ' + bVar1);
alert('bVar1 = ' + bVar2);

/* Task 2 ***************************************/

console.log('%c%s', styleHeader, task2);

let firstName = 'Віктор', middleName = 'Павлович', lastName = 'Таран';
let sResult = firstName + ' ' + middleName + ' ' + lastName;

console.log('firstName + %c" "%c + middleName + %c" "%c + lastName = %c"%s"',
    styleString, styleNone, styleString, styleNone, styleString, sResult);

/* Task 3 ***************************************/

console.log('%c%s', styleHeader, task3);

let a = 100; let b = '100'; let c = true;

console.log('typeof a = %c"%s"', styleString, typeof a);
console.log('typeof b = %c"%s"', styleString, typeof b);
console.log('typeof c = %c"%s"', styleString, typeof c);

/* Task 4 ***************************************/

console.log('%c%s', styleHeader, task4);

firstName = prompt('Введіть ім\'я:', firstName);
middleName = prompt('Введіть по батькові:', middleName);
let yourAge = +prompt('Введіть вік:', 20);

console.log('Ім\'я = %c%s', styleString, firstName);
console.log('По батькові = %c%s', styleString, middleName);
console.log('Вік = %c%s', styleNumber, yourAge);
