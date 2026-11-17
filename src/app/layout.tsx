import './globals.css';
import Link from 'next/link';
import ZaloBookingBox from '../components/ZaloBookingBox';

export const metadata = {
  title: 'Đặt Phòng Miền Trung - Khách sạn & Resort Đà Nẵng, Hội An, Huế',
  description: 'Hệ thống đặt phòng khách sạn, resort nghỉ dưỡng cao cấp giá tốt nhất tại Đà Nẵng, Hội An và Cố đô Huế. Hỗ trợ 24/7 qua Zalo OA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_OA_URL || 'https://zalo.me';

  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 min-h-screen flex flex-col font-sans antialiased">
        {/* Top Announcement Bar */}
        <div className="bg-gradient-to-r from-teal-700 via-teal-600 to-cyan-700 text-white text-xs py-2 px-4 text-center font-medium shadow-inner">
          ✨ Ưu đãi mùa du lịch Miền Trung: Giảm đến 30% khi đặt trước qua Zalo OA!
        </div>

        {/* Main Header / Navigation */}
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
          <div className="container mx-auto px-4 lg:px-8 h-18 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-600 to-emerald-400 flex items-center justify-center text-white text-xl shadow-md group-hover:scale-105 transition-transform">
                🏖️
              </span>
              <div>
                <span className="text-lg font-black tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors block">
                  ĐẶT PHÒNG MIỀN TRUNG
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block -mt-1">
                  Đà Nẵng • Hội An • Huế
                </span>
              </div>
            </Link>

            {/* Nav Menu */}
            <nav className="hidden md:flex items-center gap-1 font-medium text-sm text-slate-600">
              <Link href="/" className="px-3.5 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/60 transition">
                Trang chủ
              </Link>
              <Link href="/khach-san-da-nang" className="px-3.5 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/60 transition">
                Khách sạn Đà Nẵng
              </Link>
              <Link href="/resort-hoi-an" className="px-3.5 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/60 transition">
                Resort Hội An
              </Link>
              <Link href="/khach-san-hue" className="px-3.5 py-2 rounded-lg hover:text-teal-600 hover:bg-teal-50/60 transition">
                Khách sạn Huế
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href={zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <span>💬 Hotline Zalo</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>

        {/* Professional Footer */}
        <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              {/* Brand Info */}
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏖️</span>
                  <span className="text-white font-extrabold text-base tracking-wide">ĐẶT PHÒNG MIỀN TRUNG</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Kênh tổng hợp và hỗ trợ đặt phòng khách sạn, resort nghỉ dưỡng cao cấp uy tín hàng đầu miền Trung với mức giá ưu đãi và hỗ trợ tận tâm.
                </p>
              </div>

              {/* Destinations */}
              <div>
                <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Điểm đến hàng đầu</h4>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link href="/khach-san-da-nang" className="hover:text-teal-400 transition">Khách sạn ven biển Đà Nẵng</Link>
                  </li>
                  <li>
                    <Link href="/resort-hoi-an" className="hover:text-teal-400 transition">Resort nghỉ dưỡng Hội An</Link>
                  </li>
                  <li>
                    <Link href="/khach-san-hue" className="hover:text-teal-400 transition">Khách sạn di sản Cố đô Huế</Link>
                  </li>
                </ul>
              </div>

              {/* Policy & Support */}
              <div>
                <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Cam kết dịch vụ</h4>
                <ul className="space-y-2 text-xs">
                  <li>✓ Giá tốt nhất từ đối tác</li>
                  <li>✓ Xác nhận phòng nhanh chóng</li>
                  <li>✓ Hỗ trợ xuất hóa đơn VAT</li>
                  <li>✓ Tư vấn lịch trình miễn phí</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">Hỗ trợ 24/7</h4>
                <p className="text-xs text-slate-400 mb-2">Liên hệ nhanh qua Zalo Official Account:</p>
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600/20 text-teal-300 border border-teal-500/30 text-xs px-3 py-1.5 rounded-lg hover:bg-teal-600 hover:text-white transition font-medium"
                >
                  Kết nối Zalo tư vấn
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Đặt Phòng Miền Trung. Bảo lưu mọi quyền.
            </div>
          </div>
        </footer>

        {/* Floating Quick Action */}
        <ZaloBookingBox />
      </body>
    </html>
  );
}
