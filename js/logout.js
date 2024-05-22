const handlelogOut = (event) => {
    event.preventDefault();

    const token = localStorage.getItem('token');

    // Send the logout request to the server
    fetch("https://volunteer-coordination-platform.onrender.com/api/account/logout/", {
        method: "GET",
        headers: { 
            "Authorization": `Token ${token}`, 
            "content-type": "application/json"
        }
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Network response was not ok");
        }
        return res.json();
    })
    .then((data) => {
        console.log(data);
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        window.location.href = "index.html";
    })
    .catch((error) => {
        console.error("Error during fetch:", error);
    });
};