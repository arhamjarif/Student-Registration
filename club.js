
let form = document.getElementById("clubForm");
let extraFields = document.createElement("div");
extraFields.innerHTML = `
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone">
    <label>Gender:</label>
    <input type="radio" name="gender" value="Male"> Male
    <input type="radio" name="gender" value="Female"> Female
    <input type="radio" name="gender" value="Other"> Other
    <br><br>
    <label for="year">Year of Study:</label>
    <select id="year" name="year">
        <option value="">Select Year</option>
        <option value="First">First Year</option>
        <option value="Second">Second Year</option>
        <option value="Third">Third Year</option>
        <option value="Fourth">Fourth Year</option>
    </select>
    <label>Preferred Meeting Time:</label>
    <input type="radio" name="time" value="Morning"> Morning
    <input type="radio" name="time" value="Afternoon"> Afternoon
    <input type="radio" name="time" value="Evening"> Evening
    <br><br>
    <label>Skills:</label>
    <input type="checkbox" name="skills" value="Programming"> Programming
    <input type="checkbox" name="skills" value="Leadership"> Leadership
    <input type="checkbox" name="skills" value="Communication"> Communication
    <br><br>
    <label for="date">Registration Date:</label>
    <input type="date" id="date" name="date">
    <br><br>
    <input type="checkbox" id="terms" name="terms">
    <label for="terms">I agree to the club rules.</label>
    <br><br>
`
form.appendChild(extraFields);
form.addEventListener("submit",function(event) {
    event.preventDefault();
    let name = document.getElementById("student_name").value.trim();
    let email = document.getElementById("email");
    let student_id = document.getElementById("student_id").value;
    let department = document.getElementById("department").value;
    let club = document.getElementById("club").value;
    let reason = document.getElementById("reason").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let year = document.getElementById("year").value;
    let time = document.querySelector('input[name="time"]:checked');
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let date = document.getElementById("date").value;
    let terms = document.getElementById("terms").checked;
    if (name === "") {
        alert("Please enter your student name.");
        return;
    }
    if (student_id === "") {
    alert("Please enter your Student ID.");
    return;
    }
    if (email.value.trim() === "" || !email.checkValidity()) {
        alert("Please enter a valid email address.");
        return;
    }
    if (club === "") {
        alert("Please select a club.");
        return;
    }
    if (reason === "") {
        alert("Please write your reason for joining.");
        return;
    }
    if (phone.length !== 11) {
    alert("Please enter an 11-digit phone number.");
    return;
    }
    if (department === "") {
    alert("Please select your department.");
    return;
    }
    if (!gender) {
        alert("Please select your gender.");
        return;
    }
    if (year === "") {
        alert("Please select your year of study.");
        return;
    }
    if (!time) {
        alert("Please select your preferred meeting time.");
        return;
    }
    if (skills.length === 0) {
        alert("Please select at least one skill.");
        return;
    }
    if (date === "") {
        alert("Please select your registration date.");
        return;
    }
    if (!terms) {
        alert("Please agree to the club rules.");
        return;
    }
    alert("Registration Successful!");
});
form.addEventListener("reset", function() {
    alert("Form has been reset.");
});
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let nextPage = document.getElementById("nextPage");

nextPage.addEventListener("click", function() {

    page1.style.display = "none";

    page2.style.display = "block";
});
