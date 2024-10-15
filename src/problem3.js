function problem3(number) {
  var answer;
  let setArray = [];

  for (let i = 1; i <= number; i++) {
    setArray.push(String(i));
  }

  const newArray1 = setArray.filter((num) => {
    return num.includes(3) || num.includes(6) || num.includes(9);
  });

  const newArray2 = newArray1.join("").split("");

  const total = newArray2.filter((num) => {
    return num.includes(3) || num.includes(6) || num.includes(9);
  });

  answer = total.length;
  return answer;
}

module.exports = problem3;
