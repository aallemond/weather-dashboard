var APIKey = "69383b3abe7567a76337fff968d33b7d";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var today = moment().format('L');
var searchHistory = [];
var city = document.getElementById

function currentConditions(city) {

}

fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data))

