function darkMode() {
    document.getElementById("article_header").classList.remove("w3-light-grey");
    document.getElementById("article_header").classList.add("w3-black");
    document.getElementById("article_header").classList.add("w3-text-grey");

    document.getElementById("article_options").classList.remove("w3-dark-grey");
    document.getElementById("article_options").classList.add("w3-black");

    document.getElementById("article_text").classList.remove("w3-text-dark-grey");
    document.getElementById("article_text").classList.add("w3-black");
    document.getElementById("article_text").classList.add("w3-text-grey");
}

function fontSizePlus() {
    var element = document.getElementById("article_text");
    var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var size = parseFloat(style); 
    element.style.fontSize = (size + 1) + 'px';
}

function fontSizeMinus() {
    var element = document.getElementById("article_text");
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
    } 
    else { 
      x.className = x.className.replace(" w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme-d3", "");
    }
}

function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("article");

    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}