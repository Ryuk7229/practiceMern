// getting the header element
const greeting = document.getElementById("greeting");


// when red box is clicked, make it red
const redBox = document.getElementById("redBox");
redBox.addEventListener("click", function () {
  redBox.style.backgroundColor = "red";
});

// when blue box is clicked, make it blue
const blueBox = document.getElementById("blueBox");
blueBox.addEventListener("click", function () {
  blueBox.style.backgroundColor = "blue";
});

// when green box is clicked, make it green
const greenBox = document.getElementById("greenBox");
greenBox.addEventListener("click", function () {
  greenBox.style.backgroundColor = "green";
});

// when yellow box is clicked, make it yellow
const yellowBox = document.getElementById("yellowBox");
yellowBox.addEventListener("click", function () {
  yellowBox.style.backgroundColor = "yellow";
});

// getting the input box and button
var nameInput = document.getElementById("nameInput");
var greetBtn = document.getElementById("greetBtn");

// when button is clicked, change the header text
greetBtn.addEventListener("click", function () {
  var userName = nameInput.value;

  // check if user typed something
  if (userName == "") {
    greeting.innerHTML = "Hello, stranger";
  } else {
    greeting.innerHTML = "Hello, " + userName;
  }
});