// Animation utilities and effects

class AnimationController {
  constructor() {
    this.observers = []
    this.init()
  }

  init() {
    this.setupIntersectionObserver()
    this.setupScrollAnimations()
    this.setupHoverEffects()
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear")
        }
      })
    }, options)

    // Observe all animation elements
    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .zoom-in")

    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    this.observers.push(observer)
  }

  setupScrollAnimations() {
    let ticking = false

    function updateAnimations() {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax")

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })

      ticking = false
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateAnimations)
        ticking = true
      }
    }

    window.addEventListener("scroll", requestTick)
  }

  setupHoverEffects() {
    // Card hover effects
    const cards = document.querySelectorAll(".service-card, .feature")

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.02)"
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)"
      })
    })

    // Button ripple effect
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const ripple = document.createElement("span")
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.width = ripple.style.height = size + "px"
        ripple.style.left = x + "px"
        ripple.style.top = y + "px"
        ripple.classList.add("ripple")

        this.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  }

  // Utility methods
  fadeIn(element, duration = 300) {
    element.style.opacity = 0
    element.style.display = "block"

    const start = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - start
      const progress = elapsed / duration

      if (progress < 1) {
        element.style.opacity = progress
        requestAnimationFrame(animate)
      } else {
        element.style.opacity = 1
      }
    }

    requestAnimationFrame(animate)
  }

  fadeOut(element, duration = 300) {
    const start = performance.now()
    const startOpacity = Number.parseFloat(getComputedStyle(element).opacity)

    function animate(currentTime) {
      const elapsed = currentTime - start
      const progress = elapsed / duration

      if (progress < 1) {
        element.style.opacity = startOpacity * (1 - progress)
        requestAnimationFrame(animate)
      } else {
        element.style.opacity = 0
        element.style.display = "none"
      }
    }

    requestAnimationFrame(animate)
  }

  slideDown(element, duration = 300) {
    element.style.height = "0px"
    element.style.overflow = "hidden"
    element.style.display = "block"

    const targetHeight = element.scrollHeight
    const start = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - start
      const progress = elapsed / duration

      if (progress < 1) {
        element.style.height = targetHeight * progress + "px"
        requestAnimationFrame(animate)
      } else {
        element.style.height = "auto"
        element.style.overflow = "visible"
      }
    }

    requestAnimationFrame(animate)
  }

  slideUp(element, duration = 300) {
    const startHeight = element.offsetHeight
    const start = performance.now()

    element.style.overflow = "hidden"

    function animate(currentTime) {
      const elapsed = currentTime - start
      const progress = elapsed / duration

      if (progress < 1) {
        element.style.height = startHeight * (1 - progress) + "px"
        requestAnimationFrame(animate)
      } else {
        element.style.display = "none"
        element.style.height = "auto"
        element.style.overflow = "visible"
      }
    }

    requestAnimationFrame(animate)
  }
}

// Initialize animation controller when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.animationController = new AnimationController()
})

// CSS for ripple effect
const rippleCSS = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`

// Inject ripple CSS
const style = document.createElement("style")
style.textContent = rippleCSS
document.head.appendChild(style)
