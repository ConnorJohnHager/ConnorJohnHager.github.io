"use strict"

/* File contains functions to be used for drawing the title, color scale, bookcase, books, flowers, and visualization keys */


/******** drawTitle() ************
Draws the title for the visualization after calling the appropriate svg drawing area.

Parameters:
    drawing: Defines the variable to receive an SVG drawing area

Return: Returns drawing parameter so that SVG objects appear on the website.
*********************************/
function drawTitle(drawing) {
    let titleLine1 = drawing.append("text")
        .attr("x", 450) // set to middle of the bookcase
        .attr("y", margin.top + 40)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "2.25em")
        .text("Relationship Between Bedtime Reading,");

    let titleLine2 = drawing.append("text")
        .attr("x", 450) // set to middle of the bookcase
        .attr("y", margin.top + 80)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "2.25em")
        .text("Sleep Quality, and Sleep Duration");

    return drawing;
}


/******** drawHypothesis() ************
Draws the hypothesis for the visualization after calling the appropriate svg drawing area.

Parameters:
    drawing: Defines the variable to receive an SVG drawing area

Return: Returns drawing parameter so that SVG objects appear on the website.
**************************************/
function drawHypothesis(drawing) {
    let hypothesisLine1Patt1 = drawing.append("text")
        .attr("x", margin.left) // Aligned left with bookcase
        .attr("y", svgHeight - 70) 
        .attr("text-anchor", "left")
        .attr("font-weight", "bold")
        .attr("font-size", "1.25em")
        .text("Hypothesis:")

    let hypothesisLine1Part2 = drawing.append("text")
        .attr("x", margin.left + 110) // Split to two parts to bold first part
        .attr("y", svgHeight - 70)
        .attr("text-anchor", "left")
        .attr("font-size", "1.25em")
        .text("As the amount of pages I read before bed increases, my sleep quality increases.")

    let hypothesisLine2 = drawing.append("text")
        .attr("x", margin.left) // Aligned left with bookcase
        .attr("y", svgHeight - 40)
        .attr("text-anchor", "left")
        .attr("font-size", "1.25em")
        .text("In addition, my sleep quality might decrease as my sleep duration increases.")
    
    return drawing;
}


/******** colorScale() ************
Determines the appropriate color to use for an SVG object attribute based on the value put into the function.

Parameters: 
    value: Defines the value called into the function to determine the correct color

Return: Returns a color based on the value input into the function.
*************************************/
function colorScale (value) {
    if (value == 2) {
        return "red";}
    if (value == 2.5) {
        return "orange";}
    if (value == 3) {
        return "gold";}
    if (value <= 3.5) {
        return "LimeGreen";}
    if (value <= 4) {
        return "DarkGreen";}
    
        return "blue"; //error color
}


/******** drawBookcase() ************
Draws a bookcase after calling the appropriate svg drawing area.

Parameters:
    drawing: Defines the variable to receive an SVG drawing area

Return: Returns drawing parameter so that SVG objects appear on the website.
*************************************/

function drawBookcase(drawing) {
    let bookcase = drawing.append("rect") // draws the base of the bookcase
        .attr("x", margin.left)
        .attr("y", margin.top + 125)
        .attr("width", 800) // x = {50 to 850}
        .attr("height", 600) // y = {155 to 755}
        .attr("fill", "Brown")

    let bookshelf1 = drawing.append("rect") // draws the first shelf of the bookcase
        .attr("x", margin.left + 10)
        .attr("y", margin.top + 165)
        .attr("width", 780) // x = {60 to 840}
        .attr("height", 250) // y = {195 to 445}
        .attr("fill", "DarkBrown")

    let bookshelf2 = drawing.append("rect") // draws the second shelf of the bookcase
        .attr("x", margin.left + 10)
        .attr("y", 465)
        .attr("width", 780) // x = {60 to 840}
        .attr("height", 250) // y = {465 to 715}
        .attr("fill", "DarkBrown")

return drawing;
}


/******** drawBook() ************
Draws a rectangle to represent a book based on submitted parameter values that 
determine where to start building the rectangle, how wide and how tall the rectangle
should be, and what color should fill the rectangle. 

Parameters: 
    drawing: Defines the variable to receive an SVG drawing area
    bookX: Defines the x-value of the book's origin point
    bookY: Defines the y-value of the book's origin point
    bookWidth: Defines the width of the book
    bookHeight: Defines the height of the book
    bookColor: Defines the color of the book

Return: Returns drawing parameter so that SVG objects appear on the website.
*************************************/

