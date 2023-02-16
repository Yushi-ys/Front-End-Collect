function debounce(fun, delay) {
    let timer;
    return function() {
        let that = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fun.call(that, args);
        }, delay);
    }
}