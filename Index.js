// hjelpevariable for både view og controller
var contentDiv = document.getElementById("content");

// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar; // Variabel for hvilken stolpe som er valgt
let inputValue; // Variabel for hva som er skrevet i input-feltet
let borderCol;
// view
show();
function show() {
  console.log(chosenBar);
  let svgInnerHtml = "";
  for (let i = 0; i < numbers.length; i++) {
    svgInnerHtml += createBar(numbers[i], i + 1);
  }
  contentDiv.innerHTML = `
         <svg  id="chart" width="500" viewBox="0 0 80 60">
             ${svgInnerHtml}
         </svg><br/>
         Valgt stolpe: <i>ingen</i>
         <br />
         Verdi:
         <input type="number" min="1" max="10" oninput="inputValue = this.value" />
         <button onclick="addBar(inputValue)">Legg til stolpe</button>
         <button onclick="editBar()" >Endre valgt stolpe</button><br />
         <button onclick="removeBar()">Fjerne valgt stolpe</button>
         `;
}

function createBar(number, barNo) {
  const width = 8;
  const spacing = 2;
  let x = (barNo - 1) * (width + spacing);
  let height = number * 10;
  let y = 60 - height;
  let color = calcColor(1, 10, barNo);
  return `<rect style="border: blue solid 1px" onclick="activateBar(this)" width="${width}" height="${height}"
                         x="${x}" y="${y}" fill="${color} "  ></rect>`;
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
    ? (numbers.push(parsed), (inputValue = null))
    : alert("Please specify the bar you want to create");
  console.log(numbers);
  show();
}
function editBar() {
  chosenBar && inputValue
    ? ((numbers[chosenBar] = inputValue),
      (chosenBar = null),
      (inputValue = null))
    : (null, alert("no input value or chosen bar"));
  show();
}
//
function removeBar() {
  chosenBar ? numbers.splice(chosenBar, 1) : alert("No bar is chosen");
  chosenBar = null;
  show();
}
function activateBar(value) {
  chosenBar !== [...value.parentElement.children].indexOf(value)
    ? (chosenBar = [...value.parentElement.children].indexOf(value))
    : (chosenBar = null);
  console.log(chosenBar);
  // console.log([...value.parentElement.children].indexOf(value));
  // show();
  //   numbers.slice(item);
}
