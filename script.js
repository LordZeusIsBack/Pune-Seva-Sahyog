const uiStrings = {
  en: {
    landingDesc:
      "Your one-tap directory for all essential services in the Pune & PCMC region.",
    enter: "Enter",
    credits: "Credits: Parth Ahuja",
    subTitle: "Pune and Pimpri-Chinchwad",
    searchPlaceholder: "Search all services...",
    notFound: "No services found for your search.",
    call: "Call",
    distanceAway: "km away",
    approx: "approx.",
    loaderText: "Finding your location to show nearest services...",
    ariaCopy: "Copy phone number",
    ariaShare: "Share contact",
    ariaMap: "Show on map",
  },
  mr: {
    landingDesc:
      "पुणे आणि पिंपरी-चिंचवड परिसरातील सर्व आवश्यक सेवांसाठी तुमची वन-टॅप डिरेक्टरी.",
    enter: "प्रवेश",
    credits: "श्रेय: पार्थ आहुजा",
    subTitle: "पुणे आणि पिंपरी-चिंचवड",
    searchPlaceholder: "सर्व सेवा शोधा...",
    notFound: "तुमच्या शोधासाठी कोणतीही सेवा आढळली नाही.",
    call: "कॉल करा",
    distanceAway: "किमी दूर",
    approx: "अंदाजे",
    loaderText: "जवळच्या सेवा दर्शविण्यासाठी तुमचे स्थान शोधत आहे...",
    ariaCopy: "फोन नंबर कॉपी करा",
    ariaShare: "संपर्क शेअर करा",
    ariaMap: "नकाशावर दर्शवा",
  },
  hi: {
    landingDesc:
      "पुणे और पीसीएमसी क्षेत्र में सभी आवश्यक सेवाओं के लिए आपकी वन-टॅप डायरेक्टरी।",
    enter: "प्रवेश करें",
    credits: "श्रेय: पार्थ आहूजा",
    subTitle: "पुणे और पिंपरी-चिंचवड",
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
  },
};

const categoryTranslations = {
  All: { en: "All", mr: "सर्व", hi: "सभी" },
  Emergency: { en: "Emergency", mr: "आपत्कालीन", hi: "आपातकालीन" },
  "Local Police": {
    en: "Local Police",
    mr: "स्थानिक पोलीस",
    hi: "स्थानीय पुलिस",
  },
  Medical: { en: "Medical", mr: "वैद्यकीय", hi: "चिकित्सा" },
  "Blood Banks": { en: "Blood Banks", mr: "रक्तपेढी", hi: "ब्लड बैंक" },
  Helplines: { en: "Helplines", mr: "हेल्पलाइन", hi: "हेल्पलाइन" },
  "Civic Services": {
    en: "Civic Services",
    mr: "नागरी सेवा",
    hi: "नागरिक सेवाएं",
  },
  Utilities: { en: "Utilities", mr: "उपयुक्तता", hi: "उपयोगिताएँ" },
  Transport: { en: "Transport", mr: "वाहतूक", hi: "परिवहन" },
  "Animal Care": {
    en: "Animal Care",
    mr: "प्राणी काळजी",
    hi: "पशु देखभाल",
  },
  Education: { en: "Education", mr: "शिक्षण", hi: "शिक्षा" },
};

