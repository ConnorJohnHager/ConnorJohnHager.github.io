/*
Author: Connor Hager
Date: November 15, 2023
File Name: script.js
*/

// Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}