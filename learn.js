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

// const user = { name: "Buddy", age: 23 };
// console.log(Object.keys(user)); // ['name', 'age']

// Use when: Tumhe object ke saare keys chahiye loop ya counting ke liye

// 2. Object.values(obj)
// Returns array of values

// console.log(Object.values(user)); // ['Buddy', 23]

// Use when: Tumhe values chahiye print ya condition check ke liye

// 3. Object.entries(obj)
// Returns array of [key, value] pairs

// console.log(Object.entries(user));

// [['name', 'Buddy'], ['age', 23]]
// Use when: Tum loop se key + value dono use karna chahte ho

// 4. in operator
// Returns true if property exists (also in prototype)

// console.log('name' in user);  // true
// Use when: Safe way to check key exists (even if value is undefined)

// // 5. hasOwnProperty()
// Same as in, but doesn't check inherited props

// console.log(user.hasOwnProperty('name')); // true
// Use when: Tum sirf apne object ke direct keys check karna chahte ho

// 6. Object.freeze(obj)
// Freezes object – no add, remove, or change

// console.log(Object.freeze(user));
// user.age = 99;  // ❌ won't change

//  Use when: Tum chahte ho koi data accidentally mutate na kare

// 7. Object.seal(obj)
// Can't add/remove properties, but can modify existing ones

// console.log(Object.seal(user));
// user.age = 30;     // ✅ allowed
// delete user.name;  // ❌ not allowed

// Use when: Properties fix karni ho but values allow ho update

// Day 8 Practice Questions

// Q1: Print the number of properties in this object using Object.keys()

// const book = {
//   title: "JavaScript Mastery",
//   pages: 350,
//   author: "Aman Khan",
//   published: 2025
// };

// Output should be: 4
// for(let [key, value] of Object.entries(book)){
//   console.log(`${key}: ${value}`);
// }

// Q1. Use Object.keys() to get all keys of this object

// const mobile = {
//   brand: "OnePlus",
//   price: 30000,
//   color: "Blue"
// };
// console.log(Object.keys(mobile));

// Output: ["brand", "price", "color"]

// Q2. Use Object.values() to get all values

// console.log(Object.values(mobile));

// Output: ["OnePlus", 30000, "Blue"]

// Q3. Use Object.entries() to get key-value pairs

// console.log(Object.entries(mobile));

// Output: [["brand", "OnePlus"], ["price", 30000], ["color", "Blue"]]

// Q4. Use Object.freeze() to lock the object and try changing value

// Object.freeze(mobile);

// mobile.color = "Red";
// console.log(mobile.color);

// Q5. Use Object.seal() and try updating & deleting a value

// const car = {
//   model : "Legend Alto",
//   year : 2003
// }
// Object.seal(car);
// car.year = "2025";
// car.model = "San Alto";
// console.log( car.model, car.year);

// Q6. Use in and hasOwnProperty() to check if key exists

// const userFriend = {
//   name: "chomu",
//   age: 17
// }
// console.log("name" in userFriend );
// console.log(userFriend.hasOwnProperty("name"));
// console.log(userFriend.hasOwnProperty("data"));

// practice Questions

//  Q1. Count the number of keys using Object.keys()
// const food = {
//   name: "Burger",
//   price: 120,
//   isVeg: false
// };

// console.log(Object.keys(food));
// Output: 3

// Q2. Get all the values using Object.values()

// console.log(Object.values(food));

// Q3. Check if key "price" exists using both in and hasOwnProperty()

// console.log(food.hasOwnProperty("price"));

// Q4. Use Object.entries() to get all key-value pairs

// console.log(Object.entries(food));

// Q5. Try changing a value after freezing the object

// const jsbook = {
//   title: "JS Guide",
//   pages: 300
// };

// Object.freeze(jsbook);
// jsbook.pages = 100;
// console.log(jsbook.pages);

// Q6. Try changing a value and deleting a key after sealing the object

