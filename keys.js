console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

// Code required to import the keys.js file
var keys = require("./keys.js");

// This code enables access to keys information
var spotify = new Spotify(keys.spotify);

