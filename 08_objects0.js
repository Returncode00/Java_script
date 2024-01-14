//object literals

const chxUser = {
  username : "Rayhan0.1",
  Full_name: "Edris Ali Rayhan",
  age: 25,
  hobbi: "Gardenning",
  sports: "Soccer",
  uniqueId: 5598593443784,
  phone_number: 9920292902309,
};

/*console.table(chxUser);
console.log(chxUser.sports);
console.log(chxUser["Full_name"]);
console.log(chxUser.username);
console.log(chxUser.phone_number);

Object.freeze(chxUser)

chxUser.sports = "huighr"
console.log(chxUser.sports);*/

chxUser.greeting = function(){
    console.log("Hello chexmaran");
    console.log(`Hello chexmaran ${this.Full_name} ${this.age}`);
}

console.log(chxUser.greeting)
console.log(chxUser.greeting());







