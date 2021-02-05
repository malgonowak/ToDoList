const taskInput = document.querySelector(".input_task");
const addButton = document.querySelector(".add_me_button");
document.querySelector(".todolist");
const tasksContainer = document.querySelector("ul");


addButton.addEventListener("click", saveTasks);
function saveTasks() {

    const task = document.createElement("li");
    const taskAdded = document.createElement('input');

    taskAdded.value = taskInput.value;
    tasksContainer.appendChild(task);
    task.appendChild(taskAdded);
    taskAdded.disabled = true;


    taskInput.value = '';

    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const editButton = document.createElement("button");

    removeButton.innerText = "Remove from the list";
    doneButton.innerText = "Click if done";
    editButton.innerText = "Edit";

    task.appendChild(removeButton);
    task.appendChild(doneButton);
    task.appendChild(editButton);


    removeButton.addEventListener('click', function (event) {
        this.parentElement.remove();
    });

    doneButton.addEventListener('click', function (event) {
        taskAdded.classList.toggle('finished');
    });


    editButton.addEventListener('click', function (event) {
        taskAdded.disabled = !taskAdded.disabled;
    });


    taskAdded.type = "text";

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            taskAdded.disabled = true;

        }
    });



}

