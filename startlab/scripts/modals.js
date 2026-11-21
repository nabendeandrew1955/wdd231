const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const dialogBox = document.getElementById('dialogBox');

// show the dialog opens the dialog modally
openButton.addEventListener('click', () => {
    dialogBox.showModal();
});

// close the dialog closes the dialog
closeButton.addEventListener('click', () => {
    dialogBox.close();
});
