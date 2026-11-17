'use client';

import React from 'react';
import Link from 'next/link';
import HotelCard from '../components/HotelCard';
import QuickFilterBar from '../components/QuickFilterBar';
import hotelsData from '../data/hotels.json';
import { Hotel } from '../types/hotel';

export default function HomeContent() {
  const [filters, setFilters] = React.useState({
    rating: 'all',
    price: 'all',
    utilities: [] as string[],
  });

  const allHotels = hotelsData as Hotel[];

  const filtered = allHotels.filter((hotel) => {
    if (filters.rating !== 'all' && hotel.rating < Number(filters.rating)) return false;
    if (filters.price !== 'all') {
      const price = hotel.priceFrom;
      if (filters.price === 'low' && price > 1500000) return false;
      if (filters.price === 'mid' && (price < 1500000 || price > 3000000)) return false;
      if (filters.price === 'high' && price < 3000000) return false;
    }
    if (filters.utilities.length) {
      const hasAll = filters.utilities.every(
        (t) => hotel.utilities?.includes(t) || hotel.tienIch?.includes(t) || hotel.tags?.includes(t)
      );
      if (!hasAll) return false;
    }
    return true;
  });

  return (
    <div>
      {/* Hero Banner Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span>✨</span>
            <span>Khám phá điểm đến hàng đầu Miền Trung Việt Nam</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6">
            Kỳ Nghỉ Trong Mơ Tại <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
              Đà Nẵng • Hội An • Huế
            </span>
          </h1>
          <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Hơn 100+ khách sạn 4-5 sao, resort nghỉ dưỡng cao cấp với giá ưu đãi trực tiếp. Hỗ trợ xác nhận phòng nhanh và xuất hóa đơn VAT trong 5 phút.
          </p>

          {/* Quick Destination Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/khach-san-da-nang"
              className="bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition duration-200"
            >
              🌊 Khách sạn Đà Nẵng
            </Link>
            <Link
              href="/resort-hoi-an"
              className="bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition duration-200"
            >
              🏮 Resort Hội An
            </Link>
            <Link
              href="/khach-san-hue"
              className="bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition duration-200"
            >
              🏯 Khách sạn Cố Đô Huế
            </Link>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-8 py-10">
        {/* Filter Bar */}
        <div className="-mt-8 relative z-20">
          <QuickFilterBar filters={filters} setFilters={setFilters} />
        </div>

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-wider text-teal-600 font-bold">Danh sách nổi bật</span>
            <h2 className="text-2xl font-black text-slate-900 mt-1">Khách sạn & Resort được yêu thích</h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 mt-2 md:mt-0">
            Tìm thấy <strong className="text-teal-600 font-bold">{filtered.length}</strong> khách sạn phù hợp
          </span>
        </div>

        {/* Hotel Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <span className="text-4xl block mb-3">🔍</span>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Không tìm thấy khách sạn phù hợp</h3>
            <p className="text-sm text-gray-500 mb-4">Vui lòng thử điều chỉnh lại bộ lọc sao hoặc tầm giá bên trên.</p>
            <button
              onClick={() => setFilters({ rating: 'all', price: 'all', utilities: [] })}
              className="bg-teal-600 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="text-3xl block mb-2">🏷️</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Giá tốt nhất</h4>
            <p className="text-xs text-slate-500">Mức giá cạnh tranh trực tiếp từ các khách sạn đối tác.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="text-3xl block mb-2">⚡</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Xác nhận tức thì</h4>
            <p className="text-xs text-slate-500">Giữ phòng trong 5 phút qua kênh hỗ trợ Zalo chuyên nghiệp.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="text-3xl block mb-2">📄</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Xuất hóa đơn VAT</h4>
            <p className="text-xs text-slate-500">Hỗ trợ đầy đủ hóa đơn điện tử cho khách công tác và đoàn thể.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
            <span className="text-3xl block mb-2">🤝</span>
            <h4 className="font-bold text-slate-900 text-sm mb-1">Hỗ trợ 24/7</h4>
            <p className="text-xs text-slate-500">Đội ngũ chuyên viên địa phương luôn sẵn sàng tư vấn.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
