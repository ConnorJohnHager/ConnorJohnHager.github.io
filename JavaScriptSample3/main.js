"use strict"

/* 
Note About References:

Project #1 and Lab #5 were my biggest reference points for this project, specifically for determining
the necessary attributes for drawing, setting up parameters, describing functions, the event listening button, 
and calling a separate javascript file for other drawing functions. Lab #8 was then my final reference for remaining
needs like for loops, creating scales, centering the visualization, and calling specific data values. 
*/


let svgWidth = 1200
let svgHeight = 900

let margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 50}

// Resize div to match width of visualization (brought from Lab #8)
d3.select("#container")
    .style("width", String(svgWidth) + "px");

// Create drawing canvas
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)


// Global variables
let data, // my dataset
sortedData, // data set after sorting
widthScale, // used to call the scaling for width when used to draw SVG objects
heightScale, // used to call the scaling for height when used to draw SVG objects
xFirstShelfLocation, // used to store the x-value for where the next data entry should begin drawing its SVG objects on the first shelf
xSecondShelfLocation // used to store the x-value for where the next data entry should begin drawing its SVG objects on the second shelf


// Scale for number of pages read, determining width of books
widthScale = d3.scaleLinear()
    .domain([0, 40])
    .range([0, 80])

// Scale for number of minutes slept, determining height of books and flowers
heightScale = d3.scaleLinear()
    .domain([300, 600]) 
    .range([87, 250]); // 87 is the minimum number of pixels needd for the flower, 250 is the height of each shelf


(async function () {
    data = await d3.json("data.json").then(buildVisualization)
})();


// Button for determining how to sort data (adapted from Project #1)
document.getElementById("action").addEventListener("click", processSort);


/**** function processSort() *****
Checks the selected sort type and then sort the data appropriately, ultimately redrawing the visualization with the new sorted data.

Parameters: None

Return: Returns -1 or 1 for each data comparison in order to sort the data by the desired method.
**********************************/
function processSort() {
    let desiredSort = document.getElementById("sortBy").value;

    if (desiredSort == "none") { // Displays original data order
        sortedData = data;
    }

    if (desiredSort == "sleepQualityDown") { // highest to lowest
        sortedData = data.toSorted(function (a, b) {
            if (a.sleepQuality > b.sleepQuality) {
                return -1
            }
            return 1
        })
    }

    if (desiredSort == "sleepQualityUp") { // lowest to highest
        sortedData = data.toSorted(function (a, b) {
            if (a.sleepQuality > b.sleepQuality) {
                return 1
            }
            return -1
        })
    }

    if (desiredSort == "sleepDurationDown") { // highest to lowest
        sortedData = data.toSorted(function (a, b) {
            if (a.sleepMinutes > b.sleepMinutes) {
                return -1
            }
            return 1
        })
    }

    if (desiredSort == "sleepDurationUp") { // lowest to highest
        sortedData = data.toSorted(function (a, b) {
            if (a.sleepMinutes > b.sleepMinutes) {
                return 1
            }
            return -1
        }) 
    }

    if (desiredSort == "pagesReadDown") { // highest to lowest
        sortedData = data.toSorted(function (a, b) {
            if (a.readingPages > b.readingPages) {
                return -1
            }
            return 1
        })
    }

    if (desiredSort == "pagesReadUp") { // lowest to highest
        sortedData = data.toSorted(function (a, b) {
            if (a.readingPages > b.readingPages) {
                return 1
            }
            return -1
        })
    }

    svg.selectAll('svg>*').remove(); // Used to remove previously drawn svgs (brought from Project #1)
    buildVisualization(sortedData); // Calling function to rebuild visualization with new sort order (brought from Project #1)
}


/**** function buildVisualization() *****
Calls for both the data and svg area to be inputed into the drawVisualization function, then returns the data to make sure it's processed correctly.

Parameters:
    data: Defines the dataset being called to build the visualization

Return: Returns data to be used to draw the visualization, especially needed in order for the sorted data to show after button selection.
****************************************/
function buildVisualization(data) {
    drawVisualization(data, svg);
    return data;
}


/**** function drawVisualization() *****
Calls all svg components of my visualization and draws them based on the provided data values. 

Parameters:
    data: Defines the dataset being called to draw the visualization
    drawing: Defines the variable to receive an SVG drawing area

Return: Nothing, but does create the visualization
****************************************/
function drawVisualization(data, drawing) {
    drawBookcase(drawing); // calling drawBookcase function
    drawColorKey(drawing); // calling drawColorKey function
    drawHeightKey(drawing); // calling drawHeightKey function
    drawWidthKey(drawing); // calling drawWidthKey function
    drawTitle(drawing); // calling drawTitle function
    drawHypothesis(drawing); // calling drawHypothesis function

    xFirstShelfLocation = margin.left + 10 // sets first spot on first shelf
    xSecondShelfLocation = margin.left + 10 // sets first spot on second shelf

    for (let i = 0; i < data.length; i++) {

        let readingPages = data[i].readingPages;
        let sleepQuality = data[i].sleepQuality;
        let sleepMinutes = data[i].sleepMinutes;

        if (xFirstShelfLocation + widthScale(readingPages) <= 840 && xFirstShelfLocation + 35 <= 840) { // checks that the next drawing can fit on the first shelf

            if (readingPages > 0) {

                drawBook(
                    drawing, 
                    xFirstShelfLocation, 
                    445, 
                    widthScale(readingPages), 
                    heightScale(sleepMinutes), 
                    colorScale(sleepQuality)
                )

                xFirstShelfLocation = xFirstShelfLocation +  widthScale(readingPages); // updated to reflect next spot on first shelf
            }

            else {

                drawFlower(                    
                    drawing, 
                    xFirstShelfLocation, 
                    445,  
                    heightScale(sleepMinutes), 
                    colorScale(sleepQuality)
                )

                xFirstShelfLocation = xFirstShelfLocation + 35; // updated to reflect next spot on first shelf
            }
        }

        else if (xSecondShelfLocation + widthScale(readingPages) <= 840 && xSecondShelfLocation + 35 <= 840) { // checks that the next drawing can fit on the second shelf

            if (readingPages > 0) {

                drawBook(
                    drawing, 
                    xSecondShelfLocation, 
                    715, 
                    widthScale(readingPages), 
                    heightScale(sleepMinutes), 
                    colorScale(sleepQuality)
                    )

                xSecondShelfLocation = xSecondShelfLocation +  widthScale(readingPages); // updated to reflect next spot on second shelf
            } 
        
            else {

                drawFlower(                    
                    drawing, 
                    xSecondShelfLocation, 
                    715,  
                    heightScale(sleepMinutes), 
                    colorScale(sleepQuality)
                )

                xSecondShelfLocation = xSecondShelfLocation + 35; // updated to reflect next spot on second shelf
            }
        }
    }
}