let fruits = ['사과', '바나나', '배'];

let users = [
    { id: 1, name: "Kim" },
    { id: 2, name: "Kim" },
    { id: 3, name: "Park" }
];

let result = users.find(element => {
    return element.name === 'Kim'
});

// console.log(result);

let result2 = users.map(item => {
    return { id: item.id, name: item.name + ' John' }
});

let arr = [1, 2, 3, 4, 5];

// prevReturn -> previous return value
// currentElement -> 현재 접근하는 요소의 그 값
let result3 = arr.reduce((prevReturn, currentElement) => {
    console.log(`${prevReturn}, ${currentElement}`);
    return prevReturn + currentElement
}, 0); // 0은 초기 값 (prevReturn에 맨 처음에 할당 된다.)

console.log(result3);
