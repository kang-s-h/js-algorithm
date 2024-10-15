## 🚀 기능 요구 사항

암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었다. 예를 들어 "browoanoommnaon"이라는 암호문은 다음과 같은 순서로 해독할 수 있다.

1. "browoanoommnaon"
2. "browoannaon"
3. "browoaaon"
4. "browoon"
5. "brown"

임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution 메서드를 완성하라.

### 제한사항

- cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
- cryptogram은 알파벳 소문자로만 이루어져 있다.

### 실행 결과 예시

| cryptogram        | result  |
| ----------------- | ------- |
| "browoanoommnaon" | "brown" |
| "zyelleyz"        | ""      |

<!--
1->2 : oomm 이 삭제 (바로 붙은것)
2->3 : nn이 바로 붙어서 삭제
3-> 4 :

결론 : 바로 붙은 문자는 둘 다 삭제한다.



1.문자열 받으면 처음과 바로 다음꺼 확인하기 => map이네
const a = "browoanoommnaon";
let t = Array.from(a).filter((item, index, arr) => {
  return item !== arr[index + 1];
});
console.log(t);

['b', 'r', 'o', 'w', 'o', 'a', 'n', 'o', 'm', 'n', 'a', 'o', 'n']
browoannaon
왜 다를까..

유레카!
리턴에 조건을 하나 더 추가해서 앞 뒤가 둘 다 다른 애만 필터링하면 되는구나
['b', 'r', 'o', 'w', 'o', 'a', 'n', 'n', 'a', 'o', 'n']

이제 이걸 반복하기만 하면 되는거지

처음에 받고 

문제 : 배열은 참조 타입이라 비교가 안된다...
=> 문자열로 바뀐 형태를 비교하면 가능
