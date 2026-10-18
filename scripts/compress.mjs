import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const [inputDir, outputDir, maxArg = "2560"] = process.argv.slice(2);

if (!inputDir || !outputDir) {
  console.error("Usage: node scripts/compress.mjs <inputFolder> <outputFolder> [maxSize]");
  process.exit(1);
}

const maxSize = Number(maxArg);
await mkdir(outputDir, { recursive: true });

const files = (await readdir(inputDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

if (files.length === 0) {
  console.log(`No images found in ${inputDir}`);
  process.exit(0);
}

for (const file of files) {
  const src = path.join(inputDir, file);
  const out = path.join(outputDir, file.replace(/\.(jpeg|png|webp)$/i, ".jpg"));

  const info = await sharp(src)
    .rotate()
    .resize({ width: maxSize, height: maxSize, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(out);

  console.log(`${file} -> ${out}  ${info.width}x${info.height}  ${(info.size / 1e6).toFixed(2)} MB`);
}