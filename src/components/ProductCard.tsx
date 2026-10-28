import React, { useState } from 'react';
import { Product } from '../types';
import { ShoppingBag, Eye, Trash2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onDelete?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
  onDelete
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="group flex flex-col bg-[#140E26] rounded-2xl border border-purple-500/20 overflow-hidden hover:border-purple-400/50 hover:shadow-[0_0_22px_rgba(168,85,247,0.18)] transition-all duration-300">
      
      {/* Product Image Slot */}
      <div
        onClick={() => onSelect(product)}
        className="relative w-full aspect-4/3 bg-[#0D091A] overflow-hidden cursor-pointer"
      >
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Fallback container */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-purple-950/50 to-[#0A0713] text-purple-300/60">
            <span className="text-xs font-semibold text-purple-300 mb-1">{product.categoryLabel}</span>
            <span className="text-[11px] text-purple-400/60 font-mono">{product.code}</span>
          </div>
        )}

        {/* Quiet Prototype Indicator Badge (Section 3.5: ห้ามถือเป็นสินค้าจริง ให้ใส่ป้ายตัวอย่าง) */}
        <div className="absolute top-2.5 left-2.5 bg-[#0A0713]/85 backdrop-blur-xs text-purple-200 border border-purple-500/30 text-[10px] font-medium px-2 py-0.5 rounded-md">
          ตัวอย่าง
        </div>

        {/* Top-right Badges & Delete */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
              ลด ฿{product.originalPrice - product.price}
            </div>
          )}

          {onDelete && (
            confirmDelete ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(product.id);
                }}
                className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md animate-in fade-in transition-colors cursor-pointer"
              >
                ยืนยันลบ?
              </button>
            ) : (
              <button
                type="button"
                title="ลบสินค้านี้"
                onClick={(e) => {
                  e.stopPropagation();
                  setConfirmDelete(true);
                  setTimeout(() => setConfirmDelete(false), 4000);
                }}
                className="p-1 rounded-md bg-[#0A0713]/80 hover:bg-red-600/90 text-purple-300 hover:text-white border border-purple-500/30 hover:border-red-500/50 transition-all cursor-pointer shadow-xs"
              >
                <Trash2 size={12} />
              </button>
            )
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
        
        {/* Unboxed Metadata (Zero-Pill Rule) */}
        <div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-purple-300/70 mb-1">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true" className="text-purple-600">·</span>
            <span className="font-mono text-purple-300/60">{product.code}</span>
          </div>

          <h3
            onClick={() => onSelect(product)}
            className="text-xs sm:text-sm font-semibold text-white line-clamp-2 hover:text-purple-300 cursor-pointer transition-colors"
            title={product.name}
          >
            {product.name}
          </h3>
        </div>

        {/* Price & Stock Status */}
        <div className="pt-2 border-t border-purple-500/20">
          <div className="flex items-baseline justify-between gap-1 mb-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-bold text-purple-400 tabular-nums drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
                ฿{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-purple-300/40 line-through tabular-nums">
                  ฿{product.originalPrice}
                </span>
              )}
            </div>

            {/* Availability Text */}
            <div className="text-[11px] font-medium">
              {product.isAvailable ? (
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                  พร้อมขาย
                </span>
              ) : (
                <span className="text-purple-400/40">
                  หมดแล้ว
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => onSelect(product)}
              className="w-full py-1.5 px-2 text-xs font-semibold text-purple-200 bg-[#1C1438] hover:bg-[#251A4C] border border-purple-500/30 rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <Eye size={13} className="shrink-0 text-purple-400" />
              <span>ดูข้อมูล</span>
            </button>

            <button
              onClick={() => {
                if (product.isAvailable) {
                  onAddToCart(product);
                }
              }}
              disabled={!product.isAvailable}
              className={`w-full py-1.5 px-2 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1 ${
                product.isAvailable
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-[0_0_12px_rgba(147,51,234,0.3)] active:scale-95 cursor-pointer'
                  : 'bg-purple-950/40 text-purple-400/30 border border-purple-900/30 cursor-not-allowed'
              }`}
            >
              <ShoppingBag size={13} className="shrink-0" />
              <span>{product.isAvailable ? 'สั่งซื้อ' : 'หมด'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
