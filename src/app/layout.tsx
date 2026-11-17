import './globals.css';
import ZaloBookingBox from '../components/ZaloBookingBox';

export const metadata = {
  title: 'Đặt phòng Miền Trung',
  description: 'Website đặt phòng khách sạn và resort tại miền Trung',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Đặt phòng Miền Trung</h1>
          <a href={process.env.NEXT_PUBLIC_ZALO_OA_URL} target="_blank" rel="noopener noreferrer" className="text-green-600">
            Zalo OA
          </a>
        </header>
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <footer className="bg-white text-center p-2 text-sm">
          © {new Date().getFullYear()} {process.env.COMPANY_NAME || 'Công ty'}
        </footer>
        {/* Zalo button */}
        <ZaloBookingBox />
      </body>
    </html>
  );
}
