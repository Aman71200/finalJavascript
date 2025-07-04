// Day 14 Focus: DOM Event Listeners (Advanced Usage) + Mini Features

// Task 1: Button click → alert + event type

let alertBtn = document.getElementById("alertBtn");
alertBtn.addEventListener("click", function (event) {
    alert("I Am batman" + event.type);
});

// Task 2: Box → on mouseenter change color

let containerBox = document.querySelector(".container");
containerBox.addEventListener("mouseenter", function () {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    this.style.background = randomColor;
});

// Task 3: Show pressed keyboard key in DOM

// document.addEventListener("keydown", function (e) {
//     document.querySelector(".output").innerHTML = `You Pressed ${e.key}`;
// });

// Task 4: Multiple buttons → show innerText

document.querySelectorAll(".multiBtn").forEach(function (btn) {
    btn.addEventListener("click", function (e){
        alert("You clicked on: " + e.target.innerText);
    });
});


// Task 5: UL with LI → only one listener (delegation)

document.querySelector("ul").addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        alert("You Entered this" + e.target.innerText);
    };
});

// Task 6: Toggle theme (light/dark) via button

 let tgbtn = document.getElementById("tgbtn");
 tgbtn.addEventListener("click", function (){
    document.body.classList.toggle("dark-side");
 });