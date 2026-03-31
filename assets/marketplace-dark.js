(() => {
  const marketRoot = document.getElementById("marketContent");
  const resultCount = document.getElementById("resultCount");
  if (!marketRoot || !resultCount) return;

  const PRODUCTS = [
    // KITS
    {
      id: 1,
      cat: "kits",
      title: "Auth Kit Pro",
      desc: "Complete authentication flow — login, register, forgot password, OTP, biometrics. Supports Firebase, Supabase & custom REST APIs.",
      tags: ["BLoC", "Firebase", "Supabase", "REST API"],
      thumb: "thumb-purple",
      icon: "🔐",
      price: 49,
      priceType: "paid",
      rating: 4.9,
      downloads: "2.1k",
      badge: "hot",
      badgeLabel: "🔥 Hot",
      isNew: false,
      slug: "auth-kit-pro",
      href: "../products/marketplace-product.html#auth-kit-pro",
    },
    {
      id: 2,
      cat: "kits",
      title: "Chat Kit",
      desc: "Real-time messaging UI with rooms, media sharing, reactions, read receipts, and typing indicators. Firebase Firestore backed.",
      tags: ["Firebase", "Riverpod"],
      thumb: "thumb-blue",
      icon: "💬",
      price: 39,
      priceType: "paid",
      rating: 4.8,
      downloads: "1.4k",
      badge: "new",
      badgeLabel: "New",
      isNew: true,
      slug: "chat-kit",
      href: "../products/marketplace-product.html#chat-kit",
    },
    {
      id: 3,
      cat: "kits",
      title: "Payments Kit",
      desc: "Stripe & in-app purchase integration. Subscription management, receipt validation, paywall screens, and webhook helpers.",
      tags: ["BLoC", "REST API"],
      thumb: "thumb-green",
      icon: "💳",
      price: 59,
      priceType: "paid",
      rating: 4.7,
      downloads: "980",
      badge: null,
      badgeLabel: null,
      isNew: false,
      slug: "payments-kit",
      href: "../products/marketplace-product.html#payments-kit",
    },
    {
      id: 4,
      cat: "kits",
      title: "Onboarding Kit",
      desc: "Animated onboarding flows with 15+ screen layouts, lottie support, permission requests, and user preference capture.",
      tags: ["Riverpod", "Provider"],
      thumb: "thumb-orange",
      icon: "🚀",
      price: 0,
      priceType: "free",
      rating: 4.9,
      downloads: "3.2k",
      badge: "free",
      badgeLabel: "Free",
      isNew: false,
      slug: "onboarding-kit",
      href: "../products/marketplace-product.html#onboarding-kit",
    },
    {
      id: 5,
      cat: "kits",
      title: "Notification Kit",
      desc: "Push notifications, in-app notification center, badge counts, deep linking, and scheduled alerts. FCM pre-configured.",
      tags: ["Firebase", "BLoC"],
      thumb: "thumb-teal",
      icon: "🔔",
      price: 29,
      priceType: "paid",
      rating: 4.6,
      downloads: "1.1k",
      badge: null,
      badgeLabel: null,
      isNew: false,
      slug: "notification-kit",
      href: "../products/marketplace-product.html#notification-kit",
    },
    {
      id: 6,
      cat: "kits",
      title: "Map & Location Kit",
      desc: "Google Maps integration with clustering, custom markers, geofencing, real-time tracking, and route drawing.",
      tags: ["Riverpod", "REST API"],
      thumb: "thumb-indigo",
      icon: "🗺️",
      price: 45,
      priceType: "paid",
      rating: 4.8,
      downloads: "760",
      badge: "new",
      badgeLabel: "New",
      isNew: true,
      slug: "map-location-kit",
      href: "../products/marketplace-product.html#map-location-kit",
    },

    // TEMPLATES
    {
      id: 7,
      cat: "templates",
      title: "SaaS Starter Template",
      desc: "Full SaaS app scaffold: auth, billing, dashboard, settings, team management. 30+ screens. Clean architecture + BLoC.",
      tags: ["BLoC", "Supabase", "Firebase"],
      thumb: "thumb-purple",
      icon: "🏗️",
      price: 79,
      priceType: "paid",
      rating: 5.0,
      downloads: "1.8k",
      badge: "hot",
      badgeLabel: "🔥 Drop",
      isNew: false,
      oldPrice: 129,
      slug: "saas-starter-template",
      href: "../products/marketplace-product.html#saas-starter-template",
    },
    {
      id: 8,
      cat: "templates",
      title: "E-Commerce Template",
      desc: "Full shopping app with product catalog, cart, wishlist, checkout, order tracking, and seller dashboard.",
      tags: ["BLoC", "Firebase", "REST API"],
      thumb: "thumb-orange",
      icon: "🛍️",
      price: 69,
      priceType: "paid",
      rating: 4.8,
      downloads: "1.2k",
      badge: null,
      badgeLabel: null,
      isNew: false,
      slug: "ecommerce-template",
      href: "../products/marketplace-product.html#ecommerce-template",
    },
    {
      id: 9,
      cat: "templates",
      title: "Social App Template",
      desc: "Instagram-style social app: feed, stories, reels-like video, profiles, follows, DMs. Ready to customize.",
      tags: ["Riverpod", "Firebase"],
      thumb: "thumb-pink",
      icon: "📱",
      price: 89,
      priceType: "paid",
      rating: 4.7,
      downloads: "870",
      badge: "new",
      badgeLabel: "New",
      isNew: true,
      slug: "social-app-template",
      href: "../products/marketplace-product.html#social-app-template",
    },
    {
      id: 10,
      cat: "templates",
      title: "Fitness App Template",
      desc: "Workout tracker, meal planner, progress charts, streak system, and coach dashboard. Dark UI, clean design.",
      tags: ["Provider", "Supabase"],
      thumb: "thumb-green",
      icon: "💪",
      price: 0,
      priceType: "freemium",
      rating: 4.6,
      downloads: "2.4k",
      badge: "free",
      badgeLabel: "Freemium",
      isNew: false,
      slug: "fitness-app-template",
      href: "../products/marketplace-product.html#fitness-app-template",
    },

    // AI MODULES
    {
      id: 11,
      cat: "ai",
      title: "AI Chat Module",
      desc: "GPT-4 powered chat widget. Streaming responses, conversation history, system prompts, context injection, custom UI.",
      tags: ["Riverpod", "REST API"],
      thumb: "thumb-purple",
      icon: "🤖",
      price: 49,
      priceType: "paid",
      rating: 4.9,
      downloads: "1.5k",
      badge: "hot",
      badgeLabel: "🔥 Hot",
      isNew: false,
      slug: "ai-chat-module",
      href: "../products/marketplace-product.html#ai-chat-module",
    },
    {
      id: 12,
      cat: "ai",
      title: "AI Image Generator",
      desc: "DALL-E & Stable Diffusion wrapper. Prompt builder UI, gallery, image editing, style presets. One command install.",
      tags: ["BLoC", "REST API"],
      thumb: "thumb-blue",
      icon: "🎨",
      price: 39,
      priceType: "paid",
      rating: 4.7,
      downloads: "820",
      badge: "new",
      badgeLabel: "New",
      isNew: true,
      slug: "ai-image-generator",
      href: "../products/marketplace-product.html#ai-image-generator",
    },
    {
      id: 13,
      cat: "ai",
      title: "Voice AI Module",
      desc: "Speech-to-text + text-to-speech with Whisper & ElevenLabs. Push-to-talk, live transcription, voice commands.",
      tags: ["Riverpod", "REST API"],
      thumb: "thumb-teal",
      icon: "🎙️",
      price: 45,
      priceType: "paid",
      rating: 4.8,
      downloads: "640",
      badge: null,
      badgeLabel: null,
      isNew: false,
      slug: "voice-ai-module",
      href: "../products/marketplace-product.html#voice-ai-module",
    },

    // CLI & TOOLS
    {
      id: 14,
      cat: "cli",
      title: "Embit CLI",
      desc: "The EVLOV command-line tool. Scaffold projects, install kits, generate code, manage configs. The heart of EVLOV.",
      tags: [],
      thumb: "thumb-dark",
      icon: "⚡",
      price: 0,
      priceType: "free",
      rating: 5.0,
      downloads: "8.4k",
      badge: "free",
      badgeLabel: "Free",
      isNew: false,
      slug: "embit-cli",
      href: "../products/embit-cli.html",
    },
    {
      id: 15,
      cat: "cli",
      title: "Figma → Flutter Generator",
      desc: "Export Figma designs directly to Flutter widgets. Smart component mapping, theme extraction, responsive code.",
      tags: [],
      thumb: "thumb-indigo",
      icon: "🎯",
      price: 0,
      priceType: "freemium",
      rating: 4.6,
      downloads: "3.1k",
      badge: "free",
      badgeLabel: "Freemium",
      isNew: true,
      slug: "figma-to-flutter-generator",
      href: "../products/marketplace-product.html#figma-to-flutter-generator",
  },
  ];

  const CATEGORY_META = {
    all: { label: "All Products", icon: "✦" },
    kits: { label: "Kits", icon: "📦" },
    templates: { label: "Templates", icon: "🗂️" },
    ai: { label: "AI Modules", icon: "🤖" },
    cli: { label: "CLI & Tools", icon: "⚡" },
  };

  let state = { cat: "all", query: "", price: [], works: [], sort: "popular" };

  const renderCard = (p) => {
    const priceHtml =
      p.priceType === "free"
        ? `<span class="card-price free">Free</span>`
        : p.priceType === "freemium"
        ? `<span class="card-price free">Freemium</span>`
        : `<span class="card-price">$${p.price}${p.oldPrice ? `<small>$${p.oldPrice}</small>` : ""}</span>`;

    const badgeHtml = p.badge ? `<span class="thumb-badge badge-${p.badge}">${p.badgeLabel}</span>` : "";
    const tagsHtml = (p.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    const href = p.href || "#";

    return `
      <div class="product-card" data-id="${p.id}" data-href="${href}">
        <div class="card-thumb-wrap">
          <div class="card-thumb thumb-gradient ${p.thumb}">
            <span class="card-thumb-icon">${p.icon}</span>
          </div>
          ${badgeHtml}
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span class="card-category">${CATEGORY_META[p.cat]?.label || p.cat}</span>
            <span class="card-rating"><i class="fas fa-star"></i> ${p.rating}</span>
          </div>
          <div class="card-title">${p.title}</div>
          <div class="card-desc">${p.desc}</div>
          ${tagsHtml ? `<div class="card-tags">${tagsHtml}</div>` : ""}
        </div>
        <div class="card-footer">
          ${priceHtml}
          <div class="card-actions">
            <a class="btn btn-outline btn-sm" href="${href}" aria-label="View ${p.title} details">Details</a>
            <span class="card-downloads"><i class="fas fa-download"></i> ${p.downloads}</span>
          </div>
        </div>
      </div>`;
  };

  const promoBanner = () => `
    <div class="promo-banner">
      <div>
        <h3>🎉 IGNITE Spring Drop — Up to 40% off bundles</h3>
        <p>Get the SaaS Starter + Auth Kit + Payments Kit bundle at a special launch price. Limited time.</p>
      </div>
      <a class="btn btn-primary" href="../products/marketplace-product.html#saas-starter-template"><i class="fas fa-tag"></i> Shop Bundle</a>
    </div>`;

  const syncChips = () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.cat === state.cat));
  };

  const getFiltered = () => {
    let items = [...PRODUCTS];
    if (state.cat !== "all") items = items.filter((p) => p.cat === state.cat);

    if (state.query) {
      const q = state.query.toLowerCase();
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          (p.tags || []).some((t) => t.toLowerCase().includes(q))
      );
    }

    if (state.price.length) items = items.filter((p) => state.price.includes(p.priceType));
    if (state.works.length) items = items.filter((p) => state.works.some((w) => (p.tags || []).includes(w)));

    if (state.sort === "newest") items = items.filter((p) => p.isNew).concat(items.filter((p) => !p.isNew));
    if (state.sort === "price_asc") items.sort((a, b) => (a.price || 0) - (b.price || 0));
    if (state.sort === "price_desc") items.sort((a, b) => (b.price || 0) - (a.price || 0));

    return items;
  };

  const render = () => {
    const items = getFiltered();
    resultCount.textContent = `Showing ${items.length} product${items.length === 1 ? "" : "s"}`;

    if (!items.length) {
      marketRoot.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-box-open"></i>
          <h3>No products found</h3>
          <p>Try adjusting your filters or search query.</p>
        </div>`;
      return;
    }

    if (state.cat === "all" && !state.query && !state.price.length && !state.works.length) {
      const grouped = {};
      items.forEach((p) => ((grouped[p.cat] = grouped[p.cat] || []).push(p)));
      const catOrder = ["kits", "templates", "ai", "cli"];

      marketRoot.innerHTML = catOrder
        .filter((c) => grouped[c])
        .map((c) => {
          const meta = CATEGORY_META[c];
          return `
            <div class="cat-section">
              <div class="cat-section-header">
                <h3><span class="cat-icon">${meta.icon}</span>${meta.label}</h3>
                <a class="see-all" data-cat="${c}" href="#catalog">See all →</a>
              </div>
              <div class="product-grid">
                ${grouped[c].slice(0, 4).map(renderCard).join("")}
              </div>
            </div>
            ${c === "kits" ? promoBanner() : ""}`;
        })
        .join("");

      marketRoot.querySelectorAll(".see-all").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          state.cat = a.dataset.cat;
          syncChips();
          render();
          document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
        });
      });
    } else {
      marketRoot.innerHTML = `<div class="product-grid">${items.map(renderCard).join("")}</div>`;
    }

    marketRoot.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target?.closest?.("a,button,input,select,label")) return;
        const href = card.getAttribute("data-href");
        if (href) window.location.href = href;
      });
    });
  };

  // Events
  document.getElementById("categoryChips")?.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    state.cat = chip.dataset.cat;
    syncChips();
    render();
  });

  const searchInput = document.getElementById("marketSearch");
  searchInput?.addEventListener("input", () => {
    state.query = (searchInput.value || "").trim();
    render();
  });

  document.getElementById("searchBtn")?.addEventListener("click", () => {
    state.query = (searchInput?.value || "").trim();
    render();
  });

  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  document.querySelectorAll(".priceFilter").forEach((cb) => {
    cb.addEventListener("change", () => {
      state.price = [...document.querySelectorAll(".priceFilter:checked")].map((c) => c.value);
      render();
    });
  });

  document.querySelectorAll(".worksFilter").forEach((cb) => {
    cb.addEventListener("change", () => {
      state.works = [...document.querySelectorAll(".worksFilter:checked")].map((c) => c.value);
      render();
    });
  });

  document.getElementById("clearFilters")?.addEventListener("click", () => {
    state = { cat: "all", query: "", price: [], works: [], sort: "popular" };
    document.querySelectorAll(".priceFilter, .worksFilter").forEach((cb) => (cb.checked = false));
    if (searchInput) searchInput.value = "";
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) sortSelect.value = "popular";
    syncChips();
    render();
  });

  // Init
  syncChips();
  render();
})();
