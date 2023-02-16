let arr = [10, 32, 11, 65, -8, 35, 228];

Array.prototype.swap = function(l, r) {
    let temp = this[l];
    this[l] = this[r];
    this[r] = temp;
};
// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1]);
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
};

// 快速排序
function quickSort(arr, low, high) {
    // 出口条件
    if (low > high) {
        return;
    }
    let l = low,
        r = high,
        temp = arr[l];
    while (l < r) {
        while (arr[r] > temp && l < r) {
            r--;
        }
        while (arr[l] <= temp && l < r) {
            l++;
        }
        if (l < r) {
            arr.swap(l, r);
        }
    }
    arr.swap(low, r);

    //递归左右序列
    quickSort(arr, low, l - 1);
    quickSort(arr, l + 1, high);
};