// javaScript Day 4 

// Q1. Square a Number

// function suqareNum (x){
//     return x * x;
// }
// console.log("number after squared" , suqareNum(10));

// // Q2. Greet a User

// function greetUser (name){
//     console.log(`Hello! ${name}`);
// }
// greetUser("Aman");

// // Q3. Convert Minutes to Seconds

// function convertIntoSec (time){
//     return time * 60;
// }
// console.log("Minutes After convting into second", convertIntoSec(10));

// // Q4: Find Names Starting with 'A'

// const names = ["Aman", "Rahul", "Anjali", "Sonia", "Aftab", "Meena"];
// let nameWithA = names.filter((name) => name.startsWith("A"));
// console.log(nameWithA);

// // Q5: Find the Largest of Two Numbers

// function findLarge (x,y){
//     return Math.max(x,y);
// }
// console.log(findLarge(10,20));

// // Q6: Check if a number is even or odd

// function isEvenOdd (num){
//     if (num % 2 === 0) {
//         console.log("isEven");
//     } else {
//         console.log("isOdd");
//     }
// }
// isEvenOdd(51);

// // Q7: Reverse a String

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// let orignalName = "buddy";
// let reversedName = reverseString(orignalName);
// console.log(reversedName);

// // Q8: Multiply All Numbers in an Array

// function multiply(arr) {
//     let num = 1;
//     for (let i = 0; i < arr.length; i++) {
//         num *= arr[i];
//     }
//     return num;
// }
// let numbers = [1,2,3,4,5];
// let numLoop = multiply(numbers);
// console.log(numLoop);

// // Q9: Check if All Numbers Are Positive

// function checkPositive(arr) {
//     for(let num of arr){
//         if(num < 0){
//             return false;
//         } 
//     }
//     return true;
// }
// let val = [1,2,3,5];
// console.log(checkPositive(val));

// // Q10: Count Vowels in a String

// // Q10: Count Vowels in a String

// function countVowels(str) {
//   let count = 0;
//   const vowels = "aeiou";

//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countVowels("Buddy")); // Output: 1
// console.log(countVowels("hello")); // Output: 2

// javaScripct Day 5

// Step 1: Practice Questions .length, .slice, .substring, includes, trim.

// Q1. Write a function that returns the length of any string.

function findLength (name) {
    return name.length
}
console.log(findLength("Aman"));

// Q2. Slice out the word "world" from "Hello world, buddy!"

let extArr = "Hello World, Buddy!";
console.log(extArr.slice(6, 11));

// Q3. Use .substring() to extract "buddy" from "Hello world, buddy!"

console.log(extArr.substring(13, 19));

// Q4. Check if the sentence "I love JavaScript" includes "love"

let checkTence = "I Love javaScript";
console.log(checkTence.includes("Love"));

// Q5. Remove all extra spaces from " I am learning JS " using .trim()

let space = "  I am learning JS   ";
console.log(space.trim());

// Q6. Get the last 4 characters of the string "JavaScript" using .slice()

let js = "JavaScript";
console.log(js.slice(6, 10));

// JavaScript Day 6

// Step 2: Practice Questions .replace, .split, .uppercase, lowercase, .indexOf, .repeat.

// Q1. Replace the word "sad" with "happy" in the sentence "I am very sad today"

let replaceText = "I am very sad";
console.log(replaceText.replace("sad", "happy"));

// Q2. Split the string "Learn-Code-Build-Repeat" by - and print the array

let sptStr = "Learn-Code-Build-Repeat";
console.log(sptStr.split("-"));

// Q3. Convert "myNameIsBuddy" to uppercase

let convertupper = "myNameIsbuddy";
console.log(convertupper.toUpperCase());

// Q4. Get the character at index 2 from "JavaScript"

let nameJs = "JavaScript";
console.log(nameJs.charAt(1));

// Q5. What is the Unicode of the character at index 1 of "Buddy"?

console.log(nameJs.charCodeAt(0));

// Q6. Repeat the word "Fun " 4 times using .repeat()

let text = "Fun";
console.log(text.repeat(4));

// Day 5 & Day 6 – Practice Mode

// Mixed Practice – String Methods

// Q1. Create a function that returns the last character of any string.

function lastcahracter (name) {
    return name[name.length - 1];
}
console.log(lastcahracter("Aman"));

// Q2. Given a string " Hello Buddy ", remove leading and trailing spaces and convert to uppercase.

let textString = "   hello dude!   "
console.log(textString.trim().toUpperCase());

// Q3. Write a function that checks whether the word "learn" is present in any sentence or not.

function checkSentence (sentence) {
    return sentence.includes("learn");
}
console.log(checkSentence("I learn JavaScript")); 

// Q4. Replace all dashes - with spaces in "Learn-Code-Build-Repeat"

let repSpace = "Learn-Code-Build-Repeat";
console.log(repSpace.replace("Learn-Code-Build-Repeat", "Learn Code Build Repeat"));

// Q5. From "JavaScript", extract "Script" using .slice()

let splJs = "JavaScript";
console.log(splJs.slice(4, 14));

// Q6. Write a function that takes a name and returns:

function takesName (name) {
    return "Welcome, " + name.toUpperCase();
}
console.log(takesName("Buddy"));

// Q7. Repeat "Practice " 5 times and store it in a variable

let repWord = "Practice";
console.log(repWord.repeat(5));

// Q8. From "Hello123", extract only the first 5 characters

let abcd = "Hello123";
console.log(abcd.substring(4,5));

// Q9. Convert "Coding IS Fun" to lowercase

let conLower = "Coding IS Fun";
console.log(conLower.toLowerCase());

// Q10. From "Mastering JS", print the Unicode of character "J"

let uniCode = "Mastering JS";
console.log(uniCode.charCodeAt(10));