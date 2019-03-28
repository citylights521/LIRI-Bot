# LIRI-Bot
Hey Liri, search for this song/concert/movie! Get all of your entertainment info with Liri Bot.
## How to Use
Liri Bot is a Node.js app that retrieves song, concert, and movie data by making an API call to Spotify, as well as making API calls to the OMDB and Bands In Town API’s using Axios. This project uses modulization by bringing several files (.js, .json, .txt, etc.) together to run the application. Liri Bot takes in 4 different commands: 
1. *concert-this*: searches the Bands In Town Artist Events API for an artist and renders venue name, venue location, and event date to the console. 
2. *spotify-this-song*: searches the Spotify API for a given song and renders the artist(s) name, song name, a Spotify song preview link, and the album name to the console.
3. *movie-this*: using Axios, retrieve’s data from the OMDB API for a given movie and renders the movie title, the year the movie came out, the movies IMDB rating, the country where the movie was produced, the language the movie is in, the movie’s plot, and the actors who were in the movie to the console. 
4. *do-what-it-says*: for this command, Liri Bot uses the fs Node package to call the text inside the random.txt file as commands to render to the console. 
## Video How To
Watch this video for more details on how to search for songs/concerts/movies; as well as to see what happens if you don't specify a song/concert/movie name. The video also demos what happens when a user inputs *do-what-it-says*, and how to input searches:

https://drive.google.com/file/d/146g4vTwh0rCEbfJohv5r4zrhcIIUNcN5/view
## Components Used
* Node.js
* Axios
* Moment.js
* DotEnv
* Node-Spotify-API
* OMDB API
* Bands In Town API
* Visual Studio Code
* Markdown
* GitHub
* Screencastify (video)
## Author
Claire Gibeau
## Feedback
This is my first Node.js and fully backend project. It was an adjustment not having HTML and CSS accompanying the JavaScript. In this project I learned to use .gitignore and .env which are very useful; I will be going back to add these to some other projects! It is pretty neat to be able to do all of these API calls so simply (I have a lot of places I want to travel for concerts after playing around in this app!).
