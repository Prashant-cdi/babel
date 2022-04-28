//default
let add = (a,b=3) =>{
    return a+b;
}
console.log("usage of default");
console.log(add(10,20));
console.log(add(50));

// spread

let arr1= [1,'a','b',2,4,'c',10];

let arr2 = [20,'o','m',4,6];

let arr3 = [...arr1,...arr2];


console.log("usage of spread");
console.log(arr3);

//rest

let product = (...args) => {

    let p =1;

    args.forEach((item)=>{
        p=p*item;
    });

    return p;
}

console.log("usage of rest");
console.log(product(1,2,3,4,5,6));