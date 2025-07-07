// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initPreloader()
  initNavigation()
  initThemeToggle()
  initScrollAnimations()
  initParticles()
  initForms()
  setDynamicYear()
})

// Preloader
function initPreloader() {
  const preloader = document.querySelector(".preloader")

  // Simulate loading delay
  setTimeout(() => {
    preloader.classList.add("hidden")

    // Remove preloader from DOM after animation completes
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }, 1500)
}

// Navigation functionality
function initNavigation() {
  // Navbar hide on scroll down, show on scroll up
  let lastScrollTop = 0
  const header = document.querySelector("header")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      header.classList.add("nav-hidden")
    } else {
      // Scrolling up
      header.classList.remove("nav-hidden")
    }

    lastScrollTop = scrollTop
  })

  // Mobile menu toggle
  const menuToggle = document.getElementById("menu-toggle")
  const navLinks = document.getElementById("nav-links")

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}

// Theme toggle functionality
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  const themeIcon = themeToggle.querySelectorAll("i")

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    // Toggle icon visibility
    themeIcon.forEach((icon) => {
      icon.style.display = icon.style.display === "none" ? "inline-block" : "none"
    })

    // Save theme preference to localStorage
    const isDarkMode = document.body.classList.contains("dark-theme")
    localStorage.setItem("darkMode", isDarkMode)
  })

  // Check for saved theme preference
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-theme")
    themeIcon[0].style.display = "none"
    themeIcon[1].style.display = "inline-block"
  }
}

// Scroll animations
function initScrollAnimations() {
  function checkScroll() {
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .zoom-in")

    fadeElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.classList.add("appear")
      }
    })
  }

  window.addEventListener("scroll", checkScroll)
  window.addEventListener("load", checkScroll)
}

