// Performance Optimization Utilities for Static Website

class WebsiteOptimizer {
  constructor() {
    this.performanceMetrics = {}
    this.init()
  }

  init() {
    // Initialize performance monitoring
    this.measurePerformance()
    this.optimizeImages()
    this.implementLazyLoading()
    this.optimizeCSS()
    this.optimizeJS()
  }

  // Performance Measurement
  measurePerformance() {
    // Core Web Vitals measurement
    if ("web-vital" in window) {
      import("https://unpkg.com/web-vitals@3/dist/web-vitals.js").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log)
          getFID(console.log)
          getFCP(console.log)
          getLCP(console.log)
          getTTFB(console.log)
        },
      )
    }

    // Custom performance metrics
    window.addEventListener("load", () => {
      const perfData = performance.getEntriesByType("navigation")[0]
      this.performanceMetrics = {
        domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
        totalLoadTime: perfData.loadEventEnd - perfData.fetchStart,
      }
      console.log("Performance Metrics:", this.performanceMetrics)
    })
  }

  // Image Optimization
  optimizeImages() {
    // Lazy loading for images
    const images = document.querySelectorAll("img[data-src]")
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          observer.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))

    // WebP support detection
    this.detectWebPSupport()
  }

  detectWebPSupport() {
    const webP = new Image()
    webP.onload = webP.onerror = () => {
      const isWebPSupported = webP.height === 2
      document.documentElement.classList.toggle("webp", isWebPSupported)
      document.documentElement.classList.toggle("no-webp", !isWebPSupported)
    }
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
  }

  // CSS Optimization
  optimizeCSS() {
    // Critical CSS inlining (for above-the-fold content)
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .header { /* inline critical header styles */ }
      .hero { /* inline critical hero styles */ }
    `

    // Load non-critical CSS asynchronously
    this.loadCSSAsync("/styles/non-critical.css")
  }

  loadCSSAsync(href) {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = href
    link.media = "print"
    link.onload = () => {
      link.media = "all"
    }
    document.head.appendChild(link)
  }

  // JavaScript Optimization
  optimizeJS() {
    // Code splitting - load demo functionality only when needed
    const demoSection = document.querySelector(".demo-section")
    if (demoSection) {
      const demoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadDemoScript()
            demoObserver.unobserve(entry.target)
          }
        })
      })
      demoObserver.observe(demoSection)
    }
  }

  async loadDemoScript() {
    try {
      const { TransbhashaDemo } = await import("./demo-module.js")
      new TransbhashaDemo()
    } catch (error) {
      console.error("Failed to load demo module:", error)
    }
  }

  // Lazy Loading Implementation
  implementLazyLoading() {
    // Lazy load sections
    const sections = document.querySelectorAll("section[data-lazy]")
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("loaded")
            sectionObserver.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "50px" },
    )

    sections.forEach((section) => sectionObserver.observe(section))
  }

  // Resource Hints
  addResourceHints() {
    // Preload critical resources
    const preloadLinks = [
      { href: "/fonts/inter.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous" },
      { href: "/images/hero.webp", as: "image" },
    ]

    preloadLinks.forEach((link) => {
      const linkEl = document.createElement("link")
      linkEl.rel = "preload"
      Object.assign(linkEl, link)
      document.head.appendChild(linkEl)
    })

    // DNS prefetch for external resources
    const dnsPrefetchDomains = ["https://fonts.googleapis.com", "https://images.unsplash.com"]

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement("link")
      link.rel = "dns-prefetch"
      link.href = domain
      document.head.appendChild(link)
    })
  }

  // Service Worker for Caching
  registerServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => console.log("SW registered:", registration))
        .catch((error) => console.log("SW registration failed:", error))
    }
  }
}

// Initialize optimizer when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new WebsiteOptimizer()
})

// Export for module use
export { WebsiteOptimizer }
