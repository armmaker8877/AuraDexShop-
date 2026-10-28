import React, { useState } from 'react';
import { Product, Order, OrderStatus } from '../types';
import { X, CheckCircle, Clock, ShieldCheck, ToggleLeft, ToggleRight, RefreshCw, Plus, Package } from 'lucide-react';

interface AdminDemoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, newStatus: OrderStatus) => void;
  onToggleProductAvailability: (productId: string) => void;
  onResetDemoData: () => void;
}

export const AdminDemoDrawer: React.FC<AdminDemoDrawerProps> = ({
  isOpen,
  onClose,
  products,
  orders,
  onUpdateOrderStatus,
  onToggleProductAvailability,
  onResetDemoData
}) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-xs flex justify-end animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-xl bg-[#110D20] text-slate-100 h-full shadow-2xl flex flex-col justify-between border-l border-purple-500/30 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-purple-500/20 bg-[#0D091A] text-white flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold text-purple-400">ระบบจัดการหลังบ้านจำลอง (Shop Admin Panel)</div>
            <h2 className="text-base font-bold">NEON SHOP Management</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-purple-400 hover:text-white rounded-lg hover:bg-purple-900/30 transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-5 pt-3 pb-2 border-b border-purple-500/20 bg-[#0A0713] flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'orders'
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              รายการคำสั่งซื้อ ({orders.length})
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeTab === 'products'
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                  : 'text-purple-300/70 hover:text-white'
              }`}
            >
              จัดการสินค้าและสต็อก ({products.length})
            </button>
          </div>

          <button
            onClick={onResetDemoData}
            className="text-[11px] text-purple-400 hover:text-rose-400 flex items-center gap-1 transition-colors cursor-pointer"
            title="รีเซ็ตข้อมูลตัวอย่างกลับเป็นค่าเริ่มต้น"
          >
            <RefreshCw size={12} />
            <span>รีเซ็ตระบบ</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          
          {/* TAB 1: Orders Management */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <p className="text-xs text-purple-300/70">
                คุณสามารถจำลองการเปลี่ยนสถานะออเดอร์เพื่อทดสอบการแสดงผลบนหน้าติดตามของลูกค้าได้ทันที
              </p>

              {orders.length === 0 ? (
                <div className="p-8 text-center bg-[#181131] rounded-2xl border border-dashed border-purple-500/30 text-purple-300/60 text-xs">
                  ยังไม่มีคำสั่งซื้อเข้ามา ลองทำการสั่งซื้อสินค้าจากหน้าเว็บก่อน
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="p-4 bg-[#181131] border border-purple-500/20 rounded-xl space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-mono font-bold text-xs text-purple-300">
                          {order.orderId}
                        </span>
                        <div className="text-xs font-semibold text-white mt-0.5">
                          ลูกค้า: {order.customerName} ({order.contactPlatform}: {order.contactValue})
                        </div>
                        <div className="text-[11px] text-purple-300/60">
                          {new Date(order.createdAt).toLocaleTimeString('th-TH')} · รวม ฿{order.totalAmount}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#0D091A] border border-purple-500/30 text-purple-300">
                          {order.status}
                        </span>
                      </div>
                    </div>

                    {/* Change Status Buttons */}
                    <div className="pt-2 border-t border-purple-500/20">
                      <div className="text-[11px] text-purple-300/70 mb-1.5 font-medium">เปลี่ยนสถานะออเดอร์:</div>
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => onUpdateOrderStatus(order.orderId, 'pending_payment')}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                            order.status === 'pending_payment'
                              ? 'bg-amber-950/60 text-amber-300 border-amber-500/40 font-bold'
                              : 'bg-[#140E26] text-purple-300/70 border-purple-500/20 hover:bg-[#1E153B] hover:text-white'
                          }`}
                        >
                          รอชำระเงิน
                        </button>
                        <button
                          onClick={() => onUpdateOrderStatus(order.orderId, 'verifying')}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                            order.status === 'verifying'
                              ? 'bg-purple-950/80 text-purple-300 border-purple-400 font-bold'
                              : 'bg-[#140E26] text-purple-300/70 border-purple-500/20 hover:bg-[#1E153B] hover:text-white'
                          }`}
                        >
                          กำลังตรวจสลิป
                        </button>
                        <button
                          onClick={() => onUpdateOrderStatus(order.orderId, 'processing')}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                            order.status === 'processing'
                              ? 'bg-fuchsia-950/80 text-fuchsia-300 border-fuchsia-400 font-bold'
                              : 'bg-[#140E26] text-purple-300/70 border-purple-500/20 hover:bg-[#1E153B] hover:text-white'
                          }`}
                        >
                          กำลังจัดเตรียม
                        </button>
                        <button
                          onClick={() => onUpdateOrderStatus(order.orderId, 'completed')}
                          className={`px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-colors cursor-pointer ${
                            order.status === 'completed'
                              ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40 font-bold'
                              : 'bg-[#140E26] text-purple-300/70 border-purple-500/20 hover:bg-[#1E153B] hover:text-white'
                          }`}
                        >
                          จัดส่งสำเร็จ ✓
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: Products Stock Management */}
          {activeTab === 'products' && (
            <div className="space-y-3">
              <p className="text-xs text-purple-300/70">
                เปิด/ปิดสถานะความพร้อมจำหน่ายของสินค้า (พร้อมขาย vs หมดแล้ว) เพื่อทดสอบหน้าร้าน
              </p>

              {products.map((p) => (
                <div
                  key={p.id}
                  className="p-3 bg-[#181131] border border-purple-500/20 rounded-xl flex items-center justify-between gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-purple-400/70 font-mono">
                      {p.code} · {p.categoryLabel}
                    </div>
                    <div className="text-xs font-bold text-white truncate">
                      {p.name}
                    </div>
                    <div className="text-xs text-purple-400 font-semibold tabular-nums">
                      ฿{p.price}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => onToggleProductAvailability(p.id)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                        p.isAvailable
                          ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-900/40'
                          : 'bg-purple-950/40 text-purple-400/40 border border-purple-900/30'
                      }`}
                    >
                      <span>{p.isAvailable ? 'พร้อมขาย' : 'สินค้าหมด'}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-purple-500/20 bg-[#0D091A] flex items-center justify-between text-xs text-purple-300/60">
          <span>สำหรับเจ้าของร้านและผู้ทดลองระบบ</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1C1438] hover:bg-[#251A4C] text-purple-200 border border-purple-500/30 font-semibold rounded-xl text-xs transition-colors cursor-pointer"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
