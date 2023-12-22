displayCartSummary();

function displayCartSummary() {
  var carrello = JSON.parse(localStorage.getItem("carrello")) || [];
  const summaryContainer = document.getElementById("summary");
  summaryContainer.innerHTML = "";
  var totalPrice = 0;
  carrello.forEach(function (productInfo, index) {
    const figure = document.createElement("figure");
    const title = productInfo.title;
    const size = productInfo.size;
    const description = productInfo.description;
    const price = productInfo.price;
    const imgLink = productInfo.img_link;

    figure.innerHTML = `
    <img src="${imgLink}" width="150px"/>
    <ul class="details">
        <h2 class="title">${title}</h2>
        <li class="size">${size}</li>
        <li class="description">${description}</li>
        <h2 class="price">${price}&euro;</h2>
      </ul>
      <button onclick="removeFromCart(${index})">Rimuovi dal Carrello</button>
    `;

    summaryContainer.appendChild(figure);
    totalPrice += parseFloat(price);
  });
  document.getElementById("total-price").innerHTML = totalPrice.toFixed(2);
}

function removeFromCart(index) {
  var carrello = JSON.parse(localStorage.getItem("carrello")) || [];
  carrello.splice(index, 1);
  localStorage.setItem("carrello", JSON.stringify(carrello));
  displayCartSummary();
}

function checkout() {
  console.log("checkout");
  var carrello = JSON.parse(localStorage.getItem("carrello")) || [];
  const jsonContent = JSON.stringify(carrello, null, 2);
  const blob = new Blob([jsonContent], { type: "application/json" });
  const blobURL = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobURL;
  link.download = "carrello.json";
  link.click();
  URL.revokeObjectURL(blobURL);

  localStorage.removeItem("carrello");
  displayCartSummary();
}
