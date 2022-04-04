const rightDisplay = document.getElementById('right-display');
const leftDisplay = document.getElementById('left-display');

function generateRandom(max, min){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function generatePin(){   
    const pin = generateRandom(9999,1000);
    leftDisplay.value = pin;
}

let digitCount = 0;
function displayValue(id){    
    if(digitCount <4){
        const value = document.getElementById(id).innerText;
        const oldValue = rightDisplay.value;
        rightDisplay.value = oldValue + value;
        digitCount++;
    }
}

let tryCount = 3;
function checkMatch(){
    const matched = document.getElementById('match');
    const unmatched = document.getElementById('no-match');
    if(leftDisplay.value == rightDisplay.value && tryCount > 0){
        matched.style.display = 'block';
        unmatched.style.display = 'none';
    }
    else if(tryCount > 0) { 
        unmatched.style.display = 'block';
        matched.style.display = 'none';
        tryCount--;
        document.getElementById('try').innerText = tryCount;
    }
    else{
        unmatched.style.display = 'none';
        matched.style.display = 'none';
    }
}

function cancelDigit(){
    let currentValue = rightDisplay.value;
    let canceledValue = '';
    for (let i = 0; i < currentValue.length - 1; i++) {
        canceledValue = canceledValue + currentValue[i];
    } 
    rightDisplay.value = canceledValue;
    digitCount--;
}

function clearDisplay(){
    rightDisplay.value = '';
    digitCount = 0;
}
