function sommaNumeri() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var ris = document.getElementById("ris");
    var somma = 0;
    var opzione = document.querySelector('input[name="paridispari"]:checked').value;

    for (var i = parseInt(n1); i <= parseInt(n2); i++) {
        if(opzione === 'Pari' && i % 2 === 0){
            somma += i;
        }else if(opzione === 'Dispari' && i % 2 !== 0){
            somma += i;
        }
    }
    ris.innerHTML = "La somma è: " + somma;
  }