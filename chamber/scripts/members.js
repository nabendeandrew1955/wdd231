const companies = [
    {
        "Name": "Bwindi Impenetrable National Park",
        "Address": "Bwindi Forest, Kanungu District, Southwestern Uganda",
        "phone": "+256 414 123456",
        "url": "https://ugandawildlife.org/national-parks/bwindi-impenetrable-national-park",
        "Description": "A UNESCO World Heritage Site famous for mountain gorilla trekking and one of Africa's most biodiverse rainforests",
        "path": "images/gorilla-trekking-in-uganda.webp",
        "membership": 3
    },
    {
        "Name": "Murchison Falls National Park",
        "Address": "Masindi & Nwoya Districts, Northwestern Uganda",
        "phone": "+256 414 654321",
        "url": "https://ugandawildlife.org/national-parks/murchison-falls-national-park",
        "Description": "Uganda's largest national park featuring dramatic waterfalls, game drives, boat cruises, and abundant wildlife including elephants, giraffes, lions, and hippos.",
        "path": "images/murchison-falls-national-park.webp",
        "membership": 2
    },

    {
        "Name": "Lake Victoria",
        "Address": "Lake Victoria, East Africa",
        "phone": "+256 414 123456",
        "url": "https://ugandawildlife.org/lakes/lake-victoria",
        "Description": "The world's largest tropical lake, known for its rich biodiversity and vibrant aquatic life.",
        "path": "images/source-of-the-nile.webp",
        "membership": 3
    },

    {
        "Name": "Source of the Nile",
        "Address": "Source of the Nile Gardens, Jinja, Uganda",
        "phone": "+256 414 123456",
        "url": "https://ugandawildlife.org/rivers/source-of-the-nile",
        "Description": "The historic source of the world's longest river, offering boat rides, kayaking, rafting, and scenic river views.",
        "path": "images/source-of-the-nile.webp",
        "membership": 1
    },
    {
        "Name": "Queen Elizabeth National Park",
        "Address": "Kasese, Rubirizi, Rukungiri & Kamwenge Districts, Western Uganda",
        "phone": "+256 414 123456",
        "url": "https://ugandawildlife.org/national-parks/queen-elizabeth-national-park",
        "Description": "One of Uganda's most visited parks, known for tree-climbing lions, boat safaris on the Kazinga Channel, and diverse wildlife",
        "path": "images/queen-elizabeth-park.webp",
        "membership": 3
    },
    {
        "Name": "Kibale National Park",
        "Address": "Fort Portal, Kabarole District, Western Uganda",
        "phone": "+256 414 123456",
        "url": "https://ugandawildlife.org/national-parks/kibale-national-park",
        "Description": "A tropical rainforest famous for chimpanzee trekking and home to over 13 species of primates.",
        "path": "images/kibale-park.webp",
        "membership": 2
    },
    {
        "Name": "Lake Bunyonyi",
        "Address": "Kabale District, Southwestern Uganda",
        "phone": "+256 414 123456",
        "url": "https://ugandawildlife.org/lakes/lake-bunyonyi",
        "Description": "A beautiful freshwater lake with 29 islands, ideal for canoeing, birdwatching, swimming, and relaxation.",
        "path": "images/lake-bunyonyi.webp",
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

        // Note: Assumes images are stored in an 'images/' folder. 
        // Includes an onerror fallback placeholder if the local image doesn't exist yet.
        card.innerHTML = `<section>
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
                                <li><strong>Name:</strong> ${company.Name}</li>
                                <li><strong>Address:</strong> ${company.Address}</li>
                                 <li><strong>Phone:</strong> ${company.phone}</li>
                            </ul>
                            <a href="${company.url}" target="_blank" rel="noopener noreferrer" class="btn-website">
                                Visit Website
                            </a>
                        </div>
                    </section>
                    `;

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