// Dynamic particle background
function initParticles() {
  function createParticles() {
    const particlesContainer = document.getElementById("particles")
    const particleCount = 30

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.classList.add("particle")

      // Random size
      const size = Math.random() * 10 + 5
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random position
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      particle.style.left = `${posX}%`
      particle.style.top = `${posY}%`

      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 5}s`

      particlesContainer.appendChild(particle)
    }
  }

  createParticles()
}

// Form handling
function initForms() {
  const admissionForm = document.getElementById("admissionForm")
  const contactForm = document.getElementById("contactForm")

  if (admissionForm) {
    admissionForm.addEventListener("submit", (e) => {
      e.preventDefault()
      handleAdmissionSubmission(admissionForm)
    })
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      handleContactSubmission(contactForm)
    })
  }

  // Initialize gallery
  initGallery()
}

// Set dynamic copyright year
function setDynamicYear() {
  const currentYear = new Date().getFullYear()
  const yearElement = document.getElementById("currentYear")
  const yearElementNp = document.getElementById("currentYearNp")

  if (yearElement) {
    yearElement.textContent = currentYear
  }

  if (yearElementNp) {
    // Convert to Nepali numerals
    const nepaliYear = convertToNepaliNumerals(currentYear.toString())
    yearElementNp.textContent = nepaliYear
  }
}

// Convert English numerals to Nepali numerals
function convertToNepaliNumerals(englishNumber) {
  const nepaliNumerals = {
    0: "०",
    1: "१",
    2: "२",
    3: "३",
    4: "४",
    5: "५",
    6: "६",
    7: "७",
    8: "८",
    9: "९",
  }

  return englishNumber.replace(/[0-9]/g, (digit) => nepaliNumerals[digit])
}

// Gallery functionality
let currentImageIndex = 0
let currentGalleryImages = []

function initGallery() {
  loadGalleryFilters()
  loadGalleryImages()
}

function loadGalleryFilters() {
  const filterContainer = document.getElementById("galleryFilter")
  if (!filterContainer) return

  const categories = window.getGalleryCategories() // Declare getGalleryCategories
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

  filterContainer.innerHTML = ""

  categories.forEach((category, index) => {
    const button = document.createElement("button")
    button.className = `filter-btn ${index === 0 ? "active" : ""}`
    button.setAttribute("data-category", category.id)
    button.innerHTML = `
      <span class="lang-en" style="display: ${currentLang === "en" ? "inline" : "none"}">${category.name.en}</span>
      <span class="lang-np" style="display: ${currentLang === "np" ? "inline" : "none"}">${category.name.np}</span>
    `

    button.addEventListener("click", () => {
      // Update active button
      document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter gallery
      filterGallery(category.id)
    })

    filterContainer.appendChild(button)
  })
}

function loadGalleryImages(category = "all") {
  const galleryContainer = document.getElementById("galleryGrid")
  if (!galleryContainer) return

  const images = window.getGalleryImages(category) // Declare getGalleryImages
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

  galleryContainer.innerHTML = ""

  images.forEach((image, index) => {
    const galleryItem = document.createElement("div")
    galleryItem.className = "gallery-item"
    galleryItem.setAttribute("data-category", image.category)
    galleryItem.setAttribute("data-index", index)

    galleryItem.innerHTML = `
      <img src="${image.thumb}" alt="${image.title[currentLang]}" loading="lazy">
      <div class="gallery-overlay">
        <div class="gallery-info">
          <h4 class="lang-en" style="display: ${currentLang === "en" ? "block" : "none"}">${image.title.en}</h4>
          <h4 class="lang-np" style="display: ${currentLang === "np" ? "block" : "none"}">${image.title.np}</h4>
          <p class="lang-en" style="display: ${currentLang === "en" ? "block" : "none"}">${image.description.en}</p>
          <p class="lang-np" style="display: ${currentLang === "np" ? "block" : "none"}">${image.description.np}</p>
        </div>
      </div>
      <div class="gallery-zoom-icon">
        <i class="fas fa-search-plus"></i>
      </div>
    `

    galleryItem.addEventListener("click", () => {
      openLightbox(image.id, category)
    })

    galleryContainer.appendChild(galleryItem)

    // Add animation delay
    setTimeout(() => {
      galleryItem.classList.add("appear")
    }, index * 100)
  })

  currentGalleryImages = images
}

function filterGallery(category) {
  loadGalleryImages(category)
}

function openLightbox(imageId, category = "all") {
  const images = window.getGalleryImages(category) // Declare getGalleryImages
  const imageIndex = images.findIndex((img) => img.id === imageId)

  if (imageIndex === -1) return

  currentImageIndex = imageIndex
  currentGalleryImages = images

  const modal = document.getElementById("lightboxModal")
  const image = document.getElementById("lightboxImage")
  const title = document.getElementById("lightboxTitle")
  const description = document.getElementById("lightboxDescription")
  const counter = document.getElementById("lightboxCounter")

  const currentImage = images[imageIndex]
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

  image.src = currentImage.src
  image.alt = currentImage.title[currentLang]
  title.textContent = currentImage.title[currentLang]
  description.textContent = currentImage.description[currentLang]
  counter.textContent = `${imageIndex + 1} / ${images.length}`

  modal.style.display = "block"
  document.body.style.overflow = "hidden"

  // Add keyboard navigation
  document.addEventListener("keydown", handleLightboxKeyboard)
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"

  // Remove keyboard navigation
  document.removeEventListener("keydown", handleLightboxKeyboard)
}

function previousImage() {
  if (currentGalleryImages.length === 0) return

  currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentGalleryImages.length - 1
  updateLightboxImage()
}

function nextImage() {
  if (currentGalleryImages.length === 0) return

  currentImageIndex = currentImageIndex < currentGalleryImages.length - 1 ? currentImageIndex + 1 : 0
  updateLightboxImage()
}

function updateLightboxImage() {
  const image = document.getElementById("lightboxImage")
  const title = document.getElementById("lightboxTitle")
  const description = document.getElementById("lightboxDescription")
  const counter = document.getElementById("lightboxCounter")

  const currentImage = currentGalleryImages[currentImageIndex]
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

  image.src = currentImage.src
  image.alt = currentImage.title[currentLang]
  title.textContent = currentImage.title[currentLang]
  description.textContent = currentImage.description[currentLang]
  counter.textContent = `${currentImageIndex + 1} / ${currentGalleryImages.length}`
}

function handleLightboxKeyboard(e) {
  switch (e.key) {
    case "Escape":
      closeLightbox()
      break
    case "ArrowLeft":
      previousImage()
      break
    case "ArrowRight":
      nextImage()
      break
  }
}

// Success Modal functions
function showSuccessModal(message) {
  const modal = document.getElementById("successModal")
  const messageElement = document.getElementById("successMessage")
  const messageElementNp = document.getElementById("successMessageNp")
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

  // Clear both message elements first
  messageElement.textContent = ""
  messageElementNp.textContent = ""

  // Set the message in the appropriate element
  if (currentLang === "np") {
    messageElementNp.textContent = message
    messageElement.style.display = "none"
    messageElementNp.style.display = "block"
  } else {
    messageElement.textContent = message
    messageElement.style.display = "block"
    messageElementNp.style.display = "none"
  }

  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeSuccessModal() {
  const modal = document.getElementById("successModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Modal functions
function openAdmissionModal() {
  const modal = document.getElementById("admissionModal")
  modal.style.display = "block"
  document.body.style.overflow = "hidden"
}

function closeAdmissionModal() {
  const modal = document.getElementById("admissionModal")
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const admissionModal = document.getElementById("admissionModal")
  const successModal = document.getElementById("successModal")
  const lightboxModal = document.getElementById("lightboxModal")

  if (event.target === admissionModal) {
    closeAdmissionModal()
  }

  if (event.target === successModal) {
    closeSuccessModal()
  }

  if (event.target === lightboxModal) {
    closeLightbox()
  }
})

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

// Declare handleAdmissionSubmission and handleContactSubmission
function handleAdmissionSubmission(form) {
  // Get form data
  const studentName = document.getElementById("studentName").value
  const grade = document.getElementById("grade").value
  const parentName = document.getElementById("parentName").value
  const phone = document.getElementById("phone").value
  const address = document.getElementById("address").value
  const message = document.getElementById("message").value

  // Simple validation
  if (!studentName || !grade || !parentName || !phone || !address) {
    alert("Please fill all required fields.")
    return
  }

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.classList.add("loading")
  submitBtn.disabled = true

  // Update button text based on current language
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"
  submitBtn.textContent = currentLang === "en" ? "Submitting..." : "पेश गर्दै..."

  // Simulate form submission
  setTimeout(() => {
    form.reset()
    closeAdmissionModal()

    const successMessage =
      currentLang === "en"
        ? "Admission application submitted successfully! We will contact you soon."
        : "भर्ना आवेदन सफलतापूर्वक पेश गरियो! हामी चाँडै तपाईंसँग सम्पर्क गर्नेछौं।"

    showSuccessModal(successMessage)

    // Reset button
    submitBtn.classList.remove("loading")
    submitBtn.disabled = false
    submitBtn.textContent = originalText
  }, 2000)
}

function handleContactSubmission(form) {
  // Get form data
  const name = document.getElementById("contact-name")?.value
  const email = document.getElementById("contact-email")?.value
  const subject = document.getElementById("contact-subject")?.value
  const message = document.getElementById("contact-message")?.value

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill all required fields.")
    return
  }

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.classList.add("loading")
  submitBtn.disabled = true

  // Update button text based on current language
  const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"
  submitBtn.textContent = currentLang === "en" ? "Sending..." : "पठाउँदै..."

  // Simulate form submission
  setTimeout(() => {
    form.reset()

    const successMessage =
      currentLang === "en"
        ? "Your message has been sent successfully! We will get back to you soon."
        : "तपाईंको सन्देश सफलतापूर्वक पठाइएको छ! हामी चाँडै तपाईंलाई जवाफ दिनेछौं।"

    showSuccessModal(successMessage)

    // Reset button
    submitBtn.classList.remove("loading")
    submitBtn.disabled = false
    submitBtn.textContent = originalText
  }, 2000)
}
