/*as you asked us to Include comments in our code to describe the purpose of each major step or function,
 So, Next or at the top of every step and function you will see the comment explaining the purpose of each step and function. 
*/

// The wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // To Select the necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // The function to add a new task
    function addTask() {
        //To retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // T0 check if the input is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if the input is empty
        }

        // To create a new list item (li)
        const newTask = document.createElement('li');
        newTask.textContent = taskText;

        // To create a new remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // T0 assign an onclick event to the remove button
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTask); // Remove the li element from taskList
        });

        // Appended button to remove the list item (li)
        newTask.appendChild(removeButton);

        // Appended list item (li) to the task list
        taskList.appendChild(newTask);

        // To clear the task input field
        taskInput.value = '';
    }

    // To attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // To attach event listener to the task input field to handle "Enter" key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if "Enter" key is pressed
        }
    });
});