// const course = {
//   name: "JavaScript",
//   duration: "1 Year",
//   isFree: false
// }
// Object.seal(course);
// course.name = "Phython";
// course.duration = "6 months";
// course.isFree = false;
// console.log(course.name, course.duration, course.isFree);

// Bonus (Q7): Write a condition that prints true only if title exists and its value is "JS Guide".

// if (jsbook.hasOwnProperty("title")) {
//   console.log("yes it has");
// } else {
//   console.log("not found");
// }

// Day 10: Destructuring

// Q1: Array Destructuring Basics

// const numbers = [100, 200, 300, 400];

// Destructure to get second and fourth values
// and log them

// const [a,b,c,d] = numbers;
// console.log(b);
// console.log(d);

// Q2: Skipping Values + Default

// const names = ["Buddy"];

// Destructure to get:
// // - first name as `firstName`// - second name as `lastName`, default "Unknown"
// const [first,second] = names;
// console.log(first);
// console.log(second);

// Q3: Object Destructuring with Rename

// const product = {  id: 1,  title: "Shoes",  price: 999};

// Destructure and rename:

// const {title: proTitle, price: proPrice} = product

// Destructure and rename:
// console.log(proTitle); // - title → productName
// console.log(proPrice)// - price → productPrice
// console.log(proTitle, proPrice)// Then log both

// Q4: Nested Object Destructuring

// const nestedUser = {
//   id: 101,
//   profile: {
//     username: "buddy007",
//     contact: {
//       email: "buddy@example.com"
//     }
//   }
// };

// Destructure to extract just `email` in one line

// const {profile: email} = nestedUser;
// console.log(email);

// Q5 (Challenge): Mixed Destructuring

// const response = {
//   status: 200,
//   data: [
//     { id: 1, name: "Alpha" },
//     { id: 2, name: "Beta" }
//   ]
// };

// const {
//   status: resStatus,
//   data: [
//     { name: firstName },
//     { id: secondId }
//   ]
// } = response;

// Destructure to extract:
// console.log(resStatus); // - status code
// console.log(firstName); // - first item's name
// console.log(secondId)// - second item's id

// Q6: Array Destructuring with Default + Rest

// const scores = [90, 80];
// const [topper,secondTop,backup = 60,...rest] = scores;
// Destructure first score as `topper`, second as `secondTop`, 
// console.log(topper);
// console.log(secondTop);
// console.log(backup); // and third as `backup = 60` (default), 
// console.log(...rest);// then rest in `others`

// Q7: Object Destructuring - Nested with Default & Rename

// const config = {
//   user: {
//     name: "Aman",
//     preferences: {
//       theme: "dark"
//     }
//   }
// };

// const {
//   user: {
//     name: userName,
//   preferences: {
//     theme: userTheme
//   }
// },
//   language: userLang = "en"
// } = config;

// Destructure:
// console.log(userName); // - `name` → `userName`
// console.log(userTheme); // - `theme` → `userTheme`
// console.log(userLang); // - `language` → `userLang` (default: "en")

// Q8: Deep Object + Array Destructuring

// const appData = {
//   version: "1.0",
//   contributors: [
//     { id: 1, username: "dev1" },
//     { id: 2, username: "dev2" }
//   ]
// };

// const {
//   version: appVersion,
//   contributors: [
//     {username: mainDev},
//     {id: supportId}
//   ]
// } = appData
// Destructure:
// console.log(appVersion); // - version
// console.log(mainDev); // - first contributor's username → `mainDev`
// console.log(supportId); // - second contributor's id → `supportId`

// Q9: Destructure Function Return Value

// function getUser() {
//   return {
//     id: 101,
//     email: "test@buddy.com",
//     isVerified: true
//   };
// }
 
// const { id,email: userEmail,isVerified: verifiedStatus } = getUser();

// Destructure return value to get:
// console.log(id); // - id
// console.log(verifiedStatus); // - isVerified → renamed as `verifiedStatus`

// Q10: (Challenge): Destructure + Combine

