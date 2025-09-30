document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.style.display === 'flex';
      links.style.display = isOpen ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.gap = '16px';
      links.style.background = '#1A1A1A';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.right = '16px';
      links.style.padding = '16px';
      links.style.border = '1px solid #262626';
      links.style.borderRadius = '8px';
    });
  }

  // Subscribe form handler
  const form = document.getElementById('subscribe-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = /** @type {HTMLInputElement} */(document.getElementById('email'))?.value || '';
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email');
        return;
      }
      alert('Thanks! You are subscribed.');
      form.reset();
    });
  }
});


