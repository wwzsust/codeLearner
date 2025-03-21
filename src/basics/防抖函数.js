function debounce(fn, duration = 500){
    let timer = null;
    return function(...args) {
        timer && clearInterval(timer);
        timer = setTimeout( () => {
            fn.apply(this, args)
        },duration);
    }
}