// const options = {
//   mode: "production",
//   plugins: ["auth", "cache"],
//   meta: {
//     createdBy: "buddy",
//     lastUpdate: "2025-06-30"
//   }
// };

// const {
//   mode, 
//   plugins: [firstPlugin, lastPlugin],
//   meta: {
//     createdBy,
//     lastUpdate: updateOn
//   }
// } = options

// Destructure:
// console.log(mode); // - mode
// console.log(firstPlugin); // - first plugin as `firstPlugin`
// console.log(updateOn); // - lastUpdate as `updatedOn`
// console.log(`App in ${mode} by ${createdBy}, last updated ${updateOn}`); // Then print: `"App in MODE mode by CREATEDBY, last updated on UPDATEDON"`

// JavaScript Day 11

//  ... spread opreator and rest 

// Step 1 spread operator

// Q1. Clone this array using spread:

// const original = [10, 20, 30];
// Create a copy in variable: clone
// const clone = [...original];
// console.log(clone);

// Q2. Merge two arrays using spread:

// const evens = [2, 4, 6];
// const odds = [1, 3, 5];
// // Merge and store in: allNums
// const allNums = [...evens, ...odds];
// console.log(allNums);

// Q3. Copy this object and add a new key:

// const person = { name: "Aman", age: 25 };
// Copy into newPerson and add country: "India"
// const newPerson = {...person, country: "India"};
// console.log(newPerson);

// Step 2 Rest operator 

// Q4. Write a function that accepts any number of numbers and returns their average:

// function acceptsNums(...nums){
//   const total = numbers.reduce((acc, val) => acc + val, 0);
//   return total / nums.length;
// }
// console.log(acceptsNums(1,3,4,45,5,6));

// Q5. Destructure the array to get first two items separately, and rest in another variable:

// const colors = ["red", "blue", "green", "yellow", "black"];
//  const [firstColor, secondColor, ...color] = colors;
//  console.log(firstColor, secondColor);

// Q6. Destructure this object and extract name, and put the rest in another object:

// const userDesture = {
//   name: "Elor",
//   age: 22,
//   role: "Admin",
//   location: "Earth"
// };

// // Use rest to store age, role, location
// const {name,...restDtc} = userDesture;
// console.log(restDtc);

// Advanced Practice Set (Combo Style)

// Q7. Clone and Modify

// const totalScores = [98, 87, 92];
// Make a copy and add two more scores (75, 89) using spread
// Expected: [98, 87, 92, 75, 89]

// const modifyScore = [...totalScores, ...rest, 75, 89 ];
// console.log(modifyScore);

// Q7. Merge Multiple Objects with Same Keys

// const info1 = { name: "Aman", age: 25 };
// const info2 = { age: 26, country: "India" };
// Merge into fullInfo. Which age will be kept?
// const allInfo = {...info1, ...info2};
// console.log(allInfo); // kept age is 26

// Q8. Find the Product of Any Number of Arguments

// function multiplyAll(...nums) {
//   const totalMUtiply = nums.reduce((nums, val)=> nums * val);
//   return totalMUtiply;
// }
// console.log(multiplyAll(2, 3, 4)); // → 24

// Q9. Destructure Array and Log Last 2 Items Using Rest

// const fruits = ["apple", "banana", "mango", "kiwi", "grapes"]
// Destructure first 3 items separately, and put the rest in a new array
// const [fisrtFruit, secondFruit, thirdFruit, ...restFruits] = fruits;

// console.log(fisrtFruit, secondFruit, thirdFruit);
// console.log(...restFruits);

// Q10. Destructure Object and Use Rest

// const dev = {
//   name: "Elor",
//   skill: "JavaScript",
//   level: "Pro",
//   language: "English"
// };
// // Extract skill and name, keep rest in another object
// const {name: devName, skill, ...restSkill} = dev;
// console.log(restSkill);

// Q11. Function with Named Params + Rest
// function describePerson(name, age, ...hobbies) {
//   console.log(`"${name} is ${age} years old and loves: ${hobbies}"`);
// }
// describePerson("Aman", 22, "coding", "reading");

