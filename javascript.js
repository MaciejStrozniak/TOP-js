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
console.log(number);
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

let inputA = prompt("First input: ");
let inputB = prompt("Second input: ");
let inputC = +inputA + +inputB;
alert("The sum of inputs is: " + inputC);