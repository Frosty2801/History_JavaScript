const user = prompt("Enter your name: ");

let state = false;

function validUser(user) {
    if (typeof user != "string") {
        return "Error: enter a valid name";
    }
}
validUser(user)

let age = prompt("Enter valid age: ");
function validAge(age) {
    if (typeof age !== "number" || isNaN(age)) {
        return "Invalid age";
    }

    if (edad >= 18) {
        return "Adult";
    } else {
        return "Under-age"
    }
}
validAge()

let email = promp("Enter a email: ")
function validEmail (mail) {
    if (!email || email.includes("@")) {
        alert("Invalid email")
        throw new Error();
        
    }
}

let attempts = Number(0)
function valuePass() {
    if attempts < 3 {

    }
    }
