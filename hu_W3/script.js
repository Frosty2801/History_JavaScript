let notes = []

function saveToLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadFromLocalStorage() {
    const savedTasks = localStorage.getItem('notes');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        renderAllTasks();
    }
}

