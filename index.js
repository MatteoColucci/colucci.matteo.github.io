const liEls = document.querySelectorAll("li");

zIndex();

function zIndex(){
    let z = liEls.length;
    liEls.forEach(li => {
        li.style.zIndex = z;
        z--;
    });
}