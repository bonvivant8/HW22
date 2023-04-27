const weatherEl = document.querySelector('.weather');

const renderWeather = function (data) {
    const html = `
        <article class="weather">
        <h1>${data.name}</h1>
            <div class="Weather.info">
                <p>${data.main.temp}' °C' </p>
                <p>${data.main.pressure}' hPa'</p>
                <p>${data.weather[0].description} </p>
                <p>${data.main.humidity}'%' </p>
                <p>${data.wind.speed} ' m/s'</p>
                <p>${data.wind.deg}'°' </p>
                <img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'>
            </div>
        </article>
    `;
    weatherEl.innerHTML += html;
}

const getWeather = function (city) {
    const request = new XMLHttpRequest();

    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    request.send();

    request.addEventListener('load', function () {
        const data = JSON.parse(this.response);

        renderWeather(data);
    });
}

getWeather('Lviv');