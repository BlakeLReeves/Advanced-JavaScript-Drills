// setName();
// function setName() {
//     var name = 'Blake';
//     console.log(name);
// }

// console.log('first');
// let avg = findAvg(2, 2);
// console.log('third', avg);

// function findAvg(a, b) {
//     console.log('second');
//     var answer = (a + b) / 2;
//     return answer;
// }

let fruits = ['apple', 'orange', 'banana'];
//let favFruit;
function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);

    function printFavFruit() {
        console.log(favFruit);
        let leastFav = fruits[1];
    }
    printFavFruit();
    console.log(leastFav);
}

printFruits();


// someFunc();
// function someFunc() {
//     console.log('Hello, Blake!')
// }

// let someText = function() {
//     alert('This is an alert with some text!')
// };
// someText();