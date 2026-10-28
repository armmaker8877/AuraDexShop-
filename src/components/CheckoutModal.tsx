import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import { X, ShieldCheck, ArrowRight, AlertTriangle } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: (order: Order) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess
}) => {
  const [customerName, setCustomerName] = useState('');
  const [contactPlatform, setContactPlatform] = useState<'line' | 'facebook' | 'phone'>('line');
  const [contactValue, setContactValue] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setErrorMessage('กรุณาระบุชื่อหรือชื่อเล่นสำหรับติดต่อ');
      return;
    }
    if (!contactValue.trim()) {
      setErrorMessage('กรุณาระบุช่องทางติดต่อ (เช่น ไอดี Line หรือเบอร์โทร)');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Generate unique order ID in format AURA-YYYYMMDD-XXXX
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `AURA-${dateStr}-${randomSuffix}`;

    const newOrder: Order = {
      orderId,
      items: [...cartItems],
      totalAmount,
      customerName: customerName.trim(),
      contactPlatform,
      contactValue: contactValue.trim(),
      notes: notes.trim() || undefined,
      status: 'pending_payment',
      createdAt: now.toISOString(),
      paymentMethod: 'promptpay_qr'
    };

    setTimeout(() => {
      setIsSubmitting(false);
      onOrderSuccess(newOrder);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div
        className="relative bg-[#110D20] text-slate-100 w-full max-w-lg rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-purple-500/20 bg-[#0D091A]">
          <div>
            <h3 className="text-base font-bold text-white">ตรวจสอบและส่งคำสั่งซื้อ</h3>
            <p className="text-xs text-purple-300/70">ตรวจสอบรายการและกรอกข้อมูลติดต่อสำหรับรับสินค้า</p>
          </div>
          <button
            onClick={onClose}
            className="text-purple-400 hover:text-white p-1 rounded-lg hover:bg-purple-900/30 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          
          {/* Order Items Preview */}
          <div className="p-3.5 bg-[#181131] rounded-xl border border-purple-500/20 space-y-2">
            <div className="text-xs font-semibold text-purple-300">รายการสินค้า ({cartItems.length}):</div>
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center text-xs">
                  <span className="text-purple-100 truncate pr-2">
                    {item.product.name} <span className="text-purple-400/60">x{item.quantity}</span>
                  </span>
                  <span className="font-semibold text-purple-300 tabular-nums shrink-0">
                    ฿{item.product.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-purple-500/20 flex justify-between items-center text-sm font-bold text-white">
              <span>ยอดรวมทั้งสิ้น</span>
              <span className="text-purple-400 text-base tabular-nums drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">฿{totalAmount}</span>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-purple-200 mb-1">
                ชื่อหรือชื่อเล่นของท่าน <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="เช่น กอล์ฟ, GamePro"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#1C1438] border border-purple-500/30 rounded-xl text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-purple-200 mb-1">
                ช่องทางติดต่อที่สะดวก <span className="text-rose-400">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {(['line', 'facebook', 'phone'] as const).map((platform) => (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => setContactPlatform(platform)}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all capitalize cursor-pointer ${
                      contactPlatform === platform
                        ? 'bg-gradient-to-r from-purple-700 to-fuchsia-700 border-purple-400 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                        : 'bg-[#181131] border-purple-500/20 text-purple-300/70 hover:bg-[#201742] hover:text-white'
                    }`}
                  >
                    {platform === 'line' ? 'Line ID' : platform === 'facebook' ? 'Facebook' : 'เบอร์โทร'}
                  </button>
                ))}
              </div>

              <input
                type="text"
                placeholder={
                  contactPlatform === 'line'
                    ? 'เช่น line_id หรือ @line'
                    : contactPlatform === 'facebook'
                    ? 'เช่น ชื่อ Facebook หรือลิงก์โปรไฟล์'
                    : 'เช่น 08x-xxx-xxxx'
                }
                value={contactValue}
                onChange={(e) => setContactValue(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#1C1438] border border-purple-500/30 rounded-xl text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-purple-200 mb-1">
                หมายเหตุเพิ่มเติม (ถ้ามี)
              </label>
              <input
                type="text"
                placeholder="เช่น สะดวกรับของช่วง 19:00 น."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#1C1438] border border-purple-500/30 rounded-xl text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400"
              />
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-purple-950/40 border border-purple-500/30 rounded-xl p-3 flex items-start gap-2 text-xs text-purple-200">
            <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">รับประกันความปลอดภัย: </span>
              ร้านเราจะไม่ถามรหัสผ่าน Roblox ของท่านเด็ดขาด ส่งมอบสินค้าผ่านระบบ Trade ในเกมหรือโค้ดดิจิทัลเท่านั้น
            </div>
          </div>

          {errorMessage && (
            <div className="p-2.5 rounded-lg bg-rose-950/50 text-rose-300 text-xs flex items-center gap-1.5 border border-rose-500/30">
              <AlertTriangle size={14} className="shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all flex items-center justify-center gap-2 disabled:bg-purple-950/40 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{isSubmitting ? 'กำลังบันทึกคำสั่งซื้อ...' : `ยืนยันส่งคำสั่งซื้อ (฿${totalAmount})`}</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-[11px] text-center text-purple-300/60 mt-2">
              หลังกดยืนยัน ท่านจะได้รับเลขอ้างอิงคำสั่งซื้อและ QR สำหรับชำระเงิน
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};
