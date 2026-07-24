const openButton1 = document.querySelector("#openButton1");
const openButton2 = document.querySelector("#openButton2");
const openButton3 = document.querySelector("#openButton3");

const dialogBox = document.querySelector("#dialogBox");
const dialogBoxText = document.querySelector("#dialogBox div");
const closeButton = document.querySelector("#closeButton");

// "show the dialog" button opens the dialog modally

openButton1.addEventListener("click", () => {
    dialogBoxText.innerHTML = "An Apple has 95 calories"
    dialogBox.show();
});

openButton2.addEventListener("click", () => {
    dialogBoxText.innerHTML = "An Apple has 45 calories"
    dialogBox.show();
});

openButton3.addEventListener("click", () => {
    dialogBoxText.innerHTML = "An Apple has 105 calories"
    dialogBox.show();
});



// "close" button closes the dialog

closeButton.addEventListener("click", () => {
    dialogBox.close();
});