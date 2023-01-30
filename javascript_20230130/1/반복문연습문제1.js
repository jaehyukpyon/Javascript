// 1. 1 부터 100 까지의 수 중 짝수만 출력하는 반복문을 작성해보세요.
// 2. 유저가 ‘그만’ 이라고 입력할 때까지 계속해서 prompt 를 띄우는 반복문을 작성해보세요.


// 1번
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) console.log(i);
}

// 2번
while (true) {
    let input = prompt('say something');
    if (input === '그만') break;
}