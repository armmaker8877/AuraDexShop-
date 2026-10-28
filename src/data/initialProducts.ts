import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Aura Dex — คอลเลกชันสมุดสะสม Aura ครบเซ็ต (Sol\'s RNG / Roblox)',
    code: 'AURA-DEX-01',
    category: 'item',
    categoryLabel: 'ไอเทม/บริการ',
    price: 15,
    originalPrice: 39,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793137068636.png',
    summary: 'ปลดล็อกบันทึก Aura Dex ครบทุกระดับความแรร์ สวยงามพร้อมเอฟเฟกต์สะกดสายตา',
    description: 'บริการจัดเตรียมและปลดล็อกสมุดสะสม Aura Dex ใน Roblox รวบรวม Aura สวยงามตั้งแต่ระดับ Mythic, Exotic ไปจนถึงระดับสูงสุด แสงสีสะกดสายตาสไตล์ Gen Z ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN ของลูกค้าเด็ดขาด',
    features: [
      'ปลดล็อก Aura Dex สะสมครบเซ็ตระดับสูง',
      'เอฟเฟกต์แสงออร่ารอบตัวและคัตซีนสุดอลังการ',
      'ส่งมอบผ่านระบบเทรด/กิฟต์ หรือคำแนะนำอย่างปลอดภัย',
      'ไม่มีนโยบายขอรหัสผ่านหรือ PIN ของลูกค้าเด็ดขาด'
    ],
    deliveryMethod: 'นัดหมายส่งมอบผ่านระบบเทรด/กิฟต์ในเกม หรือแจ้งขั้นตอนปลดล็อกผ่านแชตโดยตรง',
    conditions: [
      'นัดหมายส่งมอบภายในเกมตามวันและเวลาที่ลูกค้าระบุ',
      'ตรวจสอบสมุดสะสม Aura Dex ทันทีหลังได้รับมอบ',
      'ไม่มีนโยบายขอรหัสผ่านหรือข้อมูลส่วนตัวใดๆ'
    ],
    stockCount: 15
  },
  {
    id: 'prod-02',
    name: '(ไอดี Hunting Together) (โจร) เลเวล99',
    code: 'HUNT-THIEF-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 59,
    originalPrice: 89,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137223697.png'
    ],
    summary: 'ไอดีสายโจร เลเวล 99 พร้อมสกิลและอุปกรณ์ครบชุด สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox สายโจร เลเวล 99 สำหรับ Hunting Together ปลดล็อกสกิลพร้อมเล่น ไอเทมและอุปกรณ์ครบ ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครสายโจร เลเวล 99 พร้อมลุย',
      'สกิลและอุปกรณ์ประจำตัวครบชุด',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ต้องยืนยันตัวตนและการรับมอบผ่านแชตกับแอดมินร้าน',
      'ตรวจสอบสินค้าก่อนเริ่มเล่น หากมีปัญหาแจ้งได้ใน 24 ชม.'
    ],
    stockCount: 8
  },
  {
    id: 'prod-03',
    name: 'ตัวอย่างสินค้า C (ไอเทม Blade Ball ดาบ Cyber Blade ลิมิเต็ด)',
    code: 'NEON-ITM-03',
    category: 'item',
    categoryLabel: 'ไอเทม/บริการ',
    price: 89,
    originalPrice: 120,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793066731989.png',
    summary: 'สกินดาบแสงนีออนหายาก มีเอฟเฟกต์เฉพาะเวลาฟันลูกบอล',
    description: 'ไอเทมดิจิทัลจำลองสำหรับ Blade Ball สกินระดับลิมิเต็ดอีเวนต์ ส่งมอบด้วยระบบแลกเปลี่ยน (Trade) ในเกมอย่างถูกต้อง ไม่ต้องกรอกรหัสผ่านเด็ดขาด',
    features: [
      'สกิน Cyber Blade มีเอฟเฟกต์แสงฟ้า-นีออน',
      'เสียงฟันเฉพาะตัวเวลาลูกบอลสปีดสูง',
      'เทรดได้โดยตรงผ่านห้อง Trade ภายในเกม',
      'ไม่ต้องแชร์รหัสผ่านหรือ PIN บัญชี'
    ],
    deliveryMethod: 'นัดหมายเข้าเซิร์ฟเวอร์ส่วนตัวของร้าน แล้วส่งมอบผ่านระบบ Trade ในเกม',
    conditions: [
      'ผู้ซื้อต้องมีเลเวลในเกมถึงเกณฑ์ที่ระบบเทรดอนุญาต',
      'นัดเวลากับเจ้าหน้าที่ร้านล่วงหน้า 10-15 นาที'
    ],
    stockCount: 5
  },
  {
    id: 'prod-04',
    name: 'ตัวอย่างสินค้า D (บริการฟาร์มมาสเตอรี่ King Legacy เลเวล 4000)',
    code: 'NEON-SRV-04',
    category: 'item',
    categoryLabel: 'ไอเทม/บริการ',
    price: 149,
    originalPrice: 199,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793097498281.jpg',
    summary: 'บริการช่วยฟาร์มแบบมืออาชีพ ด้วยเซิร์ฟเวอร์ส่วนตัว ปลอดภัย',
    description: 'บริการช่วยเหลือการเล่น King Legacy เพิ่มเลเวลมาสเตอรี่ดาบและผลปีศาจ ดำเนินการในเซิร์ฟเวอร์ VIP โดยผู้เล่นจริง ไม่ใช้บอทหรือสคริปต์เสี่ยงแบน',
    features: [
      'เพิ่มระดับมาสเตอรี่ดาบ/ผลจนถึงระดับ 4000',
      'ฟาร์มด้วยมือ 100% ไม่ใช้โปรแกรมช่วยเล่น',
      'เก็บแต้มผลและแร่คราฟต์ไอเทมส่งมอบคืนลูกค้า',
      'รายงานความคืบหน้าผ่านแชตทุก 1 ชั่วโมง'
    ],
    deliveryMethod: 'นัดหมายช่วงเวลาดำเนินการ และอัปเดตสถานะจนเสร็จสิ้น',
    conditions: [
      'ดำเนินการเฉพาะช่วงเวลาที่ลูกค้าไม่เข้าเล่นเกม',
      'ใช้ระบบความปลอดภัย 2FA ตามมาตรฐาน'
    ],
    stockCount: 3
  },
  {
    id: 'prod-06',
    name: 'ตัวอย่างสินค้า F (ผลปีศาจจำลอง Dragon Fruit สถิติเทพ)',
    code: 'NEON-ITM-06',
    category: 'item',
    categoryLabel: 'ไอเทม/บริการ',
    price: 189,
    originalPrice: 220,
    isAvailable: true,
    isFeatured: false,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793066743420.png',
    summary: 'ผลปีศาจระดับ Mythical ในคลังสำหรับส่งมอบในเกม',
    description: 'ผลปีศาจจำลองสำหรับทดสอบระบบร้านค้า ส่งมอบผ่านฟังก์ชัน Drop/Trade ในเซิร์ฟเวอร์ VIP ของทางร้านอย่างรวดเร็ว',
    features: [
      'ผลระดับ Mythical สกิลครบถ้วน',
      'ส่งมอบในเซิร์ฟเวอร์ VIP ปลอดภัย ไร้ผู้เล่นอื่นรบกวน',
      'มีเจ้าหน้าที่ดูแลขั้นตอนการรับผลตั้งแต่ต้นจนจบ',
      'ไม่ต้องให้รหัสผ่านเกม'
    ],
    deliveryMethod: 'ส่งลิงก์เซิร์ฟเวอร์ VIP นัดเวลาเข้าเก็บผล',
    conditions: [
      'ต้องนัดเวลาเก็บผลทันทีหลังชำระเงินเพื่อป้องกันผลหายจากเซิร์ฟเวอร์รีเซ็ต'
    ],
    stockCount: 4
  },
  {
    id: 'prod-07',
    name: '(ไอดี Hunting Together) (นักบวช) เลเวล99',
    code: 'HUNT-PRIEST-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 49,
    originalPrice: 79,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137226583.png'
    ],
    summary: 'ไอดีสายนักบวช เลเวล 99 พร้อมสกิลซัพพอร์ตและอุปกรณ์ครบชุด สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox สายนักบวช เลเวล 99 สำหรับ Hunting Together ปลดล็อกสกิลซัพพอร์ต บัฟ และฮีลเพื่อนร่วมทีม ไอเทมพร้อมเล่น ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครสายนักบวช เลเวล 99 พร้อมลุย',
      'สกิลซัพพอร์ตและอุปกรณ์ประจำตัวครบชุด',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ต้องยืนยันตัวตนและการรับมอบผ่านแชตกับแอดมินร้าน',
      'ตรวจสอบสินค้าก่อนเริ่มเล่น หากมีปัญหาแจ้งได้ใน 24 ชม.'
    ],
    stockCount: 8
  },
  {
    id: 'prod-08',
    name: 'ตัวอย่างสินค้า H (บริการช่วยลงเหรดบอส Raid Assist 5 รอบ)',
    code: 'NEON-SRV-08',
    category: 'item',
    categoryLabel: 'ไอเทม/บริการ',
    price: 69,
    isAvailable: true,
    isFeatured: false,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793066754420.png',
    summary: 'ทีมงานช่วยลงเหรดเก็บชิปและเศษผลปีศาจให้ครบ 5 รอบ',
    description: 'บริการพาทีมลงเหรดในเกม Blox Fruits ลูกค้านั่งดูหรือลงเล่นด้วยได้เลย ทีมงานเลเวลตันแบกจนผ่านทุกรอบ ได้รับชิปและผลสำเร็จแน่นอน',
    features: [
      'ลงเหรดครบ 5 รอบ รวดเร็ว ไม่เสียเวลา',
      'ลูกค้ารอรับรางวัลได้โดยไม่ต้องต่อสู้เอง',
      'ใช้เซิร์ฟเวอร์ส่วนตัว ลื่นไหล ไม่มีแล็ก',
      'เล่นด้วยกันในห้อง ไม่ต้องให้รหัสผ่าน'
    ],
    deliveryMethod: 'ส่งลิงก์ห้อง VIP แล้วเริ่มลงเหรดพร้อมกันตามนัดหมาย',
    conditions: [
      'ลูกค้าต้องเตรียมชิปเปิดเหรด หรือเลือกแพ็กเกจให้ทีมงานเปิดให้'
    ],
    stockCount: 10
  },
  {
    id: 'prod-mm2-01',
    name: 'MM2 — ไอดีไก่เงิน 5,000 Coins (Murder Mystery 2)',
    code: 'MM2-ACC-01',
    category: 'mm2',
    categoryLabel: 'MM2',
    price: 15,
    originalPrice: 45,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793096023995.png',
    summary: 'ไอดีพร้อมเล่น เงินในเกม 5,000 Coins ไอเทมครบ ตัวละครเยอะ พร้อมลุยทันที',
    description: 'ไอดีเกม Roblox แมป Murder Mystery 2 สายไก่เงิน 5,000 Coins ในบัญชี มีเหรียญในเกมพร้อมเปิดกล่องและสะสมไอเทม ตัวละครพร้อมเล่น ปลอดภัย 100% สไตล์ Hunt Together ไม่ต้องใช้ PIN',
    features: [
      'เงินในเกม 5,000 Coins ในคลังบัญชี',
      'ไอเทมครบ ตัวละครเยอะ พร้อมลุยทันที',
      'ส่งมอบข้อมูลไอดีทันที ปลอดภัย 100%',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลบัญชีเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ตรวจสอบยอดเงิน 5,000 Coins และไอเทมในบัญชีทันทีหลังได้รับมอบ',
      'เปลี่ยนรหัสผ่านทันทีหลังรับมอบเพื่อความปลอดภัย'
    ],
    stockCount: 15
  },
  {
    id: 'prod-mm2-02',
    name: 'MM2 — ไอดีไก่เงิน 10,000 Coins (Murder Mystery 2)',
    code: 'MM2-ACC-02',
    category: 'mm2',
    categoryLabel: 'MM2',
    price: 35,
    originalPrice: 55,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793066731989.png',
    summary: 'ไอดีพร้อมเล่น เงินในเกม 10,000 Coins ไอเทมครบ ตัวละครเยอะ พร้อมลุยทันที',
    description: 'ไอดีเกม Roblox แมป Murder Mystery 2 สายไก่เงิน 10,000 Coins ในบัญชี มีเหรียญในเกมพร้อมเปิดกล่องและสะสมไอเทม ตัวละครพร้อมเล่น ปลอดภัย 100% สไตล์ Hunt Together ไม่ต้องใช้ PIN',
    features: [
      'เงินในเกม 10,000 Coins ในคลังบัญชี',
      'ไอเทมครบ ตัวละครเยอะ พร้อมลุยทันที',
      'ส่งมอบข้อมูลไอดีทันที ปลอดภัย 100%',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลบัญชีเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ตรวจสอบยอดเงิน 10,000 Coins และไอเทมในบัญชีทันทีหลังได้รับมอบ',
      'เปลี่ยนรหัสผ่านทันทีหลังรับมอบเพื่อความปลอดภัย'
    ],
    stockCount: 15
  },
  {
    id: 'prod-mm2-03',
    name: 'MM2 — ไอดีไก่เงิน 20,000 Coins (Murder Mystery 2)',
    code: 'MM2-ACC-03',
    category: 'mm2',
    categoryLabel: 'MM2',
    price: 65,
    originalPrice: 99,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/assets/aistudio/C51EC342-44D3-4C40-9618-C3EEA3700456_693bda10.png',
    summary: 'ไอดีพร้อมเล่น เงินในเกม 20,000 Coins ไอเทมครบ ตัวละครเยอะ พร้อมลุยทันที',
    description: 'ไอดีเกม Roblox แมป Murder Mystery 2 สายไก่เงิน 20,000 Coins ในบัญชี มีเหรียญในเกมเยอะพร้อมเปิดกล่องและสะสมไอเทม ตัวละครพร้อมเล่น ปลอดภัย 100% สไตล์ Hunt Together ไม่ต้องใช้ PIN',
    features: [
      'เงินในเกม 20,000 Coins ในคลังบัญชี',
      'ไอเทมครบ ตัวละครเยอะ พร้อมลุยทันที',
      'ส่งมอบข้อมูลไอดีทันที ปลอดภัย 100%',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลบัญชีเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ตรวจสอบยอดเงิน 20,000 Coins และไอเทมในบัญชีทันทีหลังได้รับมอบ',
      'เปลี่ยนรหัสผ่านทันทีหลังรับมอบเพื่อความปลอดภัย'
    ],
    stockCount: 12
  },
  {
    id: 'prod-hunt-01',
    name: '(ไอดี Hunting Together) (นักดาบ) เลเวล99',
    code: 'HUNT-SWORD-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 49,
    originalPrice: 79,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137904198.png'
    ],
    summary: 'ไอดีสายนักดาบ เลเวล 99 พร้อมดาบเทพและอุปกรณ์ครบชุด สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox สายนักดาบ เลเวล 99 สำหรับ Hunting Together ดาบและสกิลฟันคอมโบพร้อมเล่น ไอเทมและอุปกรณ์ครบ ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครสายนักดาบ เลเวล 99 พร้อมลุย',
      'สกิลดาบและอุปกรณ์ประจำตัวครบชุด',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนอีเมลและรหัสผ่านเป็นของตนเองได้อิสระ'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการใช้งาน',
    conditions: [
      'ตรวจสอบข้อมูลเข้าสู่ระบบทันทีหลังรับมอบ',
      'เปลี่ยนรหัสผ่านเพื่อความปลอดภัยของบัญชี'
    ],
    stockCount: 10
  },
  {
    id: 'prod-hunt-02',
    name: '(ไอดี Hunting Together) (ธนู) เลเวล99',
    code: 'HUNT-ARCHER-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 59,
    originalPrice: 89,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137907938.png'
    ],
    summary: 'ไอดีสายนักธนู เลเวล 99 พร้อมธนูและสกิลโจมตีระยะไกล สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox สายนักธนู เลเวล 99 สำหรับ Hunting Together ปลดล็อกสกิลยิงธนูระยะไกล แม่นยำ ดาเมจแรง ไอเทมพร้อมเล่น ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครสายนักธนู เลเวล 99 พร้อมลุย',
      'สกิลธนูและอุปกรณ์ประจำตัวครบชุด',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ต้องยืนยันตัวตนและการรับมอบผ่านแชตกับแอดมินร้าน',
      'ตรวจสอบสินค้าก่อนเริ่มเล่น หากมีปัญหาแจ้งได้ใน 24 ชม.'
    ],
    stockCount: 8
  },
  {
    id: 'prod-hunt-04',
    name: '(ไอดี Hunting Together) (พ่อค้า) เลเวล99',
    code: 'HUNT-MCH-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 49,
    originalPrice: 79,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137914225.png'
    ],
    summary: 'ไอดีสายพ่อค้า เลเวล 99 คลังสินค้าแน่น เงินในเกมเยอะ พร้อมเทรด สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox สายพ่อค้า (Merchant) เลเวล 99 สำหรับ Hunting Together คลังเก็บของและเหรียญแน่น มีรถเข็นและสกิลการค้าขายในเกมครบ ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครสายพ่อค้า เลเวล 99 พร้อมลุย',
      'คลังไอเทมและสกิลการค้าขาย/เทรดในเกมครบเซ็ต',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ต้องยืนยันตัวตนและการรับมอบผ่านแชตกับแอดมินร้าน',
      'ตรวจสอบสินค้าก่อนเริ่มเล่น หากมีปัญหาแจ้งได้ใน 24 ชม.'
    ],
    stockCount: 7
  },
  {
    id: 'prod-hunt-05',
    name: '(ไอดีอาชีพพิเศษ Hunting Together) (Alchemist) เลเวล99',
    code: 'HUNT-ALCH-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 65,
    originalPrice: 99,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137916964.png'
    ],
    summary: 'ไอดีอาชีพพิเศษ นักเล่นแร่แปรธาตุ Alchemist เลเวล 99 ปรุงยาบัฟและสร้างไอเทมแรร์ สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox อาชีพพิเศษ นักเล่นแร่แปรธาตุ (Alchemist) เลเวล 99 สำหรับ Hunting Together ปลดล็อกสกิลปรุงยา บัฟพลังชีวิต และทรานส์มิวท์แร่ธาตุหายาก ไอเทมพร้อมเล่น ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครอาชีพพิเศษ Alchemist เลเวล 99 พร้อมลุย',
      'หม้อปรุงยาศักดิ์สิทธิ์และสูตรยาบัฟระดับสูงสุด',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ต้องยืนยันตัวตนและการรับมอบผ่านแชตกับแอดมินร้าน',
      'ตรวจสอบสินค้าก่อนเริ่มเล่น หากมีปัญหาแจ้งได้ใน 24 ชม.'
    ],
    stockCount: 8
  },
  {
    id: 'prod-hunt-06',
    name: '(ไอดี Hunting Together) (อาชีพพิเศษ) (Samurai) เลเวล99',
    code: 'HUNT-SAMURAI-99',
    category: 'account',
    categoryLabel: 'Hunting Together',
    price: 69,
    originalPrice: 99,
    isAvailable: true,
    isFeatured: true,
    isSample: true,
    image: '/src/assets/images/regenerated_image_1793134797586.png',
    gallery: [
      '/src/assets/images/regenerated_image_1793134797586.png',
      '/src/assets/images/regenerated_image_1793137920643.png'
    ],
    summary: 'ไอดีอาชีพพิเศษ ซามูไร Samurai เลเวล 99 ดาบคาตานะคู่ใจ เพลงดาบว่องไว สไตล์ Hunting Together',
    description: 'ไอดีเกม Roblox อาชีพพิเศษ ซามูไร (Samurai) เลเวล 99 สำหรับ Hunting Together ปลดล็อกสกิลดาบคู่และเพลงดาบคาตานะความเร็วสูง คอมโบฟันต่อเนื่อง ดาเมจคริติคอลจัดเต็ม ปลอดภัย 100% ไม่ขอรหัสผ่านหรือ PIN เดิมของลูกค้า',
    features: [
      'ตัวละครอาชีพพิเศษ Samurai เลเวล 99 พร้อมลุย',
      'ดาบคาตานะคู่ใจและสกิลเพลงดาบความเร็วสูง',
      'ระบบความปลอดภัย 100% ส่งมอบทันทีผ่านแชต',
      'เปลี่ยนรหัสผ่านและผูกอีเมลของตนเองได้ทันที'
    ],
    deliveryMethod: 'ส่งมอบข้อมูลเข้าสู่ระบบผ่านแชตโดยตรง พร้อมคำแนะนำการเปลี่ยนข้อมูล',
    conditions: [
      'ต้องยืนยันตัวตนและการรับมอบผ่านแชตกับแอดมินร้าน',
      'ตรวจสอบสินค้าก่อนเริ่มเล่น หากมีปัญหาแจ้งได้ใน 24 ชม.'
    ],
    stockCount: 8
  }
];
