'use client';

import React from 'react';

type FilterProps = {
  filters: {
    rating: string;
    price: string;
    utilities: string[];
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
};

const ratings = [
  { label: 'Tất cả sao', value: 'all' },
  { label: '3★ trở lên', value: '3' },
  { label: '4★ trở lên', value: '4' },
  { label: '5★ cao cấp', value: '5' },
];

const prices = [
  { label: 'Tất cả mức giá', value: 'all' },
  { label: 'Dưới 1.5 triệu', value: 'low' },
  { label: '1.5 - 3.0 triệu', value: 'mid' },
  { label: 'Trên 3.0 triệu', value: 'high' },
];

const amenities = ['Gần biển', 'Gần phố cổ', 'Bể bơi', 'Gia đình', 'VAT'];

export default function QuickFilterBar({ filters, setFilters }: FilterProps) {
  const toggleUtility = (item: string) => {
    setFilters((prev: any) => {
      const arr = prev.utilities || [];
      return {
        ...prev,
        utilities: arr.includes(item) ? arr.filter((v: string) => v !== item) : [...arr, item],
      };
    });
  };

  return (
    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              value={filters.rating}
              onChange={(e) => setFilters((prev: any) => ({ ...prev, rating: e.target.value }))}
              aria-label="Lọc theo sao"
              className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl px-4 py-2.5 pr-8 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {ratings.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.label}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-3 pointer-events-none text-xs text-gray-400">▼</span>
          </div>

          <div className="relative">
            <select
              value={filters.price}
              onChange={(e) => setFilters((prev: any) => ({ ...prev, price: e.target.value }))}
              aria-label="Lọc theo giá"
              className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl px-4 py-2.5 pr-8 hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            >
              {prices.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
            <span className="absolute right-3 top-3 pointer-events-none text-xs text-gray-400">▼</span>
          </div>
        </div>

        {/* Amenity Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">Tiện ích:</span>
          {amenities.map((item) => {
            const active = filters.utilities.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleUtility(item)}
                className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  active
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {active ? '✓ ' : '+ '}
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
