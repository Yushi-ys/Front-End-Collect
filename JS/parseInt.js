let arr = ["1", "2", "3"];

arr.map((item, index) => {
    console.log(parseInt(item, index));
    //parseInt(1, 0) 十进制
    //parseInt(2, 1) 一进制无效(2 - 36)
    //parseInt(3, 2) 二进制中3无效
});
//1 NaN NaN

console.log(parseInt(101, 2));