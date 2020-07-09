exports.getEmployeeDash = async (req, res, next) => {

  res.render("Pages/employee-dashboard", {
    pageTitle: "Talent Pool | Employee Dashboard",
    path: "employee-dashboard",
    employeeProfile: {
      first_name: 'Moses',
      last_name: 'Bolarinwa',
      email: 'odutusinmoses@gmail.com',
      location: 'Toronto,Canada',
      phone_no: '08147793653',
      skillCategory: 'UI?UX Designer'
    },
    employeeSkill: ['Vuejs', 'Figma', 'Jenkins', 'Adobe'],
    // userPortfolio
    user: {
      name: "bolarin",
      role: "employee",
      stack: "UI?UX designer",
      location: "Toronto,Canada",
      email: "odutusinmoses@gmail.com",
      phone: "08147793653",
      socials: {
        twitter: "@Anosike_UI",
        dribble: "https://dribble.com/dribble",
        behance: "https://www.behance.net/behance",
      },
    },

    jobs: {
      available: 12,
      appliedFor: 2,
    },
    applications: {
      pending: 2,
    },
  });


};

exports.getEmployeeMessages = (req, res, next) => {
  //get messages from db
  /*const url = 'https://api.lancers.app/v1/message/chat-users';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbGxtYWwwNzFAZ21haWwuY29tIiwidXNlcklkIjoiYWE2MjRkMGYtYjgzZi00MzQ3LWIwZjAtYWQxY2Q4NTJhNzU2IiwidXNlclJvbGUiOiJST0wtRU1QTE9ZRVIiLCJ1c2VyVHlwZUlkIjpudWxsLCJpYXQiOjE1OTQyMDgxNjQsImV4cCI6MTU5NDI5NDU2NH0.tuwAyP1Zii-5JyUeqt4Qrby7V4MbYjSr4ZSCvG-FoQc';
  const allMessages = axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))*/

  res.render("Pages/employee-messages", {
    pageTitle: "Talent Pool | Employee Messages",
    path: "employee-messages",
  });
};

exports.getEmployeeProfile = async (req, res, next) => {

  res.render("Pages/employeeProfile", {
    pageTitle: "Talent Pool | Employee Profile",
    path: "employee-profile",
    employeeProfile: {
      first_name: 'Moses',
      last_name: 'Bolarinwa',
      email: 'odutusinmoses@gmail.com',
      location: 'Toronto,Canada',
      phone_no: '08147793653',
      skillCategory: 'UI?UX Designer'
    },
  });

};

exports.getEmployeeAddTeam = (req, res, next) => {
  res.render("Pages/employee-addTeam", {
    pageTitle: "Talent Pool | Employee Add Team",
    path: "employee-addTeam",
  });
};

exports.getEmployeeSupport = (req, res, next) => {
  res.render("Pages/employee-support", {
    pageTitle: "Talent Pool | Employee Support",
    path: "employee-support",
  });
};

exports.getEmployeeSettings = (req, res, next) => {
  res.render("Pages/employee-settings", {
    pageTitle: "Talent Pool | Employee Settings",
    path: "employee-settings",
  });
};

exports.getEmployeeEmployers = (req, res, next) => {
  res.render("Pages/employee-employer", {
    pageTitle: "Talent Pool | Employee Employers",
    path: "/employee-employers",
  });
};


exports.getEmployeeProfileCreation = (req, res, next) => {
  res.render("Pages/employee-profile-creation", {
    pageTitle: "TalentPool | Employer Create Profile",
    path: "/employee-profileCreation",
  });
};