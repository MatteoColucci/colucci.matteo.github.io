const testo = document.getElementById("paragrafo");

function impostaDimensione() {
    var select = document.getElementById("dimensione");
    var d = select.options[select.selectedIndex].value;
    testo.style.fontSize = d + "px";
}

function impostaColore(){
    var select = document.getElementById("colore");
    var c = select.options[select.selectedIndex].value;
    testo.style.color = c;
}

function impostaSfondo(){
    var select = document.getElementById("sfondo");
    var s = select.options[select.selectedIndex].value;
    testo.style.backgroundColor = s;
}