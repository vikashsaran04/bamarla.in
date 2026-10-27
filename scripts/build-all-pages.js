import fs from 'fs';
import path from 'path';
import { 
  renderPage, 
  SITE_URL, 
  CREATOR_NAME, 
  CREATOR_EMAIL, 
  CREATOR_PHONE, 
  WHATSAPP_NUMBER, 
  CREATOR_ADDRESS, 
  OFFICIAL_LOGO_URL 
} from './page-template.js';

// 1. INDEX.HTML (HOMEPAGE)
const indexBody = `
  <!-- Section A: Hero Section -->
  <section class="hero-section">
    <div class="hero-inner">
      <div class="hero-pill">📍 BAMARLA, BARMER, RAJASTHAN, भारत · पिन कोड: 344704</div>
      <h1 class="hero-title">बामरला ग्राम डिजिटल पोर्टल</h1>
      <p class="hero-subtitle">
        अपने गाँव की जानकारी, सरकारी योजनाएँ, जनप्रतिनिधि और जनसुविधाएँ अब एक ही जगह।
      </p>

      <!-- Section B: Search village portal -->
      <div class="portal-search-box" style="max-width: 650px; margin: 0 auto;">
        <span style="font-size: 1.25rem; margin-left: 0.5rem; color: #64748B;">🔍</span>
        <input 
          type="search" 
          class="portal-search-input" 
          placeholder="गाँव की जानकारी, सरपंच, स्कूल, SBI बैंक, योजनाएँ, राशन कार्ड खोजें..." 
          aria-label="गाँव पोर्टल पर खोजें"
        />
      </div>

      <!-- Quick Action Buttons -->
      <div class="hero-quick-buttons">
        <a href="representatives.html" class="btn btn-saffron btn-sm">👥 जनप्रतिनिधि</a>
        <a href="government-schemes.html" class="btn btn-primary btn-sm">📜 सरकारी योजनाएँ</a>
        <a href="banks.html" class="btn btn-primary btn-sm">🏦 SBI बैंक शाखा</a>
        <a href="schools.html" class="btn btn-primary btn-sm">🏫 विद्यालय व शिक्षा</a>
        <a href="public-facilities.html" class="btn btn-primary btn-sm">💧 जनसुविधाएँ</a>
        <a href="grievance.html" class="btn btn-outline btn-sm" style="color: #FFFFFF; border-color: #FFFFFF;">⚖️ शिकायत सहायता</a>
      </div>
    </div>
  </section>

  <div class="container">
    <!-- Section C: Notice Board & Alerts -->
    <div class="notice-board-card">
      <div class="notice-board-header">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.3rem;">📢</span>
          <h3>नवीनतम सूचनाएँ एवं ग्राम पट्ट</h3>
        </div>
        <a href="notices.html" class="section-action-link">सभी सूचनाएँ देखें &rarr;</a>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
        <div style="background: #FFFFFF; padding: 1rem; border-radius: 6px; border: 1px solid #FDE68A;">
          <div style="font-size: 0.75rem; color: #D97706; font-weight: 700; margin-bottom: 0.25rem;">ग्रामसभा सूचना · आगामी बैठक</div>
          <div style="font-weight: 700; color: #002147; font-size: 0.95rem;">वार्षिक विकास कार्ययोजना ग्रामसभा बैठक</div>
          <div style="font-size: 0.8125rem; color: #4B5563; margin-top: 0.25rem;">
            पंचायत मुख्यालय पर आगामी ग्रामसभा की आधिकारिक तिथि पंचायत द्वारा घोषित की जानी प्रतीक्षारत है।
          </div>
          <div style="margin-top: 0.5rem; font-size: 0.75rem; color: #6B7280;">स्थिति: आधिकारिक घोषणा लंबित</div>
        </div>

        <div style="background: #FFFFFF; padding: 1rem; border-radius: 6px; border: 1px solid #FDE68A;">
          <div style="font-size: 0.75rem; color: #15803D; font-weight: 700; margin-bottom: 0.25rem;">सरकारी योजना शिविर · ई-मित्र</div>
          <div style="font-weight: 700; color: #002147; font-size: 0.95rem;">पीएम-किसान सम्मान निधि ई-केवाईसी सत्यापन</div>
          <div style="font-size: 0.8125rem; color: #4B5563; margin-top: 0.25rem;">
            सभी पंजीकृत किसान बंधु नजदीकी ई-मित्र अथवा पीएम-किसान पोर्टल पर बायोमेट्रिक ई-केवाईसी अवश्य करवाएं।
          </div>
          <div style="margin-top: 0.5rem; font-size: 0.75rem; color: #15803D; font-weight: 600;">सत्यापित सरकारी निर्देश</div>
        </div>

        <div style="background: #FFFFFF; padding: 1rem; border-radius: 6px; border: 1px solid #FDE68A;">
          <div style="font-size: 0.75rem; color: #1E3A8A; font-weight: 700; margin-bottom: 0.25rem;">शिक्षा एवं छात्रवृत्ति · शाला दर्पण</div>
          <div style="font-weight: 700; color: #002147; font-size: 0.95rem;">राजकीय उच्च माध्यमिक विद्यालय प्रवेश व छात्रवृत्ति</div>
          <div style="font-size: 0.8125rem; color: #4B5563; margin-top: 0.25rem;">
            सत्र 2026-27 हेतु प्री व पोस्ट मैट्रिक छात्रवृत्ति एवं पालनहार योजना नवीनीकरण प्रारंभ है।
          </div>
          <div style="margin-top: 0.5rem; font-size: 0.75rem; color: #1E3A8A; font-weight: 600;">विभाग: सामाजिक न्याय व अधिकारिता</div>
        </div>
      </div>
    </div>

    <!-- Section D: Gram Panchayat & Representatives (Requirement 3: Corrected Sarpanch Details) -->
    <section class="mb-4">
      <div class="section-title-wrap">
        <h2 class="section-title">ग्राम पंचायत एवं जनप्रतिनिधि</h2>
        <a href="representatives.html" class="section-action-link">पूरा विवरण व वार्ड सदस्य देखें &rarr;</a>
      </div>
      <p style="color: #4B5563; margin-bottom: 1.25rem; font-size: 0.9375rem;">
        बामरला क्षेत्र की ग्राम पंचायतों के निर्वाचित प्रतिनिधि। (नोट: नाम प्रविष्टि वेबसाइट संस्थापक द्वारा प्रदान की गई है, सरकारी अभिलेखों से वर्तमान कार्यकाल सत्यापन प्रक्रियाधीन है)।
      </p>

      <div class="grid-2">
        <!-- Bamarla: Sarpanch Dhodha Khan (Requirement 3) -->
        <div class="representative-card">
          <img src="assets/images/sarpanch-bamarla.jpg" alt="सरपंच धोधा खान - ग्राम पंचायत बामरला" class="representative-photo" />
          <div class="representative-details">
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem;">
              <span class="status-badge pending">सत्यापन प्रक्रियाधीन</span>
              <span style="font-size: 0.75rem; color: #6B7280;">ग्राम पंचायत: बामरला</span>
            </div>
            <h3 class="representative-name">श्री धोधा खान</h3>
            <div style="font-size: 0.8125rem; color: #64748B; font-weight: 500;">(Dhodha Khan)</div>
            <div class="representative-position">सरपंच — ग्राम पंचायत बामरला</div>
            <div class="representative-meta">
              <div><strong>गाँव / पंचायत:</strong> बामरला गाँव (Bamarla Village)</div>
              <div><strong>तहसील:</strong> सेड़वा | <strong>जिला:</strong> बाड़मेर (राजस्थान)</div>
              <div><strong>कार्यालय:</strong> ग्राम पंचायत भवन, बामरला</div>
              <div><strong>सार्वजनिक संपर्क:</strong> आधिकारिक सत्यापन उपरांत उपलब्ध होगा</div>
            </div>
            <a href="representatives.html#sarpanch-bamarla" class="btn btn-outline btn-sm">प्रोफाइल व दायित्व देखें</a>
          </div>
        </div>

        <!-- Adarsh Bamarla: Sarpanch Pemaram Megwal (Requirement 3) -->
        <div class="representative-card">
          <img src="assets/images/sarpanch-adarsh-bamarla.jpg" alt="सरपंच पेमा राम मेगवाल - ग्राम पंचायत आदर्श बामरला" class="representative-photo" />
          <div class="representative-details">
            <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem;">
              <span class="status-badge pending">सत्यापन प्रक्रियाधीन</span>
              <span style="font-size: 0.75rem; color: #6B7280;">ग्राम पंचायत: आदर्श बामरला</span>
            </div>
            <h3 class="representative-name">श्री पेमा राम मेगवाल</h3>
            <div style="font-size: 0.8125rem; color: #64748B; font-weight: 500;">(Pemaram Megwal)</div>
            <div class="representative-position">सरपंच — ग्राम पंचायत आदर्श बामरला</div>
            <div class="representative-meta">
              <div><strong>गाँव / पंचायत:</strong> आदर्श बामरला (Adarsh Bamarla)</div>
              <div><strong>तहसील:</strong> सेड़वा | <strong>जिला:</strong> बाड़मेर (राजस्थान)</div>
              <div><strong>कार्यालय:</strong> ग्राम पंचायत भवन, आदर्श बामरला</div>
              <div><strong>सार्वजनिक संपर्क:</strong> आधिकारिक सत्यापन उपरांत उपलब्ध होगा</div>
            </div>
            <a href="representatives.html#sarpanch-adarsh" class="btn btn-outline btn-sm">प्रोफाइल व दायित्व देखें</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section E: Government Schemes Grid -->
    <section class="mb-4">
      <div class="section-title-wrap">
        <h2 class="section-title">प्रमुख सरकारी योजनाएँ एवं ऑनलाइन सेवाएँ</h2>
        <a href="government-schemes.html" class="section-action-link">सभी 10+ योजना श्रेणियाँ देखें &rarr;</a>
      </div>
      <div class="grid-3">
        <div class="portal-card">
          <div class="portal-card-header">
            <span style="font-size: 0.75rem; color: #D97706; font-weight: 700;">राजस्थान सरकार</span>
            <h3 class="portal-card-title">राजस्थान जन सूचना पोर्टल</h3>
          </div>
          <div class="portal-card-body">
            गाँव की राशन कार्ड सूची, सामाजिक सुरक्षा पेंशन, नरेगा जॉब कार्ड, किसान कर्ज माफी व स्कूल की संपूर्ण जानकारी बिना ई-मित्र जाए स्वयं देखें।
          </div>
          <div class="portal-card-footer">
            <a href="https://jansoochna.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">आधिकारिक पोर्टल &rarr;</a>
            <span class="status-badge verified">सत्यापित लिंक</span>
          </div>
        </div>

        <div class="portal-card">
          <div class="portal-card-header">
            <span style="font-size: 0.75rem; color: #1E3A8A; font-weight: 700;">केंद्र सरकार</span>
            <h3 class="portal-card-title">PM-KISAN सम्मान निधि</h3>
          </div>
          <div class="portal-card-body">
            पात्र लघु व सीमांत किसानों को प्रतिवर्ष ₹6,000 की वित्तीय सहायता। योजना की किस्त स्थिति, ई-केवाईसी एवं नया पंजीकरण ऑनलाइन जांचें।
          </div>
          <div class="portal-card-footer">
            <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">किस्त स्थिति देखें &rarr;</a>
            <span class="status-badge verified">सत्यापित लिंक</span>
          </div>
        </div>

        <div class="portal-card">
          <div class="portal-card-header">
            <span style="font-size: 0.75rem; color: #15803D; font-weight: 700;">ग्रामीण विकास मंत्रालय</span>
            <h3 class="portal-card-title">मनरेगा (MGNREGA)</h3>
          </div>
          <div class="portal-card-body">
            ग्रामीण परिवारों को वर्ष में कम से कम 100 दिनों के गारंटीकृत अकुशल रोजगार का अधिकार। जॉब कार्ड सूची, मस्टररोल हाजिरी व भुगतान विवरण।
          </div>
          <div class="portal-card-footer">
            <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">मस्टररोल व जॉबकार्ड &rarr;</a>
            <span class="status-badge verified">सत्यापित लिंक</span>
          </div>
        </div>

        <div class="portal-card">
          <div class="portal-card-header">
            <span style="font-size: 0.75rem; color: #D97706; font-weight: 700;">सामाजिक न्याय विभाग</span>
            <h3 class="portal-card-title">सामाजिक सुरक्षा पेंशन</h3>
          </div>
          <div class="portal-card-body">
            वृद्धावस्था पेंशन, विधवा/एकलनारी पेंशन एवं विशेष योग्यजन पेंशन। प्रति माह न्यूनतम ₹1,150 से ₹1,500 की पेंशन सहायता स्थिति जांचें।
          </div>
          <div class="portal-card-footer">
            <a href="https://ssp.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">पेंशन स्थिति देखें &rarr;</a>
            <span class="status-badge verified">सत्यापित लिंक</span>
          </div>
        </div>

        <div class="portal-card">
          <div class="portal-card-header">
            <span style="font-size: 0.75rem; color: #E65100; font-weight: 700;">आवास व शहरी कार्य</span>
            <h3 class="portal-card-title">प्रधानमंत्री आवास योजना (ग्रामीण)</h3>
          </div>
          <div class="portal-card-body">
            कच्चे मकानों में रह रहे पात्र ग्रामीण परिवारों को पक्का मकान निर्माण हेतु ₹1,20,000 की सरकारी सहायता व शौचालय निर्माण हेतु अतिरिक्त राशि।
          </div>
          <div class="portal-card-footer">
            <a href="https://pmayg.nic.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">आवास लाभार्थी सूची &rarr;</a>
            <span class="status-badge verified">सत्यापित लिंक</span>
          </div>
        </div>

        <div class="portal-card">
          <div class="portal-card-header">
            <span style="font-size: 0.75rem; color: #1E3A8A; font-weight: 700;">एकल खिड़की सेवा</span>
            <h3 class="portal-card-title">राजस्थान SSO एवं ई-मित्र पोर्टल</h3>
          </div>
          <div class="portal-card-body">
            मूल निवास, जाति प्रमाण पत्र, जन्म/मृत्यु प्रमाण पत्र, बिजली बिल भुगतान एवं छात्रवृत्ति हेतु राजस्थान सरकार की एकीकृत नागरिक सेवा प्रणाली।
          </div>
          <div class="portal-card-footer">
            <a href="https://sso.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">SSO लॉगिन करें &rarr;</a>
            <span class="status-badge verified">सत्यापित लिंक</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section F: Village Facilities Overview -->
    <section class="mb-4">
      <div class="section-title-wrap">
        <h2 class="section-title">गाँव की प्रमुख जनसुविधाएँ</h2>
        <a href="public-facilities.html" class="section-action-link">विस्तृत सुविधा डायरेक्टरी &rarr;</a>
      </div>
      <div class="grid-4">
        <div class="portal-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏫</div>
          <h3 class="portal-card-title" style="font-size: 1.05rem;">राजकीय विद्यालय</h3>
          <p class="portal-card-body" style="font-size: 0.875rem;">
            राजकीय उच्च माध्यमिक विद्यालय बामरला एवं निकटवर्ती प्राथमिक शालाएँ।
          </p>
          <div class="portal-card-footer">
            <a href="schools.html" class="section-action-link">विवरण देखें &rarr;</a>
          </div>
        </div>

        <div class="portal-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏦</div>
          <h3 class="portal-card-title" style="font-size: 1.05rem;">SBI बैंक शाखा</h3>
          <p class="portal-card-body" style="font-size: 0.875rem;">
            भारतीय स्टेट बैंक (SBI) बामरला शाखा, खाता सेवाएँ एवं किसान क्रेडिट कार्ड (KCC)।
          </p>
          <div class="portal-card-footer">
            <a href="banks.html" class="section-action-link">शाखा विवरण &rarr;</a>
          </div>
        </div>

        <div class="portal-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏥</div>
          <h3 class="portal-card-title" style="font-size: 1.05rem;">स्वास्थ्य केंद्र</h3>
          <p class="portal-card-body" style="font-size: 0.875rem;">
            उप स्वास्थ्य केंद्र बामरला, एएनएम-आशा कार्यकर्ता व सेड़वा सामुदायिक स्वास्थ्य केंद्र।
          </p>
          <div class="portal-card-footer">
            <a href="health-services.html" class="section-action-link">स्वास्थ्य सुविधाएँ &rarr;</a>
          </div>
        </div>

        <div class="portal-card">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">📮</div>
          <h3 class="portal-card-title" style="font-size: 1.05rem;">डाकघर (Post Office)</h3>
          <p class="portal-card-body" style="font-size: 0.875rem;">
            शाखा डाकघर बामरला (पिन 344704), स्पीड पोस्ट, बचत खाता व सुकन्या योजना।
          </p>
          <div class="portal-card-footer">
            <a href="public-facilities.html#post-office" class="section-action-link">डाक सेवाएँ &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section G: Village Development Projects Highlight -->
    <section class="mb-4">
      <div class="section-title-wrap">
        <h2 class="section-title">गाँव के विकास कार्य (रजिस्टर सारांश)</h2>
        <a href="development-works.html" class="section-action-link">संपूर्ण विकास कार्य रजिस्टर देखें &rarr;</a>
      </div>
      <div class="table-responsive">
        <table class="portal-table">
          <thead>
            <tr>
              <th>परियोजना नाम</th>
              <th>स्थान / वार्ड</th>
              <th>श्रेणी</th>
              <th>विभाग / योजना</th>
              <th>वर्तमान स्थिति</th>
              <th>सत्यापन टिप्पणी</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>सीसी रोड व नाली निर्माण</strong></td>
              <td>मुख्य बस स्टैंड से राजकीय उच्च माध्यमिक विद्यालय</td>
              <td>सड़क निर्माण</td>
              <td>ग्राम पंचायत / राज्य वित्त आयोग</td>
              <td><span class="status-badge verified">पूर्ण</span></td>
              <td>सार्वजनिक उपयोग में चालू (दस्तावेज सत्यापन प्रतीक्षारत)</td>
            </tr>
            <tr>
              <td><strong>पेयजल पाइपलाइन एवं GLR टंकी</strong></td>
              <td>ढाणी क्षेत्र एवं मुख्य बस्ती</td>
              <td>पेयजल आपूर्ति</td>
              <td>जल जीवन मिशन (JJM) / PHED</td>
              <td><span class="status-badge pending">प्रगतिरत</span></td>
              <td>घरेलू नल कनेक्शन कार्य क्रियान्वयन चरण में</td>
            </tr>
            <tr>
              <td><strong>विद्यालय चारदीवारी व अतिरिक्त कक्ष</strong></td>
              <td>रा.उ.मा.वि. बामरला परिसर</td>
              <td>शिक्षा अवसंरचना</td>
              <td>समग्र शिक्षा अभियान (समसा)</td>
              <td><span class="status-badge verified">पूर्ण</span></td>
              <td>विद्यालय परिसर को सुरक्षित किया गया</td>
            </tr>
            <tr>
              <td><strong>सौर ऊर्जा स्ट्रीट लाइट स्थापना</strong></td>
              <td>प्रमुख सार्वजनिक चौक व चौराहे</td>
              <td>ऊर्जा व प्रकाश</td>
              <td>Panchayat Samiti Sedwa</td>
              <td><span class="status-badge partial">आंशिक पूर्ण</span></td>
              <td>रखरखाव समीक्षाधीन</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section H: Bhamashah & Public Contributors -->
    <section class="mb-4">
      <div class="section-title-wrap">
        <h2 class="section-title">गाँव के भामाशाह एवं जनसहयोग</h2>
        <a href="bhamashah.html" class="section-action-link">सभी भामाशाह विवरण देखें &rarr;</a>
      </div>
      <p style="color: #4B5563; margin-bottom: 1rem; font-size: 0.9375rem;">
        गाँव के सार्वजनिक विकास, विद्यालय उन्नयन, गौशाला, पेयजल एवं सामुदायिक हित में स्वैच्छिक योगदान करने वाले महानुभावों का आदरपूर्वक अभिलेखीकरण।
      </p>
      <div class="grid-3">
        <div class="portal-card" style="border-top: 3px solid var(--saffron);">
          <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.75rem;">
            <img src="assets/images/bhamashah-placeholder.jpg" alt="भामाशाह प्रविष्टि प्रारूप" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 2px solid #F59E0B;" />
            <div>
              <div style="font-size: 0.75rem; color: #D97706; font-weight: 700;">सार्वजनिक कार्य सहयोग</div>
              <h4 style="color: #002147; font-size: 1.05rem;">[दानदाता का नाम प्रविष्टि]</h4>
              <div style="font-size: 0.8125rem; color: #64748B;">बामरला / प्रवासी बंधु</div>
            </div>
          </div>
          <div class="portal-card-body" style="font-size: 0.875rem;">
            “[दानदाता का नाम] ने [सार्वजनिक कार्य/विद्यालय विकास] के लिए ₹[सत्यापित राशि अथवा सामग्री] का निस्वार्थ योगदान दिया।”
          </div>
          <div class="portal-card-footer">
            <span class="status-badge partial">सहमति उपरांत प्रकाशित</span>
            <a href="help-support.html" class="btn btn-outline btn-sm">सहयोग जोड़ें</a>
          </div>
        </div>

        <div class="portal-card" style="border-top: 3px solid var(--saffron);">
          <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.75rem;">
            <img src="assets/images/bhamashah-placeholder.jpg" alt="भामाशाह प्रविष्टि प्रारूप" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 2px solid #F59E0B;" />
            <div>
              <div style="font-size: 0.75rem; color: #15803D; font-weight: 700;">शिक्षा एवं पेयजल सहयोग</div>
              <h4 style="color: #002147; font-size: 1.05rem;">[ग्राम सहयोग समिति / दानदाता]</h4>
              <div style="font-size: 0.8125rem; color: #64748B;">बामरला क्षेत्र</div>
            </div>
          </div>
          <div class="portal-card-body" style="font-size: 0.875rem;">
            “विद्यालय में शीतल पेयजल वाटर कूलर एवं बालिकाओं हेतु बैठक व्यवस्था सामग्री का स्वैच्छिक समर्पण।”
          </div>
          <div class="portal-card-footer">
            <span class="status-badge partial">सहमति उपरांत प्रकाशित</span>
            <a href="help-support.html" class="btn btn-outline btn-sm">सहयोग जोड़ें</a>
          </div>
        </div>

        <div class="portal-card" style="border-top: 3px solid var(--saffron);">
          <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 0.75rem;">
            <img src="assets/images/bhamashah-placeholder.jpg" alt="भामाशाह प्रविष्टि प्रारूप" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 2px solid #F59E0B;" />
            <div>
              <div style="font-size: 0.75rem; color: #1E3A8A; font-weight: 700;">पर्यावरण एवं पौधारोपण</div>
              <h4 style="color: #002147; font-size: 1.05rem;">[ग्राम युवा मंडल / भामाशाह]</h4>
              <div style="font-size: 0.8125rem; color: #64748B;">बामरला, बाड़मेर</div>
            </div>
          </div>
          <div class="portal-card-body" style="font-size: 0.875rem;">
            “सार्वजनिक रास्तों व श्मशान भूमि में छायादार वृक्षारोपण एवं ट्री-गार्ड स्थापना हेतु समर्पित जनसहयोग।”
          </div>
          <div class="portal-card-footer">
            <span class="status-badge partial">सहमति उपरांत प्रकाशित</span>
            <a href="help-support.html" class="btn btn-outline btn-sm">सहयोग जोड़ें</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section I: Quick Links Grid -->
    <section class="mb-4" style="background: #F1F5F9; padding: 2rem; border-radius: 8px;">
      <h3 style="font-size: 1.25rem; color: #002147; font-weight: 800; margin-bottom: 1rem; text-align: center;">
        उपयोगी नागरिक सेवाएँ एवं संपर्क शॉर्टकट
      </h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 0.75rem;">
        <a href="government-schemes.html" class="btn btn-outline" style="background: #FFFFFF;">📜 सरकारी योजनाएँ</a>
        <a href="schools.html" class="btn btn-outline" style="background: #FFFFFF;">🏫 स्कूल एवं शिक्षा</a>
        <a href="banks.html" class="btn btn-outline" style="background: #FFFFFF;">🏦 बैंकिंग व KCC</a>
        <a href="government-schemes.html#ration" class="btn btn-outline" style="background: #FFFFFF;">🌾 राशन कार्ड व NFSA</a>
        <a href="government-schemes.html#pension" class="btn btn-outline" style="background: #FFFFFF;">👵 सामाजिक सुरक्षा पेंशन</a>
        <a href="government-schemes.html#farmer" class="btn btn-outline" style="background: #FFFFFF;">🚜 किसान कल्याण सेवाएँ</a>
        <a href="health-services.html" class="btn btn-outline" style="background: #FFFFFF;">🩺 स्वास्थ्य व 108 सेवा</a>
        <a href="important-contacts.html" class="btn btn-outline" style="background: #FFFFFF;">📞 आवश्यक प्रशासनिक नंबर</a>
        <a href="grievance.html" class="btn btn-saffron">⚖️ शिकायत सहायता (181)</a>
        <a href="village-directory.html" class="btn btn-primary">📖 सम्पूर्ण ग्राम डायरेक्टरी</a>
      </div>
    </section>

    <!-- Section J: Google Maps Embed (Correct Village Location) -->
    <section class="mb-4">
      <div class="section-title-wrap">
        <h2 class="section-title">गाँव का भूगोलीय नक्शा (Google Maps)</h2>
        <a href="https://www.google.com/maps/place/Bamarla,+Rajasthan+344704" target="_blank" rel="noopener noreferrer" class="section-action-link">Google Maps पर अलग विंडो में देखें &rarr;</a>
      </div>
      <div class="map-responsive-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59401.38545206278!2d71.30980035449893!3d25.07569885677108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3944faf3103d9513%3A0x50724c485ca1f978!2sBamarla%2C%20Rajasthan%20344704!5e1!3m2!1sen!2sin!4v1792957358648!5m2!1sen!2sin" 
          width="600" 
          height="450" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="बामरला गाँव, बाड़मेर (राजस्थान) गूगल मैप्स स्थिति"
        ></iframe>
      </div>
      <div style="font-size: 0.8125rem; color: #64748B; margin-top: 0.5rem; text-align: right;">
        स्थान पता: <strong>BAMARLA, BARMER, RAJASTHAN, भारत · पिन कोड: 344704</strong>
      </div>
    </section>

    <!-- Section K: Website Creator Profile (Corrected Village Address & WhatsApp) -->
    <section class="mb-4" style="background: #FFFFFF; border: 2px solid #E2E8F0; border-radius: 12px; padding: 2rem; box-shadow: var(--shadow-sm);">
      <div class="section-title-wrap" style="border-bottom-color: #002147;">
        <h2 class="section-title">इस डिजिटल ग्राम पहल के निर्माता</h2>
        <span class="status-badge partial">स्वैच्छिक जनहित प्रयास</span>
      </div>
      <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
        <img src="assets/images/vikash-kumar.jpg" alt="विकाश कुमार - डिजिटल ग्राम पोर्टल संस्थापक" class="representative-photo" style="width: 170px; height: 195px;" />
        <div style="flex: 1; min-width: 280px;">
          <h3 style="font-size: 1.45rem; font-weight: 800; color: #002147; line-height: 1.2;">
            विकाश कुमार (Vikash Kumar)
          </h3>
          <div style="font-size: 0.95rem; color: #D97706; font-weight: 700; margin: 0.25rem 0 0.75rem;">
            डिजिटल ग्राम पोर्टल संस्थापक एवं जनहित तकनीकी समन्वयक
          </div>
          <p style="font-size: 0.95rem; color: #374151; line-height: 1.6; margin-bottom: 1rem;">
            “विकाश कुमार द्वारा इस डिजिटल ग्राम पोर्टल का निर्माण इस उद्देश्य से किया जा रहा है कि गाँव के लोगों को आवश्यक सार्वजनिक जानकारी खोजने के लिए अलग-अलग जगह भटकना न पड़े। यह पहल वर्तमान में उनके स्वयं के समय और संसाधनों से विकसित की जा रही है।”
          </p>
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 0.85rem; border-radius: 6px; font-size: 0.875rem; margin-bottom: 1rem;">
            <div><strong>मोबाइल नंबर:</strong> <a href="tel:+918529326036" style="color: #1E3A8A; font-weight: 600;">+91 8529326036</a></div>
            <div><strong>WhatsApp:</strong> <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" style="color: #16A34A; font-weight: 700;">+91 8529326036 (सीधा चैट)</a></div>
            <div><strong>ईमेल:</strong> <a href="mailto:${CREATOR_EMAIL}" style="color: #1E3A8A; font-weight: 600;">${CREATOR_EMAIL}</a></div>
            <div><strong>गाँव का सही पता:</strong> <strong>${CREATOR_ADDRESS}</strong></div>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <a href="about-portal.html" class="btn btn-primary btn-sm">पोर्टल के बारे में जानें &rarr;</a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #FFFFFF; font-weight: 700;">
              💬 WhatsApp पर चैट करें
            </a>
            <a href="help-support.html" class="btn btn-outline btn-sm">सुझाव फॉर्म भरें</a>
          </div>
        </div>
      </div>
    </section>
  </div>
`;

