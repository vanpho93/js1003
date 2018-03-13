function add(a, b) {
    return a + b;
}

// console.log(add(4, 5));

function getRandom(x) {
    return Math.floor((x + 1) * Math.random())
}

function getRandom2(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

console.log(getRandom2(1, 3));
console.log(getRandom2(1, 3));
console.log(getRandom2(1, 3));
console.log(getRandom2(1, 3));

// |----|----|----|----|
// console.log(getRandom(2));
// console.log(getRandom(2));
// console.log(getRandom(2));
// console.log(Math.random());
// console.log(Math.round(4.5));
// console.log(Math.floor(1.9));
// console.log(Math.ceil(2.1));