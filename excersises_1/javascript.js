let iMadeItJustForTest;

console.log("External js script");

let name = "John";
let surname = "Doe";
let age = 18;
const pi = 3.14;

let calculations = (3 + 2) - 76 * (1 + 1);

console.log(name);
console.log(surname);
console.log(pi);
console.log(calculations);
console.log((4 + 6 + 9) / 77);
console.log("-----------");

let a = 10;
console.log(9 * a);
let b = 7 * a;
console.log(b);
console.log(typeof(b));

console.log("-----------");
const max = 57;
let actual = max - 13;
const percentage = actual/max;
console.log(percentage);

console.log("-----------");

let number = "67";
number = +number + +"3";
console.log(number + "tutaj");
console.log(typeof(number));
number = number + 7;
if (number === 70)
{
    console.log(number + " wynik");
}
else
{
    console.log(number === 77);
}

// alert(++number % ++number);
console.log("2" + 2 + 1);

console.log("-----------");

console.log(document.head);

console.time();
console.timeEnd();

// const isItBigInt = 9999999999999999999999999999999999999999999999999999999999999999999n;
// alert(typeof(isItBigInt));
// alert(isItBigInt);

// let numberNull;
// alert(numberNull);

// const namePrompt = prompt("What's your name?");
// alert(`His name is ${namePrompt}`);

// const newLine = `First line
// second line`;
// console.log(newLine);

const stringMethods = `Jakiś tam tekst :)`;
const tablica = ["a", "d", "f"];
console.log(stringMethods.padStart(4, "x"));
console.log(typeof(tablica)); // zwraca object


document.addEventListener('DOMContentLoaded', function(){
    if(1 || 0 ){
        const element = document.getElementById('paragraph');
        const array = document.getElementById('array');
        element.innerHTML = stringMethods.replace(/jakiś/gi, "Taki");
        array.innerHTML = stringMethods.split(" "); // nie do końca rozumiem jak to działa
    }
    });

// alert( alert(1) && 2 && alert(3) );

// const ageIf = 10;

// if(ageIf >= 14 && ageIf <= 90){
//     alert("NICE!");
// }
// else{
//     alert("Not nice...");
// }

// if(ageIf <= 14 || ageIf >= 90){
//     alert('Lets go!');
// }

// if(!(ageIf >= 14) || !(ageIf <= 90)){
//     alert('Lets go!_2');
// }

// ----------------------------------------------------------------
// WRITING A LOGIN PROMPT
// ----------------------------------------------------------------

let inputName;
let inputPassword;
const admin = 'Admin';
const theMaster = 'TheMaster';
const esc = 'esc';
const welcome = 'Welcome!';
const canceled = 'Canceled';

// enterName();

function enterName(){
    input = prompt('Enter Your name', '');

    if(input === admin){
        enterPassword();
    }
    else if(input === '' || input === null){
        alert(canceled);
    }
    else{
        alert("I don't know You");
    }    
}

function enterPassword(){
    inputPassword = prompt('Enter password', '');

    if(inputPassword === theMaster){
        alert(welcome);
    }
    else if(input === '' || input === null){
        alert(canceled);
    }
    else{
        alert("Wrong password");
    }
}


function switcher(){
    let input;
    let condition;
    input = prompt("Enter a number from 1 to 3");

    if(!(input === "1" || input === "2" || input === "3")){
        alert("Wrong input");
    }
    else{
        switch(input){
            case "1":
                alert("First!");
                break;
            case "2":
                alert("Second");
                break;
            case "3":
                alert("Third");
                break;
        }
    }
}

// ----------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------

function favAnimal(animal) {
    return `${animal} is my best friend!`
}

console.warn(favAnimal('Tortoise'));


// PRZYKŁADY TEGO SAMEGO ALE Z INNĄ SKŁADNIĄ I FUNKACJAMI ANONIMOWYMI
// ----------------------------------------------------------------
// function logKey(event) {
//     console.log(`Pressed "${event.key}"`);
// }

// textBox.addEventListener("keydown", logKey);

// ----------------------------------------------------------------

// randomFunctionName.addEventListener("keydown", function (event) {
//     console.log(`Pressed "${event.key}"`);
// });

// ----------------------------------------------------------------

// textBox.addEventListener("keydown", (event) => {
//     console.log(`Pressed "${event.key}"`);
// });

// ----------------------------------------------------------------
// PRZYKAŁD ARROW FUNCTION Z JEDNYM ARGUMENTEM - działa tak samo jak to wyżej, ale nie trzeba dodawać nawiasów przy argumencie
//                                                 przekazywanym do funkcji

textBox.addEventListener("keydown", event => {
    console.log(`Pressed "${event.key}"`)
});

// ----------------------------------------------------------------
// PRZY ZWRACANIU TYLKO JEDNEGO ARUGUMENTU - można zapisać wszystko krócej

const originalTable = [1, 2, 3];

const doubled = originals.map(item => item * 2); // item to warunek przekazywany do funkcji a (item*2) to zwrot z funkcji

console.log(doubled); // [2, 4, 6]

// ----------------------------------------------------------------
// WRACAJĄC DO EVENT LISTENERA - ten sam super krótki przykład

textBox.addEventListener("keydown", (event) => console.log(`Pressed "${event.key}"`),);



// prompt(-Infinity);
// alert(Infinity);

// let inputA = prompt("First input: ");
// let inputB = prompt("Second input: ");
// let inputC = +inputA + +inputB;
// alert("The sum of inputs is: " + inputC);


// Ćwiczenie z arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask (
    "Do You agree?",
    function() { alert("Yes"); },
    function() { alert("No"); }
);

// przerobienie na arrow function

function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}

question( 
    "Do You agree?",
    () => { alert("Yes")},
    () => { alert("No")}
);


