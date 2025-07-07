// Gallery-specific functionality
class GalleryManager {
  constructor() {
    this.currentImageIndex = 0
    this.currentGalleryImages = []
    this.currentCategory = "all"
    this.init()
  }

  init() {
    this.loadGalleryFilters()
    this.loadGalleryImages()
    this.setupEventListeners()
  }

  loadGalleryFilters() {
    const filterContainer = document.getElementById("galleryFilter")
    if (!filterContainer) return

    const categories = window.getGalleryCategories() // Declare the variable before using it
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
        this.filterGallery(category.id, button)
      })

      filterContainer.appendChild(button)
    })
  }

  loadGalleryImages(category = "all") {
    const galleryContainer = document.getElementById("galleryGrid")
    if (!galleryContainer) return

    const images = window.getGalleryImages(category) // Declare the variable before using it
    const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

    // Clear existing images
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
        this.openLightbox(image.id, category)
      })

      galleryContainer.appendChild(galleryItem)

      // Add staggered animation
      setTimeout(() => {
        galleryItem.classList.add("appear")
      }, index * 100)
    })

    this.currentGalleryImages = images
    this.currentCategory = category
  }

  filterGallery(category, button) {
    // Update active button
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")

    // Load filtered images
    this.loadGalleryImages(category)
  }

  openLightbox(imageId, category = "all") {
    const images = window.getGalleryImages(category) // Declare the variable before using it
    const imageIndex = images.findIndex((img) => img.id === imageId)

    if (imageIndex === -1) return

    this.currentImageIndex = imageIndex
    this.currentGalleryImages = images

    const modal = document.getElementById("lightboxModal")
    this.updateLightboxContent()

    modal.style.display = "block"
    document.body.style.overflow = "hidden"

    // Add keyboard navigation
    document.addEventListener("keydown", this.handleKeyboard.bind(this))
  }

  closeLightbox() {
    const modal = document.getElementById("lightboxModal")
    modal.style.display = "none"
    document.body.style.overflow = "auto"

    // Remove keyboard navigation
    document.removeEventListener("keydown", this.handleKeyboard.bind(this))
  }

  previousImage() {
    if (this.currentGalleryImages.length === 0) return

    this.currentImageIndex =
      this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.currentGalleryImages.length - 1
    this.updateLightboxContent()
  }

  nextImage() {
    if (this.currentGalleryImages.length === 0) return

    this.currentImageIndex =
      this.currentImageIndex < this.currentGalleryImages.length - 1 ? this.currentImageIndex + 1 : 0
    this.updateLightboxContent()
  }

  updateLightboxContent() {
    const image = document.getElementById("lightboxImage")
    const title = document.getElementById("lightboxTitle")
    const description = document.getElementById("lightboxDescription")
    const counter = document.getElementById("lightboxCounter")

    const currentImage = this.currentGalleryImages[this.currentImageIndex]
    const currentLang = window.languageController ? window.languageController.getCurrentLanguage() : "en"

    // Add loading state
    image.style.opacity = "0.5"

    image.onload = () => {
      image.style.opacity = "1"
    }

    image.src = currentImage.src
    image.alt = currentImage.title[currentLang]
    title.textContent = currentImage.title[currentLang]
    description.textContent = currentImage.description[currentLang]
    counter.textContent = `${this.currentImageIndex + 1} / ${this.currentGalleryImages.length}`
  }

  handleKeyboard(e) {
    switch (e.key) {
      case "Escape":
        this.closeLightbox()
        break
      case "ArrowLeft":
        this.previousImage()
        break
      case "ArrowRight":
        this.nextImage()
        break
    }
  }

  setupEventListeners() {
    // Close lightbox when clicking outside
    document.addEventListener("click", (event) => {
      const lightboxModal = document.getElementById("lightboxModal")
      if (event.target === lightboxModal) {
        this.closeLightbox()
      }
    })
  }

  // Update gallery when language changes
  updateLanguage() {
    this.loadGalleryFilters()
    this.loadGalleryImages(this.currentCategory)

    // Update lightbox if open
    const lightboxModal = document.getElementById("lightboxModal")
    if (lightboxModal.style.display === "block") {
      this.updateLightboxContent()
    }
  }
}

// Global gallery functions for HTML onclick events
function openLightbox(imageId, category = "all") {
  if (window.galleryManager) {
    window.galleryManager.openLightbox(imageId, category)
  }
}

function closeLightbox() {
  if (window.galleryManager) {
    window.galleryManager.closeLightbox()
  }
}

function previousImage() {
  if (window.galleryManager) {
    window.galleryManager.previousImage()
  }
}

function nextImage() {
  if (window.galleryManager) {
    window.galleryManager.nextImage()
  }
}

// Initialize gallery manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.galleryManager = new GalleryManager()
})
