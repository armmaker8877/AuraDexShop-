import React, { useState, useEffect } from 'react';
import { Order, OrderStatus } from '../types';
import { Search, Clock, CheckCircle2, AlertCircle, PackageCheck, Send, MessageSquare, ArrowLeft } from 'lucide-react';

interface OrderTrackingViewProps {
  orders: Order[];
  initialOrderId?: string;
  onBackToHome: () => void;
  onSelectProduct: (productId: string) => void;
}

export const OrderTrackingView: React.FC<OrderTrackingViewProps> = ({
  orders,
  initialOrderId,
  onBackToHome,
}) => {
  const [searchId, setSearchId] = useState(initialOrderId || '');
  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (initialOrderId) {
      const match = orders.find((o) => o.orderId.toLowerCase() === initialOrderId.toLowerCase());
      if (match) {
        setCurrentOrder(match);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } else if (orders.length > 0) {
      setCurrentOrder(orders[0]);
    }
  }, [initialOrderId, orders]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchId.trim().toLowerCase();
    if (!cleanQuery) return;

    const match = orders.find(
      (o) => o.orderId.toLowerCase() === cleanQuery || o.customerName.toLowerCase() === cleanQuery
    );

    if (match) {
      setCurrentOrder(match);
      setNotFound(false);
    } else {
      setCurrentOrder(null);
      setNotFound(true);
    }
  };

  const getStatusStep = (status: OrderStatus) => {
    switch (status) {
      case 'pending_payment':
        return 1;
      case 'verifying':
        return 2;
      case 'processing':
        return 3;
      case 'completed':
        return 4;
      case 'cancelled':
        return 0;
      default:
        return 1;
    }
  };

  const steps = [
    { step: 1, label: 'ส่งคำสั่งซื้อแล้ว', desc: 'ระบบบันทึกรายการ' },
    { step: 2, label: 'รอตรวจสอบยอดชำระ', desc: 'รอแอดมินยืนยันสลิป' },
    { step: 3, label: 'กำลังจัดเตรียมสินค้า', desc: 'เตรียมนัดหมาย/ส่งมอบ' },
    { step: 4, label: 'ส่งมอบสำเร็จ', desc: 'เสร็จสิ้นคำสั่งซื้อ' },
  ];

  return (
    <div className="min-h-[70vh] py-8 sm:py-12 bg-[#0A0713]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>กลับสู่หน้าแรก</span>
          </button>

          <span className="text-xs text-purple-300/60">
            ระบบติดตามคำสั่งซื้อ AURA DEX
          </span>
        </div>

        {/* Search Bar */}
        <div className="bg-[#140E26] p-5 rounded-2xl border border-purple-500/20 shadow-2xs space-y-3">
          <h1 className="text-xl font-bold text-white">
            ตรวจสอบสถานะคำสั่งซื้อ
          </h1>
          <p className="text-xs text-purple-300/70">
            กรอกเลขอ้างอิงคำสั่งซื้อ (เช่น AURA-20261026-XXXX) ที่ได้รับหลังการสั่งซื้อ
          </p>

          <form onSubmit={handleSearch} className="flex gap-2 pt-1">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                placeholder="ระบุเลขอ้างอิงคำสั่งซื้อ เช่น AURA-2026..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#1C1438] border border-purple-500/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400 font-mono text-white placeholder:text-purple-300/40"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 cursor-pointer"
            >
              ค้นหา
            </button>
          </form>

          {/* Quick Select from Recent Orders if any */}
          {orders.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-purple-400/60">รายการล่าสุดของคุณ:</span>
              {orders.slice(0, 3).map((o) => (
                <button
                  key={o.orderId}
                  onClick={() => {
                    setSearchId(o.orderId);
                    setCurrentOrder(o);
                    setNotFound(false);
                  }}
                  className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] transition-colors cursor-pointer ${
                    currentOrder?.orderId === o.orderId
                      ? 'bg-purple-900/60 border-purple-400 text-purple-200 font-bold shadow-[0_0_8px_rgba(168,85,247,0.3)]'
                      : 'bg-[#181131] border-purple-500/20 text-purple-300/70 hover:bg-[#201742] hover:text-white'
                  }`}
                >
                  {o.orderId}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Not Found Alert */}
        {notFound && (
          <div className="p-6 bg-[#140E26] rounded-2xl border border-rose-500/30 text-center space-y-2">
            <AlertCircle size={28} className="text-rose-400 mx-auto" />
            <h3 className="font-bold text-sm text-white">ไม่พบคำสั่งซื้อที่ระบุ</h3>
            <p className="text-xs text-purple-300/70 max-w-sm mx-auto">
              โปรดตรวจสอบความถูกต้องของเลขอ้างอิงคำสั่งซื้อ หรือติดต่อแอดมินทาง Discord / Line
            </p>
          </div>
        )}

        {/* Order Details Display */}
        {currentOrder && (
          <div className="bg-[#140E26] rounded-2xl border border-purple-500/20 shadow-2xs overflow-hidden space-y-6">
            
            {/* Header info */}
            <div className="p-5 sm:p-6 bg-[#0D091A] border-b border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-purple-300/70 flex items-center gap-2">
                  <span>เลขอ้างอิงคำสั่งซื้อ</span>
                  <span className="text-purple-600">·</span>
                  <span>{new Date(currentOrder.createdAt).toLocaleString('th-TH')}</span>
                </div>
                <div className="text-xl font-mono font-bold text-purple-300 mt-0.5">
                  {currentOrder.orderId}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-purple-300/70">ยอดรวมทั้งสิ้น</div>
                <div className="text-xl font-bold text-purple-400 tabular-nums drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                  ฿{currentOrder.totalAmount}
                </div>
              </div>
            </div>

            {/* Visual Status Stepper */}
            <div className="px-5 sm:px-6">
              <h3 className="text-xs font-bold text-white mb-4">
                สถานะการดำเนินการปัจจุบัน
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                {steps.map((st) => {
                  const currentStepNum = getStatusStep(currentOrder.status);
                  const isFinished = currentStepNum >= st.step;
                  const isCurrent = currentStepNum === st.step;

                  return (
                    <div
                      key={st.step}
                      className={`p-3.5 rounded-xl border transition-all ${
                        isCurrent
                          ? 'bg-purple-950/70 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                          : isFinished
                          ? 'bg-[#181131] border-emerald-500/40'
                          : 'bg-[#0D091A]/60 border-purple-500/10 opacity-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            isFinished
                              ? 'bg-emerald-500 text-white'
                              : isCurrent
                              ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_8px_rgba(168,85,247,0.5)]'
                              : 'bg-purple-950 text-purple-400/60 border border-purple-500/20'
                          }`}
                        >
                          {isFinished ? <CheckCircle2 size={14} /> : st.step}
                        </div>
                        <span
                          className={`text-xs font-bold ${
                            isCurrent
                              ? 'text-purple-300'
                              : isFinished
                              ? 'text-white'
                              : 'text-purple-400/60'
                          }`}
                        >
                          {st.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-purple-300/70 pl-8">{st.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Order Items & Customer Receipt */}
            <div className="px-5 sm:px-6 space-y-4">
              <h3 className="text-xs font-bold text-white">
                รายละเอียดสินค้าในคำสั่งซื้อ
              </h3>

              <div className="border border-purple-500/20 rounded-xl divide-y divide-purple-500/10 overflow-hidden bg-[#181131]">
                {currentOrder.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 sm:p-4 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-[#0D091A] overflow-hidden border border-purple-500/30 shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[11px] text-purple-400/70 font-mono">
                          {item.product.code}
                        </div>
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {item.product.name}
                        </h4>
                        <div className="text-xs text-purple-300/70">
                          จำนวน: {item.quantity} ชิ้น (ชิ้นละ ฿{item.product.price})
                        </div>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-purple-400 tabular-nums shrink-0">
                      ฿{item.product.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Customer Contact Card */}
              <div className="p-4 bg-[#181131] border border-purple-500/20 rounded-xl space-y-2 text-xs text-purple-300/70">
                <div className="font-bold text-white">ข้อมูลติดต่อสำหรับส่งมอบ:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>ผู้สั่งซื้อ: <span className="font-semibold text-purple-200">{currentOrder.customerName}</span></div>
                  <div>ช่องทาง: <span className="font-semibold text-purple-200 uppercase">{currentOrder.contactPlatform}</span> ({currentOrder.contactValue})</div>
                  {currentOrder.notes && (
                    <div className="sm:col-span-2">หมายเหตุ: <span className="text-purple-200">{currentOrder.notes}</span></div>
                  )}
                </div>
              </div>
            </div>

            {/* Support Actions Footer */}
            <div className="p-5 sm:p-6 bg-[#0D091A] border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-purple-300/70 flex items-center gap-2">
                <Clock size={16} className="text-purple-400 shrink-0" />
                <span>เวลาตอบแชต: 10:00 - 22:00 น. หากแอดมินยังไม่ตอบ กรุณารอสักครู่</span>
              </div>

              <a
                href={`https://discord.com`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-semibold rounded-xl shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all whitespace-nowrap cursor-pointer"
              >
                <MessageSquare size={14} />
                <span>ติดต่อแอดมินเพื่อรับของ</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
