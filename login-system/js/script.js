// --------------------DOM--------------------

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("goRegisterBtn");
const message = document.getElementById("message");
const showPassword = document.getElementById("showPassword");
const goRegisterBtn = document.getElementById("goRegisterBtn");
const app = document.getElementById("app");


//------------registerbtn---------------

if (goRegisterBtn) {
    goRegisterBtn.addEventListener("click", () => {
        window.location.href = "./template/register.html";
    });
}

// --------------------UTILITIES LOCAL--------------------

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// -.----------SHOW PASSWORD--------------------

showPassword.addEventListener("change", () => {
    passwordInput.type = showPassword.checked ? "text" : "password";
});


// -------------LOGIN --------------------

loginBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const users = getUsers();

    const validUsers = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (validUsers) {
        message.textContent = `✅ Bienvenido ${username}`;
        message.style.color = "green";
    } else {
        message.textContent = "❌ Usuario no encontrado";
        message.style.color = "red";
    } if (!username || !password) {
        message.textContent = `❌ Complete los campos`;
        message.style.color = "red";
    }
});

