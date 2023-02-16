let wapper = document.querySelector(".wapper");

let textAll = document.querySelectorAll(".wapper .text");

let prize = ["林伟浩", "施政", "施涛", "栋哥", "林伟浩", "施政", "施涛", "栋哥"];

// 权重数组
let prizeWeight = [2, 10, 15, 20, 25, 30, 35, 40, 45];

for (let i = 0; i < textAll.length; i++) {
    textAll[i].innerHTML = prize[i];
}

let isFlag = true;

document.querySelector(".circle").onclick = () => {
    if (isFlag) {
        // 生成权重随机数
        let weightRandom = parseInt(Math.random() * 45);
        // console.log(weightRandom);
        //0-30
        // 合并
        let concatAfterArr = prizeWeight.concat(weightRandom);
        // 排序
        let sortedWeightArr = concatAfterArr.sort((a, b) => { return a - b });
        var randomIndex = sortedWeightArr.indexOf(weightRandom);
        randomIndex = Math.min(randomIndex, prize.length - 1);
        let text = prize[randomIndex];
        console.log(text);
        switch (randomIndex) {
            case 0:
                //0-45
                var x = Math.floor((Math.random() * 45 + 0) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 1:
                //45-90
                var x = Math.floor((Math.random() * 45 + 45) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 2:
                //90-135
                var x = Math.floor((Math.random() * 45 + 90) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 3:
                //135-180
                var x = Math.floor((Math.random() * 45 + 135) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 4:
                //315-360
                var x = Math.floor((Math.random() * 45 + 315) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 5:
                //270-315
                var x = Math.floor((Math.random() * 45 + 270) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 6:
                //225-270
                var x = Math.floor((Math.random() * 45 + 225) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
            case 7:
                //180-225
                var x = Math.floor((Math.random() * 45 + 180) * 100) / 100;
                console.log(x);
                run(x, text);
                break;
        }
    }

};

function run(angle, text) {
    isFlag = false;
    let begin = 0;
    let timer = null;
    let basic = 1800;
    timer = setInterval(function() {
        if (begin > (basic + angle)) {
            isFlag = true;
            clearInterval(timer);
            alert(text + "打扫厕所");
        }
        wapper.style.transform = "rotate(" + begin + "deg)";
        begin += Math.ceil(basic + angle - begin) * 0.1;
    }, 60);
}