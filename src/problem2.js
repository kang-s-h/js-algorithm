function problem2(cryptogram) {
  var answer;
  let setArray = Array.from(cryptogram);

  for (let i = 0; i < cryptogram.length; i++) {
    let newArray;
    newArray = setArray.filter((item, index, Aarry) => {
      return item !== Aarry[index + 1] && item !== Aarry[index - 1];
    });

    if (newArray.join("") !== setArray.join("")) {
      setArray = newArray;
    } else {
      answer = newArray.join("");
      return answer;
    }
  }
  return answer;
}

module.exports = problem2;
