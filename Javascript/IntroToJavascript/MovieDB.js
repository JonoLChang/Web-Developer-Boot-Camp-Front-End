// Create an array of objects. Each movie should have a title, rating and hasWatched properties. Iterate through the array and print out something that looks like:
// "You have watched "In Brugee" - 5 stars" or "You have not seen "Frozen" - 4.5 stars"

// Movies I've watched: Prisoners and Nightcrawler
// Movies I have not watched: The Great Hack and American Psycho

var movieDB = [
    {
        movieName: "Prisoners",
        rating: 4.0,
        hasWatched: true
    },
    {
        movieName: "The Great Hack",
        rating: 3.5,
        hasWatched: false
    },
    {
        movieName: "Nightcrawler",
        rating: 4.0,
        hasWatched: true
    },
    {
        movieName: "American Psycho",
        rating: 3.9,
        hasWatched: false
    }
]; 

function printMovie(movieArray) {
    for(i = 0; i < movieDB.length; i++) {
        if(movieDB[i].hasWatched) {
            console.log("You have watched " + "\"" + movieDB[i].movieName + "\"" + " - " + movieDB[i].rating + " stars");
        }
        else {
            console.log("You have not seen " + "\"" + movieDB[i].movieName + "\"" + " - " + movieDB[i].rating + " stars");
        };
    };
};

printMovie(movieDB);