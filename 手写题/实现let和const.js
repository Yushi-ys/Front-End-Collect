(function () {
  var name = "涛涛";
  console.log(name); // 涛涛
})();
console.log(name); // undefined

const _const = (key, value) => {
  if (window.hasOwnProperty(key)) throw new Error("");
  if (!value) throw new Error("");
  window[key] = value;
  Object.defineProperty(window, key, {
    enumerable: false,
    configurable: false,
    writable: true,
    get() {
      return value;
    },
    set(newValue) {
      if (value !== newValue) throw new Error("");
      else return value;
    },
  });
};

_const("obj", { name: "shitao" });
_const("grade", "初三");
