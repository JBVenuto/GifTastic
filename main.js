//Array that will hold the animal names to make buttons
var animals = ["dog", "cat", "bear", "seal", "sloth", "panda"];

$(document).ready(function() {

    //Function show the results of the gif search
    $(document).on("click", ".animal-btn", function() {

        //Store the user's choice to search for it on giphy
        var choice = $(this).attr("data-name");
        console.log(choice);

        //url that will be used to retrieve gifs
        var gifUrl = "http://api.giphy.com/v1/gifs/search?q=" + choice + "&api_key=UxmqiBzAaPlG7XPYZ8IvblYSSfCEb8YI&limit=5&rating=pg";

        //AJAX request to the url
        $.ajax({
            url: gifUrl,
            method: "GET"
        })
        //This is what will happen after the data comes back
        .then(function(response) {
            console.log(response);
            //store the returened data
            var results = response.data;

            //Loop through the results 
            for(i = 0; i < results.length; i++) {
                //Make an image tag for the picture
                var animalGif = $("<img>");
                //Set the source of the image
                animalGif.attr("src", results[i].images.fixed_height_still.url);
                //Make a still and animated attribute for the image
                animalGif.attr("data-still", results[i].images.fixed_height_still.url);
                animalGif.attr("data-animate", results[i].images.fixed_height.url);
                //add an attribute to differentiate the animation state 
                animalGif.attr("data-state", "still");
                //Adds some space between each gif
                animalGif.attr("style", "margin:2px");
                //Put the gifs onto the page
                $("#gifs").prepend(animalGif);
            }
        })
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
            bt.attr("style", "margin-right:2px");
            //Add text to the button
            bt.text(animals[i]);
            //Add the button to the page
            $("#buttons").append(bt);
        };
        
    };

    makeButtons();

    $(document).on("click", "img", function () {
    // $("img").on("click", function() {
        console.log("clicked");
         //Get the data state of the image
        var state = $(this).attr("data-state");

        if(state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate")
        }
        else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })
    
})