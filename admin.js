SetColor(localStorage.getItem("mainColor") || "papayawhip");

SetFont(localStorage.getItem("mainFont") || '"Times New Roman", Times, serif');

function getColorElement(color){
    return document.getElementById("color-" + color);

}


function getFontElement(font){
    return document.getElementById("font-" + font);

}

getColorElement("papayawhip").addEventListener ("click", () => {
    localStorage.setItem("mainColor", "papayawhip");
    SetColor(localStorage.getItem("mainColor") || "papayawhip");
});

getColorElement("peachpuff").addEventListener("click", () => {
    localStorage.setItem("mainColor", "peachpuff");
    SetColor(localStorage.getItem("mainColor") || "papayawhip");
});

getColorElement("white").addEventListener("click", () => {
    localStorage.setItem("mainColor", "white");
    SetColor(localStorage.getItem("mainColor") || "papayawhip");
});


getFontElement("serif").addEventListener("click", () => {
    localStorage.setItem("mainFont", '"Times New Roman", Times, serif');
    SetFont(localStorage.getItem("mainFont") || '"Times New Roman", Times, serif');
});

getFontElement("cursive").addEventListener("click", () => {
    localStorage.setItem("mainFont", "Arial, Helvetica, sans-serif");
    SetFont(localStorage.getItem("mainFont") || "'Brush Script MT', cursive");
});

getFontElement("monospace").addEventListener("click", () => {
    localStorage.setItem("mainFont", "'Courier New' , monospace");
    SetFont(localStorage.getItem("mainFont") || "'Brush Script MT', cursive");
});