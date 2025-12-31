function checkPass() {
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;

    if (pass !== cpass) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}
