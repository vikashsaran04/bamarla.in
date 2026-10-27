/**
 * बामरला ग्राम डिजिटल पोर्टल (Bamarla Village Digital Portal)
 * Main Shared JavaScript Engine
 * Author: Vikash Kumar (विकाश कुमार)
 * Village: BAMARLA, BARMER, RAJASTHAN, भारत - 344704
 */

// Configuration Object for Portal Management
const PORTAL_CONFIG = {
  villageName: "बामरला",
  villageNameEn: "Bamarla Village, Barmer",
  creatorName: "विकाश कुमार (Vikash Kumar)",
  creatorEmail: "vikashkumar823981@gmail.com",
  creatorPhone: "+91 8529326036",
  whatsappNumber: "918529326036", // WhatsApp international format per requirements
  pinCode: "344704",
  villageAddress: "BAMARLA, BARMER, RAJASTHAN, भारत · PIN Code: 344704",
  officialLogoUrl: "https://www.bamarla.in/logo.png",
  welcomePosterUrl: "https://m.media-amazon.com/images/I/71WKa4pvvlL._AC_UF894,1000_QL80_.jpg",
  
  // Section 21 & Update 4: Welcome / Promotional Popup Settings
  showPromotionalPopup: true,
  promoPopupStorageKey: "bamarla_welcome_poster_v2",
  promoPopupDelayMs: 1000,

  // Section 22: Additional Verified Notice Popup Settings
  showVerifiedNoticePopup: false,
  activeVerifiedNotice: {
    id: "notice_gs_2026",
    title: "ग्रामसभा साधारण बैठक सूचना (प्रतीक्षारत)",
    date: "आधिकारिक तिथि घोषणा लंबित",
    summary: "गाँव के विकास कार्यों व वार्षिक कार्ययोजना की समीक्षा हेतु आगामी ग्रामसभा बैठक की तिथि पंचायत द्वारा शीघ्र घोषित की जाएगी।",
    link: "notices.html"
  }
};

