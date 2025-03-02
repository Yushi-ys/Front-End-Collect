// ==：等同，比较运算符，两边值类型不同的时候，先进行类型转换，再比较；

// ===：恒等，严格比较运算符，不做类型转换，类型不同就是不等；

// Object.is和===有两处不同
console.log(+0 == -0); // true
console.log(Object.is(+0, -0)); // false

console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true