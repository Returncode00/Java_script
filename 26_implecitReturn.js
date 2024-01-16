const addNum = (num1, num2) => num1 + num2;

// const addNum = (num1 , num2) => (num1 + num2) using () not need to write return
// const addNum = (num1 , num2) => {return num1 + num2} {} need to write return

console.log(addNum(3, 7));

const subNum = ({ num1, num2 }) => num1 - num2;

// const addNum = (num1 , num2) => (num1 + num2) using () not need to write return
// const addNum = (num1 , num2) => {return num1 + num2} {} need to write return

console.log(subNum({ num1: 3, num2: 7 }));
console.log(subNum({ num2: 3, num1: 7 }));

// object return
const objReturn = ({ num1, num2 }) => { username: "Mahazab"};
console.log(objReturn(3, 4));

// for returnning object wrap into ()
const objReturn1 = ({ num1, num2 }) => ({ username: "Mahazab"});
console.log(objReturn1(3,4));