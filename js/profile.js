const handleProfile = (event) => {
    event.preventDefault();
    const user_id = getUserId(); 
    const username = getValue("inputUsername");
    const first_name = getValue("inputFirstName");
    const last_name = getValue("inputLastName");
    const email = getValue("inputEmailAddress");
    const password = getValue("password");
    const confirm_password = getValue("confim_password");
    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
    };

    fetch(`https://volunteer-coordination-platform.onrender.com/api/account/profile/${user_id}`, {
            method: "PUT", 
            headers: { "content-type": "application/json" },
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
        })
        .catch((error) => {
            // Handle error
            console.error("Error during fetch:", error);
        });
};

const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
};

const getUserId = (res) => {
    return request.user.id;
};