// Searchable Portal Content Index (With Corrected Sarpanch Associations)
const PORTAL_SEARCH_INDEX = [
  {
    title: "बामरला गाँव परिचय एवं इतिहास",
    snippet: "बामरला गाँव (सेड़वा, बाड़मेर, राजस्थान - 344704) का प्रशासनिक ढांचा, भूगोल, जनसंख्या आंकड़े एवं इतिहास।",
    url: "village.html",
    tag: "ग्राम परिचय",
    keywords: ["बामरला", "गाँव", "इतिहास", "जनसंख्या", "सेड़वा", "बाड़मेर", "भूगोल", "bamarla", "village", "barmer"]
  },
  {
    title: "ग्राम पंचायत बामरला",
    snippet: "ग्राम पंचायत बामरला की संरचना, सरपंच: धोधा खान, कार्यालय समय, ग्रामसभा एवं पंचायत के दायित्व।",
    url: "panchayat.html",
    tag: "ग्राम पंचायत",
    keywords: ["पंचायत", "बामरला", "ग्राम पंचायत", "धोधा खान", "ग्रामसभा", "कार्यालय", "panchayat"]
  },
  {
    title: "ग्राम पंचायत आदर्श बामरला",
    snippet: "आदर्श बामरला ग्राम पंचायत का विवरण, सरपंच: पेमा राम मेगवाल, प्रशासनिक ढांचा एवं विकास योजनाएँ।",
    url: "panchayat.html#adarsh-bamarla",
    tag: "आदर्श बामरला",
    keywords: ["आदर्श बामरला", "adarsh bamarla", "पेमा राम मेगवाल", "पंचायत", "ग्राम पंचायत"]
  },
  {
    title: "सरपंच: धोधा खान (Dhodha Khan) — बामरला गाँव",
    snippet: "बामरला ग्राम पंचायत के सरपंच श्री धोधा खान (Dhodha Khan) का प्रोफाइल एवं विवरण (सत्यापन प्रक्रियाधीन)।",
    url: "representatives.html#sarpanch-bamarla",
    tag: "जनप्रतिनिधि",
    keywords: ["सरपंच", "धोधा खान", "dhodha khan", "sarpanch", "बामरला"]
  },
  {
    title: "सरपंच: पेमा राम मेगवाल (Pemaram Megwal) — आदर्श बामरला",
    snippet: "आदर्श बामरला ग्राम पंचायत के सरपंच श्री पेमा राम मेगवाल (Pemaram Megwal) का प्रोफाइल (सत्यापन प्रक्रियाधीन)।",
    url: "representatives.html#sarpanch-adarsh",
    tag: "जनप्रतिनिधि",
    keywords: ["सरपंच", "पेमा राम", "मेगवाल", "pemaram", "megwal", "आदर्श बामरला", "sarpanch"]
  },
  {
    title: "उपसरपंच एवं वार्ड पंच",
    snippet: "ग्राम पंचायत बामरला एवं आदर्श बामरला के उपसरपंच एवं वार्ड सदस्यों का सत्यापन रजिस्टर।",
    url: "representatives.html#ward-members",
    tag: "जनप्रतिनिधि",
    keywords: ["उपसरपंच", "वार्ड", "वार्ड पंच", "सदस्य", "upsarpanch"]
  },
  {
    title: "सरकारी योजनाएँ (Government Schemes)",
    snippet: "पीएम किसान, नरेगा, जन सूचना पोर्टल, सामाजिक सुरक्षा पेंशन, खाद्य सुरक्षा, राशन कार्ड एवं आवास योजना।",
    url: "government-schemes.html",
    tag: "सरकारी योजनाएँ",
    keywords: ["सरकारी योजनाएँ", "पीएम किसान", "नरेगा", "पेंशन", "आवास", "राशन", "sso", "schemes", "jan soochna"]
  },
  {
    title: "विद्यालय एवं शिक्षा (Schools & Education)",
    snippet: "राजकीय उच्च माध्यमिक विद्यालय बामरला, प्राथमिक स्कूल, UDISE जानकारी एवं छात्रवृत्ति।",
    url: "schools.html",
    tag: "शिक्षा",
    keywords: ["स्कूल", "विद्यालय", "शिक्षा", "प्राथमिक", "माध्यमिक", "schools", "education", "udise"]
  },
  {
    title: "भारतीय स्टेट बैंक (SBI) बामरला शाखा",
    snippet: "SBI बामरला शाखा विवरण, IFSC कोड खोज प्रक्रिया, बैंक समय एवं वित्तीय धोखाधड़ी से बचाव चेतावनी।",
    url: "banks.html",
    tag: "बैंकिंग",
    keywords: ["sbi", "bank", "बैंक", "स्टेट बैंक", "ifsc", "खाता", "एटीएम", "atm"]
  },
  {
    title: "स्वास्थ्य सेवाएँ (Health Services)",
    snippet: "उप स्वास्थ्य केंद्र, प्राथमिक स्वास्थ्य केंद्र, 108 एम्बुलेंस एवं नजदीकी सरकारी अस्पताल।",
    url: "health-services.html",
    tag: "स्वास्थ्य",
    keywords: ["स्वास्थ्य", "अस्पताल", "दवा", "उप स्वास्थ्य केंद्र", "एम्बुलेंस", "108", "health", "hospital"]
  },
  {
    title: "जनसुविधाएँ (Public Facilities)",
    snippet: "पीने का पानी (JJM), बिजली शिकायत केंद्र, डाकघर (Post Office), उचित मूल्य दुकान (राशन)।",
    url: "public-facilities.html",
    tag: "जनसुविधाएँ",
    keywords: ["पानी", "जल", "बिजली", "डाकघर", "राशन डीलर", "post office", "facilities", "water", "electricity"]
  },
  {
    title: "विकास कार्य (Village Development Works)",
    snippet: "सड़क निर्माण, पेयजल टंकी, विद्यालय चारदीवारी, स्ट्रीट लाइट - पूर्ण एवं प्रगतिरत विकास कार्य।",
    url: "development-works.html",
    tag: "विकास कार्य",
    keywords: ["विकास कार्य", "सड़क", "नाली", "टंकी", "स्ट्रीट लाइट", "development", "works", "tender"]
  },
  {
    title: "भामाशाह एवं दानदाता (Village Contributors)",
    snippet: "गाँव विकास, शिक्षा एवं जनहित में स्वैच्छिक आर्थिक व भौतिक सहयोग करने वाले भामाशाह।",
    url: "bhamashah.html",
    tag: "भामाशाह",
    keywords: ["भामाशाह", "दानदाता", "सहयोग", "योगदान", "bhamashah", "contributors", "donation"]
  },
  {
    title: "आवश्यक संपर्क एवं आपातकालीन नंबर",
    snippet: "पुलिस, एम्बुलेंस, महिला हेल्पलाइन, जिला कलेक्टर, उपखंड अधिकारी (SDM) सेड़वा एवं तहसीलदार संपर्क।",
    url: "important-contacts.html",
    tag: "संपर्क",
    keywords: ["संपर्क", "फोन", "मोबाइल", "हेल्पलाइन", "police", "ambulance", "collector", "contacts"]
  },
  {
    title: "शिकायत सहायता एवं राजस्थान संपर्क 181",
    snippet: "सरकारी सेवाओं की शिकायत हेतु राजस्थान संपर्क पोर्टल 181 एवं बिजली-पानी शिकायत मार्गदर्शिका।",
    url: "grievance.html",
    tag: "शिकायत सहायता",
    keywords: ["शिकायत", "grievance", "181", "राजस्थान संपर्क", "बिजली शिकायत", "पानी शिकायत"]
  },
  {
    title: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
    snippet: "बामरला गाँव, पिन कोड 344704, सरपंच, स्कूल, बैंक और पोर्टल संबंधित सामान्य सवाल।",
    url: "faq.html",
    tag: "FAQ",
    keywords: ["faq", "प्रश्न", "उत्तर", "सवाल", "जानकारी"]
  },
  {
    title: "डिजिटल पोर्टल निर्माता: विकाश कुमार",
    snippet: "विकाश कुमार द्वारा गाँव की डिजिटल सूचना सुलभता हेतु शुरू की गई स्वैच्छिक जनहित पहल का विवरण।",
    url: "about-portal.html",
    tag: "पोर्टल निर्माता",
    keywords: ["विकाश कुमार", "vikash kumar", "निर्माता", "संस्थापक", "creator", "about"]
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initCopyrightYear();
  initActiveNavLink();
  initMobileMenu();
  initSearch();
  initAccordions();
  initPopups();
  initFormHandlers();
});

