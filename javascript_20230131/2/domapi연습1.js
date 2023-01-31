let sumbtn = document.getElementById('sumbtn')
let result = document.getElementById('result');

const sumBtnClickEvent = function () {
    result.innerHTML = Number(document.getElementById('input1').value) + Number(document.getElementById('input2').value); 
    console.log(this); // 버튼이 클릭 되면 this는 버튼을 가리킨다.
};

sumbtn.addEventListener('click', sumBtnClickEvent);