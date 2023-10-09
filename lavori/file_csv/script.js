function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const csvContent = e.target.result;
        const rows = csvContent.split('\n');
        const tableContainer = document.getElementById('container');
        let tableHTML = '<table border="1">';
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].split(',');
            tableHTML += '<tr>';
            for (let j = 0; j < cells.length; j++) {
                tableHTML += '<td>' + cells[j] + '</td>';
            }
            tableHTML += '</tr>';
        }
        tableHTML += '</table>';
        tableContainer.innerHTML = tableHTML;
};

reader.readAsText(file);
}