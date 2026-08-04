import {places} from "../data/discover.mjs";
 console.log(places)






/*********************************************/
// const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     //console.table(data.prophets);
//     displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
// }

// getProphetData();

  const displayPlaces = (places) => {
      places.forEach((place) => {
          // Create elements to add to the div.cards element
          let card = document.createElement('section');
          let Name = document.createElement('h2'); // fill in the blank
          let Address = document.createElement("p");
          let Description = document.createElement("p");
         let path = document.createElement('img');

         // Build the h2 content out to show the pPlace's full name
         Name.textContent = `${place.Name}`; // fill in the blank
         Address.innerHTML = `Address: ${place.Address}`;
         Description.innerHTML = `Description: ${place.Description}`;
         // Build the image portrait by setting all the relevant attributes
         path.setAttribute('src', path);
         path.setAttribute('alt', `Portrait of ${place.Name}`); // fill in the blank
        path.setAttribute('loading', 'lazy');
         path.setAttribute('width', '300');
         path.setAttribute('height', '200');

         // Append the section(card) with the created elements
         card.appendChild(Name); //fill in the blank
         card.appendChild(Address);
         card.appendChild(Description)
         card.appendChild(path);

         cards.appendChild(card);
     }); // end of arrow function and forEach loop
 }
