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
let bag = [], p = 0;
for (let i = 0; i < 6; i++) for (let j = 0; j < 6; j++) bag.push([i, j]);
shuffle(bag);

let redDie = document.getElementById('redDie'), yellowDie = document.getElementById('yellowDie'),
    button = document.getElementById('button'), total = document.getElementById('total');

button.addEventListener('click', () => {
    let result = roll();
    redDie.src = `./dice/red${result[0]+1}.svg`;
    yellowDie.src = `./dice/yellow${result[1]+1}.svg`;
    total.innerText = result[0] + result[1] + 2;
})