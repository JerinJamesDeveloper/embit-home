# AGENT.md - EVLOV Marketplace Website

## Project Overview
**Website:** EVLOV Marketplace (embit.dev / evlov.io)
**Purpose:** A professional marketplace showcasing Flutter development tools - Embit CLI (free) and EVLOV IGNITE kits/templates (freemium/paid)

## Technical Specifications

### Stack
- **HTML5** - Semantic structure
- **CSS3** - Flexbox/Grid, custom properties, responsive design
- **Font Awesome 6** - Icons (free tier)
- **Google Fonts** - Inter, Plus Jakarta Sans
- **No JavaScript frameworks** (vanilla JS only if needed)

### Design System

#### Colors
```css
:root {
  /* Primary */
  --primary-900: #0A0F1E;
  --primary-800: #1A1F32;
  --primary-700: #2A2F46;
  
  /* Accent - Electric Blue */
  --accent-500: #3B82F6;
  --accent-400: #60A5FA;
  --accent-300: #93C5FD;
  
  /* Neutral */
  --neutral-900: #111827;
  --neutral-800: #1F2937;
  --neutral-700: #374151;
  --neutral-200: #E5E7EB;
  --neutral-100: #F3F4F6;
  --neutral-50: #F9FAFB;
  
  /* Status */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --free: #10B981;
  --paid: #3B82F6;
}
```

#### Typography
```css
:root {
  --font-primary: 'Inter', sans-serif;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  
  /* Scale */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
}
```

## Page Structure

### 1. Global Elements (All Pages)

#### Header
```html
<header class="site-header">
  <div class="container">
    <a href="/" class="logo">
      <img src="assets/logo.svg" alt="EVLOV">
      <span class="logo-text">EVLOV</span>
    </a>
    
    <nav class="main-nav">
      <ul>
        <li><a href="#products">Products</a></li>
        <li><a href="#kits">Kits</a></li>
        <li><a href="#templates">Templates</a></li>
        <li><a href="#docs">Documentation</a></li>
      </ul>
    </nav>
    
    <div class="header-actions">
      <a href="#search" class="icon-btn"><i class="fas fa-search"></i></a>
      <a href="#account" class="icon-btn"><i class="fas fa-user"></i></a>
      <a href="#cart" class="icon-btn"><i class="fas fa-shopping-cart"></i><span class="badge">0</span></a>
    </div>
    
    <button class="mobile-menu-toggle"><i class="fas fa-bars"></i></button>
  </div>
</header>
```

#### Footer
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/logo-white.svg" alt="EVLOV">
        <p>Building the future of Flutter development</p>
        <div class="social-links">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-discord"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      
      <div class="footer-links">
        <h4>Products</h4>
        <ul>
          <li><a href="#embit-cli">Embit CLI</a></li>
          <li><a href="#ignite">EVLOV IGNITE</a></li>
          <li><a href="#kits">Kits</a></li>
          <li><a href="#templates">Templates</a></li>
        </ul>
      </div>
      
      <div class="footer-links">
        <h4>Resources</h4>
        <ul>
          <li><a href="#docs">Documentation</a></li>
          <li><a href="#api">API Reference</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
      </div>
      
      <div class="footer-links">
        <h4>Company</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 EMBITLABS. EVLOV is a product brand.</p>
      <div class="payment-icons">
        <i class="fab fa-cc-visa"></i>
        <i class="fab fa-cc-mastercard"></i>
        <i class="fab fa-cc-amex"></i>
        <i class="fab fa-cc-paypal"></i>
      </div>
    </div>
  </div>
</footer>
```

### 2. Homepage Layout

#### Hero Section
```html
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>Build Flutter Apps <span class="gradient-text">10x Faster</span></h1>
      <p>Production-ready kits, templates, and automation tools for serious Flutter teams</p>
      <div class="hero-cta">
        <a href="#products" class="btn btn-primary">Explore Products</a>
        <a href="#demo" class="btn btn-outline">
          <i class="fas fa-play"></i> Watch Demo
        </a>
      </div>
    </div>
    
    <!-- Video Placeholder -->
    <div class="hero-video">
      <div class="video-placeholder" data-video-id="main-demo">
        <img src="assets/placeholders/hero-demo.jpg" alt="Demo Video">
        <button class="play-btn"><i class="fas fa-play"></i></button>
        <div class="duration-badge">2:34</div>
      </div>
    </div>
  </div>
