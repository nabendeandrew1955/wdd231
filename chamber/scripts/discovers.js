import {places} from "../data/discover.mjs";
//   console.log(places)



const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myinfo = document.querySelector('#mydialog p');
const openButton = document.querySelector("#openButton");
const myclose = document.querySelector('#mydialog button');
myclose.addEventListener("click", () => mydialog.close());



 document.addEventListener("DOMContentLoaded", () => {
     renderPlaces();
     handleVisitMessage();
 });


 function renderPlaces() {
     const container = document.getElementById("places-container");
     if (!container) return;

     container.innerHTML = "";

     places.forEach((place, index) => {
         const card = document.createElement("article");
         card.classList.add("discover-card");

         
         card.style.gridArea = `area${index + 1}`;

         card.innerHTML = `
             <h2>${place.Name}</h2>
             <figure>
                 <img src= "${place.path}" alt="${place.Name}" width="300" height="200" loading="lazy">
             </figure>
             <address>${place.Address}</address>
             <p>${place.Description}</p>
             <button id="openButton">More Information</button> 
         `;
          

         container.appendChild(card);
     });
}
openButton.addEventListener('click', () => showStuff(x))

function showStuff(x) {
    
          mytitle.innerHTML = x.Name;
          mydialog.showModal();
          myinfo.innerHTML = `<p>Address:- ${x.Address}</p>
           <p>Description:- ${x.Description}</p>`
      }


 // local storage
 function handleVisitMessage() {
     const banner = document.getElementById("visit-message");
     if (!banner) return;

     const msInDay = 86400000; // 1000ms * 60s * 60m * 24h
     const lastVisit = localStorage.getItem("lastVisitDate");
     const now = Date.now();

     if (!lastVisit) {
         banner.textContent = "You are Welcome.";
     } else {
         const timeDiff = now - parseInt(lastVisit, 10);
         const daysDiff = Math.floor(timeDiff / msInDay);

         if (daysDiff < 1) {
             banner.textContent = "You are Welcome to UG!";
         } else {
             const dayWord = daysDiff === 1 ? "dia" : "dias";
             banner.textContent = `Last visit was ${daysDiff} ${dayWord}.`;
         }
     }


     localStorage.setItem("lastVisitDate", now.toString());
 }

















  


// //----GRAB A REFERENCE TO THE DIVISION WHERE WE DISPLAY ITEMS
// 
// const showHere = document.querySelector("#showHere");
// // // GET A REFERENCE TO THE HTML DIALOG ELEMENT
//   const mydialog = document.querySelector('#mydialog');
//   const mytitle = document.querySelector('#mydialog h2');
//   const myinfo = document.querySelector('#mydialog p');
//   const myclose = document.querySelector('#mydialog button');
//   myclose.addEventListener("click", () => mydialog.close());

// // //------ loop through the array of json items.
//  function displayItems(places) {
// //     // console.log(data)
//      places.forEach(x => {
//          console.log(x)
//          const card = document.createElement('div');
//          const Name = document.createElement('h2');
//          const Address = document.createElement('p');

// //         //adding futres below console
//          const photo = document.createElement('img');
//         photo.src = `${x.path}`
//          photo.alt = x.Name;
//          Name.textContent = `Name: ${place.Name}`; // fill in the blank
//          Address.innerHTML = `Address: ${place.Address}`;
//          Description.innerHTML = `Description: ${place.Description}`;
//          // Add an eventlistener to each division on the page
//          photo.addEventListener('click', () => showStuff(x));

//          showHere.appendChild(photo);


//     }); // end loop


//  } // display function. or end function

// // // Start DISPLAYING ALL ITEMS IN THE JSON FILE
// // displayItems(places)

// // // populate the dialog with information when the image is clicked
// // function showStuff(x) {
// //     mytitle.innerHTML = x.Name;
// //     mydialog.showModal();
// //     myinfo.innerHTML = `<p>Address:- ${x.Address}</p>
// //      <p>Description:- ${x.Description}</p>`
// // }
// /*********for editing**********************************************************/

