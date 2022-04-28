"use strict";

require("@babel/polyfill");

var arr1 = [10, 6, 3, 9, 17];
console.log(Array.isArray(arr1) ? arr1.indexOf(9) !== -1 : arr1.includes(9));
var names = ['Siya', 'Tom', 'Jerry', 'Bean', 'Ben'];
console.log(Array.isArray(names) ? names.indexOf('Tom') !== -1 : names.includes('Tom'));
console.log(Array.isArray(names) ? names.indexOf('Be') !== -1 : names.includes('Be'));
