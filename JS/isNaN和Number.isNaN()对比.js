// 产生NaN的条件，一方面是数据运算的时候，返回了一个无法表示的数值，例如 0/0 就会返回 NaN
// 另一方面是需要做类型强制转化时，某些数据不能直接转化为数值类型，例如 1 - 'a' = NaN

// isNaN在处理的时候会判断传入的变量值能否转化为数字， 能的话返回false， 否则返回true
// 总结 isNaN(a), 只要 a 和数值型做运算能转化为数字，就返回false，不然返回true
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN([])); // false
console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(1)); // false
console.log(isNaN('1')); // false
console.log(isNaN('')); // false
console.log(isNaN(new Date())); // false
// 因为 Number(new Date()) 可以转化为数字 1637413803175
console.log(isNaN(new Date().toString())); // true
// 而toString()之后，返回的是一串字符串表示的时间，无法转成数值类型

// Number.isNaN是真正意义上判断变量是否为NaN， 不会做数据类型转换， 只有传入的值为NaN, 返回true， 否则返回false