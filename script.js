// function covertDegree {
    // let fahrenheitInput = document.getElementById(fahrenheitInput).value;
    // console(fahrenheitInput);
// }

var fahrenheit = document.getElementById(fahrenheitInput).value;

document.getElementById(fahrenheitInput).value = toCelsius(fahrenheit);




function toCelsius(f) {
    return (5 / 9) * (f - 32);
}