</section>
```

#### Featured Products Section
```html
<section class="featured-products" id="products">
  <div class="container">
    <h2>Featured Products</h2>
    
    <div class="products-grid">
      <!-- Embit CLI - Free Product -->
      <div class="product-card">
        <div class="card-badge free">Free</div>
        <div class="card-icon">
          <i class="fas fa-terminal"></i>
        </div>
        <h3>Embit CLI</h3>
        <p>Architecture-first CLI for Flutter. Generate Clean Architecture features with zero boilerplate.</p>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Feature scaffolding</li>
          <li><i class="fas fa-check"></i> Model/Entity generation</li>
          <li><i class="fas fa-check"></i> Usecase wiring</li>
          <li><i class="fas fa-check"></i> Template registry</li>
        </ul>
        <div class="card-footer">
          <a href="#embit-cli" class="btn btn-secondary">Learn More</a>
          <button class="btn-icon"><i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
      
      <!-- EVLOV IGNITE - Premium -->
      <div class="product-card premium">
        <div class="card-badge paid">$299</div>
        <div class="card-icon">
          <i class="fas fa-rocket"></i>
        </div>
        <h3>EVLOV IGNITE</h3>
        <p>Enterprise-grade starter kit with Clean Architecture, BLoC, and automation-first workflow.</p>
        <ul class="feature-list">
          <li><i class="fas fa-check"></i> Auth + permissions</li>
          <li><i class="fas fa-check"></i> Notifications</li>
          <li><i class="fas fa-check"></i> DI & navigation ready</li>
          <li><i class="fas fa-check"></i> Embit CLI integrated</li>
        </ul>
        <div class="card-footer">
          <a href="#ignite" class="btn btn-primary">View Details</a>
          <button class="btn-icon"><i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Kits Showcase
```html
<section class="kits-showcase" id="kits">
  <div class="container">
    <h2>Plug & Play Kits</h2>
    <p>Ready-to-use feature kits for rapid development</p>
    
    <div class="kits-grid">
      <!-- Kit Card Template -->
      <div class="kit-card" data-kit="auth">
        <div class="kit-header">
          <i class="fas fa-lock"></i>
          <span class="kit-price">$49</span>
        </div>
        <h4>Authentication Kit</h4>
        <p>Complete auth flow with email, social login, and biometrics</p>
        <div class="kit-tags">
          <span class="tag">Flutter</span>
          <span class="tag">BLoC</span>
          <span class="tag">Firebase</span>
        </div>
        <!-- YouTube Placeholder -->
        <div class="mini-video-placeholder" data-video-id="auth-demo">
          <img src="assets/placeholders/auth-thumb.jpg" alt="Auth Kit Demo">
          <i class="fas fa-play-circle"></i>
        </div>
      </div>
      
      <div class="kit-card" data-kit="payment">
        <div class="kit-header">
          <i class="fas fa-credit-card"></i>
          <span class="kit-price">$79</span>
        </div>
        <h4>Payment Kit</h4>
        <p>Stripe, PayPal, and in-app purchases ready to integrate</p>
        <div class="kit-tags">
          <span class="tag">Flutter</span>
          <span class="tag">Stripe</span>
          <span class="tag">RevenueCat</span>
        </div>
        <!-- YouTube Placeholder -->
        <div class="mini-video-placeholder" data-video-id="payment-demo">
          <img src="assets/placeholders/payment-thumb.jpg" alt="Payment Kit Demo">
          <i class="fas fa-play-circle"></i>
        </div>
      </div>
      
      <div class="kit-card" data-kit="chat">
        <div class="kit-header">
          <i class="fas fa-comments"></i>
          <span class="kit-price">$89</span>
        </div>
        <h4>Chat Kit</h4>
        <p>Real-time messaging with typing indicators, media sharing</p>
        <div class="kit-tags">
          <span class="tag">Flutter</span>
          <span class="tag">Socket.io</span>
          <span class="tag">Firestore</span>
        </div>
        <!-- YouTube Placeholder -->
        <div class="mini-video-placeholder" data-video-id="chat-demo">
          <img src="assets/placeholders/chat-thumb.jpg" alt="Chat Kit Demo">
          <i class="fas fa-play-circle"></i>
        </div>
      </div>
      
      <div class="kit-card" data-kit="ai">
        <div class="kit-header">
          <i class="fas fa-brain"></i>
          <span class="kit-price">$129</span>
        </div>
        <h4>AI Kit</h4>
        <p>LLM integration, streaming responses, RAG ready</p>
        <div class="kit-tags">
          <span class="tag">Flutter</span>
          <span class="tag">OpenAI</span>
          <span class="tag">Gemini</span>
        </div>
        <!-- YouTube Placeholder -->
        <div class="mini-video-placeholder" data-video-id="ai-demo">
          <img src="assets/placeholders/ai-thumb.jpg" alt="AI Kit Demo">
          <i class="fas fa-play-circle"></i>
        </div>
      </div>
      
      <!-- More kits: dashboard, profile, notification -->
    </div>
    
    <div class="view-all">
      <a href="#all-kits" class="btn btn-outline">View All 15+ Kits <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
</section>
```

