import React from 'react';
import HotelCard from '../../components/HotelCard';
import hotelsData from '../../data/hotels.json';

export const metadata = {
  title: 'Resort Hội An',
  description: 'Danh sách resort tại Hội An',
};

export default function HoiAnPage() {
  const filtered = hotelsData.filter((h) => h.area === 'Hoi-An');
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Resort Hội An</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
