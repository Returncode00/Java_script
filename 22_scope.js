// var declaring is scoped it can be modified 

if (true) {
  let a = 1;
  const b = 2;
  var c = 3;
}

function a() {
    let a = 1
    var b = 4

    return a+b
}

// console.log(a) undifined
//console.log(b) undifined
c = 9
console.log(c);

// var is in function declaration
b = 10
console.log(a())
