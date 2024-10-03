//importing mtm6407 from data.js
import { mtm6407, colors, points } from "./data.js";

// Done declaratively

//1. loop through each student and provide in a new variable (arry)
// - first name
// - last name
// - Letter Grade + (Number grade) e.g. A+ (100%)


const studentInfo = mtm6407.map(student => ({
    firstName: student.firstName,
    lastName: student.lastName,
    grade: `${student.gradeLetter} (${student.gradeNumber}%)`
}));

console.log(studentInfo);

//2. Go through each color and return the color that is 'red' ('red' not array)
const redColor = colors.find(color => color === 'red');

console.log("Red Color:", redColor);  // output= 'red'?!

//3. Create a compass variable (object):
// - North - "N"
// - South - "S"
// - East - "E"
// - West - "W"

// Bonus: if you can add this to an html object and return this to the body and make it look somewhat like a compass

const compassContainer = document.getElementById('compass');

points.forEach((point) => {
    const pointEl = document.createElement('div');
    pointEl.classList.add('point', point.symbol);
    pointEl.textContent = point.symbol;
    compassContainer.appendChild(pointEl);

});






// const Numbers = [1, 2, 3, 4, 5];
//const evenn = []

// imperative way
// for (cost number of Numbers) {
//     if (number % 2 === 0) {
//         evenn.push(number);
//     }
// }

// declarative way
// const evenn = Numbers.filter(number => number % 2 === 0);
// console.log(evenn);
