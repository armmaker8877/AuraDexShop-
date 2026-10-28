import React from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: () => void;
  onExploreProducts: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
  onExploreProducts
}) => {
  if (!isOpen) return null;

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-md bg-[#110D20] text-slate-100 h-full shadow-2xl flex flex-col justify-between border-l border-purple-500/30 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-500/20 flex items-center justify-between bg-[#0D091A]">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-purple-400" />
            <h2 className="text-base font-bold text-white">
              รายการในตะกร้า ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-purple-400 hover:text-white rounded-lg hover:bg-purple-900/30 transition-colors cursor-pointer"
            aria-label="ปิดตะกร้า"
          >
            <X size={18} />
          </button>
        </div>

        {/* Item List / Empty state */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-purple-950/50 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <ShoppingBag size={28} />
              </div>
              <h3 className="font-bold text-sm text-white">ตะกร้าของคุณยังว่างอยู่</h3>
              <p className="text-xs text-purple-300/70 max-w-xs">
                เลือกสินค้า Roblox ที่คุณสนใจ แล้วเพิ่มลงในตะกร้าเพื่อดำเนินการสั่งซื้อ
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExploreProducts();
                }}
                className="mt-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
              >
                เลือกดูสินค้าทันที
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="flex items-start gap-3 p-3 rounded-xl border border-purple-500/20 bg-[#181131] relative"
              >
                <div className="w-14 h-14 rounded-lg bg-[#0D091A] overflow-hidden border border-purple-500/30 shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 pr-6 space-y-1">
                  <div className="text-[11px] text-purple-300/60 flex items-center gap-1">
                    <span>{item.product.categoryLabel}</span>
                    <span>·</span>
                    <span className="font-mono text-purple-400/70">{item.product.code}</span>
                  </div>
                  <h4 className="text-xs font-bold text-white truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-xs font-bold text-purple-400 tabular-nums">
                    ฿{item.product.price}
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 pt-1">
                    <div className="flex items-center border border-purple-500/30 rounded-lg bg-[#1C1438]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 text-purple-300 hover:text-white"
                        title="ลดจำนวน"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2 text-xs font-semibold tabular-nums min-w-6 text-center text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        disabled={item.quantity >= item.product.stockCount}
                        className="p-1 text-purple-300 hover:text-white disabled:opacity-30"
                        title="เพิ่มจำนวน"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-[11px] text-purple-300/60 tabular-nums">
                      รวม ฿{item.product.price * item.quantity}
                    </span>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="absolute top-3 right-3 text-purple-400/60 hover:text-rose-400 p-1 transition-colors cursor-pointer"
                  aria-label="ลบรายการ"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-purple-500/20 bg-[#0D091A] space-y-3">
            <div className="space-y-1.5 text-xs text-purple-300/70">
              <div className="flex justify-between">
                <span>ราคารวมสินค้า</span>
                <span className="tabular-nums font-medium text-white">฿{totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>ค่าบริการจัดส่ง / เทรด</span>
                <span className="text-emerald-400 font-medium">ฟรี</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-purple-500/20">
                <span>ยอดชำระสุทธิ</span>
                <span className="text-base text-purple-400 tabular-nums drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">฿{totalAmount}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer"
            >
              <span>ดำเนินการสั่งซื้อ</span>
              <ArrowRight size={16} />
            </button>

            <p className="text-[11px] text-center text-purple-300/60">
              ชำระเงินผ่านพร้อมเพย์ ปลอดภัย ไม่ต้องกรอกรหัสผ่าน Roblox
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
