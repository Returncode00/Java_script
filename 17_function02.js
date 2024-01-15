//Using bject as a parameter and destructure it within
//the function to handle named parameters sequence not maintain passing in parametres

function studentInfo({ name, id, cg }) {
  // === checks the value and also datatype

  if (name === undefined) {
    return `Enter a valid name (Name : ${name})`;
  }
  if (id === undefined) {
    return `Enter a valid id (ID : ${id})`;
  }
  if (cg === undefined) {
    return `Enter a valid Grade (Grade : ${cg})`;
  }
  return `Student name : ${name} , Student ID ${id} , CGPA : ${cg}`;
}

console.log(studentInfo({ id: 7373, name: "sam", cg: 3.9 }));

console.log(studentInfo({ id: 7373, cg: 3.9, name: "sam" }));
