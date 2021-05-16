const copyEl = document.getElementById('copy');
const pwEl = document.getElementById('pw');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl= document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters ="abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "-=+_!@#$%^&*/";

function getLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const len = lenEl.value;
    let password = "";
    for(let i=0; i<len; i++) {
        const x = generateX();
        password+=x;
    }
    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if(upperEl.checked) {
        xs.push(getUpperCase());
    }
    if(lowerEl.checked) {
        xs.push(getLowerCase());
    }
    if(numberEl.checked) {
        xs.push(getNumber());
    }
    if(symbolEl.checked) {
        xs.push(getSymbols());
    }
    if(xs.length===0) return "";
    return xs[Math.floor(Math.random()*xs.length)];
}
generateEl.addEventListener('click' , generatePassword);

copyEl.addEventListener('click' , () => {
    const textArea = document.createElement('textarea');
    const password = pwEl.innerText;
    if (!password) {
        return;
    }
    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert('Password copied to clipboard');
})