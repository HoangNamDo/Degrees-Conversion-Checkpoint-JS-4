fahrenheitPlaceholder.addEventListener("onkeyup", fahrenheitToCelsius("fahrenheitPlaceholder", "celsiusPlaceholder"));
celsiusPlaceholder.addEventListener("onkeyup", celsiusToFahrenheit("celsiusPlaceholder", "fahrenheitPlaceholder"));

function fahrenheitToCelsius(sourceElementId, destinationElementId) {
    if (document.getElementById("sourceElementId").value == "") {
        document.getElementById("destinationElementId").value = "";
    } else {
        let fahrenheitValue = document.getElementById(sourceElementId).value;
        celsiusValue = (5 / 9) * (fahrenheitValue - 32);
        document.getElementById(destinationElementId).value = celsiusValue;
    }
}

function celsiusToFahrenheit(sourceElementId, destinationElementId) {
    if (document.getElementById("sourceElementId").value == "") {
        document.getElementById("destinationElementId").value = "";
    } else {
        let celsiusValue = document.getElementById(sourceElementId).value;
        fahrenheitValue = celsiusValue * (9 / 5) + 32;
        document.getElementById(destinationElementId).value = fahrenheitValue;
    }
}