// 1. Dynamic Copyright Year
function initCopyrightYear() {
  const yearSpans = document.querySelectorAll(".current-year");
  const year = new Date().getFullYear();
  yearSpans.forEach(el => {
    el.textContent = year;
  });
}

// 2. Active Navigation Link Highlighting
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
  
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link, .dropdown-item a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pageName || (pageName === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

// 3. Mobile Navigation Menu
function initMobileMenu() {
  const menuBtn = document.getElementById("mobileMenuBtn");
  const drawer = document.getElementById("mobileNavDrawer");
  
  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", () => {
      const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", !isExpanded);
      drawer.classList.toggle("open");
      menuBtn.innerHTML = drawer.classList.contains("open") 
        ? '<span style="font-size: 1.3rem;">✕</span>' 
        : '<span style="font-size: 1.3rem;">☰</span>';
    });
  }
}

// 4. Live Search System
function initSearch() {
  const searchInputs = document.querySelectorAll(".portal-search-input");
  
  searchInputs.forEach(input => {
    const parentBox = input.closest(".portal-search-box");
    if (!parentBox) return;

    let dropdown = parentBox.querySelector(".search-results-dropdown");
    if (!dropdown) {
      dropdown = document.createElement("div");
      dropdown.className = "search-results-dropdown";
      parentBox.appendChild(dropdown);
    }

    input.addEventListener("input", (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (query.length < 2) {
        dropdown.style.display = "none";
        dropdown.innerHTML = "";
        return;
      }

      const results = PORTAL_SEARCH_INDEX.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const snippetMatch = item.snippet.toLowerCase().includes(query);
        const keywordMatch = item.keywords.some(k => k.toLowerCase().includes(query));
        return titleMatch || snippetMatch || keywordMatch;
      });

      if (results.length > 0) {
        dropdown.innerHTML = results.slice(0, 6).map(r => `
          <a href="${r.url}" class="search-result-item">
            <div class="search-result-title">
              ${escapeHtml(r.title)}
              <span class="search-result-tag">${escapeHtml(r.tag)}</span>
            </div>
            <div class="search-result-snippet">${escapeHtml(r.snippet)}</div>
          </a>
        `).join("");
        dropdown.style.display = "block";
      } else {
        dropdown.innerHTML = `
          <div class="search-result-item" style="color: #6B7280; text-align: center; padding: 1.25rem;">
            '<strong>${escapeHtml(query)}</strong>' से संबंधित कोई प्रविष्टि नहीं मिली।<br>
            <span style="font-size: 0.8125rem;">कृपया अन्य शब्द लिखें अथवा <a href="village-directory.html" style="color: #1E3A8A; font-weight: 600;">ग्राम डायरेक्टरी</a> देखें।</span>
          </div>
        `;
        dropdown.style.display = "block";
      }
    });

    // Close dropdown on outside click
    document.addEventListener("click", (evt) => {
      if (!parentBox.contains(evt.target)) {
        dropdown.style.display = "none";
      }
    });
  });
}

