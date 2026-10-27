import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('assets/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generateAssets() {
  // 1. Logo (500x500)
  const logoSvg = `
  <svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tricolor" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FF9933"/>
        <stop offset="50%" stop-color="#FFFFFF"/>
        <stop offset="100%" stop-color="#128807"/>
      </linearGradient>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#002147"/>
        <stop offset="100%" stop-color="#0F3870"/>
      </linearGradient>
    </defs>
    <rect width="500" height="500" fill="url(#bgGrad)" rx="24"/>
    <circle cx="250" cy="250" r="220" fill="none" stroke="#D97706" stroke-width="6"/>
    <circle cx="250" cy="250" r="208" fill="none" stroke="#FFFFFF" stroke-dasharray="6,6" stroke-width="2"/>
    
    <!-- Central sun / kalash / rural motif -->
    <circle cx="250" cy="205" r="70" fill="#FFFBEB" stroke="#D97706" stroke-width="4"/>
    <circle cx="250" cy="205" r="48" fill="#D97706" opacity="0.15"/>
    <!-- Rising Sun Rays -->
    <path d="M250 145 L250 120 M250 265 L250 290 M190 205 L165 205 M310 205 L335 205 M207 162 L190 145 M293 248 L310 265 M207 248 L190 265 M293 162 L310 145" stroke="#D97706" stroke-width="4" stroke-linecap="round"/>
    
    <!-- Stalk of grain / sprout in center -->
    <path d="M250 235 Q250 185 250 170 Q240 185 235 205 Q245 205 250 235" fill="#15803D"/>
    <path d="M250 235 Q250 185 250 170 Q260 185 265 205 Q255 205 250 235" fill="#15803D"/>
    <circle cx="250" cy="168" r="6" fill="#D97706"/>

    <!-- Texts -->
    <text x="250" y="325" font-family="'Noto Sans Devanagari', 'Segoe UI', sans-serif" font-size="28" font-weight="700" fill="#FFFFFF" text-anchor="middle">बामरला ग्राम</text>
    <text x="250" y="360" font-family="'Noto Sans Devanagari', 'Segoe UI', sans-serif" font-size="20" font-weight="600" fill="#F59E0B" text-anchor="middle">डिजिटल पोर्टल</text>
    <text x="250" y="405" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="500" fill="#CBD5E1" text-anchor="middle">BAMARLA · BARMER · RAJASTHAN · 344704</text>
    
    <!-- Tricolor strip at bottom -->
    <rect x="175" y="430" width="150" height="6" fill="#FF9933" rx="3"/>
    <rect x="175" y="438" width="150" height="6" fill="#FFFFFF" rx="3"/>
    <rect x="175" y="446" width="150" height="6" fill="#128807" rx="3"/>
  </svg>
  `;

  // 2. Village Cover (1200x500)
  const coverSvg = `
  <svg width="1200" height="500" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" stop-color="#002147"/>
        <stop offset="45%" stop-color="#1E3A8A"/>
        <stop offset="85%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#FDE68A"/>
      </linearGradient>
      <linearGradient id="dunes" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" stop-color="#FBBF24"/>
        <stop offset="50%" stop-color="#D97706"/>
        <stop offset="100%" stop-color="#92400E"/>
      </linearGradient>
    </defs>
    <!-- Sky -->
    <rect width="1200" height="500" fill="url(#sky)"/>
    
    <!-- Sun -->
    <circle cx="850" cy="220" r="70" fill="#FEF08A" opacity="0.9"/>
    <circle cx="850" cy="220" r="90" fill="#FEF08A" opacity="0.3"/>

    <!-- Distant Dunes -->
    <path d="M0 320 Q280 250 600 300 T1200 270 L1200 500 L0 500 Z" fill="#D97706" opacity="0.5"/>
    <path d="M0 350 Q350 300 750 360 T1200 340 L1200 500 L0 500 Z" fill="url(#dunes)"/>
    
    <!-- Paved Road cutting through -->
    <path d="M420 500 L560 370 L600 370 L720 500 Z" fill="#334155"/>
    <path d="M570 370 L572 385 M574 405 L577 425 M580 445 L584 470 M587 485 L590 500" stroke="#F8FAFC" stroke-width="4" stroke-linecap="round"/>

    <!-- Solar lights & Khejri trees silhouettes -->
    <g fill="#1F2937">
      <line x1="390" y1="500" x2="390" y2="380" stroke="#1F2937" stroke-width="4"/>
      <line x1="380" y1="380" x2="405" y2="380" stroke="#1F2937" stroke-width="3"/>
      <rect x="375" y="375" width="25" height="6" fill="#0284C7"/>
      <ellipse cx="250" cy="370" rx="35" ry="25" fill="#14532D" opacity="0.85"/>
      <line x1="250" y1="395" x2="250" y2="420" stroke="#78350F" stroke-width="6"/>
      <ellipse cx="980" cy="380" rx="45" ry="30" fill="#14532D" opacity="0.85"/>
      <line x1="980" y1="410" x2="980" y2="440" stroke="#78350F" stroke-width="7"/>
    </g>

    <rect x="0" y="0" width="620" height="500" fill="#00152F" opacity="0.75"/>

    <text x="60" y="160" font-family="'Noto Sans Devanagari', sans-serif" font-size="44" font-weight="800" fill="#FFFFFF">बामरला ग्राम डिजिटल पोर्टल</text>
    <text x="60" y="210" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="600" fill="#FBBF24">गाँव की जानकारी, जनसुविधाएँ और विकास — एक ही स्थान पर</text>
    <text x="60" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="500" fill="#E2E8F0">BAMARLA, BARMER, RAJASTHAN, भारत · 344704</text>
    
    <rect x="60" y="280" width="310" height="38" rx="6" fill="#1E3A8A" stroke="#3B82F6" stroke-width="1.5"/>
    <text x="215" y="304" font-family="'Noto Sans Devanagari', sans-serif" font-size="14" font-weight="600" fill="#FFFFFF" text-anchor="middle">स्वतंत्र जनहित डिजिटल सूचना पहल</text>
  </svg>
  `;

  // 3. Representative Portrait Placeholder Maker
  function makeRepPlaceholderSvg(name, title, villageName, badgeText) {
    return `
    <svg width="400" height="480" viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="0" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC"/>
          <stop offset="100%" stop-color="#E2E8F0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="480" fill="url(#cardGrad)" rx="12"/>
      <rect x="4" y="4" width="392" height="472" fill="none" stroke="#CBD5E1" stroke-width="2" rx="10"/>

      <circle cx="200" cy="160" r="90" fill="#E2E8F0" stroke="#94A3B8" stroke-width="3"/>
      <circle cx="200" cy="135" r="45" fill="#64748B"/>
      <path d="M125 240 C125 190 275 190 275 240 Z" fill="#64748B"/>

      <circle cx="200" cy="160" r="75" fill="none" stroke="#D97706" stroke-width="1.5" stroke-dasharray="4,4"/>

      <rect x="20" y="275" width="360" height="185" fill="#FFFFFF" rx="8" stroke="#E2E8F0" stroke-width="1"/>
      <text x="200" y="315" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="700" fill="#002147" text-anchor="middle">${name}</text>
      <text x="200" y="345" font-family="'Noto Sans Devanagari', sans-serif" font-size="16" font-weight="600" fill="#D97706" text-anchor="middle">${title}</text>
      <text x="200" y="375" font-family="'Noto Sans Devanagari', sans-serif" font-size="14" font-weight="500" fill="#4B5563" text-anchor="middle">${villageName}</text>
      
      <rect x="50" y="405" width="300" height="32" rx="16" fill="#FFFBEB" stroke="#F59E0B" stroke-width="1"/>
      <text x="200" y="426" font-family="'Noto Sans Devanagari', sans-serif" font-size="12" font-weight="600" fill="#B45309" text-anchor="middle">${badgeText}</text>
    </svg>
    `;
  }

  // 4. Vikash Kumar Portrait Placeholder
  const vikashSvg = `
  <svg width="400" height="480" viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vkGrad" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" stop-color="#EFF6FF"/>
        <stop offset="100%" stop-color="#DBEAFE"/>
      </linearGradient>
    </defs>
    <rect width="400" height="480" fill="url(#vkGrad)" rx="12"/>
    <rect x="4" y="4" width="392" height="472" fill="none" stroke="#93C5FD" stroke-width="2" rx="10"/>

    <circle cx="200" cy="160" r="90" fill="#BFDBFE" stroke="#3B82F6" stroke-width="3"/>
    <circle cx="200" cy="135" r="45" fill="#1E40AF"/>
    <path d="M125 240 C125 190 275 190 275 240 Z" fill="#1E3A8A"/>

    <circle cx="260" cy="220" r="24" fill="#002147" stroke="#FFFFFF" stroke-width="2"/>
    <text x="260" y="226" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#60A5FA" text-anchor="middle">&lt;/&gt;</text>

    <rect x="20" y="275" width="360" height="185" fill="#FFFFFF" rx="8" stroke="#E2E8F0" stroke-width="1"/>
    <text x="200" y="315" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="700" fill="#002147" text-anchor="middle">विकाश कुमार (Vikash Kumar)</text>
    <text x="200" y="345" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" font-weight="600" fill="#1E3A8A" text-anchor="middle">डिजिटल पोर्टल संस्थापक एवं निर्माता</text>
    <text x="200" y="372" font-family="'Noto Sans Devanagari', sans-serif" font-size="13" font-weight="500" fill="#4B5563" text-anchor="middle">स्वैच्छिक जनहित ग्रामीण तकनीकी पहल</text>
    
    <rect x="40" y="398" width="320" height="42" rx="6" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
    <text x="200" y="416" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600" fill="#1F2937" text-anchor="middle">+91 8529326036</text>
    <text x="200" y="432" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#4B5563" text-anchor="middle">vikashkumar823981@gmail.com</text>
  </svg>
  `;

  // 5. Bhamashah Contributor Placeholder
  const bhamashahSvg = `
  <svg width="400" height="480" viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="480" fill="#FFFBEB" rx="12"/>
    <rect x="4" y="4" width="392" height="472" fill="none" stroke="#FDE68A" stroke-width="2" rx="10"/>

    <circle cx="200" cy="160" r="90" fill="#FEF3C7" stroke="#D97706" stroke-width="3"/>
    <circle cx="200" cy="140" r="45" fill="#D97706" opacity="0.3"/>
    <path d="M135 240 C135 195 265 195 265 240 Z" fill="#D97706" opacity="0.3"/>

    <circle cx="200" cy="160" r="40" fill="#FFFFFF" stroke="#D97706" stroke-width="2"/>
    <text x="200" y="174" font-family="'Noto Sans Devanagari', sans-serif" font-size="34" font-weight="700" fill="#D97706" text-anchor="middle">₹</text>

    <rect x="20" y="275" width="360" height="185" fill="#FFFFFF" rx="8" stroke="#FDE68A" stroke-width="1"/>
    <text x="200" y="315" font-family="'Noto Sans Devanagari', sans-serif" font-size="20" font-weight="700" fill="#002147" text-anchor="middle">[दानदाता / भामाशाह का नाम]</text>
    <text x="200" y="345" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" font-weight="600" fill="#15803D" text-anchor="middle">गाँव विकास में सार्वजनिक सहयोग</text>
    <text x="200" y="375" font-family="'Noto Sans Devanagari', sans-serif" font-size="13" font-weight="500" fill="#4B5563" text-anchor="middle">सत्यापित सहयोग प्रविष्टि प्रारूप</text>
    
    <rect x="50" y="405" width="300" height="32" rx="16" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
    <text x="200" y="426" font-family="'Noto Sans Devanagari', sans-serif" font-size="12" font-weight="600" fill="#64748B" text-anchor="middle">सहमति उपरांत प्रकाशित</text>
  </svg>
  `;

  // 6. Social Preview Image (1200x630)
  const shareSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#002147"/>
    
    <rect x="0" y="0" width="1200" height="10" fill="#FF9933"/>
    <rect x="0" y="10" width="1200" height="10" fill="#FFFFFF"/>
    <rect x="0" y="20" width="1200" height="10" fill="#128807"/>

    <rect x="30" y="50" width="1140" height="550" fill="none" stroke="#D97706" stroke-width="3" rx="16"/>

    <circle cx="220" cy="320" r="130" fill="#0F3870" stroke="#D97706" stroke-width="5"/>
    <circle cx="220" cy="320" r="115" fill="#FFFFFF" opacity="0.08"/>
    <circle cx="220" cy="290" r="45" fill="#D97706"/>
    <text x="220" y="375" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">बामरला ग्राम</text>
    <text x="220" y="402" font-family="'Noto Sans Devanagari', sans-serif" font-size="16" font-weight="600" fill="#FBBF24" text-anchor="middle">डिजिटल पोर्टल</text>

    <text x="400" y="210" font-family="'Noto Sans Devanagari', sans-serif" font-size="52" font-weight="800" fill="#FFFFFF">बामरला ग्राम डिजिटल पोर्टल</text>
    <text x="400" y="260" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="600" fill="#FBBF24">BAMARLA, BARMER, RAJASTHAN, भारत · 344704</text>
    
    <text x="400" y="320" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="500" fill="#E2E8F0">गाँव की जानकारी, जनसुविधाएँ, पंचायत एवं विकास — एक ही स्थान पर</text>
    
    <g transform="translate(400, 370)">
      <rect x="0" y="0" width="160" height="42" rx="6" fill="#1E3A8A" stroke="#3B82F6"/>
      <text x="80" y="27" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF" text-anchor="middle">ग्राम पंचायत</text>

      <rect x="180" y="0" width="160" height="42" rx="6" fill="#1E3A8A" stroke="#3B82F6"/>
      <text x="260" y="27" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF" text-anchor="middle">सरकारी योजनाएँ</text>

      <rect x="360" y="0" width="160" height="42" rx="6" fill="#1E3A8A" stroke="#3B82F6"/>
      <text x="440" y="27" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF" text-anchor="middle">विद्यालय एवं बैंक</text>

      <rect x="540" y="0" width="160" height="42" rx="6" fill="#1E3A8A" stroke="#3B82F6"/>
      <text x="620" y="27" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" font-weight="600" fill="#FFFFFF" text-anchor="middle">विकास कार्य</text>
    </g>

    <text x="400" y="475" font-family="'Noto Sans Devanagari', sans-serif" font-size="16" font-weight="500" fill="#94A3B8">स्वैच्छिक जनहित पहल: विकाश कुमार (Vikash Kumar) · मोबाइल: +91 8529326036</text>
    <text x="400" y="515" font-family="'Noto Sans Devanagari', sans-serif" font-size="14" font-weight="400" fill="#CBD5E1">यह एक स्वतंत्र ग्राम सूचना पोर्टल है, आधिकारिक सरकारी वेबसाइट नहीं।</text>
  </svg>
  `;

  console.log('Rendering assets via sharp...');
  await sharp(Buffer.from(logoSvg)).jpeg({ quality: 90 }).toFile(path.join(outDir, 'logo.jpg'));
  await sharp(Buffer.from(logoSvg)).png().toFile(path.join(outDir, 'logo.png'));
  await sharp(Buffer.from(coverSvg)).jpeg({ quality: 85 }).toFile(path.join(outDir, 'village-cover.jpg'));
  
  // CORRECTED SARPANCH NAMES AND VILLAGE ASSOCIATIONS PER PROMPT REQUIREMENT 3:
  // बामरला गाँव (Bamarla Village) -> सरपंच: धोधा खान (Dhodha Khan)
  await sharp(Buffer.from(makeRepPlaceholderSvg('श्री धोधा खान (Dhodha Khan)', 'सरपंच पद', 'ग्राम पंचायत बामरला', 'नाम प्रविष्टि सत्यापन प्रक्रियाधीन')))
    .jpeg({ quality: 85 }).toFile(path.join(outDir, 'sarpanch-bamarla.jpg'));

  // आदर्श बामरला (Adarsh Bamarla) -> सरपंच: पेमा राम मेगवाल (Pemaram Megwal)
  await sharp(Buffer.from(makeRepPlaceholderSvg('श्री पेमा राम मेगवाल (Pemaram Megwal)', 'सरपंच पद', 'ग्राम पंचायत आदर्श बामरला', 'नाम प्रविष्टि सत्यापन प्रक्रियाधीन')))
    .jpeg({ quality: 85 }).toFile(path.join(outDir, 'sarpanch-adarsh-bamarla.jpg'));

  await sharp(Buffer.from(makeRepPlaceholderSvg('उपसरपंच पद', 'उपसरपंच', 'ग्राम पंचायत बामरला', 'आधिकारिक विवरण प्रतीक्षारत')))
    .jpeg({ quality: 85 }).toFile(path.join(outDir, 'upsarpanch-bamarla.jpg'));

  await sharp(Buffer.from(makeRepPlaceholderSvg('उपसरपंच पद', 'उपसरपंच', 'ग्राम पंचायत आदर्श बामरला', 'आधिकारिक विवरण प्रतीक्षारत')))
    .jpeg({ quality: 85 }).toFile(path.join(outDir, 'upsarpanch-adarsh-bamarla.jpg'));

  await sharp(Buffer.from(vikashSvg)).jpeg({ quality: 85 }).toFile(path.join(outDir, 'vikash-kumar.jpg'));
  await sharp(Buffer.from(bhamashahSvg)).jpeg({ quality: 85 }).toFile(path.join(outDir, 'bhamashah-placeholder.jpg'));
  await sharp(Buffer.from(shareSvg)).jpeg({ quality: 90 }).toFile(path.join(outDir, 'share-preview.jpg'));

  // Favicon (48x48)
  const favSvg = `
  <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="8" fill="#002147"/>
    <circle cx="24" cy="24" r="18" fill="none" stroke="#D97706" stroke-width="2"/>
    <text x="24" y="32" font-family="'Noto Sans Devanagari', sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="middle">बा</text>
  </svg>`;
  await sharp(Buffer.from(favSvg)).png().toFile(path.resolve('favicon.ico'));
  await sharp(Buffer.from(favSvg)).png().toFile(path.resolve('public/favicon.ico'));

  console.log('All image assets created successfully in assets/images/!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
