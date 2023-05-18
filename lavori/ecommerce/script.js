const table = document.getElementById("product-table");
let cart = [];

// Carica i prodotti dal localStorage
function loadProducts() {
  const savedProducts = JSON.parse(localStorage.getItem('productList'));
  if (savedProducts) {
    savedProducts.forEach(product => {
        let row = table.insertRow();
        row.insertCell().innerText = product.name;
        row.insertCell().innerText = product.brand;
        row.insertCell().innerText = product.color;
        row.insertCell().innerText = product.ram;
        row.insertCell().innerText = product.storage + "GB";
        row.insertCell().innerText = product.releaseYear;
        row.insertCell().innerText = product.price + "€";
        let addButtonCell = row.insertCell();
        let addButton = document.createElement('button');
        addButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
        addButton.addEventListener('click', function() {
          addToCart(product);
        });
        addButtonCell.appendChild(addButton);
    });
  }
}

// funzione "Aggiungi al carrello"
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartCount() {
    const cartButton = document.getElementById("cart-button");
    cartButton.innerText = `Carrello (${cart.length})`;
}


function loadCart() {
    const cartTable = document.getElementById("cart-table");
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    for(let i=0; i<cartItems.length; i++) {
      let product = cartItems[i];
      let row = cartTable.insertRow();
      row.insertCell().innerText = product.name;
      row.insertCell().innerText = product.brand;
      row.insertCell().innerText = product.color;
      row.insertCell().innerText = product.ram;
      row.insertCell().innerText = product.storage + "GB";
      row.insertCell().innerText = product.releaseYear;
      row.insertCell().innerText = product.price + "€";
    }
  }

function clearProducts(){
  localStorage.removeItem('cart');
  location.reload();
}

