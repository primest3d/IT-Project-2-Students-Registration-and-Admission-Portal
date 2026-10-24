
let students = [];

let studentForm = document.getElementById("studentForm");
let studentTable = document.getElementById("studentTable");
let totalStudents = document.getElementById("totalStudents");
let emptyMessage = document.getElementById("emptyMessage");


studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let matric = document.getElementById("matric").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value;
    let department = document.getElementById("department").value;
    let password = document.getElementById("password").value;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("matricError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("departmentError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let valid = true;

    // Validate name
    if (name === "") {
        document.getElementById("nameError").textContent =
            "Please enter your name.";
        valid = false;
    }

    // Validate matric number
    if (matric === "") {
        document.getElementById("matricError").textContent =
            "Please enter your matric number.";
        valid = false;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").textContent =
            "Please enter a valid email address.";
        valid = false;
    }

    // Validate phone number
    if (!/^\+?[0-9]{10,15}$/.test(phone)) {
        document.getElementById("phoneError").textContent =
            "Enter a valid phone number.";
        valid = false;
    }

    // Validate age
    if (age === "" || Number(age) < 16 || Number(age) > 100) {
        document.getElementById("ageError").textContent =
            "Age must be between 16 and 100.";
        valid = false;
    }

    // Validate department
    if (department === "") {
        document.getElementById("departmentError").textContent =
            "Please select a department.";
        valid = false;
    }

    // Validate password
    if (password.length < 8) {
        document.getElementById("passwordError").textContent =
            "Password must contain at least 8 characters.";
        valid = false;
    }

    // Check for duplicate records
    for (let i = 0; i < students.length; i++) {

        if (students[i].matric.toLowerCase() === matric.toLowerCase()) {
            document.getElementById("matricError").textContent =
                "This matric number is already registered.";
            valid = false;
        }

        if (students[i].email.toLowerCase() === email.toLowerCase()) {
            document.getElementById("emailError").textContent =
                "This email is already registered.";
            valid = false;
        }
    }

    // Register student if all checks pass
    if (valid === true) {

        let student = {
            name: name,
            matric: matric,
            email: email,
            phone: phone,
            age: age,
            department: department
        };

        students.push(student);

        displayStudents();

        studentForm.reset();
    }

});


function displayStudents() {

    studentTable.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = students[i].name;

        let matricCell = document.createElement("td");
        matricCell.textContent = students[i].matric;

        let emailCell = document.createElement("td");
        emailCell.textContent = students[i].email;

        let phoneCell = document.createElement("td");
        phoneCell.textContent = students[i].phone;

        let ageCell = document.createElement("td");
        ageCell.textContent = students[i].age;

        let departmentCell = document.createElement("td");
        departmentCell.textContent = students[i].department;

        row.appendChild(nameCell);
        row.appendChild(matricCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);
        row.appendChild(ageCell);
        row.appendChild(departmentCell);

        studentTable.appendChild(row);
    }

    totalStudents.textContent = students.length;

    if (students.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }

}
