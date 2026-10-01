import sharp from 'sharp';

const svg = `<svg width="1200" height="800" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="360" x2="570" y2="360" stroke="#334155" stroke-width="2.5" stroke-linecap="round" />
  
  <path d="M 105 75 L 200 75 L 225 150" stroke="#93C5FD" stroke-width="1.8" stroke-dasharray="4 4" fill="none" />
  <path d="M 495 75 L 400 75 L 375 150" stroke="#93C5FD" stroke-width="1.8" stroke-dasharray="4 4" fill="none" />
  <path d="M 105 295 L 190 295 L 215 250" stroke="#93C5FD" stroke-width="1.8" stroke-dasharray="4 4" fill="none" />
  <path d="M 495 295 L 410 295 L 385 250" stroke="#93C5FD" stroke-width="1.8" stroke-dasharray="4 4" fill="none" />

  <!-- 1. Top Left Icon Box: Film Reel -->
  <g transform="translate(75, 45)">
    <rect x="0" y="0" width="60" height="60" rx="14" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.5" />
    <circle cx="30" cy="30" r="16" stroke="#0284C7" stroke-width="2" fill="none" />
    <circle cx="23" cy="25" r="3.5" fill="#0284C7" />
    <circle cx="37" cy="25" r="3.5" fill="#0284C7" />
    <circle cx="30" cy="36" r="3.5" fill="#0284C7" />
  </g>

  <!-- 2. Top Right Icon Box: Music Note -->
  <g transform="translate(465, 45)">
    <rect x="0" y="0" width="60" height="60" rx="14" fill="#0284C7" />
    <path d="M 36 18 L 36 34 C 36 37 32 39 29 37 C 26 35 28 30 32 30 L 36 30 L 36 18 Z" fill="#FFFFFF" />
    <circle cx="25" cy="35" r="5" fill="#FFFFFF" />
    <path d="M 30 35 L 30 22 L 40 19 L 40 23 L 30 25" fill="#FFFFFF" />
  </g>

  <!-- 3. Bottom Left Icon Box: Gamepad -->
  <g transform="translate(75, 265)">
    <rect x="0" y="0" width="60" height="60" rx="14" fill="#0284C7" />
    <rect x="15" y="23" width="30" height="16" rx="6" stroke="#FFFFFF" stroke-width="2" fill="none" />
    <path d="M 23 27 L 23 35 M 19 31 L 27 31" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" />
    <circle cx="36" cy="28" r="2" fill="#FFFFFF" />
    <circle cx="39" cy="32" r="2" fill="#FFFFFF" />
  </g>

  <!-- 4. Bottom Right Icon Box: Video Play -->
  <g transform="translate(465, 265)">
    <rect x="0" y="0" width="60" height="60" rx="14" fill="#E0F2FE" stroke="#0284C7" stroke-width="1.5" />
    <circle cx="30" cy="30" r="16" stroke="#0284C7" stroke-width="2" fill="none" />
    <polygon points="26,22 37,30 26,38" fill="#0284C7" />
  </g>

  <!-- Desktop Monitor Stand -->
  <rect x="260" y="346" width="80" height="14" rx="4" fill="#1E293B" />
  <path d="M 290 285 L 310 285 L 314 346 L 286 346 Z" fill="#334155" />

  <!-- Monitor Screen Frame & Inner Canvas -->
  <rect x="170" y="110" width="260" height="175" rx="10" fill="#1E293B" stroke="#0F172A" stroke-width="3" />
  <rect x="178" y="118" width="244" height="159" rx="6" fill="#EFF6FF" />

  <!-- Big Central NFT Emblem -->
  <circle cx="300" cy="197" r="54" fill="#0284C7" />
  <circle cx="300" cy="197" r="60" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="4 4" fill="none" />

  <rect x="293" y="208" width="14" height="12" rx="2.5" fill="#FFFFFF" />
  <path d="M 296 208 L 296 203 C 296 200, 304 200, 304 203 L 304 208" stroke="#FFFFFF" stroke-width="2" fill="none" />

  <text x="300" y="198" fill="#FFFFFF" font-size="28" font-weight="900" text-anchor="middle" font-family="sans-serif" letter-spacing="1">NFT</text>

  <!-- Left Woman Character -->
  <g transform="translate(115, 170)">
    <circle cx="35" cy="22" r="14" fill="#FDBA74" />
    <path d="M 21 22 C 21 4, 49 4, 49 22 C 45 35, 25 35, 21 22 Z" fill="#1E293B" />
    <path d="M 22 38 L 48 38 L 52 105 L 18 105 Z" fill="#3B82F6" />
    <circle cx="60" cy="72" r="17" fill="#0284C7" stroke="#FFFFFF" stroke-width="2" />
    <text x="60" y="75" fill="#FFFFFF" font-size="8.5" font-weight="bold" text-anchor="middle" font-family="sans-serif">NFT</text>
    <rect x="23" y="105" width="10" height="85" fill="#1E293B" />
    <rect x="37" y="105" width="10" height="85" fill="#1E293B" />
    <ellipse cx="26" cy="190" rx="8" ry="4" fill="#0F172A" />
    <ellipse cx="40" cy="190" rx="8" ry="4" fill="#0F172A" />
  </g>

  <!-- Right Man Character -->
  <g transform="translate(415, 170)">
    <circle cx="35" cy="22" r="14" fill="#FDBA74" />
    <path d="M 23 20 C 23 6, 47 6, 47 20 Z" fill="#1E293B" />
    <path d="M 22 38 L 48 38 L 52 105 L 18 105 Z" fill="#EAB308" />
    <path d="M 22 48 L -18 32 L -18 42 L 22 60 Z" fill="#EAB308" />
    <circle cx="60" cy="72" r="17" fill="#0284C7" stroke="#FFFFFF" stroke-width="2" />
    <text x="60" y="75" fill="#FFFFFF" font-size="8.5" font-weight="bold" text-anchor="middle" font-family="sans-serif">NFT</text>
    <rect x="23" y="105" width="10" height="85" fill="#1E293B" />
    <rect x="37" y="105" width="10" height="85" fill="#1E293B" />
    <ellipse cx="26" cy="190" rx="8" ry="4" fill="#0F172A" />
    <ellipse cx="40" cy="190" rx="8" ry="4" fill="#0F172A" />
  </g>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('./public/images/nft_marketplace_hero_2ss.png')
  .then(() => console.log('Successfully generated public/images/nft_marketplace_hero_2ss.png'))
  .catch(err => console.error(err));
