document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const daySelector = document.getElementById('daySelector');

    window.addTask = function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const day = daySelector.value;
        const taskList = document.getElementById(day).querySelector('.taskList');

        const li = document.createElement('li');
        li.innerText = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);

        li.onclick = function() {
            li.classList.toggle('completed');
        };

        taskList.appendChild(li);
        taskInput.value = '';
    };
});
