let fahrenheit = document.getElementById("fahrenheitBox");
let celsius = document.getElementById("celsiusBox");

fahrenheit.addEventListener("change", convertFahrenheitToCelsius);
celsius.addEventListener("change", convertCelsiusToFahrenheit);

fahrenheit.addEventListener("keyup", convertFahrenheitToCelsius);
celsius.addEventListener("keyup", convertCelsiusToFahrenheit);

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