// call
Function.prototype._call = function(obj, ...arr) {
    obj = obj || window;
    obj.p = this;
    let res = obj.p(...arr);
    delete obj.p;
    return res;
}