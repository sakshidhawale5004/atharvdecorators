import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, ".output");
const outputPublic = path.join(outputDir, "public");
const outputServer = path.join(outputDir, "server");
const serverEntry = path.join(outputServer, "index.mjs");
const distDir = path.join(rootDir, "dist");
const publicDir = path.join(rootDir, "public");

console.log("Generating production dist folder for static hosting (Hostinger)...");

// 1. Recreate dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 2. Copy static public directory assets
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

// 3. Copy compiled client assets (.output/public) over dist
if (fs.existsSync(outputPublic)) {
  fs.cpSync(outputPublic, distDir, { recursive: true });
}

// 4. Copy .output/server to dist/server (for users running Node/SSR)
if (fs.existsSync(outputServer)) {
  fs.cpSync(outputServer, path.join(distDir, "server"), { recursive: true });
}

// 5. Pre-render all routes to true, fully-formed HTML with TanStack Start hydration state
const routes = [
  "/",
  "/about",
  "/services",
  "/projects",
  "/contact",
  "/interior-painting-finishing",
  "/exterior-painting-building-repainting",
  "/civil-repairs-structural-maintenance",
  "/waterproofing-solutions",
  "/texture-pu-polishing-works",
  "/road-miscellaneous-civil-works",
  "/projects/perpustakaan-nasional-jakarta",
  "/projects/silver-grid-office",
  "/projects/java-news-agency",
  "/projects/the-phiramada",
  "/projects/black-badoo-gym",
  "/projects/thinkpod-stadium",
  "/projects/cikuya-station",
  "/projects/souta-airport",
  "/projects/ophelia-luxury-hotel",
];

async function prerenderRoutes() {
  if (!fs.existsSync(serverEntry)) {
    console.warn("Server entry not found at", serverEntry, "- skipping SSR prerender.");
    return;
  }

  const serverUrl = pathToFileURL(serverEntry).href;
  const mod = await import(serverUrl);
  const handler = mod.default;
  const env = { ASSETS: { fetch: async () => new Response("not found", { status: 404 }) } };
  const ctx = { waitUntil: () => {} };

  console.log(`Pre-rendering ${routes.length} pages...`);

  for (const route of routes) {
    try {
      const req = new Request("http://localhost" + route);
      const res = await handler.fetch(req, env, ctx);
      const html = await res.text();

      if (route === "/") {
        fs.writeFileSync(path.join(distDir, "index.html"), html, "utf-8");
      } else {
        // e.g. /about -> dist/about/index.html AND dist/about.html
        const routeSubPath = route.replace(/^\//, "");
        const targetDir = path.join(distDir, routeSubPath);
        fs.mkdirSync(targetDir, { recursive: true });
        fs.writeFileSync(path.join(targetDir, "index.html"), html, "utf-8");
        fs.writeFileSync(path.join(distDir, `${routeSubPath}.html`), html, "utf-8");
      }
      console.log(`  ✓ Rendered ${route} (${html.length} bytes)`);
    } catch (err) {
      console.error(`  ✗ Failed to prerender ${route}:`, err);
    }
  }
}

// 6. Generate .htaccess for Hostinger / Apache / LiteSpeed web servers
function generateHtaccess() {
  const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Serve existing file or directory directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Clean URL: check if request.html exists
  RewriteCond %{DOCUMENT_ROOT}/$1.html -f
  RewriteRule ^(.*)$ $1.html [L]

  # Clean URL: check if request/index.html exists
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*)$ $1/index.html [L]

  # Fallback to index.html for client-side navigation
  RewriteRule ^ index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json application/xml
</IfModule>

# Caching headers for assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
`;

  fs.writeFileSync(path.join(distDir, ".htaccess"), htaccessContent, "utf-8");
  console.log("  ✓ Generated .htaccess for Hostinger routing");
}

async function main() {
  await prerenderRoutes();
  generateHtaccess();
  console.log("\nSuccessfully generated dist/ folder ready for Hostinger upload!");
}

main().catch((err) => {
  console.error("Dist generation error:", err);
  process.exit(1);
});
