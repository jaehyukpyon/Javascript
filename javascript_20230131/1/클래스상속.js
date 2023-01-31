/*
1. 회사 사원을 정의하는 클래스를 만들고자 합니다. 이 회사 내부에는 기획팀, 개발팀이 따로 있습니다.
- 회사 사원은 기본적으로 이름과 나이 프로퍼티를 가지고 있고, ‘출근’ 이라고 출력하는 출근 메소드와 
‘퇴근’ 이라고 출력하는 퇴근 메소드가 있습니다. 이와 같은 회사 사원 클래스를 만들어보세요.
- 기획팀 회사 사원은 ‘기획’ 이라고 출력하는 기획 메소드를 가지고 있습니다. 이와 같은 기획팀 사원 클래스를 만들어보세요.
- 개발팀 회사 사원은 ‘개발’ 이라고 출력하는 개발 메소드를 가지고 있습니다. 이와 같은 기획팀 사원 클래스를 만들어보세요.
*/

class Employee {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    goToWork() {
        console.log('출근!');
    }
    backToHome() {
        console.log('퇴근!');
    }
}

class PlanningTeamEmployee extends Employee {

    plan() {
        console.log('기획!');
    }
}

class DevelopingTeamEmployee extends Employee {

    develop() {
        console.log('개발!');
    }
}