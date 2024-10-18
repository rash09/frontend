function* generateNum(val) {
    while (true) {
        val = yield val * 1;

    }
}



function* febNochi(){
    let prev = 0;
        let next = 1;
    yield prev;
    yield next;

    while (true) {
        const newVal = next+prev;
        yield newVal;
        prev = next;
        next = newVal;
    }
}

const feb = febNochi();
for (let i = 0; i < 5; i++){
    console.log(feb.next(i).value)
}

const genNums = generateNum(100);

for (let i = 0; i < 100; i++){
    //console.log(genNums.next(i))
}
