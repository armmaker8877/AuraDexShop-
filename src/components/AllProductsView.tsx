import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, ArrowUpDown, Check, X, RotateCcw } from 'lucide-react';

interface AllProductsViewProps {
  products: Product[];
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onDelete?: (productId: string) => void;
}

export const AllProductsView: React.FC<AllProductsViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  searchTerm,
  onSearchChange,
  onSelectProduct,
  onAddToCart,
  onDelete
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'name'>('featured');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'featured', label: 'สินค้าแนะนำ' },
    { id: 'mm2', label: 'MM2' },
    { id: 'account', label: 'Hunting Together' }
  ];

  // Filtering & sorting logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory === 'featured' && !product.isFeatured) return false;
        if (selectedCategory !== 'all' && selectedCategory !== 'featured' && product.category !== selectedCategory) {
          return false;
        }

        // Search term filter
        if (searchTerm.trim()) {
          const q = searchTerm.toLowerCase();
          const matchName = product.name.toLowerCase().includes(q);
          const matchCode = product.code.toLowerCase().includes(q);
          const matchDesc = product.description.toLowerCase().includes(q);
          const matchCat = product.categoryLabel.toLowerCase().includes(q);
          if (!matchName && !matchCode && !matchDesc && !matchCat) return false;
        }

        // Availability filter
        if (onlyAvailable && !product.isAvailable) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price_asc') return a.price - b.price;
        if (sortBy === 'price_desc') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0; // default order
      });
  }, [products, selectedCategory, searchTerm, onlyAvailable, sortBy]);

  const handleResetFilters = () => {
    onSelectCategory('all');
    onSearchChange('');
    setOnlyAvailable(false);
    setSortBy('featured');
  };

  return (
    <div className="py-8 sm:py-12 bg-[#0A0713]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Page Title & Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              สินค้าทั้งหมด
            </h1>
            <p className="text-xs sm:text-sm text-purple-300/70 mt-0.5">
              ค้นหาและกรองไอเทม Roblox ตามหมวดหมู่และงบประมาณที่คุณต้องการ
            </p>
          </div>

          <div className="text-xs text-purple-300/70">
            พบ <span className="font-semibold text-purple-300 tabular-nums">{filteredProducts.length}</span> รายการ
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#140E26] p-4 rounded-2xl border border-purple-500/20 shadow-2xs space-y-3">
          
          {/* Search Row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-400" />
              <input
                type="text"
                placeholder="ค้นหาชื่อสินค้า รหัส หรือเกม..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-[#1C1438] border border-purple-500/30 rounded-xl text-white placeholder:text-purple-300/40 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:border-purple-400"
              />
              {searchTerm && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white p-1"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-[#181131] border border-purple-500/30 rounded-xl text-xs text-purple-200">
                <ArrowUpDown size={14} className="text-purple-400" />
                <span className="text-purple-300/60 whitespace-nowrap">เรียง:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent border-none outline-none font-medium text-white cursor-pointer [&>option]:bg-[#140E26] [&>option]:text-white"
                >
                  <option value="featured">แนะนำ (ค่าเริ่มต้น)</option>
                  <option value="price_asc">ราคา: ต่ำไปสูง</option>
                  <option value="price_desc">ราคา: สูงไปต่ำ</option>
                  <option value="name">ชื่อสินค้า (ก-ฮ)</option>
                </select>
              </div>

              {/* Only in-stock checkbox */}
              <button
                onClick={() => setOnlyAvailable(!onlyAvailable)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all whitespace-nowrap cursor-pointer ${
                  onlyAvailable
                    ? 'bg-purple-900/60 border-purple-400 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                    : 'bg-[#181131] border-purple-500/20 text-purple-300/70 hover:text-white'
                }`}
              >
                <div
                  className={`w-3.5 h-3.5 rounded flex items-center justify-center border text-[10px] ${
                    onlyAvailable ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 border-transparent text-white' : 'border-purple-500/40 bg-[#1C1438]'
                  }`}
                >
                  {onlyAvailable && <Check size={10} />}
                </div>
                <span>เฉพาะพร้อมขาย</span>
              </button>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                      : 'bg-[#181131] text-purple-200/80 hover:bg-[#201742] hover:text-white border border-purple-500/20'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Grid (Mobile: 2 col, Tablet: 3 col, Desktop: 4 col) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={onSelectProduct}
                onAddToCart={onAddToCart}
                onDelete={onDelete}
              />
            ))}
          </div>
        ) : (
          /* Empty State when no items match filters */
          <div className="bg-[#140E26] rounded-2xl border border-purple-500/20 p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center justify-center mx-auto">
              <Search size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">ไม่พบสินค้าที่ตรงกับเงื่อนไข</h3>
              <p className="text-xs text-purple-300/70 mt-1 max-w-sm mx-auto">
                ลองปรับคำค้นหา หรือเปลี่ยนตัวกรองหมวดหมู่เพื่อค้นหาไอเทมอื่น
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white text-xs font-semibold rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] cursor-pointer"
            >
              <RotateCcw size={14} />
              <span>ล้างตัวกรองทั้งหมด</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
