// object singletone

const chxuser = new Object();

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
    mothernmae: "Jahanara Khatun",
  },
};

Object.freeze(regularuser);
Object.assign(chxuser, regularuser);
console.log (chxuser)
console.log(chxuser.personal_deatails.academic.institution);
