let arr = [2, 3, 1, 5, 4]; // 숫자가 아닌 문자열로 취급하여 정렬된다. 
arr.sort();
console.log(arr);

let arr2 = [2, 3, 1, 5, 4];
arr.sort((a, b) => a - b);
// a - b < 0 -> b가 더 크다 즉, 음수라면 a, b 순서대로 배치해라
// a - b > 0 -> a가 더 크다 즉, 양수라면 b, a 순서대로 배치해라


