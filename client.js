const someText = [
    ['I ', 'You ', 'We '],
    ['make ', 'stole ', 'bought ', 'get '],
    ['the future.', 'the car.', 'the program.', 'the experience.', 'the money.', 'the coffe.']
];

//geting random text
function getRandomText() {
    let out = '';
    for (let i = 0; i < someText.length; i++) {
        out += someText[i][getRandomInt(0, someText[i].length - 1)];
    }
    return out;
}

//geting random number from min to max
function getRandomInt(min, max) {
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
}

//click event
document.querySelector('#fill').addEventListener('click',()=>{
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].textContent = getRandomText();
    }

})
