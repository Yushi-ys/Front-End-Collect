var age = 'name';
var obj = {
    name = 'zhufeng',
    age: 8
};
console.log(obj.age); //=> 8
console.log(obj['age']); // =>8
console.log(obj[age]); //=>obj[age变量] =>obj['name'] =>获取name属性名的属性值 =>"zhufeng"

/*

1. obj[key]: key代表的是循环中的一个变量
2. obj['key']: key代表的是obj的一个属性， obj['key'] 即代表的是取obj的key属性值
3. obj.key: 此时obj.key相当于obj['key'], key代表的是obj的一个属性

如果key值不确定，而是一个变量的时候，只能通过obj[key]来访问

*/