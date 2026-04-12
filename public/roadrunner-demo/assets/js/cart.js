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
    btn.textContent = 'Added!';
    btn.classList.remove('btn-success');
    btn.classList.add('btn-default');
    setTimeout(function() {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('btn-default');
      btn.classList.add('btn-success');
    }, 800);
  }
}

function removeFromCart(itemId) {
  var cart = getCart();
  delete cart[itemId];
  saveCart(cart);
  renderCartBadge();
  renderCartTable();
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
  renderCartTable();
}

function renderCartBadge() {
  var count = cartItemCount();
  var badges = document.querySelectorAll('.cart-badge');
  badges.forEach(function(el) {
    el.textContent = count > 0 ? ' (' + count + ')' : '';
  });
}

function renderMenu() {
  var container = document.getElementById('menu-container');
  if (!container) return;

  var html = '';
  window.CATEGORIES.forEach(function(cat) {
    var items = window.MENU_ITEMS.filter(function(i) { return i.category === cat; });
    html += '<div class="panel panel-default">';
    html += '<div class="panel-heading"><h3 class="panel-title">' + cat + '</h3></div>';
    html += '<div class="panel-body">';
    html += '<table class="table table-hover" style="margin-bottom:0;">';
    html += '<thead><tr><th>Item</th><th>Description</th><th>Price</th><th></th></tr></thead><tbody>';
    items.forEach(function(item) {
      html += '<tr>';
      html += '<td><strong>' + item.name + '</strong></td>';
      html += '<td class="text-muted">' + item.description + '</td>';
      html += '<td>$' + item.price.toFixed(2) + '</td>';
      html += '<td><button id="add-btn-' + item.id + '" class="btn btn-sm btn-success"';
      html += ' onclick="addToCart(' + item.id + ')">Add to Cart</button></td>';
      html += '</tr>';
    });
    html += '</tbody></table></div></div>';
  });
  container.innerHTML = html;
  renderCartBadge();
}

function renderCartTable() {
  var container = document.getElementById('cart-container');
  if (!container) return;

  var cart = getCart();
  var keys = Object.keys(cart).map(Number);

  if (keys.length === 0) {
    container.innerHTML =
      '<div class="alert alert-warning text-center">' +
      '<p>Your cart is empty.</p>' +
      '<a href="index.html" class="btn btn-default">Back to Menu</a>' +
      '</div>';
    renderCartBadge();
    return;
  }

  var total = 0;
  var rows = '';
  keys.forEach(function(id) {
    var item = window.MENU_ITEMS.find(function(i) { return i.id === id; });
    if (!item) return;
    var qty = cart[id];
    var subtotal = item.price * qty;
    total += subtotal;
    rows += '<tr>';
    rows += '<td>' + item.name + '</td>';
    rows += '<td>$' + item.price.toFixed(2) + '</td>';
    rows += '<td>';
    rows += '<button class="btn btn-xs btn-default" onclick="updateQty(' + id + ',-1)">−</button> ';
    rows += '<strong>' + qty + '</strong> ';
    rows += '<button class="btn btn-xs btn-default" onclick="updateQty(' + id + ',1)">+</button>';
    rows += '</td>';
    rows += '<td>$' + subtotal.toFixed(2) + '</td>';
    rows += '<td><button class="btn btn-xs btn-danger" onclick="removeFromCart(' + id + ')">Remove</button></td>';
    rows += '</tr>';
  });

  var html =
    '<table class="table table-bordered">' +
    '<thead><tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>' +
    '<tbody>' + rows + '</tbody>' +
    '<tfoot><tr><td colspan="3" class="text-right"><strong>Total</strong></td>' +
    '<td colspan="2"><strong>$' + total.toFixed(2) + '</strong></td></tr></tfoot>' +
    '</table>' +
    '<div class="text-right">' +
    '<a href="index.html" class="btn btn-default" style="margin-right:8px;">Back to Menu</a>' +
    '<a href="checkout.html" class="btn btn-primary">Proceed to Checkout</a>' +
    '</div>';

  container.innerHTML = html;
  renderCartBadge();
}
