// ! Objects

// * Assignment 1
function greet(obj) {
  console.log("Namashkar", obj.name);
}

let user0 = {
  name: "Akshay",
  age: 20,
};

greet(user0);

// * Assignment 2
function greetAgain(anyObj) {
  console.log(
    `Hi Mr ${anyObj.name} , Your age is ${anyObj.age} and you are ${anyObj.gender}`
  );
}
let user1 = {
  name: "Aditya",
  age: 22,
  gender: "male",
};
greetAgain(user1);

// * Assignment 3

function validate(Oobj) {
  console.log(`Hello Miss ${Oobj.name} your age is ${Oobj.age}`);

  if (Oobj.age < 18) console.log("You cannot Vote");
  else console.log("You can vote");
}

let User2 = {
  name: "Anushka",
  age: 21,
};

validate(User2);

// ! Array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let ans = function isEven(...arr) {
  let newArr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
};

let evenNumbers = ans(...arr);

for (let i = 0; i < evenNumbers.length; i++) {
  console.log(evenNumbers[i]);
}

// ! Array of Objects

let user = [
  { name: "Akshay", age: 17 },
  { name: "Aditya", age: 23 },
  { name: "Deepak", age: 18 },
  { name: "Kirat", age: 21 },
  { name: "Kumkum", age: 16 },
  { name: "Abhi", age: 19 },
];

function getUsersOlderThan18(user) {
  return user.filter((user) => user.age > 18);
}
const Users = getUsersOlderThan18(user);
console.log(user);


// ! Object of Objects
let users = [
    { name: "Rohan", age: 17, gender: "male" },
    { name: "Anjali", age: 22, gender: "female" },
    { name: "Vikram", age: 23, gender: "male" },
    { name: "Neha", age: 20, gender: "female" },
    { name: "Amit", age: 25, gender: "male" },
    { name: "Suresh", age: 19, gender: "male" },
    { name: "Priya", age: 30, gender: "female" },
    { name: "Ravi", age: 16, gender: "male" },
    { name: "Karan", age: 18, gender: "male" },
    { name: "Deepak", age: 35, gender: "male" },
  ]; 
  function getAdultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
  }
  const adultMales = getAdultMales(users);
  console.log(adultMales);
  