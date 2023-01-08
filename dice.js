//first step is getting the number to be displayed on the screen when the button has been pressed

//XdY   X= amount of die Y= the die type

const Dfour = document.querySelector('.D4');
const Dsix = document.querySelector('.D6');
const Deight = document.querySelector('.D8');
const Dten = document.querySelector('.D10');
const Dtwelve = document.querySelector('.D12');
const Dtwenty = document.querySelector('.D20');
const rand = document.querySelector('.Randy');

rand.addEventListener('click',XdY)
Dfour.addEventListener('click',dfour);
Dsix.addEventListener('click',dsix,XdY);
Deight.addEventListener('click',deight,XdY);
Dten.addEventListener('click',dten,XdY);
Dtwelve.addEventListener('click',dtwelve,XdY);
Dtwenty.addEventListener('click',dtwenty,XdY);



// make a function that rolls 1 die
//y in  the () is the number that is rolled 
function dfour(y) {
    
    
    result = '';
    result = Math.floor(Math.random() * 4) + 1;
    console.log(parseInt (result))
    
    const RanNum = document.querySelector('.RanNum')
    RanNum.innerHTML = result

}

function dsix(y) {
    //const Num = document.querySelector(".Num").value;
    
    result = '';
    result = Math.floor(Math.random() * 6) + 1;
    console.log(parseInt (result))

}

function deight(y) {
    //const Num = document.querySelector(".Num").value;
    
    result = '';
    result = Math.floor(Math.random() * 8) + 1;
    console.log(parseInt (result))

}

function dten(y) {
    //const Num = document.querySelector(".Num").value;
    
    result = '';
    result = Math.floor(Math.random() * 10) + 1;
    console.log(parseInt (result))

}

function dtwelve(y) {
    //const Num = document.querySelector(".Num").value;
    
    result = '';
    result = Math.floor(Math.random() * 12) + 1;
    console.log(parseInt (result))

}

function dtwenty(y) {
    //const Num = document.querySelector(".Num").value;
    
    result = '';
    result = Math.floor(Math.random() * 20) + 1;
    console.log(parseInt (result))

}

// make a function that rolls multiple die

function XdY(x,y){
//make a results array
let results = [];

const Num = document.querySelector(".Num").value;
const Num1 = document.querySelector(".Num1").value;
x = parseInt(Num)
z = parseInt(Num1)

// call d(y) x times and put in results
if (z == 4){
    do {
    results.push(dfour(y));
} while(results.length < x)

console.log(parseInt(results));

}

if (z == 6){
    do {
    results.push(dsix(y));
} while(results.length < x)

console.log(parseInt(results));

}

if (z == 8){
    do {
    results.push(deight(y));
} while(results.length < x)

console.log(parseInt(results));

}

if (z == 10){
    do {
    results.push(dten(y));
} while(results.length < x)

console.log(parseInt(results));

}

if (z == 12){
    do {
    results.push(dtwelve(y));
} while(results.length < x)

console.log(parseInt(results));

}

if (z == 20){
    do {
    results.push(dtwenty(y));
} while(results.length < x)

console.log(parseInt(results));

}


}


