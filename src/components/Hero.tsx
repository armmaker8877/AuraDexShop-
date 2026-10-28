import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Headphones } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onHowToOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onHowToOrder }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#130E26] via-[#0D091A] to-[#0A0713] border-b border-purple-500/20">
      {/* Blurred background ambient Aura banner & purple glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/assets/aistudio/78952F1D-8647-47A2-97A1-98C6EF270140_3169700c.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-35 filter blur-[6px] contrast-125 saturate-125 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0713] via-[#0A0713]/70 to-[#0A0713]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0713]/90 via-[#0A0713]/60 to-[#0A0713]/80" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context Notice - Anti-slop clean unboxed text */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400">
              <span className="tracking-wide uppercase text-[11px] font-black text-white drop-shadow-[0_0_14px_rgba(192,132,252,0.95)]">
                ROBLOX GAMING STORE
              </span>
              <span aria-hidden="true" className="text-purple-600">·</span>
              <span className="text-purple-300/80">ร้านค้าซื้อขายRoblox</span>
            </div>

            {/* Thai Headline with balanced line wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
              เลือกสินค้าที่ต้องการ <br className="hidden sm:inline" />
              และสั่งซื้อได้เลย
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-purple-100/90 max-w-xl leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              รวมสินค้า Roblox แยกหมวดหมู่ชัดเจน ดูราคาและรายละเอียดครบถ้วนก่อนตัดสินใจสั่งซื้อ 
              สั่งง่าย ตรวจสอบสถานะได้ ไม่ต้องสมัครสมาชิกซับซ้อน สอบถามได้ 24 ชั่วโมง
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>เลือกดูสินค้า</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onHowToOrder}
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#181131] hover:bg-[#231A45] text-purple-200 border border-purple-500/30 font-medium text-sm sm:text-base transition-colors cursor-pointer"
              >
                วิธีสั่งซื้อ
              </button>
            </div>

            {/* Trust Markers - Quiet unboxed inline layout */}
            <div className="pt-6 border-t border-purple-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-purple-200/70">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                <span className="text-purple-100">ปลอดภัย ไม่ขอรหัสผ่าน</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-purple-400 shrink-0" />
                <span className="text-purple-100">ส่งมอบผ่านระบบเกม / รหัส</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones size={16} className="text-fuchsia-400 shrink-0" />
                <span className="text-purple-100">บริการ 10:00 - 22:00 น.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Game Illustration Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-[#16102B] shadow-[0_0_30px_rgba(147,51,234,0.15)] aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
              {!imageError ? (
                <img
                  src="/src/assets/images/regenerated_image_1793137601214.png"
                  alt="AURA DEX Official Banner"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ) : null}

              {/* Styled Fallback Container if image fails or before load */}
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-purple-950 via-[#181131] to-[#0A0713]">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Zap size={24} />
                  </div>
                  <h3 className="font-bold text-white text-sm tracking-wide">AURA DEX DIGITAL</h3>
                  <p className="text-xs text-purple-300/70 mt-1 max-w-xs">
                    ร้านค้าเกม Roblox ที่เรียบง่าย สะอาด ปลอดภัย สไตล์ม่วงดำ Aura
                  </p>
                </div>
              )}

              {/* Official Aura Dex Floating Badge */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#0A0713]/85 backdrop-blur-xs border border-purple-400/50 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <img
                  src="/assets/aistudio/1D76108E-D4F3-471D-98FD-500111040A4E_8446af98.png"
                  alt="Aura Dex Logo"
                  className="w-4 h-4 rounded-full"
                />
                <span className="tracking-wide">AURA DEX OFFICIAL</span>
              </div>

              {/* Quiet overlay tag for prototype transparency */}
              <div className="absolute bottom-3 left-3 bg-[#0A0713]/85 backdrop-blur-xs border border-purple-500/30 text-purple-200 text-[11px] font-medium px-2.5 py-1 rounded-lg">
                ตัวอย่างหน้าแสดงสินค้า Roblox
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
