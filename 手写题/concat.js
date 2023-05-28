Array.prototype._concat = function () {
  const res = [];
  const arr = this;
  const args = arguments;
  // concat 不能改变原数组的原则
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
  }
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j++) {
        res.push(args[i][j]);
      }
    } else {
      res.push(args[i]);
    }
  }
  return res;
};

let res = [];
res = res._concat(1, 4, [6, 7, 8]);
console.log(res); // [ 1, 4, 6, 7, 8 ]