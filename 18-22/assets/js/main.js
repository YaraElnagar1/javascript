console.log(10 * 20 * 15 % 3 * 190 * 10 * 400);

let num = 3;

// One
console.log(num + num); // 6

//  Two
console.log(num * --num); // 6

// Three
console.log(num * ++num); // 6

// Four
console.log(num ** num / num - num); // 6

// Five
console.log(++num * --num / --num); // 6

// Six
console.log(num ** num ** num / num - num); // 6


let num1 = "10";

// One
console.log(+num1 + +num1); // 20

// Two
console.log(+num1 + --num1 + --num1 - --num1 ); // 20

//Three
console.log(--num1 * --num1 - + +num1 - +num1); // 20

//Four
console.log(num1 * num1 - num1); // 20


let points = 10;

points += 3;

console.log(points);

points -= 5;

console.log(points); ;