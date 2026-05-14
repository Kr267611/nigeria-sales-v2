function showTab(tabId, button) {
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');

  const buttons = document.querySelectorAll('.tabs button');
  buttons.forEach(btn => btn.classList.remove('active'));

  button.classList.add('active');
}

let generatedData = [];

function generatePCS() {

  const bale = document.getElementById("bale").value;
  const quality = document.getElementById("quality").value;
  const design = document.getElementById("design").value;
  const color = document.getElementById("color").value;
  const pcs = Number(document.getElementById("pcs").value);
  const qty = Number(document.getElementById("qty").value);
  const uom = document.getElementById("uom").value;

  const table = document.querySelector(".pcs-section tbody");
  table.innerHTML = "";

  generatedData = [];

  for (let i = 1; i <= pcs; i++) {

    let rowData = [
      bale,
      quality,
      design,
      color,
      i,
      qty,
      uom
    ];

    generatedData.push(rowData);

    let row = `
      <tr>
        <td>${i}</td>
        <td>${qty}</td>
        <td> <button onclick="deleteRow(this)">❌</button> </td>
      </tr>
    `;

    table.innerHTML += row;
  }
}

function deleteRow(btn) {
  btn.closest("tr").remove();
}

