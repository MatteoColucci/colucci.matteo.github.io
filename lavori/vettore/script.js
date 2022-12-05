const dimEl = document.querySelector(".array-dim");
const arrayEl = document.getElementById("array");
const printEl = document.querySelector(".print-container");
var arrayEls = document.querySelectorAll(".array-el");

let a = [];
let i = 0;

function creaVettore(){
    arrayEl.innerHTML = "";
    for(let i=1; i<=dimEl.value; i++){
        a = [];
        arrayEl.innerHTML += `
            <tr><input type="text" class="array-el" placeholder="n${i}"></tr>
        `;
        arrayEls = document.querySelectorAll(".array-el");
    }
};

function random(){
    for(i=0; i<arrayEls.length; i++){
        arrayEls[i].value = Math.floor(Math.random() * 100);
    };
    setAEls();
}

function decrescente(){
    setAEls();
    a.sort(function(a, b){return a - b});
    setArrayEl();
}

function crescente(){
    setAEls();
    a.sort(function(a, b){return b - a});
    setArrayEl();
}

function reverse(){
    setAEls();
    a.reverse();
    setArrayEl();
}

function minimo() {
    setAEls();
    printEl.innerHTML = "";
    let min = a[0];
    let minIndex = 0;
    for(i=1; i<a.length; i++){
        if(min > a[i]){
            min = a[i];
            minIndex = i;
        }
    }
    printEl.innerHTML = `
        <h3>Numero minimo: ${min}</h3>
        <h3>Indice: ${minIndex}</h3>
        `
}

function massimo() {
    setAEls();
    printEl.innerHTML = "";
    let max = a[0];
    let maxIndex = 0;
    for(i=1; i<a.length; i++){
        if(max < a[i]){
            max = a[i];
            maxIndex = i;
        }
    }
    printEl.innerHTML = `
        <h3>Numero massimo: ${max}</h3>
        <h3>Indice: ${maxIndex}</h3>
        `
}

function setAEls(){
    a = [];
    for(i=0; i<arrayEls.length; i++)
        a.push(arrayEls[i].value);
}

function setArrayEl(){
    for(i=0; i<a.length; i++)
        arrayEls[i].value = a[i];
}
