if (localStorage.getItem("currentUser")) {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="/cart/cart.html">
      <i class="fa-solid fa-cart-shopping"></i>
      <span id="cart-count"></span>
    </a>
    <a href="javascript:;" onclick="logout()">
      <i class="fa-solid fa-right-from-bracket"></i>
    </a>
    <img src="${`https://avatars.dicebear.com/api/initials/${
      JSON.parse(localStorage.getItem("currentUser")).username
    }.svg`}" />
  `;
} else {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="./login/login.html">
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