#### Templates Section
```html
<section class="templates" id="templates">
  <div class="container">
    <h2>Full-Stack Templates</h2>
    <p>Complete applications with multiple kits integrated</p>
    
    <div class="templates-grid">
      <!-- Template Card -->
      <div class="template-card">
        <div class="template-image">
          <img src="assets/placeholders/ecommerce-template.jpg" alt="E-commerce Template">
          <div class="template-overlay">
            <span class="bundle-badge">12 kits included</span>
          </div>
        </div>
        <div class="template-content">
          <h3>E-commerce Complete</h3>
          <p>Full marketplace app with auth, payments, chat, and AI recommendations</p>
          <div class="template-meta">
            <span><i class="fas fa-layer-group"></i> 15 screens</span>
            <span><i class="fas fa-code"></i> Flutter 3.22+</span>
          </div>
          <div class="template-price">
            <span class="price">$499</span>
            <span class="original-price">$699</span>
          </div>
          <!-- YouTube Placeholder -->
          <div class="video-link">
            <i class="fas fa-play"></i> Watch Demo
          </div>
        </div>
      </div>
      
      <div class="template-card">
        <div class="template-image">
          <img src="assets/placeholders/saas-template.jpg" alt="SaaS Template">
          <div class="template-overlay">
            <span class="bundle-badge">8 kits included</span>
          </div>
        </div>
        <div class="template-content">
          <h3>SaaS Dashboard</h3>
          <p>Analytics dashboard with team management, subscriptions, and real-time updates</p>
          <div class="template-meta">
            <span><i class="fas fa-layer-group"></i> 20 screens</span>
            <span><i class="fas fa-code"></i> Flutter 3.22+</span>
          </div>
          <div class="template-price">
            <span class="price">$399</span>
            <span class="original-price">$549</span>
          </div>
          <!-- YouTube Placeholder -->
          <div class="video-link">
            <i class="fas fa-play"></i> Watch Demo
          </div>
        </div>
      </div>
      
      <div class="template-card">
        <div class="template-image">
          <img src="assets/placeholders/social-template.jpg" alt="Social Template">
          <div class="template-overlay">
            <span class="bundle-badge">10 kits included</span>
          </div>
        </div>
        <div class="template-content">
          <h3>Social Media App</h3>
          <p>Full-featured social platform with posts, stories, reels, and real-time chat</p>
          <div class="template-meta">
            <span><i class="fas fa-layer-group"></i> 25 screens</span>
            <span><i class="fas fa-code"></i> Flutter 3.22+</span>
          </div>
          <div class="template-price">
            <span class="price">$599</span>
            <span class="original-price">$799</span>
          </div>
          <!-- YouTube Placeholder -->
          <div class="video-link">
            <i class="fas fa-play"></i> Watch Demo
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 3. Product Detail Page (Embit CLI)

```html
<main class="product-detail">
  <div class="container">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <a href="/">Home</a> <i class="fas fa-chevron-right"></i>
      <a href="#products">Products</a> <i class="fas fa-chevron-right"></i>
      <span>Embit CLI</span>
    </nav>
    
    <div class="product-header">
      <div class="product-title">
        <h1>Embit CLI</h1>
        <div class="badge free">Free & Open Source</div>
      </div>
      <div class="product-actions">
        <button class="btn btn-primary btn-large">
          <i class="fas fa-download"></i> Install Now
        </button>
        <button class="btn btn-outline btn-large">
          <i class="fab fa-github"></i> GitHub
        </button>
      </div>
    </div>
    
    <!-- Main Video Demo -->
    <div class="product-video-main">
      <div class="video-placeholder large" data-video-id="embit-full-demo">
        <img src="assets/placeholders/embit-demo.jpg" alt="Embit CLI Demo">
        <button class="play-btn-large"><i class="fas fa-play"></i> Watch Full Demo (4:32)</button>
      </div>
    </div>
    
    <!-- Product Description -->
    <div class="product-description">
      <h2>Architecture-first CLI for Flutter</h2>
      <p>Embit CLI eliminates boilerplate for Clean Architecture + BLoC projects by generating consistent scaffolds. Enforces a predictable structure so teams can scale features without ad-hoc organization.</p>
    </div>
    
    <!-- Key Features Grid -->
    <section class="key-features">
      <h2>Key Features</h2>
      <div class="features-grid">
        <div class="feature-item">
          <i class="fas fa-cubes"></i>
          <h3>Feature Scaffolding</h3>
          <p>Generate complete modules under lib/features/ with domain, data, and presentation layers</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-diagram-project"></i>
          <h3>Clean Architecture</h3>
          <p>Enforces separation of concerns with entities, usecases, repositories, and datasources</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-copy"></i>
          <h3>Model/Entity Generation</h3>
          <p>Domain entities and data models with JSON serialization and conversion methods</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-puzzle-piece"></i>
          <h3>Usecase Wiring</h3>
          <p>End-to-end wiring through repository, datasource, DI, and BLoC updates</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-boxes"></i>
          <h3>Kit/Template Registry</h3>
          <p>Local machine registry for managing installed templates and kits</p>
        </div>
        <div class="feature-item">
          <i class="fas fa-terminal"></i>
          <h3>Powerful Commands</h3>
          <p>setup, clone, init, feature, model, usecase, update with consistent flags</p>
        </div>
      </div>
    </section>
    
    <!-- Commands Section -->
    <section class="commands">
      <h2>Commands Overview</h2>
      
      <div class="command-list">
        <div class="command-item">
          <code>embit setup</code>
          <p>Initializes local data directory and configuration</p>
        </div>
        <div class="command-item">
          <code>embit clone &lt;path&gt; [--force]</code>
          <p>Installs kits/templates into local registry or clones into current project</p>
        </div>
        <div class="command-item">
          <code>embit init [--force] [--no-pub-get]</code>
          <p>Bootstraps Embit structure in current project</p>
        </div>
        <div class="command-item">
          <code>embit feature &lt;name&gt; [--force] [--dry-run]</code>
          <p>Generates full feature scaffold with DI and navigation wiring</p>
        </div>
        <div class="command-item">
          <code>embit model &lt;name&gt; --feature &lt;feature&gt; [--string ...]</code>
          <p>Creates model/entity with field definitions</p>
        </div>
        <div class="command-item">
          <code>embit usecase &lt;name&gt; --feature &lt;feature&gt; --type &lt;type&gt;</code>
          <p>Adds usecase with full wiring (get, create, update, delete, custom)</p>
        </div>
      </div>
      
      <!-- Video Placeholder for Commands Demo -->
      <div class="commands-video">
        <div class="video-placeholder" data-video-id="embit-commands">
          <img src="assets/placeholders/commands-demo.jpg" alt="Commands Demo">
          <button class="play-btn"><i class="fas fa-play"></i> Watch Commands in Action</button>
        </div>
      </div>
    </section>
    
    <!-- Architecture Diagram Placeholder -->
    <section class="architecture">
      <h2>Clean Architecture Generation</h2>
      <div class="architecture-diagram">
        <img src="assets/placeholders/architecture-diagram.jpg" alt="Clean Architecture Diagram">
        <p class="caption">Generated structure follows strict layering: Domain → Data → Presentation</p>
      </div>
    </section>
    
    <!-- Who It's For -->
    <section class="target-audience">
      <h2>Who It's For</h2>
      <div class="audience-grid">
        <div class="audience-item">
          <i class="fas fa-users"></i>
          <h3>Flutter Teams</h3>
          <p>Projects using Clean Architecture with BLoC that need consistent scaffolding</p>
        </div>
        <div class="audience-item">
          <i class="fas fa-code"></i>
          <h3>Solo Developers</h3>
          <p>Developers who want to ship faster without writing repetitive boilerplate</p>
        </div>
        <div class="audience-item">
          <i class="fas fa-graduation-cap"></i>
          <h3>Enterprises</h3>
          <p>Organizations that need predictable structure and easy onboarding</p>
        </div>
        <div class="audience-item">
          <i class="fas fa-cubes"></i>
          <h3>Template Creators</h3>
          <p>Users maintaining local libraries of starter templates and feature kits</p>
        </div>
      </div>
    </section>
    
    <!-- Installation -->
    <section class="installation">
      <h2>Quick Installation</h2>
      <div class="code-block">
        <pre><code>dart pub global activate embit_cli</code></pre>
        <button class="copy-btn"><i class="fas fa-copy"></i></button>
      </div>
      <p class="note">Or install via Homebrew, direct download, or build from source</p>
    </section>
    
    <!-- Testimonials -->
    <section class="testimonials">
      <h2>What Developers Say</h2>
      <div class="testimonials-slider">
        <div class="testimonial-card">
          <img src="assets/placeholders/avatar1.jpg" alt="User" class="avatar">
          <p>"Embit CLI saved us weeks of boilerplate. Our team now ships features in days instead of weeks."</p>
          <cite>- Alex Chen, Lead Developer at FinTechApp</cite>
        </div>
      </div>
    </section>
  </div>
