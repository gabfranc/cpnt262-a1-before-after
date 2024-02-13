//before and after variables

// converting a number into a string

let num = 40;
let myNum = num.toString();
console.log(myNum);

document.getElementById("numVal").textContent  = num;
//incrementing a number
num++;
console.log(num);

document.getElementById("incremNum").textContent  = num++;


// Showing the first character of my string.
const characterString = 'Perfume Bottle';
const firstCharacter = characterString.substring(0, 1);

console.log (firstCharacter); //Output of the string will be the letter P.

document.getElementById("firstChr").textContent = firstCharacter;


// changing or replacing some of the words with new words
const myWords = "x marks the spot, where we fell apart";

const changedWords = myWords.replace("marks", "crosses out");
console.log(changedWords);

document.getElementById("replaceWords").textContent  = changedWords;

// adding an array using the .push() method
let characterArr = ['Rikki', 'Emma', 'Cleo'];
const push = characterArr.push('Bella');
console.log(characterArr);
console.log(push);

document.getElementById("pushArr").textContent = characterArr;
// Verifying if an element exists in an array.

let stringEl = "The Great Barrier Reef";
const elementStr = stringEl.includes('Barrier');
document.getElementById("includedEl").textContent = stringEl.includes('Barrier');
//creating and logging an array of the keys of the object

const fruitsArr = {
  banana: 1,
  coconut: 2,
  mango: 3
};

console.log(Object.keys(fruitsArr));
document.getElementById("arrayObj").textContent = Object.keys(fruitsArr);

// removing a key-value pair from an object with the deleted keywords

const musicObj = {
  firstName: "Taylor",
  lastName: "Swift",
  album: "Fearless",
  song: "Mr Perfectly Fine"
}

delete musicObj["song"];

document.getElementById("newObject").textContent = musicObj.firstName +   musicObj.lastName + "    best song is    " +    musicObj.song;

//styling with js coding

document.body.style.backgroundColor ="lightpink";

