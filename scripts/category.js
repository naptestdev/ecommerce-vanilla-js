const categoryId = new URLSearchParams(new URL(location.href).search).get(
  "categoryId"
);

const category = categories.find((item) => item.id === categoryId);

if (!category) location.href = "./index.html";

document.querySelector("#category").innerText = category.name;

const filtered = products.filter((product) => {
  return product.category === categoryId;
});

for (let product of filtered) {
  let card = /*html*/ `
  <div onclick="location.href='./product.html?id=${product.id}'" class="card">
  <div class="image-container">
    <img src="./assets/products/${product.image}" /> 
    <div class="card-actions">
      <button onclick="event.stopPropagation();addToCart('${
        product.id
      }');alert('Added to cart')" data-tooltip="Add to cart">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <button onclick="event.stopPropagation();location.href='./product.html?id=${
        product.id
      }'" data-tooltip="Quick view"><i class="fa-regular fa-eye"></i></button>
      <button onclick="event.stopPropagation();addToWishlist('${
        product.id
      }');alert('Added to wishlist')" data-tooltip="Add to wishlist"><i class="fa-regular fa-heart"></i></button>
    </div>
  </div> 
  <div class="container">
    <p>${
      categories.find((category) => product.category === category.id).name
    }</p>
    <h5>${product.name}</h5> 
    <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
    <h6><span>${product.oldPrice}</span> <span>${product.newPrice}</span></h6>
  </div>
</div>
  `;

  document.getElementById("products").innerHTML += card;
}
