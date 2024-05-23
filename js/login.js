

(function() {
    const getValue = (id) => {
        return document.getElementById(id).value;
    };

    const handleLogin = (event) => {
        event.preventDefault();
      
        const email = getValue("login-email");
        const password = getValue("login-password");
      
        const info = { email, password };
      
        // Send the login information to the server
        fetch("https://volunteer-coordination-platform.onrender.com/api/account/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then((data) => {
            // Handle successful response
            console.log(data);
      
            if (data.access && data.refresh) {
                localStorage.setItem("token", data.access);
                localStorage.setItem("refresh", data.refresh);
                window.location.href = "https://raselsarker11.github.io/Volunteer-coordination-plateform/index.html";
            }
        })
        .catch((error) => {
            // Handle error
            console.error("Error during fetch:", error);
        });
    };

    // Ensure this script is loaded after the DOM is ready
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("contact_form").addEventListener("submit", handleLogin);
    });
})();


