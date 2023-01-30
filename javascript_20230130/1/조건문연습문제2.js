/*
prompt 를 활용하여 사용자로부터 숫자를 2번 입력받아, 
두 숫자가 모두 홀수라면 ‘홀수’, 
두 숫자가 모두 짝수라면 ‘짝수’ 라고 출력하는 조건문을 작성해보세요.
*/

let a = Number(prompt('first number?'));
let b = Number(prompt('second number?'))

if (a % 2 === 0 && b % 2 === 0) {
    alert('even numbers')
} else if (a % 2 === 1 && b % 2 === 1) {
    alert('odd numbers')
} else {
    alert('none of above')
}
