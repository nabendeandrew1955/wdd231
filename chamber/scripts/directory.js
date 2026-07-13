const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `lastmodification: ${document.lastModified}`;




navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
});

