let player = {
    hp: 50,
}

let warrior = {
    ap: 20, 
    mp: 0,
}

warrior.__proto__ = player;
console.log(warrior.hp);