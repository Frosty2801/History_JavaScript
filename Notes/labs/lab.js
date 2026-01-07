//let state = false;
function validUser() {
    let user = prompt("Enter your name: ");
    if (typeof user != "string") {
        return "Error: enter a valid name";
    }
    else{
        alert("Bienvenido")
    }
}

function validAge() {
    let age = prompt("Enter valid age: ");
    if (typeof age !== "number" || isNaN(age)) {
        return "Invalid age";
    }
    if (edad >= 18) {
        return "Adult";
    } else {
        return "Under-age"
    }
}

function validEmail () {
    let email = prompt("Enter a email: ");
    if (!email || !email.includes("@")) {
        alert("Invalid email")
        throw new Error("Invalid email");
    }
}

function password () {
    const pass = promp("Create password: ");

    if (!pass || userpass.leng < 3 ) {
        alert("Invalid password");
        throw new Error("Invalid pass");
    }
}

function valuePass() {
    let attempts = Number(0)
    let pass = ""

    while (attempts < 3) {
        pass = prompt("")

        if (pass === userpass) {
            alert
        }
    }
}

validUser();
validAge();
validEmail();
valuePass();