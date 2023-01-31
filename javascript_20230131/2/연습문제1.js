/*
1. 위 html 에서, first 라는 id 를 가진 태그를 가져와주세요.
2. 위 html 에서, a 태그를 모두 가져와주세요.
3. 위 html 에서, div 태그를 모두 가져와주세요.
4. 위 html 에서, second 라는 클래스 이름을 가진 태그를 모두 가져와주세요.
5. 위 html 에서, second 라는 클래스 이름을 가진 div 태그를 가져와주세요.
6. 위 html 에서, second 라는 클래스 이름을 가진 div 태그 내부의 a 태그를 가져와주세요.
*/
// 1
var first_id = document.getElementById('first')
// 2
var a_tags = document.getElementsByTagName('a');
// 3
var div_tags = document.getElementsByTagName('div');
// 4
var second_class_tags = document.getElementsByClassName('second');
// 5
var second_class_div_tags = document.querySelectorAll('div.second');
// 6
var second_class_div_a_tags = document.querySelectorAll('div.second > a');