import React from 'react';
import HotelCard from '../../components/HotelCard';
import hotelsData from '../../data/hotels.json';

export const metadata = {
  title: 'Khách sạn Huế',
  description: 'Danh sách khách sạn tại Huế',
};

export default function HuePage() {
  const filtered = hotelsData.filter((h) => h.area === 'Hue');
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Khách sạn Huế</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
