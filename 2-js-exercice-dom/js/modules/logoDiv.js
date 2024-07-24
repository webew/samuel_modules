export default function logoDiv() {
	const logoDiv = document.createElement("div");
	logoDiv.classList.add("logo");
	const logoImg = document.createElement("img");
	logoImg.setAttribute("src", "images/logo.svg");
	logoDiv.appendChild(logoImg);
	return logoDiv;
}
