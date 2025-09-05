// js/data.js

export const uiStrings = {
  en: {
    landingDesc:
      "Your one-tap directory for essential services worldwide. Find emergency contacts, hospitals, police, and more in your area.",
    enter: "Enter",
    credits: "Credits: Parth Ahuja",
    subTitle: "Essential Services Worldwide",
    searchPlaceholder: "Search all services...",
    notFound: "No services found for your search.",
    call: "Call",
    distanceAway: "km away",
    approx: "approx.",
    loaderText: "Finding your location to show nearest services...",
    ariaCopy: "Copy phone number",
    ariaShare: "Share contact",
    ariaMap: "Show on map",
    locationError: "Unable to detect location. Showing global emergency numbers.",
    currentLocation: "Current Location",
  },
  mr: {
    landingDesc:
      "जगभरातील आवश्यक सेवांसाठी तुमची वन-टॅप डिरेक्टरी. तुमच्या परिसरात आपत्कालीन संपर्क, रुग्णालये, पोलीस आणि बरेच काही शोधा.",
    enter: "प्रवेश",
    credits: "श्रेय: पार्थ आहुजा",
    subTitle: "जगभरातील आवश्यक सेवा",
    searchPlaceholder: "सर्व सेवा शोधा...",
    notFound: "तुमच्या शोधासाठी कोणतीही सेवा आढळली नाही.",
    call: "कॉल करा",
    distanceAway: "किमी दूर",
    approx: "अंदाजे",
    loaderText: "जवळच्या सेवा दर्शविण्यासाठी तुमचे स्थान शोधत आहे...",
    ariaCopy: "फोन नंबर कॉपी करा",
    ariaShare: "संपर्क शेअर करा",
    ariaMap: "नकाशावर दर्शवा",
    locationError: "स्थान शोधू शकत नाही. जागतिक आपत्कालीन क्रमांक दर्शवित आहे.",
    currentLocation: "सध्याचे स्थान",
  },
  hi: {
    landingDesc:
      "दुनिया भर की आवश्यक सेवाओं के लिए आपकी वन-टॅप डायरेक्टरी। अपने क्षेत्र में आपातकालीन संपर्क, अस्पताल, पुलिस और बहुत कुछ खोजें।",
    enter: "प्रवेश करें",
    credits: "श्रेय: पार्थ आहूजा",
    subTitle: "दुनिया भर की आवश्यक सेवाएं",
    searchPlaceholder: "सभी सेवाएं खोजें...",
    notFound: "आपकी खोज के लिए कोई सेवा नहीं मिली।",
    call: "कॉल करें",
    distanceAway: "किमी दूर",
    approx: "लगभग",
    loaderText:
      "निकटतम सेवाएं दिखाने के लिए आपका स्थान खोजा जा रहा है...",
    ariaCopy: "फोन नंबर कॉपी करें",
    ariaShare: "संपर्क साझा करें",
    ariaMap: "नक्शे पर देखें",
    locationError: "स्थान का पता नहीं लगा सकते। वैश्विक आपातकालीन नंबर दिखा रहे हैं।",
    currentLocation: "वर्तमान स्थान",
  },
};

export const categoryTranslations = {
  All: { en: "All", mr: "सर्व", hi: "सभी" },
  Emergency: { en: "Emergency", mr: "आपत्कालीन", hi: "आपातकालीन" },
  Police: { en: "Police", mr: "पोलीस", hi: "पुलिस" },
  Medical: { en: "Medical", mr: "वैद्यकीय", hi: "चिकित्सा" },
  "Fire Department": { en: "Fire Department", mr: "अग्निशमन विभाग", hi: "अग्निशमन विभाग" },
  Hospitals: { en: "Hospitals", mr: "रुग्णालये", hi: "अस्पताल" },
  Helplines: { en: "Helplines", mr: "हेल्पलाइन", hi: "हेल्पलाइन" },
  "Civic Services": { en: "Civic Services", mr: "नागरी सेवा", hi: "नागरिक सेवाएं" },
  Utilities: { en: "Utilities", mr: "उपयुक्तता", hi: "उपयोगिताएँ" },
  Transport: { en: "Transport", mr: "वाहतूक", hi: "परिवहन" },
  "Animal Care": { en: "Animal Care", mr: "प्राणी काळजी", hi: "पशु देखभाल" },
  Education: { en: "Education", mr: "शिक्षण", hi: "शिक्षा" },
};

