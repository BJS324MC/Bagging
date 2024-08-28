const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
},
    roll = () => {
        if (p >= bag.length) {
            p = 0;
            shuffle(bag);
        }
        return bag[p++];
    },
    changeStyle = (tackCount, total) => {
        /** + 7 - 5
         * 40 : 35 *for zero tacks
         * 47 : 30
         * 53 : 25
         * 60 : 20
         * 67 : 15
         * 73 : 10
         */
        if (tackCount === 0) tackCount = 6;
        total.style.fontSize = 40 + 7 * tackCount + "px";
        total.style.paddingTop = 35 - 5 * tackCount + (tackCount === 6 ? 7 : 0) + "px";
        total.style.height = 85 + 5 * tackCount - (tackCount === 6 ? 7 : 0) + "px";
        if (tackCount === 5) total.style.color = "#d12329";
        else total.style.color = "#000000";
    }
let bag = [], p = 0, t = 0, e = 0, bag2 = [0, 0, 0, 1, 1, 1], bag3 = [1, 2, 3, 1, 2, 3];
for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) bag.push([i, j]);
shuffle(bag); shuffle(bag3);

let redDie = document.getElementById('redDie'), yellowDie = document.getElementById('yellowDie'),
    button = document.getElementById('button'), total = document.getElementById('total'),
    totalNumber = document.getElementById('totalNumber'),
    tacks = document.getElementById('tacks'), turn = document.getElementById('turn'),
    typeGuide = {
        "1": "yellowCastle",
        "2": "blueCastle",
        "3": "greenCastle"
    },
    tackGuide = {
        '2': 1,
        '3': 2,
        '4': 3,
        '5': 4,
        '6': 5,
        '7': 0,
        '8': 5,
        '9': 4,
        '10': 3,
        '11': 2,
        '12': 1
    }

button.addEventListener('click', () => {
    let result = roll().map(a => a + 1), tackText = "", tackCount = tackGuide[result[0] + result[1]];
    for (let i = 0; i < tackCount; i++) tackText += '.';
    redDie.style.opacity = 0; yellowDie.style.opacity = 0;
    eventDie.style.opacity = 0; total.style.opacity = 0;
    redDie.src = `./dice/red${result[0]}.svg`;
    yellowDie.src = `./dice/yellow${result[1]}.svg`;
    if (p % 6 === 0) shuffle(bag2);
    if (bag2[p % 6] === 1) {
        eventDie.src = `./dice/${typeGuide[bag3[e]]}.svg`;
        if (e > 4) {
            shuffle(bag3);
            e = 0;
        }
        else e++;
    }
    else eventDie.src = `./dice/barbarians.svg`;
    changeStyle(tackCount, total);
    totalNumber.innerText = result[0] + result[1];
    tacks.innerText = tackText;
    setTimeout(() => redDie.style.opacity = 1, 60 / 150 * 500);
    setTimeout(() => yellowDie.style.opacity = 1, 60 / 150 * 1500);
    setTimeout(() => eventDie.style.opacity = 1, 60 / 150 * 2500)
    setTimeout(() => total.style.opacity = 1, 60 / 150 * 3500);
    turn.innerText = `Turn ${++t}`
})