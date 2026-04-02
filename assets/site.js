(() => {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".main-nav");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");

  const normalizePath = (path) => {
    if (!path) return "/";
    let normalized = path.toLowerCase();
    normalized = normalized.replace(/\/index\.html$/, "/");
    normalized = normalized.replace(/\.html$/, "");
    if (normalized.length > 1 && normalized.endsWith("/")) normalized = normalized.slice(0, -1);
    return normalized || "/";
  };

  const pagePath = normalizePath(window.location.pathname);
  const hasSegment = (segment) => new RegExp(`(^|\\/)${segment}(\\/|$)`).test(pagePath);
  const navSection = (() => {
    if (hasSegment("docs")) return "documentation";
    if (hasSegment("about")) return "about";
    if (hasSegment("contact")) return "contact";
    if (
      hasSegment("marketplace") ||
      hasSegment("products") ||
      hasSegment("kits") ||
      hasSegment("templates")
    ) {
      return "marketplace";
    }
    if (pagePath === "/" || pagePath.endsWith("/index")) return null;
    return null;
  })();

  if (nav) {
    nav.querySelectorAll("a.active").forEach((link) => link.classList.remove("active"));

    const navMap = {
      marketplace: /\/marketplace(\/|$)/,
      documentation: /\/docs(\/|$)/,
      about: /\/about(\/|$)/,
      contact: /\/contact(\/|$)/,
    };

    if (navSection && navMap[navSection]) {
      const activeLink = Array.from(nav.querySelectorAll("a")).find((link) => {
        const href = link.getAttribute("href");
        if (!href) return false;
        const linkPath = normalizePath(new URL(href, window.location.href).pathname);
        return navMap[navSection].test(`${linkPath}/`);
      });
      activeLink?.classList.add("active");
    }
  }

  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (mobileToggle && nav) {
    mobileToggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  // Video modal (YouTube). Attach data-video-id="XXXX" to .video-placeholder elements.
  const backdrop = document.querySelector("[data-video-modal]");
  const frame = backdrop?.querySelector("iframe");
  const titleEl = backdrop?.querySelector("[data-video-title]");

  const closeVideo = () => {
    if (!backdrop) return;
    backdrop.classList.remove("open");
    if (frame) frame.src = "about:blank";
  };

  const openVideo = (videoId, title) => {
    if (!backdrop || !frame) return;
    const safeTitle = title || "Video";
    if (titleEl) titleEl.textContent = safeTitle;
    const src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0`;
    frame.src = src;
    backdrop.classList.add("open");
  };

  document.querySelectorAll("[data-video-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const id = el.getAttribute("data-video-id");
      const title = el.getAttribute("data-video-title") || "Demo";
      if (id) openVideo(id, title);
    });
  });

  backdrop?.addEventListener("click", (e) => {
    if (e.target === backdrop) closeVideo();
  });
  document.querySelectorAll("[data-video-close]").forEach((b) => b.addEventListener("click", closeVideo));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideo();
  });

	  // Copy buttons for code blocks
	  document.querySelectorAll(".code-block").forEach((block) => {
	    const btn = block.querySelector(".copy-btn");
	    const pre = block.querySelector("pre");
	    if (!btn || !pre) return;
	    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(pre.innerText.trim());
        const prev = btn.textContent;
        btn.textContent = "Copied";
        setTimeout(() => (btn.textContent = prev), 900);
      } catch {
        // Clipboard can be blocked in some contexts; no-op.
      }
	    });
	  });

	  // Fade-in reveal on scroll
	  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
	  if (!prefersReducedMotion) {
	    const revealEls = Array.from(document.querySelectorAll("main .section-header, main .card, main .hero-grid > *"));
	    revealEls.forEach((el, i) => {
	      if (el.classList.contains("reveal")) return;
	      el.classList.add("reveal");
	      el.style.transitionDelay = `${Math.min(i % 6, 5) * 70}ms`;
	    });

	    const markIn = (el) => el.classList.add("in");
	    if ("IntersectionObserver" in window) {
	      const io = new IntersectionObserver(
	        (entries) => {
	          entries.forEach((entry) => {
	            if (!entry.isIntersecting) return;
	            markIn(entry.target);
	            io.unobserve(entry.target);
	          });
	        },
	        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
	      );
	      revealEls.forEach((el) => io.observe(el));
	    } else {
	      revealEls.forEach(markIn);
	    }
	  } else {
	    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
	  }

	  // Canvas thumbnails (scaled images)
	  const fitCover = (srcW, srcH, dstW, dstH) => {
	    const scale = Math.max(dstW / srcW, dstH / srcH);
	    const w = srcW * scale;
	    const h = srcH * scale;
	    return { w, h, x: (dstW - w) / 2, y: (dstH - h) / 2 };
	  };

	  const fitContain = (srcW, srcH, dstW, dstH) => {
	    const scale = Math.min(dstW / srcW, dstH / srcH);
	    const w = srcW * scale;
	    const h = srcH * scale;
	    return { w, h, x: (dstW - w) / 2, y: (dstH - h) / 2 };
	  };

	  const renderThumb = (canvas, img) => {
	    const cssW = Math.max(1, Math.round(canvas.clientWidth || 1));
	    const cssH = Math.max(1, Math.round(canvas.clientHeight || Math.round(cssW * (9 / 16))));
	    const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));

	    const targetW = Math.round(cssW * dpr);
	    const targetH = Math.round(cssH * dpr);
	    if (canvas.width !== targetW) canvas.width = targetW;
	    if (canvas.height !== targetH) canvas.height = targetH;

	    const ctx = canvas.getContext("2d");
	    if (!ctx) return;
	    ctx.setTransform(1, 0, 0, 1, 0, 0);
	    ctx.clearRect(0, 0, targetW, targetH);

	    const fit = (canvas.getAttribute("data-thumb-fit") || "cover").toLowerCase();
	    const { w, h, x, y } = fit === "contain" ? fitContain(img.naturalWidth, img.naturalHeight, targetW, targetH) : fitCover(img.naturalWidth, img.naturalHeight, targetW, targetH);
	    ctx.imageSmoothingEnabled = true;
	    ctx.imageSmoothingQuality = "high";
	    ctx.drawImage(img, x, y, w, h);
	  };

	  const renderThumbFallback = (canvas) => {
	    const cssW = Math.max(1, Math.round(canvas.clientWidth || 1));
	    const cssH = Math.max(1, Math.round(canvas.clientHeight || Math.round(cssW * (9 / 16))));
	    const dpr = Math.max(1, Math.min(3, window.devicePixelRatio || 1));

	    const targetW = Math.round(cssW * dpr);
	    const targetH = Math.round(cssH * dpr);
	    if (canvas.width !== targetW) canvas.width = targetW;
	    if (canvas.height !== targetH) canvas.height = targetH;

	    const ctx = canvas.getContext("2d");
	    if (!ctx) return;
	    ctx.setTransform(1, 0, 0, 1, 0, 0);
	    ctx.clearRect(0, 0, targetW, targetH);

	    ctx.fillStyle = "rgba(15, 23, 42, 0.35)";
	    ctx.fillRect(0, 0, targetW, targetH);

	    const label = canvas.getAttribute("aria-label") || "Thumbnail";
	    ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
	    ctx.font = `${Math.max(12, Math.round(16 * dpr))}px ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`;
	    ctx.fillText(label, Math.round(16 * dpr), Math.round(28 * dpr));
	  };

	  const initThumb = (canvas) => {
	    const src = canvas.getAttribute("data-thumb-src");
	    if (!src) return;
	    const shell = canvas.closest(".product-thumb-shell");

	    const img = new Image();
	    img.crossOrigin = "anonymous";
	    img.decoding = "async";
	    img.addEventListener("load", () => {
	      // If the canvas hasn't been laid out yet, retry a few frames.
	      let tries = 0;
	      const drawWhenReady = () => {
	        tries += 1;
	        const hasSize = (canvas.clientWidth || 0) > 0 && (canvas.clientHeight || 0) > 0;
	        if (hasSize || tries >= 10) {
	          renderThumb(canvas, img);
	          if (shell) shell.classList.add("is-drawn");
	          return;
	        }
	        requestAnimationFrame(drawWhenReady);
	      };
	      requestAnimationFrame(drawWhenReady);
	    });
	    img.addEventListener("error", () => {
	      renderThumbFallback(canvas);
	    });
	    img.src = src;

	    if ("ResizeObserver" in window) {
	      const ro = new ResizeObserver(() => {
	        if (img.complete && img.naturalWidth) renderThumb(canvas, img);
	      });
	      ro.observe(canvas);
	    } else {
	      window.addEventListener(
	        "resize",
	        () => {
	          if (img.complete && img.naturalWidth) renderThumb(canvas, img);
	        },
	        { passive: true }
	      );
	    }
	  };

	  document.querySelectorAll("canvas[data-thumb-src]").forEach(initThumb);
	})();
