let arr = [1, 2, 3, 4, 5, 6];


console.log(Array.isArray(arr));

console.log(arr instanceof Array);

console.log(arr.constructor === Array);

console.log(Array.prototype.isPrototypeOf(arr));

console.log(Object.prototype.toString.call(arr));