import React from 'react';
import Link from 'next/link';
import HotelCard from '../../components/HotelCard';
import hotelsData from '../../data/hotels.json';
import { Hotel } from '../../types/hotel';

export const metadata = {
  title: 'Resort Hội An Nghỉ Dưỡng Sang Trọng - Đặt Phòng Miền Trung',
  description: 'Top các resort ven biển An Bàng, Cửa Đại và ven sông Hoài phố cổ Hội An đẳng cấp 5 sao.',
};

export default function HoiAnPage() {
  const list = hotelsData as Hotel[];
  const filtered = list.filter((h) => h.area.toLowerCase() === 'hoi-an');

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Category Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-900 to-orange-950 text-white p-8 md:p-12 mb-10 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Điểm đến Hội An
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Resort & Nghỉ Dưỡng Hội An
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Thư giãn tại các khu resort ven biển bình yên, ngập tràn sắc màu đèn lồng và kiến trúc cổ kính đặc trưng của phố Hội.
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
