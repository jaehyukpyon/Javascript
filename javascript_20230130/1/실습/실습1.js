// 실습 1. 가위 바위 보 게임 만들기
// 가위 > 보, 바위 > 가위, 보 > 바위
let 가위 = 1;
let 바위 = 2;
let 보 = 3;

let user = Number(prompt('가위(1) 바위(2) 보(3)?'));
let computer = Math.floor((Math.random() * (3 - 1)) + 1);


if (user === computer) {
    console.log(`비겼습니다! user: ${user}, computer: ${computer}`);
} else if (
    user === 1 && computer === 3 ||
    user === 2 && computer === 1 ||
    user === 3 && computer === 2 
) {
    console.log(`이겼습니다! user: ${user}, computer: ${computer}`);
} else {
    console.log(`졌습니다.! user: ${user}, computer: ${computer}`);
}

