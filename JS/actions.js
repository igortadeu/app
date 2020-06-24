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
    // document.getElementById("sidebar").style.width = "20%";
    document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("sidebar").style.display = "none";
}