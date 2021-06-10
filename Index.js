// hjelpevariable for både view og controller
var contentDiv = document.getElementById("content");

// model
let numbers = [7, 3, 1, 5, 8];
let chosenBar = "null"; // Variabel for hvilken stolpe som er valgt
let prevBar;
let inputValue; // Variabel for hva som er skrevet i input-feltet

// view
show();
function show() {
  console.log(chosenBar);
  let svgInnerHtml = "";
  for (let i = 0; i < numbers.length; i++) {
    svgInnerHtml += createBar(numbers[i], i + 1);
  }
  contentDiv.innerHTML = `
  <div id="page">
  <div>
         <svg id="chart" width="500" viewBox="0 0 80 60">
             ${svgInnerHtml}
         </svg><br/>
         Valgt stolpe: <i>ingen</i>
         <br />
         Verdi:
         <input type="number" min="1" max="10" oninput="inputValue = this.value" />
         <button id="btnAdd" onclick="addBar(inputValue)">Legg til stolpe</button>
         <button disabled id="btnEdit" onclick="editBar()" >Endre valgt stolpe</button><br />
         <button disabled id="btnRemove" onclick="removeBar()">Fjerne valgt stolpe</button>
         </div>
         </div>
         `;
}
