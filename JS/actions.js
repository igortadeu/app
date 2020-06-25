function darkMode() {
    document.getElementById("article-header").classList.remove("w3-light-grey");
    document.getElementById("article-header").classList.add("w3-black");
    document.getElementById("article-header").classList.add("w3-text-grey");

    document.getElementById("article-options").classList.remove("w3-dark-grey");
    document.getElementById("article-options").classList.add("w3-black");

    document.getElementById("article-text").classList.remove("w3-text-dark-grey");
    document.getElementById("article-text").classList.add("w3-black");
    document.getElementById("article-text").classList.add("w3-text-grey");
}

function fontSizePlus() {
    var element = document.getElementById("article-text");
    var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var size = parseFloat(style); 
    element.style.fontSize = (size + 1) + 'px';
}

function fontSizeMinus() {
    var element = document.getElementById("article-text");
    var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var size = parseFloat(style); 
    element.style.fontSize = (size - 1) + 'px';
}

function w3_open() {
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}

function showAccordion() {
    var x = document.getElementById("accordion_topics");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme-d3";
    } else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme-d3", "");
    }
}