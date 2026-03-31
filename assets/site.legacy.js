(() => { /* legacy backup */
  const topbar = document.querySelector(".topbar");
  const menuBtn = document.querySelector("[data-menu-btn]");
  const navLinks = document.querySelector("[data-navlinks]");

  const onScroll = () => {
    if (!topbar) return;
    if (window.scrollY > 8) topbar.classList.add("scrolled");
    else topbar.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  const backdrop = document.querySelector("[data-modal-backdrop]");
  const closeModal = () => backdrop?.classList.remove("open");
  const openModal = () => backdrop?.classList.add("open");

  document.querySelectorAll("[data-buy]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productName = btn.getAttribute("data-buy") || "Embit product";
      const title = backdrop?.querySelector("[data-modal-title]");
      const mail = backdrop?.querySelector("[data-mailto]");
      if (title) title.textContent = `Buy ${productName}`;
      if (mail) {
        const subject = encodeURIComponent(`Purchase request: ${productName}`);
        const body = encodeURIComponent(
          `Hi Embit Labs team,\\n\\nI want to purchase: ${productName}.\\n\\nName:\\nCompany (optional):\\nLicense count (optional):\\nQuestions:\\n\\nThanks!`
        );
        mail.setAttribute("href", `mailto:sales@embit.labs?subject=${subject}&body=${body}`);
      }
      openModal();
    });
  });

  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });
  document.querySelectorAll("[data-modal-close]").forEach((b) =>
    b.addEventListener("click", closeModal)
  );
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
})();
