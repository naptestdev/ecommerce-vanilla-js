if (localStorage.getItem("currentUser")) {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="/cart/cart.html">
      <i class='bx bx-cart'></i>
      <span id="cart-count"></span>
    </a>
    <a href="javascript:;" onclick="logout()">
      <i class='bx bx-log-out' ></i>
    </a>
    <img src="${`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
      JSON.parse(localStorage.getItem("currentUser")).username
    )}`}" />
  `;
} else {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="./register/register.html">
      <i class="fa-solid fa-right-to-bracket"></i>
    </a>
  `;
}

const updateCartCount = () => {
  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    document.getElementById("cart-count").innerText = cart.length;
  }
};

updateCartCount();

const logout = () => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cart");
  location.reload();
};
