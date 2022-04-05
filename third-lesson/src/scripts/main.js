// Есть цель, это игрушка с какой-то стоимостью
// Нам нужно знать, сколько осталось накопить
// Есть накопленная сумма

// Копилка
let piggyBank = 10;

function createTarget(price, name) {
  let targetPrice = price;
  let targetName = name;

  function consoleLeft() {
    // Третья задача
    // Если в копилке недостаточно денег, то написать, сколько осталось накопить
    // Если в копилке достаточно денег, то написать, что игрушку можно купить
    console.log(
      `На игрушка ${name} осталось накопить ${targetPrice - piggyBank} монет`
    );
  }
  return consoleLeft;
  // Вторая задача
  // Функция createTarget должна возвращать объект со свойствами:
  // 1. Имя цели
  // 2. Сколько Осталось - эта должна быть функция, как consoleLeft
  // 3. Купить - это функция, которая будет вычитать из копилки сумму стоимости игрушки
  // function buy() {
  //   //
  // }
  // return { targetName, consoleLeft, buy };
}

let car = createTarget(200, "Car");
let cellphone = createTarget(1000, "Cellphone");
let quadcopter = createTarget(1500, "Quadcopter");
// console.log(`В копилке лежит ${piggyBank} монет`);
// car();
// cellphone();
// quadcopter();

// piggyBank = piggyBank + 200;

// console.log(`В копилке лежит ${piggyBank} монет`);

// car();
// cellphone();
// quadcopter();

// Задача
// 1. Добавить монету в копилку
// function addToPiggy(amount){
// Функция должна увеличивать содержимое копилки
// После этого написать сколько лежит в копилке
// }

// После решения трёх задач, расскоментировать и проверить себя

// console.log(car.targetName) // "Car"
// cellphone.consoleLeft() // На игрушка "Cellphone" осталось накопить 190 монет
// addToPiggy(250) // `В копилке лежит 260 монет`
// car.consoleLeft() // Игрушку Car можно купить
// addToPiggy(2500) // `В копилке лежит 2760 монет`
// quadcopter.buy()
// console.log(piggyBank) // В копилке лежит 1260 монет
