var APIKey = "69383b3abe7567a76337fff968d33b7d";
var city = document.getElementById("searchCity").value;


// var today = moment().format('L');
var searchHistory = [];


function currentConditions(city) {
    var city = document.getElementById("searchCity").value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    APIKey + 
    "&units=imperial";

  

    fetch(queryURL)
    .then(response => response.json())
    .then(data => console.log(data));
}


