document.addEventListener("DOMContentLoaded", () => {
    const handleProfile = (event) => {
        event.preventDefault();

        const username = getValue("username");
        const email = getValue("email");
        const password = getValue("password");
        const confirm_password = getValue("confirm_password");

        const errorElement = document.getElementById("error");
        errorElement.innerText = "";

        if (password !== confirm_password) {
            errorElement.innerText = "Passwords do not match.";
            return;
        }

        const info = {
            username,
            email,
            password,
            password2: confirm_password,
        };

        fetch("https://volunteer-coordination-platform.onrender.com/api/account/profile/${user_id}", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}` // Ensure the token is stored in localStorage
            },
            body: JSON.stringify(info),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            alert("Profile updated successfully.");
            // Optionally, redirect or update the UI to reflect the changes
        })
        .catch((error) => {
            console.error("Error during fetch:", error);
            errorElement.innerText = "An error occurred while updating the profile.";
        });
    };

    const getValue = (id) => {
        return document.getElementById(id).value;
    };

    document.getElementById("updateProfileForm").addEventListener("submit", handleProfile);
});
