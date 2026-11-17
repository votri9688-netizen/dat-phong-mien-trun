import React from 'react';
import Link from 'next/link';
import { Hotel } from '../types/hotel';

interface HotelCardProps {
  hotel: Hotel;
}

const areaNames: Record<string, string> = {
  'Da-Nang': 'Đà Nẵng',
  'da-nang': 'Đà Nẵng',
  'Hoi-An': 'Hội An',
  'hoi-an': 'Hội An',
  'Hue': 'Huế',
  'hue': 'Huế',
};

export default function HotelCard({ hotel }: HotelCardProps) {
  const khuVucSlug = hotel.area ? hotel.area.toLowerCase().replace(/ /g, '-') : 'da-nang';
  const detailUrl = `/${khuVucSlug}/${hotel.slug}`;
  const displayArea = areaNames[hotel.area] || hotel.area;
  const image = hotel.coverImage || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
          <span>📍</span>
          <span>{displayArea}</span>
        </div>
        <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-sm flex items-center gap-1">
          <span>★</span>
          <span>{hotel.rating}.0</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <Link href={detailUrl}>
            <h3 className="font-bold text-gray-900 text-lg group-hover:text-teal-600 transition-colors line-clamp-1 mb-1.5">
              {hotel.name}
            </h3>
          </Link>

          {/* Tags */}
          {hotel.tags && hotel.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {hotel.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-gray-50 text-gray-600 px-2 py-0.5 rounded-md border border-gray-100"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Price & CTA */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-gray-400 block">Giá từ</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-teal-600">
                {hotel.priceFrom ? hotel.priceFrom.toLocaleString('vi-VN') : 'Liên hệ'}
              </span>
              <span className="text-xs font-semibold text-gray-500">₫/đêm</span>
            </div>
          </div>
          <Link
            href={detailUrl}
            className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl transition shadow-sm hover:shadow"
          >
            Xem phòng
          </Link>
        </div>
      </div>
    </div>
  );
}
