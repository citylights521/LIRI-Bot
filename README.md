# LIRI-Bot
Hey Liri, search for this song/concert/movie! Get all of your entertainment info with Liri Bot.

![Image of Liri Bot](/smallerLiriBotPic.PNG)

## How to Use
Liri Bot is a Node.js app that retrieves song, concert, and movie data by making an API call to Spotify, as well as making API calls to the OMDB and Bands In Town API’s using Axios. This project uses modulization by bringing several files (.js, .json, .txt, etc.) together to run the application. 

Since this is a command line app, as the user you will need to do the following:
* Clone the repo
* **Run `npm install` in your terminal**
* Create a .env file
* Obtain a Spotify keys: you'll need a **client id** and **client secret**:
    1. Step One: Visit <https://developer.spotify.com/my-applications/#!/>
    1.  Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
    1. Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
    1. Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

Liri Bot takes in 4 different commands: 
1. *concert-this*: searches the Bands In Town Artist Events API for an artist and renders venue name, venue location, and event date to the console. 
2. *spotify-this-song*: searches the Spotify API for a given song and renders the artist(s) name, song name, a Spotify song preview link, and the album name to the console.
3. *movie-this*: using Axios, retrieve’s data from the OMDB API for a given movie and renders the movie title, the year the movie came out, the movies IMDB rating, the country where the movie was produced, the language the movie is in, the movie’s plot, and the actors who were in the movie to the console. 
4. *do-what-it-says*: for this command, Liri Bot uses the fs Node package to call the text inside the random.txt file as commands to render to the console. 

## Video How To
Watch this video for more details on how to search for songs/concerts/movies; as well as to see what happens if you don't specify a song/concert/movie name. The video also demos what happens when a user inputs *do-what-it-says*, and how to input searches:

https://drive.google.com/file/d/146g4vTwh0rCEbfJohv5r4zrhcIIUNcN5/view

## GitHub Link
https://github.com/citylights521/LIRI-Bot

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
Be sure to watch the video how-to!
