// 双等号 == 比较规则：如果操作数之一是对象，另一个是数字或字符串
// 会尝试使用对象的 valueOf() 和 toString() 方法将对象转换为原始值

// 1. 重写 valueOf 方法
const a = {
  i: 1,
  valueOf() {
    return this.i++;
  },
};

console.log(a == 1 && a == 2 && a == 3);
