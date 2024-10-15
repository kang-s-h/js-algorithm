function problem1(pobi, crong) {
  if (pobi[0] + 1 === pobi[1] && crong[0] + 1 === crong[1]) {
    const big = (a) => {
      let result1 = 0;
      let result2 = 1;

      Array.from(String(a)).forEach((num) => {
        result1 += parseInt(num);
        result2 *= parseInt(num);
      });
      return result1 >= result2 ? result1 : result2;
    };

    const total = (leftRight) => {
      return big(leftRight[0]) >= big(leftRight[1])
        ? big(leftRight[0])
        : big(leftRight[1]);
    };

    if (total(pobi) > total(crong)) {
      answer = 1;
    } else if (total(pobi) < total(crong)) {
      answer = 2;
    } else {
      answer = 0;
    }
  } else {
    answer = -1;
  }
  return answer;
}

module.exports = problem1;
