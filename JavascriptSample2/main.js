"use strict"


let storeChoice, cardAmount, userZipCodeString, userZipCodeNumber,taxedAmount, finalCost;


document.getElementById("submit").addEventListener("click", processForm);

document.getElementById("reset").addEventListener("click", function () {
    clear();
    document.getElementById("submit").toggleAttribute("hidden");
    document.getElementById("reset").toggleAttribute("hidden");
});


function processForm() {

    storeChoice = document.getElementById("selectStore").value;
    cardAmount = Number(document.getElementById("cardAmount").value);
    userZipCodeString = document.getElementById("zipCode").value;
    userZipCodeNumber = Number(document.getElementById("zipCode").value);
        //Created ZipCodeString & ZipCodeNumber to fulfill the different string and number needs of this collected data in the rest of the form.

    let evaluationCompleted = false;

    if (validateData()) {
        evaluationCompleted = evaluateAnswers();
    }

    if (evaluationCompleted) {
        document.getElementById("submit").toggleAttribute("hidden");
        document.getElementById("reset").toggleAttribute("hidden");
    } else {
        rule();
    }
}

/******** feeMeSeymour() ************
This function is similarly named after the musical song "Feed Me Seymour" as a pun, 
and is meant to calculate whether a processing fee should be added to the user's 
purchase and to send the final output to notify the user of their final charge.

Parameters: None

Return: None
*************************************/

function feeMeSeymour() {

    //Only true for those receiving a processing fee.
    if (cardAmount < 100 && (userZipCodeNumber < 96701 || userZipCodeNumber > 96898)) {
        taxedAmount = cardAmount*.05;
        finalCost = cardAmount + taxedAmount;
        output("Your gift card for " + storeChoice + " in the amount of $" + cardAmount.toFixed(2) + " will be shipped to your address in ZIP code " 
            + userZipCodeString + ". Please note that a processing fee of $" + taxedAmount.toFixed(2) + " has been added to your purchase.")
    } 

    //Happens when the conditions are not met for a processing fee.
    else {
        output("Your gift card for " + storeChoice + " in the amount of $" + cardAmount.toFixed(2) + " will be shipped to your address in ZIP code " + userZipCodeString + ".")
    } 
}


function validateData() {
    let valid = false;

    if (cardAmount >= 1) {
        // userZipCodeNumber >= 1 is set up to make sure a negative number didn't slip through the first condition
        if (userZipCodeString.length == 5 && userZipCodeNumber >= 1) {
            valid = true
        }
        else {
            output("Please only input five numbers for your ZIP code.")
        }
    }
    else {
        output("Please only input a positive number for your desired gift card amount.")
    }

    return valid;
}


function evaluateAnswers() {
    let valid2 = false;

    /*For Wallgrinds Gift Cards*/
    if (storeChoice == "wallgrinds") {
        if (cardAmount >= 5 && cardAmount <= 500) { //checking if user is purchasing a Wallgrinds gift card with the appropriate amount
            if (cardAmount % 5 == 0) { //checking if user is purchasing a Wallgrinds gift card with an amount that is divisible by 5
                storeChoice = "Wallgrinds"
                feeMeSeymour();
                valid2 = true;
            }
            else {
                output("Sorry, Wallgrinds gift cards have to purchased in increments of $5.")
            }
        }
        else {
            output("Sorry, Wallgrinds gift cards have a minumum purchase requirement of $5 and max out at $500.")
        }
    }    

    /*For Taco Hut Gift Cards*/
    if (storeChoice == "tacoHut") {
        if (cardAmount >= 5 && cardAmount <= 500) { //checking if user is purchasing a Taco Hut gift card with the appropriate amount
            storeChoice = "Taco Hut"
            feeMeSeymour();
            valid2 = true;
        }
        else {
            output("Sorry, Taco Hut gift cards have a minumum purchase requirement of $5 and max out at $500.")
        }
    }

    /*For Sepharoah Gift Cards*/
    if (storeChoice == "sepharoah") {
        if ((userZipCodeNumber >= 1 && userZipCodeNumber <9000)||(userZipCodeNumber >= 10000 && userZipCodeNumber <34000)) { //checking if user is in appropriate ZIP code
            if (cardAmount >= 50 && cardAmount <= 1000) { //checking if user is purchasing a Sepharoah gift card with the appropriate amount
                storeChoice = "Sepharoah"
                feeMeSeymour();
                valid2 = true;
            }
            else {
                
                output("Sorry, Sepharoah gift cards has a minumum purchase requirement of $50 and max out at $1000.")
            }
        }
        else {
            output("Sorry, Sepharoah gift cards can only be ordered on the East Coast.")
        }
    }

    return valid2;
}