import { places } from "../data/discover.mjs";
//   console.log(places)







const cards = document.querySelector('#cards');






// function displayItems(data) {
//     console.log(data)
//     data.forEach(x => {
//         console.log(x)
//         let card = document.createElement('section');
//         let Name = document.createElement('h2'); // fill in the blank
//         let Address = document.createElement("p");
//         let Description = document.createElement("p");
//         const photo = document.createElement('img');
//         photo.src = `${x.path}`
//         photo.alt = `${x.Name}`
//         cards.appendChild(photo);
//     });
// }


function displayItems(data) {
    console.log(data)
    data.forEach((place) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let Name = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');
        let Address = document.createElement("p");
        let Description = document.createElement("p");

        // Build the h2 content out to show the prophet's full name
        Name.textContent = `${place.Name}`; // fill in the blank
        Address.innerHTML = `Address: ${place.Address}`;
        Description.innerHTML = `Description: ${place.Description}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', place.path);
        portrait.setAttribute('alt', `Portrait of ${place.Name}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '30');
        portrait.setAttribute('height', '200');

        // Append the section(card) with the created elements
    
        cards.appendChild(Name);
        cards.appendChild(portrait);//fill in the blank
        cards.appendChild(Address);
        cards.appendChild(Description)
        

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
displayItems(places);
