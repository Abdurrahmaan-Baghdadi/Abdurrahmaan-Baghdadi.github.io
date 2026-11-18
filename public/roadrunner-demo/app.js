// Roadrunner Roasts redesign: order-ahead flow (menu → customize → cart → pickup → tracking).
import { MENU, CATEGORIES, SIZES, MILKS, SWEETNESS, EXTRA_SHOT, TAX_RATE, PROMO, STARS_FOR_REWARD } from "./menu.js";
import { artFor, heroArt } from "./art.js";

const $ = (sel) => document.querySelector(sel);
const byId = Object.fromEntries(MENU.map((m) => [m.id, m]));
const money = (n) => `$${n.toFixed(2)}`;

// ── Persistence (best effort: private browsing may block storage) ──────────────
const store = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* not saved */ }
  },
};

const state = {
  cart: store.get("rr2_cart", []),    // [{ key, id, size, milk, shot, sweet, warm, qty }]
  stars: store.get("rr2_stars", 0),
  category: "All",
  query: "",
  promo: false,
  details: { name: "", pickup: "", pay: "pickup" },
};

const saveCart = () => store.set("rr2_cart", state.cart);

// ── Pricing ────────────────────────────────────────────────────────────────────
function unitPrice(line) {
  const item = byId[line.id];
  let price = item.price;
  if (item.drink) {
    price += SIZES.find((s) => s.id === line.size).delta;
    if (item.milk) price += MILKS.find((m) => m.id === line.milk).delta;
    if (line.shot) price += EXTRA_SHOT;
  }
  return price;
}

function describe(line) {
  const item = byId[line.id];
  if (!item.drink) return line.warm ? "Warmed" : "Room temperature";
  const parts = [SIZES.find((s) => s.id === line.size).label];
  if (item.milk) parts.push(`${MILKS.find((m) => m.id === line.milk).label} milk`);
  if (line.shot) parts.push("Extra shot");
  if (line.sweet !== "Regular") parts.push(`${line.sweet} sweet`);
  return parts.join(" · ");
}

function totals() {
  const subtotal = state.cart.reduce((sum, l) => sum + unitPrice(l) * l.qty, 0);
  const discount = state.promo ? subtotal * PROMO.off : 0;
  const tax = (subtotal - discount) * TAX_RATE;
  return { subtotal, discount, tax, total: subtotal - discount + tax };
}

const itemCount = () => state.cart.reduce((n, l) => n + l.qty, 0);

// ── Header: cart count and stars ───────────────────────────────────────────────
function renderHeader(bump = false) {
  const count = $("#cart-count");
  const n = itemCount();
  count.hidden = n === 0;
  count.textContent = n;
  if (bump) { count.classList.remove("bump"); void count.offsetWidth; count.classList.add("bump"); }
  $("#stars-count").textContent = state.stars;
}

function renderRewards() {
  const progress = state.stars % STARS_FOR_REWARD;
  const freeDrinks = Math.floor(state.stars / STARS_FOR_REWARD);
  $("#rewards-stars").textContent = progress;
  $("#rewards-bar").setAttribute("aria-valuenow", progress);
  $("#rewards-bar span").style.width = `${(progress / STARS_FOR_REWARD) * 100}%`;
  $("#rewards-note").textContent = state.stars === 0
    ? "Place an order to start earning."
    : `${STARS_FOR_REWARD - progress} more stars to your next free drink.` + (freeDrinks ? ` You've unlocked ${freeDrinks} free drink${freeDrinks > 1 ? "s" : ""}!` : "");
}

// ── Menu ───────────────────────────────────────────────────────────────────────
function matches(item) {
  const q = state.query.trim().toLowerCase();
  const inCategory = state.category === "All" || item.category === state.category;
  const inSearch = !q || `${item.name} ${item.description} ${item.category} ${item.tags.join(" ")}`.toLowerCase().includes(q);
  return inCategory && inSearch;
}

function renderGrid() {
  const items = MENU.filter(matches);
  $("#grid").innerHTML = items.map((item) => `
    <article class="item">
      <div class="item-art" data-cat="${item.category}">${artFor(item)}</div>
      <div class="item-body">
        <div class="tags">${item.tags.map((t) => `<span class="tag ${t}">${t}</span>`).join("")}</div>
        <div class="item-top"><h3>${item.name}</h3><span class="price">${item.drink ? "from " : ""}${money(item.price)}</span></div>
        <p>${item.description}</p>
        <button class="btn btn-primary block" data-add="${item.id}" aria-label="Customize and add ${item.name}">${item.drink ? "Customize" : "Add to order"}</button>
      </div>
    </article>`).join("");
  $("#empty").hidden = items.length > 0;
}

