const sum = (...num) => {
    // return num; // 배열형태
    return num.reduce((sum, current) => sum + current, 0);
}

let result = sum(1, 2, 3, 4, 5);
console.log(result);