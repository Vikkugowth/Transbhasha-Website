import { getSourceLanguages } from "./API.js";
import { getTargetLanguages } from "./API.js";
import { getASR } from "./API.js";
import { getMT } from "./API.js";
import { getTTS } from "./API.js";
import { loadThemes, applyThemeVars } from './common.js';


document.addEventListener("DOMContentLoaded", async () => {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  const sunIcon = themeToggle.querySelector(".sun-icon");
  const moonIcon = themeToggle.querySelector(".moon-icon");

  // Load themes from JSON
  const themes = await loadThemes();

  // Get saved theme or default
  const savedTheme = localStorage.getItem("theme") || "light";

  // Set dark class if needed
  html.classList.toggle("dark", savedTheme === "dark");

  // Apply CSS variables from selected theme
  applyThemeVars(themes[savedTheme]);
  console.log("savedTheme:", savedTheme)

  // Set correct icon
  updateThemeIcon(savedTheme);

  function updateThemeIcon(theme) {
    const isDark = theme === "dark";
    sunIcon.classList.toggle("hidden", !isDark);
    moonIcon.classList.toggle("hidden", isDark);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    applyThemeVars(themes[newTheme]);
    updateThemeIcon(newTheme);
  });
});




// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenu = document.getElementById("mobileMenu")

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden")
})

// Close mobile menu when clicking on a link
const mobileNavLinks = mobileMenu.querySelectorAll("a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
  })
})

// Solutions Toggle Functionality
const viewAllBtn = document.getElementById("viewAllBtn")
const solutionsGrid = document.getElementById("solutionsGrid")
let showingAll = false

const extendedSolutions = [
  {
    icon: `<svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12" y2="23"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>`,
    title: "VoiceScribe Pro",
    description:
      "Advanced speech-to-text solution with speaker identification, emotion detection, and real-time transcription capabilities.",
    features: [
      "Multi-speaker identification",
      "Emotion and sentiment analysis",
      "Live transcription streaming",
      "Custom vocabulary training",
    ],
    ctaText: "Learn More",
    ctaLink: "contact.html",
    badge: "New",
  },
  {
    icon: `<svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 8l6 6"/>
                <path d="m4 14 6-6 2-3"/>
                <path d="M2 5h12"/>
                <path d="M7 2h1"/>
                <path d="m22 22-5-10-5 10"/>
                <path d="M14 18h6"/>
              </svg>`,
    title: "LinguaBridge",
    description:
      "Enterprise translation management system with workflow automation, quality assurance, and collaborative editing features.",
    features: [
      "Translation memory integration",
      "Quality scoring algorithms",
      "Collaborative review workflows",
      "CAT tool compatibility",
    ],
    ctaText: "Discover More",
    ctaLink: "contact.html",
    badge: "New",
  },
  {
    icon: `<svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>`,
    title: "ChatLingua AI",
    description:
      "Multilingual chatbot platform that enables businesses to provide customer support across multiple Indian languages.",
    features: [
      "Intent recognition in local languages",
      "Context-aware responses",
      "Multi-channel deployment",
      "Analytics and insights",
    ],
    ctaText: "Get Started",
    ctaLink: "contact.html",
    badge: "New",
  },
  {
    icon: `<svg class="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>`,
    title: "ContentGlobal Suite",
    description:
      "Complete content localization suite for websites, mobile apps, and digital platforms with automated workflows.",
    features: [
      "Website localization automation",
      "Mobile app internationalization",
      "SEO-optimized translations",
      "Content management integration",
    ],
    ctaText: "Explore Suite",
    ctaLink: "contact.html",
    badge: "New",
  },
]

// viewAllBtn.addEventListener("click", () => {
//   if (!showingAll) {
//     // Add extended solutions
//     extendedSolutions.forEach((solution, index) => {
//       const solutionCard = createSolutionCard(solution, index + 2)
//       solutionsGrid.appendChild(solutionCard)
//     })
//     viewAllBtn.textContent = "Show Core Solutions"
//     showingAll = true
//   } else {
//     // Remove extended solutions
//     const extendedCards = solutionsGrid.querySelectorAll(".solution-extended")
//     extendedCards.forEach((card) => card.remove())
//     viewAllBtn.textContent = "View All Solutions"
//     showingAll = false
//   }
// })

