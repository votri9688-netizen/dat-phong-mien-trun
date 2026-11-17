// scripts/sync-sheets.mjs
/**
 * Placeholder sync script – thực hiện khi build.
 * Thực tế bạn sẽ thay thế bằng logic đọc Google Sheet và ghi dữ liệu.
 */
import { existsSync, writeFileSync } from 'fs';
import path from 'path';

async function main() {
  console.log('🔧 sync-sheets.mjs: chạy sync sheets');
  const dataPath = path.resolve('src/data/hotels.json');
  if (!existsSync(dataPath)) {
    writeFileSync(dataPath, '[]');
  }
  // Tạo các file SEO tạm thời
  writeFileSync('public/llms.txt', 'Hotel booking in Central Vietnam (Da Nang, Hoi An, Hue)');
  writeFileSync('public/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
  writeFileSync('public/robots.txt', "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n");
}

main().catch(err => { console.error('❌ sync-sheets error', err); process.exit(1); });
