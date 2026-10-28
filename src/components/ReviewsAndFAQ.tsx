import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';

export const ReviewsAndFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'สั่งซื้อแล้วจะได้รับสินค้าอย่างไรและใช้เวลานานเท่าใด?',
      a: 'สำหรับโค้ดดิจิทัลหรือบัตรของขวัญ จะได้รับโค้ดทันทีหลังจากตรวจสอบยอดชำระ สำหรับไอเทมหรือบริการในเกม แอดมินจะติดต่อกลับผ่าน Discord หรือ Line ID ที่ท่านระบุเพื่อนัดหมายเข้าเซิร์ฟเวอร์ VIP ภายใน 15-30 นาทีในเวลาทำการ (10:00 - 22:00 น.)'
    },
    {
      q: 'ทางร้านมีการขอรหัสผ่านหรือ PIN 2FA บัญชี Roblox หรือไม่?',
      a: 'ทางร้านไม่มีนโยบายขอรหัสผ่านหรือ PIN บัญชี Roblox ของลูกค้าโดยเด็ดขาด การส่งมอบไอเทมจะทำผ่านระบบแลกเปลี่ยน (Trade) หรือเข้าเซิร์ฟเวอร์ส่วนตัว VIP เท่านั้น หากมีผู้แอบอ้างขอรหัสผ่าน ห้ามให้โดยเด็ดขาด'
    },
    {
      q: 'หากสินค้าหมดสต็อกทำอย่างไร?',
      a: 'ท่านสามารถกดติดตามเพื่อรอสินค้าเติมรอบถัดไป หรือส่งข้อความสอบถามแอดมินทางช่องทางติดต่อได้โดยตรง ทางร้านจะเติมสินค้าตัวอย่างสม่ำเสมอ'
    },
    {
      q: 'หากคำสั่งซื้อมีปัญหาหรือล่าช้า ต้องแจ้งข้อมูลอะไรบ้าง?',
      a: 'โปรดเตรียม "เลขอ้างอิงคำสั่งซื้อ" (เช่น NEON-20261026-XXXX) พร้อมสลิปหรือหลักฐานการโอน และชื่อบัญชีผู้ติดต่อ แล้วส่งให้แอดมินในแชต ทีมงานจะตรวจสอบและเร่งดำเนินการให้ทันที'
    },
    {
      q: 'มีนโยบายการคืนเงินอย่างไร?',
      a: 'หากทางร้านไม่สามารถส่งมอบสินค้าได้ภายใน 24 ชั่วโมง หรือสินค้ามีข้อผิดพลาดจากการตรวจสอบของทางร้าน ยินดีคืนเงินเต็มจำนวน 100% ผ่านพร้อมเพย์เดิมที่ใช้โอน'
    }
  ];

  return (
    <section id="faq-section" className="py-12 sm:py-16 bg-[#0A0713] border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Subsection: Customer Reviews (Transparent & Honest - Prompt Section 3.7) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold text-purple-400 tracking-wide mb-1 uppercase">
              ความคิดเห็นและความน่าเชื่อถือ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              รีวิวจากลูกค้า
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-purple-300/70">
              เรายึดมั่นในความโปร่งใส ไม่แต่งรีวิวปลอม ไม่สร้างตัวเลขสถิติหลอกตา
            </p>
          </div>

          {/* Transparent Honest Empty/Verification State as mandated by Section 3.7 */}
          <div className="max-w-3xl mx-auto bg-[#140E26] border border-purple-500/20 rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
            <div className="w-12 h-12 rounded-full bg-purple-900/40 text-purple-300 flex items-center justify-center mx-auto border border-purple-500/30">
              <ShieldCheck size={24} />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">
                รีวิวจะปรากฏเมื่อมีรายการที่ตรวจสอบแล้วจากผู้ใช้งานจริง
              </h3>
              <p className="text-xs sm:text-sm text-purple-200/70 max-w-md mx-auto leading-relaxed">
                ระบบร้านค้าเวอร์ชันแรกนี้มุ่งเน้นความโปร่งใส โดยจะแสดงเฉพาะความคิดเห็นที่มีเลขอ้างอิงคำสั่งซื้อที่เสร็จสมบูรณ์เท่านั้น
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-purple-300/60 border-t border-purple-500/20">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                รีวิวจริง 100% ปลอดภัย
              </span>
              <span aria-hidden="true" className="text-purple-600">·</span>
              <span>ตรวจสอบสลิปทุกออเดอร์</span>
              <span aria-hidden="true" className="text-purple-600">·</span>
              <span>มีระบบติดตามคำสั่งซื้อ</span>
            </div>
          </div>
        </div>

        {/* Bottom Subsection: FAQs */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="text-xs font-semibold text-purple-400 tracking-wide mb-1 uppercase">
              ศูนย์ช่วยเหลือ
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-purple-300/70">
              ข้อสงสัยที่พบบ่อยเกี่ยวกับการสั่งซื้อ การจัดส่ง และความปลอดภัย
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-purple-500/20 rounded-xl overflow-hidden bg-[#140E26] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-purple-300 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-purple-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-fuchsia-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-purple-200/80 leading-relaxed border-t border-purple-500/20 pt-3 bg-[#0D091A]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Support Contact Info */}
          <div className="mt-8 text-center text-xs text-purple-300/70">
            <span>หากมีคำถามเพิ่มเติม? ติดต่อแอดมินร้านได้ที่ </span>
            <span className="font-semibold text-purple-300">Discord: @neonshop.support</span>
            <span> หรือ </span>
            <span className="font-semibold text-purple-300">Line: @neonshop</span>
          </div>
        </div>

      </div>
    </section>
  );
};
