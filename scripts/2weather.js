// select HTML elements in the document
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// Create required variables for the url and API key
const mykey = "045fe0b9399a754d351a447d1a248004";
const mylat = "49.768019";
const mylong = "6.646697";

// Construct a FULL PATH USING TEMPLATE LITERALS to get the weather data for your town


const myurl = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylong}&appid=${mykey}&units=metric`;

// Try to Grab the current weather data from the OpenWeatherMap API using fetch()
async function apiFetch() {
    try {
        const response = await fetch(myurl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

// Display the json data on the web page
function displayResults(data) {
    // console.log('Hello'); // testing only
    myTown.innerHTML = `${data.name}`;
    myDescription.innerHTML = `${data.weather[0].description}`;
    myTemperature.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', `${data.weather[0].description}`);
}

// Start the process of fetching the weather data when the page loads
apiFetch();