let time = document.getElementById('time');
let london = document.getElementById('london');
let seoul = document.getElementById('seoul');
let newyork = document.getElementById('newyork');

const showTime = function (target) {
    let timeZone = '';
    if (target.id === 'london') {
        timeZone = 'Europe/London'
    } else if (target.id === 'newyork') {
        timeZone = 'America/New_York';
    } else if (target.id === 'seoul') {
        timeZone = 'Asia/Seoul';
    }
    console.log(timeZone);
    let now = new Date().toLocaleString('ko-KR', { timeZone });
    time.innerHTML = now;
};

let stop;

london.addEventListener('click', function () {
    let that = this;
    if (stop !== undefined) clearInterval(stop);
    stop = setInterval(() => {
        showTime(that);
    }, 1000);
});

seoul.addEventListener('click', function () {
    let that = this;
    if (stop !== undefined) clearInterval(stop);
    stop = setInterval(() => {
        showTime(that);
    }, 1000);
});

newyork.addEventListener('click', function () {
    let that = this;
    if (stop !== undefined) clearInterval(stop);
    stop = setInterval(() => {
        showTime(that);
    }, 1000);
});
