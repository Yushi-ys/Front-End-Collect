let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function fn(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let num = Math.floor(Math.random() * len);
    let temp = arr[num];
    arr[num] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// console.log(fn(arr));
Array.prototype.swap = function (left, right) {
  const temp = this[left];
  this[left] = this[right];
  this[right] = temp;
};
function f1(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const ran = Math.floor(Math.random() * len);
    arr.swap(i, ran);
  }
  return arr;
}
console.log(f1(arr));
