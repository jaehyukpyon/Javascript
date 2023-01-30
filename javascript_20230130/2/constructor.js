function User (name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
        alert(`저는 ${this.name}입니다.`);
    }
}

let user = new User('jaehyuk', 26);
console.log(user);
user.sayHi();
