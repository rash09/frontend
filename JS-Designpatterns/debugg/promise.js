

    (function abcd() {
        console.log("asdsa");

        var abc = "hel";
console.log(abc)

const promiseCheck = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hello")
    }, 2000)
});
promiseCheck.then(resolve => console.log(resolve)).catch(err => err);
promiseCheck.then(response => console.log(response + "world"))
        setTimeout(function () {
            console.log("hello world");
        }, 500)
    })();