</main>
```

### 4. Kits Category Page

```html
<main class="kits-page">
  <div class="container">
    <h1>Flutter Kits</h1>
    <p class="page-subtitle">Plug-and-play feature modules for rapid development</p>
    
    <!-- Filters -->
    <div class="kits-filters">
      <div class="filter-group">
        <button class="filter-btn active">All Kits (15)</button>
        <button class="filter-btn">Free (3)</button>
        <button class="filter-btn">Paid (12)</button>
      </div>
      <div class="filter-group">
        <select class="sort-select">
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
        </select>
      </div>
    </div>
    
    <!-- Kits Grid (Expanded) -->
    <div class="kits-grid-expanded">
      <!-- Auth Kit -->
      <div class="kit-card-large">
        <div class="kit-media">
          <div class="video-placeholder" data-video-id="auth-full">
            <img src="assets/placeholders/auth-full.jpg" alt="Auth Kit">
            <i class="fas fa-play-circle"></i>
          </div>
        </div>
        <div class="kit-details">
          <div class="kit-header">
            <h3>Authentication Kit</h3>
            <span class="price">$49</span>
          </div>
          <p>Complete authentication system with email/password, social login (Google, Apple, Facebook), biometrics, and account recovery. Includes token management and protected routes.</p>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Email + Password</li>
            <li><i class="fas fa-check"></i> Social Login (Google, Apple, FB)</li>
            <li><i class="fas fa-check"></i> Biometrics (Face ID / Touch ID)</li>
            <li><i class="fas fa-check"></i> Token refresh & storage</li>
            <li><i class="fas fa-check"></i> Account recovery flow</li>
          </ul>
          <div class="kit-meta">
            <span><i class="fas fa-file"></i> 45+ files</span>
            <span><i class="fas fa-code"></i> Flutter 3.22+</span>
            <span><i class="fas fa-database"></i> Firebase/Supabase</span>
          </div>
          <div class="kit-actions">
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-outline">Live Demo</button>
            <button class="btn-icon"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
      
      <!-- Payment Kit -->
      <div class="kit-card-large">
        <div class="kit-media">
          <div class="video-placeholder" data-video-id="payment-full">
            <img src="assets/placeholders/payment-full.jpg" alt="Payment Kit">
            <i class="fas fa-play-circle"></i>
          </div>
        </div>
        <div class="kit-details">
          <div class="kit-header">
            <h3>Payment Kit</h3>
            <span class="price">$79</span>
          </div>
          <p>Complete payment solution with Stripe, PayPal, and in-app purchases. Handles subscriptions, one-time payments, and receipt validation.</p>
          <ul class="feature-list">
            <li><i class="fas fa-check"></i> Stripe integration</li>
            <li><i class="fas fa-check"></i> PayPal support</li>
            <li><i class="fas fa-check"></i> In-app purchases (iOS/Android)</li>
            <li><i class="fas fa-check"></i> Subscription management</li>
            <li><i class="fas fa-check"></i> Receipt validation</li>
          </ul>
          <div class="kit-meta">
            <span><i class="fas fa-file"></i> 60+ files</span>
            <span><i class="fas fa-code"></i> Flutter 3.22+</span>
            <span><i class="fas fa-credit-card"></i> Stripe SDK</span>
          </div>
          <div class="kit-actions">
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-outline">Live Demo</button>
            <button class="btn-icon"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
      
      <!-- More kit cards... -->
    </div>
    
    <!-- Pagination -->
    <div class="pagination">
      <button class="page-btn active">1</button>
      <button class="page-btn">2</button>
      <button class="page-btn">3</button>
      <button class="page-btn next"><i class="fas fa-chevron-right"></i></button>
    </div>
  </div>
