
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function optimizeImages(dir: string) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await optimizeImages(filePath);
        } else {
            if (file.match(/\.(png|jpg|jpeg)$/i)) {
                const ext = path.extname(file);
                const name = path.basename(file, ext);
                const webpPath = path.join(dir, `${name}.webp`);

                if (!fs.existsSync(webpPath)) {
                    console.log(`Optimizing: ${file} -> ${name}.webp`);
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(webpPath);
                }
            }
        }
    }
}

async function main() {
    console.log('Starting image optimization...');
    await optimizeImages(IMAGES_DIR);
    console.log('Image optimization complete!');
}

main().catch(console.error);