function drawBook(drawing, bookX, bookY, bookWidth, bookHeight, bookColor) {
    let book = drawing.append("rect")
        .attr("x", bookX)
        .attr("y", bookY - bookHeight)
        .attr("width", bookWidth)
        .attr("height", bookHeight)
        .attr("fill", bookColor)
        .attr("stroke", "black")

    return drawing;
}


/******** drawFlower() ************
Draws a bunch of SVG objects to represent a flower based on submitted parameter values that 
determine how tall the flower is and what color should fill the SVG objects that represent the petals.

Parameters: 
    drawing: Defines the variable to receive an SVG drawing area
    flowerX: Defines the x-value used to flower's origin point
    flowerY: Defines the y-value of the flower's origin point
    flowerHeight: Defines the height of the flower
    flowerColor: Defines the color of the flower petals

Return: Returns drawing parameter so that SVG objects appear on the website.
*************************************/

function drawFlower(drawing, flowerX, flowerY, flowerHeight, flowerColor) { // width needs to be 45
    let flowerStem = drawing.append("rect")
        .attr("x", flowerX + 15)
        .attr("y", flowerY - flowerHeight + 1) // so the top of the stem hides behind the top of the flower
        .attr("width", 5)
        .attr("height", flowerHeight - 1) // -1 to account for the shift to the stem
        .attr("fill", "LightGreen")

    let flowerWater = drawing.append("rect")
        .attr("x", flowerX + 5)
        .attr("y", flowerY - 60)
        .attr("width", 25)
        .attr("height", 60)
        .attr("fill", "Blue")
        .attr("opacity", 0.5)

    let flowerPot = drawing.append("rect")
        .attr("x", flowerX + 5)
        .attr("y", flowerY - 60)
        .attr("width", 25)
        .attr("height", 60)
        .attr("fill", "none")
        .attr("stroke", "White")

    let flowerRoundedBase = drawing.append("circle")
        .attr("cx", flowerX + 17.5)
        .attr("cy", flowerY - flowerHeight + 15)
        .attr("r", 12)
        .attr("fill", flowerColor)

    let flowerRectBody = drawing.append("rect")
        .attr("x", flowerX + 5.5)
        .attr("y", flowerY - flowerHeight + 3)
        .attr("width", 24)
        .attr("height", 12)
        .attr("fill", flowerColor)

    let flowerOvalTop = drawing.append("ellipse")
        .attr("cx", flowerX + 17.5)
        .attr("cy", flowerY - flowerHeight + 3)
        .attr("rx", 12)
        .attr("ry", 3)
        .attr("fill", flowerColor)

    let flowerOvalShade = drawing.append("ellipse")
        .attr("cx", flowerX + 17.5)
        .attr("cy", flowerY - flowerHeight + 3)
        .attr("rx", 11)
        .attr("ry", 2)
        .attr("fill", "Black")
        .attr("opacity", 0.5)

    return drawing;
}


/******** drawColorKey() ************
Draws a the visualization key for color after calling the appropriate svg drawing area.

Parameters: 
    drawing: Defines the variable to receive an SVG drawing area 

Return: Returns drawing parameter so that SVG objects appear on the website.
*************************************/

function drawColorKey(drawing) {
    let colorKeyOutline = drawing.append("rect")
        .attr("x", 900)
        .attr("y", margin.top)
        .attr("width", 250) // x = {900 to 1150}
        .attr("height", 220) // y = {30 to 250}
        .attr("fill", "none")
        .attr("stroke", "black")

    let colorKeyTitle = drawing.append("text")
        .attr("x", (900 + 1150) / 2) // set to middle of the box
        .attr("y", margin.top + 40)
        .attr("text-anchor", "middle")
        .attr("font-size", "2em")
        .text("Sleep Quality");

    let colorArray = ["DarkGreen", "LimeGreen", "Gold", "Orange", "Red"]

    for (let i = 0; i < 5; i ++) {
        let colorKeySquare = drawing.append("rect")
            .attr("x", 975)
            .attr("y", margin.top + 58 + (i * 30))
            .attr("width", 30)
            .attr("height", 30)
            .attr("fill", colorArray[i])

        let colorKeyText = drawing.append("text")
            .attr("x", 1050)
            .attr("y", margin.top + 80 + (i * 30))
            .attr("text-anchor", "middle")
            .attr("font-size", "1.5em")

            .text(5 - i);
    }

    return drawing;
}


