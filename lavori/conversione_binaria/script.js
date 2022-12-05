function convertToBinary() {
    let number = document.getElementById("input-dec").value;
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    console.log(binary);
    document.getElementById("input-bin").value = binary;
};