const mySym = Symbol("key1");
const chxUser = {
  username: "Rayhan0.1",
  Full_name: "Edris Ali Rayhan",
  age: 25,
  hobbi: "Gardenning",
  sports: "Soccer",
  uniqueId: 5598593443784,
  phone_number: 9920292902309,
  [mySym]: "mykey1",
};

console.table(chxUser)
console.log(chxUser)
console.log(chxUser[mySym]);
console.log(typeof chxUser[mySym]);
