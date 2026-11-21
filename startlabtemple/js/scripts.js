import { temples } from '../data/temples.js';
//console.log(temples);

import { url } from '../data/temples.js';
//console.log(url);


const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");
// myclose.addEventListener("click", () => mydialog.close());
myclose.addEventListener("click", () => {
    mydialog.close();
});

// ----- loop through the array of json items

function displayItems(data) {
    console.log(data);
    data.forEach(x => {
        console.log(x);
        const photo = document.createElement("img");
        photo.src = `${url}${x.path}`;
        photo.alt = x.name;
        photo.addEventListener("click", () => showstaff(x));
        //{
        //     mydialog.showModal();
        //     mytitle.textContent = x.name;
        //     myinfo.textContent = `Dedicated: ${x.dedicated} by ${x.person}`;
        // });
        showHere.appendChild(photo);
    });
}
// data.forEach(item => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.innerHTML = `
//         <h3>${item.name}</h3>
//         <p>Dedicated: ${item.dedicated}</p>
//         <p>Person: ${item.person}</p>
//     `;
//     showHere.appendChild(card);
// });

function showstaff(x) {
    mydialog.showModal();
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = ` Temple Number: ${x.number}<br>Dedicated: ${x.dedicated} by ${x.person}`;
}


displayItems(temples);
