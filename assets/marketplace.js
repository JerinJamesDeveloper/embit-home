(() => {
  const content = document.getElementById("marketContent");
  if (!content) return;

  const searchInput = document.getElementById("marketSearch");
  const searchBtn = document.getElementById("marketSearchBtn");
  const sortSelect = document.getElementById("marketSort");
  const clearBtn = document.getElementById("marketClear");

  const categoryChips = Array.from(document.querySelectorAll(".market-chips [data-category]"));
  const priceChecks = Array.from(document.querySelectorAll("input.marketPrice"));
  const worksChecks = Array.from(document.querySelectorAll("input.marketWorks"));

  const CATEGORIES_ORDER = ["Kits", "Templates", "AI Modules", "CLI & Tools"];

  const catalog = [
    {
      id: "authentication-pro-kit",
      title: "Authentication Pro Kit",
      desc: "JWT, social login, validation, OTP, and clean architecture wiring.",
      collections: ["Kits"],
      badge: "🔥 Popular",
      priceType: "Paid",
      priceAmount: 19,
      priceLabel: "$19",
      tags: ["JWT", "OTP", "Social login"],
      worksWith: ["BLoC", "Riverpod", "Firebase", "REST API"],
      thumb: "../assets/thumbs/authentication-pro-kit.svg",
      href: "../products/authentication-pro-kit.html",
      popularity: 95,
      date: "2026-03-15",
    },
    {
      id: "profile-user-kit",
      title: "Profile & User Management Kit",
      desc: "Profile CRUD, avatar upload, settings, and user flows ready to extend.",
      collections: ["Kits"],
      badge: "Updated",
      priceType: "Paid",
      priceAmount: 15,
      priceLabel: "$15",
      tags: ["CRUD", "Upload", "Settings"],
      worksWith: ["BLoC", "Riverpod", "Supabase", "REST API"],
      thumb: "../assets/thumbs/profile-user-kit.svg",
      href: "../products/profile-user-kit.html",
      popularity: 82,
      date: "2026-03-22",
    },
    {
      id: "notifications-kit",
      title: "Smart Notifications Kit",
      desc: "Push + in-app notifications with a clean handling system and UI patterns.",
      collections: ["Kits"],
      badge: "New",
      priceType: "Paid",
      priceAmount: 12,
      priceLabel: "$12",
      tags: ["Push", "In-app", "UX"],
      worksWith: ["BLoC", "Firebase", "REST API"],
      thumb: "../assets/thumbs/notifications-kit.svg",
      href: "../products/notifications-kit.html",
      popularity: 74,
      date: "2026-03-26",
    },
    {
      id: "admin-dashboard-kit",
      title: "Admin Dashboard Kit",
      desc: "Charts, analytics UI, dashboards, and RBAC-ready building blocks.",
      collections: ["Kits"],
      badge: "⭐ Featured",
      priceType: "Paid",
      priceAmount: 25,
      priceLabel: "$25",
      tags: ["Analytics", "Charts", "RBAC"],
      worksWith: ["BLoC", "Riverpod", "REST API"],
      thumb: "../assets/thumbs/admin-dashboard-kit.svg",
      href: "../products/admin-dashboard-kit.html",
      popularity: 88,
      date: "2026-03-10",
    },
    {
      id: "saas-starter-template",
      title: "SaaS Starter Template (Core)",
      desc: "Your main conversion product: auth + dashboard + profile — pre-wired systems.",
      collections: ["Templates"],
      badge: "🚀 Best Seller",
      priceType: "Paid",
      priceAmount: 29,
      priceLabel: "$29",
      tags: ["SaaS", "Starter", "Clean arch"],
      worksWith: ["BLoC", "Firebase", "REST API"],
      thumb: "../assets/thumbs/saas-starter-template.svg",
      href: "../products/saas-starter-template.html",
      popularity: 99,
      date: "2026-02-28",
    },
    {
      id: "ai-messaging-template",
      title: "AI Messaging Template (WebSocket)",
      desc: "Real-time AI chat using WebSocket — a big differentiator for modern apps.",
      collections: ["Templates", "AI Modules"],
      badge: "🤖 AI",
      priceType: "Paid",
      priceAmount: 39,
      priceLabel: "$39",
      tags: ["WebSocket", "Chat UI", "AI"],
      worksWith: ["BLoC", "Riverpod", "REST API"],
      thumb: "../assets/thumbs/ai-messaging-template.svg",
      href: "../products/ai-messaging-template.html",
      popularity: 91,
      date: "2026-03-05",
    },
    {
      id: "embit-generator-cli",
      title: "EMBIT Generator CLI",
      desc: "The entry point into the ecosystem — generator workflows and automation.",
      collections: ["CLI & Tools"],
      badge: "Core Tool",
      priceType: "Free",
      priceAmount: 0,
      priceLabel: "Free",
      tags: ["Generator", "Workflow", "CLI"],
      worksWith: ["BLoC", "Riverpod", "REST API"],
      thumb: "../assets/thumbs/embit-generator-cli.svg",
      href: "../products/embit-generator-cli.html",
      popularity: 97,
      date: "2026-01-20",
    },
    {
      id: "complete-app-bundle",
      title: "Complete App Bundle (All‑in‑One Pack)",
      desc: "High-ticket bundle: multiple app previews stacked — auth + AI + dashboard and more.",
      collections: ["Templates"],
      badge: "💎 Bundle",
      priceType: "Paid",
      priceAmount: 59,
      priceLabel: "$59",
      tags: ["Bundle", "Value", "All-in-one"],
      worksWith: ["BLoC", "Firebase", "REST API"],
      thumb: "../assets/thumbs/complete-app-bundle.svg",
      href: "../products/complete-app-bundle.html",
      popularity: 86,
      date: "2026-03-18",
    },
  ];

  const state = {
    q: "",
    category: "All",
    prices: new Set(),
    works: new Set(),
    sort: "popular",
  };

  const escapeHtml = (s) =>
    String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const norm = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

  const tokenize = (s) => norm(s).split(" ").filter(Boolean);

  const matchesSearch = (product, q) => {
    const tokens = tokenize(q);
    if (!tokens.length) return true;
    const hay = norm([product.title, product.desc, ...(product.tags || []), ...(product.worksWith || []), ...(product.collections || [])].join(" "));
    return tokens.every((t) => hay.includes(t));
  };

  const matchesCategory = (product, category) => {
    if (!category || category === "All") return true;
    return (product.collections || []).includes(category);
  };

  const matchesPrice = (product, prices) => {
    if (!prices || prices.size === 0) return true;
    return prices.has(product.priceType);
  };

  const matchesWorks = (product, works) => {
    if (!works || works.size === 0) return true;
    const set = new Set(product.worksWith || []);
    for (const w of works) if (!set.has(w)) return false;
    return true;
  };

  const getPriceNumber = (p) => (typeof p.priceAmount === "number" ? p.priceAmount : 0);

  const sortProducts = (products, mode) => {
    const list = [...products];
    if (mode === "newest") {
      list.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
      return list;
    }
    if (mode === "price_asc") {
      list.sort((a, b) => getPriceNumber(a) - getPriceNumber(b));
      return list;
    }
    // popular (default)
    list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    return list;
  };

  const cardHtml = (p) => {
    const tags = (p.tags || []).slice(0, 3);
    const works = (p.worksWith || []).slice(0, 6);
    const collections = (p.collections || []).slice(0, 2).join(" · ");

    return `
      <article class="card market-card" data-id="${escapeHtml(p.id)}">
        <div class="market-thumb product-thumb-shell">
          <img class="product-thumb-img" src="${escapeHtml(p.thumb)}" alt="" aria-hidden="true" loading="lazy" />
          <canvas class="product-thumb" data-thumb-src="${escapeHtml(p.thumb)}" data-thumb-fit="cover" role="img" aria-label="${escapeHtml(p.title)} thumbnail">
            ${escapeHtml(p.title)} thumbnail
          </canvas>
          ${p.badge ? `<div class="market-badge">${escapeHtml(p.badge)}</div>` : ""}
          <div class="market-price">${escapeHtml(p.priceLabel || p.priceType || "")}</div>
        </div>

        <div>
          <div class="muted" style="font-weight: 900; font-size: var(--text-xs)">${escapeHtml(collections)}</div>
          <h3 class="market-title" style="margin: 8px 0 6px">${escapeHtml(p.title)}</h3>
          <p class="muted market-desc">${escapeHtml(p.desc)}</p>
        </div>

        <div class="market-tags" aria-label="Tags">
          ${tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
        </div>

        <div class="market-works" aria-label="Works with">
          ${works.map((w) => `<span class="work-pill">${escapeHtml(w)}</span>`).join("")}
        </div>

        <div class="market-actions">
          <a class="btn btn-primary" href="${escapeHtml(p.href)}">View details</a>
          <a class="btn btn-outline" href="#top" data-scroll-top>Top</a>
        </div>
      </article>
    `;
  };

  const sectionHtml = (title, products) => {
    const items = products.map(cardHtml).join("");
    return `
      <div class="market-section" data-section="${escapeHtml(title)}">
        <h3 class="market-section-title">${escapeHtml(title)}</h3>
        <div class="market-grid">${items}</div>
      </div>
    `;
  };

  const hasActiveFilters = () => {
    return Boolean(state.q) || state.category !== "All" || state.prices.size > 0 || state.works.size > 0;
  };

  const render = () => {
    const filtered = catalog.filter((p) => {
      if (!matchesSearch(p, state.q)) return false;
      if (!matchesCategory(p, state.category)) return false;
      if (!matchesPrice(p, state.prices)) return false;
      if (!matchesWorks(p, state.works)) return false;
      return true;
    });

    const sorted = sortProducts(filtered, state.sort);

    if (!sorted.length) {
      content.innerHTML = `
        <div class="market-empty">
          <h3 class="market-section-title" style="margin-bottom: 6px">No results</h3>
          <p class="muted" style="margin: 0">Try clearing filters or searching different keywords.</p>
        </div>
      `;
      return;
    }

    if (!hasActiveFilters()) {
      const sections = CATEGORIES_ORDER.map((cat) => {
        const items = sortProducts(catalog.filter((p) => matchesCategory(p, cat)), state.sort);
        return items.length ? sectionHtml(cat, items) : "";
      }).join("");

      content.innerHTML = sections;
      return;
    }

    content.innerHTML = `
      <div class="market-empty" style="margin-bottom: 16px">
        <strong style="font-family: var(--font-display); font-size: 20px">${sorted.length} result${sorted.length === 1 ? "" : "s"}</strong>
        <div class="muted" style="margin-top: 6px">Filtered by your search and selections.</div>
      </div>
      <div class="market-grid">${sorted.map(cardHtml).join("")}</div>
    `;
  };

  const setChipActive = (category) => {
    state.category = category;
    categoryChips.forEach((c) => c.classList.toggle("active", c.getAttribute("data-category") === category));
  };

  const readChecks = () => {
    state.prices = new Set(priceChecks.filter((c) => c.checked).map((c) => c.value));
    state.works = new Set(worksChecks.filter((c) => c.checked).map((c) => c.value));
  };

  categoryChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      setChipActive(chip.getAttribute("data-category") || "All");
      render();
    });
  });

  const onSearch = () => {
    state.q = searchInput ? searchInput.value.trim() : "";
    render();
  };

  searchBtn?.addEventListener("click", onSearch);
  searchInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") onSearch();
  });
  searchInput?.addEventListener("input", () => {
    // Keep it responsive without being noisy.
    if ((searchInput.value || "").length === 0) onSearch();
  });

  sortSelect?.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  [...priceChecks, ...worksChecks].forEach((c) =>
    c.addEventListener("change", () => {
      readChecks();
      render();
    })
  );

  clearBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    state.q = "";
    state.sort = "popular";
    if (sortSelect) sortSelect.value = "popular";
    priceChecks.forEach((c) => (c.checked = false));
    worksChecks.forEach((c) => (c.checked = false));
    state.prices = new Set();
    state.works = new Set();
    setChipActive("All");
    render();
  });

  document.addEventListener("click", (e) => {
    const a = e.target?.closest?.("[data-scroll-top]");
    if (!a) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Init
  setChipActive("All");
  readChecks();
  render();
})();

