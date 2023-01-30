/*
prompt 를 활용하여, 사용자로부터 입력받은 점수가 95 이상이면 A, 
(95 미만이고) 90 이상이면 B, 
(90 미만이고) 85 이상이면 C, 
85 미만이면 F 를 출력하는 조건문을 작성해보세요.
*/

let score = Number(prompt('what is your score?'));

if (score >= 95) {
    alert('A')
} else if (score >= 90) {
    alert('B')
} else if (score >= 85) {
    alert('C')
} else {
    alert('F')
}
