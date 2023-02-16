const container = document.querySelector('.container');

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();
  
  let valido = true;
  let formInputs = document.querySelectorAll('input, select');

  // Verifica se ogni campo è stato compilato
  for (let i = 0; i < formInputs.length; i++) {
    if (formInputs[i].value === '') {
      valido = false;
      formInputs[i].style.border = "1px solid red";
    } else {
      formInputs[i].style.border = "1px solid black";
    }
  }

  // Verifica se l'email inserita è valida
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.border = "1px solid black";
  } else {
    valido = false;
    emailInput.style.border = "1px solid red";
  }

  // Verifica se il CAP inserito è valido per l'Italia
  const capInput = document.getElementById('cap');
  const capRegex = /^(I-|IT-)?\d{5}$/;
  if (capRegex.test(capInput.value)) {
    capInput.style.border = "1px solid black";
  } else {
    valido = false;
    capInput.style.border = "1px solid red";
  }

  
  const nomeInput = document.getElementById('nome');
  const cognomeInput = document.getElementById('cognome');
  const nameRegex = /^[a-zA-Z]+$/;
  if (nameRegex.test(nomeInput.value)) {
    nomeInput.style.border = "1px solid black";
  }else{
    valido = false;
    nomeInput.style.border = '1px solid red';
  }
  if (nameRegex.test(cognomeInput.value)) {
    cognomeInput.style.border = "1px solid black";
  }else{
    valido = false;
    cognomeInput.style.border = '1px solid red';
  }
  if(valido){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cognome').value;
    let sesso = document.querySelector('input[name="sesso"]:checked').value;
    let provincia = document.getElementById('provincia').value;
    let citta = document.getElementById('citta').value;
    let cap = document.getElementById('cap').value;
    let indirizzo_tipo = document.getElementById('indirizzo_tipo').value;
    let indirizzo = document.getElementById('indirizzo').value;
    let numero_civico = document.getElementById('numero_civico').value;
    let sport_praticati = [];
    let sport_praticati_checkboxes = document.querySelectorAll('input[name="sport_praticati"]:checked');
    for(let i = 0; i < sport_praticati_checkboxes.length; i++){
      sport_praticati.push(sport_praticati_checkboxes[i].value);
    }

    // salva i dati nel local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('nome', nome);
    localStorage.setItem('cognome', cognome);
    localStorage.setItem('sesso', sesso);
    localStorage.setItem('provincia', provincia);
    localStorage.setItem('citta', citta);
    localStorage.setItem('citta', citta);
    localStorage.setItem('cap', cap);
    localStorage.setItem('indirizzo_tipo', indirizzo_tipo);
    localStorage.setItem('indirizzo', indirizzo);
    localStorage.setItem('numero_civico', numero_civico);
    localStorage.setItem('sport_praticati', JSON.stringify(sport_praticati));

    document.location.href="localstorage.html";
  }
});