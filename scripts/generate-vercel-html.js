import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Try to find the manifest and client assets
const distDir = join(__dirname, "..", "dist");
const clientDir = join(distDir, "client", "client");
const manifestPath = join(distDir, ".vite", "manifest.json");

console.log(`📦 dist dir: ${distDir}`);
console.log(`📦 client dir: ${clientDir}`);
console.log(`📦 manifest: ${manifestPath}`);

// Check if manifest exists
if (!existsSync(manifestPath)) {
  console.error("❌ Manifest not found. Make sure to run the Vite build first.");
  process.exit(1);
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf-8"));
console.log("📋 Manifest keys:", Object.keys(manifest));

// Find the main entry (usually __root or index)
const entryKey = Object.keys(manifest).find((k) => k.includes("__root") || k.includes("index")) || Object.keys(manifest)[0];
const entry = manifest[entryKey];

console.log(`📄 Using entry: ${entryKey}`);

// Read CSS file
const cssFile = entry.css?.[0]?.file;
if (!cssFile) {
  console.error("❌ No CSS file found in manifest entry");
  process.exit(1);
}
const cssPath = join(clientDir, cssFile);
const cssHref = `/assets/${cssFile}`;

// Read JS file
const jsFile = entry.file;
const jsPath = join(clientDir, jsFile);
const jsSrc = `/assets/${jsFile}`;

console.log(`🎨 CSS: ${cssPath}`);
console.log(`📜 JS: ${jsPath}`);

const cssContent = readFileSync(cssPath, "utf-8");
const jsContent = readFileSync(jsPath, "utf-8");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>cleo — Your money, spoken.</title>
    <meta name="description" content="The AI assistant that talks to you about your finances. Honest, sharp, always there." />
    <meta name="author" content="Lovable" />
    <meta property="og:title" content="cleo — Your money, spoken." />
    <meta property="og:description" content="The AI assistant that talks to you about your finances. Honest, sharp, always there." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@Lovable" />
    <link rel="stylesheet" href="${cssHref}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${jsSrc}"></script>
  </body>
</html>`;

const outputPath = join(distDir, "index.html");
writeFileSync(outputPath, html);
console.log(`✅ Static HTML generated at ${outputPath}`);