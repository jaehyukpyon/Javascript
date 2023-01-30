// 1. 아래 객체에서, 영어 점수의 총합을 계산하는 코드를 작성하세요. (reduce 활용)
let scores = {
    Kim: { math: 50, english: 70 },
    Park: { math: 70, english: 60 },
    Lee: { math: 80, english: 50 }
};
let students = Object.values(scores);
let englishTotal = students.reduce((prev, cur) => {
    console.log(`${prev}, ${cur}`);
    return prev + cur['english'];
}, 0);
console.log(englishTotal);

// 2. 아래 배열에서, 수학 점수가 60점 이상인 사람들만 남기는 코드를 작성하세요. (filter 활용)
let students2 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];

let result = students2.filter(element => element.score.math >= 60);
console.log(result);
// 3. 아래 배열에서, 학생 별로 sum: (점수 총합) 을 추가하는 코드를 작성하세요. (map 활용)
let students3 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];
let result2 = students3.map(element => {
    element.sum = element.score.math + element.score.english;
    return element;
});
console.log(result2);

