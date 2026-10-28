import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ShieldCheck, Clock } from 'lucide-react';

interface HeaderProps {
  activeView: 'home' | 'all_products' | 'order_tracking';
  onNavigate: (view: 'home' | 'all_products' | 'order_tracking') => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAdmin: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenAdmin,
  searchTerm,
  onSearchChange,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleNavClick = (view: 'home' | 'all_products' | 'order_tracking', sectionId?: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 50);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0713]/90 backdrop-blur-md border-b border-purple-500/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left group"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.7)] group-hover:shadow-[0_0_26px_rgba(217,70,239,0.9)] group-hover:scale-105 transition-all shrink-0 bg-[#0A0713]">
              <img
                src="/assets/aistudio/1D76108E-D4F3-471D-98FD-500111040A4E_8446af98.png"
                alt="AURA DEX Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-fuchsia-200 to-indigo-200 group-hover:from-white group-hover:to-purple-200 transition-all whitespace-nowrap drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                AURA DEX
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-purple-200/70">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              activeView === 'home' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            หน้าแรก
          </button>
          <button
            onClick={() => handleNavClick('all_products')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              activeView === 'all_products' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            สินค้าทั้งหมด
          </button>
          <button
            onClick={() => handleNavClick('home', 'how-to-order')}
            className="whitespace-nowrap transition-colors hover:text-white"
          >
            วิธีสั่งซื้อ
          </button>
          <button
            onClick={() => handleNavClick('order_tracking')}
            className={`whitespace-nowrap transition-colors hover:text-white ${
              activeView === 'order_tracking' ? 'text-purple-400 font-semibold' : ''
            }`}
          >
            ตรวจสอบคำสั่งซื้อ
          </button>
          <button
            onClick={() => handleNavClick('home', 'faq-section')}
            className="whitespace-nowrap transition-colors hover:text-white"
          >
            คำถามที่พบบ่อย
          </button>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Quick Search Toggle / Input */}
          <div className="relative">
            {showSearchInput ? (
              <div className="flex items-center bg-[#140E26] border border-purple-500/30 rounded-xl px-2.5 py-1 text-sm w-44 sm:w-60 focus-within:border-purple-400 focus-within:ring-1 focus-within:ring-purple-400/30">
                <Search size={16} className="text-purple-400 shrink-0 mr-1.5" />
                <input
                  type="text"
                  placeholder="ค้นหาชื่อสินค้า..."
                  value={searchTerm}
                  onChange={(e) => {
                    onSearchChange(e.target.value);
                    if (activeView !== 'all_products') {
                      onNavigate('all_products');
                    }
                  }}
                  autoFocus
                  className="w-full bg-transparent border-none outline-none text-white text-xs sm:text-sm placeholder:text-purple-300/40"
                />
                <button
                  onClick={() => setShowSearchInput(false)}
                  className="text-purple-400 hover:text-white p-0.5 ml-1"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowSearchInput(true);
                  if (activeView !== 'all_products') {
                    onNavigate('all_products');
                  }
                }}
                className="p-2 text-purple-300 hover:text-white rounded-lg hover:bg-purple-900/30 transition-colors"
                aria-label="ค้นหา"
                title="ค้นหาสินค้า"
              >
                <Search size={19} />
              </button>
            )}
          </div>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center justify-center p-2 text-purple-200 hover:text-white hover:bg-purple-900/30 rounded-lg transition-colors"
            aria-label="ตะกร้าสินค้า"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Admin Demo Mode Button */}
          <button
            onClick={onOpenAdmin}
            className="hidden sm:inline-flex items-center text-xs text-purple-300 hover:text-white border border-purple-500/30 px-2.5 py-1.5 rounded-lg hover:bg-purple-900/30 transition-colors whitespace-nowrap"
            title="จัดการระบบ / ดูรายการออเดอร์"
          >
            จัดการร้าน
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-purple-200 hover:text-white hover:bg-purple-900/30 rounded-lg md:hidden transition-colors"
            aria-label="เมนูหลัก"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-purple-500/20 bg-[#0E0920] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 text-base font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeView === 'home' ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30 font-semibold' : 'text-slate-200 hover:bg-purple-900/20'
              }`}
            >
              หน้าแรก
            </button>
            <button
              onClick={() => handleNavClick('all_products')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeView === 'all_products' ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30 font-semibold' : 'text-slate-200 hover:bg-purple-900/20'
              }`}
            >
              สินค้าทั้งหมด
            </button>
            <button
              onClick={() => handleNavClick('order_tracking')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeView === 'order_tracking' ? 'bg-purple-950/60 text-purple-300 border border-purple-500/30 font-semibold' : 'text-slate-200 hover:bg-purple-900/20'
              }`}
            >
              ตรวจสอบคำสั่งซื้อ
            </button>
            <button
              onClick={() => handleNavClick('home', 'how-to-order')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-purple-900/20 transition-colors"
            >
              วิธีสั่งซื้อ
            </button>
            <button
              onClick={() => handleNavClick('home', 'faq-section')}
              className="text-left py-2 px-3 rounded-lg text-slate-200 hover:bg-purple-900/20 transition-colors"
            >
              คำถามที่พบบ่อย
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="text-left py-2 px-3 rounded-lg text-purple-300 hover:bg-purple-900/20 transition-colors border border-dashed border-purple-500/30 mt-2"
            >
              ⚙️ แผงควบคุมร้านค้า (Admin Panel)
            </button>
          </div>

          <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300/70">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-purple-400" /> บริการ 10:00 - 22:00 น.
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-400" /> ไม่ขอรหัสผ่าน Roblox
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
