
function validateForm() {

    // Get input values
    let name = document.getElementById("studentName").value.trim();
    let id = document.getElementById("studentID").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let country = document.getElementById("country").value;
    let department = document.getElementById("department").value;
    

    // Full Name Validation
    if (name === "") {
        alert("Please enter your full name.");
        return false;
    }

    if (name.length < 2) {
        alert("Name must contain at least 2 characters.");
        return false;
    }

    // Student ID Validation
    if (!/^[0-9]+$/.test(id)) {
        alert("Student ID must contain numbers only.");
        return false;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Date of Birth Validation
    if (dob === "") {
        alert("Please select your date of birth.");
        return false;
    }

    if (new Date(dob) > new Date()) {
        alert("Date of Birth cannot be in the future.");
        return false;
    }

    // Gender Validation
    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (gender === null) {
        alert("Please select your gender.");
        return false;
    }

    // Phone Number Validation
    if (!/^[0-9]{11}$/.test(phone)) {
        alert("Phone number must contain exactly 11 digits.");
        return false;
    }

    // Address Validation
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    // Country Validation
    if (country === "") {
        alert("Please select your country.");
        return false;
    }


    // Department Validation
    if (department === "") {
        alert("Please select your department.");
        return false;
    }

    // Save student information
    sessionStorage.setItem("studentName", name);
    sessionStorage.setItem("studentID", id);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("dob", dob);
    sessionStorage.setItem("gender", gender.value);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("address", address);
    sessionStorage.setItem("country", country);
    sessionStorage.setItem("department", department);
    
    // Go to success page
    window.location.href = "success.html";

    return false;
}