//  Q12. Merge 3 arrays using spread and remove duplicate values

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const arr3 = [4, 5, 6];
// Merge them and return unique values only

// const allArrs = [...arr1, ...arr2, ...arr3];
// console.log(allArrs);

// Q13. Create a function that returns the maximum number passed
// function maxOfAll(...nums){
//   return Math.max(...nums);
// }
// console.log(maxOfAll(10, 45, 2, 89, 23)); // → 89

// Q14. Destructure an array and skip middle items

// const letters = ["A", "B", "C", "D", "E", "F"];
// Get A, B and F into variables, skip C–E using rest
// const [x,y, , , , f] = letters;
// console.log(x,y,f);

//  Q15. Destructure nested object and collect rest inside
// const collectuser = {
//   id: 1,
//   name: "Aman",
//   location: {
//     city: "Delhi",
//     country: "India"
//   },
//   email: "aman@example.com"
// };
// // Extract name and city, keep rest in new object
// const {
//   name: username,
//   location: {
//     city
//   },
//   ...restCollect
// } = collectuser;
// console.log(username, city);

// Q16. Create a function that accepts user info and extra properties
// function registerUser(name, email, ...restProps) {
//   console.log("Name:", name);
//   console.log("EmAIL:", email);
//   console.log("Othwer Properties", restProps);
//   // log name, email, and restProps as array
// }

// registerUser("Elor", "elor@mail.com", "India", 22, "Male");

// Day 12 – JavaScript 30-Day Challenge

// Today Practice Questions

// Q1: Access any element by ID and change its textContent.
// Q2: Use querySelector() to select a div and change its style.backgroundColor.
// Q3: Use getElementsByClassName() and log the length.
// Q4: Create a <p> tag from JS and add it to the DOM.
// Q5: Remove an element from the DOM using .remove().

// let container = document.getElementById("box");
// let box  = document.querySelector("h1");
// box.style.color = "red";
// let btn = document.getElementById("btn");;
// btn.addEventListener("click", function(){
//   box.textContent = "Hello Aman!";
// });
// let parah = document.getElementsByClassName("someclass");
// console.log("count length:", parah.length);
// let ptag = document.createElement("p");
// ptag.textContent = "Hello this is my first Dom topic!"
// container.appendChild(ptag);
// ptag.remove();

// Mini Project Idea: Interactive List Generator

// You’ll build this:

// Ek input box aur button hoga
// User koi item likhega, click karega
// Wo item list me add ho jayega
// Har item ke sath delete button bhi hoga
// Click se item delete hoga

// Step 1 Selet HTML Elements

// let addBtn = document.getElementById("addBtn");
// let input = document.getElementById("itemInput");
// let list = document.getElementById("itemList");

// addBtn.addEventListener("click", function(){
//   let value = input.value.trim();
//   if(value === "") return;
  
  // Step 2 Create List
  
  // let li = document.createElement("li");
  // li.textContent = value;
  
  // Step 3 Create Delete Button 
  
  // let DeleteBtn = document.createElement("button");
  // DeleteBtn.textContent = "X";
  // DeleteBtn.style.marginLeft = "10px";
  
  // Step 4 Add EventListner in Delete Button
  
  // DeleteBtn.addEventListener("click", function (){
  //   li.remove();
  // });
  
  // Step 5 Append button  to li and li to ul
  
  // li.appendChild(DeleteBtn);
  // list.appendChild(li);
  
  // Clear inpuit
//   input.value = "";
// });

// Mini Task 3 – Toggle Background Color

// Step 1 Slect Html Button

// let toggleBtn = document.getElementById("toggleBtn");

// Step 2 Add EventListner

// toggleBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");
// });

//  Mini Task 4 – Show/Hide Password

// Step 1 select Html elements 

// let passInput = document.getElementById("passInput");
// let showPass = document.getElementById("showPass");

// step 2 Add EventListner in input

// showPass.addEventListener("change", function () {
//   passInput.type = this.checked ? "text" : "password";
// });

