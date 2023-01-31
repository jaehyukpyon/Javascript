// 1. 아래 배열에서, 학생 별로 score 객체 안에 sum: (점수 총합) 을 추가하는 코드를 작성하세요. (map, spread 연산자, 비구조할당 활용)
let students1 = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } },
]

let result1 = students1.map(student => {
    const { math, english } = student.score;
    let sum = math + english;
    return {
        ...student,
        score: {
            ...student.score,
            sum,
        }
    }
})

// 2. 
let students = [
    { id: 1, name: 'Kim', score: { math: 50, english: 70 } },
    { id: 2, name: 'Park', score: { math: 80, english: 60 } },
    { id: 3, name: 'Lee', score: { math: 70, english: 50 } }, ,
    { id: 4, name: 'Choi', score: { math: 70, english: 50 } },
];

let sum = (...student) => {
    return student.reduce((sum, current) => {
        const { math, english } = current.score;
        return sum + math + english;
    })
}

let result2 = sum(...students);
