import fs from 'fs';
import path from 'path';

const SITE_URL = "https://bamarla-village-portal.in";
const CREATOR_NAME = "विकाश कुमार (Vikash Kumar)";
const CREATOR_EMAIL = "vikashkumar823981@gmail.com";
const CREATOR_PHONE = "+91 8529326036";
const WHATSAPP_NUMBER = "918529326036";
// Correct Village Address (Ahmedabad address removed everywhere per requirement 1)
const CREATOR_ADDRESS = "BAMARLA, BARMER, RAJASTHAN, भारत · PIN Code: 344704";
const OFFICIAL_LOGO_URL = "https://www.bamarla.in/logo.png";

// Common Header Component
function getHeader(activePage = "") {
  return `
  <!-- Indian Tricolor Top Accent -->
  <div class="tricolor-stripe" aria-hidden="true"></div>

  <!-- Top Information Bar -->
  <div class="top-info-bar">
    <div class="top-info-inner">
      <div class="top-info-left">
        <span>📍 <strong>BAMARLA, BARMER, RAJASTHAN, भारत</strong></span>
        <span aria-hidden="true">·</span>
        <span>पिन कोड: <strong>344704</strong></span>
        <span aria-hidden="true">·</span>
        <span class="status-badge pending" style="padding: 0.1rem 0.5rem; font-size: 0.7rem;">स्वतंत्र नागरिक सूचना पोर्टल</span>
      </div>
      <div class="top-info-right">
        <span>💬 WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="top-info-link" style="color: #4ADE80; font-weight: 700;">+91 8529326036</a></span>
        <span aria-hidden="true">·</span>
        <a href="help-support.html" class="top-info-link">सहायता व सुधार</a>
      </div>
    </div>
  </div>

  <!-- Main Branding Header (Requirement 2: Official Bamarla Village Logo) -->
  <header class="main-header">
    <div class="main-header-inner">
      <a href="index.html" class="branding-group" title="मुख्य पृष्ठ - बामरला ग्राम डिजिटल पोर्टल">
        <img 
          src="${OFFICIAL_LOGO_URL}" 
          alt="बामरला गाँव का आधिकारिक लोगो" 
          class="header-logo" 
          width="64" 
          height="64"
          style="object-fit: contain; background: #FFFFFF; border-radius: 8px; padding: 2px;"
          onerror="this.onerror=null;this.src='assets/images/logo.png';" 
        />
        <div class="branding-text">
          <div class="site-title">बामरला ग्राम डिजिटल पोर्टल</div>
          <div class="site-tagline">गाँव की जानकारी, जनसुविधाएँ और विकास — एक ही स्थान पर</div>
        </div>
      </a>
      <div class="header-right-actions">
        <div class="header-meta-pill">
          🏛️ ग्राम पंचायत: बामरला एवं आदर्श बामरला
        </div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #FFFFFF; border-color: #25D366; font-weight: 700;">
          💬 WhatsApp
        </a>
        <a href="grievance.html" class="btn btn-outline btn-sm">
          शिकायत सहायता
        </a>
      </div>
    </div>
  </header>

  <!-- Sticky Navigation Bar -->
  <nav class="main-nav-container" aria-label="मुख्य नेविगेशन">
    <div class="main-nav-inner">
      <ul class="nav-links-desktop">
        <li class="nav-item">
          <a href="index.html" class="nav-link ${activePage === 'index.html' ? 'active' : ''}">मुख्य पृष्ठ</a>
        </li>
        <li class="nav-item">
          <a href="village.html" class="nav-link ${activePage === 'village.html' ? 'active' : ''}">ग्राम परिचय</a>
        </li>
        
        <!-- Dropdown: पंचायत व प्रतिनिधि -->
        <li class="nav-item">
          <a href="panchayat.html" class="nav-link ${activePage === 'panchayat.html' || activePage === 'representatives.html' ? 'active' : ''}">
            पंचायत व प्रतिनिधि ▾
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item"><a href="panchayat.html">ग्राम पंचायत बामरला व आदर्श बामरला</a></li>
            <li class="dropdown-item"><a href="representatives.html">जनप्रतिनिधि (सरपंच/वार्ड पंच)</a></li>
          </ul>
        </li>

        <!-- Dropdown: जनसुविधाएँ व सेवाएँ -->
        <li class="nav-item">
          <a href="government-schemes.html" class="nav-link ${['government-schemes.html', 'schools.html', 'banks.html', 'health-services.html', 'public-facilities.html'].includes(activePage) ? 'active' : ''}">
            सुविधाएँ व सेवाएँ ▾
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item"><a href="government-schemes.html">सरकारी योजनाएँ</a></li>
            <li class="dropdown-item"><a href="schools.html">विद्यालय एवं शिक्षा</a></li>
            <li class="dropdown-item"><a href="banks.html">बैंक एवं वित्तीय सेवाएँ (SBI)</a></li>
            <li class="dropdown-item"><a href="health-services.html">स्वास्थ्य सेवाएँ व अस्पताल</a></li>
            <li class="dropdown-item"><a href="public-facilities.html">जनसुविधाएँ (पानी, बिजली, राशन)</a></li>
          </ul>
        </li>

        <!-- Dropdown: विकास व सहयोग -->
        <li class="nav-item">
          <a href="development-works.html" class="nav-link ${['development-works.html', 'bhamashah.html', 'gallery.html', 'village-directory.html'].includes(activePage) ? 'active' : ''}">
            विकास व सहयोग ▾
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item"><a href="development-works.html">विकास कार्य सूची</a></li>
            <li class="dropdown-item"><a href="bhamashah.html">भामाशाह एवं दानदाता</a></li>
            <li class="dropdown-item"><a href="village-directory.html">ग्राम डायरेक्टरी</a></li>
            <li class="dropdown-item"><a href="gallery.html">गाँव की चित्र दीर्घा</a></li>
          </ul>
        </li>

        <!-- Dropdown: सूचना व समाचार -->
        <li class="nav-item">
          <a href="notices.html" class="nav-link ${['notices.html', 'news.html', 'events.html'].includes(activePage) ? 'active' : ''}">
            सूचना व समाचार ▾
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item"><a href="notices.html">सार्वजनिक सूचना पट्ट</a></li>
            <li class="dropdown-item"><a href="news.html">गाँव के समाचार</a></li>
            <li class="dropdown-item"><a href="events.html">सार्वजनिक कार्यक्रम</a></li>
          </ul>
        </li>

        <!-- Dropdown: सहायता व संपर्क -->
        <li class="nav-item">
          <a href="important-contacts.html" class="nav-link ${['important-contacts.html', 'help-support.html', 'grievance.html', 'faq.html', 'about-portal.html'].includes(activePage) ? 'active' : ''}">
            सहायता व संपर्क ▾
          </a>
          <ul class="dropdown-menu">
            <li class="dropdown-item"><a href="important-contacts.html">आवश्यक संपर्क व हेल्पलाइन</a></li>
            <li class="dropdown-item"><a href="help-support.html">सहायता व सुधार प्रविष्टि (WhatsApp/Mail)</a></li>
            <li class="dropdown-item"><a href="grievance.html">शिकायत निवारण मार्गदर्शिका</a></li>
            <li class="dropdown-item"><a href="faq.html">अक्सर पूछे जाने वाले प्रश्न (FAQ)</a></li>
            <li class="dropdown-item"><a href="about-portal.html">पोर्टल के बारे में</a></li>
          </ul>
        </li>
      </ul>

      <!-- Mobile Hamburger and Search Trigger -->
      <div class="nav-right-controls">
        <a href="village-directory.html" class="nav-icon-btn" title="डायरेक्टरी खोजें">
          🔍 खोजें
        </a>
        <button class="nav-icon-btn mobile-menu-btn" id="mobileMenuBtn" aria-label="मेनू खोलें" aria-expanded="false">
          ☰
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Navigation -->
    <div class="mobile-nav-drawer" id="mobileNavDrawer">
      <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.5rem 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.15); margin-bottom: 0.5rem;">
        <img 
          src="${OFFICIAL_LOGO_URL}" 
          alt="बामरला गाँव का आधिकारिक लोगो" 
          width="44" 
          height="44" 
          style="object-fit: contain; background: #FFFFFF; border-radius: 6px; padding: 2px;"
          onerror="this.onerror=null;this.src='assets/images/logo.png';" 
        />
        <div>
          <div style="color: #FFFFFF; font-weight: 800; font-size: 0.95rem;">बामरला ग्राम डिजिटल पोर्टल</div>
          <div style="color: #FBBF24; font-size: 0.75rem;">बाड़मेर, राजस्थान (344704)</div>
        </div>
      </div>
      <ul class="mobile-nav-list">
        <li class="mobile-nav-item"><a href="index.html" class="mobile-nav-link">मुख्य पृष्ठ</a></li>
        <li class="mobile-nav-item"><a href="village.html" class="mobile-nav-link">ग्राम परिचय</a></li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="font-weight: 700; color: #FBBF24;">पंचायत व प्रतिनिधि</div>
          <ul class="mobile-submenu">
            <li><a href="panchayat.html">ग्राम पंचायत बामरला व आदर्श बामरला</a></li>
            <li><a href="representatives.html">जनप्रतिनिधि (सरपंच/वार्ड पंच)</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="font-weight: 700; color: #FBBF24;">सुविधाएँ व सेवाएँ</div>
          <ul class="mobile-submenu">
            <li><a href="government-schemes.html">सरकारी योजनाएँ</a></li>
            <li><a href="schools.html">विद्यालय एवं शिक्षा</a></li>
            <li><a href="banks.html">बैंक एवं वित्तीय सेवाएँ (SBI)</a></li>
            <li><a href="health-services.html">स्वास्थ्य सेवाएँ व अस्पताल</a></li>
            <li><a href="public-facilities.html">जनसुविधाएँ (पानी, बिजली, राशन)</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="font-weight: 700; color: #FBBF24;">विकास व जनसहयोग</div>
          <ul class="mobile-submenu">
            <li><a href="development-works.html">विकास कार्य सूची</a></li>
            <li><a href="bhamashah.html">भामाशाह एवं दानदाता</a></li>
            <li><a href="village-directory.html">ग्राम डायरेक्टरी</a></li>
            <li><a href="gallery.html">चित्र दीर्घा</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="font-weight: 700; color: #FBBF24;">सूचना व समाचार</div>
          <ul class="mobile-submenu">
            <li><a href="notices.html">सूचना पट्ट</a></li>
            <li><a href="news.html">गाँव के समाचार</a></li>
            <li><a href="events.html">सार्वजनिक कार्यक्रम</a></li>
          </ul>
        </li>
        <li class="mobile-nav-item">
          <div class="mobile-nav-link" style="font-weight: 700; color: #FBBF24;">सहायता व संपर्क</div>
          <ul class="mobile-submenu">
            <li><a href="important-contacts.html">आवश्यक संपर्क व हेल्पलाइन</a></li>
            <li><a href="help-support.html">सहायता व सुधार प्रविष्टि (WhatsApp)</a></li>
            <li><a href="grievance.html">शिकायत निवारण मार्गदर्शिका</a></li>
            <li><a href="faq.html">FAQ (सवाल-जवाब)</a></li>
            <li><a href="about-portal.html">पोर्टल के बारे में</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>

  <!-- Legal Disclaimer Banner -->
  <div class="portal-disclaimer-ribbon">
    <strong>महत्वपूर्ण अस्वीकरण:</strong> यह एक स्वतंत्र नागरिक ग्राम सूचना पोर्टल है, आधिकारिक सरकारी वेबसाइट नहीं। योजनाओं व पदाधिकारियों के विवरण की पुष्टि संबंधित सरकारी कार्यालय से करें।
  </div>
  `;
}

