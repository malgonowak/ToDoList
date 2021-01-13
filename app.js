const enterThings = document.querySelector(".enter_things");
const addButton = document.querySelector(".add_me_button");
const todolist = document.querySelector(".todolist");
const liBuilder = document.querySelector("ul");
const newimput = enterThings.value;


addButton.addEventListener("click", saveThings);
function saveThings() {
    const newimput = enterThings.value;
    const todo = document.createElement("li");
    const pElem = document.createElement('p');
    pElem.innerText = newimput;
    const editedInput = pElem.value;

    const newImput = liBuilder.appendChild(todo);
    const new_pElem = todo.appendChild(pElem);

    enterThings.value = '';

    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const editButton = document.createElement("button");

    removeButton.innerText = "Remove from the list";
    doneButton.innerText = "Click if done";
    editButton.innerText = "Edit";

    newImput.appendChild(removeButton);
    newImput.appendChild(doneButton);
    newImput.appendChild(editButton);


    removeButton.addEventListener('click', function (event) {
        this.parentElement.remove();
    });


    doneButton.addEventListener('click', function (event) {
        pElem.classList.toggle('finished');
    });

    editButton.addEventListener('click', function (event) {
        const editInput = document.createElement('input');
        todo.prepend(editInput);
        editInput.value = new_pElem.innerText;
        new_pElem.remove();

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                console.log('fff');

            }
        });
    });



    // function handleSubmit(event) {
    //     event.preventDefault(); // nie przeładowuj strony
}

