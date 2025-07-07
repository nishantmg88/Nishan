// Language switching functionality

class LanguageController {
  constructor() {
    this.currentLanguage = "en"
    this.translations = {}
    this.init()
  }

  init() {
    this.loadTranslations()
    this.setupLanguageToggle()
    this.checkSavedLanguage()
  }

  loadTranslations() {
    // This would typically load from a JSON file or API
    this.translations = {
      en: {
        // Navigation
        home: "Home",
        about: "About",
        principal_message: "Principal's Message",
        programs: "Programs",
        contact: "Contact",
        admission: "Admission",

        // Hero section
        hero_title: "Welcome to Shree Sharada Basic School",
        hero_subtitle:
          "Nurturing young minds from ECD to Grade 8 with quality education, experienced teachers, and a caring environment in the heart of Bardiya.",
        apply_admission: "Apply for Admission",
        learn_more: "Learn More",

        // About section
        about_title: "About Our School",
        about_subtitle: "Committed to providing quality education and nurturing young minds in Bardiya.",
        why_choose: "Why Choose Shree Sharada Basic School?",

        // Programs
        our_programs: "Our Programs",
        programs_subtitle: "Comprehensive education programs from early childhood to grade 8.",

        // Contact
        contact_us: "Contact Us",
        get_in_touch: "Get In Touch",
        our_location: "Our Location",
        phone_number: "Phone Number",
        principal: "Principal",
        school_hours: "School Hours",

        // Footer
        quick_links: "Quick Links",
        contact_info: "Contact Info",
        all_rights_reserved: "All Rights Reserved",
      },
      np: {
        // Navigation
        home: "गृहपृष्ठ",
        about: "हाम्रो बारे",
        principal_message: "प्रधानाध्यापकको सन्देश",
        programs: "कार्यक्रमहरू",
        contact: "सम्पर्क",
        admission: "भर्ना",

        // Hero section
        hero_title: "श्री शारदा आधारभूत विद्यालयमा स्वागतम्",
        hero_subtitle:
          "बर्दियाको मुटुमा गुणस्तरीय शिक्षा, अनुभवी शिक्षकहरू र हेरचाहपूर्ण वातावरणका साथ ECD देखि कक्षा ८ सम्मका युवा दिमागहरूको पालनपोषण।",
        apply_admission: "भर्नाको लागि आवेदन गर्नुहोस्",
        learn_more: "थप जान्नुहोस्",

        // About section
        about_title: "हाम्रो विद्यालयको बारेमा",
        about_subtitle: "बर्दियामा गुणस्तरीय शिक्षा प्रदान गर्न र युवा दिमागहरूको पालनपोषण गर्न प्रतिबद्ध।",
        why_choose: "श्री शारदा आधारभूत विद्यालयलाई किन छान्ने?",

        // Programs
        our_programs: "हाम्रा कार्यक्रमहरू",
        programs_subtitle: "प्रारम्भिक बाल्यकालदेखि कक्षा ८ सम्मका व्यापक शिक्षा कार्यक्रमहरू।",

        // Contact
        contact_us: "हामीलाई सम्पर्क गर्नुहोस्",
        get_in_touch: "सम्पर्कमा रहनुहोस्",
        our_location: "हाम्रो स्थान",
        phone_number: "फोन नम्बर",
        principal: "प्रधानाध्यापक",
        school_hours: "विद्यालय समय",

        // Footer
        quick_links: "छिटो लिङ्कहरू",
        contact_info: "सम्पर्क जानकारी",
        all_rights_reserved: "सर्वाधिकार सुरक्षित",
      },
    }
  }

  setupLanguageToggle() {
    const languageToggle = document.getElementById("language-toggle")
    const enElements = document.querySelectorAll(".lang-en")
    const npElements = document.querySelectorAll(".lang-np")

    languageToggle.addEventListener("click", () => {
      this.toggleLanguage()
    })
  }

  toggleLanguage() {
    const enElements = document.querySelectorAll(".lang-en")
    const npElements = document.querySelectorAll(".lang-np")

    if (this.currentLanguage === "en") {
      // Switch to Nepali
      enElements.forEach((el) => (el.style.display = "none"))
      npElements.forEach((el) => (el.style.display = "block"))
      document.body.classList.add("nepali")
      this.currentLanguage = "np"
    } else {
      // Switch to English
      enElements.forEach((el) => (el.style.display = "block"))
      npElements.forEach((el) => (el.style.display = "none"))
      document.body.classList.remove("nepali")
      this.currentLanguage = "en"
    }

    // Save language preference
    localStorage.setItem("language", this.currentLanguage)

    // Update dynamic content
    this.updateDynamicContent()

    // Update gallery if it exists
    if (window.galleryManager) {
      window.galleryManager.updateLanguage()
    }
  }

  checkSavedLanguage() {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && savedLanguage !== this.currentLanguage) {
      this.toggleLanguage()
    }
  }

  updateDynamicContent() {
    // Update any dynamically generated content
    const dynamicElements = document.querySelectorAll("[data-translate]")

    dynamicElements.forEach((element) => {
      const key = element.getAttribute("data-translate")
      if (this.translations[this.currentLanguage][key]) {
        element.textContent = this.translations[this.currentLanguage][key]
      }
    })
  }

  translate(key) {
    return this.translations[this.currentLanguage][key] || key
  }

  getCurrentLanguage() {
    return this.currentLanguage
  }

  setLanguage(lang) {
    if (lang !== this.currentLanguage && (lang === "en" || lang === "np")) {
      this.toggleLanguage()
    }
  }
}

// Initialize language controller
document.addEventListener("DOMContentLoaded", () => {
  window.languageController = new LanguageController()
})

// Utility function for translations in other scripts
function t(key) {
  return window.languageController ? window.languageController.translate(key) : key
}
