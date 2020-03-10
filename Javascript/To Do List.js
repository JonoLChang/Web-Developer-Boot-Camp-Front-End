window.setTimeout(function() {
    var todos = [];

    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        //handle input
        if(input === "list") {
            listTodos();
        }
        else if(input === "new") {
            addTodo();
        }
        else if(input === "delete") {
            deleteTodo();
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("Okay, you quit the app");

    function listTodos() {
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addTodo() {
    //ask for new todo
    var newToDo = prompt("Enter new to do");
    //add to todos array
    todos.push(newToDo);
    console.log("Todo added");
}

function deleteTodo() {
    //ask for index of todo to be deleted
    var index = prompt("Enter index of todo to delete");
    //delete that todo
    //splice
    todos.splice(index, 1);
    console.log("Todo deleted");
}
}, 500);