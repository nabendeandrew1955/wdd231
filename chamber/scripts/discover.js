
import {companies } from "../data/discover.mjs";
  console.log(places)

/*const gridContainer = document.getElementById('company-grid');

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
async function loadCompanies() {
    try {
        const response = await fetch('companies.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const companies = await response.json();

        // Limit to 9 companies and generate HTML for each
        companies.slice(0, 9).forEach(company => {
            const membership = getMembershipDetails(company.membership);

            const card = document.createElement('article');
            card.className = 'card';

            // Note: Assumes images are stored in an 'images/' folder. 
            // Includes an onerror fallback placeholder if the local image doesn't exist yet.
            card.innerHTML = `
                        <img 
                            src="images/${company.image}" 
                            alt="${company.name} logo"
                            onerror="this.onerror=null; this.src='https://placehold.co{encodeURIComponent(company.name)}';"
                        >
                        <div class="card-content">
                            <div class="card-header">
                                <h2>${company.name}</h2>
                                <span class="badge ${membership.className}">${membership.label}</span>
                            </div>
                            <ul class="info-list">
                                <li><strong>Address:</strong> ${company.address}</li>
                                <li><strong>Phone:</strong> ${company.phone}</li>
                                <li><strong>Image File:</strong> ${company.image}</li>
                            </ul>
                            <a href="${company.website}" target="_blank" rel="noopener noreferrer" class="btn-website">
                                Visit Website
                            </a>
                        </div>
                    `;

            gridContainer.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading company data:', error);
        gridContainer.innerHTML = `
                    <p class="error-msg">
                        Failed to load companies.json. Make sure you are running this page through a local server (e.g., Live Server).
                    </p>
                `;
    }
}

loadCompanies();*/
    