const table = document.getElementById("product-table");
const uploadBoxEl = document.getElementById("product-file-input");
var reader = new FileReader();
uploadBoxEl.onchange = ()=> reader.readAsText(uploadBoxEl.files[0]);
var csv;
var rows;

let cart = [];


// Caricare i prodotti dal file CSV selezionato
reader.onloadend = function() {
      csv = reader.result;
      rows = csv.split(/\n/);
      for(let i=0; i<rows.length; i++){
        var cols = rows[i].split(',');
        let row = table.insertRow();
        for(let j=1; j<cols.length; j++){
          row.insertCell().innerText = cols[j] + (j==7 ? "€" : "");
        }
        let addButtonCell = row.insertCell();
            let addButton = document.createElement('button');
            addButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
            addButton.addEventListener('click', function() {
              addToCart(i);
            });
            addButtonCell.appendChild(addButton);
      }
  }

// funzione "Aggiungi al carrello"
function addToCart(index) {
    product = getProductByIndex(index);
    cart.push(product);
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getProductByIndex(i){
    return rows[i].split(',');
}

function updateCartCount() {
    const cartButton = document.getElementById("cart-button");
    cartButton.innerText = `Carrello (${cart.length})`;
}

//apertura carrello
const cartButton = document.getElementById("cart-button");
cartButton.addEventListener("click", function() {
  window.location.href = "cart.html";
});

function loadCart() {
    const cartTable = document.getElementById("cart-table");
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    for(let i=0; i<cartItems.length; i++) {
      let product = cartItems[i];
      let row = cartTable.insertRow();
      for(let j=1; j<product.length; j++) {
        row.insertCell().innerText = product[j] + (j==7 ? "€" : "");
      }
    }
  }