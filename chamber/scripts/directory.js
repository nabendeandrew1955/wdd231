const navbutton = document.querySelector('#ham-btn');
// const navBar = document.querySelector('#nav-bar');
  const navlinks = document.querySelector('#nav-bar');
let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `lastmodification: ${document.lastModified}`;


/************************ Note2***********************/
// const navbutton = document.querySelector('#ham-btn');

// Toggle to show class off and on

// navbutton.addEventListener('click', () => {
//   const isOpen = navbutton.classList.toggle('show');
//   navbutton.setAttribute('arial-expand', isOpen);
//   navBar.classList.toggle('show');

// });



/*************note1******************************/
 navbutton.addEventListener('click', () => {
   navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
 });

/**************************directory***************/


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


/*****************************************directory page**************/

const myinfo = new URLSearchParams(window.location.search);
console.log(myinfo);

// console.log(myinfo.get('first'));
// /console.log(myinfo.get('last'));
//  console.log(myinfo.get('ordinance'));
//  console.log(myinfo.get('date'));
//  console.log(myinfo.get('location'));
//  console.log(myinfo.get('phone'));
//  console.log(myinfo.get('email'));

// document.querySelector('#results').innerHTML = `
// <p> Appointment for ${myinfo.get('first')}, ${myinfo.get('last')}</p>
// <p> Proxy ${myinfo.get('ordinance')} on ${myinfo.get('date')} in the ${myinfo.get('location')} </p>
// <p> Your Phone: ${myinfo.get('phone')} </p>
// <p> Your email: ${myinfo.get('email')} </P>
// `