// Chip counts follow the search box but ignore the selected category
function categoryCount(cat) {
  const q = state.query.trim().toLowerCase();
  return MENU.filter((m) => (cat === "All" || m.category === cat) &&
    (!q || `${m.name} ${m.description} ${m.category} ${m.tags.join(" ")}`.toLowerCase().includes(q))).length;
}

function renderMenu() {
  $("#chips").innerHTML = ["All", ...CATEGORIES].map((cat) =>
    `<button class="chip" data-cat="${cat}" aria-pressed="${state.category === cat}">${cat}<span class="n">${categoryCount(cat)}</span></button>`
  ).join("");
  renderGrid();
}

// ── Customize dialog ───────────────────────────────────────────────────────────
let draft = null;   // the line being customized

function optionGroup(name, legend, choices, current) {
  return `<fieldset><legend>${legend}</legend><div class="options">${choices.map((c) => `
    <label class="option"><input type="radio" name="${name}" value="${c.value}" ${c.value === current ? "checked" : ""} />
      <span>${c.label}${c.detail ? `<small>${c.detail}</small>` : ""}</span></label>`).join("")}</div></fieldset>`;
}

function openCustomize(item) {
  draft = { id: item.id, size: "m", milk: "whole", shot: false, sweet: "Regular", warm: true, qty: 1 };
  $("#customize-title").textContent = item.name;
  $("#customize-desc").textContent = item.description;
  $("#customize-art").innerHTML = artFor(item);
  $("#customize-art").style.background = getComputedStyle(document.documentElement).getPropertyValue(
    item.category === "Hot Coffee" ? "--hot" : item.category === "Cold Drinks" ? "--cold" : "--bake");

  let html = "";
  if (item.drink) {
    html += optionGroup("size", "Size", SIZES.map((s) => ({ value: s.id, label: s.label, detail: `${s.detail}${s.delta ? ` +${money(s.delta)}` : ""}` })), draft.size);
    if (item.milk) html += optionGroup("milk", "Milk", MILKS.map((m) => ({ value: m.id, label: m.label, detail: m.delta ? `+${money(m.delta)}` : "" })), draft.milk);
    html += optionGroup("sweet", "Sweetness", SWEETNESS.map((s) => ({ value: s, label: s })), draft.sweet);
    html += `<fieldset><label class="toggle"><input type="checkbox" name="shot" /> Extra espresso shot <span class="hint">+${money(EXTRA_SHOT)}</span></label></fieldset>`;
  } else {
    html += `<fieldset><label class="toggle"><input type="checkbox" name="warm" checked /> Warm it up</label></fieldset>`;
  }
  $("#customize-options").innerHTML = html;
  updateDraftPrice();
  $("#customize").showModal();
}

function readDraft() {
  const form = $("#customize-form");
  const item = byId[draft.id];
  if (item.drink) {
    draft.size = form.size.value;
    if (item.milk) draft.milk = form.milk.value;
    draft.sweet = form.sweet.value;
    draft.shot = form.shot.checked;
  } else {
    draft.warm = form.warm.checked;
  }
}

function updateDraftPrice() {
  $("#customize-qty").textContent = draft.qty;
  $("#customize-price").textContent = money(unitPrice(draft) * draft.qty);
}

const lineKey = (l) => [l.id, l.size, l.milk, l.shot, l.sweet, l.warm].join("|");

function addDraftToCart() {
  readDraft();
  const key = lineKey(draft);
  const existing = state.cart.find((l) => l.key === key);
  if (existing) existing.qty += draft.qty;
  else state.cart.push({ ...draft, key });
  saveCart();
  renderHeader(true);
  toast(`Added ${draft.qty} × ${byId[draft.id].name} to your order`);
}

// ── Cart sheet ─────────────────────────────────────────────────────────────────
function pickupSlots() {
  const open = 7, close = 20;
  const now = new Date();
  const slots = [];
  const isOpen = now.getHours() >= open && now.getHours() < close;
  if (isOpen) slots.push({ value: "asap", label: "As soon as possible (~8 min)" });

  const t = new Date(now);
  t.setMinutes(Math.ceil((t.getMinutes() + 20) / 15) * 15, 0, 0);
  while (slots.length < 7) {
    if (t.getHours() >= close) { t.setDate(t.getDate() + 1); t.setHours(open, 0, 0, 0); }
    if (t.getHours() < open) t.setHours(open, 0, 0, 0);
    const day = t.toDateString() === now.toDateString() ? "Today" : "Tomorrow";
    const time = t.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    slots.push({ value: t.toISOString(), label: `${day}, ${time}` });
    t.setMinutes(t.getMinutes() + 15);
  }
  return slots;
}

