// Careers functionality
document.addEventListener("DOMContentLoaded", () => {

  let openPositions = []

  async function openPositionsData() {
    try {
      const response = await fetch("assets/constant/careers.json")
      openPositions = await response.json()
      renderPositions() //initial render

    } catch (error) {
      console.error("Error loading workflow steps:", error)
    }
  }

  openPositionsData(); //call fetch function


  const positionsGrid = document.getElementById("positionsGrid")

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

  // Render job positions
  function renderPositions() {
    positionsGrid.innerHTML = ""

    openPositions.forEach((position, index) => {
      const positionCard = createPositionCard(position, index)
      positionsGrid.appendChild(positionCard)
    })

    // Apply intersection observer for animations
    const animatedElements = positionsGrid.querySelectorAll(".animate-fade-in-up")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }

  // Create position card
  function createPositionCard(position, index) {
    const card = document.createElement("div")
    card.className = "position-card animate-fade-in-up"
    card.style.animationDelay = `${index * 0.1}s`

    card.innerHTML = `
            <div class="position-item" style="background-color: var(--card); border: 1px solid var(--border); border-radius: 0.75rem; padding: 2rem; transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column;">
                <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">${position.title}</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
                            <span style="background-color: var(--secondary); color: var(--secondary-foreground); font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 0.375rem;">${position.department}</span>
                            <span style="background-color: var(--background); border: 1px solid var(--border); color: var(--foreground); font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 0.375rem;">${position.type}</span>
                        </div>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 1rem; color: var(--muted-foreground); font-size: 0.875rem; margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${position.location}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.25rem;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                        <span>${position.type}</span>
                    </div>
                </div>
                
                <p style="color: var(--muted-foreground); margin-bottom: 1.5rem; flex-grow: 1;">${position.description}</p>
                
                <div style="margin-bottom: 2rem;">
                    <h4 style="font-weight: 600; margin-bottom: 0.75rem;">Requirements:</h4>
                    <ul style="list-style: none; padding: 0; color: var(--muted-foreground); font-size: 0.875rem;">
                        ${position.requirements
        .map(
          (req) => `
                            <li style="margin-bottom: 0.25rem; display: flex; align-items: flex-start; gap: 0.5rem;">
                                <span style="color: var(--primary); margin-top: 0.125rem;">•</span>
                                <span>${req}</span>
                            </li>
                        `,
        )
        .join("")}
                    </ul>
                </div>
                
                <a href="contact.html" class="btn btn-primary btn-full">Apply Now</a>
            </div>
        `

    // Add hover effect
    const positionItem = card.querySelector(".position-item")
    positionItem.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
      this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
    })

    positionItem.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })

    return card
  }


})
