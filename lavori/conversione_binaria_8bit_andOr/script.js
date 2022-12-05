// funzioni per il convertirore

function convertToBinary() {
    let number = document.getElementById("input-dec").value;
    bin8bit = convertToBinary8bit(number);
    document.getElementById("input-bin").value = bin8bit;
}

function convertToBinary8bit(number) {
    let bin = Math.abs(number).toString(2);
    if(bin.length <= 8){
        bin8bit = "";
        for(let i=0; i<8-bin.length; i++)
            bin8bit += "0";
        bin8bit += bin;
    }else
        bin8bit = "Solo conversioni a 8 bit (255 in decimale)"
    return bin8bit;
};

//funzioni per l'and e or binario a 8 bit

function convert(inpuEl){
    if(inpuEl === document.getElementById("input-n1")){
        let number = document.getElementById("input-n1").value;
        bin8bit = convertToBinary8bit(number);
        document.getElementById("bin-n1").value = bin8bit;
    }    
    if(inpuEl === document.getElementById("input-n2")){
        let number = document.getElementById("input-n2").value;
        bin8bit = convertToBinary8bit(number);
        document.getElementById("bin-n2").value = bin8bit;
    }    
};

function and(){
    let value1 = document.getElementById("input-n1").value;
    let value2 = document.getElementById("input-n2").value;
    var x = parseInt(value1) & parseInt(value2);
    document.getElementById("print-and").value = convertToBinary8bit(x);
}

function or(){
    let value1 = document.getElementById("input-n1").value;
    let value2 = document.getElementById("input-n2").value;
    var ris = parseInt(value1) | parseInt(value2);
    ris8bit = convertToBinary8bit(ris);
    document.getElementById("print-or").value = ris8bit;
}