/*
typeof检测数据类型， 根据二进制码的后三位判断
不同的对象在底层都表示为二进制，在js中二进制前三位都为0的话会被判断为object类型
1:整型
000:：object
100：字符串
110：布尔

Array: 1000100010001000
null:  0000000000000000

typeof [] →"object"
typeof null→"object"
*/
console.log(typeof null);
console.log(typeof []);
