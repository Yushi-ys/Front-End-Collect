// forEach
let arr = [2, 5, 4, 0, 2, 5, 8, 5, 1, 2];
Array.prototype.myForEach = function (fn) {
  let arr = this;
  let _this = arguments[1] || window;
  if (typeof fn == 'function') {
    for (let i = 0; i < arr.length; i++) {
      fn.apply(_this, [arr[i], i, arr]);
    }
  } else {
    throw new Error('参数必须是function');
  }
}

// map
Array.prototype.myMap = function (fn) {
  let arr = this;
  let _this = arguments[1] || window;
  let res = [];
  if (typeof fn == 'function') {
    for (let i = 0; i < arr.length; i++) {
      res.push(fn.apply(_this, [arr[i], i, arr]));
    }
  } else {
    throw new Error('参数必须是function');
  }
  return res;
}

// filter
Array.prototype.myFilter = function (fn) {
  let arr = this;
  let _this = arguments[1] || window;
  let res = [];
  if (typeof fn == 'function') {
    for (let i = 0; i < arr.length; i++) {
      fn.apply(_this, [arr[i], i, arr]) ? res.push(arr[i]) : undefined;
    }
  } else {
    throw new Error('参数必须是function');
  }
  return res;
}

// some
Array.prototype.mySome = function (fn) {
  let arr = this;
  let _this = arguments[1] || window;
  let res = false;
  if (typeof fn == 'function') {
    for (let i = 0; i < arr.length; i++) {
      if (fn.apply(_this, [arr[i], i, arr])) {
        res = true;
        break;
      }
    }
  } else {
    throw new Error('参数必须是function');
  }
  return res;
}

// every
Array.prototype.myEvery = function (fn) {
  let arr = this;
  let _this = arguments[1] || window;
  let res = true;
  if (typeof fn == 'function') {
    for (let i = 0; i < arr.length; i++) {
      if (!fn.apply(_this, [arr[i], i, arr])) {
        res = false;
        break;
      }
    }
  } else {
    throw new Error('参数必须是function');
  }
  return res;
}

// reduce
Array.prototype.myReduce = function (fn, prev) {
  let arr = this,
    i = 0;
  if (typeof fn !== 'function') {
    throw new Error('参数必须是函数');
  }
  if (typeof prev == 'undefined') {
    prev = arr[0];
    i = 1;
  }
  for (; i < arr.length; i++) {
    prev = fn(prev, arr[i], i, arr);
  }
  return prev;
}