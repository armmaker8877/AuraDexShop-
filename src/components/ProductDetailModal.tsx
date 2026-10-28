import React, { useState } from 'react';
import { Product } from '../types';
import { X, CheckCircle2, ShieldAlert, ShoppingBag, Send, Plus, Minus, MessageCircle, Trash2 } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onDirectOrder: (product: Product, quantity: number) => void;
  onDelete?: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onDirectOrder,
  onDelete
}) => {
  const [quantity, setQuantity] = useState(1);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');

  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) return null;

  const handleIncrement = () => {
    if (quantity < product.stockCount) {
      setQuantity((q) => q + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const currentImg = activeImage || product.image;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      <div
        className="relative bg-[#110D20] text-slate-100 w-full max-w-2xl rounded-2xl shadow-2xl border border-purple-500/30 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-purple-500/20 bg-[#0D091A]">
          <div className="flex items-center gap-2 text-xs text-purple-300/70">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true" className="text-purple-600">·</span>
            <span className="font-mono text-purple-300/60">{product.code}</span>
            <span aria-hidden="true" className="text-purple-600">·</span>
            <span className="text-fuchsia-400 font-medium">[ข้อมูลจำลองสำหรับทดสอบระบบ]</span>
          </div>
          <button
            onClick={onClose}
            className="text-purple-400 hover:text-white p-1 rounded-lg hover:bg-purple-900/40 transition-colors"
            aria-label="ปิดหน้ารายละเอียด"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Top Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
            
            {/* Image & Gallery */}
            <div className="sm:col-span-5 space-y-2.5">
              <div className="rounded-xl overflow-hidden border border-purple-500/30 aspect-4/3 sm:aspect-square bg-[#0D091A] relative shadow-md">
                <img
                  src={currentImg}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-opacity duration-200"
                />
                <div className="absolute top-2 left-2 bg-[#0A0713]/85 text-purple-200 border border-purple-500/30 text-[10px] px-2 py-0.5 rounded">
                  ตัวอย่าง
                </div>
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {product.gallery.map((imgUrl, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(imgUrl)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                        currentImg === imgUrl
                          ? 'border-purple-400 ring-2 ring-purple-500/40 scale-105'
                          : 'border-purple-500/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Core Details */}
            <div className="sm:col-span-7 space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {product.name}
              </h2>

              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                {product.summary}
              </p>

              {/* Price & Availability */}
              <div className="p-3 bg-[#181131] rounded-xl border border-purple-500/20 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-purple-300/60 mb-0.5">ราคาต่อหน่วย</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-purple-400 tabular-nums drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                      ฿{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-purple-300/40 line-through tabular-nums">
                        ฿{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-purple-300/60 mb-0.5">สถานะคลัง</div>
                  {product.isAvailable ? (
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1 justify-end">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                      พร้อมขาย ({product.stockCount} ชิ้น)
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-purple-400/40">
                      สินค้าหมดชั่วคราว
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity selector */}
              {product.isAvailable && (
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-medium text-purple-200">จำนวนที่ต้องการสั่งซื้อ:</span>
                  <div className="flex items-center border border-purple-500/30 rounded-xl bg-[#1C1438]">
                    <button
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                      className="p-1.5 text-purple-300 hover:text-white disabled:opacity-30"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-semibold tabular-nums text-white min-w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={handleIncrement}
                      disabled={quantity >= product.stockCount}
                      className="p-1.5 text-purple-300 hover:text-white disabled:opacity-30"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description & Detailed Features */}
          <div className="space-y-4 pt-2 border-t border-purple-500/20">
            <div>
              <h4 className="text-sm font-bold text-white mb-1.5">รายละเอียดสินค้า</h4>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-2">สิ่งที่จะได้รับในคำสั่งซื้อนี้</h4>
              <ul className="space-y-1.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-purple-200/90">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Method */}
            <div className="bg-purple-950/40 rounded-xl p-3.5 border border-purple-500/30">
              <h4 className="text-xs font-bold text-purple-300 mb-1">ขั้นตอนการส่งมอบสินค้า</h4>
              <p className="text-xs text-purple-200/90 leading-relaxed">
                {product.deliveryMethod}
              </p>
            </div>

            {/* Purchase Conditions & Warnings */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white">เงื่อนไขการสั่งซื้อ</h4>
              <ul className="list-disc pl-4 space-y-1 text-xs text-purple-300/80">
                {product.conditions.map((condition, idx) => (
                  <li key={idx}>{condition}</li>
                ))}
              </ul>
            </div>

            {/* Strict Roblox Security Warning (Prompt Section 10) */}
            <div className="rounded-xl p-3.5 bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-300">
                <ShieldAlert size={15} className="text-amber-400 shrink-0" />
                <span>ข้อควรระวังเพื่อความปลอดภัยสูงสุด</span>
              </div>
              <p className="text-amber-200/90 leading-relaxed text-[11px] sm:text-xs">
                NEON SHOP ไม่มีนโยบายขอรหัสผ่านหรือ 2FA Security PIN บัญชี Roblox ของท่านโดยเด็ดขาด 
                โปรดอย่าให้รหัสผ่านบัญชีหลักของท่านกับบุคคลใด
              </p>
            </div>

          </div>

          {/* Action Button Footer */}
          <div className="pt-4 border-t border-purple-500/20 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onAddToCart(product, quantity)}
              disabled={!product.isAvailable}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl border border-purple-500/40 text-purple-300 hover:bg-purple-900/30 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
            >
              <ShoppingBag size={16} />
              <span>ใส่ตะกร้า</span>
            </button>

            <button
              onClick={() => onDirectOrder(product, quantity)}
              disabled={!product.isAvailable}
              className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all flex items-center justify-center gap-2 disabled:bg-purple-950/40 disabled:cursor-not-allowed cursor-pointer"
            >
              <Send size={16} />
              <span>{product.isAvailable ? `สั่งซื้อทันที (฿${product.price * quantity})` : 'สินค้าหมด'}</span>
            </button>
          </div>

          {/* Support Link & Delete Action */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-purple-300/70 hover:text-purple-200 transition-colors"
            >
              <MessageCircle size={13} />
              <span>มีข้อสงสัยเกี่ยวกับสินค้านี้? ติดต่อสอบถามแอดมิน</span>
            </a>

            {onDelete && (
              confirmDelete ? (
                <button
                  type="button"
                  onClick={() => {
                    onDelete(product.id);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-white bg-red-600/30 hover:bg-red-600 border border-red-500/40 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                >
                  <Trash2 size={13} />
                  <span>ยืนยันลบสินค้าออกจากร้าน</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setConfirmDelete(true);
                    setTimeout(() => setConfirmDelete(false), 4000);
                  }}
                  className="inline-flex items-center gap-1 text-xs text-purple-400/70 hover:text-red-400 transition-colors cursor-pointer"
                >
                  <Trash2 size={13} />
                  <span>ลบสินค้านี้</span>
                </button>
              )
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
