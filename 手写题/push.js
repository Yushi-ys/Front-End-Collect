Array.prototype._push = function () {
  const arr = this;
  const args = arguments;
  const len = arguments.length;
  for (let i = 0; i < len; i++) arr[arr.length++] = args[i];
};

const res = [];
res._push(1, 3, [4, 5]);
res._push(...[9, 10]);

console.log(res); // [ 1, 3, [ 4, 5 ], 9, 10 ]