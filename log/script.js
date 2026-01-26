// --------------------DOM--------------------

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");
const showPassword = document.getElementById("showPassword");

// --------------------CONFIGURATION--------------------

const maxAttemps = 3;
const blocTime = 30;

let attempts = 0;
let blockInterval = null;

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
})

// -------------REGISTER --------------------

registerBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password){
        message.textContent = "⚠️ Completa todos los campos";
        message.style.color = "red";
        return;
    } 

    const user = getUsers();

    const exist = user.some(user => user.username === username);
    if (exist) {
        message.textContent = "❌ El usuario ya existe";
        message.style.color = "red";
        return;
    }

    user.push({ username, password });
    saveUsers(user);

    message.textContent = "✅ Usuario registrado correctamente";
    message.style.color = "green"

    usernameInput.value = "";
    passwordInput.value = "";
});

// -------------LOGIN --------------------

loginBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const users = getUsers();

    const validUsers = users.find (
        user => user.username === username && user.password === password
    );
    
    if (validUsers) {
        message.textContent = `✅ Bienvenido ${username}`;
        message.style.color = "green";
        attempts = 0;
    } else {
        attempts++;
        message.style.color = "red";

        if (attempts >= maxAttemps) {
            blockLogin();
        } else {
            message.textContent = `❌ Datos incorrectos (${attempts}/${maxAttemps})`;
        }
    }
})