//  Mini Task 5 – Character Counter

// Step 1 select Html elements 

// let messageBox = document.getElementById("messageBox");
// let charCount = document.getElementById("charcount");

// step 2 Add EventListner in input

// messageBox.addEventListener("input" , function () {
//   charCount.textContent = `Characters: ${this.value.length}`;
// });

// Day 13 of 30 Days JavaScript Challenge

// DOM Manipulation

// Task 1: Create and Append an Element in the DOM

// Stwp 1: Select Html Element

// let box = document.getElementById("box");

// Step 2: Create <p></p> in javaScript and append it in box

// let passage = document.createElement("p");
// passage.textContent = "hello today is day 13 of learning javaScript complet Basics in 30 Days!";
// box.append(passage);

// Task 2: Remove an Element from the DOM on Button Click

// let removeBtn = document.getElementById("removeBtn");
// removeBtn.addEventListener("click", function () {
//   passage.remove();
// });

// Task 3: Toggle Class using .classList.toggle()

// Select Element

// let themeBtn = document.getElementById("themeBtn");

// Step 2: add eventListner and toggle to themeBtn

// themeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-side");
// });

// Mini Practice Project A basic Calculator

// let buttons = ["C", "1", "2", "3", "5", "6", "7", "8", "9", "0","+", "-", "*", "/", "="];

// let container = document.getElementById("buttons-container");

// Add buttons using js

// buttons.forEach(function (label) {
//   let btn = document.createElement("button");
//   btn.innerText = label;
//   btn.classList.add("btn");

//   btn.addEventListener("click", function () {
//     handleClick(label);
//   });

//   container.appendChild(btn);
// });

// let display = document.getElementById("display");
// let currentValue = "";

// function handleClick(label) {
//   if (label === "C") {
//     currentValue = "";
//     display.value = "";

//   } else if (label === "=") {
//     try {
//       currentValue = eval(currentValue);
//       display.value = currentValue;
//     } catch (error) {
//       display.value = "Error";
//       currentValue = "";
//     }
//   }
//   else {
//     currentValue += label;
//     display.value = currentValue;
//   }
// }

// Day 14 to 18 in dom.js

// Day 19: Callback Functions in JavaScript

// Q1: Make a function displayResult(num, callback) that squares the number and then calls the callback to print result.

// function displayResult(num, callback){
//   let result = num *num;
  // Q2: Use setTimeout() to simulate a task with delay, and call a callback after 2 seconds.
//   setTimeout(() => {
//     callback(result);
//     }, 2000);
// }

// function printResult(res){
//   console.log("Squared Result is: " + res);
// };

// displayResult(5, printResult);

// Q3: Create your own calculator(a, b, operationCallback) - where operation can be add, subtract, etc.

// function calculator(a, b, callback){
//   callback(a,b);
// }

// function add (x, y){
//    console.log("Numbers is Added:", x + y);
// }

// function subtract (x, y){
//    console.log("Substract", x - y);
// }

// calculator(10, 23, add);
// calculator(32, 24, subtract);

// Q4: Write a function askUser(callback) which takes name via prompt (for browser) and then calls the callback with the name.

// function greetUser(callback){
//   let name = prompt("Enter Your Name");
//   callback(name);
// }

// function userGreet(username){
//   console.log("Hello " + username + "!");
// }

// greetUser(userGreet);

// Q5: Use forEach() to loop over an array and call a callback that logs each item.

// let fruits = ["apple", "banana", "cherry"];

// function item(item){
//   console.log("Fruits: " + item);
// }

// fruits.forEach(item);

// Q6: Delayed Welcome Notification

// function callUser(name, callback){
//   setTimeout(() => {
//     callback(name);
//   }, 2000);
// }

// function userCall(name){
//     console.log("Hello user: " + name + "!");
// }

// callUser("Aman",userCall);

//  Day 20: JavaScript Promises

// promise syntrax 

// const myPromise = new Promise((resolve, reject) => {
//   // async task
// });

