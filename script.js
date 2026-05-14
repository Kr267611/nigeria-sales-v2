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
  const name = document.getElementById("name").value;
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
      name,
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
  console.log(generatedData);
}

function deleteRow(btn) {
  btn.closest("tr").remove();
}

function saveData() {

  fetch("https://script.google.com/a/macros/bhaskarsilkmills.in/s/AKfycbwkhZg1M4WNT1avyxV_PAOLV8XPeg7Qon50aBrO6EjXR_fzwIpvbeIZAFCy5HHUH16u/exec", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(generatedData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.text())
  .then(data => {
    alert("Data Saved Successfully");
  })
  .catch(err => {
    console.error(err);
    alert("Error saving data");
  });
}

// Clear form and reset data
function clearForm() {
  document.getElementById("bale").value = "";
  document.getElementById("quality").value = "";
  document.getElementById("design").value = "";
  document.getElementById("color").value = "";
  document.getElementById("pcs").value = "";
  document.getElementById("qty").value = "";
  document.getElementById("uom").value = "";
  document.getElementById("name").value = "";
}   