const helplineData = [
  // Using the full, comprehensive list from the previous turn...
  {
    category: "Emergency",
    phone: "100",
    lat: 0,
    lon: 0,
    translations: {
      en: { service: "Police", address: "Citywide Emergency Service" },
      mr: { service: "पोलीस", address: "शहरव्यापी आपत्कालीन सेवा" },
      hi: { service: "पुलिस", address: "शहरव्यापी आपातकालीन सेवा" },
    },
  },
  {
    category: "Emergency",
    phone: "108",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "Ambulance",
        address: "Statewide Medical Emergency",
      },
      mr: {
        service: "रुग्णवाहिका",
        address: "राज्यव्यापी वैद्यकीय आणीबाणी",
      },
      hi: {
        service: "एम्बुलेंस",
        address: "राज्यव्यापी चिकित्सा आपातकाल",
      },
    },
  },
  {
    category: "Emergency",
    phone: "101",
    lat: 0,
    lon: 0,
    translations: {
      en: { service: "Fire Brigade", address: "Citywide Fire Emergency" },
      mr: { service: "अग्निशमन दल", address: "शहरव्यापी आग आपत्कालीन" },
      hi: { service: "फायर ब्रिगेड", address: "शहरव्यापी अग्नि आपातकाल" },
    },
  },
  {
    category: "Emergency",
    phone: "1077",
    lat: 18.5196,
    lon: 73.8553,
    translations: {
      en: {
        service: "Disaster Management",
        address: "District Control Room",
      },
      mr: {
        service: "आपत्ती व्यवस्थापन",
        address: "जिल्हा नियंत्रण कक्ष",
      },
      hi: { service: "आपदा प्रबंधन", address: "जिला नियंत्रण कक्ष" },
    },
  },
  {
    category: "Emergency",
    phone: "1916",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "Gas Leak Emergency (All)",
        address: "LPG Leak Helpline",
      },
      mr: {
        service: "गॅस गळती आपत्कालीन (सर्व)",
        address: "एलपीजी गळती हेल्पलाइन",
      },
      hi: {
        service: "गैस रिसाव आपातकाल (सभी)",
        address: "एलपीजी रिसाव हेल्पलाइन",
      },
    },
  },
  {
    category: "Local Police",
    phone: "02026126296",
    lat: 18.5204,
    lon: 73.8718,
    translations: {
      en: { service: "Pune City Police Control", address: "Camp, Pune" },
      mr: { service: "पुणे शहर पोलीस नियंत्रण", address: "कॅम्प, पुणे" },
      hi: { service: "पुणे शहर पुलिस नियंत्रण", address: "कैंप, पुणे" },
    },
  },
  {
    category: "Local Police",
    phone: "02027652727",
    lat: 18.6277,
    lon: 73.801,
    translations: {
      en: {
        service: "Pimpri-Chinchwad Police",
        address: "PCMC Main Building, Pimpri",
      },
      mr: {
        service: "पिंपरी-चिंचवड पोलीस",
        address: "पीसीएमसी मुख्य इमारत, पिंपरी",
      },
      hi: {
        service: "पिंपरी-चिंचवड पुलिस",
        address: "पीसीएमसी मुख्य भवन, पिंपरी",
      },
    },
  },
  {
    category: "Local Police",
    phone: "02025657171",
    lat: 18.5179,
    lon: 73.8329,
    translations: {
      en: {
        service: "Deccan Police Station",
        address: "Deccan Gymkhana",
      },
      mr: { service: "डेक्कन पोलीस स्टेशन", address: "डेक्कन जिमखाना" },
      hi: { service: "डेक्कन पुलिस स्टेशन", address: "डेक्कन जिमखाना" },
    },
  },
  {
    category: "Local Police",
    phone: "02025380101",
    lat: 18.5074,
    lon: 73.8095,
    translations: {
      en: {
        service: "Kothrud Police Station",
        address: "Near MIT College, Kothrud",
      },
      mr: {
        service: "कोथरूड पोलीस स्टेशन",
        address: "एमआयटी कॉलेज जवळ, कोथरूड",
      },
      hi: {
        service: "कोथरुड पुलिस स्टेशन",
        address: "एमआईटी कॉलेज के पास, कोथरुड",
      },
    },
  },
  {
    category: "Medical",
    phone: "02026128000",
    lat: 18.528,
    lon: 73.871,
    translations: {
      en: {
        service: "Sassoon General Hospital",
        address: "Station Road, Pune",
      },
      mr: {
        service: "ससून सर्वोपचार रुग्णालय",
        address: "स्टेशन रोड, पुणे",
      },
      hi: { service: "ससून जनरल अस्पताल", address: "स्टेशन रोड, पुणे" },
    },
  },
  {
    category: "Medical",
    phone: "02067332222",
    lat: 18.6279,
    lon: 73.8143,
    translations: {
      en: { service: "YCM Hospital, PCMC", address: "Pimpri, PCMC" },
      mr: {
        service: "यशवंतराव चव्हाण रुग्णालय",
        address: "पिंपरी, पिंपरी-चिंचवड",
      },
      hi: {
        service: "वाईसीएम अस्पताल, पीसीएमसी",
        address: "पिंपरी, पीसीएमसी",
      },
    },
  },
  {
    category: "Medical",
    phone: "02040151000",
    lat: 18.5015,
    lon: 73.8213,
    translations: {
      en: {
        service: "Deenanath Mangeshkar Hospital",
        address: "Erandwane, Pune",
      },
      mr: {
        service: "दीनानाथ मंगेशकर रुग्णालय",
        address: "एरंडवणे, पुणे",
      },
      hi: {
        service: "दीनानाथ मंगेशकर अस्पताल",
        address: "एरंडवाने, पुणे",
      },
    },
  },
  {
    category: "Medical",
    phone: "02025881230",
    lat: 18.563,
    lon: 73.8068,
    translations: {
      en: {
        service: "Aundh District Hospital",
        address: "Aundh Camp, Pune",
      },
      mr: { service: "औंध जिल्हा रुग्णालय", address: "औंध कॅम्प, पुणे" },
      hi: { service: "औंध जिला अस्पताल", address: "औंध कैंप, पुणे" },
    },
  },
  {
    category: "Blood Banks",
    phone: "02024449591",
    lat: 18.5135,
    lon: 73.8475,
    translations: {
      en: {
        service: "Janakalyan Raktapedhi",
        address: "Narayan Peth, Pune",
      },
      mr: { service: "जनकल्याण रक्तपेढी", address: "नारायण पेठ, पुणे" },
      hi: { service: "जनकल्याण रक्तपेढी", address: "नारायण पेठ, पुणे" },
    },
  },
  {
    category: "Blood Banks",
    phone: "02066455100",
    lat: 18.5269,
    lon: 73.8722,
    translations: {
      en: {
        service: "Ruby Hall Clinic Blood Bank",
        address: "Sassoon Road, Pune",
      },
      mr: {
        service: "रुबी हॉल क्लिनिक रक्तपेढी",
        address: "ससून रोड, पुणे",
      },
      hi: {
        service: "रूबी हॉल क्लिनिक ब्लड बैंक",
        address: "ससून रोड, पुणे",
      },
    },
  },
  {
    category: "Helplines",
    phone: "1091",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "Women Helpline",
        address: "National Helpline for Women",
      },
      mr: {
        service: "महिला हेल्पलाइन",
        address: "महिलांसाठी राष्ट्रीय हेल्पलाइन",
      },
      hi: {
        service: "महिला हेल्पलाइन",
        address: "महिलाओं के लिए राष्ट्रीय हेल्पलाइन",
      },
    },
  },
  {
    category: "Helplines",
    phone: "1098",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "Child Helpline",
        address: "National Helpline for Children",
      },
      mr: {
        service: "चाइल्ड हेल्पलाइन",
        address: "मुलांसाठी राष्ट्रीय हेल्पलाइन",
      },
      hi: {
        service: "चाइल्ड हेल्पलाइन",
        address: "बच्चों के लिए राष्ट्रीय हेल्पलाइन",
      },
    },
  },
  {
    category: "Helplines",
    phone: "1800222262",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "State Consumer Helpline",
        address: "For consumer complaints",
      },
      mr: {
        service: "राज्य ग्राहक हेल्पलाइन",
        address: "ग्राहक तक्रारींसाठी",
      },
      hi: {
        service: "राज्य उपभोक्ता हेल्पलाइन",
        address: "उपभोक्ता शिकायतों के लिए",
      },
    },
  },
  {
    category: "Civic Services",
    phone: "02025501000",
    lat: 18.531,
    lon: 73.8447,
    translations: {
      en: { service: "PMC Head Office", address: "Shivajinagar, Pune" },
      mr: { service: "पुणे महानगरपालिका", address: "शिवाजीनगर, पुणे" },
      hi: { service: "पीएमसी मुख्यालय", address: "शिवाजीनगर, पुणे" },
    },
  },
  {
    category: "Civic Services",
    phone: "8888006666",
    lat: 18.6277,
    lon: 73.801,
    translations: {
      en: {
        service: "PCMC Sarathi Helpline",
        address: "PCMC Integrated Helpline",
      },
      mr: {
        service: "पिंपरी-चिंचवड सारथी हेल्पलाइन",
        address: "पिंपरी-चिंचवड एकात्मिक हेल्पलाइन",
      },
      hi: {
        service: "पीसीएमसी सारथी हेल्पलाइन",
        address: "पीसीएमसी एकीकृत हेल्पलाइन",
      },
    },
  },
  {
    category: "Civic Services",
    phone: "18001030222",
    lat: 18.531,
    lon: 73.8447,
    translations: {
      en: {
        service: "PMC Complaint Number",
        address: "For civic issues",
      },
      mr: {
        service: "पुणे मनपा तक्रार क्रमांक",
        address: "नागरी समस्यांसाठी",
      },
      hi: {
        service: "पीएमसी शिकायत संख्या",
        address: "नागरिक मुद्दों के लिए",
      },
    },
  },
  {
    category: "Civic Services",
    phone: "02025601258",
    lat: 18.5612,
    lon: 73.7844,
    translations: {
      en: { service: "Passport Seva Kendra", address: "Mundhwa, Pune" },
      mr: { service: "पासपोर्ट सेवा केंद्र", address: "मुंढवा, पुणे" },
      hi: { service: "पासपोर्ट सेवा केंद्र", address: "मुंढवा, पुणे" },
    },
  },
  {
    category: "Utilities",
    phone: "1912",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "MSEDCL (Electricity)",
        address: "Statewide Electricity Board",
      },
      mr: { service: "महावितरण (वीज)", address: "राज्यव्यापी वीज मंडळ" },
      hi: {
        service: "एमएसईडीसीएल (बिजली)",
        address: "राज्यव्यापी बिजली बोर्ड",
      },
    },
  },
  {
    category: "Utilities",
    phone: "02025501383",
    lat: 18.531,
    lon: 73.8447,
    translations: {
      en: { service: "PMC Water Supply", address: "Shivajinagar, Pune" },
      mr: {
        service: "पुणे मनपा पाणी पुरवठा",
        address: "शिवाजीनगर, पुणे",
      },
      hi: { service: "पीएमसी जलापूर्ति", address: "शिवाजीनगर, पुणे" },
    },
  },
  {
    category: "Transport",
    phone: "139",
    lat: 18.5276,
    lon: 73.8732,
    translations: {
      en: {
        service: "Pune Railway Station",
        address: "Station Road, Pune",
      },
      mr: { service: "पुणे रेल्वे स्टेशन", address: "स्टेशन रोड, पुणे" },
      hi: { service: "पुणे रेलवे स्टेशन", address: "स्टेशन रोड, पुणे" },
    },
  },
  {
    category: "Transport",
    phone: "02026683232",
    lat: 18.5786,
    lon: 73.9088,
    translations: {
      en: { service: "Pune Airport", address: "Lohegaon, Pune" },
      mr: { service: "पुणे विमानतळ", address: "लोहगाव, पुणे" },
      hi: { service: "पुणे हवाई अड्डा", address: "लोहेगांव, पुणे" },
    },
  },
  {
    category: "Transport",
    phone: "18002705501",
    lat: 0,
    lon: 0,
    translations: {
      en: {
        service: "Pune Metro (Maha Metro)",
        address: "Customer Care Helpline",
      },
      mr: {
        service: "पुणे मेट्रो (महा मेट्रो)",
        address: "ग्राहक सेवा हेल्पलाइन",
      },
      hi: {
        service: "पुणे मेट्रो (महा मेट्रो)",
        address: "ग्राहक सेवा हेल्पलाइन",
      },
    },
  },
  {
    category: "Transport",
    phone: "02024442244",
    lat: 18.499,
    lon: 73.8617,
    translations: {
      en: {
        service: "Swargate MSRTC Bus Stand",
        address: "Swargate, Pune",
      },
      mr: {
        service: "स्वारगेट MSRTC बस स्टँड",
        address: "स्वारगेट, पुणे",
      },
      hi: {
        service: "स्वारगेट MSRTC बस स्टैंड",
        address: "स्वारगेट, पुणे",
      },
    },
  },
  {
    category: "Transport",
    phone: "02025536970",
    lat: 18.5385,
    lon: 73.8407,
    translations: {
      en: {
        service: "Shivajinagar MSRTC Bus Stand",
        address: "Wakdewadi, Shivajinagar",
      },
      mr: {
        service: "शिवाजीनगर MSRTC बस स्टँड",
        address: "वाकडेवाडी, शिवाजीनगर",
      },
      hi: {
        service: "शिवाजीनगर MSRTC बस स्टैंड",
        address: "वाकडेवाडी, शिवाजीनगर",
      },
    },
  },
  {
    category: "Animal Care",
    phone: "9890999111",
    lat: 18.5085,
    lon: 73.7699,
    translations: {
      en: { service: "ResQ Charitable Trust", address: "Bavdhan, Pune" },
      mr: { service: "रेस्क्यू चॅरिटेबल ट्रस्ट", address: "बावधन, पुणे" },
      hi: {
        service: "रेस्क्यू चैरिटेबल ट्रस्ट",
        address: "बावधान, पुणे",
      },
    },
  },
  {
    category: "Animal Care",
    phone: "9552552355",
    lat: 18.4839,
    lon: 73.7997,
    translations: {
      en: { service: "Karma Foundation", address: "Warje, Pune" },
      mr: { service: "कर्मा फाउंडेशन", address: "वारजे, पुणे" },
      hi: { service: "कर्मा फाउंडेशन", address: "वारजे, पुणे" },
    },
  },
  {
    category: "Animal Care",
    phone: "02024376186",
    lat: 18.4496,
    lon: 73.8415,
    translations: {
      en: {
        service: "Katraj Snake Park & Rescue",
        address: "Katraj, Pune",
      },
      mr: {
        service: "कात्रज सर्प उद्यान आणि बचाव",
        address: "कात्रज, पुणे",
      },
      hi: {
        service: "कात्रज सर्प उद्यान और बचाव",
        address: "कात्रज, पुणे",
      },
    },
  },
  {
    category: "Education",
    phone: "02025696061",
    lat: 18.5535,
    lon: 73.8245,
    translations: {
      en: {
        service: "Savitribai Phule Pune University",
        address: "Ganeshkhind, Pune",
      },
      mr: {
        service: "सावित्रीबाई फुले पुणे विद्यापीठ",
        address: "गणेशखिंड, पुणे",
      },
      hi: {
        service: "सावित्रीबाई फुले पुणे विश्वविद्यालय",
        address: "गणेशखिंड, पुणे",
      },
    },
  },
  {
    category: "Education",
    phone: "02025705000",
    lat: 18.531,
    lon: 73.8447,
    translations: {
      en: {
        service: "SSC/HSC Board Office, Pune",
        address: "Shivajinagar, Pune",
      },
      mr: {
        service: "SSC/HSC बोर्ड कार्यालय, पुणे",
        address: "शिवाजीनगर, पुणे",
      },
      hi: {
        service: "SSC/HSC बोर्ड कार्यालय, पुणे",
        address: "शिवाजीनगर, पुणे",
      },
    },
  },
];

