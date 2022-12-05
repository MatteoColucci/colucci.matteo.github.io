function convert(inputEl){
    const inpuEl = inputEl;
    let num = inputEl.value;
    if(inpuEl === document.getElementById("bin"))
        num = parseInt(num, 2);
    if(inpuEl === document.getElementById("oct"))
        num = parseInt(num, 8);
    if(inpuEl === document.getElementById("hex"))
        num = parseInt(num, 16);
    document.getElementById("dec").value = num;
    document.getElementById("bin").value = decToBin(num);
    document.getElementById("oct").value = decToOtt(num);
    document.getElementById("hex").value = decToEsa(num);
};

function decToBin(num){
    var bin = "";
    while (num > 0) {
        bin = (num%2) + bin;
        num = parseInt(num/2);
     }
     return bin;
};

function decToOtt(num){
    var ott = "";
    while(num>0){
        ott = (num%8) + ott;
        num = parseInt(num/8);
    }
    return ott;
};

function decToEsa(num){
    var esa = "";
    while(num>0){
        resto = num%16;
        switch(resto){
            case 10:
                resto = "A";
                break;
            case 11:
                resto = "B";
                break;
            case 12:
                resto = "C";
                break;
            case 13:
                resto = "D";
                break;
            case 14:
                resto = "E";
                break;
            case 15:
                resto = "F";
                break;
        }
        esa = resto + esa;
        num = parseInt(num/16);
    }
    return esa;
}