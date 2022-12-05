function replace(){
    string = document.querySelector(".input-string").value;
    string1 = document.getElementById("daSostituire").value;
    string2 = document.getElementById("diSostituzione").value;
    document.querySelector(".input-string").value = string.replace(string1, string2);
}