//this 永远指向是谁最后调用了它
var name = "小红";

function a() {
    let name = "小白";
    console.log(this.name);
}

function d(i) {
    return i();
}
let b = {
    name: "小黄",
    detail() {
        console.log(this.name);
    },
    bibi() {
        return function() {
            console.log(this.name);
        }
    }
}
let c = b.detail;
b.a = a;
let e = b.bibi();
a(); //小红
c(); //小红
b.a(); //小黄
d(b.detail); //小红
e(); //小红