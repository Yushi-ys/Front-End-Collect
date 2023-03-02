Array.prototype._forEach = function (fn) {
  const arr = this;
  const _this = arguments[1] || window;
  if (typeof fn === "function") {
    for (let i = 0; i < arr.length; i++) {
      fn.call(_this, [arr[i], i, arr]);
    }
  } else {
    throw new Error("入参须为函数");
  }
};

const obj = {
  arr: [2, 5, 4, 0, 8, 9],
  show: function () {
    [0, 0, 0, 0, 0, 0].forEach(function (item, index) {
      console.log(this[index]);
    }, this.arr);
  },
};

obj.show();

// output:
// 2
// 5
// 4
// 0
// 8
// 9