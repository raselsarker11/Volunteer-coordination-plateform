
const handleRegistration = async (event) => {
  event.preventDefault();

  document.getElementById("errors").innerText ="";

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
      alert("Congratulations! Your Account Created Successfully.");
      document.getElementById("contact_form").reset();
      // window.location.href = "https://raselsarker11.github.io/Volunteer-coordination-plateform/login.html";
      window.location.href = "https://raselsarker11.github.io/Volunteer-coordination-plateform/login.html";
    } else {
      document.getElementById("error").innerText = data?.message || "Registration failed. Please try again.";
    }
  } catch (error) {
    console.error("Error during fetch:", error);
    document.getElementById("error").innerText = "An error occurred. Please try again later.";
  }
};

const getValue = (id) => {
  return document.getElementById(id)?.value;
};

document.getElementById("contact_form").addEventListener("submit", handleRegistration);

