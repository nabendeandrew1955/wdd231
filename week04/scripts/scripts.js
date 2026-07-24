import { temples } from '../data/temples.js'
//console.log(temples)

import {url } from '../data/temples.js'
//console.log(url)

// Grab a reference to a division where to display items

const showhere = document.querySelector('#showhere')
const mytitle = document.querySelector('#mydialog h2')
const myinfo = document.querySelector('#mydialog p')
const myclose = document.querySelector('#mydialog button')

myclose.addEventListener('click', () => mydialog.close())

// A loop through the Array of Json Items
function displayItems(data) {
    console.log(data);
    data.array.forEach(x => {
        console.log(x);
        const photo = document.createElement('img')
        photo.src = `${url} ${x.path}`
        photo.alt = x.name;
        photo.addEventListener('click', () => showStuff(x))
        showhere.appendChild(photo)
       
        
    });// end Loop

} // End function
displayItems(temples)


//populate The Dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name;
    mydialog.showModal()
}



