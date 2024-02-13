//before and after variables

// converting a number into a string
let num = 403;
let myNum = num.toString();

console.log(myNum);


//incrementing a number
num++;
console.log(num);



// changing or replacing some of the words with new words
const myWords = "x marks the spot, where we fell apart";

const changedWords = myWords.replace("marks", "crosses out");
console.log(changedWords);



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

// removing a key-value pair from an object with the deleted keywords

let music = {
  'pop' : 'Taylor Swift',
  'classic': 'Mozart',
  'country' : 'Blake Shelton'
};

delete music.classic;
delete music['country'];
console.log(music);

