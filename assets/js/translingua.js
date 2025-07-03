document.addEventListener("DOMContentLoaded", () => {

  let workflowData = []
    
  async function loadWorkflowData() {
    try {
      const response = await fetch("assets/constant/workflow.json")
      workflowData = await response.json()
  
      updateWorkflowDisplay() //initial render
      updateActiveStep() //initial render
      startAutoPlay() //initial render
    } catch (error) {
      console.error("Error loading workflow steps:", error)
    }
  }

  loadWorkflowData() // //call fetch function
  
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
            <h3 style="font-weight: 600; color: ${isActive ? "var(--foreground)" : "var(--muted-foreground)"};">
              ${step.title}
            </h3>
            <p style="font-size: 0.875rem; color: ${isActive ? "var(--foreground)" : "var(--muted-foreground)"};">
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
        }, 2000); // 3s pause
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