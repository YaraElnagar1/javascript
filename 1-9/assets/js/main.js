// 2
document.write("<h1>Task 1</h1>");
document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
document.querySelector("h1").style.fontWeight = 'bold';
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontFamily = 'arial';

// 3
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight: bold;", "color: white; font-size: 40px; background-color: blue");

// 4
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();


// 5

console.table(["Elzero", "Mostafa", "Alaa", "Ahmed", "Selim"]);

// 6
// console.log("Iam In Console");
// document.write("Iam In Page");
/* console.log("Iam In Console");
document.write("Iam In Page"); */