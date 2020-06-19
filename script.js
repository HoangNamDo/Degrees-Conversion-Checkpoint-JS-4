fahrenheitBox.addEventListener("change", convertFahrenheitToCelsius);
celsiusBox.addEventListener("change", convertCelsiusToFahrenheit);

fahrenheitBox.addEventListener("keyup", convertFahrenheitToCelsius);
celsiusBox.addEventListener("keyup", convertCelsiusToFahrenheit);

function convertFahrenheitToCelsius() {
  if (document.getElementById("fahrenheitBox").value == '') {
    document.getElementById("celsiusBox").value = '';
  } else {
    let fahrenheitValue = document.getElementById("fahrenheitBox").value;
    let celsiusValue = (fahrenheitValue - 32) * (5 / 9);
    document.getElementById("celsiusBox").value = celsiusValue.toFixed(2);
  }
}

function convertCelsiusToFahrenheit() {
  if (document.getElementById("celsiusBox").value == '') {
    document.getElementById("fahrenheitBox").value = '';
  } else {
    let celsiusValue = document.getElementById("celsiusBox").value;
    let fahrenheitValue = celsiusValue * (9 / 5) + 32;
    document.getElementById("fahrenheitBox").value = fahrenheitValue.toFixed(2);
  }
}