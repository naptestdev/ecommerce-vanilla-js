// if not logged in, redirect to login page
if (!localStorage.getItem("currentUser")) {
  location.href = "/login/login.html";
}

const displayCart = () => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  if (cart.length === 0) {
    document.getElementById("cart-container").innerHTML = /* html */ `
      <h4 class="empty-warning">Your cart is empty</h4>
    `;
  } else {
    document.getElementById("cart-container").innerHTML = /* html */ `
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        ${cart
          .map(
            (product) => /*html*/ `
            <tr>
              <td>
                <div class="product-cell">
                  <img src="${product.image}" alt="" />
                  <p>${product.title}</p>
                </div>
              </td>
              <td class="quantity-cell">
                <button onclick="removeFromCart(${product.id});displayCart()">
                  -
                </button>
                <span>${product.quantity}</span>
                <button onclick="addToCart(${product.id});displayCart()">
                  +
                </button>
              </td>
              <td>$${
                Math.round(product.price * product.quantity * 100) / 100
              }</td>
            </tr>
          `
          )
          .join("")}
      </table>
      <div class="total">
        <h2>Total: $${
          Math.round(
            cart.reduce((acc, product) => {
              acc += product.price * product.quantity;
              return acc;
            }, 0) * 100
          ) / 100
        }</h2>
      </div>
    `;
  }
};

displayCart();
