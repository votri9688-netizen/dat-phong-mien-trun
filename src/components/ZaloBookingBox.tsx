import React from 'react';

export default function ZaloBookingBox() {
  const href = process.env.NEXT_PUBLIC_ZALO_OA_URL || '#';
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg"
    >
      Đặt phòng qua Zalo
    </a>
  );
}
