const input = document.querySelector(".textInput");
const content = document.querySelector(".content");

content.textContent = input.value;
const contentStyles = window.getComputedStyle(content);
const originalFontSize = contentStyles.getPropertyValue("font-size");

const decrement = 15;

input.addEventListener("input", (event) => {
	content.textContent = event.target.value;

	if (content.textContent.length < 35) {
		content.style.fontSize = originalFontSize;
	}

	if (content.scrollHeight > content.clientHeight) {
		adjustFontSize();
	}
});

function adjustFontSize() {
	let fontSize = parseInt(contentStyles.getPropertyValue("font-size"));
	let newFontSize = fontSize - decrement;
	content.style.fontSize = newFontSize + "px";
}
