function generateTable() {
    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";
    var rows = document.getElementById("row").value;
    var columns = document.getElementById("column").value;
    var table = document.createElement("table");
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow();
        for (var j = 0; j < columns; j++) {
            row.insertCell().innerHTML = Math.floor(Math.random() * 100);
        }
    }
    tableContainer.appendChild(table);
}

function colorTable(divisible) {
    var tableCells = document.querySelectorAll("#table-container table td");
    tableCells.forEach(function(cell) {
        var cellValue = parseInt(cell.innerHTML);
        if (cellValue % divisible == 0) {
            cell.style.backgroundColor = "yellow";
        } else {
            cell.style.backgroundColor = "white";
        }
    });
}