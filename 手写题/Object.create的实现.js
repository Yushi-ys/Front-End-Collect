function create(obj) {
    function Fn() { }
    Fn.prototype = obj;
    return new Fn();
}