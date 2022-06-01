// selectors
let cityName = document.querySelector('.city');
let myTempreture = document.querySelector('.weather');
let iconImage = document.querySelector('.img-src');
let weatherClimate = document.querySelector('.climate');
let wetness = document.getElementById('humidty');
let windspeed = document.querySelector('.wind');
// selectors

let Api_key = `46b7f18ad557ae006d968672f8dea484n `; // api key
let img = `"https://openweathermap.org/img/wn/"` // icon link
{
    coord= {
        "lon": 18.4232,
        "lat": -33.9258
    },
    weather= [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    base= "stations",
    main= {
        "temp": 285.57,
        "feels_like": 285.01,
        "temp_min": 282.38,
        "temp_max": 289.47,
        "pressure": 1029,
        "humidity": 82
    },
    visibility= 10000,
    wind= {
        "speed": 1.54,
        "deg": 0
    },
    clouds= {
        "all": 0
    },
    dt= 1654032382,
    sys= {
        "type": 2,
        "id": 2073005,
        "country": "ZA",
        "sunrise": 1653975745,
        "sunset": 1654011951
    },
    timezone= 7200,
    id=  3369157,
    name= "Cape Town",
    cod= 200
}

function displayWeather(city){
    // fetching the APi from this url
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46b7f18ad557ae006d968672f8dea484`)
    .then(response => response.json())
    .then(data =>{
        const { country } = data.sys; // country shorth-name
        const { name } = data // name of the city
        const { temp, humidity } = data.main; // tempreture & humidity
        const { speed } = data.wind; // windspeed
        const { description, icon } = data.weather[0]

        // setting the DOM elements from the API
        cityName.textContent = `Weather in ${name}, ${country}`;
        let myTempretures = temp - 273.15
        myTempreture.textContent = `${myTempretures.toFixed(2)}°C`;
        weatherClimate.textContent = `${description}`;
        iconImage.src = `https://openweathermap.org/img/wn/${icon}.png`;
        wetness.textContent = `Humidity: ${humidity}%`
        windspeed.textContent = `Wind: ${speed}km/h`;

    })
}
displayWeather('kiev')

// searching
document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault()
    let inputValue = document.getElementById('search').value.trim();
    displayWeather(inputValue)
})
// working with enter key
