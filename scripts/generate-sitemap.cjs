#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Config
const siteUrl = process.env.SITE_URL || 'https://www.whatsform.io';
const pagesDir = path.join(__dirname, '..', 'pages');
const publicDir = path.join(__dirname, '..', 'public');
const blogDataFile = path.join(__dirname, '..', 'data', 'pages', 'blog.ts');

/** Collect static routes from pages directory (exclude dynamic, api, and special files) */
function collectRoutes(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];
  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name === 'api') continue; // skip _app, _document, api
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      routes.push(...collectRoutes(full, rel));
      continue;
    }
    if (!entry.name.endsWith('.tsx') && !entry.name.endsWith('.ts') && !entry.name.endsWith('.jsx') && !entry.name.endsWith('.js')) continue;
    const noExt = rel.replace(/\.(tsx|ts|jsx|js)$/i, '');
    if (noExt.includes('[')) continue; // dynamic route
    // map index files
    const route = noExt.endsWith('index') ? `/${noExt.replace(/index$/, '')}` : `/${noExt}`;
    // normalize
    const normalized = route.replace(/\\/g, '/').replace(/\/+$/, '');
    routes.push(normalized === '' ? '/' : normalized);
  }
  return Array.from(new Set(routes)).sort();
}

function generateSitemap(urls) {
  const now = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
urls.map(u => `  <url>\n    <loc>${siteUrl}${u}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.7'}</priority>\n  </url>`).join('\n') +
`\n</urlset>\n`;
  return xml;
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function main() {
  ensureDir(publicDir);
  let routes = collectRoutes(pagesDir);
  // Include dynamic blog slugs if available
  try {
    if (fs.existsSync(blogDataFile)) {
      const src = fs.readFileSync(blogDataFile, 'utf8');
      const slugRegex = /slug:\s*['\"]([^'\"]+)['\"]/g;
      let m;
      const blogSlugs = new Set();
      while ((m = slugRegex.exec(src)) !== null) {
        let s = m[1];
        if (!s.startsWith('/')) s = '/' + s;
        blogSlugs.add(s);
      }
      for (const s of blogSlugs) routes.push(s);
    }
  } catch (e) {
    console.warn('Sitemap: failed to add blog slugs', e.message);
  }
  // Remove legacy PascalCase blog pages (keep slug-based only)
  routes = routes.filter((r) => {
    if (r.startsWith('/blog/')) {
      // exclude ones with uppercase after /blog/
      const tail = r.replace('/blog/', '');
      if (/^[A-Z]/.test(tail)) return false;
      if (/Page$/.test(tail)) return false;
    }
    return true;
  });
  const sitemap = generateSitemap(routes);
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
  // robots.txt
  const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
  console.log(`Generated sitemap for ${routes.length} routes.`);
}

if (require.main === module) {
  main();
}
