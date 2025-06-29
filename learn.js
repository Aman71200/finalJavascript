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

// function findLength (name) {
//     return name.length
// }
// console.log(findLength("Aman"));

// Q2. Slice out the word "world" from "Hello world, buddy!"

// let extArr = "Hello World, Buddy!";
// console.log(extArr.slice(6, 11));

// Q3. Use .substring() to extract "buddy" from "Hello world, buddy!"

// console.log(extArr.substring(13, 19));

// Q4. Check if the sentence "I love JavaScript" includes "love"

// let checkTence = "I Love javaScript";
// console.log(checkTence.includes("Love"));

// Q5. Remove all extra spaces from " I am learning JS " using .trim()

// let space = "  I am learning JS   ";
// console.log(space.trim());

// Q6. Get the last 4 characters of the string "JavaScript" using .slice()

// let js = "JavaScript";
// console.log(js.slice(6, 10));

// JavaScript Day 6

// Step 2: Practice Questions .replace, .split, .uppercase, lowercase, .indexOf, .repeat.

// Q1. Replace the word "sad" with "happy" in the sentence "I am very sad today"

// let replaceText = "I am very sad";
// console.log(replaceText.replace("sad", "happy"));

// Q2. Split the string "Learn-Code-Build-Repeat" by - and print the array

// let sptStr = "Learn-Code-Build-Repeat";
// console.log(sptStr.split("-"));

// Q3. Convert "myNameIsBuddy" to uppercase

// let convertupper = "myNameIsbuddy";
// console.log(convertupper.toUpperCase());

// Q4. Get the character at index 2 from "JavaScript"

// let nameJs = "JavaScript";
// console.log(nameJs.charAt(1));

// Q5. What is the Unicode of the character at index 1 of "Buddy"?

// console.log(nameJs.charCodeAt(0));

// Q6. Repeat the word "Fun " 4 times using .repeat()

// let text = "Fun";
// console.log(text.repeat(4));

// Day 5 & Day 6 – Practice Mode

// Mixed Practice – String Methods

// Q1. Create a function that returns the last character of any string.

// function lastcahracter (name) {
//     return name[name.length - 1];
// }
// console.log(lastcahracter("Aman"));

// Q2. Given a string " Hello Buddy ", remove leading and trailing spaces and convert to uppercase.

// let textString = "   hello dude!   "
// console.log(textString.trim().toUpperCase());

// Q3. Write a function that checks whether the word "learn" is present in any sentence or not.

// function checkSentence (sentence) {
//     return sentence.includes("learn");
// }
// console.log(checkSentence("I learn JavaScript")); 

// Q4. Replace all dashes - with spaces in "Learn-Code-Build-Repeat"

// let repSpace = "Learn-Code-Build-Repeat";
// console.log(repSpace.replace("Learn-Code-Build-Repeat", "Learn Code Build Repeat"));

// Q5. From "JavaScript", extract "Script" using .slice()

// let splJs = "JavaScript";
// console.log(splJs.slice(4, 14));

// Q6. Write a function that takes a name and returns:

// function takesName (name) {
//     return "Welcome, " + name.toUpperCase();
// }
// console.log(takesName("Buddy"));

// Q7. Repeat "Practice " 5 times and store it in a variable

// let repWord = "Practice";
// console.log(repWord.repeat(5));

// Q8. From "Hello123", extract only the first 5 characters

// let abcd = "Hello123";
// console.log(abcd.substring(4,5));

// Q9. Convert "Coding IS Fun" to lowercase

// let conLower = "Coding IS Fun";
// console.log(conLower.toLowerCase());

// Q10. From "Mastering JS", print the Unicode of character "J"

// let uniCode = "Mastering JS";
// console.log(uniCode.charCodeAt(10));

// JavaScript Day 7

// Examples 

// Looping Object

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// Destructuring

// const { name, age } = obj;

// Nested Destructuring

// const { address: { city } } = user;

// Object.keys / values / entries

// Object.keys(obj)    // returns array of keys
// Object.values(obj)  // returns array of values
// Object.entries(obj) // returns array of [key, value] pairs

//  10 JavaScript Object Practice Questions

// Q1. Print all key–value pairs from this object:

// const user = { name: "Aman", age: 22, city: "Delhi" };

// for (let key in user) {
//   console.log(user[key]);
// }

// Q2. Use nested destructuring to extract city from:

// const person = {
//   name: "John",
//   details: {
//     location: {
//       city: "Mumbai"
//     }
//   }
// };

