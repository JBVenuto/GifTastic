//Array that will hold the animal names to make buttons
var animals = ["dog", "cat", "bear", "seal", "sloth", "panda"];

$(document).ready(function() {

    //Function show the results of the gif search
    $(document).on("click", ".animal-btn", function() {

        //Store the user's choice to search for it on giphy
        var choice = $(this).attr("data-name");
        console.log(choice);


    });

    //Function to add the user's animal to the array
    $("#add").on("click", function(event) {

        event.preventDefault();
        //Stores the user's input
        var userAnimal = $("#input").val().trim();
        //Pushes the user's input into the array
        animals.push(userAnimal);
        //Make a button with the user's input
        makeButtons();
    })

    //Function to make the buttons appear for the user
    function makeButtons() {

        //Deletes the buttons so they can be made again when new buttons are added
        $("#buttons").empty();

        //Loop through the array
        for (var i = 0; i < animals.length; i++) {
            
            console.log(animals[i]);
            //Generate a button for each animal
            var bt = $("<button>");
            //Add a class to the button
            bt.addClass("animal-btn btn btn-outline-dark my-2 my-sm-0");
            //Add an attribute that will be the term that is searched
            bt.attr("data-name", animals[i]);
            //Add a margin between buttons
            bt.attr("style", "margin-right:2px")
            //Add text to the button
            bt.text(animals[i]);
            //Add the button to the page
            $("#buttons").append(bt);
        };
        
    };

    makeButtons();
    
})