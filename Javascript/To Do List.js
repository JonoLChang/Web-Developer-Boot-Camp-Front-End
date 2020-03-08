window.setTimeout(function() {
    var todos = [];

    var input = prompt("What would you like to do?");

    while(input !== "quit") {
        //handle input
        if(input === "list") {
            console.log(todos);
        }
        else if(input === "new") {
            //ask for new todo
            var newToDo = prompt("Enter new to do");
            //add to todos array
            todos.push(newToDo);
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }
    console.log("Okay, you quit the app");
}, 500);