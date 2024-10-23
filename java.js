const colorPicker = document.getElementById('colorPicker');
const fontSizeSlider = document.getElementById('fontSize');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const toggleFontStyleButton = document.getElementById('toggleFontStyle');
const body = document.body;
const container = document.querySelector('.container');

let isDarkMode = false;
let isSerifFont = false;

colorPicker.addEventListener('change', (event) => {
    body.style.backgroundColor = event.target.value;
});

fontSizeSlider.addEventListener('input', (event) => {
    body.style.fontSize = event.target.value + 'px';
});

toggleDarkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode', isDarkMode);
    container.classList.toggle('dark-mode', isDarkMode);
});

toggleFontStyleButton.addEventListener('click', () => {
    isSerifFont = !isSerifFont;
    body.style.fontFamily = isSerifFont ? 'Georgia, serif' : 'Arial, sans-serif';
});

// To-Do List Logic
const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = [];

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task}</td>
            <td>
                <button class="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete" onclick="deleteTask(${index})">Delete</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask) {
        tasks[index] = newTask;
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}