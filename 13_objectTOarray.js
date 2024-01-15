const regularuser = {
  email: "rafi@yahoo.com",

  personal_deatails: {
    username: "rafiul01",

    fullname: {
      firstname: "Sayed Amin",
      lastname: "Rafiul",
    },

    academic: {
      institution: "East West University",
      faculty: "Bachalor of Scirnce",
      department: "Computer Science And Engineering",
      semester: 12,
    },
    fathername: "Ali akbar",
    mothername: "Jahanara Khatun",
  },
};

console.log(Object.keys(regularuser)) // returning object in array format
console.log(Object.values(regularuser));
console.log(Object.entries(regularuser));// key and values are separately