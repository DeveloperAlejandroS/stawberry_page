/* ====================================================
   DULCE TENTACIÓN — script.js
==================================================== */

(function () {
  'use strict';

  /* ── AÑO DINÁMICO ── */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── HEADER: SOMBRA AL SCROLL ── */
  var header = document.getElementById('header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── HAMBURGER / MENÚ MÓVIL ── */
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');

  function closeMenu() {
    if (!hamburger || !navLinks) return;
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Cerrar al hacer clic en un link
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Cerrar al hacer clic fuera
    document.addEventListener('click', function (e) {
      if (navLinks.classList.contains('open') &&
          !navLinks.contains(e.target) &&
          !hamburger.contains(e.target)) {
        closeMenu();
      }
    });
  }

  /* ── NAV: LINK ACTIVO CON INTERSECTION OBSERVER ── */
  var sections = document.querySelectorAll('section[id], .hero[id]');
  var links    = document.querySelectorAll('.nav-link');

  if (sections.length && links.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var href = link.getAttribute('href').replace('#', '');
          link.classList.toggle('active', href === entry.target.id);
        });
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(function (s) { io.observe(s); });
  }

  /* ── TABS: DOMICILIO / PARA RECOGER ── */
  var tabBtns   = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.dataset.tab;

      tabBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      var panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── ANIMACIÓN DE ENTRADA (INTERSECTION OBSERVER) ── */
  var animTargets = document.querySelectorAll('.valor-card, .menu-card, .pedido-card');

  if ('IntersectionObserver' in window && animTargets.length) {
    var animIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        // Delay escalonado si tiene hermanos
        var siblings = entry.target.parentElement.querySelectorAll(
          '.valor-card, .menu-card, .pedido-card'
        );
        siblings.forEach(function (el, i) {
          el.style.transitionDelay = (i * 0.12) + 's';
        });
        animIO.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    animTargets.forEach(function (el) { animIO.observe(el); });
  } else {
    // Fallback: mostrar todos directamente
    animTargets.forEach(function (el) { el.classList.add('visible'); });
  }

})();
