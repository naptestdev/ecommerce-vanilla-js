for (let category of categories) {
  let card = /*html*/ `
  <div class="category-card">
    <a href="" class="category-image-container">
      <img src="./assets/categories/${category.image}" />
    </a>
    <div class="category-container">
      <a href=""><h3>${category.name}</h3></a> 
      <a href=""><p>${0} Products</p></a> 

    </div>
  </div>
  `;

  document.getElementById("categories").innerHTML += card;
}

for (let product of products) {
  let card = /*html*/ `
  <div class="card">
    <div class="image-container">
      <img src="./assets/products/${product.image}" /> 
    </div> 
    <div class="container">
      <h5>${product.name}</h5> 
      <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
      <h6><span>${product.oldPrice}</span> <span>${product.newPrice}</span></h6>
    </div>
  </div>
  `;

  document.getElementById("products").innerHTML += card;
}

const handleAddToCartClicked = (productId) => {
  if (!localStorage.getItem("currentUser")) {
    alert("Please log in");
  } else {
    addToCart(productId);
  }
};

const logout = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  location.reload();
};
