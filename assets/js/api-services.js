// Reviews Carousel Functionality
const reviewsGrid = document.getElementById("reviewsGrid")
const reviewPrev = document.getElementById("reviewPrev")
const reviewNext = document.getElementById("reviewNext")
const reviewDots = document.getElementById("reviewDots")

const reviews = [
  {
    stars: 5,
    text: "Transbhasha's API has transformed how we handle multilingual content. The accuracy and speed are incredible, and integration was seamless.",
    author: "Sarah Johnson",
    company: "TechFlow Solutions",
  },
  {
    stars: 5,
    text: "Translingua helped us localize our video content for 8 Indian languages in just hours instead of weeks. Game-changer for our business!",
    author: "Raj Patel",
    company: "Digital Marketing Pro",
  },
  {
    stars: 5,
    text: "The quality of translation and voice synthesis is outstanding. Our students can now access educational content in their native languages.",
    author: "Dr. Priya Nair",
    company: "EduTech Institute",
  },
  {
    stars: 4,
    text: "Excellent customer support and robust API documentation. The team is responsive and always ready to help with integration challenges.",
    author: "Michael Chen",
    company: "Global Media Corp",
  },
  {
    stars: 5,
    text: "The cultural context preservation in translations is remarkable. Our marketing campaigns now resonate better with local audiences.",
    author: "Ananya Krishnan",
    company: "Brand Solutions India",
  },
  {
    stars: 5,
    text: "Real-time processing capabilities have revolutionized our live streaming platform. Viewers can now enjoy content in their preferred language instantly.",
    author: "David Rodriguez",
    company: "StreamTech Solutions",
  },
]

let currentReviewIndex = 0
let reviewsPerPage = getReviewsPerPage()
let autoRotateInterval

function getReviewsPerPage() {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 768) return 2
  return 1
}

function updateReviewsDisplay() {
  reviewsGrid.innerHTML = ""

  for (let i = 0; i < reviewsPerPage; i++) {
    const reviewIndex = (currentReviewIndex + i) % reviews.length
    const review = reviews[reviewIndex]

    const reviewCard = document.createElement("div")
    reviewCard.className = "bg-card border border-border rounded-xl p-6 animate-fade-in-up"
    reviewCard.style.animationDelay = `${i * 0.1}s`

    reviewCard.innerHTML = `
      <div class="flex space-x-1 mb-4">
        ${Array.from(
      { length: 5 },
      (_, i) => `<span class="text-yellow-400 ${i < review.stars ? "" : "opacity-30"}">★</span>`,
    ).join("")}
      </div>
      <blockquote class="text-muted-foreground mb-6 italic">"${review.text}"</blockquote>
      <div>
        <div class="font-semibold text-card-foreground">${review.author}</div>
        <div class="text-sm text-muted-foreground">${review.company}</div>
      </div>
    `

    reviewsGrid.appendChild(reviewCard)
  }

  updateReviewDots()
}

function updateReviewDots() {
  const maxIndex = Math.max(0, reviews.length - reviewsPerPage)
  reviewDots.innerHTML = ""

  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement("button")
    dot.className = `w-2 h-2 rounded-full transition-colors ${i === currentReviewIndex ? "bg-primary" : "bg-black"}`
    dot.addEventListener("click", () => {
      currentReviewIndex = i
      updateReviewsDisplay()
      resetAutoRotate()
    })
    reviewDots.appendChild(dot)
  }
}

function nextReview() {
  const maxIndex = Math.max(0, reviews.length - reviewsPerPage)
  currentReviewIndex = currentReviewIndex >= maxIndex ? 0 : currentReviewIndex + 1
  updateReviewsDisplay()
}

function prevReview() {
  const maxIndex = Math.max(0, reviews.length - reviewsPerPage)
  currentReviewIndex = currentReviewIndex <= 0 ? maxIndex : currentReviewIndex - 1
  updateReviewsDisplay()
}

function startAutoRotate() {
  autoRotateInterval = setInterval(nextReview, 5000)
}

function resetAutoRotate() {
  clearInterval(autoRotateInterval)
  startAutoRotate()
}

reviewNext.addEventListener("click", () => {
  nextReview()
  resetAutoRotate()
})

reviewPrev.addEventListener("click", () => {
  prevReview()
  resetAutoRotate()
})

// Handle window resize
window.addEventListener("resize", () => {
  const newReviewsPerPage = getReviewsPerPage()
  if (newReviewsPerPage !== reviewsPerPage) {
    reviewsPerPage = newReviewsPerPage
    currentReviewIndex = 0
    updateReviewsDisplay()
  }
})

// Initialize reviews
updateReviewsDisplay()
startAutoRotate()
