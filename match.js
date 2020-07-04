//Math method and if else statment / Love Challenge
var first = prompt("Enter your Name 1");
var second = prompt("Enter your Name 2")
var num = (Math.random() * 100) + 1;
var rounded = Math.round(num);

if (rounded < 40) {
    alert(first + " and " + second + " have " + rounded + "% , You don't love each other")
} else if (rounded >= 40 && rounded <= 70) {
    alert(first + " and " + second + " have " + rounded + "%, It's a match")
} else {
    alert(first + " and " + second + " have " + rounded + "%, You  love each other")
}