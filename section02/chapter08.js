console.log("chapter 08");

// 배열의 메서드 2. 순회와 탐색
// 5가지의 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubleArr = [];
arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

//2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
