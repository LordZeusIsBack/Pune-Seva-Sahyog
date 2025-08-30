// js/script.js

import { helplineData, categoryTranslations } from './data.js';
import { elements, renderList, renderCategoryTabs, updateUIText, setTheme } from './ui.js';

// --- STATE MANAGEMENT ---
let currentLang = "en";
let sortedHelplineData = [...helplineData];

// --- CORE LOGIC & UTILITIES ---
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in kilometers
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
  elements.locationLoader.classList.remove("hidden");
  elements.helplineList.innerHTML = "";
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        sortedHelplineData = [...helplineData]
          .map((service) => {
            if (service.lat !== 0 && service.lon !== 0) {
              service.distance = haversineDistance(latitude, longitude, service.lat, service.lon);
            } else {
              service.distance = Infinity;
            }
            return service;
          })
          .sort((a, b) => a.distance - b.distance);
        elements.locationLoader.classList.add("hidden");
        renderList(sortedHelplineData, currentLang);
      },
      (error) => {
        console.warn(`Geolocation error: ${error.message}`);
        elements.locationLoader.classList.add("hidden");
        renderList(sortedHelplineData, currentLang); // Fallback to default list
      }
    );
  } else {
    console.warn("Geolocation is not supported by this browser.");
    elements.locationLoader.classList.add("hidden");
    renderList(sortedHelplineData, currentLang); // Fallback to default list
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  updateUIText(currentLang);
  const categories = ["All", ...new Set(helplineData.map((c) => c.category))];
  renderCategoryTabs(categories, currentLang);
  
  const currentCategory = document.querySelector(".category-tab.gradient-border-active")?.dataset.category || "All";
  const filtered = currentCategory === "All" ? sortedHelplineData : sortedHelplineData.filter((c) => c.category === currentCategory);
  renderList(filtered, currentLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("gradient-border-active", btn.dataset.lang === lang);
  });
}

function handleRouteChange() {
  const isMainPage = window.location.hash === "#main";
  elements.landingPage.classList.toggle("hidden", isMainPage);
  elements.mainApp.classList.toggle("hidden", !isMainPage);
  if (isMainPage) {
    elements.mainApp.classList.add("fade-in");
    requestLocationAndRender();
  } else {
    elements.mainApp.classList.remove("fade-in");
  }
}

function filterContacts() {
  const query = elements.searchInput.value.toLowerCase().trim();
  const activeCategory = document.querySelector(".category-tab.gradient-border-active")?.dataset.category || "All";
  
  let dataToFilter;
  if (query) {
    // If there is a search query, filter the entire dataset
    dataToFilter = sortedHelplineData.filter((c) => {
      const contactLang = c.translations[currentLang];
      return (
        contactLang.service.toLowerCase().includes(query) ||
        contactLang.address.toLowerCase().includes(query) ||
        c.phone.includes(query)
      );
    });
    // Visually reset the active tab to "All" since the search is global
    document.querySelectorAll(".category-tab").forEach((t) => t.classList.remove("gradient-border-active"));
    document.querySelector('.category-tab[data-category="All"]')?.classList.add("gradient-border-active");
  } else {
    // If search is empty, filter by the active category
    dataToFilter = activeCategory === "All" ? sortedHelplineData : sortedHelplineData.filter((c) => c.category === activeCategory);
  }
  
  renderList(dataToFilter, currentLang);
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
    elements.themeToggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        setTheme(currentTheme === "dark" ? "light" : "dark");
    });
      
    elements.languageSwitcher.addEventListener("click", (e) => {
        if (e.target.classList.contains("lang-btn")) {
          setLanguage(e.target.dataset.lang);
        }
    });
      
    elements.enterButton.addEventListener("click", () => {
        history.pushState({ page: "main" }, "Main Page", "#main");
        handleRouteChange();
    });
      
    elements.backToHomeBtn.addEventListener("click", () => {
        history.pushState({ page: "home" }, "Home Page", "#");
        handleRouteChange();
    });
      
    window.addEventListener("popstate", handleRouteChange);
      
    elements.searchInput.addEventListener("input", filterContacts);
      
    elements.helplineList.addEventListener("click", (e) => {
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
      
    elements.categoryTabsContainer.addEventListener("click", (e) => {
        if (!e.target.classList.contains("category-tab")) return;
        document.querySelectorAll(".category-tab").forEach((t) => t.classList.remove("gradient-border-active"));
        e.target.classList.add("gradient-border-active");
        
        elements.searchInput.value = ""; // Clear search when a category is clicked
        filterContacts(); // Re-filter based on the new category (and empty search)
    });
}

// --- INITIALIZATION ---
function init() {
    setTheme(localStorage.getItem("theme") || "dark");
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
    
    let starsHTML = "";
    for (let i = 0; i < 100; i++) {
      starsHTML += `<div class="stars" style="top:${Math.random() * 2000}px;left:${Math.random() * 100}%;animation-delay:${Math.random() * 20}s;animation-duration:${100 + Math.random() * 10}s;"></div>`;
    }
    elements.starsContainer.innerHTML = starsHTML;
    
    feather.replace();
    setupEventListeners();
    handleRouteChange();
}

// Start the application once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);