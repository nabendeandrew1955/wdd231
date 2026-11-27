/*<div class="container">
    <article class="grid">
        <section>
            <h2>Pioneer Logistics LTD"</h2>
            <div class="filter-container">
                <img src="images/bus-front.svg" alt="" width="200" height="200">
            </div>
            <div class="card">
                <h3>Address:</h3>
                <p>808 Freight Way</p>
                <h3>Phone:</h3>
                <p>(555) 011-2233</p>
                <h3>Description:</h3>
                <p>Deals in heavy and light power equipment as well as after sales services.</p>
                <h3>Membership Level:</h3>
                <p>Silver</p>
            </div>
            <a href="//applianceworld.co.ug/" target="_blank">Details</a>
        </section>

    </article>
</div>

/************************************************separation*/

const companies = [
    {
        "Name": "Nabzo Electrical & Electronics LTD",
        "Address": "P.O Box 8989 Kampala",
        "phone": "+256771652048",
        "url": "//applianceworld.co.ug",
        "Description": "Deals in heavy and light power equipment as well as after sales services",
        "path": "images/camera-reels.svg",
        "membership": 3
    },
    {
        "Name": "Housing Finance Bank",
        "Address": "789 Capital Blvd ",
        "phone": "+256771888755",
        "url": "//www.housingfinance.co.ug/",
        "Description": "First incorporated as a private limited company in 1967 as Housing Finance Company Uganda Limited, carrying out business as a non-banking credit institution providing mortgage finance and also accepting savings deposits from the public. We became licensed and regulated by Bank of Uganda as a commercial Bank in 2007 to carry on business of a banking under the Financial Institutions Act and changed into a public limited liability company known as Housing Finance Bank Limited.",
        "path": "images/bank.svg",
        "membership": 2
    },

    {
        "Name": "New Master Electronics LTD",
        "Address": "Kampala, Bombo Road",
        "phone": "+256791335447",
        "url": "//lyvecity.com/@new_master_electronics/gallery",
        "Description": "Located in the bustling hub of Kampala on Ben Kiwanuka Rd, New Master Electronics stands as a trusted destination for electronic needs. With a commendable rating of 4.3 from 60 Google reviews, @new_master_electronics has earned a reputation for reliable products and attentive customer service. The store’s vibrant ambiance, marked by an array of gadgets, caters to tech enthusiasts seeking quality and variety. Customers appreciate the knowledgeable staff, who are always ready to assist and offer insightful advice. For those in Kampala, @new_master_electronics is a go-to spot for a diverse selection of electronics. #KampalaElectronics.",
        "path": "images/broadcast-pin.svg",
        "membership": 3
    },

    {
        "Name": "Green Garden Cafe`",
        "Address": "456 Kampala uganda",
        "phone": "(555) 014-5566",
        "url": "//wanderboat.ai/chat",
        "Description": "Deals in foods and beverages.",
        "path": "images/cup-hot-fill.svg",
        "membership": 1
    },
    {
        "Name": "Star Light Hotel Mbale",
        "Address": "46 Wanale Road, Mbale Uganda",
        "phone": "(555) 015-9900",
        "url": "//www.tripadvisor.com/Hotel_Review-g668276-d4823716-Reviews-Starlight_Hotel_Mbale-Mbale_Eastern_Region.html/",
        "Description": "The hotel was very tranquil with lovely well manicured gardens and a quiet space, the rooms were clean and well maintained, the food is good and the service was quick. It is an ideal hotel for those travellers that appreciate peace and quiet.",
        "path": "images/stars.svg",
        "membership": 3
    },
    {
        "Name": "Uganda Safari Travel Agency",
        "Address": "321 Media Drive",
        "phone": "(555) 012-4411",
        "url": "//treksafarisuganda.com/uganda-safari/?gad_source=1&gad_campaignid=23757584806&gbraid=0AAAABDYr0cL7lwJSnyYw4S1Etn3U7Zp5d&gclid=CjwKCAiAzp_YBhAJEiwASf8kHSSFUjc-_Y_QWjjzz7uLgRG3IXvveLf6OEX6t5Ud0hkaEqJ90MAkZxoCMjEQAvD_BwE",
        "Description": "Plan a tailor-made Uganda safari with gorilla trekking, chimpanzee tracking, and wildlife experiences across Ugandas top national parks, designed around your travel dates and preferences..",
        "path": "images/car-front-fill.svg",
        "membership": 2
    },
    {
        "Name": "Pioneer Easy Bus LTD",
        "Address": "Plot 31, Mpanga Close, Off Luthuli Lane, Bugolobi, Kampala,",
        "phone": "+256 414 373722",
        "url": "//www.246african.com/listing/pioneer-easy-bus-limited/",
        "Description": "Pioneer Easy Bus Limited is Ugandas premier bus company providing integrated passenger bus services in Greater Kampala Metropolitan Area",
        "path": "images/bus-front.svg",
        "membership": 1
    }
]

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
        // mine
        const cardContent = document.createElement('section');

        // Note: Assumes images are stored in an 'images/' folder. 
        // Includes an onerror fallback placeholder if the local image doesn't exist yet.
        cardContent.innerHTML = ` 
                        <img 
                   src="${company.path}" 
                            alt="${company.Name} logo" style="width: ${200}px; height: auto;
                            onerror="this.onerror=null; this.src='https://placehold.co/400x300?text=${encodeURIComponent(company.Name)}';"
                        >
                        <div class="card-content">
                            <div class="card-header">
                                <h2>${company.Name}</h2>
                                <span class="badge ${membership.className}">${membership.label}</span>
                            </div>
                            <ul class="info-list">
                                <li><strong>Name:</strong> ${company.Name}</li>
                                <li><strong>Address:</strong> ${company.Address}</li>
                                 <li><strong>Phone:</strong> ${company.phone}</li>
                            </ul>
                            <a href="${company.url}" target="_blank" rel="noopener noreferrer" class="btn-website">
                                Visit Website
                            </a>
                        </div>
                    
                    `;

        
        card.appendChild(cardContent)
        gridContainer.appendChild(card);
    });
}


loadCompanies();


// for grid view of layout of the members

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

/* function displayItems(places) {
    // console.log(data)
    places.forEach(x => {
        //          console.log(x)
        const card = document.createElement('div');
        //          const Name = document.createElement('h2');
        //          const Address = document.createElement('p');

        // //         //adding futres below console
        const photo = document.createElement('img');
        photo.src = `${x.path}`;
        photo.alt = x.Name;
        photo.addEventListener('click', () => showStuff(x));
        const theTitle = document.createElement('h2');
        theTitle.innerText = x.Name;
        //build the address
        const theaddress = document.createElement('address');
        theaddress.innerText = x.Address;
        //Build the description element.
        const thedesc = document.createElement('p');
        thedesc.innerHTML = x.Description;
        card.appendChild(theTitle);
        card.appendChild(photo);
        card.appendChild(theaddress);
        card.appendChild(thedesc)
        showHere.appendChild(card);
    });
}

function showStuff(place) {
         mytitle.innerHTML = place.Name;
         mydialog.showModal();
         myinfo.innerHTML = `
         <p><strong>Address:</strong> ${place.Address}</p>
         <p><strong>Description:</strong> ${place.Description}`
     }
displayItems(places)                          */