// 5. Accordion Components (FAQ)
function initAccordions() {
  const triggers = document.querySelectorAll(".accordion-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      if (!item) return;

      const isOpen = item.classList.contains("active");
      
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll(".accordion-item").forEach(other => {
          if (other !== item) other.classList.remove("active");
        });
      }

      if (isOpen) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
}

// 6. Promotional & Notice Popups Framework (With Supplied Poster Image)
function initPopups() {
  // Only execute on homepage (index.html or root)
  const isHomepage = window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") || window.location.pathname === "";
  if (!isHomepage) return;

  if (PORTAL_CONFIG.showPromotionalPopup) {
    const isDismissed = localStorage.getItem(PORTAL_CONFIG.promoPopupStorageKey);
    if (!isDismissed) {
      setTimeout(() => {
        showPromotionalModal();
      }, PORTAL_CONFIG.promoPopupDelayMs);
      return;
    }
  }

  if (PORTAL_CONFIG.showVerifiedNoticePopup && PORTAL_CONFIG.activeVerifiedNotice) {
    const noticeDismissKey = "bamarla_notice_" + PORTAL_CONFIG.activeVerifiedNotice.id;
    if (!localStorage.getItem(noticeDismissKey)) {
      setTimeout(() => {
        showNoticeModal(PORTAL_CONFIG.activeVerifiedNotice);
      }, 1500);
    }
  }
}

