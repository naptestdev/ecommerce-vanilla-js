if (localStorage.getItem("currentUser")) {
  document.querySelector(".icons").innerHTML += /*html*/ `
    <a href="/cart/cart.html">
      <i class='bx bx-cart'></i>
      <span id="cart-count"></span>
    </a>
    <div tabindex="0" class="avatar-action">
      <img src="${`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        JSON.parse(localStorage.getItem("currentUser")).username
      )}`}" />
      <div class="popup">
        <button onclick="location.href = './profile/profile.html'">
          <i class="fa-solid fa-user"></i>
          <span> Profile</span>
        </button>
        <button onclick="logout()">
          <i class='bx bx-log-out' ></i>
          <span> Logout</span>
        </button>
      </div>
    </div>
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