// Q1: Create a simple Promise that resolves after 2 seconds with a message.

// function delayedSms (){
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Task completed after 2 seconds!");
//       }, 2000);
//   });
// }

// delayedSms().then((msg) => console.log(msg));

// Q2: Create a function that returns a promise, and it resolves or rejects based on a boolean value.

// function checkStatus(isSuccess){
//   return new Promise((resolve, reject) => {
//     let status = isSuccess;
//     if (status === true) {
//     resolve("Operation successful!");
//   } else {
//     reject("Operation failed.");
//   }
//   });
// }

// checkStatus(true)
// .then(msg => console.log("✅", msg))
// .catch(err => console.log("❌", err));

// Q3: Promise chaining - do step-by-step kaam ek hi promise chain mein karo.

// function stepOne(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step One Completed!");
//       }, 1000);
//   });
// };

// function stepTwo(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Step Two Completed!");
//         reject("Step Two failed.");
//       }, 2000);
//   });
// };


// function stepThree(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Step Three Completed!");
//       }, 3000);
//   });
// };

// stepOne()
// .then(msg1 => {
//   console.log(msg1);
//   return stepTwo();
// })
// .then(msg2 => {
//   console.log(msg2);
//   return stepThree();
// })
// .then(msg3 => {
//     console.log(msg3);
// })
// .catch(err => {
//   console.log(err);
// });

// Q4: Promise.all() - Run Multiple Promises in Parallel

// function taskOne(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Task One done");
//       }, 1000);
//   });
// };

// function taskTwo(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("task Two Done!");
//       }, 2000);
//     });
//   };
  
  
//   function taskThree(){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("task Three Done!");
//       }, 3000);
//   });
// };

// Promise.all([taskOne(), taskTwo(), taskThree()])
// .then(msg => console.log(msg))
// .catch(err => console.log(err));

// Q5: Promise.race() - Fastest promise jeetega, baaki ignore honge


// function blinkit(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Order Delivered From: BlinkIt ");
//       }, 4000);
//   });
// };

// function zomato(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Order Delivered From: Zomato");
//       }, 2000);
//     });
//   };
  
  
//   function swiggy(){
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Order Delivered From: Swiggy");
//       }, 1000);
//   });
// };

// Promise.race([blinkit(), zomato(), swiggy()])
// .then(msg => console.log(msg))
// .catch(err => console.log(err));

// Day 21 of JavaScript

// Q1. GitHub Profile Fetcher

async function fetchProfile() {
    const user = document.getElementById('username').value;
    const result = document.getElementById('result');

    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const data = await res.json();

      result.innerHTML = `
        Name: ${data.name} <br>
        Public Repos: ${data.public_repos}
      `;
    } catch (err) {
      result.innerText = "User not found or network error.";
    }
  }

// async function fetchGithub() {

//   // Select Html tags

//   const username = document.getElementById("github").value;
//   const result = document.getElementById("result");

//   // Fetch github Api

//   try {
//     const res = await fetch('https://api.github.com/users/${user}');
//     const data = await res.json();

//     result.innerHTML = 
//     ` Name: ${data.name} <br>
//       Public Repos: ${data.public_repos}`

//   } catch (error) {
//     result.innerText = "User not found or network error.";
//   };
// };

// Q2. Dad Joke Fetcher

async function getJoke() {
  const jokeBox = document.getElementById("jokeBox");

  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          "Accept": "application/json"
        }
      });
      const data = await res.json();
      jokeBox.innerText = data.joke;
  } catch (error) {
     jokeBox.innerText = "Failed to load joke.";
  };
};

// Q3. Country Info App

async function countryData() {
  const country = document.getElementById("country").value;
  const countryBox = document.getElementById("countryBox");
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    const info = data[0];

    const name = info.name.common;
    const capital = info.capital[0];
    const population = info.population;
    const continent = info.continents[0];
    const flagURL = info.flags.png;

    countryBox.innerHTML = `
        <h3>${info.name.common} <img src="${info.flags.png}" width="20"></h3>
        <p>Capital: ${info.capital[0]}</p>
        <p>Region: ${info.region}</p>
      `;

  } catch (error) {
    countryBox.innerHTML = "County not found";
  }
}

