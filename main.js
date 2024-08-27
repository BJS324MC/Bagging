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
    }
let bag = [], p = 0, t = 0, e = 0, bag2 = [0,0,0,1,1,1], bag3 = [1,2,3,1,2,3];
for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) bag.push([i, j]);
shuffle(bag);shuffle(bag3);

let redDie = document.getElementById('redDie'), yellowDie = document.getElementById('yellowDie'),
    button = document.getElementById('button'), total = document.getElementById('total'),
    tacks = document.getElementById('tacks'), turn = document.getElementById('turn'),
    typeGuide = {
        "1" : "yellowCastle",
        "2" : "blueCastle",
        "3" : "greenCastle"
    },
    tackGuide = {
        '2' : 1,
        '3' : 2,
        '4' : 3,
        '5' : 4,
        '6' : 5,
        '8' : 5,
        '9' : 4,
        '10' : 3,
        '11' : 2,
        '12' : 1
    }
button.addEventListener('click', () => {
    if(p % 6 === 0) shuffle(bag2);
    if(bag2[p % 6] === 1){
        eventDie.src = `./dice/${typeGuide[bag3[e]]}.svg`;
        if(e > 4) {
            shuffle(bag3);
            e = 0;
        }
        else e++;
    }
    else eventDie.src = `./dice/barbarians.svg`;
    let result = roll().map(a => a + 1), tackText = "";
    for(let i = 0; i < tackGuide[result[0]+result[1]]; i++) tackText += '.';
    redDie.src = `./dice/red${result[0]}.svg`;
    yellowDie.src = `./dice/yellow${result[1]}.svg`;
    total.innerText = result[0] + result[1];
    tacks.innerText = tackText;
    turn.innerText = `Turn: ${++t}`
})