// Common Footer Component (Requirement 1 & 2: Correct Address & Logo)
function getFooter() {
  return `
  <!-- Common Footer -->
  <footer class="portal-footer">
    <div class="footer-top-inner">
      <!-- Col 1: About Portal & Initiative -->
      <div class="footer-col">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
          <a href="index.html">
            <img 
              src="${OFFICIAL_LOGO_URL}" 
              alt="बामरला गाँव का आधिकारिक लोगो" 
              width="48" 
              height="48" 
              style="object-fit: contain; background: #FFFFFF; border-radius: 6px; padding: 2px;"
              onerror="this.onerror=null;this.src='assets/images/logo.png';" 
            />
          </a>
          <h3 style="margin-bottom: 0;">बामरला ग्राम डिजिटल पोर्टल</h3>
        </div>
        <p style="font-size: 0.875rem; color: #CBD5E1; line-height: 1.6;">
          गाँव की सार्वजनिक जानकारी, विकास कार्यों, स्कूल, स्वास्थ्य एवं सरकारी योजनाओं को ग्रामीणों तक सुलभ रूप से पहुँचाने हेतु एक स्वैच्छिक जनहित डिजिटल पहल।
        </p>
        <div class="footer-disclaimer-box">
          “इस डिजिटल ग्राम पोर्टल का निर्माण <strong>विकाश कुमार</strong> द्वारा गाँव की सार्वजनिक जानकारी को सरलता से उपलब्ध कराने के उद्देश्य से किया जा रहा है। वर्तमान में यह एक स्वैच्छिक जनहित पहल है।”
        </div>
      </div>

      <!-- Col 2: Quick Links -->
      <div class="footer-col">
        <h3>त्वरित लिंक</h3>
        <ul class="footer-links">
          <li><a href="village.html">ग्राम परिचय एवं इतिहास</a></li>
          <li><a href="panchayat.html">ग्राम पंचायत बामरला</a></li>
          <li><a href="representatives.html">जनप्रतिनिधि विवरण</a></li>
          <li><a href="government-schemes.html">सरकारी योजनाएँ</a></li>
          <li><a href="schools.html">विद्यालय एवं शिक्षा</a></li>
          <li><a href="banks.html">SBI बामरला बैंक शाखा</a></li>
          <li><a href="development-works.html">विकास कार्य रजिस्टर</a></li>
        </ul>
      </div>

      <!-- Col 3: Public Services & Notices -->
      <div class="footer-col">
        <h3>नागरिक सेवाएँ व सूचना</h3>
        <ul class="footer-links">
          <li><a href="notices.html">सार्वजनिक सूचना पट्ट</a></li>
          <li><a href="news.html">गाँव के समाचार</a></li>
          <li><a href="bhamashah.html">भामाशाह एवं दानदाता सम्मान</a></li>
          <li><a href="village-directory.html">ग्राम टेलीफोन डायरेक्टरी</a></li>
          <li><a href="important-contacts.html">आपातकालीन हेल्पलाइन नंबर</a></li>
          <li><a href="grievance.html">राजस्थान संपर्क (181) सहायता</a></li>
          <li><a href="faq.html">अक्सर पूछे जाने वाले प्रश्न</a></li>
        </ul>
      </div>

      <!-- Col 4: Creator & Portal Contact (Correct Village Address) -->
      <div class="footer-col">
        <h3>पहलकर्ता एवं संपर्क</h3>
        <p style="font-size: 0.875rem; color: #CBD5E1; margin-bottom: 0.4rem;">
          <strong>निर्माता:</strong> विकाश कुमार (Vikash Kumar)
        </p>
        <p style="font-size: 0.875rem; color: #CBD5E1; margin-bottom: 0.4rem;">
          📞 कॉल: <a href="tel:+918529326036" style="color: #FBBF24; text-decoration: none;">+91 8529326036</a>
        </p>
        <p style="font-size: 0.875rem; color: #CBD5E1; margin-bottom: 0.4rem;">
          💬 WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" style="color: #4ADE80; font-weight: 700; text-decoration: none;">+91 8529326036</a>
        </p>
        <p style="font-size: 0.875rem; color: #CBD5E1; margin-bottom: 0.4rem;">
          ✉️ <a href="mailto:${CREATOR_EMAIL}" style="color: #FBBF24; text-decoration: none;">${CREATOR_EMAIL}</a>
        </p>
        <p style="font-size: 0.8125rem; color: #94A3B8; margin-top: 0.5rem; line-height: 1.5;">
          📍 <strong>गाँव का सही पता:</strong><br>
          ${CREATOR_ADDRESS}
        </p>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <a href="help-support.html" class="btn btn-saffron btn-sm">सुझाव अथवा सुधार भेजें</a>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #FFFFFF; font-weight: 700;">
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright & Legal Links -->
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <div>
          &copy; <span class="current-year">2026</span> बामरला ग्राम डिजिटल पोर्टल (BAMARLA, BARMER, RAJASTHAN, भारत · 344704). सर्वाधिकार सुरक्षित।
        </div>
        <div class="footer-bottom-links">
          <a href="about-portal.html">पोर्टल के बारे में</a>
          <span aria-hidden="true">·</span>
          <a href="privacy-policy.html">गोपनीयता नीति</a>
          <span aria-hidden="true">·</span>
          <a href="disclaimer.html">कानूनी अस्वीकरण</a>
          <span aria-hidden="true">·</span>
          <a href="accessibility.html">अभिगम्यता</a>
          <span aria-hidden="true">·</span>
          <a href="sitemap.xml">साइटमैप</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Shared JavaScript Engine -->
  <script src="assets/js/main.js"></script>
  `;
}

