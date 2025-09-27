// AOS (scroll reveals)
AOS.init({ duration: 900, easing: "ease-out-cubic", once: true });

// Mobile menu toggle
const burger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-links');
if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('active', open);
    burger.setAttribute('aria-expanded', String(open));
  });
}

// About teaser: activate on scroll
(() => {
  const teaser = document.querySelector('.about-teaser');
  if (!teaser) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => teaser.classList.toggle('active', e.isIntersecting));
  }, { threshold: 0.35 });
  io.observe(teaser);
})();

// Projects teaser: activate on scroll
(() => {
  const pt = document.querySelector('.projects-teaser');
  if (!pt) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => pt.classList.toggle('active', e.isIntersecting));
  }, { threshold: 0.35 });
  io.observe(pt);
})();

// Mobile dropdown toggles
document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      e.preventDefault();
      const parent = btn.closest('.dropdown');
      const open = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      const chev = btn.querySelector('.chev');
      if (chev) chev.style.transform = open ? 'rotate(180deg)' : 'none';
    }
  });
});

// Parallax the banner backgrounds
const banners = document.querySelectorAll(".banner .banner-bg");
if (banners.length) {
  document.addEventListener("scroll", () => {
    const vH = window.innerHeight;
    banners.forEach(bg => {
      const rect = bg.parentElement.getBoundingClientRect();
      const progress = 1 - Math.min(Math.max((rect.top + rect.height/2) / (vH + rect.height/2), 0), 1);
      bg.style.transform = `scale(1.06) translateY(${(progress - .5) * 16}px)`;
    });
  });
}
