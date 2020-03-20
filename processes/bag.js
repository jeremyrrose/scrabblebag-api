const newBag = () => {
    let bag = [];
    [ ...Array(9) ].forEach(() => bag.push({A:1}));
    [ ...Array(2) ].forEach(() => bag.push({B:3}));
    [ ...Array(2) ].forEach(() => bag.push({C:3}));
    [ ...Array(4) ].forEach(() => bag.push({D:2}));
    [ ...Array(12) ].forEach(() => bag.push({E:1}));
    [ ...Array(2) ].forEach(() => bag.push({F:2}));
    [ ...Array(3) ].forEach(() => bag.push({G:2}));
    [ ...Array(2) ].forEach(() => bag.push({H:4}));
    [ ...Array(9) ].forEach(() => bag.push({I:1}));
    bag.push({J:8});
    bag.push({K:5});
    [ ...Array(4) ].forEach(() => bag.push({L:1}));
    [ ...Array(2) ].forEach(() => bag.push({M:3}));
    [ ...Array(6) ].forEach(() => bag.push({N:1}));
    [ ...Array(8) ].forEach(() => bag.push({O:1}));
    [ ...Array(2) ].forEach(() => bag.push({P:3}));
    bag.push({Q:10});
    [ ...Array(6) ].forEach(() => bag.push({R:1}));
    [ ...Array(4) ].forEach(() => bag.push({S:1}));
    [ ...Array(6) ].forEach(() => bag.push({T:1}));
    [ ...Array(4) ].forEach(() => bag.push({U:1}));
    [ ...Array(2) ].forEach(() => bag.push({V:4}));
    [ ...Array(2) ].forEach(() => bag.push({W:4}));
    bag.push({X:8});
    [ ...Array(2) ].forEach(() => bag.push({Y:4}));
    bag.push({Z:10});
    [ ...Array(2) ].forEach(() => bag.push({_:0}));
    return bag;
}

const shuffle = (bag) => {
    let newbag = [];
    while (bag.length > 0) {
        newbag.push(bag.splice(Math.floor(Math.random() * bag.length),1)[0]);
    }
    return newbag;
}

const draw = (bag, num) => {
    num = num > bag.length ? bag.length : num;
    let draw = [];
    for (let i = 0; i < num; i++) {
        draw.push(bag.splice(Math.floor(Math.random() * bag.length - 1),1)[0]);
    }
    return draw;
}

module.exports = {
    newBag,
    shuffle,
    draw
}