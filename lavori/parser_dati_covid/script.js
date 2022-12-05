const btnsEls = document.querySelectorAll(".btn");
const containerEL = document.querySelector(".container");
const uploadBoxEl = document.getElementById("uploadBox");
var reader = new FileReader();
uploadBoxEl.onchange = ()=> reader.readAsText(uploadBoxEl.files[0]);
var csv;
var headers;

reader.onloadend = function() {
    containerEL.innerHTML = `
        <h3>Scegli il dato da visualizzare</h3>
        <div class="dati-container" id="dati-container"</div>
        `;
    const datiContainerEl = document.getElementById("dati-container");
    csv = reader.result;
    headers = csv.split(",", 24);
    headers[23] = headers[23].substring(0, headers[23].indexOf('2'));

    for(let i=0; i<headers.length; i++){
        headers[i] = headers[i].replace(new RegExp('_', 'g'), " ");
    };
    datiContainerEl.innerHTML = "";
    for(let i=2; i<headers.length; i++){
        datiContainerEl.innerHTML += `
        <button class="btn" onclick="createTable(${i})">${headers[i]}</button>
        `
    }
};

function createTable(iDato){
    containerEL.innerHTML = `
        <h3>Dati ${headers[iDato]}</h3>
        <table class="table" id="table">
        <tr>
            <th>Data</th>
            <th>Numero di persone</th>
        </tr>
        </table>    
    `;
    const tableEl = document.getElementById("table");
    let rows = csv.split(/\n/);
    for(let i=1; i<rows.length; i++){
        let cols = rows[i].split(',');
        tableEl.innerHTML += `
            <tr>
                <td>${cols[0]}</td>
                <td>${cols[iDato]=="" ? "dati non disponibili" : cols[iDato]}</td>
            </tr>
        `;
    };
};







