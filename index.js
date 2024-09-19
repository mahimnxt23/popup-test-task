document.addEventListener("DOMContentLoaded", function () {
	let popupDisplayed = false;

	window.addEventListener("scroll", function () {
		if (window.scrollY > 35 && !popupDisplayed) {
			popupDisplayed = true;
			setTimeout(showPopup, 2000);
		}
	});
});

function showPopup() {
	var popup = document.getElementById("popup");
	popup.style.display = "block";
	document.body.style.overflow = "hidden"; // Preventing user scrolling
}

document.querySelector(".close-btn").addEventListener("click", function () {
	var popup = document.getElementById("popup");
	popup.style.display = "none";
	document.body.style.overflow = "auto"; // Re-enabling user scrolling
});
