$("#button").click(function(){

		$(".hide").show();
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Nashville,us&appid=841ababb42c6befe9281221680f40c92", function(data){
			document.getElementById("temp").innerHTML = "";
			document.getElementById("temp").innerHTML += "<h1>" + data.main.temp + "</h1>";
			document.getElementById("weather").innerHTML = "";
			document.getElementById("weather").innerHTML += "<h1>" + data.weather.description + "</h1>";
			document.getElementById("hum").innerHTML = "";
			document.getElementById("hum").innerHTML += "<h3>" + data.main.humidity + "%" + "</h3>";
			document.getElementById("press").innerHTML = "";
			document.getElementById("press").innerHTML += "<h3>" + data.main.pressure + "</h3>";
			document.getElementById("wind").innerHTML = "";
			document.getElementById("wind").innerHTML += "<h3>" + data.wind.speed + "<span id=\"mph\">MPH</span>" + "</h3>";
			
		});
	});

// $("#hide").click(function(){
//         $("p").hide();
//     });
  