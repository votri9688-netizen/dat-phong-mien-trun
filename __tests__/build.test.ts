import fs from 'fs';
import path from 'path';

describe('Kiểm thử Build và Xuất tĩnh (TDD)', () => {
  const outDir = path.resolve(__dirname, '..', 'out');

  test('Thư mục out tồn tại sau khi build', () => {
    expect(fs.existsSync(outDir)).toBe(true);
  });

  test('Trang chủ index.html tồn tại và có nội dung', () => {
    const indexPath = path.join(outDir, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
    const content = fs.readFileSync(indexPath, 'utf-8');
    expect(content.length).toBeGreaterThan(100);
  });

  test('Các trang danh mục khu vực tồn tại', () => {
    const daNang = path.join(outDir, 'khach-san-da-nang.html');
    const hue = path.join(outDir, 'khach-san-hue.html');
    const hoiAn = path.join(outDir, 'resort-hoi-an.html');

    expect(fs.existsSync(daNang)).toBe(true);
    expect(fs.existsSync(hue)).toBe(true);
    expect(fs.existsSync(hoiAn)).toBe(true);
  });

  test('Trang chi tiết khách sạn động (SSG) tồn tại', () => {
    const muongThanh = path.join(outDir, 'da-nang', 'muong-thanh-luxury-da-nang.html');
    const fourSeasons = path.join(outDir, 'hoi-an', 'four-seasons-the-nam-hai-hoi-an.html');
    const azerai = path.join(outDir, 'hue', 'azerai-la-residence-hue.html');

    expect(fs.existsSync(muongThanh)).toBe(true);
    expect(fs.existsSync(fourSeasons)).toBe(true);
    expect(fs.existsSync(azerai)).toBe(true);
  });

  test('Các file SEO và cấu hình tĩnh tồn tại', () => {
    const robots = path.join(outDir, 'robots.txt');
    const sitemap = path.join(outDir, 'sitemap.xml');
    const llms = path.join(outDir, 'llms.txt');

    expect(fs.existsSync(robots)).toBe(true);
    expect(fs.existsSync(sitemap)).toBe(true);
    expect(fs.existsSync(llms)).toBe(true);
  });
});
