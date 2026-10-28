import React, { useState } from 'react';
import { Order } from '../types';
import { CheckCircle2, Copy, Check, QrCode, ArrowRight, MessageSquare, Clock } from 'lucide-react';

interface OrderConfirmationModalProps {
  order: Order | null;
  onClose: () => void;
  onTrackOrder: (orderId: string) => void;
  onMarkPaid?: (orderId: string) => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  onTrackOrder,
  onMarkPaid
}) => {
  const [copied, setCopied] = useState(false);
  const [isSimulatingPayment, setIsSimulatingPayment] = useState(false);
  const [hasSimulatedPayment, setHasSimulatedPayment] = useState(false);

  if (!order) return null;

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatePaymentNotice = () => {
    setIsSimulatingPayment(true);
    setTimeout(() => {
      setIsSimulatingPayment(false);
      setHasSimulatedPayment(true);
      if (onMarkPaid) {
        onMarkPaid(order.orderId);
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div
        className="relative bg-[#110D20] text-slate-100 w-full max-w-lg rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Header */}
        <div className="p-6 text-center bg-gradient-to-b from-[#1E133A] to-[#110D20] border-b border-purple-500/20 space-y-2">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-[0_0_15px_rgba(16,185,129,0.4)]">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            ส่งคำสั่งซื้อสำเร็จเรียบร้อย!
          </h3>
          <p className="text-xs text-purple-300/70">
            โปรดบันทึกเลขอ้างอิงคำสั่งซื้อ และชำระเงินตามยอดด้านล่าง
          </p>

          {/* Order ID Box */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <div className="bg-[#0D091A] border border-purple-500/40 px-3.5 py-1.5 rounded-xl font-mono font-bold text-purple-400 text-sm sm:text-base shadow-[0_0_12px_rgba(168,85,247,0.25)]">
              {order.orderId}
            </div>
            <button
              onClick={handleCopyOrderId}
              className="p-2 bg-[#1C1438] border border-purple-500/30 text-purple-300 hover:text-white rounded-xl transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer"
              title="คัดลอกเลขอ้างอิง"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอก'}</span>
            </button>
          </div>
        </div>

        {/* Payment & Next Steps Details */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          
          {/* PromptPay QR Mock Card */}
          <div className="bg-[#181131] border border-purple-500/20 rounded-2xl p-4 sm:p-5 text-center space-y-3">
            <div className="flex items-center justify-between text-xs text-purple-300/70 pb-2 border-b border-purple-500/20">
              <span className="font-semibold text-purple-200">พร้อมเพย์ (PromptPay QR)</span>
              <span>ตรวจยอดโดยแอดมิน</span>
            </div>

            {/* Stylized QR Frame */}
            <div className="w-44 h-44 mx-auto bg-[#0D091A] p-3 rounded-2xl border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)] flex flex-col items-center justify-center relative">
              {/* QR Pattern Representation */}
              <div className="w-full h-full bg-[#181131] rounded-xl p-2 flex flex-col justify-between items-center text-white relative overflow-hidden border border-purple-500/20">
                <div className="w-full flex justify-between">
                  <div className="w-8 h-8 border-4 border-purple-400 bg-[#0D091A] rounded" />
                  <div className="w-8 h-8 border-4 border-purple-400 bg-[#0D091A] rounded" />
                </div>
                <div className="text-center font-extrabold text-[10px] tracking-widest text-fuchsia-400">
                  THAI PROMPTPAY
                </div>
                <div className="w-full flex justify-between items-end">
                  <div className="w-8 h-8 border-4 border-purple-400 bg-[#0D091A] rounded" />
                  <div className="text-[9px] text-purple-300 font-mono">฿{order.totalAmount}</div>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-purple-300/70">ยอดเงินที่ต้องชำระ</div>
              <div className="text-2xl font-bold text-purple-400 tabular-nums drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                ฿{order.totalAmount}.00
              </div>
              <div className="text-[11px] text-purple-300/60">
                ระบุบันทึกช่วยจำ (Memo): <span className="font-mono font-semibold text-purple-300">{order.orderId}</span>
              </div>
            </div>
          </div>

          {/* Steps after payment */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white">ขั้นตอนถัดไป</h4>
            <div className="space-y-2 text-xs text-purple-200/80">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-200 font-bold flex items-center justify-center shrink-0 text-[11px] border border-purple-500/30">1</span>
                <span>แคปสลิปการโอนเงิน หรือบันทึกเวลาที่โอน</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-200 font-bold flex items-center justify-center shrink-0 text-[11px] border border-purple-500/30">2</span>
                <span>ส่งเลขอ้างอิง <b className="text-purple-300">{order.orderId}</b> ให้แอดมินทาง {order.contactPlatform === 'line' ? 'Line (@auradex)' : order.contactPlatform === 'facebook' ? 'Facebook (AURA DEX TH)' : 'ช่องทางที่ระบุ'}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-purple-900/60 text-purple-200 font-bold flex items-center justify-center shrink-0 text-[11px] border border-purple-500/30">3</span>
                <span>แอดมินจะตรวจสอบยอด และส่งมอบไอเทม/โค้ดให้ตามช่องทางที่ระบุ</span>
              </div>
            </div>
          </div>

          {/* Support hours note */}
          <div className="flex items-center gap-2 p-3 bg-purple-950/30 border border-purple-500/20 rounded-xl text-xs text-purple-300/80">
            <Clock size={15} className="text-purple-400 shrink-0" />
            <span>เวลาให้บริการ: ทุกวัน 10:00 - 22:00 น. (คำสั่งซื้อจะเริ่มดำเนินการทันทีตามคิว)</span>
          </div>

          {/* Prototype simulated payment action */}
          <div className="pt-2 border-t border-purple-500/20 space-y-2">
            {!hasSimulatedPayment ? (
              <button
                onClick={handleSimulatePaymentNotice}
                disabled={isSimulatingPayment}
                className="w-full py-2.5 px-3 rounded-xl bg-[#1C1438] hover:bg-[#251A4C] text-purple-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 border border-purple-500/30 cursor-pointer"
              >
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>{isSimulatingPayment ? 'กำลังส่งข้อมูลแจ้งโอน...' : 'กดแจ้งชำระเงินจำลอง (ทดสอบระบบ)'}</span>
              </button>
            ) : (
              <div className="p-2.5 bg-emerald-950/40 text-emerald-300 rounded-xl text-xs text-center border border-emerald-500/30 font-medium">
                ✓ บันทึกการแจ้งชำระเงินจำลองแล้ว! ทีมงานกำลังรอตรวจสอบ
              </div>
            )}

            <button
              onClick={() => {
                onClose();
                onTrackOrder(order.orderId);
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>ไปที่หน้าติดตามคำสั่งซื้อ</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