</main>
```

### 5. Templates Page (Bundle Showcase)

```html
<main class="templates-page">
  <div class="container">
    <h1>Full-Stack Templates</h1>
    <p class="page-subtitle">Complete applications with multiple kits integrated and ready to customize</p>
    
    <!-- Featured Bundle -->
    <section class="featured-bundle">
      <div class="bundle-card">
        <div class="bundle-badge">Best Seller</div>
        <div class="bundle-content">
          <h2>Ultimate Flutter Bundle</h2>
          <p>All 15 kits + 3 premium templates at 40% off</p>
          <div class="bundle-price">
            <span class="current">$1,299</span>
            <span class="original">$2,165</span>
            <span class="discount">Save 40%</span>
          </div>
          <div class="bundle-includes">
            <h4>Includes:</h4>
            <ul>
              <li><i class="fas fa-check"></i> All 15 Kits</li>
              <li><i class="fas fa-check"></i> E-commerce Template</li>
              <li><i class="fas fa-check"></i> SaaS Dashboard</li>
              <li><i class="fas fa-check"></i> Social Media App</li>
              <li><i class="fas fa-check"></i> Lifetime updates</li>
            </ul>
          </div>
          <button class="btn btn-primary btn-large">Buy Bundle</button>
        </div>
        <div class="bundle-media">
          <div class="video-placeholder" data-video-id="bundle-showcase">
            <img src="assets/placeholders/bundle-showcase.jpg" alt="Bundle Showcase">
            <button class="play-btn"><i class="fas fa-play"></i> Watch Overview</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Individual Templates -->
    <h2>Individual Templates</h2>
    <div class="templates-grid-detailed">
      <!-- Template cards with more details -->
    </div>
  </div>
