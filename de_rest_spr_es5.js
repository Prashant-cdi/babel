"use strict";

//default
var add = function add(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b;
};

console.log("usage of default");
console.log(add(10, 20));
console.log(add(50)); // spread

var arr1 = [1, 'a', 'b', 2, 4, 'c', 10];
var arr2 = [20, 'o', 'm', 4, 6];
var arr3 = [].concat(arr1, arr2);
console.log("usage of spread");
console.log(arr3); //rest

var product = function product() {
  var p = 1;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (item) {
    p = p * item;
  });
  return p;
};

console.log("usage of rest");
console.log(product(1, 2, 3, 4, 5, 6));
