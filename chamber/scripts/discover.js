
import { companies } from "../data/discover.mjs";
//console.log(companies)

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
// for weather


// Fetch and display the JSON data
async function loadCompanies() {
    try {
        const response = await fetch('companies.json');

        if (response.ok) {
            const companies = await response.json();
            //console.log(data); // testing only
            displayResults(companies); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    // const companies = await response.json();

    // Limit to  companies and generate HTML for each
    companies.slice(0, 7).forEach(company => {
        const membership = getMembershipDetails(company.membership);

        const card = document.createElement('article');
        card.className = 'card';

        // Note: Assumes images are stored in an 'images/' folder. 
        // Includes an onerror fallback placeholder if the local image doesn't exist yet.
        card.innerHTML = `
                        <img 
                   src="${company.path}" 
                            alt="${company.Name} logo"
                            onerror="this.onerror=null; this.src='https://placehold.co/400x300?text=${encodeURIComponent(company.Name)}';"
                        >
                        <div class="card-content">
                            <div class="card-header">
                                <h2>${company.Name}</h2>
                                <span class="badge ${membership.className}">${membership.label}</span>
                            </div>
                            <ul class="info-list">
                                <li><strong>Address:</strong> ${company.Address}</li>
                                <li><strong>Phone:</strong> ${company.phone}</li>
                                <li><strong>Image File:</strong> ${company.path}</li>
                            </ul>
                            <a href="${company.url}" target="_blank" rel="noopener noreferrer" class="btn-website">
                                Visit Website
                            </a>
                        </div>
                    `;

        gridContainer.appendChild(card);
    });
}


loadCompanies();