</main>
```

## CSS Components

### Video Placeholders
```css
.video-placeholder {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: var(--neutral-800);
  aspect-ratio: 16/9;
  cursor: pointer;
}

.video-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.video-placeholder:hover img {
  opacity: 0.6;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.9);
  border: none;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

.play-btn:hover {
  transform: translate(-50%, -50%) scale(1.1);
  background: var(--accent-500);
}

.duration-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: var(--text-sm);
  font-weight: 500;
}

.mini-video-placeholder {
  position: relative;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 12px;
}

.mini-video-placeholder i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  color: white;
  opacity: 0.9;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
```

### Cards & Grids
```css
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin: 48px 0;
}

.product-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  border: 1px solid var(--neutral-200);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.product-card.premium {
  border: 2px solid var(--accent-400);
  background: linear-gradient(to bottom, white, var(--neutral-50));
}

.card-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
}

.card-badge.free {
  background: var(--success);
  color: white;
}

.card-badge.paid {
  background: var(--paid);
  color: white;
}

.kits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.kit-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid var(--neutral-200);
}

.kit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.kit-header i {
  font-size: 24px;
  color: var(--accent-500);
}

.kit-price {
  font-weight: 600;
  color: var(--primary-700);
}

.template-card {
  display: flex;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--neutral-200);
  margin-bottom: 24px;
}

