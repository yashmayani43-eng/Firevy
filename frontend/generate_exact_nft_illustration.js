import sharp from 'sharp';

const svg = `<svg width="1200" height="720" viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Ground Line -->
  <line x1="30" y1="430" x2="770" y2="430" stroke="#3A4B6E" stroke-width="2.5" stroke-linecap="round" />

  <!-- Connecting Lines -->
  <path d="M 120 135 L 205 135 L 235 220" stroke="#9BE0FA" stroke-width="2" fill="none" />
  <path d="M 680 135 L 595 135 L 565 220" stroke="#9BE0FA" stroke-width="2" fill="none" />
  <path d="M 120 365 L 210 365 L 230 300" stroke="#9BE0FA" stroke-width="2" fill="none" />
  <path d="M 680 365 L 590 365 L 570 300" stroke="#9BE0FA" stroke-width="2" fill="none" />

  <!-- 4 FLOATING SQUARE ICONS -->

  <!-- Top-Left: Light Blue Box with Film Reel -->
  <g transform="translate(80, 95)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="#E3F2FD" />
    <circle cx="35" cy="38" r="16" stroke="#0084C7" stroke-width="3" fill="none" />
    <circle cx="28" cy="32" r="3.5" fill="#0084C7" />
    <circle cx="42" cy="32" r="3.5" fill="#0084C7" />
    <circle cx="35" cy="44" r="3.5" fill="#0084C7" />
    <rect x="52" y="30" width="12" height="18" rx="3" fill="#0084C7" />
  </g>

  <!-- Top-Right: Blue Box with Music Note -->
  <g transform="translate(640, 95)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="#0084C7" />
    <circle cx="30" cy="50" r="7" fill="#FFFFFF" />
    <circle cx="52" cy="44" r="7" fill="#FFFFFF" />
    <rect x="34" y="24" width="3" height="26" fill="#FFFFFF" />
    <rect x="56" y="18" width="3" height="26" fill="#FFFFFF" />
    <polygon points="34,24 59,18 59,25 34,31" fill="#FFFFFF" />
  </g>

  <!-- Bottom-Left: Blue Box with Gamepad -->
  <g transform="translate(80, 325)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="#0084C7" />
    <rect x="20" y="30" width="40" height="22" rx="8" stroke="#FFFFFF" stroke-width="3" fill="none" />
    <path d="M 30 35 L 30 47 M 24 41 L 36 41" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
    <circle cx="48" cy="37" r="2.5" fill="#FFFFFF" />
    <circle cx="53" cy="43" r="2.5" fill="#FFFFFF" />
  </g>

  <!-- Bottom-Right: Light Blue Box with Play Video -->
  <g transform="translate(640, 325)">
    <rect x="0" y="0" width="80" height="80" rx="18" fill="#E3F2FD" />
    <circle cx="40" cy="40" r="20" stroke="#0084C7" stroke-width="3" fill="none" />
    <polygon points="35,30 50,40 35,50" fill="#0084C7" />
  </g>

  <!-- CENTRAL MONITOR -->
  <rect x="345" y="410" width="110" height="20" rx="4" fill="#1B2A4A" />
  <path d="M 380 330 L 420 330 L 426 410 L 374 410 Z" fill="#3A4B6E" />

  <rect x="220" y="150" width="360" height="230" rx="14" fill="#1B2A4A" stroke="#0F172A" stroke-width="4" />
  <rect x="232" y="162" width="336" height="206" rx="8" fill="#F4F9FD" />

  <!-- Big Central NFT Emblem -->
  <circle cx="400" cy="255" r="72" fill="#0084C7" />
  <circle cx="400" cy="255" r="80" stroke="#29B6F6" stroke-width="3" stroke-dasharray="6 6" fill="none" />

  <!-- Padlock hanging below circle -->
  <g transform="translate(391, 310)">
    <rect x="3" y="10" width="14" height="12" rx="3" fill="#0084C7" />
    <path d="M 6 10 L 6 6 C 6 3, 14 3, 14 6 L 14 10" stroke="#0084C7" stroke-width="2.5" fill="none" />
  </g>

  <!-- NFT text -->
  <text x="400" y="267" fill="#FFFFFF" font-size="38" font-weight="900" text-anchor="middle" font-family="sans-serif" letter-spacing="2">NFT</text>


  <!-- WOMAN CHARACTER ON LEFT (Polished 2D Vector Artwork) -->
  <g transform="translate(135, 195)">
    <!-- Back Long Hair -->
    <path d="M 40 40 C 20 60, 20 110, 32 150 L 44 150 C 34 110, 32 60, 48 40 Z" fill="#1B2A4A" />
    
    <!-- Torso / Blue Sweater -->
    <path d="M 35 52 C 35 52, 68 52, 68 54 L 72 150 C 72 150, 45 152, 28 150 Z" fill="#5DB0E6" />
    
    <!-- Head & Neck -->
    <rect x="44" y="40" width="8" height="15" fill="#F5C596" />
    <ellipse cx="48" cy="28" rx="14" ry="16" fill="#F5C596" />
    <!-- Front Hair / Bangs -->
    <path d="M 34 26 C 34 10, 62 10, 62 26 C 58 20, 52 16, 46 16 C 40 16, 36 20, 34 26 Z" fill="#1B2A4A" />

    <!-- Arms holding NFT token -->
    <path d="M 62 60 L 88 92 L 80 98 L 56 68 Z" fill="#5DB0E6" />
    <circle cx="88" cy="94" r="5" fill="#F5C596" />

    <!-- NFT Badge Token -->
    <circle cx="96" cy="100" r="22" fill="#0084C7" stroke="#FFFFFF" stroke-width="2.5" />
    <text x="96" y="105" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">NFT</text>

    <!-- Trousers & Shoes -->
    <rect x="34" y="150" width="13" height="80" fill="#1B2A4A" />
    <rect x="52" y="150" width="13" height="80" fill="#1B2A4A" />
    <path d="M 28 230 L 48 230 C 48 230, 48 235, 38 235 C 28 235, 28 230, 28 230 Z" fill="#15202B" />
    <path d="M 50 230 L 70 230 C 70 230, 70 235, 60 235 C 50 235, 50 230, 50 230 Z" fill="#15202B" />
  </g>


  <!-- MAN CHARACTER ON RIGHT (Polished 2D Vector Artwork) -->
  <g transform="translate(525, 195)">
    <!-- Head & Neck -->
    <rect x="44" y="38" width="8" height="15" fill="#F5C596" />
    <ellipse cx="48" cy="26" rx="14" ry="16" fill="#F5C596" />
    <!-- Short Hair -->
    <path d="M 34 24 C 34 10, 62 10, 62 24 C 62 14, 52 12, 46 12 C 40 12, 34 14, 34 24 Z" fill="#1B2A4A" />

    <!-- Yellow Top -->
    <path d="M 32 50 C 32 50, 68 50, 68 52 L 72 150 C 72 150, 45 152, 26 150 Z" fill="#F5B800" />

    <!-- Outstretched Arm pointing at screen -->
    <path d="M 32 60 L -35 34 L -30 22 L 38 48 Z" fill="#F5B800" />
    <circle cx="-35" cy="28" r="5" fill="#F5C596" />

    <!-- Right Arm holding NFT token -->
    <path d="M 64 60 L 86 94 L 78 100 L 56 68 Z" fill="#F5B800" />
    <circle cx="86" cy="96" r="5" fill="#F5C596" />

    <!-- NFT Badge Token -->
    <circle cx="94" cy="102" r="22" fill="#0084C7" stroke="#FFFFFF" stroke-width="2.5" />
    <text x="94" y="107" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle" font-family="sans-serif">NFT</text>

    <!-- Trousers & Shoes -->
    <rect x="33" y="150" width="13" height="80" fill="#1B2A4A" />
    <rect x="51" y="150" width="13" height="80" fill="#1B2A4A" />
    <path d="M 27 230 L 47 230 C 47 230, 47 235, 37 235 C 27 235, 27 230, 27 230 Z" fill="#15202B" />
    <path d="M 49 230 L 69 230 C 69 230, 69 235, 59 235 C 49 235, 49 230, 49 230 Z" fill="#15202B" />
  </g>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('./public/images/nft_marketplace_hero_2ss.png')
  .then(() => console.log('Successfully re-rendered 1:1 exact nft_marketplace_hero_2ss.png'))
  .catch(err => console.error(err));
