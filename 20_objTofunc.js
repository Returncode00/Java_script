const user = {
  ID: 34,
  Name: "Abul",
};

function getData(passedObject){

    return `Name  : ${passedObject.Name} , ID  : ${passedObject.ID}`
}

console.log(getData(user))