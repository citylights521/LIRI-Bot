require("dotenv").config();

// Code required to import the keys.js file
var keys = require("./keys.js");

// Grab axios package
var axios = require("axios");

var Spotify = require('node-spotify-api');

// This code enables access to keys information
var spotify = new Spotify(keys.spotify);


// DO NOT TOUCH -------:
if (process.argv.length > 4 || process.argv.length < 3) {
    console.error("This is not a valid entry.");
    return;
}

//  node    liri.js   "commandArg"   "userInput"
// argv[0]  argv[1]    argv[2]        argv[3]

var commandArg = process.argv[2].toLowerCase();
var userInput = process.argv[3];

// for testing:
// console.log(commandArg);
// console.log(userInput);


if (commandArg === "concert-this" && process.argv.length === 4) {
    concertThis(userInput);
}

else if (commandArg === "spotify-this-song") {
    if (userInput === undefined) {
        userInput = "The Sign";
    }

    spotifyThisSong(userInput);
}

else if (commandArg === "movie-this") {
    movieThis(userInput);
}
else if (commandArg === "do-what-it-says") {
    doWhatItSays();
}

else {
    console.log("Please enter an approprite input.");
}

//  ------DO NOT TOUCH.

// // axios OMDB API request
// axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
//   function(response) {
//     console.log("The movie's rating is: ", response.data);
//   }
// );





// node liri.js concert-this <artist/band name here>
// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
function concertThis(artistBand) {
    console.log(artistBand + " is the cooles band");
    var url = "https://rest.bandsintown.com/artists/" + artistBand + "/events?app_id=codingbootcamp";



    axios
        .get(url)
        .then(function (response) {
            // If the axios was successful...
            // Then log the body from the site!
            for (let i = 0; i < response.data.length; i++) {
                const concert = response.data[i];

                var venue = concert.venue;

                console.log(venue.name);

                if (venue.region) {
                    console.log(venue.city + ", " + venue.region + ", " + venue.country);
                }
                else {
                    console.log(venue.city + ", " + venue.country);
                }

                console.log(concert.datetime);
                console.log();

            }
            // console.log(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.
// You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
// The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
// Step One: Visit https://developer.spotify.com/my-applications/#!/
// Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
// Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
// Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.
function spotifyThisSong(songName) {
    console.log(songName + " is the song name");
    spotify.search({ type: 'track', query: userInput }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        for (let i = 0; i < data.tracks.items.length; i++) {
            const element = data.tracks.items[i];
            console.log(element);
        }


    //   console.log(data); 
      });
}

// node liri.js movie-this '<movie name here>'
// This will output the following information to your terminal/bash window:
//   * Title of the movie.
//   * Year the movie came out.
//   * IMDB Rating of the movie.
//   * Rotten Tomatoes Rating of the movie.
//   * Country where the movie was produced.
//   * Language of the movie.
//   * Plot of the movie.
//   * Actors in the movie.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!
// You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.
function movieThis(moveName) {
    console.log(moveName + " is the movie title");

}

// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Edit the text in random.txt to test out the feature for movie-this and concert-this.
function doWhatItSays() {
    console.log("doing it.")
}