// Q4 – Weather App (Live City Weather)

// async function getWeather() {
//   const weather = document.getElementById("weather").value;
//   const weatherBox = document.getElementById("weatherBox");

//   if (!weather) {
//     weatherBox.innerText = "Please enter a city.";
//     return;
//   }

//   try {
//     const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=YOUR_API_KEY&units=metric`);

//     if (!res.ok) {
//       weatherBox.innerText = "City not found or API error.";
//       return;
//     }

//     const data = await res.json();
//     console.log(data);

//     weatherBox.innerHTML = `
//       <h3>${data.name}</h3>
//       <p>Temperature: ${data.main.temp}°C</p>
//       <p>Humidity: ${data.main.humidity}%</p>
//       <p>Condition: ${data.weather[0].description}</p>
//     `;
//   } catch (error) {
//     console.log("Error caught:", error);
//     weatherBox.innerText = "Sorry, something went wrong.";
//   }
// }

// Q5 – FakeStore Products List App

// ✅ Step 1: Define async function to fetch products
async function getProduct() {
  const productBox = document.getElementById("productBox"); // target div

  try {
    // ✅ Step 2: Fetch product data from API
    const res = await fetch("https://fakestoreapi.com/products");

    // ✅ Step 3: Convert response to JSON
    const data = await res.json();
    // console.log(data); // for debugging – check array of objects

    // ✅ Step 4: Clear the default text
    productBox.innerHTML = "";

    // ✅ Step 5: Loop through each product and create card
    data.forEach(product => {
      // Destructure product fields
      const { title, price, image } = product;

      // ✅ Step 6: Create HTML card using template literal
      const card = `
        <div class="card">
          <img src="${image}" alt="${title}" />
          <h3>${title}</h3>
          <p>₹${price}</p>
        </div>
      `;

      // ✅ Step 7: Append card to productBox
      // productBox.innerHTML += card;
    });

  } catch (error) {
    // ✅ Step 8: Show error if API fails
    productBox.innerText = "❌ Failed to load products.";
    console.error("Fetch error:", error);
  }
}

// ✅ Step 9: Call function on page load
getProduct(); 

// Q6 – Random User Profile Generator

async function getUser() {
  const userBox = document.getElementById("userBox");
  
  try {
    const res = await fetch(`https://randomuser.me/api/`);
    const data = await res.json();
    const user = data.results[0];
    console.log(user);
    
    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const gender = user.gender;
    const imgURL = user.picture.large;

  
    userBox.innerHTML = "";

    const card = `
    <div class="card"> 
      <img src="${imgURL}" />
      <h3>${name}</h3>
      <p>${email}</p>
      <p>${gender}</p>
    </div>
    `;

    userBox.innerHTML = card;

  } catch (error) {
    userBox.innerHTML = "faile to load user data!"
  }

}

// Q9 – Currency Converter App

async function convertFnc() {
  const from = document.getElementById("currencyFrom").value.toUpperCase();
  const to = document.getElementById("currencyTo").value.toUpperCase();
  const amount = document.getElementById("amount").value;
  const currencyBox = document.getElementById("currencyBox");

  if (!from || !to || !amount) {
    currencyBox.innerText = "Please enter all fields.";
    return;
  }

  try {
    const res = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
    const data = await res.json();

    console.log(data); // 👈 check structure here in console

    if (!data.result || !data.info) {
      currencyBox.innerText = "Invalid data received from API.";
      return;
    }

    currencyBox.innerHTML = `
      <p>${amount} ${from} = <strong>${data.result.toFixed(2)} ${to}</strong></p>
      <p>Exchange Rate: 1 ${from} = ${data.info.rate.toFixed(2)} ${to}</p>
    `;
  } catch (error) {
    console.error(error);
    currencyBox.innerText = "Failed to fetch conversion data.";
  }
}
