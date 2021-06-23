// controller

function calcColor(min, max, val) {
  var minHue = 240,
    maxHue = 0;
  var curPercent = (val - min) / (max - min);
  var colString =
    "hsl(" + (curPercent * (maxHue - minHue) + minHue) + ",100%,50%)";
  console.log(colString);
  return colString;
}

function addBar(val) {
  parsed = parseInt(val);
  parsed && parsed <= 10
    ? (numbers.push(parsed), calibrate())
    : alert("Invalid or no input value"),
    calibrate();
  console.log(numbers);
  show();
}
function editBar() {
  chosenBar && inputValue && inputValue <= 10
    ? ((numbers[chosenBar - 1] = inputValue), calibrate())
    : alert("Invalid or no input value"),
    calibrate();
  show();
}
//
function removeBar() {
  chosenBar
    ? (numbers.splice(chosenBar - 1, 1), calibrate())
    : alert("No bar is chosen"),
    calibrate();

  show();
}

function selectBar(barNo) {
  chosenBar = barNo == chosenBar ? null : barNo;
  show();
}

function calibrate() {
  return (chosenBar = null), (inputValue = null);
}
