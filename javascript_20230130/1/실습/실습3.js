let number = 0;
let isFinished = 0;

while (!isFinished) {
    let user = prompt('부르고 싶은 숫나만큼 띄어쓰기해서 입력해주세요', '').split(' ');
    number += user.length;

    if (number >= 31) {
        alert('컴퓨터가 이김! 게임 종료!');
        isFinished = 1;
    }

    let computer = Math.floor(Math.random * 10) % 3 + 1;
    number += computer;

    if (number >= 31) {
        alert('사용자가 이김! 게임 종료!');
        isFinished = 1;
    }
}