// const {details:{location: {city}}} = person;

// console.log("city:", city);

// Q3. Calculate total of object values

// const expenses = { rent: 1200, food: 600, internet: 300 };

// 👇 Loop + add all values using for...in
// let total = 0;
// for (let key in expenses) {
//   total += expenses[key];
// }

// console.log("Total Expenses:", total); // Output: 2100

// Q4. Convert object to array using Object.entries()
// const products = { pen: 10, book: 50 };

// 👇 Object.entries() gives array of [key, value]
// const entries = Object.entries(products);

// for (let [key, value] of entries) {
//   console.log(`${key} => ${value}`);
// }

// Q5. Check if object is empty
// const emptyObj = {};

// 👇 Object.keys() returns array of keys
// if (Object.keys(emptyObj).length === 0) {
//   console.log("Empty");
// } else {
//   console.log("Not Empty");
// }
// Output: Empty

// javaScript Day 7 recap

// find(), some(), every()

// find() Purpose: Returns first element that matches condition.

// const numsA = [10, 25, 30, 40];
// const found = numsA.find(num => num > 20);
// console.log(found); // 25

// every() Purpose: Returns true if all elements pass the condition.

// const numsB = [2, 4, 6];
// const allEven = numsB.every(num => num % 2 === 0);
// console.log(allEven); // true

// some() Purpose: Returns true if any element passes the condition.

// const numsC = [1, 3, 7];
// const hasEven = numsC.some(num => num % 2 === 0);
// console.log(hasEven); // false

// Very light and less practice Questions

//  Practice Q1: Find the first even number in the array

// const arr = [3, 7, 11, 18, 21];
// const findArr = arr.find(num => num % 2 === 0);
// console.log(findArr);

//  Practice Q2: Check if all names in the array are longer than 3 characters

// const names = ["Aman", "Buddy", "Jay"];
// const checkNames = names.every(name => name.length >= 3 );
// console.log(checkNames);

// Practice Q3: Check if there is any negative number in the array

// const data = [5, 7, -3, 9];
// const checkData = data.some(num => num < 0 );
// console.log(checkData);

// Find () : Practice basics Questions

// Q1: Find first string with length > 5

// const names1 = ["Jay", "Rohit", "Samantha", "Alok"];

// const higherThanFive = names1.find(name => name.length >= 5);
// console.log(higherThanFive);

// Q2: Find first negative number

// const numbers1 = [10, -5, 20, -30, 50];

// const negNumber = numbers1 .find(num => num < 0);
// console.log(negNumber);

// Q3: Find first object where isActive is true

// const users1 = [
//   { name: "Aman", isActive: false },
//   { name: "Buddy", isActive: true },
//   { name: "Jay", isActive: false }
// ];

// const userActive = users1.find(users1 => users1.isActive);
// console.log(userActive);

// Q4: Find first student with marks > 80

// const students = [
//   { name: "Ram", marks: 75 },
//   { name: "Shyam", marks: 82 },
//   { name: "Seeta", marks: 90 }
// ];

// const middleStudent = students.find(students => students.marks > 80);
// console.log(middleStudent);

// Q5: Find first even number after index 3

// const nums2 = [1, 3, 5, 7, 8, 10, 13];
// const firstEven = nums2.find((num, index) => index > 3 && num % 2 === 0);
// console.log(firstEven);

// Every() : Basics Practice Questions

// Q6: Check if all numbers are positive

// const nums3 = [2, 4, 6, 8];
// const arePositive = nums3.every(num => num > 1);
// console.log(arePositive);

// Q7: Check if all names include letter "a"

// const names2 = ["Aman", "Anjali", "Karan"];
// const includeA = names2.every(name => name.includes("a"));
// console.log(includeA);

// Q8: Check if all objects have age property

// const people = [
//   { name: "Ravi", age: 30 },
//   { name: "Meena", age: 25 },
//   { name: "Tom", age: 28 }
// ];
// const haveAge = people.every(user => user.age);
// console.log(haveAge);

// some() : 2 Baics Question Practice

// Q9: Check if any user is admin

// const users2 = [
//   { username: "buddy", role: "user" },
//   { username: "aman", role: "admin" },
//   { username: "jay", role: "user" }
// ];
// const ifUser = users2.some(user => {
//   if(user.role.includes("admin")){
//     console.log("Have Admin");
//   }
// });


// Q10: Check if any word starts with capital letter

