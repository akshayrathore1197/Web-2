//! Variable
let color = "Black";
let height = "178cm";
const age = 20;

//! Functions

//* Assignment 1
function sum(a, b) {
  return (c = a + b);
}
let sumAns = sum(12, 85);
let strSum = sum("12", 85);
console.log(sumAns);
console.log(strSum);

//* Assignment 2
function canVote(age) {
  if (age < 18) return false;
  else return true;
}
let ans = canVote(15);
let ans2 = canVote(20);
console.log(ans);
console.log(ans2);

// ! If\Else
function checkEvenOdd(num) {
  if (num % 2 == 1) console.log("Number is Odd");
  else console.log("Number is Even");
}
checkEvenOdd(181);
checkEvenOdd(874);

// ! Loops
function findSum(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
findSum(5);