// function createSolutionCard(solution, index) {
//   const card = document.createElement("div")
//   card.className =
//     "solution-extended bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
//   card.style.animationDelay = `${index * 0.1}s`

//   card.innerHTML = `
//     <div class="flex items-start space-x-4 mb-6">
//       <div class="p-3 bg-primary/10 rounded-lg">
//         ${solution.icon}
//       </div>
//       <div class="flex-1">
//         <div class="flex items-center space-x-2 mb-2">
//           <h3 class="text-xl font-semibold text-card-foreground">${solution.title}</h3>
//           ${solution.badge ? `<span class="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">${solution.badge}</span>` : ""}
//         </div>
//       </div>
//     </div>
//     <p class="text-muted-foreground mb-6">${solution.description}</p>
//     <ul class="space-y-3 mb-8">
//       ${solution.features
//         .map(
//           (feature) => `
//           <li class="flex items-center space-x-3">
//             <svg class="w-4 h-4 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
//               <polyline points="20,6 9,17 4,12"/>
//             </svg>
//             <span class="text-sm">${feature}</span>
//           </li>
//         `,
//         )
//         .join("")}
//     </ul>
//     <a href="${solution.ctaLink}" class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors">
//       ${solution.ctaText}
//     </a>
//   `

//   return card
// }

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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all animated elements
document.querySelectorAll(".animate-fade-in-up").forEach((el) => {
  observer.observe(el)
})

// Demo Section Functionality
class TransbhashaDemo {
  constructor() {
    this.isRecording = false
    this.mediaRecorder = null
    this.audioChunks = []
    this.recordingTimer = null
    this.recordingStartTime = null
    this.lastApiCall = 0
    this.rateLimitDelay = 2000 // 2 seconds between API calls
    this.lastMTText = "";

    this.initializeElements()
    this.bindEvents()
  }

  initializeElements() {
    this.micButton = document.getElementById("micButton")
    this.translateButton = document.getElementById("translateButton")
    this.speakerButton = document.getElementById("speakerButton")
    this.sourceText = document.getElementById("sourceText")
    this.sourceTextMT = document.getElementById("sourceTextMT")
    this.targetText = document.getElementById("targetTextMT")
    this.TTSpreview = document.getElementById("ttsPreview")
    this.sourceLanguage = document.getElementById("source-lang")
    this.targetLanguage = document.getElementById("targetLanguageMT")
    this.targetLanguageTTS = document.getElementById("targetTTS")
    this.voiceGender = document.getElementById("gender")
    this.recordingTimer = document.getElementById("recordingTimer")
    this.demoStatusASR = document.getElementById("demoStatusASR")
    this.demoStatusMT= document.getElementById('demoStatusMT');
    this.demoStatusTTS = document.getElementById('demoStatusTTS')

  }

  
  bindEvents() {
    if (this.micButton) {
      this.micButton.addEventListener("click", () => this.toggleRecording())
    }

    if (this.translateButton) {
      this.translateButton.addEventListener("click", () => this.simulateMT());
    }

    if (this.speakerButton) {
      this.speakerButton.addEventListener("click", () => this.simulateTTS())
    }

 
  }

  showStatus(message, type = "loading", context = "ASR") {
    let statusBox;
  
    if (context === "MT") {
      statusBox = this.demoStatusMT;
    } else if (context === "TTS") {
      statusBox = this.demoStatusTTS;
    } else {
      statusBox = this.demoStatusASR;
    }
  
    if (!statusBox) return;
  
    statusBox.textContent = message;
  
    const baseClass = "mt-6 p-4 rounded-lg text-center font-medium";
    const typeClass =
      type === "success"
        ? "bg-green-100 text-green-800 border border-green-200"
        : type === "error"
        ? "bg-red-100 text-red-800 border border-red-200"
        : "bg-blue-100 text-blue-800 border border-blue-200";
  
    statusBox.className = `${baseClass} ${typeClass}`;
    statusBox.classList.remove("hidden");
  }
  
