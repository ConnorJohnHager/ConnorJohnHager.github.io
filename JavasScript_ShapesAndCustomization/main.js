"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice, finColor, tailShape;

function processForm() {
    /* Get data from the form */
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);
    
    //finColor default is gold.
    finColor = document.getElementById("finColor").value;
 
    //tailShape default is triangleTail.
    tailShape = document.getElementById("tailShape").value;

    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();
}

/* set up the drawing canvas - Be sure not to copy this code from your draft project! */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/*
The function below is called when the user presses the "Draw!" button and is where you will put most of your drawing code. Please follow the instructions in the homework PDF for this step.
*/

function drawImage() {

    /* All points are relative to the center coordinates (fishX, fishY)
    of the fish's circular base called fishBodyCircle */
    let fishX = xInput;
    let fishY = yInput;

    let fishBodyCircle = drawing.append("circle")
        .attr("cx", fishX)
        .attr("cy", fishY)
        .attr("r", 50)
        .attr("fill", "MediumSlateBlue")

    let fishBodyMiddle = drawing.append("rect")
        .attr("x", fishX)
        .attr("y", fishY - 50)
        .attr("width", 50)
        .attr("height", 100)
        .attr("fill", "MediumSlateBlue")

    let fishHead = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX + 50, fishY - 50,
            fishX + 50, fishY + 50,
            fishX + 150, fishY))
        .attr("fill", "MediumSlateBlue")

    // fishBlueScales numbered left to right, starting with 1 and ending with 3
    let fishBlueScale1 = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX - 50, fishY,
            fishX, fishY - 25,
            fishX, fishY + 25))
        .attr("fill", "MediumBlue")

    let fishBlueScale2 = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX + 50, fishY,
            fishX, fishY - 25,
            fishX, fishY + 25))
        .attr("fill", "MediumBlue")

    let fishBlueScale3 = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX + 50, fishY,
            fishX + 100, fishY - 25,
            fishX + 100, fishY + 25))
        .attr("fill", "MediumBlue")

    let fishYellowScaleTop = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX + 50, fishY,
            fishX, fishY - 25,
            fishX + 50, fishY - 50))
        .attr("fill", "Yellow")

    let fishYellowScaleBottom = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX + 50, fishY,
            fishX, fishY + 25,
            fishX + 50, fishY + 50))
        .attr("fill", "Yellow")

    let fishEye = drawing.append("circle")
        .attr("cx", fishX + 115)
        .attr("cy", fishY - 5)
        .attr("r", 5)
        .attr("fill", "Black")

    let fishFinTop = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX - 5, fishY - 50,
            fishX + 50, fishY - 50,
            fishX - 40, fishY - 95))
        .attr("fill", finColor)

    let fishFinBottom = drawing.append("polyline")
        .attr("points", closedPolygon(
            fishX - 10, fishY + 75,
            fishX - 5, fishY + 50,
            fishX + 50, fishY + 50))
        .attr("fill", finColor)

    /*The tail's default is the triangle tail. When someone selects the rounded tail, 
    an ellispe's is added to the end of the triangle to give it a rounded edge. When
    someone selects the forked tail, the triangle tail is replaced by two smaller triangles
    that only connect at the base of the fish's body and do not touch otherwise. When
    someone selects the fancy tail, ten small circles are added to the end of the triangle,
    making the tail look like a fancy dress that would be worn in a ballroom.*/

    // The code for drawing the triangle tail (default) if selected.
    if (tailShape == "triangleTail") {
        let fishTailTriangle = drawing.append("polyline")
            .attr("points", closedPolygon(
                fishX - 110, fishY - 50,
                fishX - 110, fishY + 50,
                fishX - 50, fishY))
            .attr("fill", finColor)
    }

    // The code for drawing the rounded tail if selected.
    if (tailShape == "roundedTail") {
        let fishTailTriangle = drawing.append("polyline")
            .attr("points", closedPolygon(
                fishX - 110, fishY - 50,
                fishX - 110, fishY + 50,
                fishX - 50, fishY))
            .attr("fill", finColor)

        let fishTailRounded = drawing.append("ellipse")
            .attr("cx", fishX - 111)
            .attr("cy", fishY)
            .attr("rx", 10)
            .attr("ry", 50)
            .attr("fill", finColor)
    }

    // The code for drawing the forked tail if selected.
    if (tailShape == "forkedTail") {
        let fishTailForkTop = drawing.append("polyline")
            .attr("points", closedPolygon(
                fishX - 110, fishY - 50,
                fishX - 110, fishY - 15,
                fishX - 50, fishY))
            .attr("fill", finColor)

        let fishTailForkBottom = drawing.append("polyline")
            .attr("points", closedPolygon(
                fishX - 110, fishY + 15,
                fishX - 110, fishY + 50,
                fishX - 50, fishY))
            .attr("fill", finColor)
    }

    // The code for drawing the fancy tail if selected.
    if (tailShape == "fancyTail") {
        let fishTailTriangle = drawing.append("polyline")
            .attr("points", closedPolygon(
                fishX - 110, fishY - 50,
                fishX - 110, fishY + 50,
                fishX - 50, fishY))
            .attr("fill", finColor)

        // fishTailFancyBubble numbered from top to bottom, starting with 1 and ending with 10.
        let fishTailFancyBubble1 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY - 45)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble2 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY - 35)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble3 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY - 25)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble4 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY - 15)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble5 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY - 5)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble6 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY + 5)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble7 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY + 15)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble8 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY + 25)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble9 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY + 35)
            .attr("r", 5)
            .attr("fill", finColor)

        let fishTailFancyBubble10 = drawing.append("circle")
            .attr("cx", fishX - 110)
            .attr("cy", fishY + 45)
            .attr("r", 5)
            .attr("fill", finColor)
    }

    /***** DO NOT ADD OR EDIT ANYTHING BELOW THIS LINE ******/
}