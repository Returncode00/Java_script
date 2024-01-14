let mydate = new Date()

console.log(mydate.toDateString())
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());
console.log(mydate.getTimezoneOffset());

console.log()
console.log(typeof mydate)

let mycreatedate = new Date(1971 , 11 , 16)
console.log(mycreatedate)

console.log();
console.log(mycreatedate.toDateString());
console.log(mycreatedate.toISOString());
console.log(mycreatedate.toJSON());
console.log(mycreatedate.toLocaleDateString());
console.log(mycreatedate.toLocaleTimeString());
console.log(mycreatedate.toString());
console.log(mycreatedate.toTimeString());
console.log(mycreatedate.toUTCString());
console.log(mycreatedate.getTimezoneOffset());

let myTimestamp = Date.now()

console.log(myTimestamp)
console.log(mycreatedate.getTime())




