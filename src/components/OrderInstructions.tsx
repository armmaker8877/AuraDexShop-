import React from 'react';
import { Search, ShoppingCart, MessageSquare, Clock } from 'lucide-react';

export const OrderInstructions: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'เลือกสินค้าและอ่านรายละเอียด',
      desc: 'ตรวจสอบสเปก เงื่อนไขการจัดส่ง และสถานะความพร้อมของสินค้าก่อนตัดสินใจกดสั่งซื้อ',
      icon: Search
    },
    {
      num: '02',
      title: 'ตรวจสอบยอดรวมและส่งคำสั่งซื้อ',
      desc: 'กรอกช่องทางติดต่อที่ท่านสะดวก เช่น Discord หรือ Line ID เพื่อรับเลขอ้างอิงคำสั่งซื้อ (ไม่ต้องใช้รหัสผ่าน)',
      icon: ShoppingCart
    },
    {
      num: '03',
      title: 'ชำระเงินและแจ้งเลขอ้างอิงกับร้าน',
      desc: 'โอนผ่านระบบพร้อมเพย์และแจ้งเลขอ้างอิงคำสั่งซื้อกับทีมงานเพื่อรับมอบสินค้าในเกมหรือรับโค้ดดิจิทัล',
      icon: MessageSquare
    }
  ];

  return (
    <section id="how-to-order" className="py-12 sm:py-16 bg-[#0D091A] border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs font-semibold text-purple-400 tracking-wide mb-1 uppercase">
            ขั้นตอนการใช้บริการ
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            วิธีสั่งซื้อ 3 ขั้นตอนง่ายๆ
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-purple-300/70">
            สะดวก รวดเร็ว ปลอดภัย และโปร่งใส ไม่จำเป็นต้องสมัครสมาชิกก่อนสั่งซื้อ
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#140E26] rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/50 text-purple-300 flex items-center justify-center border border-purple-500/30">
                    <IconComponent size={20} />
                  </div>
                  <span className="text-xl font-extrabold text-purple-400/40 tabular-nums">
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support hours callout */}
        <div className="mt-8 bg-[#140E26] border border-purple-500/20 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-900/40 flex items-center justify-center text-purple-300 shrink-0 border border-purple-500/20">
              <Clock size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-white">เวลาให้บริการของทีมงานจัดส่ง</div>
              <div className="text-xs text-purple-300/70">เปิดให้บริการทุกวัน 10:00 - 22:00 น. (คำสั่งซื้อนอกเวลาจะส่งมอบในวันถัดไป)</div>
            </div>
          </div>
          <a
            href="#faq-section"
            className="text-xs font-semibold text-purple-400 hover:text-purple-300 whitespace-nowrap"
          >
            ดูคำถามที่พบบ่อย →
          </a>
        </div>

      </div>
    </section>
  );
};
