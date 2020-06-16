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
  let celsiusValue = (document.getElementById("celsiusBox").value * (9 / 5)) + 32;
  document.getElementById("fahrenheitBox").value = Math.round(celsiusValue * 100) / 100;
  if (document.getElementById("celsiusBox").value == '') {
    document.getElementById("fahrenheitBox").value = '';
  }

}

