for (let product of products) {
  let card = /*html*/ `
  <div class="card">
    <div class="image-container">
      <img src="${product.image}" /> 
    </div> 
    <div class="container">
      <div class="info">
        <h5>${product.title}</h5> 
        <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
        <h6>$${product.price}</h6>
      </div>
      <button onclick="handleAddToCartClicked(${product.id})"><i class="fa-solid fa-plus"></i></button>
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
