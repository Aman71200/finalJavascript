// Day 14 Focus: DOM Event Listeners (Advanced Usage) + Mini Features

// Task 1: Button click → alert + event type

// let alertBtn = document.getElementById("alertBtn");
// alertBtn.addEventListener("click", function (event) {
//     alert("I Am batman" + event.type);
// });

// Task 2: Box → on mouseenter change color

// let containerBox = document.querySelector(".container");
// containerBox.addEventListener("mouseenter", function () {
//     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//     this.style.background = randomColor;
// });

// Task 3: Show pressed keyboard key in DOM

// document.addEventListener("keydown", function (e) {
//     document.querySelector(".output").innerHTML = `You Pressed ${e.key}`;
// });

// Task 4: Multiple buttons → show innerText

// document.querySelectorAll(".multiBtn").forEach(function (btn) {
//     btn.addEventListener("click", function (e){
//         alert("You clicked on: " + e.target.innerText);
//     });
// });


// Task 5: UL with LI → only one listener (delegation)

// document.querySelector("ul").addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         alert("You Entered this" + e.target.innerText);
//     };
// });

// Task 6: Toggle theme (light/dark) via button

//  let tgbtn = document.getElementById("tgbtn");
//  tgbtn.addEventListener("click", function (){
//     document.body.classList.toggle("dark-side");
//  });

// Day 15 — Event Bubbling, Capturing & Delegation

// Task 1: Create a parent <div> with 3 buttons inside it. Use event delegation to detect which button is clicked.

// let parentBtn = document.getElementById("parentBtn").addEventListener("click", function (e) {
//     alert("You clicked on: " + e.target.innerText);
// });

// Task 2: Use bubbling to log both child and parent click events.

// document.getElementById("parentBtn").addEventListener("click", function (e) {
//     if(e.target.tagName === "BUTTON") {
//         console.log("You clicked on: " + e.target.textContent);
//     }
// })


// document.body.classList.toggle("button");

// Task 3: Add capturing listener to outermost body and log "Captured at body" before bubbling starts.

// document.body.addEventListener("click", function () {
//     console.log("You Captured Body")
// }, true);

// Task 4: Dynamically add list items (<li>) using JS, and still make sure they respond to clicks using delegation.

// let box = document.getElementById("box");
// let li = document.createElement("li");
// li.textContent = "papaya";
// box.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         console.log("clicked on: " + e.target.textContent);
//     }
// });
// box.append(li);

// Task 5: Prevent event from reaching parent (stop bubbling).

// let threeBtn = document.getElementById("threeBtn");
// threeBtn.addEventListener("click" , function (e) {
//     e.stopPropagation();
//     console.log("You Clicked on: " + e.target.textContent);
// });

// Example

// document.getElementById("child").addEventListener("click", () => {
//   console.log("🟢 Button (Child) clicked");
// });

// document.getElementById("parent").addEventListener("click", () => {
//   console.log("🟡 Parent Div clicked");
// });

// document.body.addEventListener("click", () => {
//   console.log("🔵 Body clicked");
// });


// const btn = document.getElementById("openMenu");
// const menu = document.getElementById("menu");

// btn.addEventListener("click", (e) => {
//   menu.style.display = "block";
//   e.stopPropagation(); // so body click doesn't close instantly
// });

// document.body.addEventListener("click", () => {
//   menu.style.display = "none";
// });

// Day 16: Form Handling (HTML + JS DOM)

// Practice Task Contact Form with Validation

const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const altbutton = document.getElementById("submitBtn");
    // altbutton.addEventListener("submit", function () {
    //     alert("Thank you [name], we’ll contact you at [email]!");
    // })

    if (name === "" || email === "" || message === "") {
        alert("All Fields Are Required");
        return;
    } else {
        alert(`Thank you ${name}, we’ll contact you at ${email}!`);
    }
    
    console.log("Form submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Day 17: localStorage in JavaScript

    // Step 1: On Submit, JS se save karo:

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Step 3: Page reload hone par:

    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");

    console.log("Saved Name:", savedName);
    console.log("Saved Email:", savedEmail);

    document.getElementById("name").value = savedName;
    document.getElementById("email").value = savedEmail;

    alert(`Saved! Hello, ${name}!`);

    form.reset();
});

// Day 18 – setTimeout() & setInterval()

// Q1: 1 Basic setTimeout Show message after 3 seconds.

setTimeout(() => {
    console.log("Hello! i'm late!");
}, 3000);


// Q2: Basic setInterval Print counter every second.

// let sec = 0;
// setInterval(() => {
//     console.log(`Sec: ${sec}`);
//     sec++;
// }, 1000);

// Q3: Countdown Timer Build a countdown from 10 to 0.

let num = 10; 
let id = setInterval(() =>{
    console.log(num)
    num--;
    if (num < 0) clearInterval(id);
}, 1000);

// Q4:	Auto Text Changer Change text every 2s from array values.

let texts = ["Welcome", "To", "JavaScript", "30 Days", "Challenge"];
let i = 0;
setInterval(() => {
    document.getElementById("text").innerText = texts[i];
    i = (i + 1) % texts.length;
}, 2000);

// Q5: Stop Interval on Click Use clearInterval() on button click.

// let count = 1;
// let timerCount = setInterval(() => {
//     document.getElementById("timer").innerText = count;
//     count++;
// }, 1000);

// Use clearInterval() on button click.

//  Q6 Popup Reminder Timer	Show a popup after 5s using setTimeout.

document.getElementById("stopBtn").addEventListener("click", () => {    
    clearInterval(timerCount);
    alert("Timer End: " + count);
});

