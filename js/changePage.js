import { input, content, handleInput, adjustFontSize } from "./main.js"

const toggleButton = document.getElementById("toggle-button");
let page = 1;

toggleButton.addEventListener('click', () => {
    // If we're in the first page, change it to the page two, and vice versa
    (page === 1) ? loadPageTwo() : loadPageOne();
});

// Change the background color, the input value and the content

const almostWhite = "#f5f5f5";
const thatGreen = "#8acd00";

function handleInputTwo(event) {
    content.textContent = event.target.value;
}

function loadPageOne() {
    document.body.style.backgroundColor = almostWhite;
    toggleButton.style.backgroundColor = thatGreen;
    content.classList.toggle("content-centered");

    input.removeEventListener("input", handleInputTwo)
    input.addEventListener("input", handleInput)

    input.removeAttribute('maxlength');
    input.value = "this is a brat generator project"
    content.textContent = input.value;
    adjustFontSize();

    page = 1;
}

function loadPageTwo() {
    document.body.style.backgroundColor = thatGreen;
    toggleButton.style.backgroundColor = almostWhite;
    content.classList.toggle("content-centered");
    content.style.fontSize = "68px";

    input.removeEventListener("input", handleInput)
    input.addEventListener("input", handleInputTwo)

    input.maxLength = 20;
    input.value = "brat"
    content.textContent = input.value;

    page = 2;
}
