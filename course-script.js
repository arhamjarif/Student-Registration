let attempts = 0;
let maxAttempts = 3;

let loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        let studentid = document.getElementById("studentid").value;
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (studentid === "" || name === "" || email === "") {

            event.preventDefault();
            loginError("Please fill in all information.");
            return;
        }

        if (!emailPattern.test(email)) {

            event.preventDefault();
            loginError("Please enter a valid email address.");
            return;
        }

        alert("Welcome " + name + "! Login Successful.");

    });

}


function loginError(reason) {

    attempts++;

    let message = document.getElementById("message");

    if (attempts >= maxAttempts) {

        document.getElementById("loginBtn").disabled = true;

        message.innerHTML = reason +
        "<br>Multiple Wrong attempts! Please wait for 10 seconds.";

        message.style.color = "red";

        setTimeout(unlockLogin, 10000);

    }

    else {

        let left = maxAttempts - attempts;

        message.innerHTML = reason +
        "<br>Attempts left: " + left;

        message.style.color = "red";

    }

}

function unlockLogin() {

    attempts = 0;

    document.getElementById("loginBtn").disabled = false;

    document.getElementById("message").innerHTML =
    "You can try again now.";

    document.getElementById("message").style.color = "green";

}

let registeredCourses = [];

let courseForm = document.getElementById("courseForm");

if (courseForm) {

    courseForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("courseName").value.trim();

        let email = document.getElementById("courseEmail").value.trim();

        let department = document.getElementById("department").value;

        let course = document.getElementById("course").value;

        let semester = document.getElementById("semester").value;

        let section = document.getElementById("section").value;

        let classType = document.getElementById("classType").value;

        let message = document.getElementById("courseMessage");

        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


        if (name === "" || email === "" || department === "" || course === "") {

            message.innerHTML = "Please fill in all information.";
            message.style.color = "red";

            return;
        }


        if (!emailPattern.test(email)) {

            message.innerHTML = "Please enter a valid email.";
            message.style.color = "red";

            return;
        }


        let courseParts = course.split("|");

        let courseCode = courseParts[0];

        let courseName = courseParts[1];

        let alreadyRegistered = false;

        for (let i = 0; i < registeredCourses.length; i++) {

            if (registeredCourses[i].code === courseCode) {

                alreadyRegistered = true;

            }

        }


        if (alreadyRegistered) {

            message.innerHTML = "You have already registered this course.";
            message.style.color = "red";

        }

        else {

            registeredCourses.push({

                name: courseName,
                code: courseCode,
                department: department,
                semester: semester,
                section: section,
                classType: classType

            });

            message.innerHTML = "Course Registered Successfully!";
            message.style.color = "green";

            alert("Course Registration Successful!");

            showCourses();

        }

    });

}

function showCourses() {

    let courseList = document.getElementById("courseList");

    let emptyMessage = document.getElementById("emptyMessage");


    if (courseList && emptyMessage) {

        if (registeredCourses.length === 0) {

            emptyMessage.innerHTML = "No courses registered yet.";

            courseList.innerHTML = "";

        }

        else {

            emptyMessage.innerHTML = "";

            let table = "<table>";

            table += "<tr>";

            table += "<th>Course Name</th>";
            table += "<th>Course Code</th>";
            table += "<th>Department</th>";
            table += "<th>Credit</th>";
            table += "<th>Semester</th>";
            table += "<th>Section</th>";

            table += "</tr>";


            for (let i = 0; i < registeredCourses.length; i++) {

                table += "<tr>";

                table += "<td>" + registeredCourses[i].name + "</td>";

                table += "<td>" + registeredCourses[i].code + "</td>";

                table += "<td>" + registeredCourses[i].department + "</td>";

                table += "<td>3</td>";

                table += "<td>" + registeredCourses[i].semester + "</td>";

                table += "<td>" + registeredCourses[i].section + "</td>";

                table += "</tr>";

            }

            table += "</table>";

            courseList.innerHTML = table;

        }

    }

}


let allButtons = document.querySelectorAll("button, .button-link");

for (let i = 0; i < allButtons.length; i++) {

    allButtons[i].addEventListener("mouseover", function() {

        this.style.backgroundColor = "#50aae6";

    });


    allButtons[i].addEventListener("mouseout", function() {

        this.style.backgroundColor = "";

    });

}

showCourses();
