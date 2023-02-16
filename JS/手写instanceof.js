function myInstanceof(L, R) {
    let l = L.__proto__;
    let r = R.prototype;
    while (true) {
        if (l == null) {
            return false;
        }
        if (l === r) {
            return true;
        }
        l = l.__proto__;
    }
}
//如果L的__proto__等于R的prototype，说明R在L的原型链上，即R是L的原型，一直找下去直到L的__proto__为null

let arr = []
console.log(myInstanceof(arr, Array));

let str = new String("this is string");
console.log(myInstanceof(str, String));