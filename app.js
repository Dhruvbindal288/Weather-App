const apikey = '1cacf5746f4e55394c9eb775953758d0';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    try {
        const response = await fetch(apiurl + city + `&appid=${apikey}`);
        if (!response.ok) {
            throw new Error('Invalid city');
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = data.main.temp + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".windspeed").innerText = data.wind.speed + " km/hr";
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.details').style.display = 'flex';
    } catch (error) {
        console.error(error);
        document.querySelector('.city').innerText = 'You entered an invalid city';
        document.querySelector('.temp').innerText = 'Temperature not found';
        document.querySelector('.weather').style.display = 'block';
    
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