const landingPage = document.getElementById("landingPage");
const mainApp = document.getElementById("mainApp");
const enterButton = document.getElementById("enterButton");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const languageSwitcher = document.getElementById("languageSwitcher");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const helplineList = document.getElementById("helplineList");
const searchInput = document.getElementById("searchInput");
const notFoundMessage = document.getElementById("notFoundMessage");
const categoryTabsContainer = document.getElementById("categoryTabs");
const starsContainer = document.getElementById("stars-container");
const locationLoader = document.getElementById("locationLoader");

let currentLang = "en";
let sortedHelplineData = [...helplineData];

function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function requestLocationAndRender() {
  locationLoader.classList.remove("hidden");
  helplineList.innerHTML = "";
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        sortedHelplineData = [...helplineData]
          .map((service) => {
            if (service.lat !== 0 && service.lon !== 0) {
              service.distance = haversineDistance(
                latitude,
                longitude,
                service.lat,
                service.lon
              );
            } else {
              service.distance = Infinity;
            }
            return service;
          })
          .sort((a, b) => a.distance - b.distance);
        locationLoader.classList.add("hidden");
        renderList(sortedHelplineData);
      },
      (error) => {
        console.warn(`Geolocation error: ${error.message}`);
        locationLoader.classList.add("hidden");
        renderList(sortedHelplineData);
      }
    );
  } else {
    console.warn("Geolocation is not supported by this browser.");
    locationLoader.classList.add("hidden");
    renderList(sortedHelplineData);
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  updateUIText();
  renderCategoryTabs();
  const currentCategory =
    document.querySelector(".category-tab.gradient-border-active")
      ?.dataset.category || "All";
  const filtered =
    currentCategory === "All"
      ? sortedHelplineData
      : sortedHelplineData.filter((c) => c.category === currentCategory);
  renderList(filtered);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle(
      "gradient-border-active",
      btn.dataset.lang === lang
    );
  });
}