// Global emergency numbers and essential services
export const globalEmergencyNumbers = [
  {
    category: "Emergency",
    phone: "112",
    lat: 0,
    lon: 0,
    countries: ["EU", "Global"],
    translations: {
      en: { service: "European Emergency Number", address: "Works in all EU countries and many others worldwide" },
      mr: { service: "युरोपीय आपत्कालीन क्रमांक", address: "सर्व EU देशांमध्ये आणि जगभरातील अनेक ठिकाणी कार्य करते" },
      hi: { service: "यूरोपीय आपातकालीन नंबर", address: "सभी EU देशों और दुनिया भर के कई स्थानों पर काम करता है" },
    },
  },
  {
    category: "Emergency",
    phone: "911",
    lat: 0,
    lon: 0,
    countries: ["US", "CA"],
    translations: {
      en: { service: "Emergency Services", address: "United States & Canada" },
      mr: { service: "आपत्कालीन सेवा", address: "युनायटेड स्टेट्स आणि कॅनडा" },
      hi: { service: "आपातकालीन सेवाएं", address: "संयुक्त राज्य अमेरिका और कनाडा" },
    },
  },
  {
    category: "Emergency",
    phone: "999",
    lat: 0,
    lon: 0,
    countries: ["UK", "MY", "SG"],
    translations: {
      en: { service: "Emergency Services", address: "UK, Malaysia, Singapore & others" },
      mr: { service: "आपत्कालीन सेवा", address: "यूके, मलेशिया, सिंगापूर आणि इतर" },
      hi: { service: "आपातकालीन सेवाएं", address: "यूके, मलेशिया, सिंगापुर और अन्य" },
    },
  },
  {
    category: "Emergency",
    phone: "000",
    lat: 0,
    lon: 0,
    countries: ["AU"],
    translations: {
      en: { service: "Emergency Services", address: "Australia" },
      mr: { service: "आपत्कालीन सेवा", address: "ऑस्ट्रेलिया" },
      hi: { service: "आपातकालीन सेवाएं", address: "ऑस्ट्रेलिया" },
    },
  },
  {
    category: "Emergency",
    phone: "100",
    lat: 0,
    lon: 0,
    countries: ["IN"],
    translations: {
      en: { service: "Police", address: "India" },
      mr: { service: "पोलीस", address: "भारत" },
      hi: { service: "पुलिस", address: "भारत" },
    },
  },
  {
    category: "Emergency",
    phone: "108",
    lat: 0,
    lon: 0,
    countries: ["IN"],
    translations: {
      en: { service: "Ambulance", address: "India" },
      mr: { service: "रुग्णवाहिका", address: "भारत" },
      hi: { service: "एम्बुलेंस", address: "भारत" },
    },
  },
  {
    category: "Emergency",
    phone: "101",
    lat: 0,
    lon: 0,
    countries: ["IN"],
    translations: {
      en: { service: "Fire Brigade", address: "India" },
      mr: { service: "अग्निशमन दल", address: "भारत" },
      hi: { service: "फायर ब्रिगेड", address: "भारत" },
    },
  },
];

