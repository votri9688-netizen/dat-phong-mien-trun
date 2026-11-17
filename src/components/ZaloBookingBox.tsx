import React from 'react';

export default function ZaloBookingBox() {
  const href = process.env.NEXT_PUBLIC_ZALO_OA_URL || 'https://zalo.me';
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-4 py-3 rounded-full shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:scale-105 active:scale-95 text-sm"
      >
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping inline-block" />
        <span>Chat Zalo Đặt Phòng</span>
      </a>
    </div>
  );
}
