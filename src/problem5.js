function problem5(money) {
  var answer;

  const setMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let calMoney = money;
  const cal = setMoney.map((mon) => {
    let moneyDivide = calMoney;
    let moneyRemain = calMoney;
    calMoney = moneyDivide % mon;
    return parseInt(moneyRemain / mon);
  });

  answer = cal;

  return answer;
}

module.exports = problem5;
