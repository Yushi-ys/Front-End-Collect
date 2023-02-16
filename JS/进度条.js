function progress() {
    let num = 0;
    timer = setInterval(() => {
        num++;
        div.style.width = num + '%';
        if (num == 100) {
            clearTimeout(timer);
        }
    }, 100);
}
progress();
let div = document.getElementsByTagName("div")[0];
console.log(div);