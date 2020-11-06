const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://rapidapi.p.rapidapi.com/timeseries?country=China%2CIndia",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "33179136b2mshc66e07cecd059ddp130dbbjsn54a479c20abd",
		"x-rapidapi-host": "comprehensive-covid-19-tracking-data.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});