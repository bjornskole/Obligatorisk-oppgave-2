function createBar(number, barNo) {
  const width = 8;
  const spacing = 2;
  let x = (barNo - 1) * (width + spacing);
  let height = number * 10;
  let y = 60 - height;
  let color = calcColor(1, 10, barNo);
  console.log(barNo);
  return `<rect id="id${barNo}" onclick="activateBar(this)" width="${width}" height="${height}"
                           x="${x}" y="${y}" fill="${color}" stroke="none";  ></rect>`;
}

function calcColor(min, max, val) {
  var minHue = 240,
    maxHue = 0;
  var curPercent = (val - min) / (max - min);
  var colString =
    "hsl(" + (curPercent * (maxHue - minHue) + minHue) + ",100%,50%)";
  return colString;
}

// class barController
// controller
function addBar(val) {
  parsed = parseInt(val);
  parsed
    ? (numbers.push(parsed), calibrate())
    : alert("Please specify the bar you want to create");
  console.log(numbers);
  show();
}
function editBar() {
  chosenBar && inputValue
    ? ((numbers[chosenBar] = inputValue), calibrate())
    : (null, calibrate(), alert("no input value or chosen bar"));
  show();
}
//
function removeBar() {
  chosenBar !== "null"
    ? (numbers.splice(chosenBar, 1), calibrate())
    : alert("No bar is chosen");

  calibrate();
  show();
}
function activateBar(value) {
  prevBar ? (document.getElementById(prevBar).style.stroke = "none") : null;
  const buttonEdit = document.getElementById("btnEdit");
  const buttonRemove = document.getElementById("btnRemove");
  chosenBar !== [...value.parentElement.children].indexOf(value)
    ? (((chosenBar = [...value.parentElement.children].indexOf(value)),
      (value.style.stroke = "black")),
      (buttonEdit.disabled = false),
      (prevBar = value.id),
      (buttonRemove.disabled = false))
    : (calibrate(),
      (value.style.stroke = "none"),
      (buttonEdit.disabled = true),
      (buttonRemove.disabled = true));
}
function calibrate() {
  (chosenBar = "null"), (inputValue = null), (prevBar = null);
}
