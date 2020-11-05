window.onload=function(){var settings = {
  "url": "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=London",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-rapidapi-host": "opentripmap-places-v1.p.rapidapi.com",
    "x-rapidapi-key": "33179136b2mshc66e07cecd059ddp130dbbjsn54a479c20abd"
  },
};
// Placing Variables to define table
$.ajax(settings).done(function (response) {
var mytable = document.getElementById("votingTable");
var newrow = mytable.insertRow(1);
var namecol=newrow.insertCell(0);
var countrycol=newrow.insertCell(1);
var latitudecol=newrow.insertCell(2);
var longitudecol=newrow.insertCell(3);
var populationcol=newrow.insertCell(4);
var timezonecol=newrow.insertCell(5);
namecol.innerHTML=response.name;
countrycol.innerHTML=response.country;
latitudecol.innerHTML=response.lat;
longitudecol.innerHTML=response.lon;
populationcol.innerHTML=response.population;
timezonecol.innerHTML=response.timezone;
});}
