
document.addEventListener('DOMContentLoaded', function() {
  
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

   
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }


    function addTask(taskText, save = true) {
       
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); 

        
        removeButton.onclick = function() {
            taskList.removeChild(newTask); 
            saveTasks(); 
        };

        newTask.appendChild(removeButton);

        taskList.appendChild(newTask);

        taskInput.value = '';

        if (save) {
            saveTasks();
        }
    }

    addButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
        } else {
            alert('Please enter a task.');
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText) {
                addTask(taskText);
            } else {
                alert('Please enter a task.');
            }
        }
    });

    loadTasks();
});
