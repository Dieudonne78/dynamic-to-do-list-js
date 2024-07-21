/*as you asked us to Include comments in our code to describe the purpose of each major step or function,
 At the top of every step and function  you will see the comment explaining the purpose of each step and function. 
*/

// The following is the Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    //Below are the necessary DOM elements Selected
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Below is the Function for adding a new task
    function addTask() {
        // Below is the const variable for Retrieving and trimming the input value
        const taskText = taskInput.value.trim();

        // Below i am Checking if the input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Below i Created a new list item
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Below i created a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Below i attached event listener to the remove button
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        // Below i appended the remove button to the list item
        newTask.appendChild(removeButton);

        // Below i appended append the new task to the task list
        taskList.appendChild(newTask);

        // To clear the input field
        taskInput.value = '';
    }

    // To add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // To add event listener to the input field to allow adding tasks with Enter key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
