// CARICAMENTO PRODOTTI

const nike_csv =
  "https://matteocolucci.github.io/main/lavori/ecommerce_2024/data/nike.csv";
const adidas_xml =
  "https://matteocolucci.github.io/main/lavori/ecommerce_2024/data/adidas.xml";
const puma_json =
  "https://matteocolucci.github.io/main/lavori/ecommerce_2024/data/puma.json";
const nikeButton = document.getElementById("nike");
const adidasButton = document.getElementById("adidas");
const pumaButton = document.getElementById("puma");

loadNikeProducts();

function loadProducts(url, format) {
  productContainer.innerHTML = "";

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let data;

      if (format === "xml") {
        data = Array.from(this.responseXML.getElementsByTagName("product")).map(
          (product) => {
            return {
              title: product.getElementsByTagName("title")[0].textContent,
              size: product.getElementsByTagName("size")[0].textContent,
              description:
                product.getElementsByTagName("description")[0].textContent,
              price: product.getElementsByTagName("price")[0].textContent,
              img_link: product.getElementsByTagName("img_link")[0].textContent,
            };
          }
        );
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
        for (let i = 0; i < data.length; i++) {
          const { title, size, description, price, img_link } = data[i];

          const figure = document.createElement("figure");
          figure.classList.add("product");

          figure.innerHTML = `
            <div class="img">
              <img src="${img_link}" />
            </div>
            <ul class="details">
              <h2 class="title">${title}</h2>
              <li class="size">${size}</li>
              <li class="description">${description}</li>
            </ul>
            <div class="row">
              <h2 class="price">${price}&euro;</h2>
              <button onclick="addToCart(${JSON.stringify(data[i]).replace(
                /"/g,
                "'"
              )})">Aggiungi al Carrello</button>
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

function addToCart(product) {
  var carrello = JSON.parse(localStorage.getItem("carrello")) || [];
  carrello.push(product);
  localStorage.setItem("carrello", JSON.stringify(carrello));
  alert("Aggiunto al carrello");
}
