let user1 = {
    name: 'Kim',
    age: 20,
};

let user2 = {
    name: 'Lee',
    age: 20,
};

const showMsg = (user) => {
    const { name, age, mail = 'jay' } = user;
    console.log(`저는 ${name}이고, ${age}살입니다. 이메일 주소는 ${mail}입니다.`);
}

const showMsg2 = () => {
    const { name: userName1, age: userAge1 } = user1;
    const { name: userName2, age: userAge2 } = user2;
    console.log(`${userName1}, ${userName2}`);
}