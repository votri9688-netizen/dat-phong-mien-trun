import React from 'react';

interface Hotel {
  id: string;
  name: string;
  priceFrom: number;
  rating: number;
  tags?: string[];
}

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{hotel.name}</h2>
      <p className="text-sm mb-1">Giá từ: {hotel.priceFrom.toLocaleString()}₫/đêm</p>
      <p className="text-sm mb-1">Đánh giá: {hotel.rating} ★</p>
      {hotel.tags && hotel.tags.length > 0 && (
        <p className="text-xs text-gray-600">Tags: {hotel.tags.join(', ')}</p>
      )}
    </div>
  );
}
