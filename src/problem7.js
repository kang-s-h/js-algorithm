function problem7(user, friends, visitors) {
  var answer;
  const setArray = [...new Set([...friends.flat(), ...visitors])];
  //모든 사람 모아서 중첩 삭제
  const filtering = friends.flatMap((item) => {
    if (item[0] == "mrko") {
      return item[1];
    }
    if (item[1] == "mrko") {
      return item[0];
    }
    return [];
  });
  filtering.push(user);

  const filteringfriends = setArray.filter((item) => !filtering.includes(item));
  console.log(filteringfriends);

  const friendsObj = Object.fromEntries(
    filteringfriends.map((key) => [key, 0])
  );

  ///////1번 완
  filtering.splice(filtering.length - 1, 1);

  filteringfriends.forEach((item) => {
    filtering.forEach((friend) => {
      if (
        friends.some(
          ([person1, person2]) =>
            (person1 === item && person2 === friend) ||
            (person1 === friend && person2 === item)
        )
      ) {
        friendsObj[item] += 10;
      }
    });
  });
  visitors.forEach((visitor) => {
    if (friendsObj.hasOwnProperty(visitor)) {
      friendsObj[visitor] += 1;
    }
  });

  const score = Object.entries(friendsObj).filter(([, score]) => score > 0);
  const finalFriends = score
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([name]) => name);
  answer = finalFriends;
  return answer;
}

module.exports = problem7;
