const display = document.getElementById("Display");
let resultShown = false; 

function appendToDisplay(input){
    if (resultShown){
                display.value = "";
                resultShown = false;
    }
    display.value += input;
}

function clearDisplay(){
display.value = "";
resultShown = false;
}
function backSpace(){
display.value = display.value.slice(0, -1);
}

function percentage(){
    if (display.value === "" || isNaN(display.value));
        return display.value = parseFloat(display.value) / 100;
    resultShown = true;
}

function calculate(){
try{
    display.value = eval(display.value);
    resultShown = true;
}
catch(error){
    display.value = "Error syntax";
    resultShown = false;
}
}


// Keyboard listener
document.addEventListener("keydown", function(event) {
    let key = event.key
    if (key>= "0" && key <= "9") appendToDisplay(key);
    else if (key === "+") appendToDisplay ("+");
    else if (key === "-") appendToDisplay ("-");
    else if (key === "/") appendToDisplay ("/");
    else if (key === "*") appendToDisplay ("*");
    else if (key === ".") appendToDisplay (".");
    else if (key === "%") percentage ();
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();}
    else if (key === "Backspace") backSpace ();
    else if (key === "Escape") clearDisplay ();
});
