// Zmiana nazw, na bardziej jednoznaczne i czytelniejsze:
// - enterThings -> inputAddTask lub taskInput
// - addButton -> addTaskButton lub submitTaskButton
// - todolist - nigdzie tego nie uzywasz
// - liBuilder -> todoList lub tasksContainer lub tasksList
// - newinput - nie ma sensu, czytelny dostatecznie jest zapis taskInput.value

const enterThings = document.querySelector(".enter_things");
const addButton = document.querySelector(".add_me_button");
const todolist = document.querySelector(".todolist");
const liBuilder = document.querySelector("ul");
const newinput = enterThings.value;


// Propozycja zmiany funkcji z saveThings na addTask lub saveTask
// Wszystko upchnelas do jednej funkcji, a ta funkcja powinna TYLKO zapisywac/dodawać zadanie jak nazwa wskazuje
addButton.addEventListener("click", saveThings);
function saveThings() {
    // Powtarzasz niepotrzebnie newinput, w ogole jest on tak czy siak do wyrzucenia, napisalem wyzej
    const newinput = enterThings.value;
    // Poniżej nie editInput, tylko np. task
    const editInput = document.createElement("li");
    const pElem = document.createElement('p');
    pElem.innerText = newinput;
    const editedInput = pElem.innerText; // To nie ma sensu, przeklejasz wartość z inputa do kolejnych zmiennych

    // Dlaczego tutaj tworzysz zmienne, skoro wstawiasz rzeczy do drzewa DOM?
    const newInput = liBuilder.appendChild(editInput);
    const new_pElem = editInput.appendChild(pElem);

    enterThings.value = '';

    const removeButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const editButton = document.createElement("button");

    removeButton.innerText = "Remove from the list";
    doneButton.innerText = "Click if done";
    editButton.innerText = "Edit";

    newInput.appendChild(removeButton);
    newInput.appendChild(doneButton);
    newInput.appendChild(editButton);


    removeButton.addEventListener('click', function (event) {
        this.parentElement.remove();
    });


    doneButton.addEventListener('click', function (event) {
        pElem.classList.toggle('finished');
    });

    editButton.addEventListener('click', function (event) {
        const inputContainer = document.createElement('div');
        // todo.prepend(inputContainer);


        editInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {

                console.log('fff');
                inputContainer.innerText;
                inputContainer.innerHTML = '';

            }
        });
    });



    // function handleSubmit(event) {
    //     event.preventDefault(); // nie przeładowuj strony
}

