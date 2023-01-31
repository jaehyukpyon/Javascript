/*
1. 회사 사원을 정의하는 객체를 만들고자 합니다.
- 회사 사원 객체 employee 는 ‘출근’ 이라고 출력하는 출근 메소드와 ‘퇴근’ 이라고 출력하는 퇴근 메소드를 가지고 있습니다. 
이 객체를 상속해서, 이름은 Kim 이고 나이는 20 인 회사 사원 객체 kim 을 만들어주세요.
- 이름과 나이를 받아서 회사 사원 객체를 생성하는 생성자 함수를 만들어서, 지금 만든 employee 객체를 상속해주세요.

*/

let employee = {
    goToWork() {
        console.log('출근!');
    },
    backToHome() {
        console.log('퇴근!');
    }
}

let kim = {
    __proto__: employee,
    name: 'Kim',
    age: 20
}

const Employee = function (name, age) {
    this.name = name;
    this.age = age;
    this.__proto__ = employee;
}