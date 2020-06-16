function convertFahrenheitToCelsius() {
  if (document.getElementById("fahrenheitBox").value == '') {
    document.getElementById("celsiusBox").value = '';
  } else {
    let fahrenheitValue = document.getElementById("fahrenheitBox").value;
    let celsiusValue = (fahrenheitValue - 32) * (5 / 9);
    celsiusValue = Math.round(celsiusValue * 100) / 100;
    document.getElementById("celsiusBox").value = celsiusValue;
  }
}

function convertCelsiusToFahrenheit() {
  if (document.getElementById("celsiusBox").value == '') {
    document.getElementById("fahrenheitBox").value = '';
  } else {
    let celsiusValue = document.getElementById("celsiusBox").value;
    let fahrenheitValue = celsiusValue * (9 / 5) + 32;
    fahrenheitValue = Math.round(fahrenheitValue * 100) / 100;
    document.getElementById("fahrenheitBox").value = fahrenheitValue;
  }
}
