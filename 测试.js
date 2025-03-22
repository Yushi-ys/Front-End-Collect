const obj = {
    name: 1
}

const copyObj = JSON.parse(JSON.stringify(obj));
copyObj.name = 22;


console.log(obj, copyObj);
