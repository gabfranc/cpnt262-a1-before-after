//before and after variables
// const theDate = new Date();
//alert("today is" + theDate);
// converting a number into a string

let num = 40;
let myNum = num.toString();
console.log(myNum);

document.getElementById("numVal").textContent  = num;
//incrementing a number
num++;
console.log(num);

document.getElementById("incremNum").textContent  = num++;
// changing or replacing some of the words with new words
const myWords = "x marks the spot, where we fell apart";

const changedWords = myWords.replace("marks", "crosses out");
console.log(changedWords);

document.getElementById("replaceWords").textContent  = changedWords;
// creating and logging an array of the values of my object.

const obj = {

  banana:{
    number: 43
  },
  strawberry: {
    number: 15
  },
  mango: {
    number: 60
  },
  watermelon: {
    number: 16
  }
 
};

const displayResults = Object.keys(obj).map((key) => [key, obj[key]]);
console.log(displayResults); 

document.getElementById("arrObj").textContent = displayResults;

// removing a key-value pair from an object with the deleted keywords

let music = {
  'pop' : 'Taylor Swift',
  'classic': 'Mozart',
  'country' : 'Blake Shelton'
};

delete music.classic;
delete music['country'];
console.log(music);


//styling with js coding

const bodyStyle = document.body.innerHTML;

document.body.style.backgroundColor ="purple";



