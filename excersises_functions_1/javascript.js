

//add7();
//multiply();
//capitalize();
lastLetter();

function add7() 
{
    let input = prompt(`Type a number`);
    let calc = Number(input) + 7;

    console.log(calc);
    
}

function multiply() {
    let val_1 = Number(prompt(`Give val one`));
    let val_2 = Number(prompt(`Give val two`));
    
    console.log(val_1 * val_2);
}

function capitalize() {
    let string = prompt(`Type a word`);
    let lowCase = string.toLowerCase();
    let capitalize = lowCase.slice(0,1).toUpperCase();
    let newString = lowCase.slice(1);

    console.log(capitalize + newString);
}

function lastLetter() {
    let inputVal = prompt(`Write a random word`);
    let inputValLength = Number(inputVal.length) - 1;
    let lastInputLetter = inputVal.charAt(inputValLength);

    console.log(lastInputLetter);
}