$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=singapore&units=metric&appid=73699de2b84a44f184293ea613935bc8", function(data)
{
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    $('.icon').attr('src', icon);

    var temp = data.main.temp  + "°";
    $('.temp').append(temp);

    var forecast = data.weather[0].main;
    $('.forecast').append(forecast);

    currentDate = new Date();
    year = currentDate.getFullYear();
    month = currentDate.getMonth() + 1;
    date = currentDate.getDate();
    document.getElementById("date").innerHTML = date + "/" + month + "/" + year;
});
