var CART_KEY = 'rrr_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function cartItemCount() {
  var cart = getCart();
  return Object.values(cart).reduce(function(sum, qty) { return sum + qty; }, 0);
}

function addToCart(itemId) {
  var cart = getCart();
  cart[itemId] = (cart[itemId] || 0) + 1;
  saveCart(cart);
  renderCartBadge();
  var btn = document.getElementById('add-btn-' + itemId);
  if (btn) {
    var orig = btn.textContent;
    btn.textContent = 'Added!';
    btn.classList.add('added');
    setTimeout(function() {
      btn.textContent = orig;
      btn.classList.remove('added');
    }, 800);
  }
}

function removeFromCart(itemId) {
  var cart = getCart();
  delete cart[itemId];
  saveCart(cart);
  renderCartBadge();
  renderCartPage();
}

function updateQty(itemId, delta) {
  var cart = getCart();
  var newQty = (cart[itemId] || 0) + delta;
  if (newQty <= 0) {
    delete cart[itemId];
  } else {
    cart[itemId] = newQty;
  }
  saveCart(cart);
  renderCartBadge();
  renderCartPage();
}

function renderCartBadge() {
  var count = cartItemCount();
  var badges = document.querySelectorAll('.cart-badge');
  badges.forEach(function(el) {
    el.textContent = count > 0 ? ' (' + count + ')' : '';
  });
}

/* ── Cart page (cart.html) ─────────────────────────────────────── */
function renderCartPage() {
  var container = document.getElementById('cart-container');
  if (!container) return;

  var cart = getCart();
  var keys = Object.keys(cart).map(Number);

  if (keys.length === 0) {
    container.innerHTML =
      '<div class="empty-cart">' +
      '<p style="font-size:16px; color:#555;">Your cart is empty.</p>' +
      '<a href="shop.html" style="color:#df6335;">Back to Menu</a>' +
      '</div>';
    renderCartBadge();
    return;
  }

  var total = 0;
  var itemsHtml = '';
  keys.forEach(function(id) {
    var item = window.MENU_ITEMS.find(function(i) { return i.id === id; });
    if (!item) return;
    var qty = cart[id];
    var subtotal = item.price * qty;
    total += subtotal;
    itemsHtml +=
      '<div class="item-row">' +
        '<div class="item-img">' +
          '<img src="assets/images/' + item.image + '" alt="' + item.name + '" />' +
        '</div>' +
        '<div class="item-info">' +
          '<div class="name">' + item.name + '</div>' +
          '<div class="price">$' + item.price.toFixed(2) + ' ea</div>' +
          '<div style="color:#555;font-size:12px;">Subtotal: $' + subtotal.toFixed(2) + '</div>' +
          '<button class="remove-btn" onclick="removeFromCart(' + id + ')">Remove</button>' +
        '</div>' +
        '<div class="item-qty">' +
          '<button class="qty-btn" onclick="updateQty(' + id + ', 1)">+</button>' +
          '<span class="qty-val">' + qty + '</span>' +
          '<button class="qty-btn" onclick="updateQty(' + id + ', -1)">−</button>' +
        '</div>' +
      '</div>';
  });

  var html =
    '<div class="cartContent">' +
      '<div class="cart-section">' +
        '<h3 style="color:#12213e; margin-top:0;">Items</h3>' +
        itemsHtml +
        '<div style="margin-top:12px;">' +
          '<a href="shop.html" style="color:#df6335; font-size:13px;">← Continue Shopping</a>' +
        '</div>' +
      '</div>' +
      '<div class="price-section">' +
        '<div class="priceDetails">' +
          '<h3>Price Details</h3>' +
          '<div class="price-line"><span>Subtotal</span><span>$' + total.toFixed(2) + '</span></div>' +
          '<div class="price-line"><span>Delivery Fee</span><span>Free</span></div>' +
          '<div class="price-line total"><span>Total Sale</span><span>$' + total.toFixed(2) + '</span></div>' +
          '<button class="checkoutBtn" onclick="document.querySelector(\'.checkoutContent\').scrollIntoView({behavior:\'smooth\'})">Checkout</button>' +
        '</div>' +
        '<div class="discountSection">' +
          '<h3>Apply Discount</h3>' +
          '<div class="form-group">' +
            '<label>Discount Code:</label>' +
            '<input class="form-control" placeholder="Enter code" disabled>' +
          '</div>' +
          '<button class="discountBtn" onclick="alert(\'Discount codes are disabled in this static demo.\')">Apply</button>' +
        '</div>' +
      '</div>' +
      '<div style="clear:both;"></div>' +
    '</div>';

  container.innerHTML = html;
  renderCartBadge();
}
