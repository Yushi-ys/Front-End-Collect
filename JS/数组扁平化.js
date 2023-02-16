let arr = [1, [2, [3, [4]]]];

function flatter(arr) {
    let ans = [];
    arr.forEach((item) => {
        if (item instanceof Array) {
            ans = ans.concat(flatter(item));
        } else {
            ans.push(item);
        }
    })
    return ans;
}

console.log(flatter(arr));