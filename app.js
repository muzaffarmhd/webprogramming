//onchange function implementation
function changeoption() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("change-description").innerHTML =  x ;
}

//onclick function implementation
// JavaScript code
document.getElementById("myButton").onclick = function() {
    var value = "HTML (Hypertext Markup Language): HTML is the standard markup language used to create and design web pages. It provides the structure and content of a webpage, defining elements such as headings, paragraphs, links, images, and more.";
    document.getElementById("displayValue").textContent = value;
  };
  document.getElementById("myButton1").onclick = function() {
    var value = "CSS (Cascading Style Sheets): CSS is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, design, and appearance of web pages, including aspects such as colors, fonts, spacing, and positioning";
    document.getElementById("displayValue1").textContent = value;
  };document.getElementById("myButton2").onclick = function() {
    var value = "JavaScript: JavaScript is a high-level programming language commonly used for creating interactive and dynamic behavior in web pages. It enables developers to manipulate the content and behavior of HTML elements, handle events, perform calculations, and communicate with servers, among other functionalities.";
    document.getElementById("displayValue2").textContent = value;
  };

  


//onmouseover function implementation



//onmouseout function implementation



//onkeydown function implementation