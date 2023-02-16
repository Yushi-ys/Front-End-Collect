function fnuc() {
    setTimeout(() => {
        console.log("执行中...");
        fnuc();
    }, 2000);
}
fnuc();