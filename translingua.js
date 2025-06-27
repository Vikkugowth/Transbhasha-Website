document.addEventListener("DOMContentLoaded", () => {
  const workflowData = [
    {
      id: 1,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10,9 9,9 8,9"/>
          </svg>`,
      title: "Upload Content",
      description: "Upload video files or provide YouTube links",
      details: "Support for MP4, AVI, MOV formats and direct YouTube URL processing with automatic content extraction.",
      status: "pending",
    },
    {
      id: 2,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
              <line x1="12" y1="19" x2="12" y2="23"/>
              <line x1="8" y1="23" x2="16" y2="23"/>
          </svg>`,
      title: "ASR",
      description: "Automatic Speech Recognition extracts audio",
      details: "Our AI analyzes audio tracks, identifies speakers, and converts speech to text with 95%+ accuracy across 22+ Indian languages.",
      status: "pending",
    },
    {
      id: 3,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"/>
          </svg>`,
      title: "AI Grammar Correction",
      description: "Intelligent grammar and context correction",
      details: "AI-powered grammar correction ensures proper sentence structure, punctuation, and contextual accuracy for professional output.",
      status: "pending",
    },
    {
      id: 4,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 8l6 6"/>
              <path d="m4 14 6-6 2-3"/>
              <path d="M2 5h12"/>
              <path d="M7 2h1"/>
              <path d="m22 22-5-10-5 10"/>
              <path d="M14 18h6"/>
          </svg>`,
      title: "Smart Translation",
      description: "Neural translation with cultural context",
      details: "Context-aware translation preserving cultural nuances, idioms, and maintaining the original meaning across target languages.",
      status: "pending",
    },
    {
      id: 5,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>`,
      title: "Voice Synthesis",
      description: "Natural TTS with emotion matching",
      details: "Generate human-like voices with proper intonation, emotion, and speaking style that matches the original content's tone.",
      status: "pending",
    },
    {
      id: 6,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="23,7 16,12 23,17 23,7"/>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
          </svg>`,
      title: "Lip Sync & Timing",
      description: "Advanced lip synchronization technology",
      details: "AI-powered lip sync ensures perfect audio-visual alignment with natural mouth movements and proper timing synchronization.",
      status: "pending",
    },
    {
      id: 7,
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>`,
      title: "Download Results",
      description: "Get your localized content ready",
      details: "Download high-quality videos with subtitles, voice-overs, and all localization assets optimized for your target platforms.",
      status: "pending",
    },
  ]

  const workflowStepsContainer = document.getElementById("workflowSteps")
  const workflowMobileStepsContainer = document.getElementById("workflowMobileSteps")
  const activeStepIcon = document.getElementById("activeStepIcon")
  const activeStepTitle = document.getElementById("activeStepTitle")
  const activeStepDescription = document.getElementById("activeStepDescription")

  let currentStep = 0
  let autoPlay = true
  let autoPlayInterval

  function renderDesktopWorkflow() {
    workflowStepsContainer.innerHTML = ""

    workflowData.forEach((step, index) => {
      const stepElement = document.createElement("div")
      stepElement.className = "workflow-step"
      const isActive = index === currentStep
      const isLastStep = currentStep === workflowData.length - 1
      const isCompleted = index <= currentStep || (index === currentStep && isLastStep)

      stepElement.innerHTML = `
        <div class="step-circle" style="
          width: 3rem;
          height: 3rem;
          margin: 0 auto;
          border-radius: 50%;
          border: 2px solid ${isCompleted ? "#10b981" : isActive ? "var(--primary)" : "var(--border)"};
          background-color: ${isCompleted ? "#10b981" : isActive ? "var(--primary)" : "var(--background)"};
          color: ${isCompleted || isActive ? "white" : "var(--muted-foreground)"};
          display: flex;
          align-items: center;
          justify-content: center;
          ${isActive ? "animation: pulse 2s infinite;" : ""}
        ">

        ${step.icon}

        </div>
        <div style="margin-top: 1rem; text-align: center;">
          <h3 style="font-weight: 600; font-size: 0.875rem; color: ${isActive ? "var(--primary)" : "var(--foreground)"};">
            ${step.title}
          </h3>
          <p style="font-size: 0.75rem; color: var(--muted-foreground);">${step.description}</p>
        </div>
      `
      stepElement.addEventListener("click", () => {
        currentStep = index
        updateWorkflowDisplay()
        updateActiveStep()
        resetAutoPlay()
      })

      workflowStepsContainer.appendChild(stepElement)
    })
  }

  function renderMobileWorkflow() {
    workflowMobileStepsContainer.innerHTML = ""

    workflowData.forEach((step, index) => {
      const stepElement = document.createElement("div")
      const isActive = index === currentStep
      const isLastStep = currentStep === workflowData.length - 1
      const isCompleted = index <= currentStep || (index === currentStep && isLastStep)

      stepElement.innerHTML = `
        <div style="
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          border: 1px solid ${isActive ? "var(--primary)" : "var(--border)"};
          background-color: ${isActive ? "var(--primary)" : isCompleted ? "var(--muted)" : "var(--background)"};
        ">
          <div style="
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            border: 2px solid ${isCompleted ? "#10b981" : isActive ? "white" : "var(--border)"};
            background-color: ${isCompleted ? "#10b981" : isActive ? "white" : "var(--background)"};
            color: ${isCompleted ? "white" : isActive ? "var(--primary)" : "var(--muted-foreground)"};
            display: flex;
            align-items: center;
            justify-content: center;
          ">
          
            ${step.icon}

          </div>
          <div>
            <h3 style="font-weight: 600; color: ${isActive ? "black" : "var(--foreground)"};">
              ${step.title}
            </h3>
            <p style="font-size: 0.875rem; color: ${isActive ? "rgba(0,0,0,0.9)" : "var(--muted-foreground)"};">
              ${step.description}
            </p>
          </div>
        </div>
      `
      stepElement.addEventListener("click", () => {
        currentStep = index
        updateWorkflowDisplay()
        updateActiveStep()
        resetAutoPlay()
      })

      workflowMobileStepsContainer.appendChild(stepElement)
    })
  }

  function updateActiveStep() {
    const step = workflowData[currentStep]
    if (!step) return
    activeStepIcon.innerHTML = step.icon
    activeStepTitle.textContent = step.title
    activeStepDescription.textContent = step.details
  }

  function updateWorkflowDisplay() {
    const isDesktop = window.innerWidth >= 1024
    const workflowDesktop = document.querySelector(".workflow-desktop")
    const workflowMobile = document.querySelector(".workflow-mobile")

    if (workflowDesktop && workflowMobile) {
      workflowDesktop.style.display = isDesktop ? "block" : "none"
      workflowMobile.style.display = isDesktop ? "none" : "block"
      isDesktop ? renderDesktopWorkflow() : renderMobileWorkflow()
    }
  }

  
  function startAutoPlay() {
    if (!autoPlay) return;
  
    clearInterval(autoPlayInterval);
  
    autoPlayInterval = setInterval(() => {
      const isLastStep = currentStep === workflowData.length - 1;
  
      if (isLastStep) {
        clearInterval(autoPlayInterval);
        updateWorkflowDisplay(); // show last step tick
        updateActiveStep();
  
        setTimeout(() => {
          currentStep = 0; // restart
          updateWorkflowDisplay(); // step 0 ticked again
          updateActiveStep();
          startAutoPlay();
        }, 3000); // 3s pause
      } else {
        currentStep++;
        updateWorkflowDisplay();
        updateActiveStep();
      }
    }, 1000);
  }
  

  // Add pulse animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  `
  document.head.appendChild(style)

  // Initialize
  updateWorkflowDisplay()
  updateActiveStep()
  startAutoPlay()
})