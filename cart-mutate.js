const addToCart = (productId) => {
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...products.find((product) => product.id === productId),
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};

const removeFromCart = (productId) => {
  let cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  let existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity === 1) {
      cart = cart.filter((item) => item.id !== existingItem.id);
    } else {
      existingItem.quantity--;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
};
