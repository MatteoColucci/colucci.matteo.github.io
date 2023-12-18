const productForm = document.getElementById('product-form');
const productName = document.getElementById('product-name');
const productBrand = document.getElementById('product-brand');
const productColor = document.getElementById('product-color');
const productRam = document.getElementById('product-ram');
const productStorage = document.getElementById('product-storage');
const productReleaseYear = document.getElementById('product-release-year');
const productPrice = document.getElementById('product-price');
const productTable = document.getElementById('product-table');

productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let productList = JSON.parse(localStorage.getItem('productList')) || [];

    const name = productName.value;
    const brand = productBrand.value;
    const color = productColor.value;
    const ram = productRam.value;
    const storage = productStorage.value;
    const releaseYear = productReleaseYear.value;
    const price = productPrice.value;

    productList.push({
        name,
        brand,
        color,
        ram,
        storage,
        releaseYear,
        price,
    });

    localStorage.setItem('productList', JSON.stringify(productList));
    alert("prodotto aggiunto");
});

function clearProducts(){
    localStorage.removeItem('productList');
    alert("prodotti rimossi");
}