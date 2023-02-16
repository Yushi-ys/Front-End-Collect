let arr = new Array(1, 2, 3, 4, 5, 6);

arr.forEach((item, index, arr) => {
  if (item >= 4) {
    return;
  }
  console.log("执行中....");
});
//throw new error 能让 forEach 停下来

for (const key in arr) {
  console.log(key, arr[key]);
  arr[key] += 1;
}
console.log(arr);
//只能遍历key, 可以改变原数组

for (let item of arr) {
  console.log(item);
  item += 1;
}
console.log(arr);
// 迭代器通过next()方法返回值，而不是指向地址，所以在for of 迭代中无法改变数组元素

let newArr = arr.map((item) => {
  return (item = item % 2 == 0 ? 1 : 0);
});
console.log(newArr);
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值

var ans = newArr.every((item) => {
  return item == 0;
});
console.log(ans);
//如果数组所有元素都满足什么条件就返回true，否则返回false

ans = newArr.some((item) => {
  return item == 0;
});
console.log(ans);
//如果数组中有一个元素满足条件就返回true，否则返回false

let sum = arr.reduce((pre, item) => {
  //[2, 3, 4, 5, 6, 7]
  return pre + item;
}, 0);
console.log(sum); //27
//函数后的参数，代表pre的初始值

for (let i = 0; i < 5; i++) {
  //0 1 2 3 4
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 5; i++) {
  //5 5 5 5 5
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 5; i++) {
  //0 1 2 3 4
  //闭包形成10个互不干扰的私有作用域
  (function fn(i) {
    setTimeout(() => {
      console.log(i);
    }, 0);
  })(i);
}