function renderCart(focusId) {
  const body = $("#cart-body");
  if (!state.cart.length) {
    body.innerHTML = `<div class="cart-empty">${artFor(byId.latte)}<p>Your order is empty.</p>
      <button class="btn btn-primary" data-close>Browse the menu</button></div>`;
    return;
  }
  const t = totals();
  const slots = pickupSlots();
  if (!slots.some((s) => s.value === state.details.pickup)) state.details.pickup = slots[0].value;
  const d = state.details;

  body.innerHTML = `
    <ul style="list-style:none;padding:0;margin:0">${state.cart.map((l) => {
      const item = byId[l.id];
      return `<li class="line">
        <div class="line-art" style="background:var(${item.category === "Hot Coffee" ? "--hot" : item.category === "Cold Drinks" ? "--cold" : "--bake"})">${artFor(item)}</div>
        <div><div class="line-name">${item.name}</div><div class="line-opts">${describe(l)}</div></div>
        <div class="line-right">
          <strong>${money(unitPrice(l) * l.qty)}</strong>
          <div class="qty" aria-label="Quantity of ${item.name}">
            <button class="qty-btn" data-line="${l.key}" data-step="-1" id="dec-${l.key}" aria-label="${l.qty === 1 ? "Remove" : "One fewer"} ${item.name}">${l.qty === 1 ? "×" : "−"}</button>
            <output>${l.qty}</output>
            <button class="qty-btn" data-line="${l.key}" data-step="1" id="inc-${l.key}" aria-label="One more ${item.name}">+</button>
          </div>
        </div>
      </li>`;
    }).join("")}</ul>

    <label class="field">Pickup time
      <select id="pickup">${slots.map((s) => `<option value="${s.value}" ${s.value === d.pickup ? "selected" : ""}>${s.label}</option>`).join("")}</select>
    </label>
    <label class="field">Name for the order
      <input id="order-name" autocomplete="given-name" placeholder="So the barista can call you" value="" />
    </label>

    <div class="field">Promo code
      <div class="promo">
        <input id="promo-input" placeholder="Try ${PROMO.code}" aria-label="Promo code" ${state.promo ? `value="${PROMO.code}" disabled` : ""} />
        <button class="btn btn-ghost small" id="promo-apply" ${state.promo ? "disabled" : ""}>${state.promo ? "Applied" : "Apply"}</button>
      </div>
      <span class="hint ${state.promo ? "ok" : ""}" id="promo-hint">${state.promo ? PROMO.label : ""}</span>
    </div>

    <div class="field">Payment
      <div class="pay">
        <label><input type="radio" name="pay" value="pickup" ${d.pay === "pickup" ? "checked" : ""}/> Pay at pickup</label>
        <label><input type="radio" name="pay" value="campus" ${d.pay === "campus" ? "checked" : ""}/> Campus card (demo)</label>
      </div>
    </div>

    <div class="totals" aria-live="polite">
      <div><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
      ${t.discount ? `<div><span>Promo (${PROMO.code})</span><span>−${money(t.discount)}</span></div>` : ""}
      <div><span>Tax (8.25%)</span><span>${money(t.tax)}</span></div>
      <div class="grand"><span>Total</span><span>${money(t.total)}</span></div>
    </div>
    <button class="btn btn-primary block" id="place-order">Place order · ${money(t.total)}</button>
    <p class="demo-note">Demo only: no order is sent and no payment is taken. Your cart and stars stay in this browser.</p>`;

  $("#order-name").value = d.name;   // set as a property so typed text never becomes HTML
  if (focusId) document.getElementById(focusId)?.focus();
}

function openCart() {
  renderCart();
  $("#cart").showModal();
}

function stepLine(key, step) {
  const line = state.cart.find((l) => l.key === key);
  if (!line) return;
  line.qty += step;
  if (line.qty <= 0) state.cart = state.cart.filter((l) => l.key !== key);
  saveCart();
  renderHeader();
  const stillThere = state.cart.some((l) => l.key === key);
  renderCart(stillThere ? `${step > 0 ? "inc" : "dec"}-${key}` : "pickup");
}

function applyPromo() {
  const value = $("#promo-input").value.trim().toUpperCase();
  if (value === PROMO.code) {
    state.promo = true;
    renderCart("pickup");
    toast("Promo applied: 10% off");
  } else {
    const hint = $("#promo-hint");
    hint.textContent = value ? `"${value}" isn't a valid code` : "Enter a code first";
    hint.className = "hint bad";
  }
}