function updateUIText() {
  const translations = uiStrings[currentLang];
  document.querySelectorAll("[data-translate-key]").forEach((el) => {
    const key = el.dataset.translateKey;
    if (translations[key]) {
      if (el.tagName === "INPUT") {
        el.placeholder = translations[key];
      } else {
        el.textContent = translations[key];
      }
    }
  });
  document.documentElement.lang = currentLang;
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  sunIcon.classList.toggle("hidden", theme === "dark");
  moonIcon.classList.toggle("hidden", theme === "light");
  localStorage.setItem("theme", theme);
}

function handleRouteChange() {
  const isMainPage = window.location.hash === "#main";
  landingPage.classList.toggle("hidden", isMainPage);
  mainApp.classList.toggle("hidden", !isMainPage);
  if (isMainPage) {
    mainApp.classList.add("fade-in");
    requestLocationAndRender();
    setupScrollAnimations();
  } else {
    mainApp.classList.remove("fade-in");
  }
}

function renderList(contacts) {
  helplineList.innerHTML = "";
  const filteredData = contacts.reduce((acc, contact) => {
    (acc[contact.category] = acc[contact.category] || []).push(contact);
    return acc;
  }, {});
  notFoundMessage.classList.toggle("hidden", contacts.length > 0);
  if (contacts.length === 0) {
    feather.replace();
  }

  for (const categoryKey in filteredData) {
    const categoryWrapper = document.createElement("div");
    categoryWrapper.className = "reveal-on-scroll";
    const categoryName = categoryTranslations[categoryKey]
      ? categoryTranslations[categoryKey][currentLang]
      : categoryKey;
    categoryWrapper.innerHTML = `<h2 class="text-2xl font-bold text-[var(--accent-color)] mb-4">${categoryName}</h2>`;
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-2 gap-4";

    filteredData[categoryKey].forEach((contact) => {
      const item = document.createElement("div");
      item.className =
        "glass-card p-5 rounded-xl flex flex-col justify-between reveal-on-scroll";
      const contactInfo = contact.translations[currentLang];
      let distanceInfo =
        contact.distance && contact.distance !== Infinity
          ? `<p class="text-xs text-[var(--accent-color)] font-semibold">(${
              uiStrings[currentLang].approx
            } ${contact.distance.toFixed(1)} ${
              uiStrings[currentLang].distanceAway
            })</p>`
          : "";
      const shareButton = navigator.share
        ? `<button class="action-icon share-btn" aria-label="${uiStrings[currentLang].ariaShare}" data-service-name="${contactInfo.service}" data-phone="${contact.phone}" data-address="${contactInfo.address}"><i data-feather="share-2" class="w-5 h-5 pointer-events-none"></i></button>`
        : "";
      const mapButton =
        contact.lat !== 0
          ? `<a href="https://www.google.com/maps/search/?api=1&query=${contact.lat},${contact.lon}" target="_blank" class="action-icon" aria-label="${uiStrings[currentLang].ariaMap}"><i data-feather="map" class="w-5 h-5"></i></a>`
          : "";

      item.innerHTML = `
                                <div>
                                    <div class="flex justify-between items-start">
                                        <div class="pr-4">
                                            <p class="text-xl font-semibold text-[var(--text-primary)]">${contactInfo.service}</p>
                                            ${distanceInfo}
                                        </div>
                                        <div class="flex items-center flex-shrink-0 text-[var(--text-secondary)]">
                                            ${shareButton}
                                            <button class="action-icon copy-btn" aria-label="${uiStrings[currentLang].ariaCopy}" data-phone="${contact.phone}"><i data-feather="copy" class="w-5 h-5 pointer-events-none"></i></button>
                                            ${mapButton}
                                        </div>
                                    </div>
                                    <div class="flex items-start text-[var(--text-secondary)] text-sm mt-2">
                                        <i data-feather="map-pin" aria-hidden="true" class="w-4 h-4 mr-2 mt-1 flex-shrink-0"></i>
                                        <p>${contactInfo.address}</p>
                                    </div>
                                </div>
                                <a href="tel:${contact.phone}" class="mt-4 w-full bg-teal-600 text-white font-bold py-3 px-5 rounded-lg flex items-center justify-center space-x-2 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-400 active:scale-95">
                                    <i data-feather="phone-call" aria-hidden="true" stroke-width="2.5" width="20" height="20"></i>
                                    <span>${uiStrings[currentLang].call} ${contact.phone}</span>
                                </a>`;
      grid.appendChild(item);
    });
    categoryWrapper.appendChild(grid);
    helplineList.appendChild(categoryWrapper);
  }
  feather.replace();
  setupScrollAnimations();
}

