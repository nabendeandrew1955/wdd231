const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');
const closeButton = document.querySelector('#closeButton');
const dialogBox = document.querySelector('#dialogBox');
const dialogBoxText = document.querySelector('#dialogBox div');

// show the dialog opens the dialog modally
openButton1.addEventListener('click', () => {
    dialogBoxText.textContent = 'Apples are red.';
    dialogBox.showModal();
});

openButton2.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'Bananas are yellow.';
    dialogBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxText.innerHTML = 'Grapes are purple.';
    dialogBox.showModal();
});

// close the dialog closes the dialog
closeButton.addEventListener('click', () => {
    dialogBox.close();
});
