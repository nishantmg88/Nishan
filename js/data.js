// School data and configuration

const schoolData = {
  // Basic Information
  name: {
    en: "Shree Sharada Basic School",
    np: "श्री शारदा आधारभूत विद्यालय",
  },

  location: {
    address: "Thakurbaba-5, Shahipur, Bardiya, Nepal",
    coordinates: {
      lat: 28.123456,
      lng: 81.123456,
    },
  },

  contact: {
    phone: "+977 9868937837",
    email: "info@shreesharadabasicschool.edu.np",
    website: "www.shreesharadabasicschool.edu.np",
  },

  principal: {
    name: {
      en: "Mr. Sanu Kanchha Tamang",
      np: "श्री सानु कान्छा तामाङ",
    },
    phone: "+977 9868937837",
    email: "principal@shreesharadabasicschool.edu.np",
  },

  // Academic Information
  grades: [
    {
      level: "ecd",
      name: {
        en: "Early Childhood Development (ECD)",
        np: "प्रारम्भिक बाल विकास (ECD)",
      },
      ageRange: "3-4 years",
      description: {
        en: "Foundation learning through play-based activities and creative exploration for young learners.",
        np: "साना सिकारुहरूका लागि खेलमा आधारित गतिविधिहरू र रचनात्मक अन्वेषणको माध्यमबाट आधारभूत सिकाइ।",
      },
    },
    {
      level: "nursery",
      name: {
        en: "Nursery Program",
        np: "नर्सरी कार्यक्रम",
      },
      ageRange: "4-5 years",
      description: {
        en: "Structured learning environment with focus on basic literacy, numeracy, and social skills development.",
        np: "आधारभूत साक्षरता, संख्या ज्ञान र सामाजिक सीप विकासमा केन्द्रित संरचित सिकाइ वातावरण।",
      },
    },
    {
      level: "primary",
      name: {
        en: "Primary Education (Grade 1-5)",
        np: "प्राथमिक शिक्षा (कक्षा १-५)",
      },
      ageRange: "5-10 years",
      description: {
        en: "Comprehensive curriculum covering all core subjects with emphasis on building strong academic foundations.",
        np: "बलियो शैक्षिक आधारहरू निर्माणमा जोड दिएर सबै मुख्य विषयहरू समेट्ने व्यापक पाठ्यक्रम।",
      },
    },
    {
      level: "lower_secondary",
      name: {
        en: "Lower Secondary (Grade 6-8)",
        np: "निम्न माध्यमिक (कक्षा ६-८)",
      },
      ageRange: "10-13 years",
      description: {
        en: "Advanced learning with specialized subjects preparing students for higher secondary education.",
        np: "उच्च माध्यमिक शिक्षाको लागि विद्यार्थीहरूलाई तयार गर्ने विशेष विषयहरूसहित उन्नत सिकाइ।",
      },
    },
  ],

  // School Features
  features: [
    {
      icon: "fas fa-chalkboard-teacher",
      title: {
        en: "Qualified Teachers",
        np: "योग्य शिक्षकहरू",
      },
      description: {
        en: "Experienced and dedicated teaching staff",
        np: "अनुभवी र समर्पित शिक्षण कर्मचारी",
      },
    },
    {
      icon: "fas fa-child",
      title: {
        en: "ECD to Grade 8",
        np: "ECD देखि कक्षा ८",
      },
      description: {
        en: "Complete basic education under one roof",
        np: "एकै छानामुनि पूर्ण आधारभूत शिक्षा",
      },
    },
    {
      icon: "fas fa-heart",
      title: {
        en: "Caring Environment",
        np: "हेरचाहपूर्ण वातावरण",
      },
      description: {
        en: "Safe and nurturing learning atmosphere",
        np: "सुरक्षित र पालनपोषणकारी सिकाइ वातावरण",
      },
    },
    {
      icon: "fas fa-trophy",
      title: {
        en: "Holistic Development",
        np: "समग्र विकास",
      },
      description: {
        en: "Focus on academic and personal growth",
        np: "शैक्षिक र व्यक्तिगत विकासमा केन्द्रित",
      },
    },
  ],

  // School Hours
  schedule: {
    weekdays: {
      start: "10:00 AM",
      end: "4:00 PM",
    },
    workingDays: {
      en: "Sunday - Friday",
      np: "आइतबार - शुक्रबार",
    },
    holidays: {
      en: "Saturday",
      np: "शनिबार",
    },
  },

  // Admission Information
  admission: {
    requirements: {
      en: [
        "Birth certificate of the child",
        "Passport size photographs (4 copies)",
        "Previous school records (if applicable)",
        "Parent/Guardian identification documents",
        "Medical certificate",
      ],
      np: [
        "बच्चाको जन्म प्रमाणपत्र",
        "पासपोर्ट साइज फोटो (४ प्रति)",
        "अघिल्लो विद्यालयको रेकर्ड (यदि लागू हुन्छ)",
        "अभिभावकको परिचय कागजातहरू",
        "स्वास्थ्य प्रमाणपत्र",
      ],
    },
    process: {
      en: [
        "Fill out the admission application form",
        "Submit required documents",
        "Attend interview with parents/guardians",
        "Complete admission formalities",
        "Pay admission fees",
      ],
      np: [
        "भर्ना आवेदन फारम भर्नुहोस्",
        "आवश्यक कागजातहरू पेश गर्नुहोस्",
        "अभिभावकसँग अन्तर्वार्तामा सहभागी हुनुहोस्",
        "भर्ना औपचारिकताहरू पूरा गर्नुहोस्",
        "भर्ना शुल्क तिर्नुहोस्",
      ],
    },
  },

  // Social Media Links
  socialMedia: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  // Gallery Images (placeholder URLs)
  gallery: [
    {
      id: 1,
      src: "../img/School2.jpg",
      thumb: "../img/School2.jpg",
      title: {
        en: "School Building",
        np: "विद्यालय भवन",
      },
      description: {
        en: "Our modern school building with well-equipped classrooms",
        np: "राम्रो सुविधा भएका कक्षाकोठाहरूसहित हाम्रो आधुनिक विद्यालय भवन",
      },
      category: "building",
    },
    {
      id: 2,
      src: "../img/red.jpg",
      thumb: "../img/red.jpg",
      title: {
        en: "Students in Classroom",
        np: "कक्षाकोठामा विद्यार्थीहरू",
      },
      description: {
        en: "Students actively participating in classroom activities",
        np: "कक्षाकोठाका गतिविधिहरूमा सक्रिय रूपमा सहभागी विद्यार्थीहरू",
      },
      category: "students",
    },
    {
      id: 3,
      src: "../img/red.jpg",
      thumb: "../img/red.jpg",
      title: {
        en: "Science Laboratory",
        np: "विज्ञान प्रयोगशाला",
      },
      description: {
        en: "Well-equipped science laboratory for practical learning",
        np: "व्यावहारिक सिकाइको लागि राम्रो सुविधा भएको विज्ञान प्रयोगशाला",
      },
      category: "facilities",
    },
    {
      id: 4,
      src: "../img/student.jpg",
      thumb: "../img/student.jpg",
      title: {
        en: "Library",
        np: "पुस्तकालय",
      },
      description: {
        en: "Spacious library with extensive collection of books",
        np: "पुस्तकहरूको व्यापक संग्रह भएको फराकिलो पुस्तकालय",
      },
      category: "facilities",
    },
    {
      id: 5,
      src: "../img/act.jpg",
      thumb: "../img/act.jpg",
      title: {
        en: "Sports Activities",
        np: "खेलकुद तिविधिहरू",
      },
      description: {
        en: "Students enjoying various sports and physical activities",
        np: "विभिन्न खेलकुद र शारीरिक गतिविधिहरूको आनन्द लिइरहेका विद्यार्थीहरू",
      },
      category: "activities",
    },
    {
      id: 6,
      src: "../img/act2.jpg",
      thumb: "../img/act2.jpg",
      title: {
        en: "Cultural Program",
        np: "सांस्कृतिक कार्यक्रम",
      },
      description: {
        en: "Students performing in annual cultural program",
        np: "वार्षिक सांस्कृतिक कार्यक्रममा प्रदर्शन गरिरहेका विद्यार्थीहरू",
      },
      category: "activities",
    },
    {
      id: 7,
      src: "../img/red.jpg",
      thumb: "../img/red.jpg",
      title: {
        en: "Computer Lab",
        np: "कम्प्युटर प्रयोगशाला",
      },
      description: {
        en: "Modern computer laboratory for digital learning",
        np: "डिजिटल सिकाइको लागि आधुनिक कम्प्युटर प्रयोगशाला",
      },
      category: "facilities",
    },
    {
      id: 8,
      src: "../img/school.jpg",
      thumb: "../img/school.jpg",
      title: {
        en: "Playground",
        np: "खेल मैदान",
      },
      description: {
        en: "Safe and spacious playground for outdoor activities",
        np: "बाहिरी गतिविधिहरूको लागि सुरक्षित र फराकिलो खेल मैदान",
      },
      category: "facilities",
    },
  ],

  // Add gallery categories
  galleryCategories: [
    {
      id: "all",
      name: {
        en: "All",
        np: "सबै",
      },
    },
    {
      id: "building",
      name: {
        en: "Building",
        np: "भवन",
      },
    },
    {
      id: "students",
      name: {
        en: "Students",
        np: "विद्यार्थीहरू",
      },
    },
    {
      id: "facilities",
      name: {
        en: "Facilities",
        np: "सुविधाहरू",
      },
    },
    {
      id: "activities",
      name: {
        en: "Activities",
        np: "गतिविधिहरू",
      },
    },
  ],
}

