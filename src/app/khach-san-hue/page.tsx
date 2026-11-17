import React from 'react';
import Link from 'next/link';
import HotelCard from '../../components/HotelCard';
import hotelsData from '../../data/hotels.json';
import { Hotel } from '../../types/hotel';

export const metadata = {
  title: 'Khách sạn Huế Cố Đô Cổ Kính - Đặt Phòng Miền Trung',
  description: 'Khám phá các khách sạn di sản, gần Đại Nội và bờ sông Hương thơ mộng tại Cố đô Huế.',
};

export default function HuePage() {
  const list = hotelsData as Hotel[];
  const filtered = list.filter((h) => h.area.toLowerCase() === 'hue');

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Category Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-950 to-indigo-950 text-white p-8 md:p-12 mb-10 shadow-sm">
          <div className="relative z-10 max-w-2xl">
            <span className="bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
              Điểm đến Huế
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Khách Sạn Cố Đô Huế
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Trải nghiệm nét đẹp cung đình trầm mặc, các dịch vụ khách sạn 4-5 sao đẳng cấp bên bờ sông Hương xứ Huế.
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
