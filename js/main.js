const input = document.querySelector(".text-input");
// Where the text is displayed
const content = document.querySelector(".content");

content.textContent = input.value;
const originalFontSize = window.getComputedStyle(content).getPropertyValue("font-size");

function handleInput(event) {
	content.textContent = event.target.value;

	adjustFontSize();
}

input.addEventListener("input", handleInput);

function adjustFontSize() {
	if (content.textContent.length < 35) {
		content.style.fontSize = originalFontSize;
	}

	// While the text overflows vertically or horizontally
	while (
		content.scrollHeight > content.clientHeight ||
		content.scrollWidth > content.clientWidth
	) {
		// Decrease the font size in 1 pixel
		let fontSize = parseFloat(window.getComputedStyle(content).getPropertyValue("font-size"))
		fontSize--;
		content.style.fontSize = fontSize + "px";
	}
}

adjustFontSize();

export { input, content, handleInput, adjustFontSize };
