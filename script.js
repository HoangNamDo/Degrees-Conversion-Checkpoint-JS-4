let fahrenheit = document.getElementById("fahrenheitBox");
let celsius = document.getElementById("celsiusBox");

fahrenheitBox.addEventListener("change", convertFahrenheitToCelsius);
celsiusBox.addEventListener("change", convertCelsiusToFahrenheit);

fahrenheitBox.addEventListener("keyup", convertFahrenheitToCelsius);
celsiusBox.addEventListener("keyup", convertCelsiusToFahrenheit);

function convertFahrenheitToCelsius() {
  if (fahrenheit.value == "") {
    celsius.value = "";
  } else {
    celsius.value = (fahrenheit.value - 32) * (5 / 9);
    celsius.value = celsius.value.toFixed(2);
  }
}

function convertCelsiusToFahrenheit() {
  if (celsius.value == "") {
    fahrenheit.value = "";
  } else {
    fahrenheit.value = celsius.value * (9 / 5) + 32;
    fahrenheit.value = fahrenheit.value.toFixed(2);
  }
}
