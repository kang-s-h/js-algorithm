function problem6(forms) {
  var answer = [];
  // 배열에서 닉네임만 빼오기
  const filtering1 = forms.map((word) => {
    return word[1];
  });

  const filtering2 = String(filtering1)
    .split("")
    .map((item, index, array) => {
      if (item !== "," && array.includes(item, index + 1)) {
        return `${item}${array[index + 1]}`;
      }
    });

  const filtering3 = filtering2.filter((item) => {
    return item !== undefined && !item.includes(",");
  });

  const set = [...new Set(filtering3)];

  const pairing = set.filter((pair) => {
    const dupl = filtering1.filter((word) => word.includes(pair));
    return dupl.length > 1;
  });

  const filtering4 = pairing.map((word) => {
    const check = [];
    for (let i = 0; i < filtering1.length; i++) {
      if (filtering1[i].includes(word)) {
        check.push(i);
      }
    }
    return check;
  });

  const final = [...new Set(filtering4.flat())];
  console.log(final);
  const email = forms.map((word) => {
    return word[0];
  });

  for (let i = 0; i < final.length; i++) {
    answer.push(email[final[i]]);
  }
  console.log(email);

  return answer.sort();
}

module.exports = problem6;
