// isNaN在判断的时候会对传入的变量进行转化, 若可以转化为数字, 则返回 false, 否则返回 true
console.log(isNaN(NaN)); // true
console.log(isNaN(undefined)); // true
console.log(isNaN({})); // true
console.log(isNaN([])); // false
console.log(isNaN(true)); // false
console.log(isNaN(null)); // false
console.log(isNaN(1)); // false
console.log(isNaN("1")); // false
console.log(isNaN("")); // false
console.log(isNaN(new Date())); // false, 因为 Number(new Date()) 可以转化为数字 1677067649725(举个例子)
console.log(isNaN(new Date().toString())); // true, toString()之后，返回的是一串字符串表示的时间，无法转成数值类型

// 但是 Number.isNaN 是真正意义上的判断, 当前变量是否为 NaN, 不会做数据类型转换, 只有传入的值为NaN, 返回true, 否则返回false
