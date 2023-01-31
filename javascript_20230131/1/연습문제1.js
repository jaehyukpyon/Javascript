// 1. 아래 배열에서 수학, 영어 점수의 총합이 140 이상인 사람만 남기는 코드를 작성하세요. (filter 활용)
let students1 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];

let result1 = students1.filter((element) => element.score.math + element.score.english >= 140);

// 2. 아래 배열에서 모든 점수의 총합을 구하는 코드를 작성해주세요. (reduce 활용)
let students2 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70, science: 60 } },
    { id: 2, name: 'Kim', score: { math: 80, english: 60, science: 100 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50, science: 40 } },
];

let result2 = students2.reduce((acc, curr) => acc + curr.score.math + curr.score.english + curr.score.science, 0);
let result2_1 = students2.reduce((sum, current) => {
    return sum + Object.values(current.score).reduce((sum, current) => sum + current, 0);
});

// 3. 아래 배열에서 모든 사람들의 이름을 Park 으로 바꾸는 코드를 작성해주세요. (map 활용, spread 연산자 활용)
let students3 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Kim', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
];

let result3 = students3.map(element => {
    return {
        ...element,
        name: 'Park',
    }
});
console.log(result3);

// 4. 아래 배열에서 이름이 Kim 인 사람들을 찾고, score 에 science: 100, history: 100 을 추가해주세요. (filter, map 활용, spread 연산자 활용)
let students4 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70, korean: 30, physics: 60 } },
    { id: 2, name: 'Kim', score: { math: 80, english: 60, korean: 40, physics: 40 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50, korean: 50, physics: 80 } },
];

let result4 = students4.filter((element) => element.name === 'Kim')
                .map(element => {
                    return {
                        ...element, 
                        score: {
                            ...element.score,
                            science: 100,
                            history: 100,
                        },
                    }
                });
console.log(result4);
