const _new = function (fn, args) {
  const obj = Object.create(fn.prototype);
  const res = fn.call(obj, args);
  return res instanceof Object ? res : obj;
};

function People(name) {
    this.name = name;
    this.show = () => {
        console.log(this.name);
    }
}

const st = _new(People, "涛涛");
console.log(st);