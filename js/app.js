// 1. Create a card and Using any of the selectors we learnt, display the name of your group beside the group name:

document.querySelector('.card-header').innerHTML = "Team-Poseidon"
document.querySelector('.card-header').style.color = "#42f557";
document.querySelector('.card-header').style.fontSize = "50px";

// 2. Create an array that will contain the name of your team members starting with your team lead's name and that of your team members. Then console.log your name based on the position it is in the array.

let teamNames = [
    "Mubaraq Abuahsan",
    "Jimoh Segun",
    "Arinola Goodness",
    "Clinton Okechukwu", 
    "Onumajuru Divinegift",
    "Sherif Muhammed",
    "Khadijah Muhammmad",
];

console.log(teamNames[1]);

// 3. Create an object that has the following things First name,Last name, Best movie, Best food, Complexion, Birth month, State, Group name then Console.log your best movie

let info = {
    firstName : "Segun",
    lastName :"Jeremiah",
    bestMovie : "Baahubali",
    bestFood : "Rice",
    complexion : "Fair",
    birthMonth : "June",
    state : "Ogun",
    groupName : "Poseidon",
}

console.log(info.bestMovie);

// 4. Create variables for a noun, a verb and an adjective.

let noun = "Dog";
let verb = "run";
let adjective = "wild";

console.log (`My ${noun} is ${adjective}`);
console.log (`That ${noun} ${verb}s very fast`);
console.log (`Some ${adjective} ${noun}s are very dangerous`);
console.log (`Some ${adjective} ${noun}s are cool`);
console.log (`A ${adjective} ${noun} is available for sale`);

// 5. Write a function that will print out the remainder of a division.

function remainder(a, b){
    return a % b;
}

console.log(remainder(8, 3));

// 6. Write a function that will solve quadratic equations using the almighty formula.

function quadFunction (a, b, c){
    var result = ((b * b) - Math.sqrt(4 * a * c)) / (2 * a);
    var result2 = ((b * b) + Math.sqrt(4 * a * c)) / (2 * a);
    return result + " and " + result2
}

console.log(quadFunction(1, 2, 1));

// 7. Using the constants above, create your own sentence.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = `Those breed of ${myNoun}s are usually very ${myAdjective}. One just ${myVerb}  ${myAdverb} past my house recently`; 

console.log(wordBlanks);

// 8. Write a function that will find the area of a circle. Use Const PI = 3.142, also find the area of a circle with a radius of 9cm.

const pi = 3.142;
const radius = 9;

function Area(radius) {
    return pi * Math.pow(radius, 2);
}

console.log(Area(radius));

// 9. How much Simple Interest can a person get on N. 8,200 at 17.5% p.a. for a period of 2 years and 6 months? Ensure you store each of them in a variable and console your answer.
// p = Principal, r = Rate, t = Time, I = Interest
const p = 8200;
const r = 17.5;
const t = 2.6;
const I = (p * r * t) / 100;

console.log(I);

// 10. What will be the result of 10 % 4? Console.log your answer

let a = 10;
let b = 4;

console.log(a % b);

// 11. Calculate both their BMIs using the formula (you can even implement both versions) Create a Boolean variable 'meritHigherBMI' containing information about whether Merit has a higher BMI than Nutjob. BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// For data 1
let mMass = 78;
let mHeight = 1.69;
let mBMI = (mMass / (mHeight * mHeight));
// console.log(mBMI);

let nMass = 92;
let nHeight = 1.95;
let nBMI = (nMass / (nHeight * nHeight));
// console.log(nBMI);

let mHighern = (mBMI > nBMI);
console.log(mHighern);

// For data 2
let mMass2 = 85;
let mHeight2 = 1.76;
let mBMI2 = (mMass2 / (mHeight2 * mHeight2));
// console.log(mBMI);

let nMass2 = 95;
let nHeight2 = 1.88;
let nBMI2 = (nMass2 / (nHeight2 * nHeight2));
// console.log(nBMI);

let mHighern2 = (mBMI2 > nBMI2);
console.log(mHighern2);
