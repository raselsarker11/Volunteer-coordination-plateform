

function validateSignupForm() {
    event.preventDefault();
    
    // Get input values
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Perform password validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    
    // If validation passes, proceed with form submission
    submitForm();
  }
  
  // Function to submit the form data
  function submitForm() {
    // Display loader
    document.getElementById('loader').innerHTML = 'Loading...';
    
    // Get form data
    const password = document.getElementById('password').value;
    
    // Construct data object
    const data = {
        password: password
    };
    
    // Make API call to update password
    fetch("https://volunteer-coordination-platform.onrender.com/api/account/changepassword/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Handle response
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle successful response
        console.log(data);
        alert('Password changed successfully!');
        document.getElementById('loader').innerHTML = ''; // Clear loader
    })
    .catch(error => {
        // Handle error
        console.error('Error during fetch:', error);
        alert('An error occurred. Please try again later.');
        document.getElementById('loader').innerHTML = ''; // Clear loader
    });
  }