let scores = {
    Kim: 50,
    Park: 70,
    Lee: 80
};

let total = 0;

for (let student in scores) {
    total += scores[student];
}

console.log(`total: ${totatl}`);

// mp 10 소비 시 hp가 10 증가하는 메서드
let player = {
    hp: 80,
    mp: 50,
    heal: function () {
        this.mp -= 10;
        this.hp += 10;
    }
}
