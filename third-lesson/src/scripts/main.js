// Есть цель, это игрушка с какой-то стоимостью
// Нам нужно знать, сколько осталось накопить
// Есть накопленная сумма
let piggyBank = 10;

function createTarget(price, name) {
  let targetPrice = price;
  let targetName = name;

  function consoleLeft() {
    console.log(
      `На игрушка ${name} осталось накопить ${targetPrice - piggyBank} монет`
    );
  }

  return consoleLeft;
}

let car = createTarget(200, "Car");
let cellphone = createTarget(1000, "Cellphone");
let quadcopter = createTarget(1500, "Quadcopter");
console.log(`В копилке лежит ${piggyBank} монет`);
car();
cellphone();
quadcopter();

piggyBank = piggyBank + 200;

console.log(`В копилке лежит ${piggyBank} монет`);

car();
cellphone();
quadcopter();
