/*
	Student Name: Connor Hager
	File Name: script.js
*/ 

// Hamburger menu function
function hamburger() {
    let navlinks = document.getElementById("nav-links");
    let menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#00A5CF"; 
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#00A5CF"; 
    }
}

// Interest form function
function interestForm() {
    document.getElementById("interestForm").addEventListener("submit", function(event) {
        let emailInput = document.getElementById("email");
        
        if (!isValidEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });

    function isValidEmail(email) {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}