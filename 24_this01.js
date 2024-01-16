function read (){
    let play = "Football"
    console.log(this)
}

//read()

function read() {
  let play = "Football";
  console.log(this.play);// this not working
}

read();