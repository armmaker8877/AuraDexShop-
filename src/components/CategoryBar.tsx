import React from 'react';
import { ProductCategory } from '../types';

interface CategoryBarProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  counts: Record<ProductCategory, number>;
}

export const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  onSelectCategory,
  counts
}) => {
  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'featured', label: 'สินค้าแนะนำ' },
    { id: 'mm2', label: 'MM2' },
    { id: 'account', label: 'Hunting Together' }
  ];

  return (
    <div className="w-full bg-[#0D091A] py-4 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal scroll container with no-scrollbar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mb-1">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = counts[cat.id] || 0;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_12px_rgba(168,85,247,0.4)] scale-[1.02]'
                    : 'bg-[#16102B] text-purple-200/80 hover:text-white border border-purple-500/20 hover:border-purple-400/50 hover:bg-[#1E153B]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                    isActive ? 'bg-white/20 text-white' : 'bg-purple-950/80 text-purple-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
