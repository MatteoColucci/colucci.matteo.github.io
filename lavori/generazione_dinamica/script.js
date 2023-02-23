function generaTabella() {
    const righe = document.getElementById("righe").value;
    const colonne = document.getElementById("colonne").value;
    const table = document.getElementById("tableContainer").innerHTML;
    for (var i = 0; i < righe; i++) {
        table.innerHTML += "<tr>";
        for (var j = 0; j < colonne; j++) {
            table.innerHTML += `<td>${i}, ${j}</td>`;
        }
        table.innerHTML += "</tr>";
    }
    table.innerHTML += "</table>";
}