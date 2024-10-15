function problem4(word) {
  var answer;
  const setArray = Array.from(word);
  console.log(setArray);

  const setAlphabat = setArray.map((str) => {
    return str.charCodeAt();
  });

  const newArray = setAlphabat.map((item) => {
    if (item < 65) {
      return (item = String.fromCharCode(32));
    } else if (65 <= item && item <= 90) {
      return (item = String.fromCharCode(122 + 65 - item).toUpperCase());
    } else {
      return (item = String.fromCharCode(122 + 97 - item));
    }
  });

  answer = newArray.join("");

  return answer;
}

module.exports = problem4;
