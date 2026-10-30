// Store the selected elements that we are going to use
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar')

// Toggle to show class off and on

    navbutton.addEventListener('click', () => {
        const isOpen = navbutton.classList.toggle('show');
        navbutton.setAttribute('arial-expand', isOpen);
        navBar.classList.toggle('show');
        
});