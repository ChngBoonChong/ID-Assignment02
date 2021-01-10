// Call API
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid=73699de2b84a44f184293ea613935bc8", function(data)
{
    //console.log(data);

    // Take icon image and place into html
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $('.icon').attr('src', icon);

    // Take temperature data and put into html
    var temp = data.main.temp  + "°";
    $('.temp').append(temp);

    // Take weather forecast data and put into html
    var forecast = data.weather[0].main;
    $('.forecast').append(forecast);

    // Get current date and put into html
    currentDate = new Date();
    year = currentDate.getFullYear();
    month = currentDate.getMonth() + 1;
    date = currentDate.getDate();
    document.getElementById("date").innerHTML = date + "/" + month + "/" + year;
});