function renderCategoryTabs() {
  const categories = [
    "All",
    ...new Set(helplineData.map((c) => c.category)),
  ];
  categoryTabsContainer.innerHTML = categories
    .map((categoryKey) => {
      if (!categoryKey || !categoryTranslations[categoryKey]) return "";
      const categoryName = categoryTranslations[categoryKey][currentLang];
      return `<button class="category-tab flex-shrink-0 px-4 py-2 text-sm font-medium text-[var(--text-secondary)] rounded-lg transition-all duration-200 border-2 border-transparent hover:border-[var(--accent-color)]" data-category="${categoryKey}">${categoryName}</button>`;
    })
    .join("");
  categoryTabsContainer
    .querySelector(".category-tab")
    .classList.add("gradient-border-active");
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document
    .querySelectorAll(".reveal-on-scroll")
    .forEach((el) => observer.observe(el));
}

function filterContacts() {
  const query = searchInput.value.toLowerCase().trim();
  const activeCategory =
    document.querySelector(".category-tab.gradient-border-active")
      ?.dataset.category || "All";
  let dataToFilter =
    activeCategory === "All"
      ? sortedHelplineData
      : sortedHelplineData.filter((c) => c.category === activeCategory);
  if (query) {
    dataToFilter = sortedHelplineData.filter((c) => {
      const contactLang = c.translations[currentLang];
      return (
        contactLang.service.toLowerCase().includes(query) ||
        contactLang.address.toLowerCase().includes(query) ||
        c.phone.includes(query)
      );
    });
    document
      .querySelectorAll(".category-tab")
      .forEach((t) => t.classList.remove("gradient-border-active"));
    document
      .querySelector('.category-tab[data-category="All"]')
      .classList.add("gradient-border-active");
  }
  renderList(dataToFilter);
}

