
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const APP_DIR = path.join(process.cwd(), 'src/app');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Branding colors per user directive: Color Lock
// Branding colors per user directive: Color Lock (Blue/Navy Theme)
const COLORS = {
    container: '#4988C4',  // Background color (Medium Blue)
    primary: '#1C4D8D',    // Primary symbol color (Dark Blue)
    secondary: '#0F2854',  // Accent color (Dark Navy)
    lightAccent: '#BDE8F5' // Light circle color (Light Blue)
};

// Internal scaling for symbols (0.55 matches the vector group scale)
const SYMBOL_SCALE = 0.55;

// The paths from the provided vector drawable
const LOGO_PATHS = `
    <!-- Path 1: Light Blue Circle -->
    <path
        d="M12 12m-12 0a12 12 0 1 1 24 0a12 12 0 1 1 -24 0"
        fill="${COLORS.lightAccent}"
    />
    <!-- Path 2: Main Symbol (Pace P/Check) -->
    <path
        d="M11.993 21C10.743 21 9.572 20.766 8.479 20.299C7.386 19.831 6.433 19.191 5.62 18.377C4.808 17.564 4.168 16.611 3.701 15.517C3.234 14.423 3 13.251 3 12C3 10.749 3.234 9.576 3.701 8.479C4.168 7.382 4.808 6.427 5.62 5.614C6.433 4.8 7.386 4.162 8.479 3.697C9.572 3.232 10.743 3 11.993 3C13.256 3 14.431 3.232 15.517 3.697C16.603 4.162 17.556 4.8 18.375 5.612C19.096 6.333 19.673 7.143 20.108 8.041C20.544 8.939 20.822 9.901 20.942 10.929C20.963 11.122 20.979 11.316 20.99 11.513C21 11.71 21.003 11.908 20.997 12.108C20.991 12.455 20.851 12.736 20.578 12.95C20.305 13.165 19.996 13.246 19.649 13.191C19.303 13.137 19.026 12.976 18.818 12.709C18.61 12.443 18.499 12.13 18.483 11.77C18.476 11.637 18.466 11.512 18.455 11.393C18.443 11.275 18.427 11.149 18.405 11.017C18.299 10.322 18.092 9.667 17.785 9.051C17.478 8.435 17.083 7.881 16.599 7.39C16.009 6.799 15.321 6.339 14.535 6.01C13.75 5.68 12.902 5.515 11.993 5.515C10.172 5.515 8.637 6.141 7.387 7.391C6.138 8.641 5.513 10.178 5.513 12C5.513 13.822 6.138 15.359 7.387 16.609C8.637 17.859 10.172 18.485 11.993 18.485C12.445 18.485 12.88 18.447 13.298 18.373C13.715 18.298 14.118 18.176 14.506 18.006C14.84 17.87 15.179 17.837 15.521 17.908C15.863 17.979 16.13 18.156 16.323 18.44C16.523 18.732 16.586 19.045 16.513 19.381C16.439 19.717 16.249 19.96 15.944 20.11C15.342 20.41 14.712 20.634 14.053 20.78C13.395 20.927 12.708 21 11.993 21ZM13.166 11.504L15.287 13.624C15.515 13.852 15.625 14.126 15.617 14.446C15.609 14.766 15.489 15.039 15.255 15.265C15.028 15.485 14.755 15.594 14.435 15.59C14.116 15.586 13.843 15.474 13.616 15.254L11.21 12.847C11.086 12.722 10.993 12.586 10.93 12.437C10.868 12.288 10.837 12.127 10.837 11.954V9.073C10.837 8.757 10.953 8.484 11.183 8.253C11.413 8.023 11.686 7.907 12.001 7.907C12.324 7.907 12.599 8.023 12.826 8.253C13.052 8.484 13.166 8.757 13.166 9.073V11.504Z"
        fill="${COLORS.primary}"
    />
    <!-- Path 3: Accent (Dark Navy) -->
    <path
        d="M17.529 17.17C17.816 17.457 18.159 17.6 18.56 17.6C18.96 17.6 19.304 17.457 19.591 17.17C19.878 16.883 20.021 16.539 20.021 16.138C20.021 15.737 19.878 15.393 19.591 15.106C19.304 14.819 18.96 14.676 18.56 14.676C18.159 14.676 17.816 14.819 17.529 15.106C17.242 15.393 17.099 15.737 17.099 16.138C17.099 16.539 17.242 16.883 17.529 17.17Z"
        fill="${COLORS.secondary}"
    />
`;

// Only the inner symbol (The group)
const LOGO_MARK_INNER = `
    <g transform="translate(12 12) scale(${SYMBOL_SCALE}) translate(-12 -12)">
        ${LOGO_PATHS}
    </g>
`;

// Logo mark (Used in header - effectively transparent bg, just the symbol)
const LOGO_MARK_SVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${LOGO_MARK_INNER}</svg>`;

// Full logo (Used for App Icon, Favicon - Has the background container)
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
