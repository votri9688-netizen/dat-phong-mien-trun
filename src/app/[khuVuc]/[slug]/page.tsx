import React from 'react';
import HotelCard from '../../../components/HotelCard';
import hotelsData from '../../../data/hotels.json';

type Hotel = typeof hotelsData[0];

import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Chi tiết khách sạn',
  description: 'Thông tin chi tiết khách sạn',
};

export async function generateStaticParams() {
  return hotelsData.map((h) => ({ khuVuc: h.area.toLowerCase().replace(/ /g, '-'), slug: h.slug }));
}

export default function HotelDetail({ params }: { params: { khuVuc: string; slug: string } }) {
  const hotel = hotelsData.find(
    (h) => h.slug === params.slug && h.area.toLowerCase().replace(/ /g, '-') === params.khuVuc
  );
  if (!hotel) notFound();
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
      <img src={hotel.coverImage} alt={hotel.name} className="w-full max-h-96 object-cover mb-4" />
      <p className="mb-2">Giá từ: {hotel.priceFrom.toLocaleString()}₫/đêm</p>
      <p className="mb-2">Đánh giá: {hotel.rating} ★</p>
      <p className="mb-2">Tags: {hotel.tags?.join(', ')}</p>
      {/* Schema JSON‑LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotel.schemaJsonLd) }} />
      {/* Zalo booking */}
      <a
        href={process.env.NEXT_PUBLIC_ZALO_OA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Đặt phòng qua Zalo
      </a>
    </div>
  );
}