  hideStatus(context = "ASR") {
    let statusBox;
  
    switch (context) {
      case "MT":
        statusBox = this.demoStatusMT;
        break;
      case "TTS":
        statusBox = this.demoStatusTTS;
        break;
      case "ASR":
      default:
        statusBox = this.demoStatusASR;
        break;
    }
  
    if (statusBox) {
      statusBox.classList.add("hidden");
    }
  }
  
  
  checkRateLimit() {
    const now = Date.now()
    if (now - this.lastApiCall < this.rateLimitDelay) {
      const remainingTime = Math.ceil((this.rateLimitDelay - (now - this.lastApiCall)) / 1000)
      this.showStatus(`Please wait ${remainingTime} seconds before making another request`, "error","ASR")
      return false
    }
    this.lastApiCall = now
    return true
  }


  async toggleRecording() {
    if (!this.isRecording) {
      await this.startRecording()
    } else {
      this.stopRecording()
    }
  }

  async startRecording() {
    if (!this.checkRateLimit()) return

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      this.mediaRecorder = new MediaRecorder(stream)
      this.audioChunks = []

      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data)
      }

      this.mediaRecorder.onstop = () => {
        this.processRecording()
      }

      this.mediaRecorder.start()
      this.isRecording = true
      this.recordingStartTime = Date.now()

      // Update UI
      
      this.micButton.querySelector(".btn-text").textContent = "Stop"
      this.showStatus("Recording... Speak now!")

      // Start timer
      this.startRecordingTimer()

      // Auto-stop after 60 seconds
      setTimeout(() => {
        if (this.isRecording) {
          this.stopRecording()
        }
      }, 20000)
    } catch (error) {
      console.error("Error accessing microphone:", error)
      this.showStatus("Microphone access denied. Please allow microphone access and try again.", "error")
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.isRecording) {
      this.mediaRecorder.stop()
      this.mediaRecorder.stream.getTracks().forEach((track) => track.stop())
      this.isRecording = false

      // Update UI
      
      this.micButton.querySelector(".btn-text").textContent = "Start"

      // Stop timer
      this.stopRecordingTimer()
    }
  }

  startRecordingTimer() {
    this.recordingTimer.classList.remove("hidden")

    this.recordingTimer.textContent = "00:00"
    

    this.timerInterval = setInterval(() => {
      if (this.recordingStartTime) {
        const elapsed = Math.floor((Date.now() - this.recordingStartTime) / 1000)
        const minutes = Math.floor(elapsed / 60)
        const seconds = elapsed % 60
        this.recordingTimer.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      }
    }, 1000)
  }

  stopRecordingTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
      this.timerInterval = null
    }
    if (this.recordingTimer) {
      this.recordingTimer.textContent = "00:00";
      this.recordingTimer.classList.add("hidden");
    }
  }

  async processRecording() {
    this.showStatus("Processing audio...", "loading")

    try {
      // Create audio blob
      const audioBlob = new Blob(this.audioChunks, { type: "audio/wav" })
      await this.simulateASR(audioBlob)
    } catch (error) {
      console.error("Error processing recording:", error)
      this.showStatus("Error processing audio. Please try again.", "error")
    }
  }
  
 

  async simulateASR(audioBlob) {
    const MAX_AUDIO_SIZE = 2 * 1024 * 1024; // 2MB limit

    if (audioBlob.size > MAX_AUDIO_SIZE) {
      this.showStatus("Audio too large (limit: 2MB). Please record a shorter clip.", "error", "ASR");
      return;
    }

    console.log("audio size", audioBlob.size)
    const language = this.sourceLanguage.value;
    const mtSourceText = document.getElementById('sourceTextMT');
    const charCount = document.getElementById('charCount');
    
  
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.wav');
    formData.append('language', language);
    formData.append('vtt', 'true');
    formData.append('model', 'null');
  
    this.showStatus("Recognizing speech...", "loading");
  
    try {
      const response = await getASR(formData);
      const result = await response.json();
      const vttText = result.vtt || '';
      const lines = vttText.split('\n').filter(line => line && !line.includes('-->') && !line.startsWith('WEBVTT'));
      const finalTranscript = lines.join(' ');
  
      this.sourceText.value = finalTranscript;
      this.translateButton.disabled = false;
      this.showStatus("Speech recognized successfully!", "success");
  
      if (mtSourceText && charCount) {
        mtSourceText.value = finalTranscript;
        this.lastMTText = finalTranscript; // Update preserved value
        const trimmedLength = finalTranscript.trim().length;
        charCount.textContent = `${trimmedLength}/100 characters`;
      }
  
    } catch (error) {
      console.error('ASR fetch error:', error);
      this.showStatus("Transcription failed. Please try again.", "error");
    } finally {
      setTimeout(() => this.hideStatus("ASR"), 3000);
    }
  }
  
  

  async simulateMT() {
    
    const sourceTextMT = this.sourceTextMT.value;
    const srcLang = this.sourceLanguage.value;
    const tgtLang = this.targetLanguage.value;
    
    if (!sourceTextMT.trim()) {
      this.showStatus("No input text provided for translation.", "error","MT");
      return;
    }
  
    this.showStatus("Translating...", "loading", "MT");

    try {
      
      const response= await getMT(sourceTextMT, srcLang, tgtLang);
      const data = await response.json();
      const translated = data.mt_out || 'Translation failed.';
      const truncatedTranslation = translated;
      this.targetText.value = truncatedTranslation;
      const ttsPreview = document.getElementById('ttsPreview');
      ttsPreview.value = truncatedTranslation;
      ttsPreview.dispatchEvent(new Event("input"));  
      this.speakerButton.disabled = !ttsPreview.value.trim();
  
      this.showStatus("Translation completed successfully!", "success", "MT");
     
    } catch (error) {
      console.error("MT error:", error);
      this.showStatus("Translation failed. Please try again.", "error", "MT");
    } finally {
      setTimeout(() => this.hideStatus("MT"), 3000)
    }
  }

  async simulateTTS() {
    const ttstext = this.TTSpreview.value;
    const targetLang = this.targetLanguageTTS.value;
    const gender = this.voiceGender.value;
  
    if (!ttstext.trim()) {
      this.showStatus("No text provided for speech synthesis.", "error", "TTS");
      return;
    }
        
    this.showStatus("Generating audio...", "loading", "TTS");
  
    try {
      const response = await getTTS(ttstext, targetLang, gender)
      const data = await response.json();
      console.log("TTS Response:", data);
  
      if (data.audio) {
        const audioSrc = `data:audio/mp3;base64,${data.audio}`;
        const audio = new Audio(audioSrc);
  
        audio.onplay = () => {
          this.showStatus("Playing audio...", "loading", "TTS");
        };
  
        audio.onended = () => {
          this.showStatus("Audio playback completed!", "success", "TTS");
         
        };
  
        audio.onerror = () => {
          this.showStatus("Audio playback failed.", "error", "TTS");
         
        };
  
        audio.play();
      } else {
        this.showStatus("No audio data received.", "error", "TTS");
      }
    } catch (err) {
      console.error("TTS Error:", err);
      this.showStatus("Failed to fetch or play TTS audio.", "error", "TTS");
    } finally {
      setTimeout(() => this.hideStatus("TTS"), 2000)
    }
   
  }
    
}



