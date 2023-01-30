let user = {
    name: 'Kim',
    age: 20
};

let busanUser = {
    name: 'Kim',
    age: 20,
    city: 'Busan'
};

let seoulUser = {
    name: 'Kim',
    age: 20,
    city: 'Seoul'
};

let copy = {
    ...user, // user { name: 'Kim', age: 20 } -> name: 'Kim', age: 20
    city: 'Rome'
}

let copy2 = {
    user, // { user: { name: 'Kim', age: 20 }, city: 'RRR' }
    city: 'RRR',
}


