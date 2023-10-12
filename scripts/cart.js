// if not logged in, redirect to login page
if (!localStorage.getItem("currentUser")) {
  location.href = "./login/login.html";
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
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        ${cart
          .map(
            (product) => /*html*/ `
            <tr>
              <td>
                <div class="product-cell">
                  <img src="./assets/products/${product.image}" alt="" />
                  <p>${product.name}</p>
                </div>
              </td>
              <td>${product.newPrice}</td>
              <td class="quantity-cell">
                <button onclick="removeFromCart('${product.id}');displayCart()">
                  -
                </button>
                <span>${product.quantity}</span>
                <button onclick="addToCart('${product.id}');displayCart()">
                  +
                </button>
              </td>
              <td>$${
                Math.round(
                  Number(product.newPrice.trim().slice(1)) *
                    product.quantity *
                    100
                ) / 100
              }</td>
            </tr>
          `
          )
          .join("")}
      </table>

      <div class="checkout">
        <div class="total">
          <h2>Grand total: $${
            Math.round(
              cart.reduce((acc, product) => {
                acc +=
                  Number(product.newPrice.trim().slice(1)) * product.quantity;
                return acc;
              }, 0) * 100
            ) / 100
          }</h2>
        </div>
        <p>Card information</p>
        <div class="credit">
          <input placeholder="1234 1234 1234 1234" />
          <img src="./assets/payment-option.png" />
        </div>
        <div class="date-and-cvc">
          <input placeholder="MM / YY" />
          <input placeholder="CVC" />
        </div>

        <button onclick="alert('Purchased successfully');localStorage.removeItem('cart');displayCart()">Checkout</button>
      </div>
    `;
  }
};

displayCart();
