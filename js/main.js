(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Sticky header shadow */
  var header = document.getElementById("site-header");
  function onScrollHeader() {
    if (window.scrollY > 8) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* Mobile nav */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  function closeMobileNav() {
    mobileNav.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  function toggleMobileNav() {
    var isOpen = mobileNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
  navToggle.addEventListener("click", toggleMobileNav);
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMobileNav);
  });

  /* Close mobile nav on Escape / resize to desktop */
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMobileNav();
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 960) closeMobileNav();
  });

  /* Scroll reveal (progressive enhancement — see .js-reveal in CSS) */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js-reveal");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });

    document.querySelectorAll(".reveal-stagger").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.setProperty("--i", i);
      });
    });
  }

  /* Testimonial slider */
  var track = document.getElementById("testiTrack");
  if (track) {
    var slides = track.querySelectorAll(".testi-slide");
    var dots = document.querySelectorAll("#testiDots button");
    var prevBtn = document.getElementById("testiPrev");
    var nextBtn = document.getElementById("testiNext");
    var index = 0;
    var count = slides.length;
    var autoplayId;

    function goTo(i) {
      index = (i + count) % count;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach(function (d, di) { d.classList.toggle("is-active", di === index); });
    }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }

    function startAutoplay() {
      stopAutoplay();
      autoplayId = setInterval(next, 6000);
    }
    function stopAutoplay() {
      if (autoplayId) clearInterval(autoplayId);
    }

    nextBtn.addEventListener("click", function () { next(); startAutoplay(); });
    prevBtn.addEventListener("click", function () { prev(); startAutoplay(); });
    dots.forEach(function (d, i) {
      d.addEventListener("click", function () { goTo(i); startAutoplay(); });
    });

    var wrap = document.querySelector(".testi-wrap");
    wrap.addEventListener("mouseenter", stopAutoplay);
    wrap.addEventListener("mouseleave", startAutoplay);

    /* basic touch swipe */
    var startX = null;
    track.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener("touchend", function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); startAutoplay(); }
      startX = null;
    }, { passive: true });

    goTo(0);
    startAutoplay();
  }

  /* Back to top */
  var toTop = document.getElementById("toTop");
  function onScrollTop() {
    if (window.scrollY > 600) toTop.classList.add("is-visible");
    else toTop.classList.remove("is-visible");
  }
  onScrollTop();
  window.addEventListener("scroll", onScrollTop, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* Offset smooth-scroll for anchor links (accounts for sticky header) */
  var headerH = 84;
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      var y = target.getBoundingClientRect().top + window.scrollY - headerH + 1;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", id);
    });
  });
})();
