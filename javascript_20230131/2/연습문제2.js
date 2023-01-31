// 1. 아래 html 에서, html 은 수정하지 않고 자바스크립트를 활용해서 2번째 a 태그의 내용을 ‘네이버로 가기’로, 클릭 시 네이버로 가도록 코드를 작성해주세요.
var a = document.getElementsByTagName('a')[1];
a.innerText = '네이버로 가기'
a.