// Utility functions for data access
function getSchoolData(key, language = "en") {
  const keys = key.split(".")
  let data = schoolData

  for (const k of keys) {
    if (data[k]) {
      data = data[k]
    } else {
      return null
    }
  }

  // If data has language variants, return the appropriate one
  if (typeof data === "object" && data[language]) {
    return data[language]
  }

  return data
}

function getGradeInfo(level) {
  return schoolData.grades.find((grade) => grade.level === level)
}

function getFeatures() {
  return schoolData.features
}

function getContactInfo() {
  return schoolData.contact
}

function getPrincipalInfo() {
  return schoolData.principal
}

// Add utility functions for gallery
function getGalleryImages(category = "all") {
  if (category === "all") {
    return schoolData.gallery
  }
  return schoolData.gallery.filter((image) => image.category === category)
}

function getGalleryCategories() {
  return schoolData.galleryCategories
}

function getGalleryImageById(id) {
  return schoolData.gallery.find((image) => image.id === Number.parseInt(id))
}

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    schoolData,
    getSchoolData,
    getGradeInfo,
    getFeatures,
    getContactInfo,
    getPrincipalInfo,
    getGalleryImages,
    getGalleryCategories,
    getGalleryImageById,
  }
}

// Make available globally
window.schoolData = schoolData
window.getSchoolData = getSchoolData
window.getGradeInfo = getGradeInfo
window.getFeatures = getFeatures
window.getContactInfo = getContactInfo
window.getPrincipalInfo = getPrincipalInfo
window.getGalleryImages = getGalleryImages
window.getGalleryCategories = getGalleryCategories
window.getGalleryImageById = getGalleryImageById
