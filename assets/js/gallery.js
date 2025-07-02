// Gallery functionality
document.addEventListener("DOMContentLoaded", () => {

  let galleryItems = []
    
  async function galleryItemsData() {
    try {
      const response = await fetch("assets/constant/gallery.json")
      galleryItems = await response.json()
      renderGalleryItems() //initial render

    } catch (error) {
      console.error("Error loading workflow steps:", error)
    }
  }

  galleryItemsData(); //call fetch function

  const galleryGrid = document.getElementById("galleryGrid")
  const filterButtons = document.querySelectorAll(".filter-btn")

  let currentFilter = "all"

  // Intersection Observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
    },
  )



  // Render gallery items
  function renderGalleryItems(filter = "all") {
    const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

    galleryGrid.innerHTML = ""

    filteredItems.forEach((item, index) => {
      const galleryCard = createGalleryCard(item, index)
      galleryGrid.appendChild(galleryCard)
    })

    // Re-apply intersection observer for animations
    const animatedElements = galleryGrid.querySelectorAll(".animate-fade-in-up")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }

  // Create gallery card
  function createGalleryCard(item, index) {
    const card = document.createElement("div")
    card.className = "gallery-card animate-fade-in-up"
    card.style.animationDelay = `${index * 0.1}s`

    const categoryBadge = item.category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    card.innerHTML = `
            <div class="gallery-item" style="background-color: var(--card); border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden; transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column;">
                <div class="gallery-image-container" style="position: relative; overflow: hidden; height: 200px;">
                    <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                    <div class="gallery-overlay" style="position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%); opacity: 0; transition: opacity 0.3s ease; display: flex; align-items: end; padding: 1rem;">
                        <div style="color: white;">
                            <h3 style="font-weight: 600; margin-bottom: 0.5rem;">${item.title}</h3>
                            <p style="font-size: 0.875rem; opacity: 0.9;">${item.description}</p>
                        </div>
                    </div>
                </div>
                
                <div style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                        <h3 style="font-size: 1.125rem; font-weight: 600;">${item.title}</h3>
                        <span style="background-color: var(--secondary); color: var(--secondary-foreground); font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 0.375rem;">${categoryBadge}</span>
                    </div>
                    
                    <p style="color: var(--muted-foreground); margin-bottom: 1rem; flex-grow: 1;">${item.description}</p>
                    
                    <div style="space-y: 0.5rem;">
                        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--muted-foreground); font-size: 0.875rem; margin-bottom: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>${item.date}</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--muted-foreground); font-size: 0.875rem; margin-bottom: 0.5rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>${item.location}</span>
                        </div>
                        
                        <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--muted-foreground); font-size: 0.875rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span>${item.participants}</span>
                        </div>
                    </div>
                </div>
            </div>
        `

    // Add hover effects
    const galleryItem = card.querySelector(".gallery-item")
    const galleryImage = card.querySelector(".gallery-image-container img")
    const galleryOverlay = card.querySelector(".gallery-overlay")

    galleryItem.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
      this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      galleryImage.style.transform = "scale(1.05)"
      galleryOverlay.style.opacity = "1"
    })

    galleryItem.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
      galleryImage.style.transform = "scale(1)"
      galleryOverlay.style.opacity = "0"
    })

    return card
  }

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter gallery items
      currentFilter = category
      renderGalleryItems(category)
    })
  })

  

  const counters = document.querySelectorAll(".count-up");

  const observers = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = el.getAttribute("data-target");
        animateCountUp(el, target);
        obs.unobserve(el); // animate only once
      }
    });
  }, {
    threshold: 0.6 // trigger when 60% visible
  });

  counters.forEach(el => observers.observe(el));
})


// CountUP

function animateCountUp(el, targetString, duration = 2000) {
  const numberPart = parseFloat(targetString.replace(/[^\d.]/g, ''));
  const suffix = targetString.replace(/[\d.]/g, '');

  let start = 0;
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const current = (numberPart * progress).toFixed(1);

    // Format based on suffix
    if (suffix.includes("K")) {
      el.textContent = Math.floor(current) + "K+";
    } else if (suffix.includes("%")) {
      el.textContent = parseFloat(current).toFixed(0) + "%";
    } else if (suffix.includes("+")) {
      el.textContent = Math.floor(current) + "+";
    } else {
      el.textContent = Math.floor(current);
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// filter Category colors

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Remove primary styles from all buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-gray-200", "text-gray-700");
    });

    // Add primary styles to the clicked button
    button.classList.remove("bg-gray-200", "text-gray-700");
    button.classList.add("bg-primary", "text-white");
  });
});