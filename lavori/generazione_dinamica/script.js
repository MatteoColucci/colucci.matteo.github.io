
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    var righe = document.getElementById('righe').value;
    var colonne = document.getElementById('colonne').value;
    let table = "<table>";
    for (let i = 0; i < righe; i++) {
        table += "<tr>";
        for (let j = 0; j < colonne; j++) {
            table += `<td>${i}, ${j}</td>`;
        }
        table += "</tr>";
    }
    table += "</table>";
    localStorage.setItem('table', table);
    document.location.href = "tabella.html";
});