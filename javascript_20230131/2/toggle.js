const toggle = function (text) {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block'
        alert(text);
    } else {
        menu.style.display = 'none'
    }
}