// Initialize demo when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("micButton")) {
    new TransbhashaDemo();
  }
  

  // MT charcount
  const mtSourceText = document.getElementById("sourceTextMT");
  if (mtSourceText) {
    mtSourceText.setAttribute('maxlength', MAX_MT_CHARS);

    mtSourceText.addEventListener("input", () => {
     updateMTCharCount(); 
    });
    
  }

  // TTS charcount
  const ttsPreview = document.getElementById("ttsPreview");
  if (ttsPreview) {
    ttsPreview.setAttribute('maxlength', MAX_TTS_CHARS);

    ttsPreview.addEventListener("input", () => {
      updateTTSCharCount();
    });

    updateTTSCharCount();
  }
});


const MAX_MT_CHARS = 100;
const MAX_TTS_CHARS = 300;

function updateMTCharCount() {
  const mtSourceText = document.getElementById('sourceTextMT');
  const charCountDiv = document.getElementById('charCount');
  const translateBtn = document.getElementById('translateButton');
  
  if (mtSourceText) {
    const trimmedLength = mtSourceText.value.trim().length;

    if (charCountDiv) {
      charCountDiv.textContent = `${trimmedLength}/${MAX_MT_CHARS} characters`;
    }

    if (translateBtn) {
      translateBtn.disabled = trimmedLength === 0;
    }
  }
}