/******** drawHeightKey() ************
Draws a the visualization key for height after calling the appropriate svg drawing area.

Parameters: 
    drawing: Defines the variable to receive an SVG drawing area 

Return: Returns drawing parameter so that SVG objects appear on the website.
*************************************/

function drawHeightKey(drawing) {
    let sleepKeyOutline = drawing.append("rect")
        .attr("x", 900)
        .attr("y", 260)
        .attr("width", 250) // x = {900 to 1150}
        .attr("height", 375) // y = {260 to 635}
        .attr("fill", "none")
        .attr("stroke", "black")

    let sleepKeyTitle = drawing.append("text")
        .attr("x", (900 + 1150) / 2) // set to middle of the box
        .attr("y", 300)
        .attr("text-anchor", "middle")
        .attr("font-size", "2em")
        .text("Sleep Duration");

    let sleepKeySubtitle = drawing.append("text")
        .attr("x", (900 + 1150) / 2) // set to middle of the box
        .attr("y", 325)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("(In Hours)");

    drawFlower(drawing, 920, 595, 87, "black")

    let sleepKeyBlock1 = drawing.append("rect")
        .attr("x", 960)
        .attr("y", 595 - 87) // account for height
        .attr("width", 30)
        .attr("height", 87)
        .attr("fill", "black")

    let sleepKeyText1 = drawing.append("text")
        .attr("x", 955)
        .attr("y", 620)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("5");

    let sleepKeyBlock2 = drawing.append("rect")
        .attr("x", 1017)
        .attr("y", 595 - ((250 + 87) / 2)) // middle height of the other two blocks & account for height
        .attr("width", 30)
        .attr("height", (250 + 87) / 2)
        .attr("fill", "black")

    let sleepKeyText2 = drawing.append("text")
        .attr("x", 1032)
        .attr("y", 620)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("7.5");

    let sleepKeyBlock3 = drawing.append("rect")
        .attr("x", 1085)
        .attr("y", 595 - 250) // account for height
        .attr("width", 30)
        .attr("height", 250)
        .attr("fill", "black")

    let sleepKeyText3 = drawing.append("text")
        .attr("x", 1100)
        .attr("y", 620)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("10");

    return drawing;
}


/******** drawWidthKey() ************
Draws a the visualization key for width after calling the appropriate svg drawing area.

Parameters: 
    drawing: Defines the variable to receive an SVG drawing area 

Return: Returns drawing parameter so that SVG objects appear on the website.
*************************************/

function drawWidthKey(drawing) {
    let pagesKeyOutline = drawing.append("rect")
        .attr("x", 900)
        .attr("y", 645)
        .attr("width", 250) // x = {950 to 1150}
        .attr("height", 250) // y = {645 to 895}
        .attr("fill", "none")
        .attr("stroke", "black")

    let pagesKeyTitle = drawing.append("text")
        .attr("x", (900 + 1150) / 2) // set to middle of the box
        .attr("y", 685)
        .attr("text-anchor", "middle")
        .attr("font-size", "2em")
        .text("# of Pages Read");

    drawFlower(drawing, 910, 815, 87, "black")

    let pagesKeyTextFlower = drawing.append("text")
        .attr("x", 927)
        .attr("y", 850)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("0");

    let pagesKeyBlock1 = drawing.append("rect")
        .attr("x", 960)
        .attr("y", 815 - 87) // account for height
        .attr("width", 20)
        .attr("height", 87)
        .attr("fill", "black")

    let pagesKeyText1 = drawing.append("text")
        .attr("x", 970)
        .attr("y", 850)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("10");

    let pagesKeyBlock2 = drawing.append("rect")
        .attr("x", 1000)
        .attr("y", 815 - 87) // account for height
        .attr("width", 40)
        .attr("height", 87)
        .attr("fill", "black")
    
    let pagesKeyText2 = drawing.append("text")
        .attr("x", 1020)
        .attr("y", 850)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("20");

    let pagesKeyBlock3 = drawing.append("rect")
        .attr("x", 1060)
        .attr("y", 815 - 87) // account for height
        .attr("width", 80)
        .attr("height", 87)
        .attr("fill", "black")

    let pagesKeyText3 = drawing.append("text")
        .attr("x", 1100)
        .attr("y", 850)
        .attr("text-anchor", "middle")
        .attr("font-size", "1.25em")
        .text("40");
    
    return drawing;
}