function creaTabella() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://matteocolucci.github.io/main/lavori/lettura_file_csv/tabella-csv.csv", true); 
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            const csvContent = this.responseText;
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
        }
    };
}
