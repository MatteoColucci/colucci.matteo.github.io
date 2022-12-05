function andOperation() {
    var n1 = document.getElementById("input-n1").value;
    var n2 = document.getElementById("input-n2").value; 
    var x = parseInt(n1) & parseInt(n2);
    document.getElementById("stampa").innerHTML = x;
}

function orOperation() {
    var n1 = document.getElementById("input-n1").value;
    var n2 = document.getElementById("input-n2").value;
    var x = parseInt(n1) | parseInt(n2);
    document.getElementById("stampa").innerHTML = x ;
}