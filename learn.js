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

function isEven