function updateTTSCharCount() {
  const ttsPreview = document.getElementById("ttsPreview");
  const speakerButton = document.getElementById("speakerButton");
  const charCountTTS = document.getElementById("charCountTTS");

  if (ttsPreview) {
    const trimmedLength = ttsPreview.value.trim().length;

    if (charCountTTS) {
      charCountTTS.textContent = `${trimmedLength}/${MAX_TTS_CHARS} characters`;
    }

    if (speakerButton) {
      speakerButton.disabled = trimmedLength === 0;
    }
  }
}


// showtab 

function showTab(tabId, buttonElement, scroll = false) {
  const wrapper = document.getElementById("wholetab");
  const allTabs = ["asrBox", "mtBox", "ttsBox"];
  let scrollTarget = null;

  // 1. Show tab wrapper
  if (wrapper) {
    wrapper.classList.remove("hidden");
  }

  // 2. Toggle tab content
  allTabs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });

  const activeBox = document.getElementById(tabId);
  if (activeBox) {
    activeBox.classList.remove("hidden");
    if (scroll) scrollTarget = activeBox;
  }


  // 3. Tab button active visual
  document.querySelectorAll(".tab-button").forEach(btn => {
    btn.classList.remove("ring-2", "ring-primary");
  });
  if (buttonElement) {
    buttonElement.classList.add("ring-2", "ring-primary");
  }

  //  4. Scroll AFTER box is visible
  if (scroll && scrollTarget) {
    setTimeout(() => {
      scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 30);
  }
}
window.showTab = showTab;


function populateSourceLanguages(...selectorIds) {
    getSourceLanguages()
      .then(res => res.json())
      .then(data => {
        selectorIds.forEach(selectorId => {
          const select = document.getElementById(selectorId);
          select.innerHTML = '';
          Object.entries(data).forEach(([code, info]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = `${code} - ${info.caption}`;
            if (code === 'english') 
            option.selected = true;
            select.appendChild(option);
          });
        });
      })
      .catch(err => console.error('Source language fetch failed:', err));
}
  
function populateTargetLanguages(...selectorIds) {
  getTargetLanguages()
    .then(res => res.json())
    .then(data => {
      const ttsData = data.tts;
      selectorIds.forEach(selectorId => {
        const select = document.getElementById(selectorId);
        select.innerHTML = '';
        Object.entries(ttsData).forEach(([code, info]) => {
          const option = document.createElement('option');
          option.value = code;
          option.textContent = `${code} - ${info.caption}`;
          if (code === 'tamil') 
            option.selected = true;
          select.appendChild(option);
        });
      });
    })
    .catch(err => console.error('Target language fetch failed:', err));
}
  
// Populate both ASR and MT source language selects
populateSourceLanguages('source-lang', 'sourceLanguageMT');

populateTargetLanguages('targetLanguageMT', 'targetTTS');


  function syncDropdown(sourceId, targetId) {
    const source = document.getElementById(sourceId);
    const target = document.getElementById(targetId);
  
    source.addEventListener('change', () => {
      target.value = source.value;
    });
  }
 
syncDropdown('source-lang', 'sourceLanguageMT');
syncDropdown('targetLanguageMT', 'targetTTS')
  
  

// toggleDemo
function toggleDemoSection() {
  const section = document.getElementById("demoSection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


