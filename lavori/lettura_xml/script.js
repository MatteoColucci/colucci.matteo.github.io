function mostraSquadra(nomeSquadra) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var squadre = xmlDoc.getElementsByTagName('squadra');

            var output = "<h2>" + nomeSquadra.charAt(0).toUpperCase() + nomeSquadra.slice(1) + ":</h2><ul>";

            for (var i = 0; i < squadre.length; i++) {
                var squadra = squadre[i];
                var nome = squadra.getAttribute('nome');
                
                if (nome === nomeSquadra) {
                    var giocatori = squadra.getElementsByTagName('giocatore');
                    for (var j = 0; j < giocatori.length; j++) {
                        var giocatore = giocatori[j];
                        var nomeGiocatore = giocatore.getElementsByTagName('nome')[0].textContent;
                        var cognomeGiocatore = giocatore.getElementsByTagName('cognome')[0].textContent;
                        output += "<li>" + nomeGiocatore + " " + cognomeGiocatore + "</li>";
                    }
                }
            }

            output += "</ul>";
            document.getElementById("output").innerHTML = output;
        }
    };
    xhttp.open("GET", "https://matteocolucci.github.io/main/lavori/lettura_xml/elenco-giocatori.xml", true);
    xhttp.send();
}
