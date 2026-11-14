const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const base = document.querySelector('#town');
let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `lastmodification: ${document.lastModified}`;



const mykey = "045fe0b9399a754d351a447d1a248004"
const mylat = "1.512485"
const mylog = "32.395955"

const myurl = `//api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylog}&"units=imperial"&appid=${mykey}&units=metric`;
//  const myurl = `//api.openweathermap.org/data/2.5/forecast?lat=${mylat}&lon=${mylog}&appid=${mykey}$units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(myurl);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
// Display The json Data onto my web page
function displayResults(data) {
    // console.log('Hello!');
    captionDesc.innerHTML = `<strong>${data.weather[0].description}</strong>`;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    base.innerHTML = data.sys.country;

    // const iconsrc = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);


}
// Start The Process
apiFetch();

