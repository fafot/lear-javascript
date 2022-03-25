function введитеВозраст() {
    // Вызвать promt, в который нужно указать возраст
    //const age = prompt("Введите ваш возраст");
    const age = "36";
    const parsedAge = Number.parseInt(age, 10);
    const currentTime = new Date();
    textAge = parsedAge
    if (Number.isNaN(parsedAge)) {
        console.log("Age is invalid");
    } else {
        console.log(`Ваш возраст ${parsedAge}`);
    }
    if (parsedAge >= 35) {
        console.log("Nezalejnosti sqr");
    }
    if (currentTime.getSeconds() % 2 === 0 && parsedAge%2!=0) {
        console.log(currentTime.getMilliseconds()%parsedAge)
    
    }
if(currentTime.getSeconds()%2!=0 && parsedAge%2===0) {convertNumberToText(`${parsedAge}`);}

    // Если возраст больше 35, то вызвать alert с адресом ближайщего для тебя палеонтологического музея и закончить выполнение функции
    // Если текущая секунда четная и возраст нечётный, то вызвать alert с содержанием остаток деления времени в миллисекундах на возраст и закончить выполнение функции
    // Если секунда нечётная, а возраст чётный, то вызвать alert с содержанием возраста в строчном виде. Например, 30 - тридцить, 24 - двадцать четыре, 7 - семь
    // Если ничего из этого не подошло, то написать в консоль (console.log) возраст и время
}
введитеВозраст();

/**
 * Функция, которая конвертирует число меньше ста в строчном виде
 * @param {number} input Число
 */
function convertNumberToText(input) {
  const fromZeroToNineteen = ["один", "два", "три", "девятнадцать"];
  const fromTwentyToNinety = ["двадцать", "тридцать", "девяносто"];
  const result = null;
  // Если input больше ста, то вернуть null

  // Если input меньше двадцать, то использовать только fromZeroToNineteen
  // return;

  // Если input больше или равно двадцати, то число нужно представить в виде строки, и первый символ строки перевести в текст из массива fromTwentyToNinety, а второй символ из массива fromZeroToNineteen
  return result;
}
// comment