// // function displayItems(places) {
// //     console.log(places)
// //     places.forEach((place) => {
// //         // Create elements to add to the div.cards element
// //         let card = document.createElement('div');
// //         let Name = document.createElement('h2'); // fill in the blank
// //         let portrait = document.createElement('img');
// //         let Address = document.createElement("p");
// //         let Description = document.createElement("p");

// //         // Build the h2 content out to show the prophet's full name
// //         Name.textContent = `Name: ${place.Name}`; // fill in the blank
// //         Address.innerHTML = `Address: ${place.Address}`;
// //         Description.innerHTML = `Description: ${place.Description}`;
// //         // Build the image portrait by setting all the relevant attributes
// //         portrait.setAttribute('src', place.path);
// //         portrait.setAttribute('alt', `Portrait of ${place.Name}`); // fill in the blank
// //         portrait.setAttribute('loading', 'lazy');
// //         portrait.setAttribute('width', '30');
// //         portrait.setAttribute('height', '200');

// //         // Append the section(card) with the created elements

// //         cards.appendChild(Name);
// //         cards.appendChild(portrait);//fill in the blank
// //         cards.appendChild(Address);
// //         cards.appendChild(Description)


// //         cards.appendChild(card);
// //     }); // end of arrow function and forEach loop
// // }
// // displayItems(places);




// /**************************************for editing************************************/





// //  function displayItems(places) {
// //      console.log(places)
// //      places.forEach((place) => {
// //          // Create elements to add to the div.cards element
// //          const card = document.createElement('div');
// //          const Name = document.createElement('h2'); // fill in the blank
// //          const portrait = document.createElement('img');
// //          const Address = document.createElement("p");
// //          const Description = document.createElement("p");

// //          // Build the h2 content out to show the prophet's full name
// //          Name.textContent = `Name: ${place.Name}`; // fill in the blank
//          Address.innerHTML = `Address: ${place.Address}`;
//          Description.innerHTML = `Description: ${place.Description}`;
//          // Build the image portrait by setting all the relevant attributes
//          portrait.setAttribute('src', place.path);
//          portrait.setAttribute('alt', `Portrait of ${place.Name}`); // fill in the blank
//          portrait.setAttribute('loading', 'lazy');
//          portrait.setAttribute('width', '30');
//          portrait.setAttribute('height', '200');

//          // Append the section(card) with the created elements

//          card.appendChild(Name);
//          card.appendChild(portrait);//fill in the blank
//          card.appendChild(Address);
//          card.appendChild(Description)

//          cards.appendChild(card);
 
//      }); // end of arrow function and forEach loop/ }



//    displayItems(places);
































// function displayItems(data) {
//     console.log(data)
//     data.forEach((place) => {
//         // Create elements to add to the div.cards element
//         let card = document.createElement('section');
//         let Name = document.createElement('h2'); // fill in the blank
//         let portrait = document.createElement('img');
//         let Address = document.createElement("p");
//         let Description = document.createElement("p");

//         // Build the h2 content out to show the prophet's full name
//         Name.textContent = `Name: ${place.Name}`; // fill in the blank
//         Address.innerHTML = `Address: ${place.Address}`;
//         Description.innerHTML = `Description: ${place.Description}`;
//         // Build the image portrait by setting all the relevant attributes
//         portrait.setAttribute('src', place.path);
//         portrait.setAttribute('alt', `Portrait of ${place.Name}`); // fill in the blank
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '30');
//         portrait.setAttribute('height', '200');

//         // Append the section(card) with the created elements
    
//         cards.appendChild(Name);
//         cards.appendChild(portrait);//fill in the blank
//         cards.appendChild(Address);
//         cards.appendChild(Description)
        

//         cards.appendChild(card);
//     }); // end of arrow function and forEach loop
// }
// displayItems(places);


/****************temples***********************************/



