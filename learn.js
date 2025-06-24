// javaScript Day 4 

// Q1. Square a Number

function suqareNum (x){
    return x * x;
}
console.log("number after squared" , suqareNum(10));

// Q2. Greet a User

function greetUser (name){
    console.log(`Hello! ${name}`);
}
greetUser("Aman");

// Q3. Convert Minutes to Seconds

function convertIntoSec (time){
    return time * 60;
}
console.log("Minutes After convting into second", convertIntoSec(10));

// Q4: Find Names Starting with 'A'

const names = ["Aman", "Rahul", "Anjali", "Sonia", "Aftab", "Meena"];
let nameWithA = names.filter((name) => name.startsWith("A"));
console.log(nameWithA);

// Q5: Find the Largest of Two Numbers

function findLarge (x,y){
    return Math.max(x,y);
}
console.log(findLarge(10,20));

// Q6: Check if a number is even or odd

function isEvenOdd (num){
    if (num % 2 === 0) {
        console.log("isEven");
    } else {
        console.log("isOdd");
    }
}
isEvenOdd(51);

// Q7: Reverse a String

function reverseString(str) {
  return str.split('').reverse().join('');
}

let orignalName = "buddy";
let reversedName = reverseString(orignalName);
console.log(reversedName);

// Q8: Multiply All Numbers in an Array

function multiply(arr) {
    let num = 1;
    for (let i = 0; i < arr.length; i++) {
        num *= arr[i];
    }
    return num;
}
let numbers = [1,2,3,4,5];
let numLoop = multiply(numbers);
console.log(numLoop);

// Q9: Check if All Numbers Are Positive

function checkPositive(arr) {
    for(let num of arr){
        if(num < 0){
            return false;
        } 
    }
    return true;
}
let val = [1,2,3,5];
console.log(checkPositive(val));

// Q10: Count Vowels in a String

// Q10: Count Vowels in a String

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Buddy")); // Output: 1
console.log(countVowels("hello")); // Output: 2