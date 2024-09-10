// Task-1:
// Count how many times a string has the letter a
let str = "bananA";
let Count = 0;

for (let i = 0; i< str.length; i++)
    {
        if (str[i].toLowerCase() === 'a') {
            Count++;
        }
}
console.log(Count);
// Task-2:
// Count how many times a string has the letter a or A

let str1 = "Anika";
let count = 0;
for (let i = 0; i<str1.length; i++){
    if(str1[i] === 'A'|| str1[i] === 'a'){
        count ++;
    }
}
console.log(count);

// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u

let str3 = "bananA";
let Count2 = 0;
const str4 = str3.toLowerCase();
// console.log(str4);
for (let i = 0; i< str.length; i++)
    {
        if (str4[i] === 'a'&& str4[i] === 'e'&& str4[i] === 'i'&& str4[i] === 'o'&& str4[i] === 'u') {
            
            console.log("Contains all vowels");

        }
        else{
            console.log("Does not contain all vowels");

        }
}

// Task-4:
// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

let str5 = "This is easx.This is easX.";

let updatedStr = str5.replaceAll("x", "y");

updatedStr = updatedStr.replaceAll("X", "Y");

console.log(updatedStr);

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
// Task-5:
// Capitalize Every first Letter of each word in a String

let str2 = "Capitalize Every first Letter of each word in a String";

let words = str2.split(" ");
console.log(words);

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if(word.length>0){
        words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
}

let Capitalized = words.join(" ");
console.log(Capitalized)
