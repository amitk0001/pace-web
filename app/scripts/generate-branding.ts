
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'src/app');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Branding colors per user directive: Color Lock
const COLORS = {
    container: '#14b8a6',  // Container / Background color
    primary: '#004d40',    // Primary symbol color (Arc & Needle)
    secondary: '#ffc107',  // Secondary element color (Dot)
    accent: '#FFFFFF',     // Accent / highlight color (Island circle)
};

// Internal scaling for symbols to create breathing room (padding) inside the island
const SYMBOL_SCALE = 0.55;

const LOGO_PATHS = `
    <!-- Arc (Primary) -->
    <path d="M12 22.85C10.4833 22.85 9.06667 22.5667 7.75 22C6.43333 21.4333 5.2875 20.6625 4.3125 19.6875C3.3375 18.7125 2.56667 17.5667 2 16.25C1.43333 14.9333 1.15 13.5167 1.15 12C1.15 10.4833 1.43333 9.06667 2 7.75C2.56667 6.43333 3.3375 5.2875 4.3125 4.3125C5.2875 3.3375 6.43333 2.56667 7.75 2C9.06667 1.43333 10.4833 1.15 12 1.15C13.5167 1.15 14.9333 1.42917 16.25 1.9875C17.5667 2.54583 18.7167 3.31667 19.7 4.3C20.5667 5.16667 21.2583 6.13333 21.775 7.2C22.2917 8.26667 22.625 9.4 22.775 10.6C22.8083 10.8333 22.8292 11.0708 22.8375 11.3125C22.8458 11.5542 22.85 11.7917 22.85 12.025C22.85 12.4583 22.6792 12.8083 22.3375 13.075C21.9958 13.3417 21.6083 13.4417 21.175 13.375C20.7417 13.3083 20.3958 13.1042 20.1375 12.7625C19.8792 12.4208 19.7333 12.0333 19.7 11.6C19.6833 11.4333 19.6667 11.2708 19.65 11.1125C19.6333 10.9542 19.6083 10.7917 19.575 10.625C19.4417 9.84167 19.2 9.10417 18.85 8.4125C18.5 7.72083 18.0417 7.09167 17.475 6.525C16.775 5.825 15.9583 5.27917 15.025 4.8875C14.0917 4.49583 13.0833 4.3 12 4.3C9.83333 4.3 8.00833 5.04167 6.525 6.525C5.04167 8.00833 4.3 9.83333 4.3 12C4.3 14.1667 5.04167 15.9917 6.525 17.475C8.00833 18.9583 9.83333 19.7 12 19.7C12.5 19.7 12.9917 19.6583 13.475 19.575C13.9583 19.4917 14.4167 19.3583 14.85 19.175C15.2667 19.0083 15.6875 18.975 16.1125 19.075C16.5375 19.175 16.8667 19.4083 17.1 19.775C17.3333 20.1417 17.4 20.5333 17.3 20.95C17.2 21.3667 16.9583 21.6667 16.575 21.85C15.875 22.1833 15.1458 22.4333 14.3875 22.6C13.6292 22.7667 12.8333 22.85 12 22.85Z" fill="${COLORS.primary}" />
    <!-- Dot (Secondary) -->
    <path d="M18.5125 18.2875C18.8708 18.6458 19.3 18.825 19.8 18.825C20.3 18.825 20.7292 18.6458 21.0875 18.2875C21.4458 17.9292 21.625 17.5 21.625 17C21.625 16.5 21.4458 16.0708 21.0875 15.7125C20.7292 15.3542 20.3 15.175 19.8 15.175C19.3 15.175 18.8708 15.3542 18.5125 15.7125C18.1542 16.0708 17.975 16.5 17.975 17C17.975 17.5 18.1542 17.9292 18.5125 18.2875Z" fill="${COLORS.secondary}" />
    <!-- Needle (Primary) -->
    <path d="M15.925 13.95L13.375 11.4V8.5C13.375 8.11667 13.2417 7.79167 12.975 7.525C12.7083 7.25833 12.3833 7.125 12 7.125C11.6167 7.125 11.2917 7.25833 11.025 7.525C10.7583 7.79167 10.625 8.11667 10.625 8.5V11.9C10.625 12.1167 10.6625 12.3167 10.7375 12.5C10.8125 12.6833 10.925 12.85 11.075 13L13.95 15.875C14.2167 16.1417 14.5375 16.2792 14.9125 16.2875C15.2875 16.2958 15.6167 16.1667 15.9 15.9C16.1833 15.6333 16.3292 15.3125 16.3375 14.9375C16.3458 14.5625 16.2083 14.2333 15.925 13.95Z" fill="${COLORS.primary}" />
`;

const LOGO_MARK_INNER = `
    <circle cx="12" cy="12" r="11.5" fill="${COLORS.accent}" />
    <g transform="translate(12 12) scale(${SYMBOL_SCALE}) translate(-12 -12)">
        ${LOGO_PATHS}
    </g>
`;

const LOGO_MARK_SVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${LOGO_MARK_INNER}</svg>`;

const LOGO_FULL_SVG = `
<svg width="512" height="512" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="${COLORS.container}" />
    ${LOGO_MARK_INNER}
</svg>
`;

async function generate() {
    // Ensure directories exist
    if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    if (!fs.existsSync(APP_DIR)) fs.mkdirSync(APP_DIR, { recursive: true });

    // 1. Save SVGs
    fs.writeFileSync(path.join(PUBLIC_DIR, 'logo-mark.svg'), LOGO_MARK_SVG.trim());
    fs.writeFileSync(path.join(PUBLIC_DIR, 'logo-full.svg'), LOGO_FULL_SVG.trim());
    console.log('Saved SVG logos with padding refinement.');

    // 2. Generate PNGs using Sharp
    const buffer = Buffer.from(LOGO_FULL_SVG);

    // Standard icon (32x32)
    await sharp(buffer).resize(32, 32).toFile(path.join(APP_DIR, 'icon.png'));

    // Apple touch icon (180x180)
    await sharp(buffer).resize(180, 180).toFile(path.join(APP_DIR, 'apple-icon.png'));

    // High res icon (192, 512) for manifest
    await sharp(buffer).resize(192, 192).toFile(path.join(PUBLIC_DIR, 'icon-192.png'));
    await sharp(buffer).resize(512, 512).toFile(path.join(PUBLIC_DIR, 'icon-512.png'));

    // Favicon.png
    await sharp(buffer).resize(32, 32).toFile(path.join(APP_DIR, 'favicon.png'));

    console.log('Generated refined PNG icons.');
}

generate().catch(console.error);