// Section 21 & Requirement 4: Welcome Modal with Supplied Poster Image
function showPromotionalModal() {
  let modalOverlay = document.getElementById("promoModalOverlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "promoModalOverlay";
    modalOverlay.className = "portal-modal-overlay";
    modalOverlay.innerHTML = `
      <div class="portal-modal" role="dialog" aria-modal="true" aria-labelledby="promoTitle" style="max-width: 540px; width: 95%; max-height: 90vh; overflow-y: auto;">
        <button class="modal-close-btn" id="closePromoBtn" aria-label="बंद करें" style="position: absolute; top: 10px; right: 10px; z-index: 20; background: #FFFFFF; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">&times;</button>
        <div class="modal-body" style="padding: 1.5rem 1.25rem; text-align: center;">
          
          <!-- Supplied Poster Display (Requirement 4) -->
          <div style="background: #00152F; border-radius: 8px; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #F59E0B;">
            <img 
              src="${PORTAL_CONFIG.welcomePosterUrl}" 
              alt="बामरला ग्राम डिजिटल पोर्टल स्वागत पोस्टर" 
              class="popup-poster-img"
              style="width: 100%; max-height: 380px; object-fit: contain; border-radius: 6px; display: block; margin: 0 auto;"
              onerror="this.style.display='none'; document.getElementById('posterFallbackBox').style.display='block';"
            />
            <div id="posterFallbackBox" style="display: none; padding: 2rem 1rem; background: #FFFBEB; border-radius: 6px; color: #92400E;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🚩</div>
              <h4 style="font-size: 1.2rem; font-weight: 800; color: #002147;">बामरला ग्राम डिजिटल पोर्टल</h4>
              <p style="font-size: 0.875rem;">गाँव की जानकारी, जनसुविधाएँ और विकास</p>
            </div>
          </div>

          <h3 id="promoTitle" style="font-size: 1.3rem; font-weight: 800; color: #002147; margin-bottom: 0.4rem; line-height: 1.3;">
            बामरला की डिजिटल पहचान में सहयोग
          </h3>
          <p style="font-size: 0.925rem; color: #4B5563; margin-bottom: 0.6rem; line-height: 1.5;">
            यह ग्राम डिजिटल पोर्टल <strong>विकाश कुमार</strong> की एक स्वैच्छिक जनहित पहल है।
          </p>
          <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 0.6rem 0.75rem; border-radius: 6px; margin-bottom: 1rem;">
            <span style="font-size: 0.875rem; color: #1E3A8A; font-weight: 600;">
              वेबसाइट सहयोग: DREX AGENCY
            </span>
          </div>

          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://www.drexagency.shop" target="_blank" rel="noopener noreferrer" class="btn btn-saffron btn-sm" style="padding: 0.6rem 1.4rem;">
              Drex Agency देखें &rarr;
            </a>
            <button id="dismissPromoBtn" class="btn btn-outline btn-sm" style="padding: 0.6rem 1.2rem;">
              पोर्टल में प्रवेश करें
            </button>
          </div>
          <div style="margin-top: 0.75rem; font-size: 0.75rem; color: #94A3B8;">
            * यह पोर्टल स्वतंत्र नागरिक सूचना मंच है, आधिकारिक सरकारी वेबसाइट नहीं।
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);

    const closeBtn = document.getElementById("closePromoBtn");
    const dismissBtn = document.getElementById("dismissPromoBtn");

    const dismissHandler = () => {
      modalOverlay.classList.remove("open");
      localStorage.setItem(PORTAL_CONFIG.promoPopupStorageKey, "true");
    };

    if (closeBtn) closeBtn.addEventListener("click", dismissHandler);
    if (dismissBtn) dismissBtn.addEventListener("click", dismissHandler);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) dismissHandler();
    });
  }

  modalOverlay.classList.add("open");
}

// Section 22 Verified Notice Modal Display
function showNoticeModal(notice) {
  let noticeOverlay = document.getElementById("noticeModalOverlay");
  if (!noticeOverlay) {
    noticeOverlay = document.createElement("div");
    noticeOverlay.id = "noticeModalOverlay";
    noticeOverlay.className = "portal-modal-overlay";
    noticeOverlay.innerHTML = `
      <div class="portal-modal" role="dialog" aria-modal="true" style="border-color: #3B82F6;">
        <button class="modal-close-btn" id="closeNoticeBtn" aria-label="बंद करें">&times;</button>
        <div class="modal-body" style="text-align: left;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="status-badge verified">सत्यापित सूचना</span>
            <span style="font-size: 0.8125rem; color: #64748B;">${escapeHtml(notice.date)}</span>
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: #002147; margin-bottom: 0.5rem;">
            ${escapeHtml(notice.title)}
          </h3>
          <p style="font-size: 0.9375rem; color: #4B5563; margin-bottom: 1.25rem; line-height: 1.6;">
            ${escapeHtml(notice.summary)}
          </p>
          <div style="display: flex; gap: 0.75rem;">
            <a href="${notice.link}" class="btn btn-primary btn-sm">पूरी सूचना देखें</a>
            <button id="dismissNoticeBtn" class="btn btn-outline btn-sm">समझ गया</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(noticeOverlay);

    const closeBtn = document.getElementById("closeNoticeBtn");
    const dismissBtn = document.getElementById("dismissNoticeBtn");

    const dismissHandler = () => {
      noticeOverlay.classList.remove("open");
      localStorage.setItem("bamarla_notice_" + notice.id, "true");
    };

    if (closeBtn) closeBtn.addEventListener("click", dismissHandler);
    if (dismissBtn) dismissBtn.addEventListener("click", dismissHandler);
    noticeOverlay.addEventListener("click", (e) => {
      if (e.target === noticeOverlay) dismissHandler();
    });
  }

  noticeOverlay.classList.add("open");
}

