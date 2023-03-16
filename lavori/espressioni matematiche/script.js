// Recupera il canvas
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

creaAssi();

function creaAssi() {
    // Disegna l'asse x
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();

    // Disegna l'asse y
    context.beginPath();
    context.moveTo(canvas.width / 2, 0);
    context.lineTo(canvas.width / 2, canvas.height);
    context.stroke();
}

function disegnaRetta() {
    // Recupera il coefficiente angolare dalla pagina
    var m = document.getElementById("coefficiente").value;

    // Cancella il canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    creaAssi();
    
    // Disegna la retta
    
    const startX = -canvas.width / 2;
    const startY = m * startX;
    
    const endX = canvas.width / 2;
    const endY = m * endX;
    
    var p = 0;
    var intervallo = setInterval(function() {
        context.beginPath();
        context.moveTo(startX + canvas.width / 2, -startY + canvas.height / 2);
        var x = startX + p * (endX - startX);
        var y = startY + p * (endY - startY);
        context.lineTo(x + canvas.width / 2, -y + canvas.height / 2);
        context.strokeStyle = "red";
        context.stroke();
        p += 0.01;
        if (p > 1) {
            clearInterval(intervallo);
        }
    }, 10);
}

// function disegnaRetta() {
//     // Recupera il coefficiente angolare dalla pagina
//     var m = document.getElementById("coefficiente").value;

//     // Cancella il canvas
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     creaAssi();
    
//     // Disegna la retta
//     context.beginPath();
//     context.strokeStyle = "red";
//     // y = m * x
//     context.moveTo(0, canvas.height / 2 + m * canvas.width / 2);
//     context.lineTo(canvas.width, canvas.height / 2 - m * canvas.width / 2);
//     context.stroke();
// }

function disegnaCirconferenza() {
    var raggio = document.getElementById("raggio").value * 10;
    context.clearRect(0, 0, canvas.width, canvas.height);
    creaAssi();
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, raggio, 0, 2 * Math.PI);
    context.stroke();
}

function disegnaEllisse() {
    var a = document.getElementById("semiasse-orizzontale").value * 10;
    var b = document.getElementById("semiasse-verticale").value * 10;
    context.clearRect(0, 0, canvas.width, canvas.height);
    creaAssi();
    context.strokeStyle = "red";
    context.beginPath();
    context.ellipse(canvas.width/2, canvas.height/2, a, b, 0, 0, 2 * Math.PI);
    context.stroke();
}