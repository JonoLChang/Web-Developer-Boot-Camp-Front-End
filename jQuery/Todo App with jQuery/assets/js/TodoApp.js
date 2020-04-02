// Check off specific Todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
       $(this).remove();
    });
    event.stopPropagation();
})

// click() and on() do the same job but on() will add listeners for all potential elements
$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //.which is the code for each key on a keyboard. 13 represents the enter key
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});