var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];

function unique(arr) {
    let ans = [];
    return arr.filter((item) => {
        return ans.hasOwnProperty(typeof item + item) ? false : ans[typeof item + item] = true;
    })
}

console.log(unique(arr));