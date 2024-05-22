
const handleRegistration = async (event) => {
  event.preventDefault();

  document.getElementById("error").innerText = "";

  const username = getValue("Username");
  const email = getValue("Email_address");
  const terms_and_conditions = document.getElementById("terms_and_conditions").checked ? "True" : "False";
  const password = getValue("Password");
  const confirm_password = getValue("Confirm_password");

  const info = {
    name: username,
    email,
    terms_and_conditions,
    password,
    password2: confirm_password,  // Ensure this matches the field name expected by your API
  };

  if (password !== confirm_password) {
    document.getElementById("error").innerText = "Passwords and Confirm Password do not match!";
    alert("Passwords do not match!");
    return;
  }

  if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
    document.getElementById("error").innerText =
      "Password must be at least eight characters long and contain at least one letter, one number, and one special character.";
    return;
  }

  try {
    console.log("Payload being sent:", JSON.stringify(info));
    const response = await fetch(
      "https://volunteer-coordination-platform.onrender.com/api/account/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      });

    const data = await response.json();
    console.log("Response from server:", data);
    if (response.ok) {
      document.getElementById("error").innerText = "Congratulations! Your Account Created Successfully.";
      document.getElementById("contact_form").reset();
      window.location.href = "http://127.0.0.1:5500/login.html";
    } else {
      document.getElementById("error").innerText = data?.message || "Registration failed. Please try again.";
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    document.getElementById("error").innerText = "An error occurred. Please try again later.";
  }
};

const getValue = (id) => {
  return document.getElementById(id).value;
};

document.getElementById("contact_form").addEventListener("submit", handleRegistration);













// // register form start

// const handleRegistration = async (event) => {
//     event.preventDefault();
  
//     document.getElementById("error").innerText = "";
  
//     const username = getValue("Username");
//     const first_name = getValue("First_name");
//     const last_name = getValue("Last_name");
//     const email = getValue("Email_address");
//     const password = getValue("Password");
//     const confirm_password = getValue("Confirm_password");
  
//     const info = {
//       name: username,
//       first_name,
//       last_name,
//       email,
//       password,
//       confirm_password,
//     };
  
//     if (password !== confirm_password) {
//       document.getElementById("error").innerText = "Passwords and Confirm Password does not match!";
//       alert("Passwords does not match!");
//       return;
//     }
  
//     if (
//       !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
//         password
//       )
//     ) {
//       document.getElementById("error").innerText =
//         "Password must be at least eight characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
//       return; 
//     }
    
  
//     try {
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/account/register/",
//           {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(info),
//           }
//         );
//         console.log("I am inside register page");

//         const data = await response.json();
//         if (data?.id) {
//           document.getElementById("error").innerText =
//             "Congratulations! Your Account Created Successfully.";
//             document.getElementById("contact_form").reset();
//             window.location.href = "http://127.0.0.1:8000/api/account/login.html";
//         }
//       } catch (error) {
//         console.error("Error during fetch:", error);
//         // Display user-friendly error message
//         document.getElementById("error").innerText =
//           "An error occurred. Please try again later.";
//      }
   
//   };
  
//   const getValue = (id) => {
//     return document.getElementById(id).value;
//   };
  
//   document.getElementById("contact_form").addEventListener("submit", handleRegistration); // Change this line
  
//   // register form end

// const handleRegistration = async (event) => {
//     event.preventDefault();
  
//     document.getElementById("error").innerText = "";
  
//     const username = getValue("Username");
//     // const first_name = getValue("First_name");
//     // const last_name = getValue("Last_name");
//     const email = getValue("Email_address");
//     const terms_and_conditions = document.getElementById("terms_and_conditions").checked;
//     const password = getValue("Password");
//     const confirm_password = getValue("Confirm_password");
  
//     const info = {
//       name: username,
//     //   first_name,
//     //   last_name,
//       terms_and_conditions: terms_and_conditions ? "True" : "False",
//       email,
//       password,
//       confirm_password,
//     };
  
//     if (password !== confirm_password) {
//       document.getElementById("error").innerText = "Passwords and Confirm Password do not match!";
//       alert("Passwords do not match!");
//       return;
//     }
  
//     if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
//       document.getElementById("error").innerText =
//         "Password must be at least eight characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
//       return;
//     }
  
//     try {
//       const response = await fetch(
//       "http://127.0.0.1:8000/api/account/register/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(info),
//       });
  
//       const data = await response.json();
//       if (data?.id) {
//         document.getElementById("error").innerText = "Congratulations! Your Account Created Successfully.";
//         document.getElementById("contact_form").reset();
//         window.location.href = "http://127.0.0.1:8000/api/account/login.html";
//       } else {
//         document.getElementById("error").innerText = data?.message || "Registration failed. Please try again.";
//       }
//     } catch (error) {
//       console.error("Error during fetch:", error);
//       // Display user-friendly error message
//       document.getElementById("error").innerText = "An error occurred. Please try again later.";
//     }
//   };
  
//   const getValue = (id) => {
//     return document.getElementById(id).value;
//   };
  
//   document.getElementById("contact_form").addEventListener("submit", handleRegistration);
  