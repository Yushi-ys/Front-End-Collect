// 如果参数的小数部分大于 0.5，则往负无穷和正无穷四舍五入;
// 如果参数的小数部分小于 0.5，则往0四舍五入;
// 如果参数的小数部分恰好等于0.5，则舍入到下一个在正无穷（+∞）方向上的整数

console.log(Math.round(-10.5)); // -10
console.log(Math.round(10.5)); // 11

console.log(Math.round(-8.7)); // -9
console.log(Math.round(8.7)); // 9

console.log(Math.round(-5.2)); // -5
console.log(Math.round(5.2)); // 5