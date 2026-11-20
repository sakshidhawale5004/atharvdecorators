import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, ".output");
const outputPublic = path.join(outputDir, "public");
const outputServer = path.join(outputDir, "server");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

console.log("Generating dist folder...");

// 1. Recreate dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 2. Copy public directory assets if available
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

// 3. Copy compiled .output/public over dist
if (fs.existsSync(outputPublic)) {
  fs.cpSync(outputPublic, distDir, { recursive: true });
}

// 4. Copy .output/server to dist/server
if (fs.existsSync(outputServer)) {
  fs.cpSync(outputServer, path.join(distDir, "server"), { recursive: true });
}

// 5. Detect compiled CSS and JS assets to generate index.html
const assetsDir = path.join(distDir, "assets");
let cssFile = "";
let jsFile = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const foundCss = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  const foundJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  if (foundCss) cssFile = `/assets/${foundCss}`;
  if (foundJs) jsFile = `/assets/${foundJs}`;
}

const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Atharv Decorators | Building Care &amp; Civil Works</title>
    <meta name="description" content="Atharv Decorators: building painting, civil repairs and waterproofing since 2001." />
    <meta name="author" content="Atharv Decorators" />
    <meta property="og:title" content="Atharv Decorators | Building Care &amp; Civil Works" />
    <meta property="og:description" content="Building painting, civil repairs and waterproofing since 2001." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&amp;family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&amp;family=Outfit:wght@300;400;500;600;700&amp;display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="${cssFile}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    ${jsFile ? `<script type="module" src="${jsFile}"></script>` : ""}
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, "index.html"), indexHtmlContent, "utf-8");

console.log("Successfully created dist/ folder with all production assets, bundles, and index.html.");
