const input = document.querySelector(".textInput");
// Where the text is displayed
const content = document.querySelector(".content");

content.textContent = input.value;
const originalFontSize = window.getComputedStyle(content).getPropertyValue("font-size");

input.addEventListener("input", (event) => {
	content.textContent = event.target.value;

	if (content.textContent.length < 35) {
		content.style.fontSize = originalFontSize;
	}

	// If the text overflows, adjust the font size
	adjustFontSize();
});

function adjustFontSize() {
	// While it overflows vertically or horizontally
	while (content.scrollHeight > content.clientHeight || content.scrollWidth > content.clientWidth) {
		// Decrease the font size in 1 pixel
		let fontSize = parseFloat(window.getComputedStyle(content).getPropertyValue("font-size"));
		fontSize--;
		content.style.fontSize = fontSize + "px";
	}
}

adjustFontSize();
