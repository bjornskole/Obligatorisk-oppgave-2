// controller

function createBar(number, barNo) {
  const width = 8;
  const spacing = 2;
  let x = (barNo - 1) * (width + spacing);
  let height = number * 10;
  let y = 60 - height;
  let color = calcColor(1, 10, barNo);
  let stroke = chosenBar == barNo ? "black" : "none";
  let res = `<rect id="id${barNo}" value="${barNo}" onclick="selectBar(${barNo})" width="${width}" height="${height}"
  x="${x}" y="${y}" fill="${color}" stroke="${stroke}";  ></rect>`;
  return res;
}

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
