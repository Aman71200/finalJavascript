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

document.getElementById("parentBtn").addEventListener("click", function (e) {
    if(e.target.tagName === "BUTTON") {
        console.log("You clicked on: " + e.target.textContent);
    }
})


document.body.classList.toggle("button");

// Task 3: Add capturing listener to outermost body and log "Captured at body" before bubbling starts.

// document.body.addEventListener("click", function () {
//     console.log("You Captured Body")
// }, true);

// Task 4: Dynamically add list items (<li>) using JS, and still make sure they respond to clicks using delegation.

let box = document.getElementById("box");
let li = document.createElement("li");
li.textContent = "papaya";
box.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        console.log("clicked on: " + e.target.textContent);
    }
});
box.append(li);

// Task 5: Prevent event from reaching parent (stop bubbling).

let threeBtn = document.getElementById("threeBtn");
threeBtn.addEventListener("click" , function (e) {
    e.stopPropagation();
    console.log("You Clicked on: " + e.target.textContent);
});

