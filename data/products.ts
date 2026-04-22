export type ProductGroup = "bearings" | "filters";

export type ProductItem = {
  slug: string;
  group: ProductGroup;
  nameThEn: string;
  descriptionTh: string;
  samplePartNumbers: string[];
  brandHints: string[];
};

const bearingProducts: ProductItem[] = [
  { slug: "deep-groove-ball-bearing", group: "bearings", nameThEn: "Deep Groove Ball Bearing", descriptionTh: "ตลับลูกปืนเม็ดกลมร่องลึก ใช้แพร่หลายในมอเตอร์และเครื่องจักรทั่วไป", samplePartNumbers: ["NTN 6203", "NTN 6305"], brandHints: ["NTN", "NSK", "SKF"] },
  { slug: "angular-contact-ball-bearing", group: "bearings", nameThEn: "Angular Contact Ball Bearing", descriptionTh: "รองรับแรงแนวรัศมีและแนวแกน เหมาะกับความเร็วสูง", samplePartNumbers: ["NTN 7205", "NSK 7306"], brandHints: ["NTN", "NSK"] },
  { slug: "self-aligning-ball-bearing", group: "bearings", nameThEn: "Self-Aligning Ball Bearing", descriptionTh: "ปรับแนวได้เอง เหมาะกับเพลาที่โก่งตัว", samplePartNumbers: ["SKF 2205", "NTN 1206"], brandHints: ["SKF", "NTN"] },
  { slug: "cylindrical-roller-bearing", group: "bearings", nameThEn: "Cylindrical Roller Bearing", descriptionTh: "รับแรงรัศมีสูง งานโหลดหนัก", samplePartNumbers: ["NU 205", "NU 310"], brandHints: ["NTN", "SKF", "FAG"] },
  { slug: "tapered-roller-bearing", group: "bearings", nameThEn: "Tapered Roller Bearing", descriptionTh: "รับแรงรัศมีและแรงแกน ใช้ในรถยนต์/อุตสาหกรรม", samplePartNumbers: ["30205", "32210"], brandHints: ["NTN", "Timken"] },
  { slug: "spherical-roller-bearing", group: "bearings", nameThEn: "Spherical Roller Bearing", descriptionTh: "รับแรงหนักและปรับแนวได้เอง", samplePartNumbers: ["22212", "22310"], brandHints: ["SKF", "NTN"] },
  { slug: "thrust-bearing", group: "bearings", nameThEn: "Thrust Bearing", descriptionTh: "ออกแบบมารับแรงแนวแกนโดยเฉพาะ", samplePartNumbers: ["51107", "51208"], brandHints: ["NTN", "NSK"] },
  { slug: "needle-roller-bearing", group: "bearings", nameThEn: "Needle Roller Bearing", descriptionTh: "ขนาดกะทัดรัด พื้นที่จำกัดแต่รับแรงได้สูง", samplePartNumbers: ["NA4900", "HK1212"], brandHints: ["IKO", "NTN"] },
  { slug: "linear-motion-slide", group: "bearings", nameThEn: "Linear Motion / Slide", descriptionTh: "รางเลื่อน/ลูกปืนเชิงเส้น (CNC/Automation)", samplePartNumbers: ["LM20UU", "HGH20CA"], brandHints: ["THK", "HIWIN"] },
  { slug: "pillow-block-insert-unit", group: "bearings", nameThEn: "Pillow Block / Insert Unit", descriptionTh: "ชุดฐานพร้อมตลับลูกปืน ติดตั้งง่าย", samplePartNumbers: ["UCP205", "UCFL208"], brandHints: ["NTN", "FYH"] },
];

const filterProducts: ProductItem[] = [
  { slug: "oil-filter", group: "filters", nameThEn: "Oil Filter", descriptionTh: "ไส้กรองน้ำมันเครื่อง ยืดอายุการใช้งาน", samplePartNumbers: ["MANN W 962", "Donaldson P550008"], brandHints: ["MANN", "Donaldson", "Fleetguard"] },
  { slug: "air-filter", group: "filters", nameThEn: "Air Filter", descriptionTh: "ไส้กรองอากาศ สำหรับเครื่องยนต์/ระบบอัดอากาศ", samplePartNumbers: ["Donaldson P181038", "MANN C 25 114"], brandHints: ["Donaldson", "MANN"] },
  { slug: "hydraulic-filter", group: "filters", nameThEn: "Hydraulic Filter", descriptionTh: "สำหรับระบบไฮดรอลิก ป้องกันสิ่งแปลกปลอม", samplePartNumbers: ["Donaldson P565245", "Hydac 0660D010BN4HC"], brandHints: ["Donaldson", "Hydac"] },
  { slug: "fuel-filter", group: "filters", nameThEn: "Fuel Filter", descriptionTh: "ไส้กรองน้ำมันเชื้อเพลิง", samplePartNumbers: ["Fleetguard FF5052", "Donaldson P550588"], brandHints: ["Fleetguard", "Donaldson"] },
  { slug: "coolant-filter", group: "filters", nameThEn: "Coolant Filter", descriptionTh: "ไส้กรองน้ำหล่อเย็น", samplePartNumbers: ["Fleetguard WF2071", "Donaldson P554685"], brandHints: ["Fleetguard", "Donaldson"] },
  { slug: "cabin-ac-filter", group: "filters", nameThEn: "Cabin / AC Filter", descriptionTh: "ไส้กรองอากาศภายในห้องโดยสาร", samplePartNumbers: ["MANN CU 2939", "MANN CUK 2939"], brandHints: ["MANN"] },
  { slug: "dust-collector-industrial-filter", group: "filters", nameThEn: "Dust Collector / Industrial Filter", descriptionTh: "สำหรับระบบดูดฝุ่น/อุตสาหกรรม", samplePartNumbers: ["Donaldson Torit P190818", "MANN LE 13 009"], brandHints: ["Donaldson", "MANN"] },
  { slug: "compressor-filter", group: "filters", nameThEn: "Compressor Filter", descriptionTh: "ไส้กรองสำหรับระบบอัดอากาศ", samplePartNumbers: ["MANN C 20 500", "Donaldson P785373"], brandHints: ["MANN", "Donaldson"] },
];

export const products: ProductItem[] = [...bearingProducts, ...filterProducts];

export const productsByGroup: Record<ProductGroup, ProductItem[]> = {
  bearings: bearingProducts,
  filters: filterProducts,
};

export function findProductBySlug(slug: string): ProductItem | undefined {
  return products.find((p) => p.slug === slug);
}