// Generate Page Shell
function renderPage({
  filename,
  title,
  description,
  keywords,
  canonicalUrl,
  breadcrumbs = [],
  schemaJson = null,
  bodyContent
}) {
  const fullTitle = `${title} | बामरला ग्राम डिजिटल पोर्टल (बाड़मेर, राजस्थान)`;
  const breadcrumbHtml = breadcrumbs.length > 0 ? `
    <div class="breadcrumb-section">
      <div class="breadcrumb-inner">
        <a href="index.html">मुख्य पृष्ठ</a>
        ${breadcrumbs.map(b => `
          <span class="breadcrumb-separator">/</span>
          ${b.url ? `<a href="${b.url}">${b.label}</a>` : `<span>${b.label}</span>`}
        `).join("")}
      </div>
    </div>
  ` : "";

  return `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullTitle}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <link rel="canonical" href="${canonicalUrl}">
  <link rel="icon" type="image/png" href="${OFFICIAL_LOGO_URL}">
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="${OFFICIAL_LOGO_URL}">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#002147">

  <!-- Open Graph / Facebook / WhatsApp (Requirement 2 Logo) -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${OFFICIAL_LOGO_URL}">
  <meta property="og:site_name" content="बामरला ग्राम डिजिटल पोर्टल">
  <meta property="og:locale" content="hi_IN">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${OFFICIAL_LOGO_URL}">

  <!-- Shared CSS -->
  <link rel="stylesheet" href="assets/css/style.css">

  ${schemaJson ? `
  <script type="application/ld+json">
  ${JSON.stringify(schemaJson, null, 2)}
  </script>
  ` : `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Bamarla Village",
    "alternateName": "बामरला ग्राम",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bamarla, Sedwa",
      "addressLocality": "Barmer",
      "addressRegion": "Rajasthan",
      "postalCode": "344704",
      "addressCountry": "IN"
    }
  }
  </script>
  `}
</head>
<body>
  ${getHeader(filename)}
  ${breadcrumbHtml}
  <main id="main-content">
    ${bodyContent}
  </main>
  ${getFooter()}
</body>
</html>`;
}

export { renderPage, SITE_URL, CREATOR_NAME, CREATOR_EMAIL, CREATOR_PHONE, WHATSAPP_NUMBER, CREATOR_ADDRESS, OFFICIAL_LOGO_URL };
