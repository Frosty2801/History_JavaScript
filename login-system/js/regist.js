function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// -----------------Registerbtn--------------------
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
    registerBtn.addEventListener("click", () => {
        const username = document.getElementById("regUsername").value.trim();
        const password = document.getElementById("regPassword").value.trim();
        const message = document.getElementById("message");

        if (!username || !password) {
            message.textContent = "⚠️ Completa todos los campos";
            message.style.color = "red";
            return;
        }

        const users = getUsers();
        const exists = users.some((user) => user.username === username);

        if (exists) {
            message.textContent = "❌ El usuario ya existe";
            message.style.color = "red";
            return;
        }

        users.push({ username, password });
        saveUsers(users);

        message.textContent = "✅ Usuario registrado";
        message.style.color = "green";
    });
}

// -----------------volver login--------------------
const backLoginBtn = document.getElementById("backLoginBtn");

if (backLoginBtn) {
    backLoginBtn.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
}