.template-image {
  width: 300px;
  position: relative;
}

.template-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Command Display
```css
.command-list {
  display: grid;
  gap: 16px;
  margin: 32px 0;
}

.command-item {
  background: var(--neutral-50);
  border-left: 4px solid var(--accent-500);
  padding: 16px;
  border-radius: 0 8px 8px 0;
}

.command-item code {
  display: block;
  font-family: 'Fira Code', monospace;
  font-size: var(--text-lg);
  color: var(--primary-900);
  margin-bottom: 8px;
}

.command-item p {
  color: var(--neutral-700);
  margin: 0;
}

.code-block {
  background: var(--primary-900);
  border-radius: 8px;
  padding: 16px;
  position: relative;
  margin: 16px 0;
}

.code-block pre {
  margin: 0;
  color: var(--neutral-100);
  font-family: 'Fira Code', monospace;
  overflow-x: auto;
}

.copy-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(255,255,255,0.1);
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: var(--text-sm);
}
```

## Asset Structure

```
assets/
├── logo.svg
├── logo-white.svg
├── favicon.ico
├── placeholders/
│   ├── hero-demo.jpg
│   ├── embit-demo.jpg
│   ├── commands-demo.jpg
│   ├── architecture-diagram.jpg
│   ├── auth-thumb.jpg
│   ├── payment-thumb.jpg
│   ├── chat-thumb.jpg
│   ├── ai-thumb.jpg
│   ├── auth-full.jpg
│   ├── payment-full.jpg
│   ├── ecommerce-template.jpg
│   ├── saas-template.jpg
│   ├── social-template.jpg
│   ├── bundle-showcase.jpg
│   └── avatars/
│       ├── avatar1.jpg
│       ├── avatar2.jpg
│       └── avatar3.jpg
├── icons/
│   ├── cli-icon.svg
│   ├── ignite-icon.svg
│   └── kit-icons/
└── videos/ (placeholder files)
    ├── main-demo.mp4
    ├── embit-demo.mp4
    └── kit-demos/
```

## Responsive Breakpoints

```css
/* Mobile First */
.container {
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 0 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
}
```

## Key Pages Summary

1. **Homepage** - Hero with video, featured products, kits showcase, templates preview
2. **Embit CLI Product Page** - Detailed feature breakdown, commands, architecture, installation
3. **EVLOV IGNITE Product Page** - Enterprise kit details, who it's for, what it solves
4. **Kits Category Page** - All kits with filters, search, detailed cards
5. **Templates Page** - Bundled templates, featured bundle, individual templates
6. **Individual Kit Pages** (Auth, Payment, Chat, AI, etc.) - Deep dives with demos
7. **Documentation Section** - Getting started guides, API references
8. **Blog/Resources** - Articles, tutorials, updates
9. **Account/Purchases** - User dashboard, downloads, licenses
10. **Checkout/Cart** - Purchase flow

## Implementation Notes

- All video placeholders should have click handlers to open modals with embedded YouTube
- Use CSS Grid for complex layouts, Flexbox for components
- Maintain consistent spacing (8px grid system)
- Ensure WCAG 2.1 AA contrast ratios
- Lazy load images below the fold
- Use CSS custom properties for theming
- No external dependencies beyond Font Awesome
- Mobile-first responsive design
- Semantic HTML for SEO

This structure provides a professional marketplace foundation that clearly presents Embit CLI as the flagship free product and EVLOV IGNITE kits/templates as the premium offerings, with video placeholders throughout for engaging product demonstrations.
