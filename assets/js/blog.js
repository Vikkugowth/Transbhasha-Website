// Blog posts data
const blogPosts = [
  {
    title: "The Future of Multilingual AI: Breaking Language Barriers in 2024",
    excerpt:
      "Explore how AI-powered language technology is revolutionizing global communication and what the future holds for multilingual content creation.",
    author: "Dr. Rajesh Kumar",
    date: "December 15, 2023",
    category: "ai-technology",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    title: "Building Scalable APIs for Language Processing",
    excerpt:
      "A deep dive into the architectural decisions and engineering challenges we faced while building our API platform.",
    author: "Priya Sharma",
    date: "December 10, 2023",
    category: "engineering",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Translingua 2.0: Enhanced Video Localization Features",
    excerpt:
      "Announcing new features in Translingua including improved voice synthesis, better subtitle timing, and expanded language support.",
    author: "Anita Gupta",
    date: "December 5, 2023",
    category: "product-updates",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Understanding Neural Machine Translation for Indian Languages",
    excerpt:
      "How we're tackling the unique challenges of translating between Indian languages using advanced neural networks.",
    author: "Dr. Meera Reddy",
    date: "November 28, 2023",
    category: "research",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Transbhasha Raises Series A: Our Journey and What's Next",
    excerpt:
      "Reflecting on our journey so far and sharing our vision for the future as we announce our Series A funding round.",
    author: "Dr. Rajesh Kumar",
    date: "November 20, 2023",
    category: "company-news",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Optimizing Speech Recognition for Noisy Environments",
    excerpt: "Technical insights into how we improved our ASR accuracy in challenging acoustic conditions.",
    author: "Arjun Patel",
    date: "November 15, 2023",
    category: "engineering",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "The Importance of Cultural Context in AI Translation",
    excerpt: "Why context matters in translation and how we're building cultural awareness into our AI models.",
    author: "Dr. Meera Reddy",
    date: "November 8, 2023",
    category: "ai-technology",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "User Experience Design for Developer Tools",
    excerpt:
      "How we approach UX design for technical products and the lessons we've learned building developer-friendly interfaces.",
    author: "Kavya Nair",
    date: "October 30, 2023",
    category: "product-updates",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
]

// Blog functionality
document.addEventListener("DOMContentLoaded", () => {
  const blogGrid = document.getElementById("blogGrid")

  const featuredArticle = document.getElementById("featuredArticle")
  const searchInput = document.getElementById("searchInput")
  const filterButtons = document.querySelectorAll(".filter-btn")
  const noResults = document.getElementById("noResults")
  const newsletterForm = document.querySelector(".newsletter-form")

  let currentFilter = "all"
  let currentSearch = ""

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


  // Render blog posts
  function renderBlogPosts() {
    let filteredPosts = blogPosts.filter((post) => !post.featured)

    // Apply category filter
    if (currentFilter !== "all") {
      filteredPosts = filteredPosts.filter((post) => post.category === currentFilter)
    }

    // Apply search filter
    if (currentSearch) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(currentSearch.toLowerCase()) ||
          post.author.toLowerCase().includes(currentSearch.toLowerCase()),
      )
    }

    blogGrid.innerHTML = ""

    if (filteredPosts.length === 0) {
      noResults.style.display = "block"
      return
    }

    noResults.style.display = "none"

    filteredPosts.forEach((post, index) => {
      const postCard = createPostCard(post, index)
      blogGrid.appendChild(postCard)
    })

    // Apply intersection observer for animations
    const animatedElements = blogGrid.querySelectorAll(".animate-fade-in-up")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }

  // Create post card
  function createPostCard(post, index) {
    const card = document.createElement("div")
    card.className = "blog-post-card animate-fade-in-up"
    card.style.animationDelay = `${index * 0.1}s`

    const categoryName = post.category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    card.innerHTML = `
            <div class="post-item" style="background-color: var(--card); border: 1px solid var(--border); border-radius: 0.75rem; overflow: hidden; transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column;">
                <div style="height: 200px; overflow: hidden;">
                    <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                </div>
                
                <div style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <span style="background-color: var(--secondary); color: var(--secondary-foreground); font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 0.375rem;">${categoryName}</span>
                    </div>
                    
                    <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem; line-height: 1.4;">${post.title}</h3>
                    <p style="color: var(--muted-foreground); margin-bottom: 1.5rem; flex-grow: 1; line-height: 1.5;">${post.excerpt}</p>
                    
                    <div style="display: flex; align-items: center; justify-content: space-between; color: var(--muted-foreground); font-size: 0.875rem; margin-bottom: 1rem;">
                        <div style="display: flex; align-items: center; gap: 0.25rem;">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            <span>${post.author}</span>
                        </div>
                        <span>${post.readTime}</span>
                    </div>
                    
                    <div style="display: flex; align-items: center; gap: 0.25rem; color: var(--muted-foreground); font-size: 0.875rem; margin-bottom: 1rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>${post.date}</span>
                    </div>
                    
                    <a href="#" class="btn btn-outline btn-full">Read More</a>
                </div>
            </div>
        `

    // Add hover effects
    const postItem = card.querySelector(".post-item")
    const postImage = card.querySelector("img")

    postItem.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
      this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      postImage.style.transform = "scale(1.05)"
    })

    postItem.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
      postImage.style.transform = "scale(1)"
    })

    return card
  }

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value
    renderBlogPosts()
  })

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter posts
      currentFilter = category
      renderBlogPosts()
    })
  })

  // initial render
  const defaultFilterButton = document.querySelector('.filter-btn[data-category="all"]')
  if (defaultFilterButton) {
    defaultFilterButton.click()
  } else {
    renderBlogPosts()
  }

  // Newsletter form
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.target.querySelector('input[type="email"]').value
    alert(`Thank you for subscribing with ${email}! You'll receive our latest updates.`)
    e.target.reset()
  })




  // Handle window resize for featured article
  window.addEventListener("resize", () => {
    const featuredCard = featuredArticle.querySelector(".featured-card")
    if (featuredCard) {
      if (window.innerWidth >= 768) {
        featuredCard.style.gridTemplateColumns = "1fr 1fr"
      } else {
        featuredCard.style.gridTemplateColumns = "1fr"
      }
    }
  })
})

// filter Category colors
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    // Remove active classes from all
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("bg-primary", "text-white");
      btn.classList.add("bg-gray-200", "text-gray-700");
    });

    // Add active class to clicked
    button.classList.add("bg-primary", "text-white");
    button.classList.remove("bg-gray-200", "text-gray-700");
  });
});