const nike_csv =
  "https://matteocolucci.github.io/main/lavori/ecommerce_2024/data/nike.csv";
const adidas_xml =
  "https://matteocolucci.github.io/main/lavori/ecommerce_2024/data/adidas.xml";
const puma_json =
  "https://matteocolucci.github.io/main/lavori/ecommerce_2024/data/puma.json";
const nikeButton = document.getElementById("nike");
const adidasButton = document.getElementById("adidas");
const pumaButton = document.getElementById("puma");

function loadProducts(url, format) {
  productContainer.innerHTML = "";

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let data;

      if (format === "xml") {
        data = this.responseXML;
      } else if (format === "json") {
        data = JSON.parse(this.responseText);
      } else if (format === "csv") {
        const rows = this.responseText.split("\n");
        const headers = rows[0].split(",");
        data = [];
        for (let i = 1; i < rows.length; i++) {
          const values = rows[i].split(",");
          const product = {};
          for (let j = 0; j < headers.length; j++) {
            product[headers[j]] = values[j];
          }
          data.push(product);
        }
      }
      if (data) {
        const products =
          format === "xml" ? data.getElementsByTagName("product") : data;

        for (let i = 0; i < products.length; i++) {
          const title =
            format === "xml"
              ? products[i].getElementsByTagName("title")[0].textContent
              : products[i].title;
          const size =
            format === "xml"
              ? products[i].getElementsByTagName("size")[0].textContent
              : products[i].size;
          const description =
            format === "xml"
              ? products[i].getElementsByTagName("description")[0].textContent
              : products[i].description;
          const price =
            format === "xml"
              ? products[i].getElementsByTagName("price")[0].textContent
              : products[i].price;
          const imgLink =
            format === "xml"
              ? products[i].getElementsByTagName("img_link")[0].textContent
              : products[i].img_link;

          const figure = document.createElement("figure");
          figure.classList.add("product");

          figure.innerHTML = `
            <div class="img">
              <img src="${imgLink}" />
            </div>
            <ul class="details">
              <h2 class="title">${title}</h2>
              <li class="size">${size}</li>
              <li class="description">${description}</li>
            </ul>
            <div class="row">
              <h2 class="price">${price}&euro;</h2>
              <button>Aggiungi al Carrello</button>
            </div>
          `;

          productContainer.appendChild(figure);
        }
      }
    }
  };
}

// Chiamate alle funzioni per Nike, Adidas e Puma
function loadNikeProducts() {
  nikeButton.classList.add("active");
  adidasButton.classList.remove("active");
  pumaButton.classList.remove("active");
  loadProducts(nike_csv, "csv");
}

function loadAdidasProducts() {
  adidasButton.classList.add("active");
  nikeButton.classList.remove("active");
  pumaButton.classList.remove("active");
  loadProducts(adidas_xml, "xml");
}

function loadPumaProducts() {
  pumaButton.classList.add("active");
  nikeButton.classList.remove("active");
  adidasButton.classList.remove("active");
  loadProducts(puma_json, "json");
}