// Run builder
async function buildAll() {
  console.log("Re-generating 25 static HTML pages with corrected address, logo, sarpanch, poster, and WhatsApp integration...");

  const pages = [
    // 1. Index
    {
      filename: "index.html",
      title: "मुख्य पृष्ठ",
      description: "बामरला ग्राम डिजिटल पोर्टल (BAMARLA, BARMER, RAJASTHAN, भारत · 344704) - सरपंच: धोधा खान (बामरला), सरपंच: पेमा राम मेगवाल (आदर्श बामरला), स्कूल, SBI बैंक, सरकारी योजनाएँ और जनसुविधाओं की प्रामाणिक जानकारी।",
      keywords: "बामरला, Bamarla Village Barmer, बामरला राजस्थान, धोधा खान सरपंच, पेमा राम मेगवाल सरपंच, आदर्श बामरला, बामरला सरकारी स्कूल, बामरला SBI बैंक, 344704",
      canonicalUrl: `${SITE_URL}/index.html`,
      schemaJson: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "बामरला ग्राम डिजिटल पोर्टल",
        "url": `${SITE_URL}/index.html`,
        "description": "BAMARLA, BARMER, RAJASTHAN, भारत (344704) का स्वतंत्र डिजिटल ग्राम सूचना मंच।",
        "inLanguage": "hi",
        "creator": {
          "@type": "Person",
          "name": "विकाश कुमार (Vikash Kumar)",
          "email": CREATOR_EMAIL,
          "telephone": CREATOR_PHONE,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bamarla Village",
            "addressLocality": "Barmer",
            "addressRegion": "Rajasthan",
            "postalCode": "344704",
            "addressCountry": "IN"
          }
        }
      },
      bodyContent: indexBody
    },

    // 2. Village (village.html)
    {
      filename: "village.html",
      title: "ग्राम परिचय एवं इतिहास",
      description: "बामरला गाँव (BAMARLA, BARMER, RAJASTHAN, भारत - 344704) का भौगोलिक, प्रशासनिक एवं ऐतिहासिक परिचय।",
      keywords: "बामरला गाँव परिचय, बामरला का इतिहास, बामरला जनसंख्या, सेड़वा बाड़मेर, Bamarla history, 344704",
      canonicalUrl: `${SITE_URL}/village.html`,
      breadcrumbs: [{ label: "ग्राम परिचय", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>बामरला ग्राम परिचय एवं भौगोलिक पृष्ठभूमि</h1>
            <div class="page-description">
              BAMARLA, BARMER, RAJASTHAN, भारत | तहसील: सेड़वा | जिला: बाड़मेर | पिन कोड: 344704
            </div>
          </div>

          <div class="grid-2 mb-4">
            <div>
              <h2 class="section-title mb-2">गाँव का विहंगावलोकन</h2>
              <p style="font-size: 1rem; color: #374151; line-height: 1.7; margin-bottom: 1rem;">
                <strong>बामरला (Bamarla)</strong> भारत के पश्चिमी राजस्थान राज्य के सीमांत जिला <strong>बाड़मेर</strong> की <strong>सेड़वा तहसील</strong> में स्थित एक पारंपरिक, शांतिप्रिय एवं परिश्रमी ग्रामीण क्षेत्र है। थार मरुस्थल की सुरम्य रेतीली धरा पर बसा यह गाँव अपनी सदियों पुरानी सामुदायिक समरसता, आतिथ्य सत्कार एवं कृषि-पशुपालन आधारित अर्थव्यवस्था के लिए जाना जाता है।
              </p>
              <p style="font-size: 1rem; color: #374151; line-height: 1.7; margin-bottom: 1rem;">
                गाँव के निवासी मुख्य रूप से कृषि, पशुपालन, दैनिक स्वरोजगार, व्यापार एवं सरकारी व निजी सेवाओं में कार्यरत हैं। हाल के वर्षों में डिजिटल जागरूकता, पक्की सड़कों, सौर ऊर्जा संयंत्रों एवं उच्च माध्यमिक विद्यालय के विस्तार से गाँव शिक्षा एवं विकास की मुख्यधारा से तेजी से जुड़ रहा है।
              </p>
              
              <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 1.25rem; border-radius: 8px; margin-top: 1.5rem;">
                <h3 style="font-size: 1.1rem; color: #1E3A8A; font-weight: 700; margin-bottom: 0.5rem;">प्रशासनिक स्थिति (Administrative Structure)</h3>
                <ul style="padding-left: 1.25rem; line-height: 1.8; color: #1F2937; font-size: 0.9375rem;">
                  <li><strong>गाँव का नाम:</strong> बामरला (Bamarla)</li>
                  <li><strong>ग्राम पंचायतें:</strong> बामरला (सरपंच: धोधा खान) एवं आदर्श बामरला (सरपंच: पेमा राम मेगवाल)</li>
                  <li><strong>तहसील / उपखंड:</strong> सेड़वा</li>
                  <li><strong>जिला:</strong> बाड़मेर (Barmer, Rajasthan)</li>
                  <li><strong>संभाग:</strong> जोधपुर (Jodhpur)</li>
                  <li><strong>डाक पिन कोड:</strong> 344704 (शाखा डाकघर बामरला)</li>
                  <li><strong>पुलिस थाना:</strong> सेड़वा पुलिस स्टेशन</li>
                  <li><strong>आधिकारिक पता:</strong> BAMARLA, BARMER, RAJASTHAN, भारत - 344704</li>
                </ul>
              </div>
            </div>

            <div>
              <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 8px; box-shadow: var(--shadow-sm); margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 1rem;">जनसांख्यिकी (आधिकारिक जनगणना 2011 आधार)</h3>
                <div style="font-size: 0.875rem; color: #64748B; margin-bottom: 1rem;">
                  * भारत की आधिकारिक जनगणना 2011 (Census 2011) के अनुसार:
                </div>
                <div class="table-responsive">
                  <table class="portal-table">
                    <tbody>
                      <tr><td><strong>कुल परिवार (Households):</strong></td><td>लगभग 450+ परिवार</td></tr>
                      <tr><td><strong>कुल जनसंख्या:</strong></td><td>लगभग 2,600+ निवासी (2011 जनगणना)</td></tr>
                      <tr><td><strong>लिंगानुपात (Sex Ratio):</strong></td><td>प्रति 1000 पुरुषों पर लगभग 910 महिलाएँ</td></tr>
                      <tr><td><strong>साक्षरता दर (Literacy Rate):</strong></td><td>लगभग 54.2% (युवा वर्ग में निरंतर वृद्धि)</td></tr>
                      <tr><td><strong>मुख्य भाषा:</strong></td><td>मारवाड़ी (राजस्थानी), हिंदी</td></tr>
                      <tr><td><strong>मुख्य फसलें:</strong></td><td>बाजरा, ग्वार, मूंग, मोठ, तिल एवं जीरा/ईसबगोल</td></tr>
                    </tbody>
                  </table>
                </div>
                <div style="font-size: 0.75rem; color: #94A3B8; margin-top: 0.5rem;">
                  स्रोत: भारत की जनगणना 2011 (Census of India, Office of the Registrar General). नए जनगणना आंकड़े आधिकारिक प्रकाशन उपरांत अद्यतन किए जाएँगे।
                </div>
              </div>

              <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 1.25rem; border-radius: 8px;">
                <h4 style="color: #92400E; font-weight: 700; margin-bottom: 0.5rem;">भूगोल एवं जलवायु</h4>
                <p style="font-size: 0.875rem; color: #78350F; line-height: 1.6;">
                  बामरला अर्ध-शुष्क मरुस्थलीय जलवायु क्षेत्र में आता है। यहाँ ग्रीष्मकाल में तापमान 42°C से 47°C तक पहुँचता है, जबकि शीतकाल सुखद एवं ठंडा रहता है। वर्षा मानसून ऋतु (जुलाई-सितंबर) में सीमित होती है। खेजड़ी (शमी), रोहिड़ा, कैर एवं बेर यहाँ की प्रमुख प्राकृतिक वनस्पति हैं।
                </p>
              </div>
            </div>
          </div>

          <section class="mb-4">
            <h2 class="section-title mb-2">आवागमन एवं निकटवर्ती संपर्क</h2>
            <div class="grid-3 mt-2">
              <div class="portal-card">
                <h3 class="portal-card-title">सड़क संपर्क</h3>
                <p class="portal-card-body">
                  बामरला तहसील मुख्यालय सेड़वा एवं निकटवर्ती चौहटन व बाड़मेर शहर से पक्की डामर सड़कों द्वारा सुगम रूप से जुड़ा है। निजी व लोक परिवहन बसें एवं टैक्सियाँ नियमित रूप से संचालित होती हैं।
                </p>
              </div>
              <div class="portal-card">
                <h3 class="portal-card-title">निकटवर्ती रेलवे स्टेशन</h3>
                <p class="portal-card-body">
                  प्रमुख रेलवे स्टेशन <strong>बाड़मेर (BME)</strong> है जो लगभग 80-90 किमी दूरी पर स्थित है। यहाँ से जोधपुर, जयपुर, दिल्ली, अहमदाबाद व मुंबई हेतु सीधी रेल सेवाएँ उपलब्ध हैं।
                </p>
              </div>
              <div class="portal-card">
                <h3 class="portal-card-title">निकटवर्ती हवाई अड्डा</h3>
                <p class="portal-card-body">
                  निकटतम नागरिक हवाई अड्डा <strong>जोधपुर (JDH)</strong> (लगभग 280 किमी) एवं उत्तरलाई (बाड़मेर वायुसेना स्टेशन) है।
                </p>
              </div>
            </div>
          </section>

          <div style="text-align: center; margin-top: 2rem;">
            <a href="panchayat.html" class="btn btn-primary">ग्राम पंचायत विवरण देखें &rarr;</a>
            <a href="representatives.html" class="btn btn-saffron">जनप्रतिनिधि विवरण &rarr;</a>
            <a href="schools.html" class="btn btn-outline">विद्यालय एवं शिक्षा &rarr;</a>
          </div>
        </div>
      `
    },

    // 3. Representatives (representatives.html)
    {
      filename: "representatives.html",
      title: "जनप्रतिनिधि विवरण",
      description: "बामरला एवं आदर्श बामरला ग्राम पंचायत के सरपंच: धोधा खान (बामरला) एवं सरपंच: पेमा राम मेगवाल (आदर्श बामरला), उपसरपंच व वार्ड पंचों का सार्वजनिक ब्यौरा।",
      keywords: "बामरला सरपंच धोधा खान, Dhodha Khan sarpanch, पेमा राम मेगवाल आदर्श बामरला, Pemaram Megwal, उपसरपंच, वार्ड पंच बामरla",
      canonicalUrl: `${SITE_URL}/representatives.html`,
      breadcrumbs: [{ label: "पंचायत व प्रतिनिधि", url: "panchayat.html" }, { label: "जनप्रतिनिधि", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>ग्राम पंचायत जनप्रतिनिधि विवरण</h1>
            <div class="page-description">
              बामरला एवं आदर्श बामरला ग्राम पंचायतों के निर्वाचित प्रतिनिधि, उनकी सार्वजनिक भूमिका एवं सत्यापन स्थिति।
            </div>
          </div>

          <!-- Verification Disclaimer Banner -->
          <div style="background: #FFFBEB; border: 1px solid #F59E0B; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
            <h4 style="color: #92400E; font-size: 1rem; font-weight: 700; margin-bottom: 0.35rem;">
              ⚠️ आधिकारिक सत्यापन एवं निर्वाचन अभिलेख सूचना
            </h4>
            <p style="font-size: 0.875rem; color: #78350F; line-height: 1.6;">
              इस पृष्ठ पर प्रदर्शित सरपंचों के नाम (बामरला: धोधा खान, आदर्श बामरला: पेमा राम मेगवाल) प्राथमिक जानकारी के आधार पर सूचीबद्ध किए गए हैं। जब तक राज्य निर्वाचन आयोग अथवा संबंधित पंचायत समिति से आधिकारिक गजट अभिलेख उपलब्ध नहीं होता, तब तक इन प्रविष्टियों को 'सत्यापन प्रक्रियाधीन' माना जाए। पोर्टल किसी भी प्रतिनिधि की काल्पनिक फोटो या अनधिकृत विवरण प्रकाशित नहीं करता।
            </p>
          </div>

          <!-- Representatives Cards (Requirement 3: Correct Sarpanch Associations) -->
          <div class="grid-2 mb-4">
            <!-- Sarpanch Bamarla: Dhodha Khan -->
            <div id="sarpanch-bamarla" class="representative-card">
              <img src="assets/images/sarpanch-bamarla.jpg" alt="सरपंच धोधा खान - ग्राम पंचायत बामरला" class="representative-photo" />
              <div class="representative-details">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem;">
                  <span class="status-badge pending">सत्यापन प्रक्रियाधीन</span>
                  <span style="font-size: 0.75rem; color: #64748B;">ग्राम पंचायत: बामरला</span>
                </div>
                <h2 class="representative-name">श्री धोधा खान</h2>
                <div style="font-size: 0.875rem; color: #475569; font-weight: 500;">(Dhodha Khan)</div>
                <div class="representative-position">सरपंच — ग्राम पंचायत बामरला गाँव</div>
                <div class="representative-meta">
                  <div><strong>पद:</strong> सरपंच (Sarpanch)</div>
                  <div><strong>संबंधित क्षेत्र:</strong> बामरला गाँव (Bamarla Village), सेड़वा, बाड़मेर</div>
                  <div><strong>वर्तमान कार्यकाल:</strong> आधिकारिक रिकॉर्ड सत्यापन उपरांत दर्ज किया जाएगा</div>
                  <div><strong>कार्यालय:</strong> ग्राम पंचायत भवन, बामरला</div>
                  <div><strong>सार्वजनिक संपर्क:</strong> आधिकारिक सत्यापन प्रक्रियाधीन</div>
                </div>
                <div style="font-size: 0.8125rem; color: #6B7280; background: #F8FAFC; padding: 0.5rem; border-radius: 4px; border: 1px solid #E2E8F0;">
                  दायित्व: ग्रामसभा की अध्यक्षता, गाँव की वार्षिक विकास कार्ययोजना का अनुमोदन, स्वच्छता, पेयजल एवं सामाजिक न्याय योजनाओं का स्थानीय पर्यवेक्षण।
                </div>
              </div>
            </div>

            <!-- Sarpanch Adarsh Bamarla: Pemaram Megwal -->
            <div id="sarpanch-adarsh" class="representative-card">
              <img src="assets/images/sarpanch-adarsh-bamarla.jpg" alt="सरपंच पेमा राम मेगवाल - ग्राम पंचायत आदर्श बामरला" class="representative-photo" />
              <div class="representative-details">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.35rem;">
                  <span class="status-badge pending">सत्यापन प्रक्रियाधीन</span>
                  <span style="font-size: 0.75rem; color: #64748B;">ग्राम पंचायत: आदर्श बामरला</span>
                </div>
                <h2 class="representative-name">श्री पेमा राम मेगवाल</h2>
                <div style="font-size: 0.875rem; color: #475569; font-weight: 500;">(Pemaram Megwal)</div>
                <div class="representative-position">सरपंच — ग्राम पंचायत आदर्श बामरला</div>
                <div class="representative-meta">
                  <div><strong>पद:</strong> सरपंच (Sarpanch)</div>
                  <div><strong>संबंधित क्षेत्र:</strong> आदर्श बामरला (Adarsh Bamarla), सेड़वा, बाड़मेर</div>
                  <div><strong>वर्तमान कार्यकाल:</strong> आधिकारिक रिकॉर्ड सत्यापन उपरांत दर्ज किया जाएगा</div>
                  <div><strong>कार्यालय:</strong> ग्राम पंचायत भवन, आदर्श बामरला</div>
                  <div><strong>सार्वजनिक संपर्क:</strong> आधिकारिक सत्यापन प्रक्रियाधीन</div>
                </div>
                <div style="font-size: 0.8125rem; color: #6B7280; background: #F8FAFC; padding: 0.5rem; border-radius: 4px; border: 1px solid #E2E8F0;">
                  दायित्व: आदर्श बामरला क्षेत्र में विकास कार्यों की निगरानी, मनरेगा कार्य योजना, पेयजल वितरण समन्वय तथा स्थानीय विवादों का सौहार्दपूर्ण समाधान।
                </div>
              </div>
            </div>
          </div>

          <!-- Deputy Sarpanch & Ward Members Section -->
          <div id="ward-members" class="mb-4">
            <h2 class="section-title mb-2">उपसरपंच एवं वार्ड पंच (Ward Members)</h2>
            <p style="font-size: 0.9375rem; color: #4B5563; margin-bottom: 1.25rem;">
              पंचायती राज व्यवस्था के नियमों के अनुसार ग्राम पंचायत में निर्वाचित उपसरपंच तथा प्रत्येक वार्ड से वार्ड पंच निर्वाचित होते हैं।
            </p>

            <div class="grid-2 mb-3">
              <div class="representative-card">
                <img src="assets/images/upsarpanch-bamarla.jpg" alt="उपसरपंच - बामरला" class="representative-photo" />
                <div class="representative-details">
                  <span class="status-badge pending">आधिकारिक अभिलेख प्रतीक्षारत</span>
                  <h3 class="representative-name" style="margin-top: 0.35rem;">उपसरपंच पद — बामरला</h3>
                  <div class="representative-position">ग्राम पंचायत बामरला</div>
                  <p style="font-size: 0.875rem; color: #4B5563; margin-top: 0.5rem; line-height: 1.5;">
                    निर्वाचित उपसरपंच का नाम पंचायत कार्यालय अथवा राज्य निर्वाचन आयोग की सत्यापित प्रति प्राप्त होने के पश्चात यहाँ प्रकाशित किया जाएगा। किसी अनधिकृत नाम को जोड़ना वर्जित है।
                  </p>
                </div>
              </div>

              <div class="representative-card">
                <img src="assets/images/upsarpanch-adarsh-bamarla.jpg" alt="उपसरपंच - आदर्श बामरला" class="representative-photo" />
                <div class="representative-details">
                  <span class="status-badge pending">आधिकारिक अभिलेख प्रतीक्षारत</span>
                  <h3 class="representative-name" style="margin-top: 0.35rem;">उपसरपंच पद — आदर्श बामरला</h3>
                  <div class="representative-position">ग्राम पंचायत आदर्श बामरला</div>
                  <p style="font-size: 0.875rem; color: #4B5563; margin-top: 0.5rem; line-height: 1.5;">
                    निर्वाचित उपसरपंच का नाम पंचायत कार्यालय अथवा राज्य निर्वाचन आयोग की सत्यापित प्रति प्राप्त होने के पश्चात यहाँ प्रकाशित किया जाएगा। किसी अनधिकृत नाम को जोड़ना वर्जित है।
                  </p>
                </div>
              </div>
            </div>

            <!-- Ward Panch Information Register -->
            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 8px;">
              <h3 style="font-size: 1.15rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">
                वार्ड सदस्यों की सूची (वार्ड 1 से 11)
              </h3>
              <p style="font-size: 0.875rem; color: #4B5563; line-height: 1.6; margin-bottom: 1rem;">
                ग्राम पंचायत बामरला एवं आदर्श बामरला के सभी वार्डों के निर्वाचित पंचों के नाम प्रमाणित निर्वाचन परिणाम सूची के आधार पर जोड़े जाने की प्रक्रिया में हैं। यदि आपके पास प्रमाणित सूची उपलब्ध है, तो आप 'सहायता व सुधार' पृष्ठ के माध्यम से पोर्टल को सीधे WhatsApp अथवा ईमेल द्वारा प्रेषित कर सकते हैं।
              </p>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <a href="help-support.html" class="btn btn-outline btn-sm">प्रमाणित जानकारी प्रेषित करें</a>
                <a href="https://sec.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">राज्य निर्वाचन आयोग पोर्टल &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 4. Panchayat (panchayat.html)
    {
      filename: "panchayat.html",
      title: "ग्राम पंचायत बामरला एवं आदर्श बामरला",
      description: "ग्राम पंचायत बामरला (सरपंच: धोधा खान) एवं ग्राम पंचायत आदर्श बामरला (सरपंच: पेमा राम मेगवाल), कार्यालय समय, ग्रामसभा व नागरिक अधिकार पत्र।",
      keywords: "ग्राम पंचायत बामरला, धोधा खान सरपंच, आदर्श बामरला, पेमा राम मेगवाल सरपंच, ग्रामसभा, सेड़वा, egramswaraj",
      canonicalUrl: `${SITE_URL}/panchayat.html`,
      breadcrumbs: [{ label: "पंचायत व प्रतिनिधि", url: "" }, { label: "ग्राम पंचायत", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>ग्राम पंचायत बामरला एवं आदर्श बामरला</h1>
            <div class="page-description">
              पंचायती राज व्यवस्था के अंतर्गत स्थानीय स्वशासन, ग्रामसभा बैठकें, कार्यालय कार्यप्रणाली एवं नागरिक अधिकार पत्र।
            </div>
          </div>

          <div class="grid-2 mb-4">
            <div class="portal-card">
              <span class="status-badge pending mb-1">प्रशासनिक इकाई 1</span>
              <h2 class="portal-card-title">ग्राम पंचायत बामरला</h2>
              <div style="color: #D97706; font-weight: 700; font-size: 0.95rem; margin: 0.25rem 0;">
                सरपंच: श्री धोधा खान (Dhodha Khan)
              </div>
              <p class="portal-card-body mt-2">
                <strong>पंचायत समिति:</strong> सेड़वा | <strong>जिला:</strong> बाड़मेर (राजस्थान)<br>
                <strong>कार्यालय पता:</strong> ग्राम पंचायत भवन, बामरला, सेड़वा, बाड़मेर - 344704<br>
                <strong>कार्यालय समय:</strong> प्रातः 10:00 बजे से सायं 05:00 बजे तक (राजकीय कार्य दिवसों में)<br>
                <strong>ग्राम विकास अधिकारी (VDO/सचिव):</strong> पदस्थापित अधिकारी विवरण सत्यापन उपरांत दर्ज होगा।
              </p>
              <div class="portal-card-footer">
                <a href="representatives.html#sarpanch-bamarla" class="btn btn-primary btn-sm">सरपंच धोधा खान प्रोफाइल &rarr;</a>
                <a href="https://egramswaraj.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">ई-ग्राम स्वराज पोर्टल</a>
              </div>
            </div>

            <div class="portal-card">
              <span class="status-badge pending mb-1">प्रशासनिक इकाई 2</span>
              <h2 class="portal-card-title">ग्राम पंचायत आदर्श बामरला</h2>
              <div style="color: #D97706; font-weight: 700; font-size: 0.95rem; margin: 0.25rem 0;">
                सरपंच: श्री पेमा राम मेगवाल (Pemaram Megwal)
              </div>
              <p class="portal-card-body mt-2">
                <strong>पंचायत समिति:</strong> सेड़वा | <strong>जिला:</strong> बाड़मेर (राजस्थान)<br>
                <strong>कार्यालय पता:</strong> ग्राम पंचायत भवन, आदर्श बामरला, सेड़वा, बाड़मेर - 344704<br>
                <strong>कार्यालय समय:</strong> प्रातः 10:00 बजे से सायं 05:00 बजे तक (राजकीय कार्य दिवसों में)<br>
                <strong>ग्राम विकास अधिकारी (VDO/सचिव):</strong> पदस्थापित अधिकारी विवरण सत्यापन उपरांत दर्ज होगा।
              </p>
              <div class="portal-card-footer">
                <a href="representatives.html#sarpanch-adarsh" class="btn btn-primary btn-sm">सरपंच पेमा राम प्रोफाइल &rarr;</a>
                <a href="https://egramswaraj.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">ई-ग्राम स्वराज पोर्टल</a>
              </div>
            </div>
          </div>

          <!-- Gram Sabha Section -->
          <section class="mb-4" style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 2rem; border-radius: 8px;">
            <h2 class="section-title mb-2">ग्रामसभा की संरचना एवं अनिवार्य बैठकें</h2>
            <p style="font-size: 0.95rem; color: #374151; line-height: 1.7; margin-bottom: 1.5rem;">
              ग्रामसभा पंचायती राज की सर्वोच्च एवं सर्वाधिक लोकतांत्रिक संस्था है। गाँव के समस्त 18 वर्ष से अधिक आयु के पंजीकृत मतदाता ग्रामसभा के सदस्य होते हैं।
            </p>

            <div class="grid-4">
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 6px;">
                <div style="font-size: 0.8125rem; color: #D97706; font-weight: 700;">26 जनवरी</div>
                <div style="font-weight: 700; color: #002147; margin: 0.25rem 0;">गणतंत्र दिवस बैठक</div>
                <div style="font-size: 0.8125rem; color: #4B5563;">वार्षिक कार्ययोजना व समीक्षा बैठक।</div>
              </div>

              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 6px;">
                <div style="font-size: 0.8125rem; color: #15803D; font-weight: 700;">01 मई</div>
                <div style="font-weight: 700; color: #002147; margin: 0.25rem 0;">मजदूर दिवस बैठक</div>
                <div style="font-size: 0.8125rem; color: #4B5563;">मनरेगा श्रम बजट व जॉबकार्ड समीक्षा।</div>
              </div>

              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 6px;">
                <div style="font-size: 0.8125rem; color: #1E3A8A; font-weight: 700;">15 अगस्त</div>
                <div style="font-weight: 700; color: #002147; margin: 0.25rem 0;">स्वतंत्रता दिवस बैठक</div>
                <div style="font-size: 0.8125rem; color: #4B5563;">पेयजल, स्वच्छता एवं स्कूल विकास चर्चा।</div>
              </div>

              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1rem; border-radius: 6px;">
                <div style="font-size: 0.8125rem; color: #E65100; font-weight: 700;">02 अक्टूबर</div>
                <div style="font-weight: 700; color: #002147; margin: 0.25rem 0;">गांधी जयंती बैठक</div>
                <div style="font-size: 0.8125rem; color: #4B5563;">स्वच्छ भारत अभियान व सामाजिक अंकेक्षण।</div>
              </div>
            </div>
          </section>

          <!-- Citizen Charter & Services -->
          <section class="mb-4">
            <h2 class="section-title mb-2">ग्राम पंचायत नागरिक सेवाएँ (Citizen Charter)</h2>
            <div class="table-responsive">
              <table class="portal-table">
                <thead>
                  <tr>
                    <th>सेवा का नाम</th>
                    <th>आवश्यक दस्तावेज</th>
                    <th>समय सीमा</th>
                    <th>संबंधित अधिकारी</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>जन्म / मृत्यु प्रमाण पत्र</strong></td>
                    <td>अस्पताल डिस्चार्ज पर्ची / पंचनामा, आधार कार्ड</td>
                    <td>7 से 15 कार्य दिवस</td>
                    <td>रजिस्ट्रार (VDO / सचिव)</td>
                  </tr>
                  <tr>
                    <td><strong>मनरेगा नया जॉब कार्ड</strong></td>
                    <td>परिवार के सदस्यों का आधार कार्ड, बैंक पासबुक, फोटो</td>
                    <td>15 दिवस</td>
                    <td>ग्राम रोजगार सहायक / VDO</td>
                  </tr>
                  <tr>
                    <td><strong>विवाह पंजीयन प्रमाण पत्र</strong></td>
                    <td>वर-वधू आधार, विवाह निमंत्रण पत्र, गवाहों के शपथ पत्र</td>
                    <td>15 से 21 दिवस</td>
                    <td>विवाह रजिस्ट्रार</td>
                  </tr>
                  <tr>
                    <td><strong>आवासीय पट्टा / भूखंड नियमन</strong></td>
                    <td>कब्जा प्रमाण, पड़ोसी सहमति, निर्धारित शुल्क रसीद</td>
                    <td>ग्रामसभा अनुमोदन उपरांत</td>
                    <td>सरपंच व ग्राम पंचायत बोर्ड</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      `
    },

    // 5. Government Schemes (government-schemes.html)
    {
      filename: "government-schemes.html",
      title: "सरकारी योजनाएँ एवं सेवाएँ",
      description: "पीएम किसान, नरेगा, जन सूचना पोर्टल, सामाजिक सुरक्षा पेंशन, राशन कार्ड, आवास एवं छात्रवृत्ति योजनाओं की संपूर्ण जानकारी।",
      keywords: "सरकारी योजनाएँ, पीएम किसान, नरेगा, राशन कार्ड, पेंशन, आवास योजना, जन सूचना पोर्टल, SSO राजस्थान, schemes rajasthan",
      canonicalUrl: `${SITE_URL}/government-schemes.html`,
      breadcrumbs: [{ label: "सुविधाएँ व सेवाएँ", url: "" }, { label: "सरकारी योजनाएँ", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>सरकारी योजनाएँ एवं नागरिक कल्याण सेवाएँ</h1>
            <div class="page-description">
              केंद्र व राजस्थान सरकार की जन-कल्याणकारी योजनाओं की पात्रता, आवश्यक दस्तावेज, आवेदन प्रक्रिया एवं आधिकारिक पोर्टल लिंक।
            </div>
          </div>

          <div style="background: #FFFBEB; border: 1px solid #F59E0B; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
            <strong>⚠️ सुरक्षा सावधानी:</strong> यह पोर्टल केवल सूचना मार्गदर्शन प्रदान करता है। यह कभी भी आपका आधार नंबर, ओटीपी (OTP), बैंक खाता पिन अथवा पैसे नहीं माँगता। किसी भी अनजान व्यक्ति को अपना OTP न बताएं।
          </div>

          <!-- Category 1: Kisan Schemes -->
          <div id="farmer" class="mb-4">
            <h2 class="section-title mb-2">1. किसान कल्याण योजनाएँ (Farmer Welfare Schemes)</h2>
            <div class="grid-2 mt-2">
              <div class="portal-card">
                <h3 class="portal-card-title">प्रधानमंत्री किसान सम्मान निधि (PM-KISAN)</h3>
                <p class="portal-card-body">
                  <strong>उद्देश्य:</strong> पात्र किसान परिवारों को प्रतिवर्ष ₹6,000 की वित्तीय सहायता (₹2,000 की 3 समान किस्तों में)।<br>
                  <strong>पात्रता:</strong> कृषि भूमि स्वामित्व धारक किसान परिवार (संस्थागत भूमिधारक व आयकर दाता अपात्र)।<br>
                  <strong>आवश्यक दस्तावेज:</strong> जमाबंदी (खतौनी), आधार कार्ड, बैंक खाता पासबुक (आधार सीडेड)।<br>
                  <strong>प्रक्रिया:</strong> नजदीकी ई-मित्र अथवा pmkisan.gov.in पर ऑनलाइन पंजीयन व अनिवार्य बायोमेट्रिक ई-केवाईसी।
                </p>
                <div class="portal-card-footer">
                  <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">pmkisan.gov.in पोर्टल &rarr;</a>
                  <span class="status-badge verified">सत्यापित स्रोत</span>
                </div>
              </div>

              <div class="portal-card">
                <h3 class="portal-card-title">तारबंदी योजना (राजस्थान किसान साथी पोर्टल)</h3>
                <p class="portal-card-body">
                  <strong>उद्देश्य:</strong> आवारा व जंगली पशुओं से फसल सुरक्षा हेतु खेत के चारों ओर तारबंदी पर 50% तक सरकारी अनुदान।<br>
                  <strong>पात्रता:</strong> न्यूनतम 1.5 हेक्टेयर कृषि भूमि (व्यक्तिगत अथवा कृषक समूह रूप में)।<br>
                  <strong>दस्तावेज:</strong> जमाबंदी (6 माह से पुरानी न हो), नक्शा ट्रेस, जन आधार कार्ड, बैंक खाता विवरण।<br>
                  <strong>आवेदन:</strong> राजकिसान साथी पोर्टल (rajkisan.rajasthan.gov.in) पर ई-मित्र द्वारा ऑनलाइन।
                </p>
                <div class="portal-card-footer">
                  <a href="https://rajkisan.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">राजकिसान पोर्टल &rarr;</a>
                  <span class="status-badge verified">सत्यापित स्रोत</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Category 2: Pension Schemes -->
          <div id="pension" class="mb-4">
            <h2 class="section-title mb-2">2. सामाजिक सुरक्षा पेंशन योजनाएँ (Social Security Pension)</h2>
            <div class="grid-3 mt-2">
              <div class="portal-card">
                <h3 class="portal-card-title">मुख्यमंत्री वृद्धावस्था सम्मान पेंशन</h3>
                <p class="portal-card-body">
                  <strong>पात्रता:</strong> महिला आयु 55 वर्ष या अधिक, पुरुष आयु 58 वर्ष या अधिक (वार्षिक आय ₹48,000 से कम)।<br>
                  <strong>लाभ:</strong> प्रति माह ₹1,150 से ₹1,500 की पेंशन सहायता।<br>
                  <strong>दस्तावेज:</strong> जन आधार कार्ड, बैंक खाता, आयु प्रमाण पत्र।
                </p>
                <div class="portal-card-footer">
                  <a href="https://ssp.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">पेंशन पोर्टल &rarr;</a>
                  <span class="status-badge verified">सत्यापित</span>
                </div>
              </div>

              <div class="portal-card">
                <h3 class="portal-card-title">एकलनारी (विधवा) सम्मान पेंशन</h3>
                <p class="portal-card-body">
                  <strong>पात्रता:</strong> 18 वर्ष या अधिक आयु की विधवा, तलाकशुदा अथवा परित्यक्ता महिला।<br>
                  <strong>लाभ:</strong> आयु वर्ग अनुसार ₹1,150 से ₹1,500 प्रति माह।<br>
                  <strong>दस्तावेज:</strong> पति का मृत्यु प्रमाण पत्र, जन आधार, बैंक खाता।
                </p>
                <div class="portal-card-footer">
                  <a href="https://ssp.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">पेंशन पोर्टल &rarr;</a>
                  <span class="status-badge verified">सत्यापित</span>
                </div>
              </div>

              <div class="portal-card">
                <h3 class="portal-card-title">विशेष योग्यजन सम्मान पेंशन</h3>
                <p class="portal-card-body">
                  <strong>पात्रता:</strong> 40% या अधिक दिव्यांगता प्रमाण पत्र धारक ग्रामीण निवासी।<br>
                  <strong>लाभ:</strong> ₹1,150 से ₹1,500 प्रति माह + निःशुल्क परिवहन पास सुविधा।<br>
                  <strong>दस्तावेज:</strong> दिव्यांगता प्रमाण पत्र (UDID), जन आधार कार्ड।
                </p>
                <div class="portal-card-footer">
                  <a href="https://ssp.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">पेंशन पोर्टल &rarr;</a>
                  <span class="status-badge verified">सत्यापित</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Category 3: Housing & Employment -->
          <div class="mb-4">
            <h2 class="section-title mb-2">3. आवास एवं ग्रामीण रोजगार (Housing & MGNREGA)</h2>
            <div class="grid-2 mt-2">
              <div class="portal-card">
                <h3 class="portal-card-title">प्रधानमंत्री आवास योजना (ग्रामीण) - PMAY-G</h3>
                <p class="portal-card-body">
                  <strong>उद्देश्य:</strong> बेघर एवं कच्चे घरों में रहने वाले ग्रामीण परिवारों को पक्के मकान हेतु आर्थिक सहायता।<br>
                  <strong>सहायता राशि:</strong> ₹1,20,000 (3 किस्तों में सीधे बैंक खाते में) + मनरेगा के तहत 90 दिन की मजदूरी + शौचालय निर्माण हेतु ₹12,000।<br>
                  <strong>चयन प्रक्रिया:</strong> सामाजिक-आर्थिक व जाति जनगणना (SECC) एवं आवास+ सर्वे सूची के आधार पर ग्रामसभा अनुमोदन।
                </p>
                <div class="portal-card-footer">
                  <a href="https://pmayg.nic.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">लाभार्थी सूची देखें &rarr;</a>
                  <span class="status-badge verified">सत्यापित स्रोत</span>
                </div>
              </div>

              <div class="portal-card">
                <h3 class="portal-card-title">महात्मा गांधी नरेगा योजना (MGNREGA)</h3>
                <p class="portal-card-body">
                  <strong>उद्देश्य:</strong> प्रत्येक ग्रामीण परिवार को वित्तीय वर्ष में 100 दिवस का अकुशल श्रम रोजगार अधिकार।<br>
                  <strong>कार्य प्रकार:</strong> तालाब खुदाई, मेड़बंदी, ग्रेवल सड़क, जल संरक्षण संरचना निर्माण।<br>
                  <strong>आवेदन:</strong> ग्राम पंचायत में फॉर्म-6 भरकर कार्य मांग दर्ज करवाएं। 15 दिवस में रोजगार न मिलने पर बेरोजगारी भत्ता देय।
                </p>
                <div class="portal-card-footer">
                  <a href="https://nrega.nic.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">जॉब कार्ड व हाजिरी &rarr;</a>
                  <span class="status-badge verified">सत्यापित स्रोत</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Category 4: Ration & Food Security -->
          <div id="ration" class="mb-4">
            <h2 class="section-title mb-2">4. खाद्य सुरक्षा एवं राशन कार्ड सेवाएँ (PDS / NFSA)</h2>
            <div class="portal-card">
              <h3 class="portal-card-title">राष्ट्रीय खाद्य सुरक्षा योजना (NFSA) एवं अन्नपूर्णा किट</h3>
              <p class="portal-card-body">
                पात्र अंत्योदय (AAY) एवं बीपीएल/स्टेट बीपीएल कार्डधारकों को ₹0 (निःशुल्क) गेहूं प्रति यूनिट 5 किग्रा उपलब्ध कराया जाता है। अपना राशन कार्ड विवरण एवं उचित मूल्य दुकान (FPS Dealer) आवंटन की स्थिति जन सूचना पोर्टल पर सीधे देखें।
              </p>
              <div class="portal-card-footer">
                <a href="https://jansoochna.rajasthan.gov.in/Services/ServicesSchemeDetails?serviceId=13" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">राशन कार्ड स्थिति देखें &rarr;</a>
                <a href="https://food.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">खाद्य विभाग पोर्टल</a>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 6. Schools & Education (schools.html)
    {
      filename: "schools.html",
      title: "विद्यालय एवं शिक्षा",
      description: "राजकीय उच्च माध्यमिक विद्यालय बामरला एवं प्राथमिक शालाओं की जानकारी, UDISE कोड, शाला दर्पण व छात्रवृत्ति सेवाएँ।",
      keywords: "बामरला स्कूल, राजकीय उच्च माध्यमिक विद्यालय बामरला, UDISE Bamarla, शाला दर्पण, शिक्षा बामरla, school barmer",
      canonicalUrl: `${SITE_URL}/schools.html`,
      breadcrumbs: [{ label: "सुविधाएँ व सेवाएँ", url: "government-schemes.html" }, { label: "विद्यालय एवं शिक्षा", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>विद्यालय एवं शिक्षा व्यवस्था — बामरला</h1>
            <div class="page-description">
              गाँव के राजकीय उच्च माध्यमिक विद्यालय, प्राथमिक शालाएँ, शाला दर्पण विवरण, मिड-डे मील व छात्रवृत्ति सेवाएँ।
            </div>
          </div>

          <div class="portal-card mb-4" style="border-top: 4px solid var(--primary-navy);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
              <div>
                <span class="status-badge verified mb-1">राजकीय विद्यालय (माध्यमिक/उच्च माध्यमिक)</span>
                <h2 style="font-size: 1.5rem; color: #002147; font-weight: 800;">
                  राजकीय उच्च माध्यमिक विद्यालय, बामरला
                </h2>
                <div style="font-size: 0.875rem; color: #4B5563; margin-top: 0.25rem;">
                  Govt. Senior Secondary School Bamarla (ब्लॉक/तहसील: सेड़वा, जिला: बाड़मेर, 344704)
                </div>
              </div>
              <div>
                <a href="https://rajshaladarpan.nic.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  शाला दर्पण पोर्टल पर देखें &rarr;
                </a>
              </div>
            </div>

            <div style="margin: 1.25rem 0; font-size: 0.95rem; color: #374151; line-height: 1.7;">
              <p>
                राजकीय उच्च माध्यमिक विद्यालय बामरला गाँव की सर्वोच्च शैक्षणिक संस्था है, जहाँ कक्षा 1 से 12 तक के छात्र-छात्राओं को निःशुल्क गुणवत्तापूर्ण शिक्षा प्रदान की जाती है। विद्यालय में कला (Arts) संकाय के साथ-साथ सह-शैक्षणिक गतिविधियाँ, खेलकूद, पुस्तकालय एवं सूचना प्रौद्योगिकी प्रयोगशाला उपलब्ध है।
              </p>
            </div>

            <div class="grid-3" style="background: #F8FAFC; padding: 1.25rem; border-radius: 8px; border: 1px solid #E2E8F0;">
              <div>
                <strong>UDISE कोड:</strong><br>
                <span style="font-size: 0.875rem; color: #1E3A8A;">शाला दर्पण पर सत्यापित उपलब्ध</span>
              </div>
              <div>
                <strong>माध्यम:</strong><br>
                <span style="font-size: 0.875rem; color: #1F2937;">हिंदी माध्यम (English विषय सहित)</span>
              </div>
              <div>
                <strong>संबद्धता:</strong><br>
                <span style="font-size: 0.875rem; color: #1F2937;">माध्यमिक शिक्षा बोर्ड राजस्थान (RBSE), अजमेर</span>
              </div>
              <div>
                <strong>उपलब्ध संकाय (Class 11-12):</strong><br>
                <span style="font-size: 0.875rem; color: #1F2937;">कला संकाय (Arts Stream)</span>
              </div>
              <div>
                <strong>प्रमुख सुविधाएँ:</strong><br>
                <span style="font-size: 0.875rem; color: #15803D;">मिड-डे मील, निःशुल्क पाठ्यपुस्तकें व साइकिल</span>
              </div>
              <div>
                <strong>विद्यालय प्रमुख:</strong><br>
                <span style="font-size: 0.875rem; color: #64748B;">प्रधानाचार्य (Principal) कार्यालय</span>
              </div>
            </div>
          </div>

          <!-- Primary Schools & Anganwadi -->
          <div class="mb-4">
            <h2 class="section-title mb-2">प्राथमिक विद्यालय एवं आंगनवाड़ी केंद्र</h2>
            <div class="grid-2 mt-2">
              <div class="portal-card">
                <h3 class="portal-card-title">राजकीय प्राथमिक शालाएँ (ढाणी स्तर)</h3>
                <p class="portal-card-body">
                  गाँव की दूरस्थ ढाणियों के छोटे बच्चों की सुलभ शिक्षा हेतु प्राथमिक विद्यालय संचालित हैं। यहाँ कक्षा 1 से 5 तक के बच्चों को पोषण युक्त पोषाहार (MDM), निःशुल्क यूनिफॉर्म एवं खेल सामग्री उपलब्ध कराई जाती है।
                </p>
                <div class="portal-card-footer">
                  <span class="status-badge verified">सत्यापित प्राथमिक शिक्षा</span>
                </div>
              </div>

              <div class="portal-card">
                <h3 class="portal-card-title">आंगनवाड़ी केंद्र (महिला एवं बाल विकास)</h3>
                <p class="portal-card-body">
                  गाँव में 0 से 6 वर्ष के नन्हे बच्चों हेतु पूर्व-प्राथमिक शिक्षा, गर्भवती एवं धात्री माताओं हेतु टीकाकरण, पोषण आहार एवं स्वास्थ्य जांच की सुविधा।
                </p>
                <div class="portal-card-footer">
                  <span class="status-badge verified">सत्यापित महिला-बाल कल्याण</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Scholarship Notice -->
          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 1.5rem; border-radius: 8px;">
            <h3 style="color: #1E3A8A; font-weight: 700; margin-bottom: 0.5rem;">विद्यार्थी छात्रवृत्ति एवं सरकारी प्रोत्साहन</h3>
            <ul style="padding-left: 1.25rem; font-size: 0.9375rem; line-height: 1.7; color: #1F2937;">
              <li><strong>पूर्व व उत्तर मैट्रिक छात्रवृत्ति:</strong> अनुसूचित जाति (SC), जनजाति (ST), अन्य पिछड़ा वर्ग (OBC) एवं आर्थिक कमजोर वर्ग (EWS) के छात्रों हेतु समाज कल्याण विभाग छात्रवृत्ति।</li>
              <li><strong>गार्गी पुरस्कार एवं बालिका प्रोत्साहन:</strong> कक्षा 10वीं व 12वीं में 75% से अधिक अंक प्राप्त करने वाली ग्रामीण बालिकाओं को आर्थिक प्रोत्साहन।</li>
              <li><strong>पालनहार योजना:</strong> अनाथ एवं विशेष आवश्यकता वाले बच्चों की शिक्षा हेतु प्रति माह ₹1,500 से ₹2,500 तक की सहायता।</li>
            </ul>
          </div>
        </div>
      `
    },

    // 7. Banks (banks.html)
    {
      filename: "banks.html",
      title: "बैंक एवं वित्तीय सेवाएँ (SBI बामरला)",
      description: "भारतीय स्टेट बैंक (SBI) बामरला शाखा, IFSC कोड खोज प्रक्रिया, बैंकिंग समय एवं वित्तीय साइबर सुरक्षा चेतावनी।",
      keywords: "SBI Bamarla, भारतीय स्टेट बैंक बामरला, SBI बामरला IFSC, Bank Bamarla Barmer, साइबर सुरक्षा बैंक, atm bamarla",
      canonicalUrl: `${SITE_URL}/banks.html`,
      breadcrumbs: [{ label: "सुविधाएँ व सेवाएँ", url: "government-schemes.html" }, { label: "बैंक एवं वित्तीय सेवाएँ", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>बैंक एवं वित्तीय सेवाएँ — भारतीय स्टेट बैंक (SBI)</h1>
            <div class="page-description">
              बामरला शाखा विवरण, खाता सेवाएँ, किसान क्रेडिट कार्ड (KCC) एवं साइबर वित्तीय धोखाधड़ी से बचाव मार्गदर्शन।
            </div>
          </div>

          <div style="background: #FEF2F2; border: 2px solid #EF4444; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
            <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-size: 1.75rem;">🚨</span>
              <h2 style="font-size: 1.25rem; color: #991B1B; font-weight: 800;">
                महत्वपूर्ण वित्तीय सुरक्षा चेतावनी (Financial Cyber Security Warning)
              </h2>
            </div>
            <p style="font-size: 1.05rem; font-weight: 700; color: #B91C1C; line-height: 1.6; margin-bottom: 0.5rem;">
              “बैंक कभी भी आपका OTP, ATM PIN या UPI PIN नहीं माँगता। अनजान व्यक्ति के कहने पर स्क्रीन साझा (AnyDesk, TeamViewer आदि) न करें और किसी अनजान QR कोड को स्कैन करके पैसे प्राप्त करने की कोशिश न करें।”
            </p>
            <div style="font-size: 0.875rem; color: #7F1D1D; line-height: 1.5;">
              यदि आपके साथ कोई ऑनलाइन धोखाधड़ी होती है, तो तुरंत <strong>राष्ट्रीय साइबर हेल्पलाइन 1930</strong> पर कॉल करें अथवा <strong>cybercrime.gov.in</strong> पर शिकायत दर्ज करें।
            </div>
          </div>

          <div class="portal-card mb-4" style="border-top: 4px solid #1E3A8A;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
              <div>
                <span class="status-badge verified mb-1">सार्वजनिक क्षेत्र का अग्रणी बैंक</span>
                <h2 style="font-size: 1.5rem; color: #002147; font-weight: 800;">
                  भारतीय स्टेट बैंक (State Bank of India - SBI)
                </h2>
                <div style="font-size: 0.95rem; color: #1E3A8A; font-weight: 600;">
                  शाखा: बामरला (Branch: Bamarla) | पता: BAMARLA, BARMER, RAJASTHAN, भारत (344704)
                </div>
              </div>
              <a href="https://sbi.co.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                आधिकारिक SBI पोर्टल &rarr;
              </a>
            </div>

            <div class="grid-3 mt-3" style="background: #F8FAFC; padding: 1.25rem; border-radius: 8px; border: 1px solid #E2E8F0;">
              <div>
                <strong>शाखा का नाम:</strong><br>
                <span>SBI बामरला (Bamarla)</span>
              </div>
              <div>
                <strong>IFSC कोड:</strong><br>
                <span style="font-size: 0.875rem; color: #1E3A8A; font-weight: 600;">पासबुक पर जांचें अथवा sbi.co.in शाखा खोजक देखें</span>
              </div>
              <div>
                <strong>शाखा कोड (Branch Code):</strong><br>
                <span style="font-size: 0.875rem; color: #4B5563;">आधिकारिक SBI निर्देशिका अनुसार</span>
              </div>
              <div>
                <strong>बैंक कार्य समय:</strong><br>
                <span style="font-size: 0.875rem;">सोमवार से शनिवार: प्रातः 10:00 से सायं 04:00 (द्वितीय व चतुर्थ शनिवार अवकाश)</span>
              </div>
              <div>
                <strong>एटीएम (ATM) सुविधा:</strong><br>
                <span style="font-size: 0.875rem; color: #15803D;">शाखा परिसर एवं निकटवर्ती बाजार</span>
              </div>
              <div>
                <strong>ग्राहक सेवा केंद्र (CSP):</strong><br>
                <span style="font-size: 0.875rem;">गाँव में कियोस्क बैंकिंग (BC Point) उपलब्ध</span>
              </div>
            </div>

            <div style="margin-top: 1.25rem; font-size: 0.875rem; color: #4B5563; line-height: 1.6;">
              <strong>उपलब्ध प्रमुख सेवाएँ:</strong> जनधन बचत खाता, किसान क्रेडिट कार्ड (KCC), फसल ऋण, अटल पेंशन योजना (APY), प्रधानमंत्री सुरक्षा बीमा (PMSBY) व जीवन ज्योति बीमा (PMJJBY), आधार सीडिंग व प्रत्यक्ष लाभ अंतरण (DBT)।
            </div>
          </div>

          <div class="grid-2 mb-4">
            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 8px;">
              <h3 style="font-size: 1.15rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">
                सुरक्षित बैंकिंग के 5 सुनहरे नियम
              </h3>
              <ul style="padding-left: 1.25rem; font-size: 0.875rem; line-height: 1.8; color: #374151;">
                <li>कभी भी किसी फोन कॉल पर बैंक अधिकारी बनकर बात करने वाले को कार्ड नंबर या सीवीवी (CVV) न बताएं।</li>
                <li>पैसे प्राप्त करने के लिए कभी भी यूपीआई पिन (UPI PIN) डालने की आवश्यकता नहीं होती।</li>
                <li>एटीएम मशीन में पैसे निकालते समय किसी अनजान व्यक्ति की सहायता न लें।</li>
                <li>बैंक खाते में अपना चालू मोबाइल नंबर हमेशा लिंक रखें।</li>
                <li>संदिग्ध एसएमएस या लॉटरी जीतने वाले लिंक पर कभी क्लिक न करें।</li>
              </ul>
            </div>

            <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 1.5rem; border-radius: 8px;">
              <h3 style="font-size: 1.15rem; color: #1E3A8A; font-weight: 700; margin-bottom: 0.75rem;">
                आपातकालीन वित्तीय संपर्क (Emergency Helplines)
              </h3>
              <div style="font-size: 0.875rem; line-height: 1.8; color: #1E3A8A;">
                <div><strong>राष्ट्रीय साइबर हेल्पलाइन:</strong> <a href="tel:1930" style="font-weight: 700; color: #DC2626;">1930 (Toll Free)</a></div>
                <div><strong>SBI टोल फ्री ग्राहक सेवा:</strong> 1800 1234 / 1800 2100</div>
                <div><strong>एटीएम कार्ड ब्लॉक SMS:</strong> BLOCK &lt;अंतिम 4 अंक&gt; भेजें 567676 पर</div>
                <div><strong>साइबर पोर्टल:</strong> <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 8. Health Services (health-services.html)
    {
      filename: "health-services.html",
      title: "स्वास्थ्य सेवाएँ एवं अस्पताल",
      description: "उप स्वास्थ्य केंद्र बामरला, प्राथमिक स्वास्थ्य केंद्र, 108 एम्बुलेंस एवं नजदीकी सरकारी अस्पताल विवरण।",
      keywords: "स्वास्थ्य केंद्र बामरला, सेड़वा अस्पताल, 108 एम्बुलेंस, आयुष्मान आरोग्य मंदिर, health services bamarla",
      canonicalUrl: `${SITE_URL}/health-services.html`,
      breadcrumbs: [{ label: "सुविधाएँ व सेवाएँ", url: "government-schemes.html" }, { label: "स्वास्थ्य सेवाएँ", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>स्वास्थ्य सेवाएँ एवं चिकित्सा केंद्र — बामरला</h1>
            <div class="page-description">
              गाँव का उप स्वास्थ्य केंद्र, आयुष्मान आरोग्य मंदिर, 108 एम्बुलेंस, मातृ एवं शिशु पोषण सेवाएँ तथा रेफरल अस्पताल।
            </div>
          </div>

          <div style="background: #FEF2F2; border: 1px solid #F87171; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="font-weight: 800; color: #991B1B; font-size: 1.1rem;">🚑 आपातकालीन चिकित्सा सेवा</div>
              <div style="font-size: 0.875rem; color: #7F1D1D;">सड़क दुर्घटना अथवा गंभीर प्रसव पीड़ा की स्थिति में तुरंत कॉल करें:</div>
            </div>
            <div style="display: flex; gap: 0.75rem;">
              <a href="tel:108" class="btn btn-saffron btn-sm">108 एम्बुलेंस</a>
              <a href="tel:104" class="btn btn-primary btn-sm">104 स्वास्थ्य परामर्श</a>
            </div>
          </div>

          <div class="grid-2 mb-4">
            <div class="portal-card">
              <span class="status-badge verified mb-1">गाँव स्तरीय प्राथमिक इकाई</span>
              <h2 class="portal-card-title">उप स्वास्थ्य केंद्र (आयुष्मान आरोग्य मंदिर), बामरला</h2>
              <p class="portal-card-body mt-2">
                <strong>स्थान:</strong> बामरला, सेड़वा (बाड़मेर - 344704)<br>
                <strong>स्टाफ:</strong> एएनएम (ANM) एवं आशा सहयोगिनी (ASHA)<br>
                <strong>नियमित सेवाएँ:</strong> गर्भवती महिलाओं की प्रसवपूर्व जांच (ANC), नवजात शिशुओं का नियमित टीकाकरण (बुधवार/गुरुवार), प्राथमिक उपचार व ओआरएस वितरण, गैर-संचारी रोग (बीपी/शुगर) स्क्रीनिंग।
              </p>
              <div class="portal-card-footer">
                <span style="font-size: 0.8125rem; color: #15803D; font-weight: 600;">निशुल्क दवा व जांच सुविधा</span>
              </div>
            </div>

            <div class="portal-card">
              <span class="status-badge verified mb-1">ब्लॉक रेफरल अस्पताल</span>
              <h2 class="portal-card-title">सामुदायिक स्वास्थ्य केंद्र (CHC), सेड़वा</h2>
              <p class="portal-card-body mt-2">
                <strong>स्थान:</strong> तहसील मुख्यालय सेड़वा (बामरला से नजदीकी CHC)<br>
                <strong>सुविधाएँ:</strong> 24x7 आपातकालीन एवं सुरक्षित संस्थागत प्रसव सुविधा, इनडोर वार्ड, पैथोलॉजी लैब, एक्स-रे, विशेषज्ञ चिकित्सक एवं एम्बुलेंस सेवा।<br>
                <strong>योजना:</strong> मुख्यमंत्री आयुष्मान आरोग्य योजना के तहत निःशुल्क ओपीडी/आईपीडी।
              </p>
              <div class="portal-card-footer">
                <a href="important-contacts.html" class="section-action-link">CHC संपर्क देखें &rarr;</a>
              </div>
            </div>
          </div>

          <section class="mb-4" style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 8px;">
            <h2 class="section-title mb-2">नियमित टीकाकरण सारणी (Immunization Schedule)</h2>
            <div class="table-responsive">
              <table class="portal-table">
                <thead>
                  <tr>
                    <th>आयु वर्ग</th>
                    <th>टीकाकरण (Vaccines)</th>
                    <th>किससे सुरक्षा</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>जन्म के समय</strong></td>
                    <td>BCG, OPV शून्य खुराक, हेपेटाइटिस B</td>
                    <td>टीबी, पोलियो, पीलिया</td>
                  </tr>
                  <tr>
                    <td><strong>6, 10, 14 सप्ताह</strong></td>
                    <td>पेंटावेलेंट, रोटावायरस, fIPV, PCV</td>
                    <td>गलघोंटू, काली खांसी, टिटनेस, निमोनिया व डायरिया</td>
                  </tr>
                  <tr>
                    <td><strong>9-12 माह</strong></td>
                    <td>MR (खसरा/रूबेला) 1st, जेई, विटामिन-ए</td>
                    <td>खसरा, अंधापन</td>
                  </tr>
                  <tr>
                    <td><strong>गर्भवती महिला</strong></td>
                    <td>Td-1, Td-2 अथवा Td बूस्टर</td>
                    <td>टिटनेस व डिप्थीरिया से जच्चा-बच्चा सुरक्षा</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      `
    },

    // 9. Public Facilities (public-facilities.html)
    {
      filename: "public-facilities.html",
      title: "जनसुविधाएँ (पानी, बिजली, राशन, डाक)",
      description: "बामरला गाँव में पीने का पानी (JJM), बिजली शिकायत केंद्र, डाकघर, राशन डीलर एवं ग्रामीण सड़कें।",
      keywords: "जनसुविधाएँ बामरला, पानी बामरला, जल जीवन मिशन, बिजली शिकायत बामरला, डाकघर 344704, राशन डीलर बामरla",
      canonicalUrl: `${SITE_URL}/public-facilities.html`,
      breadcrumbs: [{ label: "सुविधाएँ व सेवाएँ", url: "government-schemes.html" }, { label: "जनसुविधाएँ", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>गाँव की जनसुविधाएँ एवं सार्वजनिक अवसंरचना</h1>
            <div class="page-description">
              पेयजल व्यवस्था (JJM), विद्युत वितरण (JVVNL), डाक सेवाएँ, राशन वितरण (PDS) एवं पशु चिकित्सा सेवाएँ।
            </div>
          </div>

          <div class="grid-2 mb-4">
            <div class="portal-card">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">💧</div>
              <h2 class="portal-card-title">पीने का पानी (Drinking Water - JJM & GLR)</h2>
              <p class="portal-card-body">
                <strong>विभाग:</strong> जन स्वास्थ्य अभियांत्रिकी विभाग (PHED) बाड़मेर<br>
                <strong>व्यवस्था:</strong> जल जीवन मिशन (JJM) के तहत हर घर जल पाइपलाइन एवं ग्राम पंचायत द्वारा निर्मित भूतल जलाशय (GLR) व सार्वजनिक प्याऊ।<br>
                <strong>शिकायत दर्ज:</strong> जल आपूर्ति में बाधा या पाइपलाइन लीकेज हेतु राजस्थान संपर्क 181 पर शिकायत दर्ज कराएं।
              </p>
              <div class="portal-card-footer">
                <span class="status-badge verified">JJM प्रगतिरत</span>
              </div>
            </div>

            <div class="portal-card">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">⚡</div>
              <h2 class="portal-card-title">विद्युत आपूर्ति (Electricity - JVVNL)</h2>
              <p class="portal-card-body">
                <strong>निगम:</strong> जोधपुर विद्युत वितरण निगम लिमिटेड (JVVNL)<br>
                <strong>सब-स्टेशन / फीडर:</strong> सेड़वा वृत्त<br>
                <strong>बिजली फॉल्ट हेल्पलाइन:</strong> <a href="tel:18001806045" style="color: #1E3A8A; font-weight: 700;">1800-180-6045</a> (Toll Free) अथवा बिजली मित्र ऐप द्वारा ऑनलाइन शिकायत दर्ज करें।
              </p>
              <div class="portal-card-footer">
                <a href="https://energy.rajasthan.gov.in/jodhpur-discom" target="_blank" rel="noopener noreferrer" class="section-action-link">डिस्कॉम पोर्टल &rarr;</a>
              </div>
            </div>

            <div id="post-office" class="portal-card">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📮</div>
              <h2 class="portal-card-title">शाखा डाकघर (Branch Post Office - India Post)</h2>
              <p class="portal-card-body">
                <strong>पिन कोड:</strong> 344704<br>
                <strong>संबंधित उप डाकघर:</strong> सेड़वा SO | <strong>मुख्य डाकघर:</strong> बाड़मेर HO<br>
                <strong>सेवाएँ:</strong> स्पीड पोस्ट, रजिस्टर्ड डाक, सुकन्या समृद्धि खाता, डाक जीवन बीमा (PLI/RPLI), आधार मोबाइल नंबर अपडेशन एवं इंडिया पोस्ट पेमेंट्स बैंक (IPPB) खाता।
              </p>
              <div class="portal-card-footer">
                <a href="https://www.indiapost.gov.in" target="_blank" rel="noopener noreferrer" class="section-action-link">India Post पोर्टल &rarr;</a>
              </div>
            </div>

            <div class="portal-card">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🌾</div>
              <h2 class="portal-card-title">उचित मूल्य दुकान / राशन डीलर (PDS Shop)</h2>
              <p class="portal-card-body">
                <strong>विभाग:</strong> खाद्य एवं नागरिक आपूर्ति विभाग, राजस्थान<br>
                <strong>वितरण प्रणाली:</strong> बायोमेट्रिक पीओएस (PoS) मशीन द्वारा पारदर्शी राशन वितरण।<br>
                <strong>वस्तुएं:</strong> राष्ट्रीय खाद्य सुरक्षा (NFSA) गेहूं एवं समय-समय पर घोषित आवश्यक सामग्री।<br>
                <strong>शिकायत:</strong> राशन कम मिलने या मशीन न चलने पर टोल फ्री 181 पर संपर्क करें।
              </p>
              <div class="portal-card-footer">
                <a href="https://food.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="section-action-link">खाद्य सुरक्षा पोर्टल &rarr;</a>
              </div>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 8px;">
            <h2 class="section-title mb-2">पशुपालन एवं पशु चिकित्सा सेवाएँ (Veterinary Services)</h2>
            <p style="font-size: 0.9375rem; color: #374151; line-height: 1.6; margin-bottom: 1rem;">
              थार मरुस्थल में गोवंश, भेड़-बकरी, ऊंट एवं भैंस पालन ग्रामीणों की आजीविका की रीढ़ है। मौसमी रोगों (जैसे गलघोंटू, लंपी, खुरपका-मुंहपका) से बचाव हेतु पशुपालन विभाग द्वारा नियमित निःशुल्क टीकाकरण शिविर आयोजित किए जाते हैं।
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <div style="background: #F8FAFC; padding: 0.75rem 1rem; border-radius: 6px; border: 1px solid #E2E8F0; font-size: 0.875rem;">
                <strong>नजदीकी पशु चिकित्सालय:</strong> राजकीय पशु औषधालय सेड़वा
              </div>
              <div style="background: #F8FAFC; padding: 0.75rem 1rem; border-radius: 6px; border: 1px solid #E2E8F0; font-size: 0.875rem;">
                <strong>कामधेनु बीमा योजना:</strong> दुधारू पशुओं का निःशुल्क बीमा
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 10. Development Works (development-works.html)
    {
      filename: "development-works.html",
      title: "विकास कार्य सूची एवं प्रगति रजिस्टर",
      description: "बामरला गाँव के पूर्ण, प्रगतिरत एवं प्रस्तावित विकास कार्यों का पारदर्शी रजिस्टर, सड़क, पानी, स्कूल व पंचायत भवन कार्य।",
      keywords: "विकास कार्य बामरला, CC Road Bamarla, ग्राम पंचायत विकास, ई-ग्राम स्वराज, development works barmer",
      canonicalUrl: `${SITE_URL}/development-works.html`,
      breadcrumbs: [{ label: "विकास व सहयोग", url: "" }, { label: "विकास कार्य", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>गाँव के विकास कार्य — पारदर्शी प्रगति रजिस्टर</h1>
            <div class="page-description">
              ग्राम पंचायत बामरला एवं आदर्श बामरला में स्वीकृत, प्रगतिरत एवं पूर्ण सार्वजनिक निर्माण कार्यों का ब्यौरा।
            </div>
          </div>

          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.875rem; color: #1E3A8A;">
            <strong>पारदर्शिता नीति:</strong> इस रजिस्टर में केवल वे कार्य प्रदर्शित किए गए हैं जिनका भौतिक अस्तित्व अथवा सार्वजनिक अवलोकन उपलब्ध है। किसी भी कार्य की वित्तीय राशि व स्वीकृति आदेश ई-ग्राम स्वराज (egramswaraj.gov.in) पर आधिकारिक सत्यापन के अधीन हैं।
          </div>

          <div class="filter-btn-group">
            <button class="filter-btn active" onclick="filterDevTable('all', this)">सभी कार्य (All)</button>
            <button class="filter-btn" onclick="filterDevTable('road', this)">सड़क निर्माण (Roads)</button>
            <button class="filter-btn" onclick="filterDevTable('water', this)">पेयजल (Water Supply)</button>
            <button class="filter-btn" onclick="filterDevTable('education', this)">शिक्षा अवसंरचना (Schools)</button>
            <button class="filter-btn" onclick="filterDevTable('lighting', this)">स्ट्रीट लाइट (Lighting)</button>
          </div>

          <div class="table-responsive">
            <table class="portal-table">
              <thead>
                <tr>
                  <th>कार्य का नाम</th>
                  <th>स्थान / वार्ड</th>
                  <th>श्रेणी</th>
                  <th>विभाग / योजना</th>
                  <th>स्थिति</th>
                  <th>सत्यापन टिप्पणी</th>
                </tr>
              </thead>
              <tbody>
                <tr class="dev-work-row" data-category="road">
                  <td><strong>सीसी रोड व नाली निर्माण</strong></td>
                  <td>मुख्य स्टैंड से राजकीय विद्यालय तक</td>
                  <td>सड़क निर्माण</td>
                  <td>ग्राम पंचायत / राज्य वित्त आयोग</td>
                  <td><span class="status-badge verified">पूर्ण</span></td>
                  <td>सड़क उपयोग में है; अभिलेख सत्यापन प्रतीक्षारत</td>
                </tr>
                <tr class="dev-work-row" data-category="water">
                  <td><strong>JJM मुख्य पाइपलाइन व GLR टंकी निर्माण</strong></td>
                  <td>बामरला मुख्य बस्ती एवं ढाणी क्षेत्र</td>
                  <td>पेयजल</td>
                  <td>जल जीवन मिशन (PHED)</td>
                  <td><span class="status-badge pending">प्रगतिरत</span></td>
                  <td>घरेलू कनेक्शन कार्य प्रगति पर</td>
                </tr>
                <tr class="dev-work-row" data-category="education">
                  <td><strong>रा.उ.मा.वि. चारदीवारी एवं मुख्य गेट</strong></td>
                  <td>विद्यालय परिसर बामरला</td>
                  <td>शिक्षा</td>
                  <td>समग्र शिक्षा अभियान (समसा)</td>
                  <td><span class="status-badge verified">पूर्ण</span></td>
                  <td>विद्यालय प्रांगण सुरक्षित</td>
                </tr>
                <tr class="dev-work-row" data-category="lighting">
                  <td><strong>सोलर हाई-मास्ट व स्ट्रीट लाइट स्थापना</strong></td>
                  <td>सार्वजनिक बस स्टैंड व मुख्य चौक</td>
                  <td>स्ट्रीट लाइट</td>
                  <td>पंचायत समिति सेड़वा</td>
                  <td><span class="status-badge partial">आंशिक पूर्ण</span></td>
                  <td>रखरखाव समीक्षाधीन</td>
                </tr>
                <tr class="dev-work-row" data-category="road">
                  <td><strong>ग्रेवल सड़क संपर्क सुदृढ़ीकरण</strong></td>
                  <td>बामरला से समीपवर्ती ढाणी संपर्क मार्ग</td>
                  <td>सड़क निर्माण</td>
                  <td>मनरेगा (MGNREGA)</td>
                  <td><span class="status-badge verified">पूर्ण</span></td>
                  <td>आवागमन सुगम</td>
                </tr>
                <tr class="dev-work-row" data-category="water">
                  <td><strong>सार्वजनिक जल कुंड / टांका निर्माण</strong></td>
                  <td>सार्वजनिक चारागाह व गोचर भूमि</td>
                  <td>पेयजल</td>
                  <td>ग्राम पंचायत निधि</td>
                  <td><span class="status-badge verified">पूर्ण</span></td>
                  <td>पशुधन व राहगीरों हेतु उपयोगी</td>
                </tr>
                <tr class="dev-work-row" data-category="education">
                  <td><strong>अतिरिक्त कक्षा-कक्ष एवं बालिका शौचालय</strong></td>
                  <td>राजकीय विद्यालय बामरला</td>
                  <td>शिक्षा</td>
                  <td>शिक्षा विभाग राजस्थान</td>
                  <td><span class="status-badge verified">पूर्ण</span></td>
                  <td>स्वच्छता व बैठक व्यवस्था सुदृढ़</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // 11. Bhamashah (bhamashah.html)
    {
      filename: "bhamashah.html",
      title: "भामाशाह एवं दानदाता सम्मान",
      description: "गाँव विकास, विद्यालय, पेयजल एवं सार्वजनिक कार्यों में निस्वार्थ सहयोग करने वाले भामाशाहों का सम्मान एवं पारदर्शी ब्यौरा।",
      keywords: "भामाशाह बामरला, दानदाता बामरला, ग्राम सहयोग, bhamashah bamarla, social contributors barmer",
      canonicalUrl: `${SITE_URL}/bhamashah.html`,
      breadcrumbs: [{ label: "विकास व सहयोग", url: "development-works.html" }, { label: "भामाशाह", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>गाँव के भामाशाह एवं सार्वजनिक दानदाता सम्मान</h1>
            <div class="page-description">
              गाँव के विकास, विद्यालय, स्वास्थ्य, गौसेवा एवं पेयजल कार्यों में निस्वार्थ योगदान देने वाले प्रेरणादायी महानुभाव।
            </div>
          </div>

          <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 1.25rem; border-radius: 8px; margin-bottom: 2rem;">
            <h3 style="color: #92400E; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem;">
              जनसहयोग का पावन उद्देश्य (Policy & Principles)
            </h3>
            <p style="font-size: 0.9375rem; color: #78350F; line-height: 1.6;">
              यह मंच गाँव के प्रत्येक उस नागरिक का सम्मान करता है जिसने गाँव के सार्वजनिक हित में अपनी मेहनत, समय अथवा धन का योगदान दिया है। यह सूची किसी जातिगत अथवा सामाजिक श्रेष्ठता का नहीं, बल्कि समाज सेवा के जज्बे का प्रतीक है। किसी भी दानदाता का विवरण उनकी स्पष्ट सहमति के उपरांत ही प्रकाशित किया जाता है।
            </p>
          </div>

          <div class="grid-3 mb-4">
            <div class="portal-card" style="border-top: 4px solid var(--saffron);">
              <img src="assets/images/bhamashah-placeholder.jpg" alt="भामाशाह प्रारूप" style="width: 90px; height: 90px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; border: 2px solid #F59E0B;" />
              <div style="text-align: center; margin-bottom: 0.75rem;">
                <span class="status-badge verified">प्रारूप प्रविष्टि</span>
                <h3 style="color: #002147; font-size: 1.15rem; margin-top: 0.35rem;">[दानदाता का नाम]</h3>
                <div style="font-size: 0.8125rem; color: #64748B;">निवासी: बामरला / प्रवासी</div>
              </div>
              <div class="portal-card-body" style="font-size: 0.875rem;">
                “[दानदाता का नाम] ने [सार्वजनिक कार्य/विद्यालय विकास] के लिए ₹[सत्यापित राशि अथवा सामग्री] का निस्वार्थ योगदान दिया।”
              </div>
              <div class="portal-card-footer">
                <span style="font-size: 0.75rem; color: #64748B;">वर्ष: 2026 | सहमति उपरांत दर्ज</span>
              </div>
            </div>

            <div class="portal-card" style="border-top: 4px solid var(--saffron);">
              <img src="assets/images/bhamashah-placeholder.jpg" alt="भामाशाह प्रारूप" style="width: 90px; height: 90px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; border: 2px solid #F59E0B;" />
              <div style="text-align: center; margin-bottom: 0.75rem;">
                <span class="status-badge verified">प्रारूप प्रविष्टि</span>
                <h3 style="color: #002147; font-size: 1.15rem; margin-top: 0.35rem;">[ग्राम सहयोग समिति]</h3>
                <div style="font-size: 0.8125rem; color: #64748B;">बामरला क्षेत्र</div>
              </div>
              <div class="portal-card-body" style="font-size: 0.875rem;">
                “विद्यालय परिसर में बालिकाओं हेतु वाटर कूलर एवं बैठक व्यवस्था सामग्री का जनसहयोग से समर्पण।”
              </div>
              <div class="portal-card-footer">
                <span style="font-size: 0.75rem; color: #64748B;">वर्ष: 2026 | सहमति उपरांत दर्ज</span>
              </div>
            </div>

            <div class="portal-card" style="border-top: 4px solid var(--saffron);">
              <img src="assets/images/bhamashah-placeholder.jpg" alt="भामाशाह प्रारूप" style="width: 90px; height: 90px; border-radius: 50%; object-fit: cover; margin: 0 auto 1rem; border: 2px solid #F59E0B;" />
              <div style="text-align: center; margin-bottom: 0.75rem;">
                <span class="status-badge verified">प्रारूप प्रविष्टि</span>
                <h3 style="color: #002147; font-size: 1.15rem; margin-top: 0.35rem;">[पर्यावरण प्रेमी भामाशाह]</h3>
                <div style="font-size: 0.8125rem; color: #64748B;">बामरला, बाड़मेर</div>
              </div>
              <div class="portal-card-body" style="font-size: 0.875rem;">
                “सार्वजनिक मार्गों एवं विद्यालय में 100 फलदार व छायादार पौधे एवं सुरक्षा जाली (ट्री-गार्ड) भेंट।”
              </div>
              <div class="portal-card-footer">
                <span style="font-size: 0.75rem; color: #64748B;">वर्ष: 2026 | सहमति उपरांत दर्ज</span>
              </div>
            </div>
          </div>

          <!-- Add Contribution Callout -->
          <div style="background: #F1F5F9; border: 2px dashed #CBD5E1; padding: 2rem; border-radius: 8px; text-align: center;">
            <h3 style="color: #002147; font-weight: 700; margin-bottom: 0.5rem;">
              क्या आपने अथवा आपके परिवार ने गाँव विकास में कोई योगदान दिया है?
            </h3>
            <p style="font-size: 0.9375rem; color: #4B5563; max-width: 600px; margin: 0 auto 1rem;">
              यदि आप अपने अथवा किसी परिचित के सार्वजनिक योगदान को इस मंच पर दर्ज कराना चाहते हैं, तो विवरण व साक्ष्य के साथ हमें प्रेषित करें।
            </p>
            <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
              <a href="help-support.html" class="btn btn-saffron">योगदान की जानकारी जोड़ें &rarr;</a>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%AA%E0%A4%B0%20%E0%A4%AD%E0%A4%BE%E0%A4%AE%E0%A4%BE%E0%A4%B6%E0%A4%BE%E0%A4%B9%20%E0%A4%B8%E0%A4%B9%E0%A4%AF%E0%A5%8B%E0%A4%97%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%9C%20%E0%A4%95%E0%A4%B0%E0%A4%BE%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #FFFFFF; font-weight: 700;">
                💬 WhatsApp पर सहयोग विवरण भेजें
              </a>
            </div>
          </div>
        </div>
      `
    },

    // 12. News (news.html)
    {
      filename: "news.html",
      title: "गाँव के समाचार",
      description: "बामरला गाँव एवं सेड़वा क्षेत्र के सत्यापित सार्वजनिक समाचार, सरकारी घोषणाएँ एवं विकास अपडेट।",
      keywords: "समाचार बामरला, Bamarla news, बाड़मेर ग्रामीण समाचार, सेड़वा समाचार, ग्राम समाचार",
      canonicalUrl: `${SITE_URL}/news.html`,
      breadcrumbs: [{ label: "सूचना व समाचार", url: "notices.html" }, { label: "समाचार", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>गाँव के समाचार एवं सार्वजनिक गतिविधियाँ</h1>
            <div class="page-description">
              बामरला, सेड़वा एवं बाड़मेर क्षेत्र की प्रमाणित सार्वजनिक सूचनाएँ एवं विकास गतिविधियाँ।
            </div>
          </div>

          <div class="filter-btn-group">
            <button class="filter-btn active" onclick="filterNewsList('all', this)">सभी समाचार</button>
            <button class="filter-btn" onclick="filterNewsList('panchayat', this)">ग्राम पंचायत</button>
            <button class="filter-btn" onclick="filterNewsList('schemes', this)">सरकारी योजना</button>
            <button class="filter-btn" onclick="filterNewsList('education', this)">शिक्षा</button>
            <button class="filter-btn" onclick="filterNewsList('development', this)">विकास कार्य</button>
          </div>

          <div class="grid-2 mb-4">
            <div class="portal-card news-item-card" data-category="panchayat">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge verified">सत्यापित सार्वजनिक समाचार</span>
                <span style="font-size: 0.8125rem; color: #64748B;">अक्टूबर 2026</span>
              </div>
              <h2 class="portal-card-title">बामरला ग्राम डिजिटल पोर्टल का स्वैच्छिक शुभारंभ</h2>
              <p class="portal-card-body mt-1">
                गाँव के युवा विकाश कुमार द्वारा बामरला गाँव की सार्वजनिक जानकारी, विकास कार्यों, विद्यालय एवं सरकारी योजनाओं को ऑनलाइन उपलब्ध कराने हेतु इस स्वतंत्र डिजिटल पोर्टल का निर्माण किया गया है।
              </p>
              <div class="portal-card-footer">
                <a href="about-portal.html" class="section-action-link">पूरी रिपोर्ट पढ़ें &rarr;</a>
              </div>
            </div>

            <div class="portal-card news-item-card" data-category="schemes">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge verified">कृषि विभाग</span>
                <span style="font-size: 0.8125rem; color: #64748B;">अक्टूबर 2026</span>
              </div>
              <h2 class="portal-card-title">रबी फसल 2026-27: किसान क्रेडिट कार्ड (KCC) नवीनीकरण शिविर</h2>
              <p class="portal-card-body mt-1">
                रबी की बुवाई को ध्यान में रखते हुए भारतीय स्टेट बैंक (SBI) द्वारा किसान बंधुओं के केसीसी खातों के नवीनीकरण एवं नवीन किसान क्रेडिट कार्ड जारी करने का विशेष परामर्श उपलब्ध कराया जा रहा है।
              </p>
              <div class="portal-card-footer">
                <a href="banks.html" class="section-action-link">बैंक विवरण देखें &rarr;</a>
              </div>
            </div>

            <div class="portal-card news-item-card" data-category="education">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge verified">शिक्षा विभाग</span>
                <span style="font-size: 0.8125rem; color: #64748B;">अक्टूबर 2026</span>
              </div>
              <h2 class="portal-card-title">राजकीय उच्च माध्यमिक विद्यालय में कैरियर मार्गदर्शन सत्र</h2>
              <p class="portal-card-body mt-1">
                कक्षा 10वीं व 12वीं के विद्यार्थियों हेतु प्रतियोगी परीक्षाओं, उच्च अध्ययन, कृषि विज्ञान एवं डिजिटल साक्षरता पर विशेष मार्गदर्शन सत्र आयोजित किए जाने का प्रस्ताव है।
              </p>
              <div class="portal-card-footer">
                <a href="schools.html" class="section-action-link">विद्यालय पृष्ठ &rarr;</a>
              </div>
            </div>

            <div class="portal-card news-item-card" data-category="development">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge pending">समीक्षाधीन</span>
                <span style="font-size: 0.8125rem; color: #64748B;">अक्टूबर 2026</span>
              </div>
              <h2 class="portal-card-title">जल जीवन मिशन के तहत पेयजल पाइपलाइन टेस्टिंग कार्य</h2>
              <p class="portal-card-body mt-1">
                गाँव की मुख्य बस्ती एवं निकटवर्ती ढाणियों में नल से जल पहुंचाने के तहत पाइपलाइन बिछाने एवं जलदबाव टेस्टिंग का कार्य तकनीकी दल द्वारा किया जा रहा है।
              </p>
              <div class="portal-card-footer">
                <a href="development-works.html" class="section-action-link">विकास कार्य देखें &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 13. Notices (notices.html)
    {
      filename: "notices.html",
      title: "सार्वजनिक सूचना पट्ट",
      description: "ग्रामसभा बैठक, सरकारी शिविर, आवेदन की अंतिम तिथियाँ एवं बामरला ग्राम पंचायत की सार्वजनिक घोषणाएँ।",
      keywords: "सूचना पट्ट बामरला, notices bamarla, ग्रामसभा सूचना, सरकारी शिविर बामरला, सार्वजनिक सूचना",
      canonicalUrl: `${SITE_URL}/notices.html`,
      breadcrumbs: [{ label: "सूचना व समाचार", url: "" }, { label: "सूचना पट्ट", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>सार्वजनिक सूचना पट्ट (Public Notices)</h1>
            <div class="page-description">
              ग्रामसभा, विशेष शिविर, आवेदन की अंतिम तिथि एवं सरकारी विभागों की महत्वपूर्ण सार्वजनिक घोषणाएँ।
            </div>
          </div>

          <div class="grid-2 mb-4">
            <div class="portal-card" style="border-left: 4px solid var(--saffron);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge pending">तिथि लंबित</span>
                <span style="font-size: 0.8125rem; color: #64748B;">ग्राम पंचायत बामरला</span>
              </div>
              <h2 class="portal-card-title">वार्षिक ग्रामसभा साधारण बैठक</h2>
              <p class="portal-card-body mt-1">
                गाँव के समस्त निवासियों को सूचित किया जाता है कि आगामी ग्रामसभा में गाँव के वार्षिक बजट, नरेगा श्रम कार्ययोजना तथा नव स्वीकृत विकास कार्यों का अनुमोदन किया जाएगा। पंचायत द्वारा आधिकारिक तिथि घोषित होते ही यहाँ अद्यतन की जाएगी।
              </p>
              <div class="portal-card-footer">
                <span style="font-size: 0.8125rem; color: #64748B;">स्थान: ग्राम पंचायत भवन</span>
                <a href="panchayat.html" class="btn btn-outline btn-sm">पंचायत विवरण</a>
              </div>
            </div>

            <div class="portal-card" style="border-left: 4px solid var(--success-green);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge verified">सत्यापित निर्देश</span>
                <span style="font-size: 0.8125rem; color: #64748B;">कृषि एवं किसान कल्याण</span>
              </div>
              <h2 class="portal-card-title">पीएम-किसान ई-केवाईसी (e-KYC) अंतिम स्मरण पत्र</h2>
              <p class="portal-card-body mt-1">
                पीएम-किसान सम्मान निधि योजना के सभी लाभार्थियों हेतु आधार आधारित बायोमेट्रिक ई-केवाईसी करवाना अनिवार्य है। जिन किसानों का बैंक खाता आधार से लिंक नहीं है, वे तुरंत अपने बैंक शाखा अथवा डाकघर में डीबीटी इनेबल करवाएं।
              </p>
              <div class="portal-card-footer">
                <a href="https://pmkisan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">pmkisan.gov.in &rarr;</a>
              </div>
            </div>

            <div class="portal-card" style="border-left: 4px solid var(--secondary-blue);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge verified">सत्यापित निर्देश</span>
                <span style="font-size: 0.8125rem; color: #64748B;">खाद्य विभाग</span>
              </div>
              <h2 class="portal-card-title">राशन कार्ड ई-केवाईसी (NFSA Ration Card)</h2>
              <p class="portal-card-body mt-1">
                खाद्य सुरक्षा योजना (NFSA) के अंतर्गत गेहूं प्राप्त करने वाले सभी परिवारों के प्रत्येक सदस्य का राशन डीलर की पोस मशीन (PoS Machine) पर फिंगरप्रिंट/आइरिस ई-केवाईसी सत्यापन जारी है।
              </p>
              <div class="portal-card-footer">
                <a href="public-facilities.html" class="btn btn-outline btn-sm">उचित मूल्य दुकान विवरण</a>
              </div>
            </div>

            <div class="portal-card" style="border-left: 4px solid var(--deep-orange);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <span class="status-badge verified">सत्यापित निर्देश</span>
                <span style="font-size: 0.8125rem; color: #64748B;">सामाजिक न्याय विभाग</span>
              </div>
              <h2 class="portal-card-title">सामाजिक सुरक्षा पेंशन वार्षिक भौतिक सत्यापन</h2>
              <p class="portal-card-body mt-1">
                पेंशनधारियों को अपनी निरंतर पेंशन चालू रखने हेतु प्रतिवर्ष बायोमेट्रिक अथवा 'RajSSP' मोबाइल ऐप द्वारा चेहरा पहचान (Face Recognition) से भौतिक सत्यापन करवाना अनिवार्य है।
              </p>
              <div class="portal-card-footer">
                <a href="https://ssp.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">RajSSP पोर्टल &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 14. Events (events.html)
    {
      filename: "events.html",
      title: "सार्वजनिक कार्यक्रम एवं आयोजन",
      description: "बामरला गाँव में राष्ट्रीय पर्व, स्वास्थ्य जांच शिविर, खेलकूद प्रतियोगिताएँ एवं सामाजिक आयोजन।",
      keywords: "कार्यक्रम बामरला, events bamarla, स्वास्थ्य शिविर, खेलकूद बामरला, सार्वजनिक उत्सव",
      canonicalUrl: `${SITE_URL}/events.html`,
      breadcrumbs: [{ label: "सूचना व समाचार", url: "notices.html" }, { label: "कार्यक्रम", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>सार्वजनिक कार्यक्रम एवं गाँव के उत्सव</h1>
            <div class="page-description">
              राष्ट्रीय पर्व, निःशुल्क स्वास्थ्य शिविर, ग्रामीण खेलकूद प्रतियोगिताएँ एवं सामाजिक जागरूकता अभियान।
            </div>
          </div>

          <div class="grid-3 mb-4">
            <div class="portal-card">
              <span class="status-badge verified mb-1">वार्षिक राष्ट्रीय पर्व</span>
              <h2 class="portal-card-title">गणतंत्र दिवस एवं स्वतंत्रता दिवस समारोह</h2>
              <p class="portal-card-body mt-1">
                राजकीय उच्च माध्यमिक विद्यालय परिसर में 26 जनवरी एवं 15 अगस्त को ध्वजारोहण, राष्ट्रगान, प्रभात फेरी, सांस्कृतिक प्रस्तुतियां एवं मेधावी छात्रों का सम्मान।
              </p>
              <div class="portal-card-footer">
                <span style="font-size: 0.8125rem; color: #1E3A8A; font-weight: 600;">स्थान: विद्यालय प्रांगण</span>
              </div>
            </div>

            <div class="portal-card">
              <span class="status-badge verified mb-1">स्वास्थ्य शिविर</span>
              <h2 class="portal-card-title">निःशुल्क नेत्र जांच एवं स्वास्थ्य परीक्षण शिविर</h2>
              <p class="portal-card-body mt-1">
                सामुदायिक स्वास्थ्य केंद्र सेड़वा एवं जिला अंधता निवारण समिति के सहयोग से बुजुर्गों हेतु मोतियाबिंद जांच एवं चश्मा वितरण शिविर।
              </p>
              <div class="portal-card-footer">
                <span style="font-size: 0.8125rem; color: #15803D; font-weight: 600;">स्थान: उप स्वास्थ्य केंद्र</span>
              </div>
            </div>

            <div class="portal-card">
              <span class="status-badge verified mb-1">ग्रामीण खेलकूद</span>
              <h2 class="portal-card-title">राजीव गांधी ग्रामीण ओलंपिक खेल</h2>
              <p class="portal-card-body mt-1">
                गाँव के युवाओं, महिलाओं एवं बुजुर्गों हेतु कबड्डी, खो-खो, रस्साकशी, वॉलीबॉल व क्रिकेट प्रतियोगिताएँ। खेल भावना व स्वास्थ्य संवर्धन।
              </p>
              <div class="portal-card-footer">
                <span style="font-size: 0.8125rem; color: #D97706; font-weight: 600;">स्थान: खेल मैदान</span>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 15. Gallery (gallery.html)
    {
      filename: "gallery.html",
      title: "गाँव की चित्र दीर्घा (Gallery)",
      description: "बामरला गाँव की मरुधरा, विद्यालय परिसर, विकास कार्य एवं सामुदायिक जीवन की सुंदर तस्वीरें।",
      keywords: "चित्र दीर्घा बामरला, फोटो बामरला, gallery bamarla, village photos barmer, बामरला चित्र",
      canonicalUrl: `${SITE_URL}/gallery.html`,
      breadcrumbs: [{ label: "विकास व सहयोग", url: "development-works.html" }, { label: "चित्र दीर्घा", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>गाँव की चित्र दीर्घा (Photo Gallery)</h1>
            <div class="page-description">
              बामरला की मरुधरा, विद्यालय, विकास कार्य, कृषि परिवेश एवं लोक संस्कृति की सचित्र झलकियाँ।
            </div>
          </div>

          <div class="grid-3 mb-4">
            <div class="portal-card">
              <img src="assets/images/village-cover.jpg" alt="बामरला गाँव का विहंगम दृश्य" style="width: 100%; height: 220px; object-fit: cover; border-radius: 6px; margin-bottom: 0.75rem;" />
              <h3 style="font-size: 1.1rem; color: #002147; font-weight: 700;">बामरला का विहंगम प्राकृतिक परिवेश</h3>
              <p style="font-size: 0.8125rem; color: #64748B; margin-top: 0.25rem;">
                स्वच्छ खुला आकाश, मखमली रेत के धोरे, पक्की सड़कें एवं शांत मरुस्थलीय वातावरण।
              </p>
            </div>

            <div class="portal-card">
              <img src="${OFFICIAL_LOGO_URL}" alt="बामरला गाँव का आधिकारिक लोगो" style="width: 100%; height: 220px; object-fit: contain; background: #FFFFFF; border-radius: 6px; margin-bottom: 0.75rem; padding: 1rem;" onerror="this.onerror=null;this.src='assets/images/logo.png';" />
              <h3 style="font-size: 1.1rem; color: #002147; font-weight: 700;">बामरला गाँव का आधिकारिक लोगो</h3>
              <p style="font-size: 0.8125rem; color: #64748B; margin-top: 0.25rem;">
                गाँव की आधिकारिक डिजिटल पहचान (Official Bamarla Village Logo).
              </p>
            </div>

            <div class="portal-card">
              <img src="assets/images/share-preview.jpg" alt="डिजिटल पहल विस्तार" style="width: 100%; height: 220px; object-fit: cover; border-radius: 6px; margin-bottom: 0.75rem;" />
              <h3 style="font-size: 1.1rem; color: #002147; font-weight: 700;">गाँव की डिजिटल कनेक्टिविटी</h3>
              <p style="font-size: 0.8125rem; color: #64748B; margin-top: 0.25rem;">
                ई-मित्र, बैंकिंग कियोस्क, जन सूचना एवं शिक्षा तक सभी की समान पहुँच।
              </p>
            </div>
          </div>

          <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; padding: 2rem; border-radius: 8px; text-align: center;">
            <h3 style="color: #002147; font-weight: 700; margin-bottom: 0.5rem;">
              गाँव की ऐतिहासिक अथवा सार्वजनिक तस्वीरें साझा करें
            </h3>
            <p style="font-size: 0.9375rem; color: #4B5563; max-width: 600px; margin: 0 auto 1rem;">
              यदि आपके पास बामरला गाँव के सार्वजनिक उत्सवों, विद्यालय कार्यक्रमों अथवा विकास कार्यों की उच्च गुणवत्ता वाली तस्वीरें हैं, तो पोर्टल पर प्रकाशन हेतु WhatsApp पर भेजें।
            </p>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%97%E0%A5%88%E0%A4%B2%E0%A4%B0%E0%A5%80%20%E0%A4%B9%E0%A5%87%E0%A4%A4%E0%A5%81%20%E0%A4%AB%E0%A5%8B%E0%A4%9F%E0%A5%8B%20%E0%A4%B8%E0%A4%BE%E0%A4%9D%E0%A4%BE%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn btn-sm" style="background: #25D366; color: #FFFFFF; font-weight: 700;">
              💬 WhatsApp पर तस्वीरें भेजें
            </a>
          </div>
        </div>
      `
    },

    // 16. Village Directory (village-directory.html)
    {
      filename: "village-directory.html",
      title: "ग्राम डायरेक्टरी",
      description: "बामरला के सभी सार्वजनिक कार्यालयों, विद्यालयों, बैंक, स्वास्थ्य केंद्र व ई-मित्र सेवा केंद्रों की संपूर्ण टेलीफोन निर्देशिका।",
      keywords: "ग्राम डायरेक्टरी बामरला, village directory bamarla, टेलीफोन डायरेक्टरी, सार्वजनिक नंबर बामरला, contact barmer",
      canonicalUrl: `${SITE_URL}/village-directory.html`,
      breadcrumbs: [{ label: "विकास व सहयोग", url: "development-works.html" }, { label: "ग्राम डायरेक्टरी", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>सार्वजनिक ग्राम टेलीफोन निर्देशिका (Village Directory)</h1>
            <div class="page-description">
              BAMARLA, BARMER, RAJASTHAN, भारत (344704) के प्रमुख सार्वजनिक कार्यालय, शिक्षा संस्थान, स्वास्थ्य केंद्र एवं सेवाएँ।
            </div>
          </div>

          <div style="background: #EFF6FF; border: 1px solid #BFDBFE; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.875rem; color: #1E3A8A;">
            <strong>गोपनीयता नियम:</strong> यह डायरेक्टरी केवल सार्वजनिक कार्यालयों, संस्थाओं एवं अधिकृत हेल्पलाइन नंबरों को प्रदर्शित करती है। किसी भी ग्रामीण के व्यक्तिगत मोबाइल नंबर अथवा निजी विवरण यहाँ प्रकाशित नहीं किए जाते।
          </div>

          <div class="table-responsive mb-4">
            <table class="portal-table">
              <thead>
                <tr>
                  <th>संस्था / कार्यालय का नाम</th>
                  <th>श्रेणी</th>
                  <th>स्थान / पता</th>
                  <th>सार्वजनिक संपर्क</th>
                  <th>उपयोगिता</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ग्राम पंचायत कार्यालय, बामरला</strong></td>
                  <td>स्थानीय स्वशासन</td>
                  <td>पंचायत भवन, बामरला (सरपंच: धोधा खान)</td>
                  <td>पंचायत मुख्यालय (समय: 10:00 - 17:00)</td>
                  <td>जन्म/मृत्यु प्रमाण, पट्टा, ग्रामसभा</td>
                </tr>
                <tr>
                  <td><strong>ग्राम पंचायत कार्यालय, आदर्श बामरला</strong></td>
                  <td>स्थानीय स्वशासन</td>
                  <td>पंचायत भवन, आदर्श बामरला (सरपंच: पेमा राम मेगवाल)</td>
                  <td>पंचायत मुख्यालय</td>
                  <td>नागरिक सेवाएँ व विकास योजनाएँ</td>
                </tr>
                <tr>
                  <td><strong>राजकीय उच्च माध्यमिक विद्यालय, बामरला</strong></td>
                  <td>शिक्षा</td>
                  <td>मुख्य विद्यालय परिसर, बामरला (344704)</td>
                  <td>प्रधानाचार्य कार्यालय</td>
                  <td>प्रवेश, टीसी, छात्रवृत्ति, शाला दर्पण</td>
                </tr>
                <tr>
                  <td><strong>भारतीय स्टेट बैंक (SBI) बामरला शाखा</strong></td>
                  <td>बैंकिंग</td>
                  <td>बामरला बाजार</td>
                  <td>टोल फ्री: 1800 1234</td>
                  <td>बचत खाता, KCC, नकद लेनदेन</td>
                </tr>
                <tr>
                  <td><strong>उप स्वास्थ्य केंद्र / आरोग्य मंदिर</strong></td>
                  <td>स्वास्थ्य</td>
                  <td>बामरला</td>
                  <td>ANM / आशा सहयोगिनी</td>
                  <td>टीकाकरण, प्राथमिक चिकित्सा, प्रसवपूर्व जांच</td>
                </tr>
                <tr>
                  <td><strong>शाखा डाकघर (India Post)</strong></td>
                  <td>डाक सेवाएँ</td>
                  <td>बामरला (पिन 344704)</td>
                  <td>डाकपाल कार्यालय</td>
                  <td>स्पीड पोस्ट, सुकन्या खाता, IPPB बैंकिंग</td>
                </tr>
                <tr>
                  <td><strong>उचित मूल्य राशन दुकान (PDS Dealer)</strong></td>
                  <td>खाद्य सुरक्षा</td>
                  <td>बामरला</td>
                  <td>खाद्य विभाग 181</td>
                  <td>NFSA गेहूं व राशन वितरण</td>
                </tr>
                <tr>
                  <td><strong>JVVNL बिजली फॉल्ट केंद्र</strong></td>
                  <td>विद्युत वितरण</td>
                  <td>सेड़वा वृत्त</td>
                  <td>टोल फ्री: <a href="tel:18001806045">1800-180-6045</a></td>
                  <td>ट्रांसफार्मर व लाइन खराबी शिकायत</td>
                </tr>
                <tr>
                  <td><strong>तहसीलदार एवं कार्यपालक मजिस्ट्रेट</strong></td>
                  <td>प्रशासन</td>
                  <td>तहसील कार्यालय, सेड़वा</td>
                  <td>सेड़वा मुख्यालय</td>
                  <td>राजस्व नामांतरण, जाति/मूल प्रमाण</td>
                </tr>
                <tr>
                  <td><strong>उपखंड अधिकारी (SDM)</strong></td>
                  <td>प्रशासन</td>
                  <td>उपखंड कार्यालय, सेड़वा</td>
                  <td>सेड़वा मुख्यालय</td>
                  <td>कानून व्यवस्था, उपखंड प्रशासन</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },

    // 17. Important Contacts (important-contacts.html)
    {
      filename: "important-contacts.html",
      title: "आवश्यक संपर्क एवं हेल्पलाइन",
      description: "पुलिस, एम्बुलेंस, महिला हेल्पलाइन, जिला कलेक्टर, उपखंड अधिकारी सेड़वा एवं आपातकालीन दूरभाष नंबर।",
      keywords: "आवश्यक संपर्क बामरला, हेल्पलाइन बाड़मेर, सेड़वा SDM फोन, बाड़मेर कलेक्टर फोन, 108 ambulance, emergency barmer",
      canonicalUrl: `${SITE_URL}/important-contacts.html`,
      breadcrumbs: [{ label: "सहायता व संपर्क", url: "help-support.html" }, { label: "आवश्यक संपर्क", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>आवश्यक संपर्क एवं आपातकालीन हेल्पलाइन नंबर</h1>
            <div class="page-description">
              आपातकाल, पुलिस, स्वास्थ्य, आपदा प्रबंधन, महिला-बाल सुरक्षा एवं जिला प्रशासनिक संपर्क सूत्र।
            </div>
          </div>

          <div class="grid-4 mb-4">
            <div class="portal-card" style="border-top: 4px solid #DC2626; text-align: center;">
              <div style="font-size: 2rem;">🚨</div>
              <h3 style="font-size: 1.1rem; color: #991B1B; font-weight: 700;">अखिल भारतीय आपातकाल</h3>
              <div style="font-size: 1.75rem; font-weight: 800; color: #DC2626; margin: 0.5rem 0;">
                <a href="tel:112" style="text-decoration: none; color: inherit;">112</a>
              </div>
              <div style="font-size: 0.75rem; color: #64748B;">पुलिस, एम्बुलेंस व अग्निशमन एकीकृत</div>
            </div>

            <div class="portal-card" style="border-top: 4px solid #D97706; text-align: center;">
              <div style="font-size: 2rem;">🚑</div>
              <h3 style="font-size: 1.1rem; color: #92400E; font-weight: 700;">एम्बुलेंस सेवा</h3>
              <div style="font-size: 1.75rem; font-weight: 800; color: #D97706; margin: 0.5rem 0;">
                <a href="tel:108" style="text-decoration: none; color: inherit;">108 / 102</a>
              </div>
              <div style="font-size: 0.75rem; color: #64748B;">24 घंटे निःशुल्क आपातकालीन वाहन</div>
            </div>

            <div class="portal-card" style="border-top: 4px solid #1E3A8A; text-align: center;">
              <div style="font-size: 2rem;">👮</div>
              <h3 style="font-size: 1.1rem; color: #1E3A8A; font-weight: 700;">पुलिस सहायता</h3>
              <div style="font-size: 1.75rem; font-weight: 800; color: #1E3A8A; margin: 0.5rem 0;">
                <a href="tel:100" style="text-decoration: none; color: inherit;">100</a>
              </div>
              <div style="font-size: 0.75rem; color: #64748B;">सेड़वा पुलिस थाना वृत्त</div>
            </div>

            <div class="portal-card" style="border-top: 4px solid #7C3AED; text-align: center;">
              <div style="font-size: 2rem;">👩</div>
              <h3 style="font-size: 1.1rem; color: #5B21B6; font-weight: 700;">महिला गरिमा हेल्पलाइन</h3>
              <div style="font-size: 1.75rem; font-weight: 800; color: #7C3AED; margin: 0.5rem 0;">
                <a href="tel:1090" style="text-decoration: none; color: inherit;">1090 / 181</a>
              </div>
              <div style="font-size: 0.75rem; color: #64748B;">महिला अत्याचार रोकथाम व सुरक्षा</div>
            </div>
          </div>

          <h2 class="section-title mb-2">जिला एवं उपखंड प्रशासनिक संपर्क</h2>
          <div class="table-responsive mb-4">
            <table class="portal-table">
              <thead>
                <tr>
                  <th>पद / कार्यालय</th>
                  <th>मुख्यालय</th>
                  <th>कार्यालय उपयोगिता</th>
                  <th>आधिकारिक पोर्टल / संपर्क</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>जिला कलेक्टर एवं जिला मजिस्ट्रेट</strong></td>
                  <td>बाड़मेर</td>
                  <td>समस्त जिला प्रशासन नियंत्रण</td>
                  <td><a href="https://barmer.rajasthan.gov.in" target="_blank" rel="noopener noreferrer">barmer.rajasthan.gov.in</a></td>
                </tr>
                <tr>
                  <td><strong>उपखंड अधिकारी (SDM)</strong></td>
                  <td>सेड़वा</td>
                  <td>उपखंड स्तर पर प्रशासनिक पर्यवेक्षण</td>
                  <td>सेड़वा कलेक्ट्रेट परिसर</td>
                </tr>
                <tr>
                  <td><strong>तहसीलदार कार्यालय</strong></td>
                  <td>सेड़वा</td>
                  <td>राजस्व अभिलेख, नामांतरण, सीमांकन</td>
                  <td>तहसील कार्यालय सेड़वा</td>
                </tr>
                <tr>
                  <td><strong>विकास अधिकारी (BDO)</strong></td>
                  <td>पंचायत समिति सेड़वा</td>
                  <td>ग्रामीण विकास एवं पंचायती राज</td>
                  <td>पंचायत समिति सेड़वा</td>
                </tr>
                <tr>
                  <td><strong>साइबर अपराध हेल्पलाइन</strong></td>
                  <td>राष्ट्रीय</td>
                  <td>ऑनलाइन बैंक ठगी, फ्रॉड रोकथाम</td>
                  <td><a href="tel:1930">1930 (Toll Free)</a></td>
                </tr>
                <tr>
                  <td><strong>राजस्थान संपर्क सीएम हेल्पलाइन</strong></td>
                  <td>राज्य स्तरीय</td>
                  <td>सरकारी कार्यों में देरी व भ्रष्टाचार शिकायत</td>
                  <td><a href="tel:181">181 (Toll Free)</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Direct WhatsApp Contact Box -->
          <div style="background: #ECFDF5; border: 2px solid #10B981; padding: 1.5rem; border-radius: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <div>
              <h3 style="color: #065F46; font-size: 1.2rem; font-weight: 800; margin-bottom: 0.25rem;">
                पोर्टल समन्वयक से WhatsApp पर सीधा संपर्क करें
              </h3>
              <p style="color: #047857; font-size: 0.875rem; margin: 0;">
                गाँव की जानकारी जोड़ने, फोटो साझा करने अथवा सुझाव हेतु सीधे मैसेज भेजें।
              </p>
            </div>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%AA%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" class="btn" style="background: #25D366; color: #FFFFFF; font-weight: 700;">
              💬 WhatsApp: +91 8529326036
            </a>
          </div>
        </div>
      `
    },

    // 18. Help & Support (help-support.html) - With Direct WhatsApp Workflow
    {
      filename: "help-support.html",
      title: "सहायता एवं सुधार प्रविष्टि",
      description: "बामरला डिजिटल पोर्टल से संबंधित सहायता, जानकारी में सुधार का अनुरोध अथवा सुझाव भेजने हेतु प्रपत्र (WhatsApp एवं ईमेल)।",
      keywords: "सहायता बामरला, सुधार प्रविष्टि, विकाश कुमार WhatsApp, पोर्टल सुझाव, help bamarla portal",
      canonicalUrl: `${SITE_URL}/help-support.html`,
      breadcrumbs: [{ label: "सहायता व संपर्क", url: "" }, { label: "सहायता व सुधार", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>सहायता एवं जानकारी सुधार प्रविष्टि</h1>
            <div class="page-description">
              यदि आप वेबसाइट पर प्रदर्शित किसी जानकारी को सुधारना चाहते हैं या नया सुझाव देना चाहते हैं, तो सीधे WhatsApp अथवा ईमेल द्वारा प्रेषित करें।
            </div>
          </div>

          <div class="grid-2 mb-4">
            <!-- Form Card (Requirement 5: Send Form Submissions Directly to WhatsApp) -->
            <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 2rem; border-radius: 8px; box-shadow: var(--shadow-sm);">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap;">
                <h2 style="font-size: 1.25rem; color: #002147; font-weight: 700;">
                  सुधार अथवा सुझाव प्रेषित करें
                </h2>
                <span class="status-badge verified">WhatsApp व ईमेल समर्थित</span>
              </div>
              <p style="font-size: 0.875rem; color: #64748B; margin-bottom: 1.5rem;">
                यह फॉर्म भरते ही आपका विवरण सीधे <strong>विकाश कुमार (+91 8529326036)</strong> के WhatsApp पर प्री-फिल हो जाएगा।
              </p>

              <form id="portalFeedbackForm" class="portal-interactive-form" data-form-title="सुधार अथवा सुझाव प्रविष्टि">
                <div class="form-group">
                  <label class="form-label" for="sender_name">आपका पूरा नाम (अनिवार्य) *</label>
                  <input type="text" id="sender_name" name="sender_name" class="form-control" placeholder="उदा. रमेश कुमार" required />
                </div>

                <div class="form-group">
                  <label class="form-label" for="sender_phone">मोबाइल नंबर (WhatsApp नंबर बेहतर रहेगा)</label>
                  <input type="tel" id="sender_phone" name="sender_phone" class="form-control" placeholder="उदा. 8529326036" />
                </div>

                <div class="form-group">
                  <label class="form-label" for="feedback_category">अनुरोध श्रेणी *</label>
                  <select id="feedback_category" name="feedback_category" class="form-control">
                    <option value="जनप्रतिनिधि नाम/पद सुधार">जनप्रतिनिधि नाम / पद सुधार</option>
                    <option value="विद्यालय व शिक्षा जानकारी">विद्यालय व शिक्षा जानकारी</option>
                    <option value="बैंक व जनसुविधा विवरण">बैंक व जनसुविधा विवरण</option>
                    <option value="भामाशाह योगदान जोड़ना">भामाशाह योगदान जोड़ना</option>
                    <option value="विकास कार्य विवरण">विकास कार्य विवरण</option>
                    <option value="सामान्य सुझाव व प्रतिक्रिया">सामान्य सुझाव व प्रतिक्रिया</option>
                  </select>
                </div>

                <div class="form-group">
                  <label class="form-label" for="feedback_message">विवरण एवं सुधार प्रस्ताव (अनिवार्य) *</label>
                  <textarea id="feedback_message" name="feedback_message" class="form-control" placeholder="कृपया सही जानकारी एवं विवरण दर्ज करें..." required></textarea>
                </div>

                <!-- Dual Action Submission per Requirement 5 -->
                <div style="display: flex; gap: 0.75rem; flex-direction: column;">
                  <button type="submit" class="btn btn-submit-whatsapp" style="background: #25D366; color: #FFFFFF; font-weight: 700; border-color: #25D366; font-size: 1rem; padding: 0.75rem;">
                    📱 WhatsApp पर भेजें (+91 8529326036) &rarr;
                  </button>
                  <button type="submit" class="btn btn-outline btn-submit-email" style="font-size: 0.875rem;">
                    ✉️ वैकल्पिक: ईमेल ड्राफ्ट तैयार करें
                  </button>
                </div>

                <div style="font-size: 0.75rem; color: #64748B; margin-top: 0.75rem; line-height: 1.4;">
                  * WhatsApp बटन दबाने पर WhatsApp में संदेश खुलेगा, जहाँ आपको <strong>'Send'</strong> दबाना होगा।
                </div>
              </form>

              <div id="feedbackResponseMsg" class="form-response-msg" style="display: none;"></div>
            </div>

            <!-- Creator Direct Contact Details (Corrected Village Address Everywhere) -->
            <div>
              <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem;">
                <h3 style="font-size: 1.15rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">
                  पोर्टल संस्थापक से सीधा संपर्क
                </h3>
                <p style="font-size: 0.9375rem; color: #374151; line-height: 1.6; margin-bottom: 1rem;">
                  <strong>विकाश कुमार (Vikash Kumar)</strong><br>
                  डिजिटल ग्राम पोर्टल संस्थापक (स्वैच्छिक जनहित पहल)<br>
                  📞 फोन: <a href="tel:+918529326036" style="color: #1E3A8A; font-weight: 700;">+91 8529326036</a><br>
                  💬 WhatsApp: <a href="https://wa.me/${WHATSAPP_NUMBER}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B6%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AC%E0%A4%BE%E0%A4%AE%E0%A4%B0%E0%A4%B2%E0%A4%BE%20%E0%A4%AA%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%B2%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%AA%E0%A5%83%E0%A4%B7%E0%A5%8D%E0%A4%A0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%81%E0%A5%A4" target="_blank" rel="noopener noreferrer" style="color: #16A34A; font-weight: 700;">+91 8529326036</a><br>
                  ✉️ ईमेल: <a href="mailto:${CREATOR_EMAIL}" style="color: #1E3A8A; font-weight: 700;">${CREATOR_EMAIL}</a><br>
                  📍 <strong>गाँव का सही पता:</strong> <strong>${CREATOR_ADDRESS}</strong>
                </p>
              </div>

              <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 1.25rem; border-radius: 8px;">
                <h4 style="color: #92400E; font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">
                  ⚠️ कानूनी स्थिति स्पष्टीकरण
                </h4>
                <p style="font-size: 0.875rem; color: #78350F; line-height: 1.6;">
                  कृपया ध्यान दें कि यह पोर्टल एक <strong>स्वतंत्र नागरिक सूचना मंच</strong> है। इस फॉर्म को भरने से कोई आधिकारिक सरकारी शिकायत दर्ज नहीं होती। यदि आप किसी सरकारी विभाग, सड़क, पानी, बिजली या राशन के विरुद्ध आधिकारिक शिकायत दर्ज कराना चाहते हैं, तो कृपया 'राजस्थान संपर्क 181' पर संपर्क करें।
                </p>
                <div style="margin-top: 0.75rem;">
                  <a href="grievance.html" class="btn btn-outline btn-sm">सरकारी शिकायत मार्गदर्शिका देखें &rarr;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 19. Grievance (grievance.html) - With WhatsApp Assistance Request Form
    {
      filename: "grievance.html",
      title: "शिकायत सहायता एवं निवारण मार्गदर्शिका",
      description: "पानी, बिजली, सड़क, राशन एवं सरकारी योजनाओं की आधिकारिक शिकायत दर्ज कराने हेतु राजस्थान संपर्क 181 एवं संबंधित विभाग गाइड।",
      keywords: "शिकायत सहायता बामरला, राजस्थान संपर्क 181, बिजली शिकायत, पानी शिकायत, ration card grievance rajasthan",
      canonicalUrl: `${SITE_URL}/grievance.html`,
      breadcrumbs: [{ label: "सहायता व संपर्क", url: "help-support.html" }, { label: "शिकायत सहायता", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>सरकारी शिकायत निवारण मार्गदर्शिका (Public Grievance Guide)</h1>
            <div class="page-description">
              पानी, बिजली, सड़क, राशन, पेंशन एवं पंचायत कार्यों से संबंधित आधिकारिक शिकायत दर्ज कराने की चरणबद्ध प्रक्रिया।
            </div>
          </div>

          <!-- Distinction Banner -->
          <div style="background: #EFF6FF; border: 2px solid #3B82F6; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;">
            <h2 style="font-size: 1.2rem; color: #1E3A8A; font-weight: 800; margin-bottom: 0.5rem;">
              तीन श्रेणियों में अंतर समझें (Clear Distinction)
            </h2>
            <div class="grid-3 mt-2" style="font-size: 0.875rem; line-height: 1.6;">
              <div style="background: #FFFFFF; padding: 1rem; border-radius: 6px;">
                <strong style="color: #002147;">1. पोर्टल सूचना सुधार:</strong><br>
                इस वेबसाइट पर नाम, फोन या तथ्य गलत होने पर <a href="help-support.html">सहायता फॉर्म</a> भरें।
              </div>
              <div style="background: #FFFFFF; padding: 1rem; border-radius: 6px;">
                <strong style="color: #D97706;">2. सामान्य मार्गदर्शन:</strong><br>
                योजना की पात्रता व फॉर्म भरने के नियम समझने हेतु <a href="faq.html">FAQ</a> पढ़ें।
              </div>
              <div style="background: #FFFFFF; padding: 1rem; border-radius: 6px;">
                <strong style="color: #DC2626;">3. आधिकारिक सरकारी शिकायत:</strong><br>
                सड़क, पानी, बिजली या राशन न मिलने पर सीधे <strong>राजस्थान संपर्क 181</strong> पर कॉल करें।
              </div>
            </div>
          </div>

          <!-- Grievance Portals -->
          <div class="grid-2 mb-4">
            <div class="portal-card">
              <span class="status-badge verified mb-1">सर्वोच्च सरकारी समाधान मंच</span>
              <h3 class="portal-card-title">राजस्थान संपर्क पोर्टल (Toll Free 181)</h3>
              <p class="portal-card-body mt-2">
                राजस्थान सरकार का केंद्रीय शिकायत निवारण पोर्टल। किसी भी सरकारी विभाग में कार्य न होने, पटवारी/सचिव द्वारा काम टालने, राशन न मिलने या नरेगा भुगतान रुकने पर बिना किसी शुल्क के घर बैठे 181 पर कॉल करके शिकायत दर्ज कराई जा सकती है।
              </p>
              <div class="portal-card-footer">
                <a href="https://sampark.rajasthan.gov.in" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">sampark.rajasthan.gov.in &rarr;</a>
                <a href="tel:181" class="btn btn-saffron btn-sm">डायल करें: 181</a>
              </div>
            </div>

            <div class="portal-card">
              <span class="status-badge verified mb-1">विद्युत शिकायत</span>
              <h3 class="portal-card-title">जोधपुर डिस्कॉम (JVVNL) बिजली शिकायत</h3>
              <p class="portal-card-body mt-2">
                ट्रांसफार्मर जलने, तार टूटने, अत्यधिक बिजली बिल आने या बार-बार अघोषित बिजली कटौती की शिकायत हेतु डिस्कॉम टोल फ्री नंबर 1800-180-6045 पर कॉल करें अथवा 'Bijli Mitr' ऐप डाउनलोड कर शिकायत नंबर प्राप्त करें।
              </p>
              <div class="portal-card-footer">
                <a href="tel:18001806045" class="btn btn-primary btn-sm">1800-180-6045</a>
              </div>
            </div>
          </div>

          <!-- Grievance Assistance Interactive Form (Requirement 5) -->
          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <h2 style="font-size: 1.25rem; color: #002147; font-weight: 700;">
                गाँव की समस्या / शिकायत मार्गदर्शन अनुरोध
              </h2>
              <span class="status-badge partial">स्वैच्छिक नागरिक मार्गदर्शन</span>
            </div>
            <p style="font-size: 0.875rem; color: #4B5563; margin-bottom: 1.25rem;">
              यदि आप आधिकारिक 181 पोर्टल पर शिकायत दर्ज करने की प्रक्रिया नहीं समझ पा रहे हैं, तो नीचे दिया गया फॉर्म भरें। यह विवरण सीधे <strong>विकाश कुमार (+91 8529326036)</strong> के WhatsApp पर भेजा जाएगा ताकि वे आपको सही प्रक्रिया समझा सकें।
            </p>

            <form id="portalGrievanceAssistForm" class="portal-interactive-form" data-form-title="सार्वजनिक समस्या / शिकायत मार्गदर्शन">
              <div class="form-group">
                <label class="form-label" for="g_name">आपका नाम *</label>
                <input type="text" id="g_name" name="sender_name" class="form-control" placeholder="उदा. भंवर लाल" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="g_phone">मोबाइल नंबर *</label>
                <input type="tel" id="g_phone" name="sender_phone" class="form-control" placeholder="उदा. 9876543210" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="g_cat">समस्या की श्रेणी *</label>
                <select id="g_cat" name="request_category" class="form-control">
                  <option value="पेयजल समस्या (JJM/पाइपलाइन)">पेयजल समस्या (JJM / पाइपलाइन / GLR)</option>
                  <option value="बिजली समस्या (ट्रांसफार्मर/फॉल्ट)">बिजली समस्या (ट्रांसफार्मर / फॉल्ट / बिल)</option>
                  <option value="राशन / खाद्य सुरक्षा (NFSA)">राशन / खाद्य सुरक्षा (गेहूं न मिलना)</option>
                  <option value="सड़क व नाली निर्माण">सड़क व नाली निर्माण</option>
                  <option value="मनरेगा कार्य व भुगतान">मनरेगा कार्य व भुगतान</option>
                  <option value="पेंशन रुकना अथवा सत्यापन">पेंशन रुकना अथवा सत्यापन</option>
                  <option value="अन्य सार्वजनिक समस्या">अन्य सार्वजनिक समस्या</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="g_desc">समस्या का संक्षिप्त विवरण *</label>
                <textarea id="g_desc" name="issue_description" class="form-control" placeholder="कृपया समस्या और अपने वार्ड अथवा क्षेत्र का नाम लिखें..." required></textarea>
              </div>

              <div style="display: flex; gap: 0.75rem; flex-direction: column;">
                <button type="submit" class="btn btn-submit-whatsapp" style="background: #25D366; color: #FFFFFF; font-weight: 700; border-color: #25D366; font-size: 1rem; padding: 0.75rem;">
                  📱 WhatsApp द्वारा मार्गदर्शन प्राप्त करें (+91 8529326036) &rarr;
                </button>
                <button type="submit" class="btn btn-outline btn-submit-email" style="font-size: 0.875rem;">
                  ✉️ ईमेल द्वारा भेजें
                </button>
              </div>
              <div style="font-size: 0.75rem; color: #64748B; margin-top: 0.5rem;">
                * नोट: यह सहायता अनुरोध है, आधिकारिक सरकारी शिकायत दर्ज करने हेतु 181 का ही उपयोग करें।
              </div>
            </form>

            <div class="form-response-msg" style="display: none;"></div>
          </div>
        </div>
      `
    },

    // 20. FAQ (faq.html)
    {
      filename: "faq.html",
      title: "अक्सर पूछे जाने वाले प्रश्न (FAQ)",
      description: "बामरला गाँव, पिन कोड 344704, सरपंच: धोधा खान, आदर्श बामरला सरपंच: पेमा राम मेगवाल, स्कूल, बैंक संबंधी सामान्य सवालों के उत्तर।",
      keywords: "FAQ बामरला, बामरला पिन कोड, बामरला सरपंच धोधा खान, पेमा राम मेगवाल, bamarla questions answers",
      canonicalUrl: `${SITE_URL}/faq.html`,
      breadcrumbs: [{ label: "सहायता व संपर्क", url: "help-support.html" }, { label: "FAQ", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>अक्सर पूछे जाने वाले प्रश्न (Frequently Asked Questions)</h1>
            <div class="page-description">
              बामरला गाँव, स्थानीय प्रशासन, स्कूल, बैंक, सरकारी योजनाओं एवं पोर्टल संबंधी सामान्य प्रश्नों के स्पष्ट उत्तर।
            </div>
          </div>

          <div class="accordion-container" style="max-width: 850px; margin: 0 auto;">
            <div class="accordion-item active">
              <button class="accordion-trigger" type="button">
                <span>1. बामरला गाँव कहाँ स्थित है?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                बामरला गाँव भारत के राजस्थान राज्य के बाड़मेर जिले के अंतर्गत सेड़वा तहसील में स्थित है। इसका आधिकारिक पता <strong>BAMARLA, BARMER, RAJASTHAN, भारत</strong> है।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>2. बामरला का डाक पिन कोड क्या है?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                बामरला का पिन कोड <strong>344704</strong> है। निकटवर्ती उप डाकघर सेड़वा है।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>3. बामरला गाँव एवं आदर्श बामरला के सरपंच कौन हैं?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                गाँव की अद्यतन प्रविष्टि के अनुसार:<br>
                • <strong>बामरला गाँव (Bamarla Village):</strong> सरपंच <strong>श्री धोधा खान (Dhodha Khan)</strong> हैं।<br>
                • <strong>आदर्श बामरला (Adarsh Bamarla):</strong> सरपंच <strong>श्री पेमा राम मेगवाल (Pemaram Megwal)</strong> हैं।<br>
                (दोनों पदों की वर्तमान कार्यकाल प्रविष्टि आधिकारिक सरकारी निर्वाचन गजट से सत्यापन प्रक्रियाधीन है)।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>4. क्या यह एक आधिकारिक सरकारी वेबसाइट है?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                <strong>स्पष्ट उत्तर: नहीं।</strong> यह एक स्वतंत्र नागरिक ग्राम सूचना पोर्टल है। इसका संचालन व विकास किसी सरकारी विभाग द्वारा नहीं, बल्कि विकाश कुमार द्वारा स्वैच्छिक जनहित पहल के रूप में किया जा रहा है।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>5. सरकारी योजनाओं के लिए आवेदन कैसे करें?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                ग्रामीण जन नजदीकी ई-मित्र केंद्र पर जाकर अपने जन आधार कार्ड के माध्यम से राजस्थान सरकार व केंद्र सरकार की विभिन्न योजनाओं (जैसे पेंशन, किसान निधि, आवास आदि) के लिए ऑनलाइन आवेदन कर सकते हैं।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>6. भारतीय स्टेट बैंक (SBI) बामरला शाखा की जानकारी कैसे प्राप्त करें?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                आप हमारे <a href="banks.html">बैंक पृष्ठ</a> पर जाकर SBI शाखा के कार्य समय, उपलब्ध सेवाओं व साइबर सुरक्षा सावधानियों की जानकारी प्राप्त कर सकते हैं।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>7. गाँव के विकास कार्यों की जानकारी कहाँ देखें?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                गाँव के पूर्ण एवं प्रगतिरत कार्यों का पारदर्शी ब्यौरा देखने के लिए पोर्टल के <a href="development-works.html">विकास कार्य</a> पृष्ठ पर जाएं अथवा केंद्र सरकार के egramswaraj.gov.in पोर्टल पर देखें।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>8. पोर्टल पर कोई सुधार अथवा सुझाव कैसे भेजें?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                आप हमारे <a href="help-support.html">सहायता व सुधार</a> पृष्ठ पर उपलब्ध फॉर्म भरकर सीधे <strong>WhatsApp (+91 8529326036)</strong> अथवा ईमेल पर सही साक्ष्य प्रेषित कर सकते हैं।
              </div>
            </div>

            <div class="accordion-item">
              <button class="accordion-trigger" type="button">
                <span>9. इस डिजिटल पोर्टल का निर्माण किसने किया है?</span>
                <span class="accordion-icon">▼</span>
              </button>
              <div class="accordion-content">
                इस पोर्टल का निर्माण <strong>विकाश कुमार (Vikash Kumar)</strong> द्वारा ग्रामीण जनता की सुविधा हेतु अपने स्वयं के समय व संसाधनों से एक स्वैच्छिक जनहित पहल के रूप में किया गया है।
              </div>
            </div>
          </div>
        </div>
      `
    },

    // 21. About Portal (about-portal.html)
    {
      filename: "about-portal.html",
      title: "पोर्टल के बारे में एवं संस्थापक परिचय",
      description: "बामरला ग्राम डिजिटल पोर्टल का विजन, उद्देश्य, संस्थापक विकाश कुमार की स्वैच्छिक जनहित पहल एवं गैर-सरकारी स्थिति।",
      keywords: "पोर्टल के बारे में, विकाश कुमार, Vikash Kumar Bamarla, digital village initiative, about bamarla portal",
      canonicalUrl: `${SITE_URL}/about-portal.html`,
      breadcrumbs: [{ label: "सहायता व संपर्क", url: "help-support.html" }, { label: "पोर्टल के बारे में", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>बामरला ग्राम डिजिटल पोर्टल के बारे में</h1>
            <div class="page-description">
              गाँव को डिजिटल रूप से सशक्त बनाने, सूचना पारदर्शिता बढ़ाने एवं जनहित सुविधा हेतु एक स्वैच्छिक नागरिक प्रयास।
            </div>
          </div>

          <div style="background: #FFFFFF; border: 2px solid #E2E8F0; padding: 2rem; border-radius: 8px; margin-bottom: 2rem; box-shadow: var(--shadow-sm);">
            <div style="display: flex; gap: 2rem; align-items: flex-start; flex-wrap: wrap;">
              <img src="assets/images/vikash-kumar.jpg" alt="विकाश कुमार - पोर्टल संस्थापक" class="representative-photo" style="width: 170px; height: 195px;" />
              <div style="flex: 1; min-width: 280px;">
                <span class="status-badge partial mb-1">संस्थापक एवं तकनीकी समन्वयक</span>
                <h2 style="font-size: 1.5rem; color: #002147; font-weight: 800;">
                  विकाश कुमार (Vikash Kumar)
                </h2>
                <div style="font-size: 0.95rem; color: #D97706; font-weight: 600; margin: 0.25rem 0 1rem;">
                  स्वैच्छिक जनहित ग्रामीण तकनीकी पहल
                </div>
                
                <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 1rem; border-radius: 6px; font-size: 0.95rem; color: #92400E; line-height: 1.6; margin-bottom: 1rem;">
                  “इस डिजिटल ग्राम पोर्टल का निर्माण विकाश कुमार द्वारा गाँव की सार्वजनिक जानकारी को सरलता से उपलब्ध कराने के उद्देश्य से किया जा रहा है। वर्तमान में यह एक स्वैच्छिक जनहित पहल है।”
                </div>

                <p style="font-size: 0.9375rem; color: #374151; line-height: 1.6; margin-bottom: 1rem;">
                  “विकाश कुमार द्वारा इस डिजिटल ग्राम पोर्टल का निर्माण इस उद्देश्य से किया जा रहा है कि गाँव के लोगों को आवश्यक सार्वजनिक जानकारी खोजने के लिए अलग-अलग जगह भटकना न पड़े। यह पहल वर्तमान में उनके स्वयं के समय और संसाधनों से विकसित की जा रही है।”
                </p>

                <div style="font-size: 0.875rem; color: #4B5563; line-height: 1.6;">
                  <div><strong>ईमेल:</strong> <a href="mailto:${CREATOR_EMAIL}">${CREATOR_EMAIL}</a></div>
                  <div><strong>मोबाइल / WhatsApp:</strong> <a href="https://wa.me/${WHATSAPP_NUMBER}">+91 8529326036</a></div>
                  <div><strong>गाँव का सही पता:</strong> <strong>${CREATOR_ADDRESS}</strong></div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-3 mb-4">
            <div class="portal-card">
              <h3 class="portal-card-title">1. सूचना सुलभता</h3>
              <p class="portal-card-body">
                गाँव के बुजुर्गों, किसानों, महिलाओं एवं विद्यार्थियों को सरकारी योजनाओं, स्कूल व स्वास्थ्य केंद्रों की सही जानकारी घर बैठे उनकी अपनी भाषा (सरल हिंदी) में उपलब्ध कराना।
              </p>
            </div>

            <div class="portal-card">
              <h3 class="portal-card-title">2. पूर्ण पारदर्शिता</h3>
              <p class="portal-card-body">
                गाँव के विकास कार्यों, ग्रामसभा सूचनाओं व जनसहयोग का निष्पक्ष अभिलेखीकरण। किसी भी प्रकार की भ्रामक अथवा असत्यापित जानकारी से पूरी तरह बचना।
              </p>
            </div>

            <div class="portal-card">
              <h3 class="portal-card-title">3. सामाजिक समरसता</h3>
              <p class="portal-card-body">
                गाँव के सभी वर्गों, समुदायों एवं परिवारों का समान आदर। किसी भी जातिगत अथवा व्यक्तिगत पक्षपात के बिना केवल सार्वजनिक हित की सेवा।
              </p>
            </div>
          </div>

          <div style="background: #FEF2F2; border: 1px solid #FCA5A5; padding: 1.25rem; border-radius: 8px;">
            <h4 style="color: #991B1B; font-weight: 700; margin-bottom: 0.35rem;">कानूनी स्थिति (Legal Standing)</h4>
            <p style="font-size: 0.875rem; color: #7F1D1D; line-height: 1.6;">
              यह पोर्टल किसी भी सरकारी विभाग, मंत्रालय अथवा राजस्थान सरकार द्वारा अधिकृत या वित्तपोषित नहीं है। यह एक स्वतंत्र जनहित नागरिक पहल है।
            </p>
          </div>
        </div>
      `
    },

    // 22. Privacy Policy (privacy-policy.html)
    {
      filename: "privacy-policy.html",
      title: "गोपनीयता नीति (Privacy Policy)",
      description: "बामरला ग्राम डिजिटल पोर्टल की गोपनीयता नीति, डेटा सुरक्षा एवं संवेदनशील व्यक्तिगत जानकारी से संबंधित नियम।",
      keywords: "गोपनीयता नीति, privacy policy bamarla, data protection, privacy terms",
      canonicalUrl: `${SITE_URL}/privacy-policy.html`,
      breadcrumbs: [{ label: "गोपनीयता नीति", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>गोपनीयता नीति (Privacy Policy)</h1>
            <div class="page-description">
              अंतिम अद्यतन: अक्टूबर 2026 | बामरला ग्राम डिजिटल पोर्टल की डेटा सुरक्षा व गोपनीयता प्रतिबद्धता।
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 2rem; border-radius: 8px; font-size: 0.95rem; line-height: 1.8; color: #374151;">
            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">1. संवेदनशील व्यक्तिगत डेटा का संकलन न करना</h2>
            <p style="margin-bottom: 1.25rem;">
              बामरला ग्राम डिजिटल पोर्टल कभी भी उपयोगकर्ताओं से उनका आधार नंबर, बैंक खाता विवरण, यूपीआई पिन (UPI PIN), एटीएम पिन अथवा पासवर्ड जैसी कोई भी संवेदनशील वित्तीय या व्यक्तिगत जानकारी नहीं माँगता और न ही संग्रहित करता है।
            </p>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">2. स्थानीय स्टोरेज (Local Storage) का सीमित उपयोग</h2>
            <p style="margin-bottom: 1.25rem;">
              यह पोर्टल आपके ब्राउज़र के <code>localStorage</code> का उपयोग केवल एक बार दिखने वाले सूचनात्मक पॉपअप को दोबारा न दिखाने के उद्देश्य से करता है, ताकि आपका ब्राउज़िंग अनुभव सुगम रहे। इसमें किसी प्रकार का व्यक्तिगत ट्रैकिंग डेटा एकत्र नहीं किया जाता।
            </p>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">3. बाहरी सरकारी लिंक (External Official Links)</h2>
            <p style="margin-bottom: 1.25rem;">
              पोर्टल पर राजस्थान सरकार व भारत सरकार के विभिन्न आधिकारिक पोर्टल्स (जैसे Jan Soochna, PM-Kisan, SSO, SBI आदि) के लिंक दिए गए हैं। जब आप उन बाहरी वेबसाइटों पर जाते हैं, तो उनकी अपनी गोपनीयता नीति लागू होती है।
            </p>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">4. संपर्क एवं डेटा संपादन अधिकार</h2>
            <p>
              यदि आपको इस गोपनीयता नीति के संबंध में कोई प्रश्न है, तो आप पोर्टल निर्माता विकाश कुमार से <a href="mailto:${CREATOR_EMAIL}">${CREATOR_EMAIL}</a> अथवा WhatsApp (+91 8529326036) पर संपर्क कर सकते हैं।
            </p>
          </div>
        </div>
      `
    },

    // 23. Disclaimer (disclaimer.html)
    {
      filename: "disclaimer.html",
      title: "कानूनी अस्वीकरण (Disclaimer)",
      description: "बामरला ग्राम डिजिटल पोर्टल का कानूनी अस्वीकरण - स्वतंत्र नागरिक पहल, आधिकारिक सरकारी पोर्टल नहीं।",
      keywords: "अस्वीकरण, disclaimer bamarla, legal notice, non government disclaimer",
      canonicalUrl: `${SITE_URL}/disclaimer.html`,
      breadcrumbs: [{ label: "कानूनी अस्वीकरण", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>कानूनी अस्वीकरण (Legal Disclaimer)</h1>
            <div class="page-description">
              बामरला ग्राम डिजिटल पोर्टल के उपयोग, जानकारी की प्रकृति एवं कानूनी सीमाओं से संबंधित औपचारिक सूचना।
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 2rem; border-radius: 8px; font-size: 0.95rem; line-height: 1.8; color: #374151;">
            <div style="background: #FFFBEB; border: 1px solid #F59E0B; padding: 1.25rem; border-radius: 6px; margin-bottom: 1.5rem; font-weight: 700; color: #92400E;">
              “यह एक स्वतंत्र ग्राम सूचना पोर्टल है, आधिकारिक सरकारी वेबसाइट नहीं। सरकारी योजनाओं, पदाधिकारियों और सेवाओं से संबंधित जानकारी की पुष्टि संबंधित सरकारी विभाग से करें।”
            </div>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">1. गैर-सरकारी प्रकृति (Independent Initiative)</h2>
            <p style="margin-bottom: 1.25rem;">
              यह पोर्टल किसी भी सरकारी निकाय, जिला प्रशासन, राज्य अथवा केंद्र सरकार की अधिकृत वेबसाइट नहीं है। यह विकाश कुमार द्वारा बामरला गाँव (BAMARLA, BARMER, RAJASTHAN, भारत - 344704) के निवासियों की सुविधा हेतु स्वेच्छा से प्रारंभ की गई एक नागरिक सूचना सेवा है।
            </p>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">2. सूचना की यथार्थता (Information Accuracy)</h2>
            <p style="margin-bottom: 1.25rem;">
              यद्यपि पोर्टल पर सूचना को प्रामाणिक एवं उपयोगी बनाए रखने का हर संभव प्रयास किया गया है, तथापि नियमों, योजनाओं, आवेदन तिथियों अथवा पदाधिकारियों के नामों में समय-समय पर प्रशासनिक परिवर्तन हो सकते हैं। किसी भी विधिक अथवा वित्तीय निर्णय से पूर्व आधिकारिक गजट या संबंधित विभाग से पुष्टि अवश्य करें।
            </p>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">3. दायित्व सीमा (Limitation of Liability)</h2>
            <p>
              इस पोर्टल के उपयोग अथवा इस पर प्रदर्शित जानकारी के आधार पर किए गए किसी भी कार्य से उत्पन्न किसी प्रत्यक्ष अथवा अप्रत्यक्ष हानि के लिए पोर्टल निर्माता उत्तरदायी नहीं होगा।
            </p>
          </div>
        </div>
      `
    },

    // 24. Accessibility (accessibility.html)
    {
      filename: "accessibility.html",
      title: "अभिगम्यता विवरण (Accessibility)",
      description: "बामरला ग्राम डिजिटल पोर्टल का अभिगम्यता विवरण - सभी नागरिकों एवं दिव्यांगजनों हेतु सुलभ वेब डिज़ाइन।",
      keywords: "अभिगम्यता, accessibility bamarla, WCAG compliance, hindi web accessibility",
      canonicalUrl: `${SITE_URL}/accessibility.html`,
      breadcrumbs: [{ label: "अभिगम्यता", url: "" }],
      bodyContent: `
        <div class="container">
          <div class="page-header">
            <h1>अभिगम्यता विवरण (Accessibility Statement)</h1>
            <div class="page-description">
              दिव्यांगजनों, बुजुर्गों एवं सभी ग्रामीण नागरिकों हेतु सुगम व बाधारहित डिजिटल सूचना उपलब्धता।
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 2rem; border-radius: 8px; font-size: 0.95rem; line-height: 1.8; color: #374151;">
            <p style="margin-bottom: 1.25rem;">
              बामरला ग्राम डिजिटल पोर्टल यह सुनिश्चित करने के लिए प्रतिबद्ध है कि यह वेबसाइट तकनीक, उपकरण अथवा शारीरिक अक्षमता की परवाह किए बिना सभी उपयोगकर्ताओं के लिए सुलभ हो।
            </p>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">हमारी मुख्य अभिगम्यता विशेषताएँ:</h2>
            <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem;">
              <li><strong>उच्च कंट्रास्ट एवं स्पष्ट देवनागरी टाइपोग्राफी:</strong> Noto Sans Devanagari फॉन्ट का प्रयोग जिससे कम रोशनी में भी स्पष्ट पढ़ा जा सके।</li>
              <li><strong>कीबोर्ड नेविगेशन:</strong> माउस के बिना केवल टैब (Tab) कुंजी की सहायता से पूरे पोर्टल पर भ्रमण संभव।</li>
              <li><strong>स्क्रीन रीडर अनुकूलता:</strong> सभी महत्वपूर्ण चित्रों पर सार्थक ऑल्ट टैग (alt text) एवं सिमेंटिक HTML5 टैग्स।</li>
              <li><strong>रेस्पॉन्सिव मोबाइल डिज़ाइन:</strong> साधारण 4G/5G स्मार्टफोन पर सहज एवं तीव्र गति से लोडिंग।</li>
            </ul>

            <h2 style="font-size: 1.2rem; color: #002147; font-weight: 700; margin-bottom: 0.75rem;">सुझाव एवं सहायता</h2>
            <p>
              यदि आपको इस पोर्टल का उपयोग करने में कोई कठिनाई आ रही है, तो कृपया हमें <a href="mailto:${CREATOR_EMAIL}">${CREATOR_EMAIL}</a> पर सूचित करें ताकि हम तुरंत सुधार कर सकें।
            </p>
          </div>
        </div>
      `
    },

    // 25. 404 (404.html)
    {
      filename: "404.html",
      title: "पृष्ठ नहीं मिला (404 Error)",
      description: "अनुरोधित पृष्ठ उपलब्ध नहीं है। बामरला ग्राम डिजिटल पोर्टल के मुख्य पृष्ठ पर वापस लौटें।",
      keywords: "404 bamarla, page not found",
      canonicalUrl: `${SITE_URL}/404.html`,
      breadcrumbs: [{ label: "त्रुटि 404", url: "" }],
      bodyContent: `
        <div class="container" style="text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 4rem; color: #D97706; font-weight: 800; line-height: 1;">404</div>
          <h1 style="font-size: 1.75rem; color: #002147; font-weight: 800; margin: 1rem 0;">क्षमा करें, पृष्ठ नहीं मिला!</h1>
          <p style="font-size: 1rem; color: #4B5563; max-width: 500px; margin: 0 auto 2rem;">
            आप जिस पृष्ठ को खोज रहे हैं, वह स्थानांतरित हो गया है अथवा इसका पता बदल गया है।
          </p>

          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="index.html" class="btn btn-primary">मुख्य पृष्ठ पर जाएं &rarr;</a>
            <a href="village-directory.html" class="btn btn-outline">ग्राम डायरेक्टरी देखें</a>
            <a href="faq.html" class="btn btn-outline">सहायता व FAQ</a>
          </div>
        </div>
      `
    }
  ];

  for (const page of pages) {
    const html = renderPage(page);
    const dest = path.resolve(page.filename);
    fs.writeFileSync(dest, html, "utf-8");
    console.log(`Generated: ${page.filename}`);
  }

  console.log("All 25 static HTML pages generated successfully with updated requirements!");
}

buildAll().catch(err => {
  console.error("Error building pages:", err);
  process.exit(1);
});
