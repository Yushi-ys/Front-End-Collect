const people = {
    name: "涛涛"
};
//浅拷贝
//1、for...in
var obj = {};
for (const key in people) {
    obj[key] = people[key];
};

//2、assign
var obj = Object.assign({}, people);

//3、 ...展开语法
var obj = { ...people }



//深拷贝
const data = {
    name: "涛涛",
    obj: {
        name: "tt"
    },
    arr: []
};

function copy(obj) {
    let res = obj instanceof Array ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
        res[key] = typeof (value) == 'object' ? copy(value) : value;
    }
    return res;
}
var obj = copy(data);