function studentInfo(name, id, cg) {
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

console.log(studentInfo("sam", 7373, 3.9));

console.log(studentInfo(7373, "sam", 3.9));
