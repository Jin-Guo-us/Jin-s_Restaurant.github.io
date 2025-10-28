/* mark JS-enabled for CSS hooks */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  /* ===========================
     1) Mobile Hamburger Toggle
     =========================== */
  const toggle = document.getElementById('navToggle') || document.querySelector('.nav .hamburger');
  const nav = document.getElementById('primaryNav') || document.querySelector('.nav .nav-links');

  if (toggle && nav) {
    const open = () => { 
      toggle.classList.add('is-open'); 
      toggle.setAttribute('aria-expanded', 'true');
      nav.classList.add('is-open'); 
      nav.classList.add('open');       // legacy class
    };
    const close = () => {
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      nav.classList.remove('open');
    };
    toggle.addEventListener('click', () => (
      toggle.getAttribute('aria-expanded') === 'true' ? close() : open()
    ));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  /* ===========================
     2) Gallery Slider Controls
     =========================== */
  const slider = document.getElementById('gallery');
  if (slider) {
    const track = slider.querySelector('.slides');
    const slides = Array.from(track ? track.children : []);
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    if (track && slides.length && prev && next) {
      let idx = 0;
      const go = (i) => {
        idx = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${idx * 100}%)`;
      };
      prev.addEventListener('click', () => go(idx - 1));
      next.addEventListener('click', () => go(idx + 1));
      window.addEventListener('resize', () => go(idx));
      go(0);
    }
  }

  /* ===========================
     3) Menu & Cart
     =========================== */
  if (document.querySelector('.menu-grid')) {
    wireMenu();
    renderCart();
  }
});

/* ===== Cart logic ===== */
const TAX_RATE = 0.08;
const CART_KEY = 'sr_cart_v1';

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY) || '[]');
const saveCart = (cart) => localStorage.setItem(CART_KEY, JSON.stringify(cart));

function addToCart(item) {
  const cart = getCart();
  const found = cart.find(p => p.id === item.id);
  if (found) found.qty += 1;
  else cart.push({ ...item, qty: 1 });
  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  let cart = getCart().filter(p => p.id !== id);
  saveCart(cart);
  renderCart();
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else saveCart(cart);
  renderCart();
}

function clearCart() {
  saveCart([]);
  renderCart();
}

function calcTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((s, p) => s + p.price * p.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

function money(n) { return `$${n.toFixed(2)}`; }

function renderCart() {
  const list = document.getElementById('cartItems');
  const subtotalEl = document.getElementById('cartSubtotal');
  const taxEl = document.getElementById('cartTax');
  const totalEl = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (!list || !subtotalEl || !taxEl || !totalEl || !checkoutBtn) return;

  const cart = getCart();
  list.innerHTML = '';

  if (cart.length === 0) {
    list.innerHTML = `<li class="cart-item"><span class="cart-name">Your cart is empty.</span></li>`;
    subtotalEl.textContent = '$0.00';
    taxEl.textContent = '$0.00';
    totalEl.textContent = '$0.00';
    checkoutBtn.disabled = true;
    return;
  }

  cart.forEach(p => {
    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div>
        <div class="cart-name">${p.name}</div>
        <div class="cart-price">${money(p.price)} each</div>
      </div>
      <div class="qty-ctrl">
        <button class="dec">–</button>
        <span class="qty">${p.qty}</span>
        <button class="inc">+</button>
      </div>
      <button class="remove">×</button>
    `;
    li.querySelector('.dec').addEventListener('click', () => changeQty(p.id, -1));
    li.querySelector('.inc').addEventListener('click', () => changeQty(p.id, 1));
    li.querySelector('.remove').addEventListener('click', () => removeFromCart(p.id));
    list.appendChild(li);
  });

  const { subtotal, tax, total } = calcTotals();
  subtotalEl.textContent = money(subtotal);
  taxEl.textContent = money(tax);
  totalEl.textContent = money(total);
  checkoutBtn.disabled = false;
}

function wireMenu() {
  document.querySelectorAll('.menu-item').forEach(card => {
    const item = {
      id: card.getAttribute('data-id'),
      name: card.getAttribute('data-name'),
      price: parseFloat(card.getAttribute('data-price'))
    };
    card.addEventListener('click', e => {
      if (e.target.classList.contains('add-btn')) addToCart(item);
    });
  });

  const clr = document.querySelector('.clear-cart');
  if (clr) clr.addEventListener('click', clearCart);
}
