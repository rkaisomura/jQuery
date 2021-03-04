$(document).ready(function() {
 /* $("button").addClass("animated bounce"); //add class for an element
    $(".well").addClass("animated shake"); //add class to a class
    $("#target3").addClass("animated fadeOut"); //add class to an id

    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary"); */

 /* $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");
    $("button").removeClass("btn-default"); //remove a class from an element */

    $("#target1").css("color","red"); //change the CSS of an element
    $("#target1").prop("disabled",true); //allows you to adjust the properties of elements-diasble the button with id=target1
    $("#target4").html("<em>#target4</em>"); //lets you add HTML tags and text within an element
    $("#target4").remove(); //remove an HTML element entirely
    $("#target2").appendTo("#right-well"); //allows you to select HTML elements and append them to another element.
    $("#target5").clone().appendTo("#left-well"); //that makes a copy of an element, two jQuery functions together:  function chaining and it's a convenient way to get things done with jQuery
    $("#target1").parent().css("background-color","red"); //allows you to access the parent of whichever element you've selected
    $("#right-well").children().css("color", "orange"); //allows you to access the children of whichever element you've selected
    $(".target:nth-child(2)").addClass("animated bounce"); //allows you to select all the nth elements with the target class or element type
    $(".target:even").addClass("animated shake"); //arget elements based on their positions 
    $("body").addClass("animated hinge"); //target the body element 
});
