let time = 0
const spinns = ['\r|  ' ,'\r/   ', '\r-   ', '\r\\   ', '\n' ]
const spin = function() {
    for (const items of spinns) {
        setTimeout(() => {
            process.stdout.write(items);
        }, time);
        time += 500
    }
}

spin()