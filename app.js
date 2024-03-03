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
  function displayText() {
    // Get the element where you want to display the text
    var displayArea = document.getElementById("displayArea");
    // Change the text content of the element
    displayArea.textContent = "JavaScript is a versatile programming language primarily used for web development. It enables the creation of interactive and dynamic content on web pages. JavaScript runs on the client-side, executing in users' web browsers, and interacts with the Document Object Model (DOM) to manipulate web page elements.JavaScript can also be used for server-side development, making it a key technology in full-stack web development.";
  }
  function displayText1() {
    var displayArea = document.getElementById("displayArea1");
    displayArea1.innerHTML ="$3*234/#23";
  }
//onmouseout function implementation
function playText() {
    // Get the element where you want to display the text
    var displayAreas = document.getElementById("displayAreas");
    
    // Change the text content of the element
    displayAreas.innerHTML = "JavaScript is a versatile programming language primarily used for web development. It enables the creation of interactive and dynamic content on web pages. JavaScript runs on the client-side, executing in users' web browsers, and interacts with the Document Object Model (DOM) to manipulate web page elements. JavaScript can also be used for server-side development, making it a key technology in full-stack web development.";
  }

  function cleanText() {
    // Get the element where you want to display the text
    var displayArea = document.getElementById("displayArea1");
    displayArea.innerHTML="*********"
}

function clearText() {
    var displayAreas = document.getElementById("displayArea");
    displayAreas.innerHTML=""
}





//onkeydown function implementation