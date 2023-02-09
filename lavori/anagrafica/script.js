const container = document.querySelector('.container');

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault();

  let nome = document.querySelector('#nome').value;
  let cognome = document.querySelector('#cognome').value;
  let sesso = document.querySelector('input[name="sesso"]:checked').value;
  let nazione = document.querySelector('#nazione').value;
  let provincia = document.querySelector('#provincia').value;
  let citta = document.querySelector('#citta').value;
  let indirizzo_tipo = document.querySelector('#indirizzo_tipo').value;
  let indirizzo = document.querySelector('#indirizzo').value;
  let numero_civico = document.querySelector('#numero_civico').value;
  let sport_praticati = [];
  let sport_praticati_checkboxes = document.querySelectorAll('input[name="sport_praticati"]:checked');
  for(let i = 0; i < sport_praticati_checkboxes.length; i++){
    sport_praticati.push(sport_praticati_checkboxes[i].value);
  }

  container.innerHTML = `
  <table>
    <tr>
      <td>Nome</td>
      <td>${nome}</td>
    </tr>
    <tr>
      <td>Cognome</td>
      <td>${cognome}</td>
    </tr>
    <tr>
      <td>Sesso</td>
      <td>${sesso}</td>
    </tr>
    <tr>
      <td>Nazione</td>
      <td>${nazione}</td>
    </tr>
    <tr>
      <td>Provincia</td>
      <td>${provincia}</td>
    </tr>
    <tr>
      <td>Città</td>
      <td>${citta}</td>
    </tr>
    <tr>
      <td>Indirizzo</td>
      <td>${indirizzo_tipo} ${indirizzo} ${numero_civico}</td>
    </tr>
    <tr>
      <td>Sport</td>
      <td>${sport_praticati}</td>
    </tr>
  </table>
  `

  console.log('Nome: ' + nome);
  console.log('Cognome: ' + cognome);
  console.log('Sesso: ' + sesso);
  console.log('Nazione: ' + nazione);
  console.log('Provincia: ' + provincia);
  console.log('Città: ' + citta);
  console.log('Tipo di indirizzo: ' + indirizzo_tipo);
  console.log('Indirizzo: ' + indirizzo);
  console.log('Numero Civico: ' + numero_civico);
  console.log('Sport praticati: ' + sport_praticati);
});