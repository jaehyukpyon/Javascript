let user = {
    name: 'Kim',
    age: 20,
    sayHi: function () {
        let sayMsg = () => console.log(`sayMsg: ${this.name}`);
        sayMsg();
    }
}

user.sayHi();