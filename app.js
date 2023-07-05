console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number){
    return function(plusNumber){
        return plusNumber + number;
    }
   
}
const plus15 = plus(15);
console.log(plus15(10));

//Ex2

let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach(user => {
  console.log(user.name);
});

//Ex3

const nameAndScoreArray = users.map(user => ({
    name: user.name,
    score: user.score
  }));

console.log(nameAndScoreArray);

//Ex4

const activeUsers = users.filter(user => user.isActive);

console.log(activeUsers);
//Ex5
users.sort((a, b) => b.score - a.score);

console.log(users);

//Ex6
const sumOfScores = users.reduce((total, user) => total + user.score, 0);
console.log("Sum of scores:", sumOfScores);

const averageScore = sumOfScores / users.length;
console.log("Average score:", averageScore);