// 7. Form Handlers: WhatsApp Direct Dispatch (+91 8529326036) + Email Draft
function initFormHandlers() {
  const forms = document.querySelectorAll(".portal-interactive-form, #portalFeedbackForm, #portalGrievanceAssistForm");
  
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const submitAction = form.dataset.activeAction || "whatsapp";
      processFormSubmission(form, submitAction);
    });

    // Capture button clicks for explicit action (WhatsApp vs Email)
    const waBtn = form.querySelector(".btn-submit-whatsapp");
    const mailBtn = form.querySelector(".btn-submit-email");

    if (waBtn) {
      waBtn.addEventListener("click", () => {
        form.dataset.activeAction = "whatsapp";
      });
    }

    if (mailBtn) {
      mailBtn.addEventListener("click", () => {
        form.dataset.activeAction = "email";
      });
    }
  });
}

// Process Form Data and Dispatch
function processFormSubmission(form, action) {
  const name = form.querySelector("[name='sender_name']")?.value.trim() || "";
  const phone = form.querySelector("[name='sender_phone']")?.value.trim() || "";
  const category = form.querySelector("[name='feedback_category']")?.value || form.querySelector("[name='request_category']")?.value || "सामान्य संपर्क";
  const message = form.querySelector("[name='feedback_message']")?.value.trim() || form.querySelector("[name='issue_description']")?.value.trim() || "";
  const formTitle = form.dataset.formTitle || "बामरला ग्राम डिजिटल पोर्टल प्रविष्टि";

  // Field validation
  if (!name) {
    showFormError(form, "कृपया अपना पूरा नाम दर्ज करें।");
    form.querySelector("[name='sender_name']")?.focus();
    return;
  }

  if (!message) {
    showFormError(form, "कृपया संदेश अथवा विवरण अनिवार्य रूप से दर्ज करें।");
    form.querySelector("[name='feedback_message'], [name='issue_description']")?.focus();
    return;
  }

  const now = new Date();
  const timeStr = now.toLocaleDateString("hi-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });

  if (action === "whatsapp") {
    // Format WhatsApp message cleanly with Markdown styling
    const waText = 
      `*🏛️ ${formTitle}*\n` +
      `------------------------------------\n` +
      `👤 *नाम:* ${name}\n` +
      `📞 *मोबाइल:* ${phone || "उपलब्ध नहीं कराया"}\n` +
      `📂 *श्रेणी:* ${category}\n` +
      `📝 *विवरण:* \n${message}\n` +
      `------------------------------------\n` +
      `🕒 *दिनांक व समय:* ${timeStr}\n` +
      `📍 *स्थान:* बामरला, बाड़मेर (राजस्थान) 344704\n` +
      `🌐 *पोर्टल:* bamarla-village-portal.in`;

    const waUrl = `https://wa.me/${PORTAL_CONFIG.whatsappNumber}?text=${encodeURIComponent(waText)}`;

    // Open WhatsApp
    window.open(waUrl, "_blank");

    // Display confirmation notice instructing user to press Send in WhatsApp
    showFormStatus(form, "whatsapp", {
      name,
      phone,
      waUrl
    });

  } else {
    // Email Draft fallback
    const subject = encodeURIComponent(`[${formTitle}] ${category} - प्रेषक: ${name}`);
    const body = encodeURIComponent(
      `प्रविष्टि विवरण:\n\n` +
      `फॉर्म: ${formTitle}\n` +
      `नाम: ${name}\n` +
      `मोबाइल: ${phone || "उपलब्ध नहीं"}\n` +
      `श्रेणी: ${category}\n` +
      `विवरण:\n${message}\n\n` +
      `दिनांक व समय: ${timeStr}\n` +
      `स्थान: BAMARLA, BARMER, RAJASTHAN, भारत (344704)\n\n` +
      `नोट: यह पोर्टल सूचना सुधार/सहायता प्रविष्टि है, आधिकारिक सरकारी शिकायत नहीं।`
    );

    window.location.href = `mailto:${PORTAL_CONFIG.creatorEmail}?subject=${subject}&body=${body}`;

    showFormStatus(form, "email", { name });
  }
}

// Show Form Status / Notification Box
function showFormStatus(form, type, data) {
  let responseBox = form.parentElement.querySelector(".form-response-msg") || document.getElementById("feedbackResponseMsg");
  
  if (!responseBox) {
    responseBox = document.createElement("div");
    responseBox.className = "form-response-msg";
    form.parentElement.appendChild(responseBox);
  }

  responseBox.style.display = "block";

  if (type === "whatsapp") {
    responseBox.innerHTML = `
      <div style="background: #ECFDF5; border: 2px solid #10B981; color: #065F46; padding: 1.25rem; border-radius: 8px; margin-top: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <span style="font-size: 1.5rem;">📱</span>
          <strong style="font-size: 1.05rem;">WhatsApp विंडो खुल रही है...</strong>
        </div>
        <p style="font-size: 0.925rem; line-height: 1.6; margin-bottom: 0.75rem;">
          श्री <strong>${escapeHtml(data.name)}</strong>, आपकी प्रविष्टि का विवरण WhatsApp में तैयार कर दिया गया है।<br>
          <strong>महत्वपूर्ण:</strong> कृपया WhatsApp खुलने पर नीचे दिए गए <span style="background: #10B981; color: #FFFFFF; padding: 0.1rem 0.4rem; border-radius: 4px; font-weight: 700;">Send (भेजें)</span> बटन को अवश्य दबाएं ताकि आपका संदेश <strong>विकाश कुमार (+91 8529326036)</strong> को प्राप्त हो सके।
        </p>
        <div style="font-size: 0.8rem; color: #047857; margin-top: 0.5rem;">
          (तकनीकी सूचना: ब्राउज़र सुरक्षा नियमों के तहत WhatsApp संदेश भेजने की अंतिम पुष्टि उपयोगकर्ता द्वारा 'Send' बटन दबाकर ही की जा सकती है।)
        </div>
        <div style="margin-top: 0.75rem;">
          <a href="${data.waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-saffron btn-sm" style="background: #059669; border-color: #059669;">
            यदि WhatsApp न खुला हो तो यहाँ क्लिक करें &rarr;
          </a>
        </div>
      </div>
    `;
  } else {
    responseBox.innerHTML = `
      <div style="background: #EFF6FF; border: 1px solid #3B82F6; color: #1E40AF; padding: 1.25rem; border-radius: 8px; margin-top: 1.25rem;">
        <strong>ईमेल ड्राफ्ट तैयार है!</strong> आपका ईमेल ऐप खुल चुका है। कृपया ईमेल भेजें बटन दबाकर इसे प्रेषित करें।<br>
        <span style="font-size: 0.8125rem;">पोर्टल ईमेल: ${PORTAL_CONFIG.creatorEmail}</span>
      </div>
    `;
  }

  form.reset();
}

function showFormError(form, msg) {
  let errBox = form.querySelector(".form-error-msg");
  if (!errBox) {
    errBox = document.createElement("div");
    errBox.className = "form-error-msg";
    errBox.style.cssText = "background: #FEF2F2; border: 1px solid #F87171; color: #991B1B; padding: 0.65rem; border-radius: 6px; margin-bottom: 1rem; font-size: 0.875rem;";
    form.prepend(errBox);
  }
  errBox.textContent = msg;
  errBox.style.display = "block";
}

// Utility: HTML Escaping
function escapeHtml(string) {
  const entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return String(string).replace(/[&<>"']/g, s => entityMap[s]);
}

// Utility: Filter Development Works table rows by category
window.filterDevTable = function(category, btnElement) {
  const rows = document.querySelectorAll(".dev-work-row");
  const buttons = document.querySelectorAll(".filter-btn");
  
  buttons.forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  rows.forEach(row => {
    const rowCat = row.getAttribute("data-category");
    if (category === "all" || rowCat === category) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
};

// Utility: Filter News / Notices
window.filterNewsList = function(category, btnElement) {
  const cards = document.querySelectorAll(".news-item-card");
  const buttons = document.querySelectorAll(".filter-btn");
  
  buttons.forEach(btn => btn.classList.remove("active"));
  if (btnElement) btnElement.classList.add("active");

  cards.forEach(card => {
    const cardCat = card.getAttribute("data-category");
    if (category === "all" || cardCat === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
};