// const words = ["hello", "world", "ChatGPT", "coding"];
// const hasCapital = words.some(text => text[0] === text[0].toUpperCase());
// console.log(hasCapital);

// JavaScript Day 8

// examples

// 1. Object.keys(obj)
// Returns array of keys

const user = { name: "Buddy", age: 23 };
console.log(Object.keys(user)); // ['name', 'age']

// Use when: Tumhe object ke saare keys chahiye loop ya counting ke liye

// 2. Object.values(obj)
// Returns array of values

console.log(Object.values(user)); // ['Buddy', 23]

// Use when: Tumhe values chahiye print ya condition check ke liye

// 3. Object.entries(obj)
// Returns array of [key, value] pairs

console.log(Object.entries(user));

// [['name', 'Buddy'], ['age', 23]]
// Use when: Tum loop se key + value dono use karna chahte ho

// 4. in operator
// Returns true if property exists (also in prototype)

console.log('name' in user);  // true
// Use when: Safe way to check key exists (even if value is undefined)

// // 5. hasOwnProperty()
// Same as in, but doesn't check inherited props

console.log(user.hasOwnProperty('name')); // true
// Use when: Tum sirf apne object ke direct keys check karna chahte ho

// 6. Object.freeze(obj)
// Freezes object – no add, remove, or change

console.log(Object.freeze(user));
user.age = 99;  // ❌ won't change

//  Use when: Tum chahte ho koi data accidentally mutate na kare

// 7. Object.seal(obj)
// Can't add/remove properties, but can modify existing ones

console.log(Object.seal(user));
user.age = 30;     // ✅ allowed
delete user.name;  // ❌ not allowed

// Use when: Properties fix karni ho but values allow ho update

// Day 8 Practice Questions

// Q1: Print the number of properties in this object using Object.keys()

const book = {
  title: "JavaScript Mastery",
  pages: 350,
  author: "Aman Khan",
  published: 2025
};

// Output should be: 4
for(let [key, value] of Object.entries(book)){
  console.log(`${key}: ${value}`);
}

// Q1. Use Object.keys() to get all keys of this object

const mobile = {
  brand: "OnePlus",
  price: 30000,
  color: "Blue"
};
console.log(Object.keys(mobile));

// Output: ["brand", "price", "color"]

// Q2. Use Object.values() to get all values

console.log(Object.values(mobile));

// Output: ["OnePlus", 30000, "Blue"]

// Q3. Use Object.entries() to get key-value pairs

console.log(Object.entries(mobile));

// Output: [["brand", "OnePlus"], ["price", 30000], ["color", "Blue"]]

// Q4. Use Object.freeze() to lock the object and try changing value

Object.freeze(mobile);

mobile.color = "Red";
console.log(mobile.color);

// Q5. Use Object.seal() and try updating & deleting a value

const car = {
  model : "Legend Alto",
  year : 2003
}
Object.seal(car);
car.year = "2025";
car.model = "San Alto";
console.log( car.model, car.year);

// Q6. Use in and hasOwnProperty() to check if key exists

const userFriend = {
  name: "chomu",
  age: 17
}
console.log("name" in userFriend );
console.log(userFriend.hasOwnProperty("name"));
console.log(userFriend.hasOwnProperty("data"));

// practice Questions

//  Q1. Count the number of keys using Object.keys()
const food = {
  name: "Burger",
  price: 120,
  isVeg: false
};

console.log(Object.keys(food));
// Output: 3

// Q2. Get all the values using Object.values()

console.log(Object.values(food));

// Q3. Check if key "price" exists using both in and hasOwnProperty()

console.log(food.hasOwnProperty("price"));

// Q4. Use Object.entries() to get all key-value pairs

console.log(Object.entries(food));

// Q5. Try changing a value after freezing the object

const jsbook = {
  title: "JS Guide",
  pages: 300
};

Object.freeze(jsbook);
jsbook.pages = 100;
console.log(jsbook.pages);

// Q6. Try changing a value and deleting a key after sealing the object

const course = {
  name: "JavaScript",
  duration: "1 Year",
  isFree: false
}
Object.seal(course);
course.name = "Phython";
course.duration = "6 months";
course.isFree = false;
console.log(course.name, course.duration, course.isFree);

// Bonus (Q7): Write a condition that prints true only if title exists and its value is "JS Guide".

if (jsbook.hasOwnProperty("title")) {
  console.log("yes it has");
} else {
  console.log("not found");
}