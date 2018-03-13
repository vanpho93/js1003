function div(a, b) {
    if (b === 0) throw new Error('Divide by zero.'); 
    return a / b;
}

console.log(div(10, 0));
