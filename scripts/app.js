for (let category of categories) {
  let card = /*html*/ `
  <div class="category-card">
    <a href="./category.html?categoryId=${encodeURIComponent(
      category.id
    )}" class="category-image-container">
      <img src="./assets/categories/${category.image}" />
    </a>
    <div class="category-container">
      <a href=""><h3>${category.name}</h3></a> 
      <a href=""><p>${
        products.filter((product) => product.category === category.id).length
      } Products</p></a> 

    </div>
  </div>
  `;

  document.getElementById("categories").innerHTML += card;
}

for (let product of products) {
  let card = /*html*/ `
  <a href="./product.html?id=${product.id}" class="card">
    <div class="image-container">
      <img src="./assets/products/${product.image}" /> 
    </div> 
    <div class="container">
      <p>${
        categories.find((category) => product.category === category.id).name
      }</p>
      <h5>${product.name}</h5> 
      <div class="stars"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
      <h6><span>${product.oldPrice}</span> <span>${product.newPrice}</span></h6>
    </div>
  </a>
  `;

  document.getElementById("products").innerHTML += card;
}
