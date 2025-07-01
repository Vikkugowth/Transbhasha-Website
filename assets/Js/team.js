// Team data
const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "CEO & Co-Founder",
    department: "leadership",
    bio: "Visionary leader with 15+ years in AI and language technology. Former researcher at IIT and Microsoft Research.",
    expertise: ["AI Strategy", "Business Development", "Product Vision"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rajesh@transbhasha.com",
    },
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    department: "leadership",
    bio: "Technical architect with deep expertise in machine learning and distributed systems. PhD in Computer Science from Stanford.",
    expertise: ["Machine Learning", "System Architecture", "Team Leadership"],
    social: {
      linkedin: "#",
      github: "#",
      email: "priya@transbhasha.com",
    },
    initials: "PS",
  },
  {
    name: "Arjun Patel",
    role: "Lead ML Engineer",
    department: "engineering",
    bio: "Specialist in neural machine translation and speech recognition. Previously at Google AI and Amazon Alexa.",
    expertise: ["Neural Networks", "NLP", "Speech Processing"],
    social: {
      linkedin: "#",
      github: "#",
      email: "arjun@transbhasha.com",
    },
    initials: "AP",
  },
  {
    name: "Dr. Meera Reddy",
    role: "Head of Research",
    department: "research",
    bio: "Leading researcher in computational linguistics with 50+ publications. Expert in Indian language processing.",
    expertise: ["Computational Linguistics", "Research", "Indian Languages"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "meera@transbhasha.com",
    },
    initials: "MR",
  },
  {
    name: "Vikram Singh",
    role: "Senior Software Engineer",
    department: "engineering",
    bio: "Full-stack developer with expertise in scalable web applications and API development.",
    expertise: ["Full Stack Development", "API Design", "Cloud Architecture"],
    social: {
      linkedin: "#",
      github: "#",
      email: "vikram@transbhasha.com",
    },
    initials: "VS",
  },
  {
    name: "Anita Gupta",
    role: "Product Manager",
    department: "product",
    bio: "Product strategist with experience in B2B SaaS and developer tools. MBA from IIM Bangalore.",
    expertise: ["Product Strategy", "User Experience", "Market Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "anita@transbhasha.com",
    },
    initials: "AG",
  },
  {
    name: "Prof. Suresh Iyer",
    role: "Technical Advisor",
    department: "advisory",
    bio: "Professor Emeritus at IISc Bangalore. Pioneer in Indian language computing and natural language processing.",
    expertise: ["Academic Research", "Language Technology", "Strategic Guidance"],
    social: {
      linkedin: "#",
      email: "suresh@transbhasha.com",
    },
    initials: "SI",
  },
  {
    name: "Kavya Nair",
    role: "UX Designer",
    department: "product",
    bio: "Creative designer focused on making complex AI tools accessible and intuitive for users.",
    expertise: ["UI/UX Design", "User Research", "Design Systems"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "kavya@transbhasha.com",
    },
    initials: "KN",
  },
]

// Team functionality
document.addEventListener("DOMContentLoaded", () => {
  const teamGrid = document.getElementById("teamGrid")
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

  // Render team members
  function renderTeamMembers(filter = "all") {
    const filteredMembers =
      filter === "all" ? teamMembers : teamMembers.filter((member) => member.department === filter)

    teamGrid.innerHTML = ""

    filteredMembers.forEach((member, index) => {
      const memberCard = createMemberCard(member, index)
      teamGrid.appendChild(memberCard)
    })

    // Re-apply intersection observer for animations
    const animatedElements = teamGrid.querySelectorAll(".animate-fade-in-up")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  }

  // Create member card
  function createMemberCard(member, index) {
    const card = document.createElement("div")
    card.className = "team-member-card animate-fade-in-up"
    card.style.animationDelay = `${index * 0.1}s`

    const socialLinks = Object.entries(member.social)
      .map(([platform, url]) => {
        const icons = {
          linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>`,
          twitter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>`,
          github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>`,
          email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                </svg>`,
        }

        const href = platform === "email" ? `mailto:${url}` : url
        return `<a href="${href}" class="social-link">${icons[platform]}</a>`
      })
      .join("")

    card.innerHTML = `
            <div class="member-card" style="background-color: var(--card); border: 1px solid var(--border); border-radius: 0.75rem; padding: 2rem; text-align: center; transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column;">
                <div class="member-avatar" style="width: 5rem; height: 5rem; background-color: var(--primary); color: var(--primary-foreground); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 700; margin: 0 auto 1.5rem;">
                    ${member.initials}
                </div>
                
                <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.25rem;">${member.name}</h3>
                <p style="color: var(--primary); font-weight: 500; margin-bottom: 0.5rem;">${member.role}</p>
                <div class="department-badge" style="display: inline-block; background-color: var(--secondary); color: var(--secondary-foreground); font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 0.375rem; margin-bottom: 1rem; text-transform: capitalize;">
                    ${member.department}
                </div>
                
                <p style="color: var(--muted-foreground); font-size: 0.875rem; line-height: 1.5; margin-bottom: 1.5rem; flex-grow: 1;">${member.bio}</p>
                
                <div class="expertise-tags" style="display: flex; flex-wrap: wrap; gap: 0.25rem; justify-content: center; margin-bottom: 1.5rem;">
                    ${member.expertise
                      .map(
                        (skill) => `
                        <span style="background-color: var(--muted); color: var(--muted-foreground); font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 0.25rem; border: 1px solid var(--border);">${skill}</span>
                    `,
                      )
                      .join("")}
                </div>
                
                <div class="social-links" style="display: flex; justify-content: center; gap: 0.75rem;">
                    ${socialLinks}
                </div>
            </div>
        `

    // Add hover effect
    const memberCardElement = card.querySelector(".member-card")
    memberCardElement.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
      this.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
    })

    memberCardElement.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })

    return card
  }

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const department = this.getAttribute("data-department")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter team members
      currentFilter = department
      renderTeamMembers(department)
    })
  })

  // Initial render
  renderTeamMembers()
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
