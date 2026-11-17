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

const ratings = ['all', '3', '4', '5'];
const prices = ['all', 'low', 'mid', 'high'];
const amenities = ['Gần biển', 'Gần phố cổ', 'Bể bơi', 'Gia đình', 'VAT'];

export default function QuickFilterBar({ filters, setFilters }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* Rating */}
      <select
        value={filters.rating}
        onChange={(e) => setFilters((prev: any) => ({ ...prev, rating: e.target.value }))}
        className="border rounded px-2 py-1"
      >
        {ratings.map((r) => (
          <option key={r} value={r}>
            {r === 'all' ? 'Tất cả sao' : `${r}+ sao`}
          </option>
        ))}
      </select>
      {/* Price */}
      <select
        value={filters.price}
        onChange={(e) => setFilters((prev: any) => ({ ...prev, price: e.target.value }))}
        className="border rounded px-2 py-1"
      >
        {prices.map((p) => (
          <option key={p} value={p}>
            {p === 'all'
              ? 'Tất cả giá'
              : p === 'low'
              ? '<1.5 triệu'
              : p === 'mid'
              ? '1.5‑3 triệu'
              : '>3 triệu'}
          </option>
        ))}
      </select>
      {/* Amenities */}
      {amenities.map((a) => (
        <label key={a} className="flex items-center space-x-1">
          <input
            type="checkbox"
            checked={filters.utilities.includes(a)}
            onChange={(e) => {
              const checked = e.target.checked;
              setFilters((prev: any) => {
                const arr = prev.utilities || [];
                return {
                  ...prev,
                  utilities: checked ? [...arr, a] : arr.filter((v: string) => v !== a),
                };
              });
            }}
          />
          <span className="text-sm">{a}</span>
        </label>
      ))}
    </div>
  );
}
