"use strict";
document.getElementById("resultado").innerHTML = "I have changed!";
function greet(name) {
    return `Hello, ${name}`;
}
const message = greet("World");
console.log(message);
