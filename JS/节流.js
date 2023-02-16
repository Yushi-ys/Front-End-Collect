function throttle(fun, delay) {
    let timer;
    return function() {
        let that = this;
        let args = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fun.call(that, args);
            timer = null;
        }, delay);
    }
}