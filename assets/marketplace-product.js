(() => {
  const slug = (window.location.hash || "").replace(/^#/, "").trim();

  const data = {
    "auth-kit-pro": {
      category: "Kit",
      title: "Auth Kit Pro",
      desc: "Complete authentication flow — login, register, forgot password, OTP, biometrics. Supports Firebase, Supabase & custom REST APIs.",
      price: "$49",
      tags: ["Kits", "Popular", "Auth"],
      worksWith: ["BLoC", "Firebase", "Supabase", "REST API"],
      bullets: ["Login / Signup screens", "OTP + forgot password flows", "Clean architecture wiring", "Ready for Firebase/Supabase/REST"],
    },
    "chat-kit": {
      category: "Kit",
      title: "Chat Kit",
      desc: "Real-time messaging UI with rooms, media sharing, reactions, read receipts, and typing indicators.",
      price: "$39",
      tags: ["Kits", "New", "Chat"],
      worksWith: ["Firebase", "Riverpod"],
      bullets: ["Chat rooms + message list UI", "Typing + read receipts patterns", "Media share placeholders", "Firebase-friendly structure"],
    },
    "payments-kit": {
      category: "Kit",
      title: "Payments Kit",
      desc: "Stripe & in-app purchase integration. Subscription management, receipt validation, paywall screens, and webhook helpers.",
      price: "$59",
      tags: ["Kits", "Payments", "Subscriptions"],
      worksWith: ["BLoC", "REST API"],
      bullets: ["Paywall + pricing UI", "Subscriptions + receipts", "Webhook-ready helpers", "Works with your backend"],
    },
    "onboarding-kit": {
      category: "Kit",
      title: "Onboarding Kit",
      desc: "Animated onboarding flows with 15+ screen layouts, permission requests, and preference capture.",
      price: "Free",
      tags: ["Kits", "Free", "Onboarding"],
      worksWith: ["Riverpod", "Provider"],
      bullets: ["15+ onboarding layouts", "Permissions request patterns", "Preference capture screens", "Easy to brand"],
    },
    "notification-kit": {
      category: "Kit",
      title: "Notification Kit",
      desc: "Push notifications, in-app notification center, badge counts, deep linking, and scheduled alerts. FCM pre-configured.",
      price: "$29",
      tags: ["Kits", "Notifications", "FCM"],
      worksWith: ["Firebase", "BLoC"],
      bullets: ["In-app notification center UI", "Deep links + routing patterns", "Badge count patterns", "FCM-first wiring"],
    },
    "map-location-kit": {
      category: "Kit",
      title: "Map & Location Kit",
      desc: "Google Maps integration with clustering, custom markers, geofencing, real-time tracking, and route drawing.",
      price: "$45",
      tags: ["Kits", "New", "Maps"],
      worksWith: ["Riverpod", "REST API"],
      bullets: ["Markers + clustering patterns", "Routes + polylines", "Geofencing scaffolds", "Tracking UI building blocks"],
    },
    "saas-starter-template": {
      category: "Template",
      title: "SaaS Starter Template",
      desc: "Full SaaS scaffold: auth, billing, dashboard, settings, team management. Clean architecture + BLoC.",
      price: "$79",
      tags: ["Templates", "Best seller", "SaaS"],
      worksWith: ["BLoC", "Supabase", "Firebase"],
      bullets: ["Auth + onboarding + settings", "Dashboard + teams foundation", "Clean architecture structure", "Ready to extend for billing"],
    },
    "ecommerce-template": {
      category: "Template",
      title: "E-Commerce Template",
      desc: "Shopping app starter: catalog, cart, wishlist, checkout, order tracking, and seller dashboard.",
      price: "$69",
      tags: ["Templates", "E-Commerce", "Checkout"],
      worksWith: ["BLoC", "Firebase", "REST API"],
      bullets: ["Catalog + product details UI", "Cart + wishlist flows", "Checkout scaffolding", "Order history foundations"],
    },
    "social-app-template": {
      category: "Template",
      title: "Social App Template",
      desc: "Instagram-style social app: feed, stories, reels-like video, profiles, follows, DMs.",
      price: "$89",
      tags: ["Templates", "New", "Social"],
      worksWith: ["Riverpod", "Firebase"],
      bullets: ["Feed + profiles UI", "Follow relationships scaffolds", "Stories/reels placeholders", "DM UI foundations"],
    },
    "fitness-app-template": {
      category: "Template",
      title: "Fitness App Template",
      desc: "Workout tracker, meal planner, progress charts, streak system, and coach dashboard. Dark UI.",
      price: "Freemium",
      tags: ["Templates", "Freemium", "Fitness"],
      worksWith: ["Provider", "Supabase"],
      bullets: ["Workout + meal planner UI", "Charts + progress patterns", "Streak + habit scaffolds", "Dark theme-first design"],
    },
    "ai-chat-module": {
      category: "AI Module",
      title: "AI Chat Module",
      desc: "Chat UI with streaming responses, history, system prompts, and context injection (API-agnostic).",
      price: "$49",
      tags: ["AI Modules", "Popular", "Chat"],
      worksWith: ["Riverpod", "REST API"],
      bullets: ["Streaming message UI patterns", "Conversation history storage hooks", "Prompt + context helpers", "Drop-in module structure"],
    },
    "ai-image-generator": {
      category: "AI Module",
      title: "AI Image Generator",
      desc: "Prompt builder UI, gallery, image editing placeholders, style presets, and API wiring scaffolds.",
      price: "$39",
      tags: ["AI Modules", "New", "Images"],
      worksWith: ["BLoC", "REST API"],
      bullets: ["Prompt builder UI", "Gallery + favorites scaffolds", "Preset styles system", "API integration points"],
    },
    "voice-ai-module": {
      category: "AI Module",
      title: "Voice AI Module",
      desc: "Speech-to-text + text-to-speech scaffolding with push-to-talk UI and transcription patterns.",
      price: "$45",
      tags: ["AI Modules", "Voice", "Realtime"],
      worksWith: ["Riverpod", "REST API"],
      bullets: ["Push-to-talk UI", "Transcription stream pattern", "TTS playback pattern", "API-agnostic integration points"],
    },
    "figma-to-flutter-generator": {
      category: "CLI & Tools",
      title: "Figma → Flutter Generator",
      desc: "Export designs to Flutter widgets. Component mapping, theme extraction, and responsive code generation (planned).",
      price: "Freemium",
      tags: ["CLI & Tools", "Freemium", "Generator"],
      worksWith: ["REST API"],
      bullets: ["Widget generation scaffolds", "Theme extraction patterns", "Component mapping concept", "Responsive export goals"],
    },
  };

  const product = data[slug];

  const pill = document.getElementById("productPill");
  const title = document.getElementById("productTitle");
  const desc = document.getElementById("productDesc");
  const price = document.getElementById("productPrice");
  const tagsEl = document.getElementById("productTags");
  const worksEl = document.getElementById("productWorks");
  const bulletsEl = document.getElementById("productBullets");

  const setTagPills = (el, items) => {
    if (!el) return;
    el.innerHTML = (items || [])
      .map((t) => `<span class="tag-chip"><i class="fas fa-tag" aria-hidden="true"></i> ${String(t)}</span>`)
      .join("");
  };

  const setWorks = (el, items) => {
    if (!el) return;
    el.innerHTML = (items || [])
      .map((w) => `<span class="tag-chip"><i class="fas fa-plug-circle-bolt" aria-hidden="true"></i> ${String(w)}</span>`)
      .join("");
  };

  const setBullets = (el, items) => {
    if (!el) return;
    el.innerHTML = (items || [])
      .map((b) => `<li><i class="fas fa-check"></i> ${String(b)}</li>`)
      .join("");
  };

  if (!product) {
    if (pill) pill.innerHTML = `<i class="fas fa-triangle-exclamation"></i> Not found`;
    if (title) title.textContent = "Product not found";
    if (desc) desc.textContent = "Open this page from the marketplace product card, or choose a product in the marketplace.";
    if (price) price.textContent = "—";
    setTagPills(tagsEl, ["Marketplace"]);
    setWorks(worksEl, []);
    setBullets(bulletsEl, ["Go back to the marketplace and pick a product."]);
    return;
  }

  if (pill) pill.innerHTML = `<i class="fas fa-box"></i> ${product.category}`;
  if (title) title.textContent = product.title;
  if (desc) desc.textContent = product.desc;
  if (price) price.textContent = product.price;
  document.title = `${product.title} · EVLOV Market`;

  setTagPills(tagsEl, product.tags);
  setWorks(worksEl, product.worksWith);
  setBullets(bulletsEl, product.bullets);
})();

