/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Product, ProductCategory, CartItem, Order, OrderStatus } from './types';
import { INITIAL_PRODUCTS } from './data/initialProducts';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryBar } from './components/CategoryBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { OrderInstructions } from './components/OrderInstructions';
import { ReviewsAndFAQ } from './components/ReviewsAndFAQ';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { OrderTrackingView } from './components/OrderTrackingView';
import { AllProductsView } from './components/AllProductsView';
import { AdminDemoDrawer } from './components/AdminDemoDrawer';
import { Footer } from './components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  // 1. Persistent State Management
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('auradex_products_v28') || localStorage.getItem('auradex_products_v27') || localStorage.getItem('auradex_products_v26') || localStorage.getItem('auradex_products_v25') || localStorage.getItem('auradex_products_v24') || localStorage.getItem('auradex_products_v23') || localStorage.getItem('auradex_products_v22') || localStorage.getItem('auradex_products_v21') || localStorage.getItem('auradex_products_v20') || localStorage.getItem('auradex_products_v19') || localStorage.getItem('auradex_products_v18') || localStorage.getItem('auradex_products_v17') || localStorage.getItem('auradex_products_v16') || localStorage.getItem('auradex_products_v15') || localStorage.getItem('auradex_products_v14') || localStorage.getItem('auradex_products_v13') || localStorage.getItem('auradex_products_v12') || localStorage.getItem('auradex_products_v11') || localStorage.getItem('auradex_products_v10') || localStorage.getItem('auradex_products_v9') || localStorage.getItem('auradex_products_v8') || localStorage.getItem('auradex_products_v7') || localStorage.getItem('auradex_products_v6') || localStorage.getItem('auradex_products_v5') || localStorage.getItem('auradex_products_v4') || localStorage.getItem('auradex_products_v3') || localStorage.getItem('auradex_products_v2') || localStorage.getItem('neon_products');
      if (saved) {
        const parsed: Product[] = JSON.parse(saved);
        const validIds = new Set(INITIAL_PRODUCTS.map((p) => p.id));
        const merged = parsed.filter((p) => validIds.has(p.id) && p.id !== 'prod-05' && p.id !== 'prod-hunt-03');
        for (const init of INITIAL_PRODUCTS) {
          const idx = merged.findIndex((p) => p.id === init.id);
          if (idx === -1) {
            merged.push(init);
          } else {
            merged[idx] = {
              ...merged[idx],
              image: init.image,
              gallery: init.gallery,
              price: init.price,
              originalPrice: init.originalPrice,
              ...(merged[idx].id.startsWith('prod-mm2-') || merged[idx].id.startsWith('prod-hunt-') ? {
                name: init.name,
                code: init.code,
                price: init.price,
                originalPrice: init.originalPrice,
                category: init.category,
                categoryLabel: init.categoryLabel,
                summary: init.summary,
                description: init.description,
                features: init.features,
                deliveryMethod: init.deliveryMethod,
                conditions: init.conditions,
                isFeatured: init.isFeatured,
                image: init.image,
                gallery: init.gallery
              } : {}),
              ...(merged[idx].id === 'prod-01' || merged[idx].name.includes('ตัวอย่างสินค้า A') ? {
                name: init.name,
                code: init.code,
                price: init.price,
                originalPrice: init.originalPrice,
                category: init.category,
                categoryLabel: init.categoryLabel,
                summary: init.summary,
                description: init.description,
                features: init.features,
                image: init.image,
                gallery: init.gallery
              } : {}),
              ...(merged[idx].id === 'prod-02' || merged[idx].id === 'prod-07' ? {
                name: init.name,
                code: init.code,
                price: init.price,
                originalPrice: init.originalPrice,
                category: init.category,
                categoryLabel: init.categoryLabel,
                summary: init.summary,
                description: init.description,
                features: init.features,
                deliveryMethod: init.deliveryMethod,
                conditions: init.conditions,
                isAvailable: init.isAvailable,
                isFeatured: init.isFeatured,
                stockCount: init.stockCount,
                image: init.image,
                gallery: init.gallery
              } : {})
            };
          }
        }
        return merged;
      }
      return INITIAL_PRODUCTS;
    } catch {
      return INITIAL_PRODUCTS;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('neon_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem('neon_orders');
      if (saved) return JSON.parse(saved);
      // Default demo order for immediate demonstration
      return [
        {
          orderId: 'AURA-20261026-1042',
          items: [
            {
              product: INITIAL_PRODUCTS[0],
              quantity: 1
            }
          ],
          totalAmount: 29,
          customerName: 'คุณเก้า (ตัวอย่าง)',
          contactPlatform: 'line',
          contactValue: '@kao_gamer',
          status: 'processing',
          createdAt: new Date().toISOString(),
          paymentMethod: 'promptpay_qr'
        }
      ];
    } catch {
      return [];
    }
  });

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('auradex_products_v28', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  useEffect(() => {
    try {
      localStorage.setItem('neon_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('neon_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // 2. Navigation & UI state
  const [activeView, setActiveView] = useState<'home' | 'all_products' | 'order_tracking'>('home');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modals
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<Order | null>(null);
  const [trackingOrderId, setTrackingOrderId] = useState<string>('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ProductCategory, number> = {
      all: products.length,
      featured: products.filter((p) => p.isFeatured).length,
      mm2: products.filter((p) => p.category === 'mm2').length,
      account: products.filter((p) => p.category === 'account').length,
      item: products.filter((p) => p.category === 'item').length,
      topup: products.filter((p) => p.category === 'topup').length
    };
    return counts;
  }, [products]);

  // Filtered products for homepage featured section
  const featuredProducts = useMemo(() => {
    return products.filter((p) => {
      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'featured') return p.isFeatured;
      return p.category === selectedCategory;
    });
  }, [products, selectedCategory]);

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stockCount) }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: Math.min(newQty, item.product.stockCount) } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleDirectOrder = (product: Product, quantity = 1) => {
    setSelectedProduct(null);
    setCart([{ product, quantity }]);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setIsCheckoutOpen(false);
    setConfirmedOrder(newOrder);
  };

  const handleTrackOrderFromConfirmation = (orderId: string) => {
    setConfirmedOrder(null);
    setTrackingOrderId(orderId);
    setActiveView('order_tracking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((o) => (o.orderId === orderId ? { ...o, status: newStatus } : o))
    );
  };

  const handleToggleProductAvailability = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === productId ? { ...p, isAvailable: !p.isAvailable } : p
      )
    );
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    if (selectedProduct?.id === productId) {
      setSelectedProduct(null);
    }
  };

  const handleResetDemoData = () => {
    setProducts(INITIAL_PRODUCTS);
    setCart([]);
    setOrders([
      {
        orderId: 'AURA-20261026-1042',
        items: [{ product: INITIAL_PRODUCTS[0], quantity: 1 }],
        totalAmount: 29,
        customerName: 'คุณเก้า (ตัวอย่าง)',
        contactPlatform: 'line',
        contactValue: '@kao_gamer',
        status: 'processing',
        createdAt: new Date().toISOString(),
        paymentMethod: 'promptpay_qr'
      }
    ]);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className="min-h-screen flex flex-col bg-[#0A0713] text-slate-100 bg-fixed bg-cover bg-top"
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(10, 7, 19, 0.90), rgba(10, 7, 19, 0.96)), url("/assets/aistudio/78952F1D-8647-47A2-97A1-98C6EF270140_3169700c.png")'
      }}
    >
      
      {/* 3.1 แถบประกาศ (Announcement Bar) */}
      <AnnouncementBar />

      {/* 3.2 Header / เมนูหลัก (Top Bar Contract: Zone 1, 2, 3) */}
      <Header
        activeView={activeView}
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onScrollToSection={scrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            {/* 3.3 Hero (ข้อความแนะนำร้าน) */}
            <Hero
              onExploreProducts={() => {
                scrollToSection('products-grid');
              }}
              onHowToOrder={() => {
                scrollToSection('how-to-order');
              }}
            />

            {/* 3.4 หมวดหมู่สินค้า (Category Chips) */}
            <div id="products-grid">
              <CategoryBar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                counts={categoryCounts}
              />
            </div>

            {/* 3.5 สินค้าแนะนำ (Featured Products Grid) */}
            <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
                <div>
                  <div className="text-xs font-semibold text-purple-400 tracking-wide mb-1 uppercase">
                    คอลเลกชันสินค้า
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedCategory === 'all'
                      ? 'สินค้าทั้งหมด'
                      : selectedCategory === 'featured'
                      ? 'สินค้าแนะนำ'
                      : selectedCategory === 'mm2'
                      ? 'MM2'
                      : selectedCategory === 'account'
                      ? 'Hunting Together'
                      : selectedCategory === 'item'
                      ? 'ไอเทม/บริการ'
                      : 'เติมเกม/บริการอื่น'}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm text-purple-300/70">
                    แสดงราคาจริง เงื่อนไข และสถานะพร้อมจำหน่าย (ใส่ป้ายตัวอย่างสำหรับการทดสอบระบบ)
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveView('all_products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors self-start sm:self-auto cursor-pointer"
                >
                  <span>ดูสินค้าทั้งหมดในระบบ</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Product Grid: Mobile 2 col, Tablet 3 col, Desktop 4 col */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                    onAddToCart={handleAddToCart}
                    onDelete={handleDeleteProduct}
                  />
                ))}
              </div>

              {/* Notice beneath grid */}
              <div className="mt-8 p-3.5 bg-[#140E26] border border-purple-500/20 rounded-xl text-center text-xs text-purple-300/70">
                หมายเหตุ: สินค้าข้างต้นเป็นข้อมูลตัวอย่างสำหรับทดลองระบบหน้าบ้าน (Prototype) 
                ไม่มีการตัดเงินจริง และไม่มีการขอรหัสผ่าน Roblox ของท่าน
              </div>
            </section>

            {/* 3.6 วิธีสั่งซื้อ 3 ขั้นตอน */}
            <OrderInstructions />

            {/* 3.7 รีวิวและความช่วยเหลือ (Reviews & FAQ) */}
            <ReviewsAndFAQ />
          </>
        )}

        {/* View: All Products View (Section 4.1) */}
        {activeView === 'all_products' && (
          <AllProductsView
            products={products}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onSelectProduct={setSelectedProduct}
            onAddToCart={handleAddToCart}
            onDelete={handleDeleteProduct}
          />
        )}

        {/* View: Order Tracking View (Section 4.3 & 5) */}
        {activeView === 'order_tracking' && (
          <OrderTrackingView
            orders={orders}
            initialOrderId={trackingOrderId}
            onBackToHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectProduct={(productId) => {
              const p = products.find((x) => x.id === productId);
              if (p) setSelectedProduct(p);
            }}
          />
        )}
      </main>

      {/* 3.8 Footer (4 กลุ่มข้อมูล) */}
      <Footer
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onScrollToSection={(id) => {
          setActiveView('home');
          setTimeout(() => scrollToSection(id), 50);
        }}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Product Detail Modal (PDP) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(p, qty) => {
            handleAddToCart(p, qty);
            setSelectedProduct(null);
          }}
          onDirectOrder={handleDirectOrder}
          onDelete={handleDeleteProduct}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
        onExploreProducts={() => {
          setActiveView('all_products');
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        onTrackOrder={handleTrackOrderFromConfirmation}
        onMarkPaid={(orderId) => {
          handleUpdateOrderStatus(orderId, 'verifying');
        }}
      />

      {/* Admin Demo Management Drawer */}
      <AdminDemoDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={products}
        orders={orders}
        onUpdateOrderStatus={handleUpdateOrderStatus}
        onToggleProductAvailability={handleToggleProductAvailability}
        onResetDemoData={handleResetDemoData}
      />

    </div>
  );
}
