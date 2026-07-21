// select HTML elements in the document
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
const mycnt = 3

 const myurl = `//api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylog}&"units=imperial"&appid=${mykey}&units=imperial`;
//const myurl = `//api.openweathermap.org/data/2.5/forecast/daily?lat=${mylat}&lon=${mylog}&cnt=${mycnt}&appid=${mykey}`;

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
    console.log('Hello!');
    captionDesc.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    base.innerHTML = data.sys.country;

    const iconsrc = `//openweathermap.org/payload/api/media/file/${data.weather[0].icon}%402x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);


}
// Start The Process
apiFetch();