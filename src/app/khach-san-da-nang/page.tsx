import React from 'react';
import Link from 'next/link';
import HotelCard from '../../components/HotelCard';
import hotelsData from '../../data/hotels.json';
import { Hotel } from '../../types/hotel';

export const metadata = {
  title: 'Khách sạn Đà Nẵng Giá Tốt - Đặt Phòng Miền Trung',
  description: 'Danh sách khách sạn gần biển Mỹ Khê, trung tâm sông Hàn Đà Nẵng chất lượng 4-5 sao giá ưu đãi.',
};

export default function DaNangPage() {
  const list = hotelsData as Hotel[];
  const filtered = list.filter((h) => h.area.toLowerCase() === 'da-nang');

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Category Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 to-cyan-900 text-white p-8 md:p-12 mb-10 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Điểm đến Đà Nẵng
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Khách Sạn Biển Đà Nẵng
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Trải nghiệm thành phố đáng sống nhất Việt Nam với các khách sạn view biển Mỹ Khê, gần cầu Rồng và sông Hàn thơ mộng.
            </p>
          </div>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}