function placeOrder() {
  const name = state.details.name.trim();
  if (!name) {
    const input = $("#order-name");
    input.setCustomValidity("Add a name so the barista can call you");
    input.reportValidity();
    input.addEventListener("input", () => input.setCustomValidity(""), { once: true });
    return;
  }
  const t = totals();
  const earned = Math.floor(t.total);
  const order = {
    number: `RR-${Math.floor(1000 + Math.random() * 9000)}`,
    name,
    items: itemCount(),
    total: t.total,
    pickup: state.details.pickup === "asap" ? "in about 8 minutes"
      : `at ${new Date(state.details.pickup).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`,
    earned,
  };
  state.stars += earned;
  store.set("rr2_stars", state.stars);
  state.cart = [];
  state.promo = false;
  saveCart();
  renderHeader();
  renderRewards();
  $("#cart").close();
  showTracker(order);
}

// ── Order tracker ──────────────────────────────────────────────────────────────
let trackerTimers = [];

function showTracker(order) {
  const steps = ["Received", "Brewing", "Ready"];
  const body = $("#tracker-body");
  body.innerHTML = `
    <p class="eyebrow">Order placed</p>
    <h2 id="tracker-title">Thanks, <span id="tracker-name"></span>!</h2>
    <p class="order-no">${order.number}</p>
    <p class="tracker-summary">${order.items} item${order.items > 1 ? "s" : ""} · ${money(order.total)} · pickup ${order.pickup}</p>
    <ol class="track" aria-live="polite">${steps.map((s, i) => `<li data-step="${i}"><span class="dot" aria-hidden="true">${i + 1}</span>${s}</li>`).join("")}</ol>
    <p class="earned">+${order.earned} ★ earned</p>
    <div><button class="btn btn-primary" data-close>Done</button></div>`;
  $("#tracker-name").textContent = order.name;

  const set = (n) => body.querySelectorAll(".track li").forEach((li, i) => {
    li.classList.toggle("done", i <= n);
    li.classList.toggle("current", i === n + 1);
  });
  set(0);
  trackerTimers.forEach(clearTimeout);
  trackerTimers = [setTimeout(() => set(1), 2500), setTimeout(() => { set(2); toast(`${order.number} is ready for pickup`); }, 6000)];
  $("#tracker").showModal();
}

// ── Toast ──────────────────────────────────────────────────────────────────────
let toastTimer;
function toast(message) {
  const el = $("#toast");
  // Open dialogs sit in the browser's top layer, so show the toast inside one when open
  (document.querySelector("dialog[open]") ?? document.body).appendChild(el);
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
}

// ── Events ─────────────────────────────────────────────────────────────────────
document.addEventListener("click", (e) => {
  const target = e.target.closest("button, [data-close]");
  if (target?.matches("[data-close]")) target.closest("dialog")?.close();
  else if (target?.dataset.cat) { state.category = target.dataset.cat; renderMenu(); }
  else if (target?.dataset.add) openCustomize(byId[target.dataset.add]);
  else if (target?.dataset.qty) { draft.qty = Math.max(1, Math.min(10, draft.qty + Number(target.dataset.qty))); updateDraftPrice(); }
  else if (target?.dataset.line) stepLine(target.dataset.line, Number(target.dataset.step));
  else if (target?.id === "open-cart") openCart();
  else if (target?.id === "promo-apply") applyPromo();
  else if (target?.id === "place-order") placeOrder();
});

// Clicking the dimmed backdrop closes a dialog
document.querySelectorAll("dialog").forEach((dlg) =>
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); }));

$("#customize-form").addEventListener("change", () => { readDraft(); updateDraftPrice(); });
$("#customize-form").addEventListener("submit", (e) => {
  e.preventDefault();
  addDraftToCart();
  $("#customize").close();
});

$("#cart").addEventListener("input", (e) => {
  if (e.target.id === "order-name") state.details.name = e.target.value;
});
$("#cart").addEventListener("change", (e) => {
  if (e.target.id === "pickup") state.details.pickup = e.target.value;
  if (e.target.name === "pay") state.details.pay = e.target.value;
});
$("#cart").addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.id === "promo-input") { e.preventDefault(); applyPromo(); }
});

$("#search").addEventListener("input", (e) => { state.query = e.target.value; renderMenu(); });

$("#tracker").addEventListener("close", () => trackerTimers.forEach(clearTimeout));

// ── Start ──────────────────────────────────────────────────────────────────────
$("#hero-art").innerHTML = heroArt();
renderMenu();
renderHeader();
renderRewards();
