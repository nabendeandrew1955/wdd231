// import { products } from '../data/discover.mjs';
// //  console.log(products)
// import { url } from '../data/discover.mjs';
// // console.log(url)


// const cards = document.querySelector('#nabs');

// async function getProductsData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.table(data.machines);
//     //     //   displayItems(data.machines); // note that you reference the prophets array of the JSON data object, not just the object
// }

import {places} from "../data/discover.mjs";
//console.log(places)


const gridContainer = document.getElementById('company-grid');

// Helper function to map membership numbers to labels and CSS classes
function getMembershipDetails(level) {
    switch (level) {
        case 3:
            return { label: 'Gold', className: 'badge-gold' };
        case 2:
            return { label: 'Silver', className: 'badge-silver' };
        case 1:
        default:
            return { label: 'Member', className: 'badge-member' };
    }
}



// Fetch and display the JSON data
async function loadplaces() {
    try {
        const response = await fetch('places.json');

        if (response.ok) {
            const places = await response.json();
            //console.log(data); // testing only
            displayResults(places); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    // const companies = await response.json();

    // Limit to  companies and generate HTML for each
    places.slice(0, 10).forEach(place => {
        const membership = getMembershipDetails(place.membership);

        const card = document.createElement('article');
        card.className = 'card';
        // mine
        const cardContent = document.createElement('section');

        // Note: Assumes images are stored in an 'images/' folder. 
        // Includes an onerror fallback placeholder if the local image doesn't exist yet.
        cardContent.innerHTML = ` 
                        <img 
                   src="${place.path}" 
                            alt="${place.Name} logo" 
                            onerror="this.onerror=null; this.src='https://placehold.co/400x300?text=${encodeURIComponent(place.Name)}';"
                        >
                        <div class="card-content">
                            <div class="card-header">
                                <h2>${place.Name}</h2>
                                <span class="badge ${membership.className}">${membership.label}</span>
                            </div>
                            <ul class="info-list">
                                <li><strong>Name:</strong> ${place.Name}</li>
                                <li><strong>Address:</strong> ${place.Address}</li>
                                 <li><strong>Phone:</strong> ${place.phone}</li>
                            </ul>
                        </div>
                    
                    `;


        card.appendChild(cardContent)
        gridContainer.appendChild(card);
    });
}


loadplaces();
