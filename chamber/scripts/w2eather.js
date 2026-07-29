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

/********************join.html*************************/

// const getstring = window.location.search;
// console.log(getstring);

const myinfo = new URLSearchParams(window.location.search);

// console.log(myinfo);

// console.log(myinfo.get('fname'));
// console.log(myinfo.get('lname'));
// console.log(myinfo.get('ordinance'));
// console.log(myinfo.get('applicationdate'));
// console.log(myinfo.get('Membership'));
// console.log(myinfo.get('phone'));
// console.log(myinfo.get('email'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myinfo.get('first')} ${myinfo.get('last')}</p>
<p>Proxy ${myinfo.get('ordinance')} on ${myinfo.get('date')} in the ${myinfo.get('location')}</p>
<p>Your phone: ${myinfo.get('phone')}</p>
<p>Your email is ${myinfo.get('email')}</p>`

/****************************dialog*************************************/
const openButton = document.querySelector("#openButton")
const openButton2 = document.querySelector("#openButton2")
const openButton3 = document.querySelector("#openButton3")
const openButton4 = document.querySelector("#openButton4")

const dialogBox = document.querySelector("#mydialog")
const dialogBoxText = document.querySelector("#mydialog div")
const myTitle = document.querySelector("#mydialog h2")
const myInfo = document.querySelector("#mydialog p")
const closeButton = document.querySelector("#closeButton")

openButton.addEventListener("click", () => {
    dialogBox.showModal()
});

// openButton2.addEventListener('click', () => {
//     myTitle.innerHTML = Gold Membership
//     myInfo.innerHTML = Enhanced exposure on Chamber platforms and website priority listing
//     myInfo.innerHTML = VIP invitations to sector - specific and strategic events(e.g., MP Forums, Bank of England)
//     myInfo.innerHTML = Membership certificate and promotional photo opportunities.
//     myInfo.innerHTML = Access to the prestigious Black Country Business Club (T&C's apply).
//     myInfo.innerHTML = 6-monthly in-person account reviews with your Business Relationship Manager
//     dialogBox.showModal();
// });
// openButton3.addEventListener('click', () => {
//     myTitle.innerHTML = Silver Membership
//     myInfo.innerHTML = Exclusive access to the Platinum Group – senior - level peer network.
//     myInfo.innerHTML = Bespoke business review identifying growth opportunities in the region.
//     myInfo.innerHTML = Invitations to high-impact policy and economic briefings (i.e. Bank of England, MP Forums)
//     myInfo.innerHTML = Shape conversations around regional growth and business policy.
//     myInfo.innerHTML = Share insights across sectors and gain fresh strategic perspectives.
//     myInfo.innerHTML = Share best practice, knowledge, information and expertise to build strong and trusted business relationships.
//     dialogBox.showModal();
// });
// openButton4.addEventListener('click', () => {
//     myTitle.innerHTML = "Bronze Membership"
//     myInfo.innerHTML = "Bespoke package tailored to your strategic goals."
//     myInfo.innerHTML = "Unrivalled access to leadership forums and policy-shaping opportunities."
//     myInfo.innerHTML = "Premium brand exposure across all Chamber platforms and events."
//     myInfo.innerHTML = "Thought leadership opportunities to elevate your brand."
//     myInfo.innerHTML = "Dedicated support for your leadership and team development."
//     myInfo.innerHTML = "Be a voice for the region — help shape its future."
//     dialogBox.showModal();
// });



closeButton.addEventListener('click', () => {
    dialogBox.close();
});