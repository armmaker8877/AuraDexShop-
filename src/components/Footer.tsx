import React from 'react';
import { ShieldAlert, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'all_products' | 'order_tracking') => void;
  onScrollToSection: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onScrollToSection,
  onOpenAdmin
}) => {
  return (
    <footer className="bg-[#07050E] border-t border-purple-500/20 pt-12 pb-8 text-xs text-purple-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* 4 Clean Columns as mandated by Section 3.8 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: About the Shop */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-purple-400/80 shadow-[0_0_12px_rgba(168,85,247,0.6)] shrink-0 bg-[#0A0713]">
                <img
                  src="/assets/aistudio/1D76108E-D4F3-471D-98FD-500111040A4E_8446af98.png"
                  alt="AURA DEX Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-base font-black text-white tracking-wider">
                AURA DEX
              </span>
            </div>
            <p className="leading-relaxed text-purple-300/70">
              ร้านค้าสินค้า Roblox สไตล์ม่วงดำ Gen Z ออกแบบเพื่อความสะดวกบนมือถือและแท็บเล็ต 
              แยกหมวดหมู่ชัดเจน ราคาโปร่งใส ไม่ขอรหัสผ่านลูกค้า
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenAdmin}
                className="text-[11px] text-purple-400 hover:text-purple-300 underline underline-offset-2 cursor-pointer"
              >
                โหมดเจ้าของร้าน (แผงจัดการจำลอง)
              </button>
            </div>
          </div>

          {/* Col 2: Ordering & Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">วิธีสั่งซื้อ & บริการ</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onScrollToSection('how-to-order')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  ขั้นตอนการสั่งซื้อ 3 สเต็ป
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('order_tracking')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  ตรวจสอบสถานะคำสั่งซื้อ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('faq-section')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  คำถามที่พบบ่อย (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('all_products')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  รายการสินค้าทั้งหมด
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Channels */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">ช่องทางติดต่อร้าน</h4>
            <div className="space-y-2 leading-relaxed">
              <div>
                <span className="text-purple-400/60">Line Official: </span>
                <span className="font-semibold text-purple-200">@auradex</span>
              </div>
              <div>
                <span className="text-purple-400/60">Facebook Page: </span>
                <span className="font-semibold text-purple-200">AURA DEX TH</span>
              </div>
              <div>
                <span className="text-purple-400/60">เบอร์โทรติดต่อ: </span>
                <span className="font-semibold text-purple-200">089-XXX-XXXX</span>
              </div>
              <div className="text-[11px] pt-1 text-purple-400/60">
                เวลาตอบแชต: ทุกวัน 10:00 - 22:00 น.
              </div>
            </div>
          </div>

          {/* Col 4: Terms & Safety (Prompt Section 10) */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">ความปลอดภัยและข้อกำหนด</h4>
            <p className="text-[11px] leading-relaxed text-purple-300/70">
              เว็บไซต์นี้เป็นระบบต้นแบบจำลอง (Prototype) สำหรับการทดลองและพัฒนา ไม่มีนโยบายขอรหัสผ่านหรือ PIN 2FA บัญชี Roblox ของผู้ใช้เด็ดขาด
            </p>
            <div className="text-[11px] text-purple-400/60 leading-relaxed border-t border-purple-500/10 pt-2">
              Roblox เป็นเครื่องหมายการค้าจดทะเบียนของ Roblox Corporation ทางร้านไม่มีความเกี่ยวข้องโดยตรงกับ Roblox Corporation
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-purple-400/50">
          <div>
            © {new Date().getFullYear()} NEON SHOP. สงวนลิขสิทธิ์ · ออกแบบตามแนวคิดเรียบง่าย สะอาด ปลอดภัย สไตล์ม่วงดำ
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-purple-300 cursor-pointer">เงื่อนไขการให้บริการ</span>
            <span>·</span>
            <span className="hover:text-purple-300 cursor-pointer">นโยบายความเป็นส่วนตัว</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