// Country-specific service patterns
export const countryServicePatterns = {
  US: {
    police: "911",
    fire: "911",
    medical: "911",
    poison: "1-800-222-1222",
  },
  UK: {
    police: "999",
    fire: "999",
    medical: "999",
    nonEmergencyPolice: "101",
    nonEmergencyMedical: "111",
  },
  AU: {
    police: "000",
    fire: "000",
    medical: "000",
    poisonInfo: "13 11 26",
  },
  CA: {
    police: "911",
    fire: "911",
    medical: "911",
    poisonControl: "1-844-764-7669",
  },
  IN: {
    police: "100",
    fire: "101",
    medical: "108",
    disaster: "1077",
    women: "1091",
    child: "1098",
  },
  DE: {
    police: "110",
    fire: "112",
    medical: "112",
  },
  FR: {
    police: "17",
    fire: "18",
    medical: "15",
    european: "112",
  },
  JP: {
    police: "110",
    fire: "119",
    medical: "119",
  },
  CN: {
    police: "110",
    fire: "119",
    medical: "120",
  },
};

// This will be populated with location-specific data
export let helplineData = [...globalEmergencyNumbers];

// Function to get country code from coordinates using a reverse geocoding service
export async function getCountryFromCoordinates(lat, lon) {
  try {
    // Using a free geocoding service (you might want to use a more reliable one in production)
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
    const data = await response.json();
    return data.countryCode;
  } catch (error) {
    console.error('Error getting country:', error);
    return null;
  }
}

// Function to generate services based on country
export function generateCountryServices(countryCode, lat, lon, locationName) {
  const services = [];
  const patterns = countryServicePatterns[countryCode];
  
  if (!patterns) return services;

  // Add country-specific emergency services
  Object.entries(patterns).forEach(([serviceType, phone]) => {
    let category, serviceKey;
    
    switch (serviceType) {
      case 'police':
      case 'nonEmergencyPolice':
        category = 'Police';
        serviceKey = serviceType === 'police' ? 'Emergency Police' : 'Non-Emergency Police';
        break;
      case 'fire':
        category = 'Fire Department';
        serviceKey = 'Fire Emergency';
        break;
      case 'medical':
      case 'nonEmergencyMedical':
        category = 'Medical';
        serviceKey = serviceType === 'medical' ? 'Emergency Medical' : 'Non-Emergency Medical';
        break;
      case 'poison':
      case 'poisonInfo':
      case 'poisonControl':
        category = 'Medical';
        serviceKey = 'Poison Control';
        break;
      case 'disaster':
        category = 'Emergency';
        serviceKey = 'Disaster Management';
        break;
      case 'women':
        category = 'Helplines';
        serviceKey = 'Women Helpline';
        break;
      case 'child':
        category = 'Helplines';
        serviceKey = 'Child Helpline';
        break;
      default:
        category = 'Emergency';
        serviceKey = serviceType;
    }

    services.push({
      category,
      phone,
      lat,
      lon,
      translations: {
        en: { 
          service: serviceKey, 
          address: locationName || `${countryCode} - Local Service` 
        },
        mr: { 
          service: serviceKey, 
          address: locationName || `${countryCode} - स्थानिक सेवा` 
        },
        hi: { 
          service: serviceKey, 
          address: locationName || `${countryCode} - स्थानीय सेवा` 
        },
      },
    });
  });

  return services;
}

// Function to update helpline data based on location
export async function updateHelplineDataForLocation(lat, lon) {
  try {
    // Get location information
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
    const locationData = await response.json();
    
    const countryCode = locationData.countryCode;
    const locationName = `${locationData.city || locationData.locality || 'Unknown City'}, ${locationData.countryName || countryCode}`;
    
    // Generate country-specific services
    const countryServices = generateCountryServices(countryCode, lat, lon, locationName);
    
    // Combine global emergency numbers with country-specific services
    helplineData = [
      ...globalEmergencyNumbers,
      ...countryServices
    ];
    
    return { countryCode, locationName };
  } catch (error) {
    console.error('Error updating helpline data:', error);
    helplineData = [...globalEmergencyNumbers];
    return null;
  }
}