/*
함수 표현식, 화살표 함수 형태로 각각 작성

function calculator(type, a, b) {
	if (type === 'sum') {
        return a + b
	} else if (type === 'subtract') {
        return a + b
	} else {
        alert('올바른 타입을 명시해주세요.')
	}
}
*/

let calculator = function (type, a, b) {
    if (type === 'sum') {
        return a + b
	} else if (type === 'subtract') {
        return a - b
	} else {
        alert('올바른 타입을 명시해주세요.')
	}
}

let calculator2 = (type, a, b) => {
    if (type === 'sum') {
        return a + b
	} else if (type === 'subtract') {
        return a - b
	} else {
        alert('올바른 타입을 명시해주세요.')
	}
}