//Math method and if else statment / Love Challenge
var first = prompt("Enter your Name 1");
var slices = first.slice(0, 1).toUpperCase();
var slices1 = first.slice(1, 35).toLowerCase();
var result = slices + slices1;
var second = prompt("Enter your Name 2");
var slices2 = second.slice(0, 1).toUpperCase();
var slices3 = second.slice(1, 35).toLowerCase();
var results = slices2 + slices3;
var num = (Math.random() * 100) + 1;
var rounded = Math.round(num);

if (rounded < 40) {
    alert(result + " and " + results + " have " + rounded + "% , You don't love each other")
} else if (rounded >= 40 && rounded <= 70) {
    alert(result + " and " + results + " have " + rounded + "%, It's a match")
} else {
    alert(result + " and " + results + " have " + rounded + "%, You  love each other")
}