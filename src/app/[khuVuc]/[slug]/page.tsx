import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import hotelsData from '../../../data/hotels.json';
import { Hotel } from '../../../types/hotel';

export const metadata = {
  title: 'Chi tiết khách sạn - Đặt Phòng Miền Trung',
  description: 'Thông tin chi tiết giá phòng, tiện ích và đặt chỗ trực tuyến qua Zalo OA.',
};

export async function generateStaticParams() {
  const list = hotelsData as Hotel[];
  return list.map((h) => ({
    khuVuc: h.area.toLowerCase().replace(/ /g, '-'),
    slug: h.slug,
  }));
}

const areaNames: Record<string, string> = {
  'Da-Nang': 'Đà Nẵng',
  'da-nang': 'Đà Nẵng',
  'Hoi-An': 'Hội An',
  'hoi-an': 'Hội An',
  'Hue': 'Huế',
  'hue': 'Huế',
};

export default function HotelDetail({ params }: { params: { khuVuc: string; slug: string } }) {
  const list = hotelsData as Hotel[];
  const hotel = list.find(
    (h) => h.slug === params.slug && h.area.toLowerCase().replace(/ /g, '-') === params.khuVuc
  );

  if (!hotel) notFound();

  const displayArea = areaNames[hotel.area] || hotel.area;
  const zaloUrl = process.env.NEXT_PUBLIC_ZALO_OA_URL || 'https://zalo.me';
  const coverImg = hotel.coverImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200';

  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-teal-600 transition">Trang chủ</Link>
          <span>/</span>
          <Link href={`/${params.khuVuc}`} className="hover:text-teal-600 transition capitalize">
            {displayArea}
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate max-w-xs">{hotel.name}</span>
        </nav>

        {/* Hero Image & Overview Card */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 mb-8">
          <div className="relative h-72 md:h-96 w-full overflow-hidden bg-slate-100">
            <img
              src={coverImg}
              alt={hotel.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  📍 {displayArea}
                </span>
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  ★ {hotel.rating}.0 / 5.0
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 drop-shadow-md">
                {hotel.name}
              </h1>
              <p className="text-xs md:text-sm text-slate-200">
                Nghỉ dưỡng đẳng cấp • Xác nhận phòng nhanh chóng • Hỗ trợ đặt qua Zalo
              </p>
            </div>
          </div>

          {/* Details & Booking Box */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left 2 Cols: Details & Amenities */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Tiện ích & Điểm nổi bật</h3>
                <div className="flex flex-wrap gap-2">
                  {hotel.tags && hotel.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-xl border border-teal-100"
                    >
                      ✓ {tag}
                    </span>
                  ))}
                  {hotel.tienIch && hotel.tienIch.map((amenity, i) => (
                    <span
                      key={`amenity-${i}`}
                      className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-xl"
                    >
                      • {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Mô tả chỗ nghỉ</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {hotel.name} tọa lạc tại vị trí đắc địa của {displayArea}, mang đến không gian nghỉ ngơi thư thái với chất lượng dịch vụ tiêu chuẩn. Nơi đây là lựa chọn lý tưởng cho các gia đình, cặp đôi hoặc khách công tác tìm kiếm không gian sang trọng và tiện nghi.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-800">
                <strong>💡 Lưu ý đặt phòng:</strong> Giá phòng có thể thay đổi tùy thuộc vào dịp lễ, cuối tuần hoặc tình trạng phòng trống. Vui lòng liên hệ chuyên viên qua Zalo để nhận báo giá chính xác nhất kèm ưu đãi theo ngày bạn lưu trú.
              </div>
            </div>

            {/* Right Col: Price Card & Zalo CTA */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                  Giá ưu đãi chỉ từ
                </span>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black text-teal-600">
                    {hotel.priceFrom.toLocaleString('vi-VN')}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">₫ / đêm</span>
                </div>

                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-1.5">
                    <span className="text-teal-600 font-bold">✓</span> Đã bao gồm thuế & phí dịch vụ
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-teal-600 font-bold">✓</span> Hỗ trợ giữ phòng nhanh trong 5 phút
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="text-teal-600 font-bold">✓</span> Tư vấn phòng view đẹp miễn phí
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition text-sm text-center"
                >
                  <span>💬 Đặt Phòng Qua Zalo Ngay</span>
                </a>
                <span className="text-[11px] text-slate-400 text-center block mt-2">
                  Phản hồi trong 1-3 phút • Hoàn toàn miễn phí
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Schema JSON-LD for Google SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotel.schemaJsonLd) }}
        />
      </div>
    </div>
  );
}
