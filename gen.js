function* generatorFunction(a) {
    yield a;
    yield a+1;
}

let g = generatorFunction(10);
console.log(g.next());
console.log(g.next());
