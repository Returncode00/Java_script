//Using bject as a parameter and destructure it within
//the function to handle named parameters sequence not maintain passing in parametres
//using ! operator

function studentInfo({ name, id, cg }) {
  // === checks the value and also datatype

  if (!name) {
    return `Enter a valid name (Name : ${name})`;
  }
  if (!id) {
    return `Enter a valid id (ID : ${id})`;
  }
  if (!cg ) {
    return `Enter a valid Grade (Grade : ${cg})`;
  }
  return `Student name : ${name} , Student ID ${id} , CGPA : ${cg}`;
}
// by default undefined is a false value
//console.log(studentInfo({ id: 7373, name: "sam", cg: 3.9 }));

console.log(studentInfo({ id: 7373,  name: "sam" }));
