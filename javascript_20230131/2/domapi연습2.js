let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let result = document.getElementById('result');

plus.addEventListener('click', () => {
    let val = Number(result.innerHTML) + 1;
    result.innerHTML = val;
});

minus.addEventListener('click', () => {
    let val = Number(result.innerHTML) - 1;
    result.innerHTML = val;
});