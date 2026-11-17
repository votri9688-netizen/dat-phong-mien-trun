'use client';

import React from 'react';
import HotelCard from '../components/HotelCard';
import QuickFilterBar from '../components/QuickFilterBar';
import hotelsData from '../data/hotels.json';

type Hotel = typeof hotelsData[0];

export default function HomeContent() {
  const [filters, setFilters] = React.useState({
    rating: 'all',
    price: 'all',
    utilities: [] as string[],
  });

  const filtered = hotelsData.filter((hotel) => {
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
    <div className="container mx-auto py-8">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Đặt phòng Miền Trung</h1>
        <p className="text-gray-600 mt-2">Đà Nẵng – Hội An – Huế</p>
      </header>
      <QuickFilterBar filters={filters} setFilters={setFilters} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filtered.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </section>
    </div>
  );
}
