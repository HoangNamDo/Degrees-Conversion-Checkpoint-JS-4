function convert(degree) {
  let num;
  if (degree == "fahrenheitBox") {
    num = (document.getElementById("fahrenheitBox").value - 32) * (5 / 9);
    document.getElementById("celsiusBox").value = Math.round(num * 100) / 100;
    if (document.getElementById("fahrenheitBox").value == '') {
      document.getElementById("celsiusBox").value = '';
    }
  }
  else {
    num = (document.getElementById("celsiusBox").value * (9 / 5)) + 32;
    document.getElementById("fahrenheitBox").value = Math.round(num * 100) / 100;
    if (document.getElementById("celsiusBox").value == '') {
      document.getElementById("fahrenheitBox").value = '';
    }
  }
}