// --- Event Listeners Setup ---
themeToggleBtn.addEventListener("click", () => {
  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "dark";
  setTheme(currentTheme === "dark" ? "light" : "dark");
});
languageSwitcher.addEventListener("click", (e) => {
  if (e.target.classList.contains("lang-btn")) {
    setLanguage(e.target.dataset.lang);
  }
});
enterButton.addEventListener("click", () => {
  history.pushState({ page: "main" }, "Main Page", "#main");
  handleRouteChange();
});
backToHomeBtn.addEventListener("click", () => {
  history.pushState({ page: "home" }, "Home Page", "#");
  handleRouteChange();
});
window.addEventListener("popstate", handleRouteChange);
searchInput.addEventListener("input", filterContacts);

helplineList.addEventListener("click", (e) => {
  const copyBtn = e.target.closest(".copy-btn");
  const shareBtn = e.target.closest(".share-btn");

  if (copyBtn) {
    const phone = copyBtn.dataset.phone;
    navigator.clipboard.writeText(phone).then(() => {
      const icon = copyBtn.querySelector("i");
      icon.setAttribute("data-feather", "check");
      feather.replace({ width: "20px", height: "20px" });
      setTimeout(() => {
        icon.setAttribute("data-feather", "copy");
        feather.replace({ width: "20px", height: "20px" });
      }, 1500);
    });
  }

  if (shareBtn) {
    const service = shareBtn.dataset.serviceName;
    const phone = shareBtn.dataset.phone;
    const address = shareBtn.dataset.address;
    navigator.share({
      title: `Pune Seva Sahyog: ${service}`,
      text: `${service}\nPhone: ${phone}\nAddress: ${address}`,
    });
  }
});

categoryTabsContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("category-tab")) return;
  document
    .querySelectorAll(".category-tab")
    .forEach((t) => t.classList.remove("gradient-border-active"));
  e.target.classList.add("gradient-border-active");
  const category = e.target.dataset.category;
  searchInput.value = "";
  const filtered =
    category === "All"
      ? sortedHelplineData
      : sortedHelplineData.filter((c) => c.category === category);
  renderList(filtered);
});

document.addEventListener("DOMContentLoaded", () => {
  setTheme(localStorage.getItem("theme") || "dark");
  const savedLang = localStorage.getItem("language") || "en";
  setLanguage(savedLang);
  let starsHTML = "";
  for (let i = 0; i < 100; i++) {
    starsHTML += `<div class="stars" style="top:${
      Math.random() * 2000
    }px;left:${Math.random() * 100}%;animation-delay:${
      Math.random() * 20
    }s;animation-duration:${100 + Math.random() * 10}s;"></div>`;
  }
  starsContainer.innerHTML = starsHTML;
  feather.replace();
  handleRouteChange();
});
