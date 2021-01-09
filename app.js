const enterThings = document.querySelector(".enter_things");
const addButton = document.querySelector(".add_me_button");
const todolist = document.querySelector(".todolist");
const liBuilder = document.querySelector("ul");
const newimput = enterThings.value;


addButton.addEventListener("click", saveThings);
function saveThings () {
const newimput = enterThings.value;
const todo = document.createElement("li");
const pElem = document.createElement('p');
pElem.innerText = newimput;
const editedInput = pElem.value;
// newimput ? liBuilder.createElement("li.newimput.value")  : console.log("buuu");

const newImput = liBuilder.appendChild(todo);
const new_pElem = todo.append(pElem);

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


removeButton.addEventListener('click', function(event){
    this.parentElement.remove();
});
// doneButton.addEventListener('click', function(event){
// this.parentElement.style.textDecoration = underline;
// });

doneButton.addEventListener('click', function(event){
    pElem.classList.toggle('finished');
        // newListItem.classList.toggle('finished');
   
    });
    
    // editButton.addEventListener('click', function(event){
    //     (pElem.value)innerText;

    // });


};
    // function handleSubmit(event) {
//     event.preventDefault(); // nie przeładowuj strony
//   }


// const removeButton = document.createElement("button");
// setInterval(function (){
// const span = document.createElement("span");
// span.innerText = "💩🤡👹";
// document.body.append(span);
// },500)};