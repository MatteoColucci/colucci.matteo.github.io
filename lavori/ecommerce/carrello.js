function loadCart() {
    const cartTable = document.getElementById("cart-table");
    cartTable.innerHTML = "";
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    for(let i=0; i<cartItems.length; i++) {
      let rowIndex = cartItems[i];
      let product = rows[rowIndex].split(',');
      let row = cartTable.insertRow();
      for(let j=1; j<product.length; j++) {
        let s = "" + (j==7 ? "€" : "");
        row.insertCell().innerText = product[j] + (j==7 ? "€" : "");
      }
    }
  }