function convertFahrenheitToCelsius() {
  let fahrenheitValue = (document.getElementById("fahrenheitBox").value - 32) * (5 / 9);
  document.getElementById("celsiusBox").value = Math.round(fahrenheitValue * 100) / 100;
  if (document.getElementById("fahrenheitBox").value == '') {
    document.getElementById("celsiusBox").value = '';
  }
}

function convertCelsiusToFahrenheit() {
  let celsiusValue = (document.getElementById("celsiusBox").value * (9 / 5)) + 32;
  document.getElementById("fahrenheitBox").value = Math.round(celsiusValue * 100) / 100;
  if (document.getElementById("celsiusBox").value == '') {
    document.getElementById("fahrenheitBox").value = '';
  }

}

