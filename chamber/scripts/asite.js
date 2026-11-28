
import { places } from "../data/discover.mjs";
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

    //second code

    places.slice(0, 10).forEach(place => {
        const membership = getMembershipDetails(place.membership);

        const card = document.createElement('div');
        card.className = 'card';
        const photo = document.createElement('img')
        photo.src = `${place.path}`
        photo.alt = place.Name
        photo.loading = "lazy"
        card.appendChild(photo)
        // build the title element
        const title = document.createElement('h2');
        title.innerHTML= `<strong>Name</strong>: ${place.Name}`;
        card.appendChild(title);
        // Build the address element
        const address = document.createElement('address')
        address.innerHTML = `<strong>Address</strong>: ${place.Address}`;
        card.appendChild(address);
        // Build the description element
        const desc = document.createElement('p');
        desc.innerHTML = `<strong>Description</strong>: ${place.Description}`;
        card.appendChild(desc);
        const link = document.createElement('p');
        link.innerHTML = `<a href="${place.url}" target="_blank" rel="noopener noreferrer" class="btn-website">
                               Learn More</a>`;
        card.appendChild(link);
        gridContainer.appendChild(card);
        

    })
}
    loadplaces();

    
        

    


