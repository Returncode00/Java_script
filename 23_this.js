// this works inside object not inside the function
const user = {
  username: "Mahazabin",
  address: "Farazikanda",

  wellcomeMessage: function () {
    console.log(`${this.username} , wellcome to hello world.`);
    console.log(this)// prints the current context
  },
};

user.wellcomeMessage()
console.log(this)// 