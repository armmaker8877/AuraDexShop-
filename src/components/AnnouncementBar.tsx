import React, { useState } from 'react';
import { X } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#0E0920] text-purple-200 text-xs py-2 px-4 border-b border-purple-500/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="font-semibold text-purple-400 shrink-0">ประกาศร้าน:</span>
          <span className="text-purple-200/90 truncate">
            ยินดีต้อนรับสู่ AURA DEX · เว็บไซต์จำลองสำหรับการทดสอบระบบ · โปรดอ่านรายละเอียดสินค้าก่อนสั่งซื้อ
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-purple-400 hover:text-white shrink-0 p-1 -mr-1 transition-colors"
          aria-label="ปิดแถบประกาศ"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
