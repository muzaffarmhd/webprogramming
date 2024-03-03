//onchange function implementation
function changeoption() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("change-description").innerHTML =  x ;
}

//onclick function implementation
// JavaScript code
document.getElementById("myButton").onclick = function() {
    var displayElement = document.getElementById("displayValue");
    if (displayElement.textContent === "") {
        var value = "Bootstrap is a popular front-end framework for building responsive and mobile-first websites and web applications. It provides pre-designed templates, CSS and JavaScript components, and utilities that help developers quickly create consistent and visually appealing user interfaces. Bootstrap simplifies the process of creating responsive layouts, styling elements, and implementing interactive components, making web development more efficient and accessible.";
        displayElement.textContent = value;
    } else {
        displayElement.textContent = "";
    }
};

document.getElementById("myButton1").onclick = function() {
    alert("Not authorized");
};
    // var displayElement1 = document.getElementById("displayValue1");
    // if (displayElement1.textContent === "") {
    //     var value = "CSS (Cascading Style Sheets): CSS is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, design, and appearance of web pages, including aspects such as colors, fonts, spacing, and positioning";
    //     displayElement1.textContent = value;
    // } else {
    //     displayElement1.textContent = "";
    // }




  


//onmouseover function implementation



//onmouseout function implementation



//onkeydown function implementation