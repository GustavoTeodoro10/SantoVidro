/* Santo Vidro · behaviour. Plain JS, no dependencies. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------
     GoatCounter: one delegated listener for every WhatsApp CTA.
     The link keeps working if the script is blocked (adblock).
     --------------------------------------------------------------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-gc-event]");
    if (!el) return;
    var name = el.getAttribute("data-gc-event");
    if (window.goatcounter && window.goatcounter.count) {
      try {
        window.goatcounter.count({ path: name, title: name, event: true });
      } catch (_) { /* never block the link */ }
    }
  });

  /* ---------------------------------------------------------------
     Mobile menu
     --------------------------------------------------------------- */
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    toggle.querySelector("i").className = open ? "ph-bold ph-x" : "ph-bold ph-list";
    menu.classList.toggle("is-open", open);
    if (open) { menu.removeAttribute("inert"); } else { menu.setAttribute("inert", ""); }
  }
  if (toggle && menu) {
    menu.setAttribute("inert", "");
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------------------------------------------------------------
     Nav: shadow once scrolled + active section (IntersectionObserver)
     --------------------------------------------------------------- */
  var nav = document.querySelector(".site-nav");
  var sentinel = document.getElementById("top-sentinel");
  if (nav && sentinel && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      nav.classList.toggle("is-scrolled", !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  var links = [].slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if (sections.length && "IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + en.target.id));
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------------- */
  var revealEls = [].slice.call(document.querySelectorAll("[data-reveal]"));
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------------
     Floating WhatsApp button: appears once the hero is out of view
     --------------------------------------------------------------- */
  var fab = document.getElementById("fab");
  var hero = document.getElementById("inicio");
  if (fab && hero && "IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      fab.classList.toggle("is-visible", !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(hero);
  }

  /* ---------------------------------------------------------------
     Gallery filter
     --------------------------------------------------------------- */
  var chips = [].slice.call(document.querySelectorAll(".chip[data-filter]"));
  var items = [].slice.call(document.querySelectorAll(".g-item"));
  var visible = function () { return items.filter(function (i) { return !i.hidden; }); };
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var f = chip.getAttribute("data-filter");
      chips.forEach(function (c) { c.setAttribute("aria-pressed", String(c === chip)); });
      items.forEach(function (it) {
        var show = f === "todos" || it.getAttribute("data-cat") === f;
        it.hidden = !show;
        it.classList.remove("g-enter");
      });
      /* re-enter animation for the filtered set (reflow restarts it) */
      void document.body.offsetWidth;
      visible().forEach(function (it, n) {
        it.style.setProperty("--i", String(Math.min(n, 8)));
        it.classList.add("g-enter");
      });
    });
  });

  /* ---------------------------------------------------------------
     Lightbox (native <dialog>)
     --------------------------------------------------------------- */
  var dlg = document.getElementById("lightbox");
  if (dlg && items.length) {
    var lbImg = dlg.querySelector(".lb-img");
    var lbCap = dlg.querySelector(".lb-cap");
    var current = 0;
    var show = function (idx) {
      var list = visible();
      if (!list.length) return;
      current = (idx + list.length) % list.length;
      var it = list[current];
      var img = it.querySelector("img");
      lbImg.src = it.getAttribute("data-full") || img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = img.alt;
    };
    items.forEach(function (it) {
      it.addEventListener("click", function () {
        var list = visible();
        show(list.indexOf(it));
        if (!dlg.open) dlg.showModal();
      });
    });
    dlg.querySelector("[data-lb-close]").addEventListener("click", function () { dlg.close(); });
    dlg.querySelector("[data-lb-prev]").addEventListener("click", function () { show(current - 1); });
    dlg.querySelector("[data-lb-next]").addEventListener("click", function () { show(current + 1); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }
})();
