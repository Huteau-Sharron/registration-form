// Function to validate the form
function validateForm() {
    // Get the form elements
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the name field is empty
    if (name.trim() === "") {
        alert("Name is required.");
        return false; // Prevent form submission
    }

    // Check if the email field is empty or invalid
    if (email.trim() === "") {
        alert("Email is required.");
        return false; // Prevent form submission
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // Check if the password is too short
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; // Prevent form submission
    }

    // If all validations pass
    return true; // Allow form submission
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    return re.test(String(email).toLowerCase());
}

// Attach the validation function to the form submit event
document.getElementById("myForm").onsubmit = function() {
    return validateForm();
};